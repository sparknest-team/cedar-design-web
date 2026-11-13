## ADDED Requirements

### Requirement: Consistent outline field defaults
Cedar and Maple input, select, cascader, tag input, date and time fields SHALL default to outline. InputGroup SHALL provide outline unless a variant is explicitly configured. Explicit control variants SHALL override inherited group variants. Cedar TreeSelect with border enabled SHALL use outline.

#### Scenario: Mixed fields in a form
- WHEN fields omit variant
- THEN field shells use outline appearance
- AND explicit filled or standard remains supported

### Requirement: FormItem owns its spacing
Cedar and Maple horizontal FormItem SHALL use zero Row gutter unless row-props explicitly overrides it. Normal item spacing SHALL default to 16px at every size in both libraries, while remaining configurable through existing form tokens. Textarea counters SHALL remain on one line.

#### Scenario: Default horizontal item
- WHEN no row-props.gutter is configured
- THEN no negative inline gutter margin overrides the item spacing
