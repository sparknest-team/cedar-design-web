## ADDED Requirements

### Requirement: Atomic mention identity and display

When `atomic` is enabled, Mention SHALL encode selected primitive identities in its text model and render them as indivisible, visually distinguished mentions. It SHALL resolve a label from current options, then `fallbackOption`, then the instance's selected-item cache, then the identity. Resolving or changing a label SHALL NOT update the model. With `atomic` disabled, existing plain-text behavior SHALL remain unchanged.

#### Scenario: Preserve selected labels across searches

- **GIVEN** a selected or initialized identity was resolved from current options
- **WHEN** a later search replaces those options
- **THEN** the cached label remains visible unless a fallback supplies a label
- **AND** removing the identity clears its cache entry
- **AND** switching between editing and read-pretty presentations retains the selected label and does not update the model

#### Scenario: Initialize an unresolved identity

- **GIVEN** atomic model `联系 @[shuai.meng]` and a synchronous fallback returning label `孟帅`
- **THEN** the field displays `联系 @孟帅` while retaining the model unchanged
- **WHEN** the fallback's reactive label changes
- **THEN** the display updates without a model or change event

#### Scenario: Select, remove, undo and copy

- **WHEN** a candidate is selected
- **THEN** its identity is serialized and its label appears as an atomic mention
- **WHEN** an edit or deletion intersects the mention
- **THEN** the entire identity is removed or replaced
- **AND** undo and redo restore the encoded identity and display
- **AND** copying between compatible Mention editors retains the encoded identity while plain text recipients receive the visible text

#### Scenario: Search by identity or label

- **GIVEN** a local option with value `xiaoming` and label `小明`
- **WHEN** the user types `@xiaoming` or `@小明`
- **THEN** the option is offered and selection displays `@小明` with identity `xiaoming`
- **AND** remote option loaders receive the original query without additional local filtering
- **AND** the suggestion dropdown displays loading feedback while the latest request is pending and does not expose stale results
- **AND** when there are no candidates and `fallbackOption` returns display data for the typed ID, Enter creates the atomic mention without changing that ID

#### Scenario: Legacy plain text

- **GIVEN** atomic mode is not enabled
- **THEN** `@[...]` remains plain text and is not interpreted as an entity
