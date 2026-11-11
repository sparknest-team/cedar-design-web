## MODIFIED Requirements

### Requirement: Measured CSS height
Auto-size MUST derive CSS height from the active box-sizing. Content-box height MUST exclude vertical padding and borders from measured offsetHeight; border-box height MUST retain them. Individual border widths and styles MUST be copied so unequal borders and wrapping measure correctly. Minimum and maximum row heights MUST use the same CSS units.

### Requirement: Explicit row limit precedence
Explicit minRows/maxRows MUST override the default theme minimum while auto-size is active. Content beyond maxRows MUST scroll inside the height cap. Unbounded auto-size MUST preserve its existing theme minimum. Turning auto-size off MUST remove calculated styles and restore native/platform sizing and resize behavior.
