## MODIFIED Requirements

### Requirement: Editing configuration surface
Form and FormItem MUST expose editMode and readPretty for editing/reading configuration. The internal descriptor identifier fieldEditModeProp MUST NOT be a public prop or a public prop type key. Both root and component entry consumer types MUST enforce this surface.
