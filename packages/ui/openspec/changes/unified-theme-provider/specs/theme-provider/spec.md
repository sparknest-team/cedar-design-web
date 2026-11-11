## ADDED Requirements

### Requirement: One theme owner API
ThemeProvider SHALL scope theme and style-vars to its subtree. An application-root provider SHALL theme the full application without special document mutation. Nested providers SHALL inherit or explicitly override, including library Teleports. Installation and typed per-instance defaults SHALL remain available.

#### Scenario: Root and nested mode
- **WHEN** a root dark provider contains a light provider
- **THEN** root descendants and their external portals use dark tokens while the nested scope and its portals use light tokens
- **AND** neither provider modifies html or an unrelated sibling application

## REMOVED Requirements

### Requirement: Retired theme APIs
StyleProvider module/export, ConfigProvider.theme, CedarTheme/cedarThemes and static setStyleVars SHALL NOT remain public compatibility entry points.
