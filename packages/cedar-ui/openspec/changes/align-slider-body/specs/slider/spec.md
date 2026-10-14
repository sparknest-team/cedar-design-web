# Slider

## ADDED Requirements
### Requirement: Normalized values and local input
Slider SHALL normalize finite bounds and positive steps, snap relative to min, retain max as endpoint, sort range values, and prevent thumbs crossing. Controlled values SHALL remain parent-owned. Updates SHALL emit once per distinct proposal; start/end delimit pointer or keyboard operations. Pointer cancel, disable, deactivation and unmount SHALL release pointer/document listeners. Keyboard events SHALL be handled only on the focused thumb: arrows, Home/End and PageUp/PageDown.

### Requirement: Cross-platform capabilities
Both libraries SHALL implement marks, ticks, InputNumber, custom button slot, readonly, five custom colors, geometry and showTooltip boolean|'always'. labelVisible SHALL be removed without alias. ARIA bounds SHALL reflect range constraints. Native Form disabled/readonly/error SHALL be inherited; internal InputNumber SHALL not duplicate validation.

