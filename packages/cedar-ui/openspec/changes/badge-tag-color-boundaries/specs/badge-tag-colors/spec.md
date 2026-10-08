## ADDED Requirements

### Requirement: Predictable preset color cascade
Both platforms SHALL separate Tag preset outline and filled states and SHALL consume public background tokens in dark mode.

#### Scenario: Loading preset is hovered
- **WHEN** a selected loading preset Tag is hovered
- **THEN** its background remains the non-hover background

#### Scenario: Preset outline is selected
- **WHEN** a preset Tag uses outline in either theme mode
- **THEN** its background stays transparent and its preset text token controls text and border

#### Scenario: Override dark preset background
- **WHEN** the instance overrides its preset background token
- **THEN** the filled consumer uses that value without a dark selector bypass

### Requirement: Persistent Badge color regression
Badge SHALL use system danger for its fallback background and SHALL retain audited foreground/background pairs across supported themes.

#### Scenario: Check supported themes
- **WHEN** the shared theme check runs
- **THEN** Badge filled/outline colors and public background overrides are checked for both libraries, both brands and both modes
