## ADDED Requirements
### Requirement: InputTag adopts field state and native ownership
Omitted state SHALL inherit FormItem/Form/InputGroup; explicit false SHALL override it. Standalone variant remains filled and explicit variant overrides Group. Native ID/name/ARIA/data/constraints and native keyboard listeners SHALL target the real input; class/style remain on the shell. The existing separate input draft SHALL initialize and restore controlled values.

#### Scenario: Pending composition is cancelled
- GIVEN composition is active
- WHEN the editor becomes disabled/readonly, deactivates, or begins a newer session
- THEN late callbacks do not publish a draft or overwrite the newer editor; a matching trailing input after successful composition publishes once

### Requirement: Clear and manual loading use the shared field contract
Clear SHALL use a named native non-submit button and provide clear-icon scope with clear(event?: Event). loading-mode SHALL reuse default/line manual visual feedback, announce native busy state, and leave editing enabled unless existing disabled/readonly/before-commit state blocks it. Ordinary emits SHALL NOT become Promise tasks. Existing wrapper change sources SHALL preserve a real final confirmation event when available and permit absent programmatic sources.

### Requirement: Shared deferred editors inherit InputGroup state
InputTag and both platform Textarea/InputNumber adapters SHALL apply explicit field state before InputGroup disabled, readonly and size. Other presentation adapters SHALL retain their existing policy.

#### Scenario: Group becomes readonly while editing
- GIVEN an open deferred InputNumber or Textarea inside InputGroup
- WHEN the group becomes readonly
- THEN the editor closes without committing its draft
- AND explicit false on the field continues to override group state.
