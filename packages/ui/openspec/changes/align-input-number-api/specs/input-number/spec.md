# InputNumber Specification

## ADDED Requirements

### Requirement: Numeric value model

InputNumber MUST expose a `number | undefined` value model and MAY keep an internal string for editing. Empty and incomplete numeric prefixes MUST NOT be exposed as `NaN`.

#### Scenario: Intermediate decimal input

- **WHEN** the user types `1.` while editing
- **THEN** the displayed input preserves `1.` and the component does not treat it as a committed value

### Requirement: Commit events

`input` MUST represent raw editing and `change` MUST represent a committed value. `modelEvent="input"` MAY update the model for complete numeric input, but MUST NOT emit `change` for every keystroke. A blur after Enter MUST NOT emit a duplicate change.

#### Scenario: Commit once

- **WHEN** the user edits a value, presses Enter, and then blurs
- **THEN** one `change(value, event)` event is emitted

### Requirement: Clear behavior

Clearing MUST emit `update:modelValue(undefined)` followed by `clear(event)`. Clearing MUST NOT additionally emit `input` or `change`.

#### Scenario: Clear without edit events

- **WHEN** the user activates the clear control
- **THEN** the component emits `update:modelValue(undefined)` followed by `clear(event)` without emitting `input` or `change`

### Requirement: Modes and slots

InputNumber MUST support `embed`, `button`, and `input` modes. It MUST expose `prefix`, `suffix`, `prepend`, `append`, `plus`, `minus`, and `clear-icon` slots with stable meanings across Cedar and Maple.

#### Scenario: Render a supported mode with custom controls

- **WHEN** a consumer selects any supported mode and supplies one of the documented slots
- **THEN** the component renders that mode and places the custom content in the slot's documented position

### Requirement: Spinbutton accessibility

The native input MUST expose `role="spinbutton"`. Finite bounds MUST be exposed through `aria-valuemin` and `aria-valuemax`; valid numeric values MUST be exposed through `aria-valuenow`; increment and decrement controls MUST have accessible names.

#### Scenario: Expose numeric bounds to assistive technology

- **WHEN** InputNumber has finite minimum and maximum values and a valid current value
- **THEN** the native input exposes `role="spinbutton"`, `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`, and both step controls have accessible names
