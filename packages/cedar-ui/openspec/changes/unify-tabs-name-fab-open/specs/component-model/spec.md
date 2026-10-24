## MODIFIED Requirements

### Requirement: Tabs business identity
TabPane, TabNav and TabItem SHALL require a unique string or number name. Selection, accessibility relationships and navigation-panel matching SHALL use name, independently of Vue key.

#### Scenario: Stable Vue key
- WHEN a pane name changes while its Vue key stays the same
- THEN the instance is retained and selection and accessibility relationships use the new name.

### Requirement: FAB open model
FAB SHALL use open/update:open/defaultOpen for its action menu, visible for widget visibility, and openIcon/closedIcon for state icons.

#### Scenario: Controlled request
- WHEN a user toggles a controlled FAB
- THEN update:open requests the new state and the owner determines the displayed state.
