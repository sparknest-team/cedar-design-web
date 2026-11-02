## ADDED Requirements

### Requirement: Content occupies layout height
Horizontal Divider content SHALL occupy its natural height without overlap with subsequent flow content, including spacing=0 and multiline/slot content. Plain and vertical dividers SHALL retain existing layout and keyed content identity.

### Requirement: Valid finite thickness
thickness SHALL accept finite numbers >= 1. Values below 1, including zero, and non-finite values SHALL warn in development and use theme width. hairline SHALL continue to take priority and halve theme width rather than thickness.

### Requirement: Consistent runtime contract
Enums SHALL have development diagnostics and safe defaults. Opacity SHALL accept finite values in [0,1], with invalid values omitted. inset and spacing SHALL accept presets, finite lengths and one/two-element length tuples; tuple items SHALL NOT be presets. Invalid inset SHALL be omitted, invalid spacing SHALL use md. Negative margins and CSS expressions SHALL remain supported. Maple SHALL export named Divider from its subpath. Existing APIs and platform theme differences SHALL remain intact.
