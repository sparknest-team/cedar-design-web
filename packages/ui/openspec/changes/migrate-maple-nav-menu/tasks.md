# Tasks

- [x] Copy Cedar tree, Item contracts and coordination logic into Maple and adapt horizontal presentation.
- [x] Add shared overlay, visual viewport layout, draft retention and lifecycle cleanup.
- [x] Wire exports, installation, resolver styles, editor component map and documentation routes.
- [x] Add full layout to Cedar and document the cross-platform boundary.
- [x] Verify Maple behavior, Cedar regressions, resolver styles, lint, API naming, type checks and runtime dependencies.
- [x] Verify mobile-width filter switching and custom apply behavior in the browser.

During the initial migration, the repository-wide demo SFC check reported an unrelated Form English documentation failure: five referenced scenarios are not exposed in its demo list. NavMenu demos report no failure.

Follow-up review: keep custom panels in the Item component tree with Teleport, make closing panels inert, and retain NavMenuItem through CLI export generation. The 13 component tests, entry-generation regression, component type check and all 1431 demo SFC checks pass. Real-device viewport/keyboard acceptance remains to be performed; library and documentation release builds passed during the 2026-10-29 acceptance run.

## 2026-10-29 production acceptance

- [x] Build the complete library and production documentation with Node 20.19.0 / pnpm 9.6.0.
- [x] Validate 13 component cases and 3 generated/export/UMD artifact cases, including actual UMD selection.
- [x] Add the long-content example using Maple CheckboxGroup and retain the existing NavMenu API.
- [x] Pass 12 targeted NavMenu production cases across Chromium, Firefox and WebKit: documentation/mobile, light/dark, full-width/full, scrolling, fixed actions, short viewport and landscape.
- [x] Rebuild after concurrent Input source updates; require all three final engine reports to match the same current source fingerprint, production-input fingerprint and documentation build hash.
- [x] Validate lint, API naming, types, package contents, style variables and 1432 demo SFCs.
- [ ] Physical iOS Safari / Android Chrome: native keyboard, address-bar movement and hardware safe areas. No connected USB phone was found.

Targeted report: maple-design-mobile/artifacts/nav-menu-acceptance-20261029/summary.json. This is NavMenu acceptance, not a complete-library compatibility matrix. Earlier evidence is archived under previous-build-44491515 and is not accepted as current evidence.

## API and implementation audit (2026-10-29)

- [x] Restore mobile selected-ancestor expansion on initial values and value/options updates.
- [x] Release stale names when Items are renamed on either platform.
- [x] Honor coordination cancellation so a newer open command in a close callback wins on both platforms.
- [x] Export Cedar NavMenuPopupLayout and restrict Maple NavMenuMode to its actual root mode; remove the unused mobile NavMenuTheme export.
- [x] Document shared Item contracts, intentional platform differences, panel lifetime and default-slot content restrictions in both languages.

Physical-device acceptance is deferred at the user's request; this audit covers source behavior and API contracts. Previous production-browser evidence predates these follow-up source changes and does not validate them.

Audit validation: Maple NavMenu 17/17 and Cedar NavMenu 116/116 passed. After aligning the Item disabled default, the 22 affected Cedar Item/panel cases passed again. NavMenu-scoped ESLint passed in both repositories; both component source type checks and the shared API naming check passed. Maple lint:check was executed and failed on 13 concurrent Steps formatting/curly-rule errors outside this change. The four omitted mobile size-height tokens were also added to both language documents. No physical-device or production-browser rerun was performed for this source audit.

## Shared API and behavior follow-up

- [x] Add Cedar root close() with the same Item-only close request/focus contract as Maple.
- [x] Add Item unmountOnClose on both platforms, default false, with lazy first creation, retained local state, optional destruction after leave, and safe cancellation of closing transitions.
- [x] Align empty-panel/async-options and KeepAlive controlled-open behavior; closed retained content is inert.
- [x] Validate final rendered Item names so batched renames, swaps and insertions work while real duplicates still fail.
- [x] Limit root keyboard navigation to its owning bar/menu, excluding retained nested panels.
- [x] Synchronize Chinese/English API documentation, the horizontal filter example, controlled Item example and panel-state/closing example; expose the new mobile scenario in example/index.vue.

Physical-device acceptance remains explicitly deferred by the user. This source follow-up does not reuse the earlier production-browser evidence as evidence for the updated implementation.

Follow-up validation: Maple NavMenu 26/26 and Cedar NavMenu 125/125 passed, including nine matching panel-contract cases on each platform. NavMenu-scoped ESLint passed on both sides. Maple's 1433 demo SFCs and the three changed Cedar demo SFCs compiled successfully. Both spec checks and shared API naming passed; Cedar source declaration type checking passed. Maple full lint/type checking was attempted but encountered unrelated concurrent empty-value/Input/Select/Search changes (including the field-presentation empty-policy test and Search.vue readPretty/EmptyValuePolicyProps errors); these were not modified for this task. No production build/browser matrix or physical-device rerun was performed.
