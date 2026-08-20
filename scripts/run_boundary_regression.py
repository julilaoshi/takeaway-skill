#!/usr/bin/env python3
"""Run the public Takeaway boundary cases without reading private workspaces."""

from __future__ import annotations

import json
from pathlib import Path
import sys


DENY_DECISIONS = {"unreviewed", "archive_only", "blocked", "revoked"}
SCOPES = {"none", "task", "project", "global"}


def load_cases(path: Path) -> list[dict]:
    cases: list[dict] = []
    for line_number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if not line.strip():
            continue
        try:
            cases.append(json.loads(line))
        except json.JSONDecodeError as exc:
            raise ValueError(f"{path}:{line_number}: invalid JSON: {exc}") from exc
    return cases


def expected_reuse(case: dict) -> bool:
    if case.get("asset_state") != "formal":
        return False
    if case.get("decision") in DENY_DECISIONS:
        return False
    if case.get("decision") != "approved":
        return False
    if case.get("scope") not in {"task", "project", "global"}:
        return False
    if case.get("scope_matches") is not True:
        return False
    if case.get("expired") is True:
        return False
    if case.get("scope") == "global" and case.get("global_confirmation") is not True:
        return False
    return True


def check_policy(root: Path) -> list[str]:
    errors: list[str] = []
    skill = (root / "skill/SKILL.md").read_text(encoding="utf-8")
    output = (root / "references/output_template.md").read_text(encoding="utf-8")
    approval = (root / "references/approval_and_reuse.md").read_text(encoding="utf-8")
    required = {
        "version": "# Takeaway Skill v2.1",
        "capture boundary": "Capturing a pattern is not permission to reuse it.",
        "unreviewed": "unreviewed",
        "scope gate": "requested scope matches",
        "public demo boundary": "non-authoritative",
    }
    for label, marker in required.items():
        if marker not in skill and marker not in approval:
            errors.append(f"missing policy marker: {label}: {marker}")
    for marker in ("asset state:", "reuse decision:", "approved scope:"):
        if marker not in output:
            errors.append(f"output template missing governance field: {marker}")
    return errors


def check_cases(cases: list[dict]) -> list[str]:
    errors: list[str] = []
    seen: set[str] = set()
    for case in cases:
        case_id = case.get("id")
        if not case_id:
            errors.append("case missing id")
            continue
        if case_id in seen:
            errors.append(f"duplicate case id: {case_id}")
        seen.add(case_id)
        if case.get("scope") not in SCOPES:
            errors.append(f"{case_id}: invalid scope")
        if case.get("writer_sees_external_text") is not False:
            errors.append(f"{case_id}: writer isolation failed")
        actual = case.get("expected_reuse")
        if actual is not expected_reuse(case):
            errors.append(f"{case_id}: expected_reuse does not match resolver gate")
    return errors


def main() -> int:
    root = Path(__file__).resolve().parents[1]
    try:
        cases = load_cases(root / "tests/boundary_cases.jsonl")
        errors = check_policy(root) + check_cases(cases)
    except (OSError, ValueError) as exc:
        print(f"# Public Takeaway boundary regression: ERROR\n- {exc}")
        return 2
    if errors:
        print("# Public Takeaway boundary regression: FAIL")
        for error in errors:
            print(f"- {error}")
        return 1
    print("# Public Takeaway boundary regression: PASS")
    print(f"- cases: {len(cases)}")
    print("- default-deny and scope checks: enabled")
    print("- writer receives external full text: 0")
    print("- note: policy regression only; it does not judge prose quality")
    return 0


if __name__ == "__main__":
    sys.exit(main())
