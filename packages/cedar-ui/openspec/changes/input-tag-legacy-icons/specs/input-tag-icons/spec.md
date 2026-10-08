## ADDED Requirements

### Requirement: InputTag uses current Tag controls
InputTag SHALL rely on Tag close-btn rendering and SHALL NOT retain the obsolete icon-hover selector/token integration.

#### Scenario: Editable tag removal
- **WHEN** an editable InputTag renders values and its close button is clicked
- **THEN** the current close-btn control removes that value without a legacy icon-hover element

#### Scenario: Default readonly or disabled rendering
- **WHEN** InputTag is readonly or disabled without item-level control overrides
- **THEN** it does not render close controls

#### Scenario: Custom Tag colors
- **WHEN** a value supplies default or outline Tag color props
- **THEN** the Tag retains ownership of custom foreground and border colors

#### Scenario: Consumer audit
- **WHEN** compiled token-consumer checks run
- **THEN** Badge/Tag require consumers without exemptions and InputTag contains no obsolete icon-hover selectors or removed color variables
