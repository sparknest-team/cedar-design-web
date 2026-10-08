## ADDED Requirements

### Requirement: Independent source copies
Cedar and Maple SHALL independently maintain matching AutoComplete source, props, styles and contract tests, allowing only local import and namespace changes.

#### Scenario: Editable suggestions
- **WHEN** arbitrary text is typed
- **THEN** the value is not restricted to candidate values
- **AND** no list/picker presentation is introduced

### Requirement: Opening and candidate filtering
Opening SHALL be independent of filtering and SHALL honor inherited disabled/readonly states.

#### Scenario: Restrictive opening policy
- **WHEN** shouldOpen returns false
- **THEN** matching candidates do not open the popup
- **AND** triggerProps.open cannot bypass the policy

### Requirement: Selection and input contracts
Selected candidates SHALL normalize to strings and obey Input length rules. Event and Form notifications SHALL be deduplicated.

#### Scenario: Selecting a long candidate
- **WHEN** its text exceeds maxLength without errorOnly
- **THEN** the committed value is truncated by the same wordSlice rules used by Input
- **AND** select metadata retains the original candidate

### Requirement: Focus and SSR
The real input SHALL own combobox semantics. Tab SHALL preserve native navigation and IDs SHALL be stable across SSR app instances.

#### Scenario: Two SSR renders
- **WHEN** identical apps render the same autocomplete
- **THEN** the generated ARIA IDs are deterministic
