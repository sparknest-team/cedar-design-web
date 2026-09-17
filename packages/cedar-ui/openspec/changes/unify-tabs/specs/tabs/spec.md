# Tabs

## ADDED Requirements

### Requirement: Shared public contract
Both packages SHALL expose Tabs, TabsNavs, TabNav, TabsItems and TabItem with identical props, slots, events and exposed methods. Keys SHALL preserve string/number identity. The initial uncontrolled selection SHALL be the first enabled tab. Controlled values SHALL change only when the owner updates active.

#### Scenario: Controlled activation
- WHEN another enabled tab is clicked
- THEN update:active and change are emitted once, tab-click includes the key and event, and the active panel remains controlled by the supplied active value.

### Requirement: Accessible and touch interactions
Both platforms SHALL implement tablist/tab/tabpanel relationships, roving focus, orientation-aware arrows, Home/End and automatic/manual activation. Disabled tabs SHALL be skipped. Optional swipes SHALL skip disabled tabs and preserve vertical page scrolling. Reduced motion SHALL be respected.

#### Scenario: Manual keyboard activation
- WHEN an arrow moves focus in manual mode
- THEN selection remains unchanged until Enter or Space.

### Requirement: Shared lifecycle and visual variants
lazyLoad and destroyOnHide SHALL work on both platforms, with explicit child overrides. Six variants SHALL be implemented. Only platform adapters and token defaults MAY differ; touch controls SHALL have larger targets.

#### Scenario: Inactive panel
- WHEN destroyOnHide is enabled
- THEN inactive content is unmounted and its panel is hidden from accessibility navigation.

### Requirement: Shared internal styling hooks
Tabs SHALL expose itemClass/itemStyle on each content inner element, itemWrapperClass/itemWrapperStyle on each tabpanel wrapper, and tabClass/tabStyle on each navigation item wrapper. Classes SHALL merge with built-in state classes. Styles SHALL accept Vue StyleValue and update reactively. bodyPadding/headerPadding SHALL NOT be public props; spacing is customized via styles or tokens.

#### Scenario: Dynamic customization
- WHEN custom classes and styles change
- THEN all matching elements update without losing selected/disabled classes or hidden-panel behavior.
