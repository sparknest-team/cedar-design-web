## ADDED Requirements

### Requirement: Content alignment is inherited independently of presentation
Form and FormItem SHALL accept contentAlign as left, center or right. Form SHALL default to left; an omitted FormItem value SHALL inherit Form. Both libraries SHALL export FormContentAlign.

#### Scenario: Item override and restoration
- WHEN Form uses right and a child item uses center
- THEN that item aligns content to center and its siblings align right
- WHEN the item override is removed
- THEN it inherits right again

#### Scenario: Presentation switching
- WHEN a field switches between inline editing, popup reference and readPretty
- THEN its inherited content alignment remains unchanged
- AND label alignment, feedback and popup editor layout remain independent

#### Scenario: Explicit field alignment
- WHEN a Select or Cascader supplies text-align
- THEN that explicit text alignment overrides its FormItem inherited text alignment
