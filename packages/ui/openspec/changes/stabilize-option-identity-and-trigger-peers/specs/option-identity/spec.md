## ADDED Requirements

### Requirement: Stable rendering identity
Tree SHALL keep Node.key=value for vnode and virtual-list identity without introducing a second public key alias. Menu SHALL derive stable private Vue keys from explicit business values, distinguish string/number/boolean values, and preserve object-valued identity via toRaw. Rows without explicit values SHALL use original option identity.

#### Scenario: Reordering options
- **WHEN** Tree or Menu options reorder while business values stay the same
- **THEN** row instances and row-owned state remain attached to those values, including virtual Tree rows and numeric zero

### Requirement: Peer reference dismissal
Trigger SHALL dismiss an outside-click-enabled lower sibling when a click targets the already-visible top sibling reference. Nested containment, explicit opt-out, top-layer popup content protection, and inactive-instance lifecycle guards SHALL remain effective.

#### Scenario: Click then hover then click
- **WHEN** a click Menu is open, another sibling opens via hover, and its reference is clicked
- **THEN** the first Menu closes and the hovered Menu stays open

### Requirement: FloatingPanel primary model
FloatingPanel SHALL use modelValue/defaultValue/update:modelValue for settled pixel height through ordinary v-model. Initialization SHALL not update the model, and defaultValue SHALL only initialize uncontrolled height. Height-change remains a notification.

#### Scenario: Initialization and controlled updates
- **WHEN** defaultValue changes after creation or a controlled model is assigned
- **THEN** the default does not reset current state and external assignments do not emit model updates
