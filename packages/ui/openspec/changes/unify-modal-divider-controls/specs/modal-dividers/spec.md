## ADDED Requirements
### Requirement: Independent opt-in modal dividers
Dialog in Cedar and Maple and Drawer in Cedar MUST expose boolean topDivider and bottomDivider props, each defaulting to false, matching Card naming. Function-call configuration and update types MUST expose the same options.

#### Scenario: Independently enabled dividers
- **WHEN** only topDivider or bottomDivider is true
- **THEN** only the corresponding header/content or content/footer boundary is drawn
- **AND** changing either flag MUST preserve the mounted content and field state

#### Scenario: Missing regions
- **WHEN** the header or footer is hidden or absent
- **THEN** its divider MUST NOT be drawn

#### Scenario: Custom content and simple dialogs
- **WHEN** a title/footer slot or simple dialog is used
- **THEN** explicit divider flags MUST still control the same boundaries
- **AND** Maple panel outer-border tokens MUST remain independent of divider styling
