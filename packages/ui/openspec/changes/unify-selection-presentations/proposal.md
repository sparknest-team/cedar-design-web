## Why

Select/Cascader field layers were aligned, but option algorithms and mobile presentation logic still diverged.

## What Changes

- Use Cedar as source for independently copied main components, controllers, option/tree algorithms, Menu components and semantic styles.
- Cedar accepts only presentation=menu. Maple adds statically registered list/picker files; no shared runtime, platform configuration or mutable registration API.
- Controllers own committed values, draft sessions, search, disabled state, option keys and Form events. Presentation files only render/interact with the controller.
- Align defaults, public events, exports and demos directly, without legacy aliases before release.
- Maple Popup preserves mounted slot content when unmountOnClose=false; Picker tolerates empty columns.

## Non-goals

Date/Time panel algorithms, TreeSelect and unrelated components are not part of this change.
