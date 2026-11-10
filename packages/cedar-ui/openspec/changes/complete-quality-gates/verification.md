# Verification status

Final whole-library validation is pending. Neither platform is reported as fully green.

## Repairs

- Preserve `useHoverOverlay`, `useFormItem` and `useFormErrorDescription` in the Maple CLI root-entry generator.
- Check that runtime imports in examples really exist in the generated public entry, while retaining the resolver import policy.
- Format the ThemeProvider declaration entry and align shared Less theme-import quoting across both libraries.
- Update obsolete Search accessibility snapshots, localized close-button selectors and removed Sider-theme assertions.

## Evidence collected

- The strengthened example check rejected the missing Form composable before its export was repaired; the repaired entry passed all 1469 demo SFCs.
- Maple completed a full component test run: 756 files and 5353 tests passed. Subsequent Card, Cascader and LoadingBar changes were also checked in a focused run: 12 files and 101 tests passed. These runs do not replace final validation of later parallel edits.
- Both libraries have completed successful library builds, lint and type checks during this work. Maple production documentation also built successfully after the root-export fixes.
- All Maple cross-platform checks passed after synchronizing shared Less import quoting.
- Local checks used Node 23.2.0; these are not remote CI or Node 20 toolchain results.

## Remaining constraints

- The parallel chat `制定组件库对比方案` continues into new repair turns and changes component sources, including Cascader virtual keyboard focus. Several earlier whole-library runs read intermediate revisions, including one file while it was being written. Outdated runs were stopped; they are not accepted as green results. Final acceptance needs a fixed source revision or the end of parallel modifications.
- The unchanged Maple bundle gate measured 89 of 94 entries above their existing limits. ThemeProvider itself remained below its limit. Diagnostic measurements and a proposed limit file are stored alongside this report; the active baseline has not been changed.
- `design-ui/standards/build-and-ci.md` prohibits loosening limits or modifying the original baseline. Updating that baseline requires explicit user authorization; otherwise the existing limits remain in force.
