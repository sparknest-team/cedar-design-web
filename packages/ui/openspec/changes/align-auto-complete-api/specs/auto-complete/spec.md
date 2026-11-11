# AutoComplete Specification

## ADDED Requirements

### Requirement: Editable string value model

AutoComplete MUST expose controlled `modelValue` and uncontrolled `defaultValue` as strings. It MUST allow arbitrary user text and MUST convert primitive or object option values to strings before updating the input or emitting value-bearing events. It MUST NOT add an option-only value mode in the aligned first version.

#### Scenario: Select a numeric option

- **WHEN** the user selects an option whose raw value is numeric
- **THEN** AutoComplete writes and emits the string form of that value

#### Scenario: Keep arbitrary text

- **WHEN** the user enters text that does not match an option and commits it
- **THEN** the text remains the value and emits one committed change

### Requirement: Shared option normalization

Both implementations MUST accept string, number, and object options through `options`. Object options MUST support `value`, `label`, and `disabled` field mapping through `fieldNames`. Normalized option information MUST retain the raw option for events and slots. Cedar MAY additionally support option groups and richer Select rendering.

#### Scenario: Use custom field names

- **WHEN** object options use mapped value, label, and disabled keys
- **THEN** filtering, rendering, selection, and disabled behavior use the mapped fields consistently

### Requirement: Filtering contract

AutoComplete MUST default `filterOption` to true and perform case-insensitive label inclusion. `strict=true` MUST make only the built-in filter case-sensitive. `filterOption=false` MUST disable client filtering, and a custom filter function MUST fully determine candidate validity.

#### Scenario: Disable filtering for remote suggestions

- **WHEN** `filterOption=false` and the business supplies options that do not contain the current input
- **THEN** AutoComplete keeps those options eligible for display

### Requirement: Editing and search event boundaries

Native editing MUST emit `update:modelValue(value)` before `input(value, event)` and `search(value, event)`. Editing MUST NOT emit `change` or `select`. Blur or an Enter key not used for option selection MUST emit at most one deduplicated `change(value, event)`.

#### Scenario: Type then commit

- **WHEN** the user types and then blurs the input
- **THEN** update, input, and search occur during editing and one change occurs on commit

### Requirement: Selection behavior

Option selection MUST update the string value, emit `select(value, option, event)`, emit a committed change only when the value changed, close the popup, and keep DOM focus in the input. Selection MUST NOT emit input or search. Selecting the same value MUST still emit select without duplicate value or change events.

#### Scenario: Select with Enter

- **WHEN** an active enabled option is accepted with Enter
- **THEN** its string value is selected once, the popup closes, and the input remains focused

### Requirement: Clear behavior

Clearing MUST update the value to empty, emit `clear(event)`, close the popup, and keep input focus. It MUST NOT synthesize input, search, change, or select.

#### Scenario: Clear without search side effects

- **WHEN** the user clears a non-empty editable AutoComplete
- **THEN** only the canonical value update and clear event occur

### Requirement: Visibility and state

An editable focused AutoComplete MUST open when eligible options exist, including for empty input. It MUST close when no eligible options remain. Disabled and readonly states MUST block editing, clearing, opening, search, and selection; readonly MUST remain focusable for text inspection and copying.

#### Scenario: Focus an empty AutoComplete

- **WHEN** an enabled editable AutoComplete with eligible options receives focus while its value is empty
- **THEN** the suggestion popup opens

### Requirement: Shared defaults and slots

Both implementations MUST default to outlined medium appearance with clearable disabled. They MUST expose prefix, suffix, clear-icon, option, and footer slots. The option slot MUST receive normalized data that includes the raw option.

#### Scenario: Render an option slot

- **WHEN** a consumer provides the option slot
- **THEN** each eligible option is rendered from normalized data and retains access to its raw option

### Requirement: Editable combobox accessibility

AutoComplete MUST expose editable combobox semantics on the native input, listbox/option semantics on suggestions, and stable expanded, controls, active-descendant, selected, and disabled states. DOM focus MUST remain in the input while arrow keys move the active option. Escape MUST close without changing value, and Tab MUST close without preventing normal browser focus navigation.

#### Scenario: Navigate then leave with Tab

- **WHEN** the popup is open and the user presses Tab
- **THEN** the popup closes and focus advances according to the browser's default Tab order

### Requirement: Focus events and methods

AutoComplete MUST emit real `focus(event)` and `blur(event)` events and MUST expose `focus()` and `blur()` methods targeting the native input.

#### Scenario: Programmatic focus

- **WHEN** the consumer calls `focus()`
- **THEN** the native combobox input becomes the active element
