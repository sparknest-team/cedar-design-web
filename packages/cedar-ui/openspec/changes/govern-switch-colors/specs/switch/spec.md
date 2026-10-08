## ADDED Requirements

### Requirement: Paired switch colors
Both platforms SHALL expose tonal-text-color and tonal-handle-color alongside existing switch color tokens and use matching semantic defaults.

#### Scenario: tonal unchecked
- **WHEN** the control is unchecked without an enabled error
- **THEN** the track uses surface-muted, its outline/thumb/text use content-secondary, and thumb icons use opaque surface-default (not translucent surface-muted)
- **AND** explicit tonal foreground token overrides reach their consumers

#### Scenario: Enabled validation error
- **WHEN** error is enabled and the control is neither disabled nor loading
- **THEN** all variants use the error track and ordinary thumb/text color tokens

#### Scenario: Unavailable control
- **WHEN** disabled or loading is true
- **THEN** error styling is suppressed while checked identity is retained

#### Scenario: Default color readability
- **WHEN** default tokens are used on default/muted surfaces across both brands and modes
- **THEN** visible text meets 4.5:1 and control boundaries/thumb icons meet 3:1 before unavailable opacity

#### Scenario: Custom colors
- **WHEN** a custom track or foreground is supplied
- **THEN** the override is consumed without claiming automatic contrast correction
