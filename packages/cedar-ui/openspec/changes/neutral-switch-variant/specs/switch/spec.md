## ADDED Requirements

### Requirement: Appearance names are independent of themes
Both platforms SHALL expose circle, round, line and tonal variants, defaulting to circle. The tonal appearance SHALL use switch-tonal-* variables with matching suffixes on both platforms and SHALL NOT provide legacy aliases.

#### Scenario: Tonal appearance in every theme
- **WHEN** variant is tonal under either brand and either color mode
- **THEN** the outlined muted unchecked track and its paired foregrounds retain existing checked, error, disabled and loading priority

#### Scenario: Current Playground theme selection
- **WHEN** a user chooses a brand and color mode
- **THEN** the host and preview use Themes.default or Themes.maple and the chosen light or dark entry
