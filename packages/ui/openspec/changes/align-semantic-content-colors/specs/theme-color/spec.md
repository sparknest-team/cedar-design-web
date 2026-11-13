## ADDED Requirements

### Requirement: Semantic content follows the matching action color
Both libraries SHALL default content-brand to action-primary and content-info/success/warning/danger to their matching status colors, including brand theme overrides. Button text, outline and tonal foregrounds SHALL follow the corresponding solid fill. Explicit component tokens remain configurable. Neutral content and disabled content SHALL retain their distinct roles.

#### Scenario: A semantic status across components
- WHEN the same semantic status appears in Button, Link, Tag or Alert
- THEN non-solid semantic content uses the matching action or status color
- AND changing the theme re-resolves aliases at the theme boundary
