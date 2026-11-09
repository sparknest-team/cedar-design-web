# Tasks

- [x] Implement local CSS boundaries, nested context and Teleport inheritance on both platforms
- [x] Remove obsolete component APIs and update consumers
- [x] Update docs, demos and cross-platform contract checks
- [x] Verify behavior, CSS consumption, performance, lint and types

Validation:
- Cedar: affected component suites (StyleProvider, Button, Layout, NavMenu, Dialog, Drawer and Trigger) passed; full lint and declaration typecheck passed.
- Maple: 96 StyleProvider/Button/NavMenu tests and 40 popup/drag/floating-panel/dialog tests passed; updated local-theme suite passed again after adding removal-of-last-owner coverage. Full lint passed.
- Maple full typecheck still reports the existing unrelated Breadcrumb/Image/ProgressGroup/Signature/Tabs test errors; no errors remain in the changed production sources.
- Paired StyleProvider/Button source gates, local-theme contract, feedback parity, API/spec checks and demo parity passed.
- Less token inventory: 177 entries, 4672 declarations, zero compilation errors and zero unreviewed consumers. All 393 component docs and three token catalogs match their generated output.
- Chromium checks compiled with each platform's own Less version: local dark, nested light, global dark with nested light, body popup and representative Button colors passed. See browser-results.json. The benchmark forces 1000 Button computed-style reads per switch (30 switches); its median is a synthetic style-cost measurement, not a real-device frame or paint guarantee.

Compatibility:
- ConfigProvider.theme and StyleProvider.setStyleVars remain document-wide.
- Declarative library portals follow their Vue owner even with an explicit external target. Services created outside a Provider have no implicit caller context; set their popup-container to a local theme host. Third-party Teleports must opt into a theme host.

Final runtime dependency checks passed on both platforms: Cedar 1258 runtime / 73 tooling modules, Maple 1015 runtime / 44 tooling modules; no cycles, root backflow or HMR workarounds.
