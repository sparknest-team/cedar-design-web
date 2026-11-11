## ADDED Requirements

### Requirement: Local theme boundaries
StyleProvider SHALL accept theme light or dark, inherit when omitted, preserve outer user overrides and let inner style-vars win. It SHALL NOT mutate the document theme. Explicit nested boundaries SHALL re-evaluate palette, system and loaded component aliases.

#### Scenario: Nested light in dark
- **WHEN** a light Provider is placed inside a dark Provider
- **THEN** its components use light tokens and siblings remain dark

### Requirement: Teleport inheritance
Library Teleport roots SHALL receive their owning Vue theme context, including custom and inline destinations, and react to changes without scanning DOM styles. Disposal SHALL remove teleported nodes normally.

#### Scenario: Portal outside the local subtree
- **WHEN** a popup is mounted under body or an explicit external host
- **THEN** its theme and user overrides follow its nearest Vue Provider

## REMOVED Requirements

### Requirement: Component-specific theme and touch notification
Cedar LayoutSider and NavMenu SHALL NOT expose theme. Button on Cedar and Maple SHALL NOT expose touchstart as a component Emit. Both platforms SHALL retain native gesture and ripple behavior.
