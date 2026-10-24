## ADDED Requirements

### Requirement: Link size
Link SHALL accept xs, sm, md, lg and xl, default to md, and export LinkSize. Both platforms SHALL use the same size scale and resize text, icons and loading indicators together.

#### Scenario: Loading after resize
- WHEN a Link of any supported size enters loading
- THEN its text and loading icon retain that size, navigation is blocked, and the size is not forwarded as a native attribute.

#### Scenario: Default customization
- WHEN size is omitted
- THEN md retains the existing link-font-size override.
