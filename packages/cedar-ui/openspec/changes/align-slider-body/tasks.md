- [x] Independent component/model/style copies
- [x] Local Form/InputNumber integration
- [x] Demos, docs and direct API migration
- [x] Pointer, keyboard, controlled, lifecycle, Form, SSR tests and source gate

## Evidence
- Cedar and Maple: targeted ESLint passed; 22 tests each passed (20 interaction + 2 Form).
- node design-ui/bin/slider-core-check.mjs passed: 7 source/style pairs, interaction test pair, 3 demo pairs, both compiled Less entries.
- git diff --check passed for both Slider directories.
- Parent integration passed both library typechecks/builds, token contract, 928 demo SFC compilation, and bare ESM/CJS import plus SSR. Final full documentation production builds were not repeated.
- Browser/screen-reader/real-device visual QA is not claimed.
