# Textarea Specification

## ADDED Requirements

### Requirement: Shared value model

Textarea MUST support `modelValue`/`update:modelValue`, `defaultValue`, and the `trim` model modifier. When `modelValue` is provided, it MUST take precedence over internal state. Changes to `defaultValue` after mount MUST NOT reset the current value.

#### Scenario: Controlled multiline value

- **WHEN** Textarea is mounted with `modelValue="first\nsecond"`
- **THEN** user editing emits `update:modelValue` while the rendered value remains controlled by the prop

#### Scenario: Uncontrolled initial value

- **WHEN** Textarea is mounted with `defaultValue="draft"` and without `modelValue`
- **THEN** it starts with `draft` and later `defaultValue` changes do not reset user edits

### Requirement: Input and composition events

User editing MUST emit `update:modelValue(value)` before `input(value, event)`. IME composition MUST NOT emit consumable input until composition ends. Programmatic value updates MUST NOT synthesize user events.

#### Scenario: Complete an IME composition

- **WHEN** the user composes text and composition ends
- **THEN** Textarea updates the model once and then emits one input event with the completed value

### Requirement: Blur commit event

`change(value, event)` MUST represent a changed value committed by blur. It MUST be emitted before `blur(event)` and MUST be deduplicated against the last committed value. Enter MUST retain newline behavior and MUST NOT commit change by itself; `keydown(event)` MUST remain available.

#### Scenario: Commit once on blur

- **WHEN** the user edits a value, presses Enter to add a newline, and blurs the textarea
- **THEN** one change event is emitted before blur and no Enter-specific commit event is emitted

### Requirement: Clear behavior

Clearing MUST emit `update:modelValue('')` followed by `clear(event)`, MUST NOT emit `input` or `change`, and MUST keep focus on the textarea. Disabled, readonly, or empty textareas MUST NOT expose an active clear action.

#### Scenario: Clear without edit events

- **WHEN** the user activates the clear action on an editable non-empty Textarea
- **THEN** the value becomes empty, clear receives the activation event, no input or change event is emitted, and focus remains in the textarea

### Requirement: Maximum length

`maxLength` MUST accept a number or `{ length: number; errorOnly?: boolean }`. Without `errorOnly`, user input MUST be truncated at the configured length. With `errorOnly`, input MAY exceed the limit and MUST enter the error state. `showWordLimit` MUST default to `false`; `wordLength` and `wordSlice` MAY override counting and truncation. Controlled programmatic values MUST NOT be mutated merely because they exceed the limit.

#### Scenario: Error-only multiline limit

- **WHEN** user input exceeds an object limit with `errorOnly=true`
- **THEN** the complete value is retained, the counter reports the custom length, and the native textarea is marked invalid

### Requirement: Height model

Textarea MUST support optional native `rows`, boolean `resize`, and `autoSize` as a boolean or `{ minRows?: number; maxRows?: number }`. `autoSize` MUST take precedence over rows and resize, disable manual resizing, and recalculate after user input, programmatic value changes, and container width changes.

#### Scenario: Auto-size within row bounds

- **WHEN** content grows in a Textarea configured with `autoSize={ minRows: 2, maxRows: 5 }`
- **THEN** its measured height stays between the two row bounds and overflow becomes scrollable after the maximum

### Requirement: Platform resize defaults

Cedar MUST default `resize` to `true`; Maple MUST default it to `false`. Both implementations MUST use the same public boolean meaning.

#### Scenario: Default resize behavior

- **WHEN** Textarea is rendered without `resize` or `autoSize`
- **THEN** Cedar allows vertical resizing and Maple disables manual resizing

### Requirement: Slots and native attributes

Both implementations MUST expose `prefix`, `suffix`, and `clear-icon` slots. `textareaAttrs` MUST supplement the native textarea while component-controlled value, disabled, readonly, rows, length behavior, core event handlers, and error state take precedence.

#### Scenario: Native attribute precedence

- **WHEN** `textareaAttrs` contains conflicting `disabled`, `rows`, `value`, or input handlers
- **THEN** the corresponding public Textarea props and component behavior remain authoritative

### Requirement: Accessibility and exposed methods

The native textarea MUST preserve its semantic role, expose `aria-invalid` in merged error state, and support an accessible clear action. Both implementations MUST expose `focus()` and `blur()`; Cedar MUST preserve its existing `textareaRef` compatibility for internal consumers.

#### Scenario: Accessible error state

- **WHEN** Textarea is in explicit, form, or maximum-length error state
- **THEN** the native textarea exposes `aria-invalid="true"` and focus/blur methods target that native element
