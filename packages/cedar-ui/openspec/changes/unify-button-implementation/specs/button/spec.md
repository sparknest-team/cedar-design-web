## ADDED Requirements

### Requirement: Unified Button contract
Both libraries SHALL support the same five sizes, eight semantic statuses, four variants, icon/default slots, native button/anchor behavior, group inheritance, autofocus/focusability, ripple, elevation, colors and stacked/block layouts.

#### Scenario: Disabled or busy activation
Given a disabled group or pending loading operation, button/anchor activation SHALL not invoke click handlers or navigate. Explicit child disabled=false overrides group disabled.

#### Scenario: Multiple asynchronous listeners
Automatic loading SHALL begin only for Promise results, block duplicate input, and remain until all listeners settle, including rejection. Completion after unmount/deactivation SHALL not update stale component state.

#### Scenario: Loading appearance
loading-type SHALL accept circle/wave/cube/rect/disappear; loading-mode SHALL accept default/fill/line. Size/color/radius SHALL be available on both platforms; original content and accessible name SHALL remain present during loading.

### Scenario: Compact icon and group layouts
Round buttons SHALL use equal width and height for each size and SHALL not render empty text boxes. Stacked buttons SHALL use size-specific compact heights. During default inline loading, buttons with an icon SHALL replace that icon visually without introducing an extra row or changing group dimensions; the default replacement indicator uses xs unless loading-size is supplied. Keyboard focus-visible SHALL retain an outline while pointer focus SHALL not.

### Scenario: Interactive paired demos
Both platforms SHALL use library RadioGroup, Radio, Switch and Input controls in Button demos. Loading size, mode and variant SHALL be selectable without duplicating every size on the page. Form reset SHALL reset the controlled Input value.
