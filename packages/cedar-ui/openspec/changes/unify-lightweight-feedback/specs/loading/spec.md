## ADDED Requirements

### Requirement: Unified Loading contract
Cedar and Maple SHALL expose the same Loading Props (`type`, `size`, `radius`, `color`, `loading`, `tip`, `hideIcon`) and slots (`default`, `icon`, `tip`). The two implementations SHALL use the same indicator-selection, wrapped-content and size-normalization behavior. `dot` and the `element` slot SHALL NOT remain in the public API.

#### Scenario: Standalone indicator
Given Loading has no default slot, it SHALL render the selected indicator and optional tip independently of the `loading` Prop.

#### Scenario: Wrapped content
Given Loading has default-slot content, it SHALL always render that content and SHALL render the overlay and Loading body only while `loading=true`.

#### Scenario: Hidden indicator
Given `hideIcon=true`, Loading SHALL omit the built-in or custom indicator while preserving the tip and wrapped-content loading state, and SHALL NOT render an empty body when no tip exists.

#### Scenario: Custom indicator
Given an `icon` slot, Loading SHALL render it instead of the built-in indicator. Cedar MAY fall back to its ConfigProvider loading slot through a platform adapter when no local icon slot exists.

#### Scenario: Loading accessibility
Wrapped content in a loading state SHALL expose `aria-busy=true`. A standalone indicator SHALL expose a polite status, decorative SVGs SHALL be hidden from accessibility APIs, and motion SHALL stop when the user requests reduced motion.

### Requirement: Unified Loading directive
The Cedar and Maple Loading directives SHALL accept a boolean or an options object containing the component Props plus `fullscreen` and `background`. Both directives SHALL render the shared Loading component contract and SHALL clean up mounted nodes, classes and document state.

#### Scenario: Directive updates
Given a mounted directive receives updated type, size, tip, color or background options, its rendered component and overlay style SHALL update without remounting the host content.

#### Scenario: Directive cleanup
Given a directive becomes inactive or its host unmounts, it SHALL remove its container, restore any position class it added and release fullscreen document state.

#### Scenario: Directive SSR
Rendering a Loading directive during SSR SHALL NOT access browser globals and SHALL produce no directive-only attributes.
