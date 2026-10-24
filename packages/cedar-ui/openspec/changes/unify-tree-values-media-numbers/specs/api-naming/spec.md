## ADDED Requirements

### Requirement: Tree business values and labels
Tree and TreeSelect SHALL use value/label/children as their default data fields. Field mappings SHALL use value/label. Selection, checkbox, half-checkbox and expansion collections SHALL use selectedValues/checkedValues/halfCheckedValues/expandedValues with corresponding update events and existing default collection props. The label slot and tree-slot-label forwarding SHALL replace the old title slots. Vue vnode keys and Table row keys SHALL retain their existing roles.

#### Scenario: Numeric zero and custom backend fields
- **WHEN** a node has value 0 or fieldNames maps value to id and label to text
- **THEN** selection and checkbox events preserve its business value and return original business data; rendering identity is independent from Vue vnode.key

### Requirement: One-based media numbers
Both libraries SHALL expose one-based modelValue/defaultValue, to/open command parameters, model updates and change notification numbers for Carousel and ImagePreviewGroup. Carousel slots SHALL expose slideNumber and preview-group indicator slots SHALL expose imageNumber. Internal layout and array indexing SHALL remain zero-based.

#### Scenario: Loop and controlled rejection
- **WHEN** the last item advances in loop mode or a controlled navigation proposal is rejected
- **THEN** outgoing numbers remain one-based and the accepted model stays unchanged until the parent accepts it; open proposes a new image number only once

### Requirement: Explicit height and visibility semantics
Maple FloatingPanel SHALL use modelValue/defaultValue/update:modelValue and height-change for settled pixel height, without initialization updates. FAB SHALL retain visible for overall visibility and open/defaultOpen for the action menu.

#### Scenario: Uncontrolled initial height
- **WHEN** defaultValue changes after creation
- **THEN** the current height is unchanged; an explicit height takes precedence without generating a model update
