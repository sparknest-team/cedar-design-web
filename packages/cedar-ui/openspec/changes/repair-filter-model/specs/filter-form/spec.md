## MODIFIED Requirements
### Requirement: Model snapshots preserve data kinds
FilterForm SHALL deep-copy model data with the existing Form snapshot policy and SHALL NOT silently JSON-coerce reactive Date or collection values. Event snapshots SHALL be isolated from the parent and internal mutable model. Existing optimistic mirror and debounce/echo semantics SHALL remain.
#### Scenario: Date survives editing another field
- WHEN a reactive model contains a Date and a different field is edited
- THEN update/change snapshots retain Date and mutating an emitted Date does not alter the parent or a later snapshot.
### Requirement: Missing schema object paths are writable
Valid dot/bracket schema paths SHALL create missing object containers with the existing Form path utility. Existing sibling fields and prebuilt arrays SHALL be preserved. Array containers SHALL be prebuilt when array identity is required.
#### Scenario: Initially empty search object
- WHEN an empty model edits search.keyword
- THEN emit a model containing search.keyword rather than silently dropping the input.
