# Boundary regression and trace contract

Technical success, policy success, and author confirmation are different outcomes.

## Three evidence layers

1. **Technical PASS**: the schema, page, script, or link works.
2. **Policy PASS**: default-deny, scope matching, expiry, and revocation behave correctly.
3. **Author confirmation**: the author explicitly decides whether reuse is wanted.

No technical or policy PASS can substitute for author confirmation.

## Minimum regression cases

- a new reference remains `unreviewed`;
- `formal + unreviewed` is denied;
- a project approval fails in another project;
- global approval requires a second confirmation;
- `archive_only`, `blocked`, `revoked`, and expired candidates are denied;
- a source-only candidate cannot be handed off;
- a writing handoff never receives external full text;
- a public demo batch is labelled unsynchronized.

Keep these cases in a small JSONL table and run them in isolation. Tests should not read private folders, browser profiles, cookies, or network services.

## Delivery disclosure

Every downstream delivery should state either:

```text
Used approved public-safe candidates: [IDs]
```

or:

```text
No approved distilled assets used.
```

If the history is incomplete, say so instead of reconstructing an invented usage trail.
