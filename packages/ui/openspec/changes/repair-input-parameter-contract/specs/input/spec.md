## MODIFIED Requirements

### Requirement: Safe length policy
A length policy MUST contain a finite nonnegative number, directly or in its length field, with an optional boolean errorOnly. Zero MUST mean unlimited. Invalid policies MUST use standard Vue prop-validation diagnostics and fall back to no limit; optional null MUST NOT crash. Selection normalization and native input MUST share this fallback. Nested reactive policy changes MUST remain effective. Existing UTF-16 and custom slicing contracts MUST remain intact.

### Requirement: Password base event contract
Password MUST explicitly declare and forward all already-public Input events with their typed payloads, including nullable model/change values and optional change sources. Once listeners MUST survive blocked clicks, synchronous preventDefault MUST reach the original native event, and notification Promise returns MUST NOT create loading tasks. Visibility events and native input methods MUST remain unchanged.
