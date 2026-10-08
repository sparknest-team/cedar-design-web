# Radio interaction

## ADDED Requirements
### Requirement: Local group keyboard navigation
Both libraries SHALL use local group keydown handlers. Arrow keys SHALL cycle enabled registered items in current DOM order; Home/End SHALL move to first/last enabled items. Readonly items SHALL be focusable without selection changes. Modified or repeated key presses SHALL not change selection. Nested groups and embedded interactive descendants SHALL not affect another group.

#### Scenario: Dynamic entry
- WHEN selection, disabled state, order or mounted children change
- THEN only the first enabled checked item, or first enabled item without selection, SHALL be the tab entry. KeepAlive/unmount/disposal SHALL remove stale registrations.

### Requirement: Button presentation
Maple SHALL support Cedar's radio/button variants and xs/sm/md/lg/xl group sizes. Both button presentations SHALL preserve the same value, readonly, disabled and keyboard contracts, use independent copies of BEM rules and system-derived tokens, and provide visible focus.

### Requirement: Style separation
Maple Ripple runtime SHALL not import CSS. Component style entries and directive resolver SHALL include ripple/style. Package component imports SHALL work in a CSS-free Node environment.

### Requirement: Ripple lifecycle isolation
Pending animation timers and keyboard listeners SHALL be removed on unmount; disabling SHALL cancel pending work. Keyboard active state SHALL belong to each directive instance.
