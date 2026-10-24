---
"@cedar-design/shared": major
"@cedar-design/use": patch
"@cedar-design/ui": patch
---

Converge the unreleased shared API with Maple: use independent local tree-shakeable utilities, explicit runtime/type exports and no wholesale rattail or unused legacy helper exports. Align internal popup validation, geometry and resize observation with the shared foundation contract. Applications targeting browsers without native ResizeObserver may provide a standard polyfill at their entry. Add source/type parity and real ESM/CJS/declaration regressions without raising bundle limits.
