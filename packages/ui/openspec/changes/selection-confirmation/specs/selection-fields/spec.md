## ADDED Requirements

### Requirement: Optional selection confirmation
Selection fields SHALL expose need-confirm, defaulting to false for single selection and true for multiple selection in overlay editors. Inline interaction SHALL remain immediate.

#### Scenario: Immediate single selection
- WHEN an enabled single option is chosen with confirmation disabled
- THEN validation and before-commit run, the accepted value is published once, and the editor closes.

#### Scenario: Explicit confirmation
- WHEN need-confirm is true
- THEN choosing an option only updates the draft until confirmation; cancellation discards it.

#### Scenario: Rejected or interrupted selection
- WHEN validation or before-commit rejects, or pending work is canceled by close/unmount
- THEN no stale value is published, and rejected active editors remain available for correction.

#### Scenario: AutoComplete text editing
- WHEN the user types into AutoComplete
- THEN typing does not close or commit the overlay; choosing a suggestion completes the selection.
