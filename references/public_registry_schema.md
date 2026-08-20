# Public-safe registry shape

This is a minimal schema for examples, tests, or a future implementation. It deliberately contains no local paths, private IDs, private source archives, or user-specific consumers.

## Candidate record

```json
{
  "id": "PUB-WEB-001",
  "title": "Anonymous mechanism example",
  "summary": "One-line description of the transferable mechanism",
  "target_layer": "structure",
  "asset_state": "formal",
  "classification": {
    "primary": "web_interface",
    "facets": ["reveal"],
    "status": "author_confirmed"
  },
  "evidence_confidence": "medium",
  "originality_distance": "far",
  "source": {
    "kind": "anonymous_public_reference",
    "locator": "not stored in this demo"
  },
  "reuse": {
    "decision": "unreviewed",
    "scope": "none",
    "project_ids": [],
    "expires_at": null,
    "revoked": false
  },
  "skill_promotion": "not_requested"
}
```

## Classification

`classification.primary` is one mutually exclusive category. `facets` may overlap and must not be added together for the total count. Missing or uncertain evidence is `unknown`; never infer a category from a title alone.

## Review batch

```json
{
  "schema_version": "public-review-batch-1",
  "explicit_author_confirmation": true,
  "reviewed_by": "author",
  "items": [
    {
      "id": "PUB-WEB-001",
      "action": "task",
      "task_id": "current-task"
    }
  ]
}
```

Public examples should use synthetic IDs and placeholder scopes. A page-generated batch is a proposal until a user or an application explicitly validates and applies it.
