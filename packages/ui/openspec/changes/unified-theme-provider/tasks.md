# Tasks

- [x] Rename both provider modules and remove independent document ownership
- [x] Migrate app roots, demos, docs, resolver/catalog metadata and tests
- [x] Validate types, behavior, SSR, portal inheritance and generated documentation

Validation:
- Cedar: ThemeProvider + ConfigProvider suites: 32 tests passed. Declaration and focused provider typechecks passed. Full source lint passed before the final comment-only cleanup.
- Maple: ThemeProvider + SafeArea suites: 23 tests passed. Changed provider/client/playground files pass scoped lint. The full source typecheck completed; the following P1 API check fails because useHoverOverlay is not exported. The full lint also reports formatting issues in notice-bar/example/index.vue and type-tests/aligned-api.ts. The full demo SFC check reports the existing CustomFormComponent useFormErrorDescription import classification issue. These files and behaviors were not changed for this migration.
- Both library builds completed. Built ESM roots/subpaths and CJS roots expose ThemeProvider and support object presets in SSR; StyleProvider, styleProviderProps and ThemeProvider.setStyleVars are absent. No legacy style-provider output directory remains. Mixed root/subpath components preserve theme context.
- Real Chromium checks passed for both platforms: independent application roots, nested light inside a custom dark preset, external body portals, reactive preset-to-mode updates, inherited user overrides, no html theme mutation and zero page errors. See browser-results.json and checks/theme-provider-browser.mjs.
- Paired provider source gates passed; documentation/API structure, locale scenario parity and LLM generation tests passed. Component catalogs and generated LLM documentation were migrated to the new module path. The legacy shipped Maple handwritten declaration facade was migrated too.

Final API:
- theme accepts light/dark or a Themes preset object; omission inherits.
- An explicit theme replaces inherited preset values. style-vars is an independent, inherited user override layer.
- Root and nested ThemeProvider instances share the same subtree semantics. No document theme owner or static document mutator remains.
