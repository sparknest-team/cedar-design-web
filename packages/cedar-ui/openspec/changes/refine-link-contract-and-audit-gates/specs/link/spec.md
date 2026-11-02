## ADDED Requirements

### Requirement: Blocked link semantics
A Link with a provided href SHALL retain role=link when disabled/loading while removing href/target/rel, preventing click notifications and leaving Tab order. A placeholder without href SHALL not gain a synthetic link role.

### Requirement: Ordinary notification and public types
click SHALL remain an emits MouseEvent notification. Blocked clicks SHALL not consume once listeners. LinkProps SHALL include its typed listener; root and subpath entries SHALL expose standard Link/LinkProps/LinkSize/LinkUnderline/LinkInstance names. FieldLoadingProps SHALL be available at the root and field-decorator entry on each platform.

### Requirement: Keyboard-operable loading demonstration
The paired loading example SHALL have an actual href and demonstrate business-controlled preparation before a native download. First click/Enter SHALL prevent navigation during preparation; the ready link SHALL use native download semantics. Unmount SHALL cancel demo work.
