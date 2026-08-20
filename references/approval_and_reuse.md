# Approval and reuse contract

This reference defines a public, implementation-neutral governance model. It is a contract for reasoning, not a private database or authorization service.

## Two independent axes

Every candidate has:

- `asset_state`: `source_only | inbox | formal | archived`;
- `reuse.decision`: `unreviewed | approved | archive_only | blocked | revoked`.

`formal` means that a candidate is ready to be reviewed. It does not mean that it is approved for reuse.

## Author actions

- `task`: one current task or one short-lived use;
- `project`: only the named project scope;
- `global`: cross-project reuse, always with a second confirmation;
- `archive_only`: retain for study but never send downstream;
- `blocked`: explicitly forbid reuse;
- `revoke`: remove a previous approval from the next lookup onward without deleting its history.

## What counts as approval

Explicit approval may be recorded when the author:

1. says that this candidate should be used in the current task;
2. confirms a review batch and states that it represents their decision;
3. names a project or global scope and completes the required confirmation.

These are not approvals:

- asking to distill, save, or catalogue something;
- a candidate being visible in a gallery;
- an AI recommendation;
- a previous use that has no traceable event;
- a candidate being marked `formal` or `active`.

## Resolver gate

Only return a candidate when all of the following are true:

```text
asset_state = formal
AND reuse.decision = approved
AND requested_scope matches
AND not expired
AND not revoked
```

Missing or ambiguous fields must fail closed. The caller should receive a stable reason such as `UNREVIEWED`, `SCOPE_MISMATCH`, `EXPIRED`, or `REVOKED` rather than an invented fallback.

## Public demo rule

A static public page may let a reader select synthetic records and copy a review-batch JSON. The page must say that the batch is unsynchronized and non-authoritative. It must not write a private registry, contact a server, or imply that a browser checkbox is a durable approval.
