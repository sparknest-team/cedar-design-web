# Input Specification

## ADDED Requirements

### Requirement: Shared value model

Input MUST support `modelValue`/`update:modelValue` and `defaultValue`. When `modelValue` is provided, it MUST take precedence over the internal value. Changes to `defaultValue` after mount MUST NOT reset the current value.

#### Scenario: Uncontrolled input

- **WHEN** Input is mounted with `defaultValue="hello"` and without `modelValue`
- **THEN** the rendered value is `hello` and user input updates the internal value

#### Scenario: Controlled input

- **WHEN** Input is mounted with `modelValue="hello"`
- **THEN** user input emits `update:modelValue` and the rendered value remains controlled by the prop

### Requirement: Shared input types

Both implementations MUST support `text`, `password`, `number`, `tel`, and `email`. `number` MUST preserve string editing and use decimal input affordances instead of relying on native number spinners.

#### Scenario: Number input

- **WHEN** the user enters `12.5` into an Input with `type="number"`
- **THEN** the value remains the string `12.5` and the input exposes decimal keyboard affordances where supported

### Requirement: Default appearance and clearing

The default `variant` MUST be `outlined`. The default `clearable` MUST be `false`. Clear controls MUST be unavailable when the field is disabled, readonly, or empty.

#### Scenario: Default appearance

- **WHEN** Input is mounted without `variant` or `clearable`
- **THEN** it renders the outlined variant and does not render a clear control

### Requirement: Commit change event

`change(value, event)` MUST represent a user-committed value. It MUST fire on blur or Enter only when the value differs from the last committed value. Enter followed by blur MUST NOT fire a duplicate change. Programmatic model updates MUST NOT fire change. A raw `keydown(event)` compatibility event MAY also be emitted, but MUST NOT be treated as a change commit by itself.

#### Scenario: Commit once

- **WHEN** the user edits a value, presses Enter, and then blurs the input
- **THEN** one change event is emitted before the press-enter event and no second change is emitted on blur

### Requirement: Clear event

Clearing MUST emit `update:modelValue('')` followed by `clear(event)`. The clear event MUST provide an `Event` usable for mouse and keyboard activation. Clearing MUST NOT additionally emit `input` or `change`.

#### Scenario: Keyboard clear

- **WHEN** the user activates the clear control with Enter or Space
- **THEN** the value is cleared and the clear event receives the activation event

### Requirement: Maximum length

`maxLength` MUST accept a number or `{ length: number; errorOnly?: boolean }`. Without `errorOnly`, input MUST be truncated at the configured length. With `errorOnly`, input MAY exceed the length and MUST enter the error state. `showWordLimit` MUST default to `false`; custom `wordLength` and `wordSlice` MAY define counting and truncation.

#### Scenario: Error-only maximum length

- **WHEN** the configured length is exceeded with `errorOnly=true`
- **THEN** the full user value is retained and the control is marked invalid

### Requirement: Form boundary

Form/FormItem MUST own validation rules and messages. Input MUST expose event signals and MAY expose an `error` visual override; it MUST NOT require rules on the base Input public contract.

#### Scenario: Form-owned validation

- **WHEN** an Input is placed in a FormItem with validation rules
- **THEN** the FormItem controls the validation message and Input forwards the relevant interaction signals

### Requirement: Slots and native attributes

Both implementations MUST expose `prefix`, `suffix`, and `clear-icon` slots. `inputAttrs` MUST supplement the native input, while component-controlled value, type, disabled, readonly, maxlength behavior, and event handlers MUST take precedence.

#### Scenario: Native attribute precedence

- **WHEN** `inputAttrs` contains a conflicting `disabled` or `type` value
- **THEN** the component's public `disabled` or `type` value remains authoritative

### Requirement: Accessibility

The clear control MUST expose an accessible name, keyboard activation, and visible focus. Error state MUST be exposed through `aria-invalid`; labels MUST be associated with the native input where applicable.

#### Scenario: Accessible error state

- **WHEN** Input is in an error state
- **THEN** the native input exposes `aria-invalid="true"` and the clear control, if present, has an accessible name
