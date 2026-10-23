# Menu

## ADDED Requirements

### Requirement: Shared command menu API
Both libraries SHALL expose `Menu`, `MenuProps`, `MenuInstance`, `menuProps`, `_MenuComponent`, `MenuOption` and `MenuOptionData` through the root and menu package entry. They SHALL use menu style paths and component namespaces and SHALL NOT expose the former DropdownMenu alias.

#### Scenario: Resolve a menu and its option
- WHEN a consumer uses CMenu/CMenuOption or MpMenu/MpMenuOption
- THEN the resolver imports the corresponding public component and menu style entry.

### Requirement: Stable context activation point
With trigger=contextMenu and align-point enabled, the menu SHALL capture the pointer position when contextmenu is dispatched. Pointer movement, reference re-entry and popup interaction SHALL NOT modify that point. Another contextmenu activation SHALL update the point without closing the menu. Without align-point the menu SHALL remain anchored to the reference element.

#### Scenario: Re-enter the reference after opening
- GIVEN a context menu opened at point A
- WHEN the pointer leaves and re-enters the reference at point B
- THEN the menu remains at A
- WHEN another contextmenu event occurs at B
- THEN the menu is positioned at B and remains open.

### Requirement: Independent copies of shared behavior
Both libraries SHALL own matching interaction logic and regression tests. Platform-specific appearance and touch submenu defaults SHALL remain local.
