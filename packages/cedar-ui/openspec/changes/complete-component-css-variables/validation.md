# CSS variable validation

Both style-variable gates, all three generated catalogs, token placement and consumer checks passed. Generated coverage is 393 bilingual component/functional pages and all 4496 public component variable names. Focused Node checks passed 21 tests; affected component suites passed Cedar 219 and Maple 1453 tests. Both lint commands passed. Chromium verified the repaired Time min-width, DateRange active color and generated table layouts.

Broader historical catalog regressions have 11 failures, the phone gallery misses NoticeBar pausable, and API translation still reports 219 missing entries. These checks are not recorded as passing. Details and evidence: design-ui/audits/css-variables-2026-11-09/README.md and validation.json.
