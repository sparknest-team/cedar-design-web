---
'@cedar-design/resolver': patch
'@cedar-design/ui': patch
'@cedar-design/cli': patch
---

Only resolve known public Cedar component names. Prevent CSS, CSSStyleSheet and other unrelated C-prefixed globals from generating nonexistent component/style imports during docs auto-import transforms. Verify the shipped component registry against UI root exports and test the real size-length helper through the auto-import plugin.

Preserve the ColorPicker resolver alias in generated UI root exports.
