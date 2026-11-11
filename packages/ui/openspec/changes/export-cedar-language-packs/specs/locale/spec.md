## ADDED Requirements

### Requirement: Published built-in language packs

The package root and locale entry SHALL export `cedarZhCN` and `cedarEnUS` as typed language packs usable with `addI18nMessages` and `ConfigProvider.locale`. Importing the English pack SHALL NOT register or select it implicitly.

#### Scenario: Register English from the published entry

- **WHEN** an application imports `cedarEnUS`, registers it with `addI18nMessages`, and calls `useLocale('en-US')
- **THEN** the global locale becomes `en-US` and components using the global locale receive the English pack

#### Scenario: Importing does not change language

- **WHEN** an application imports `cedarEnUS` without registration or selection
- **THEN** the currently selected global locale remains unchanged
