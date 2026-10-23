## ADDED Requirements

### Requirement: Semantic divider spacing API
Divider SHALL expose inset for indentation along the line and spacing for the outer gap across the line. inset SHALL default to undefined, and spacing SHALL default to md. Supported presets SHALL be xs, sm, md, lg and xl. Both props SHALL also accept px numbers, CSS lengths, and start/end length arrays. The previous axis-named props SHALL NOT be declared or read, and no compatibility aliases SHALL be provided.

#### Scenario: Vertical asymmetric custom spacing
- **WHEN** a vertical divider has inset=[8,24] and spacing=[12,20]
- **THEN** its top/bottom inset SHALL be 8px/24px, inline spacing SHALL be 12px/20px, and maxHeight SHALL subtract 8px and 24px
- **AND** changing spacing SHALL NOT change maxHeight

#### Scenario: Switching orientation
- **WHEN** the divider changes from vertical to horizontal
- **THEN** inset SHALL control inline start/end indentation and spacing SHALL control top/bottom margins
- **AND** horizontal maxWidth SHALL subtract the inset pair

### Requirement: Complete cross-platform migration
Both platforms SHALL migrate their source, types, call sites, authored demos, playground configs, documentation, style modifiers, and theme tokens to inset and spacing. No former prop or token alias SHALL remain in active source.

#### Scenario: Comparing platform documentation
- **WHEN** readers open either platform's Divider documentation
- **THEN** both SHALL show equivalent examples in the same relative order and describe numbers as px, scalars as symmetric, arrays as start/end pairs, RTL behavior, and matching defaults
