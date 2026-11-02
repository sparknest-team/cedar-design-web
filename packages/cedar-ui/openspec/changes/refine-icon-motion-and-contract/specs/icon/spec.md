## ADDED Requirements

### Requirement: Independent icon motion stylesheet
Standalone glyph packages SHALL export a lightweight side-effect-preserved style.css. Resolvers SHALL include it unless importStyle is false. UI Icon styles SHALL import it. Glyph spin SHALL compose with its static transform and stop under reduced motion.

#### Scenario: Standalone spin
- WHEN a consumer imports an individual glyph and its documented stylesheet
- THEN spin animates without importing the UI library or other glyphs.

### Requirement: Independent container scale and rotation
Container name transitions SHALL scale independently from continuous spin and static rotation. A default slot SHALL prevent name-driven transitions, including when a slot is added during a pending transition. Removing a slot SHALL reveal the latest registered name immediately.

### Requirement: Public Icon entry and notification
Both platforms SHALL export Icon, IconInstance, IconProps, iconProps and _IconComponent through standard entries. IconProps SHALL include its typed click listener. Click SHALL remain an emits notification with Vue once semantics, without collecting returned promises. Action examples SHALL use a keyboard-operable Button with an accessible name.
