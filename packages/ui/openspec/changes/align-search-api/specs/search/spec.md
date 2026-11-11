# Search Specification

## ADDED Requirements

### Requirement: Shared text and field model

Search MUST support controlled `modelValue`/`modelField`, uncontrolled `defaultValue`/`defaultField`, and a string-valued `SearchField`. `modelValue` and `modelField` MUST take precedence over internal state. Maple MUST NOT expose the legacy `searchText` or `searchField` aliases in the aligned API.

#### Scenario: Controlled text and field

- **WHEN** Search is mounted with controlled text and field props
- **THEN** user edits emit their canonical update events while rendered values remain controlled by the props

#### Scenario: Uncontrolled initial values

- **WHEN** Search is mounted with default text and field values
- **THEN** it starts from those values and later default-prop changes do not reset user state

### Requirement: Editing event boundaries

Search MUST forward consumable editing as `update:modelValue(value)` before `input(value, event)`. It MUST forward Input's committed blur or Enter value as one `change(value, event)` and MUST NOT convert every input event into change.

#### Scenario: Edit then blur

- **WHEN** the user edits a search value and then blurs the input
- **THEN** Search emits input during editing and one deduplicated change on commit

### Requirement: Clear behavior

Clearing MUST update the text and field model to empty, emit `clear(event)`, MUST NOT emit `input`, `change`, or `search`, and MUST keep focus and an eligible history surface available.

#### Scenario: Clear without search side effects

- **WHEN** the user clears a non-empty editable Search
- **THEN** its value becomes empty, clear receives the activation event, and no edit-commit or search event is synthesized

### Requirement: Search submission

The search icon, common search button, Enter key, and history selection MUST each emit exactly one `search(result, event)`. Search MUST NOT submit while disabled, readonly, or loading, and submission MUST NOT actively blur the input.

#### Scenario: Submit with Enter

- **WHEN** the user presses Enter in an enabled, editable, non-loading Search
- **THEN** Search emits one search result and the input remains focused

#### Scenario: Block repeated loading submission

- **WHEN** Search is loading
- **THEN** icon, button, and Enter activation do not emit search

### Requirement: Search result and controlled history

`SearchResult` MUST contain `modelField?`, required `modelValue`, optional `model`, and `recentSearches`. It MUST preserve the submitted text, while the generated history MUST trim its key, ignore empty keys, deduplicate to the front, and respect `maxSearchHistoryCount`. Search MUST NOT persist history internally.

#### Scenario: Build the next history list

- **WHEN** a value with surrounding whitespace is searched against a list containing its trimmed form
- **THEN** the result preserves the submitted value and returns one trimmed history item at the front within the configured limit

### Requirement: Field model synchronization

When fields and a model object are provided, only the current field MUST hold the search text and the other candidate fields MUST be reset. Each logical update MUST emit `update:model` at most once. Changing fields MUST clear text, emit canonical field and value updates, commit one change, and refocus the input.

#### Scenario: Change the active field

- **WHEN** the user selects another search field
- **THEN** Search updates the field, clears the text and model once, emits one change, and focuses the input

### Requirement: Common search button API

Both implementations MUST expose `searchButton=false`, `buttonText`, `buttonProps`, and `loading=false`. Maple MAY render the common search button through its mobile action area and MAY retain its cancel-oriented action properties.

#### Scenario: Render a text search button

- **WHEN** `searchButton` is enabled with `buttonText`
- **THEN** an accessible search action with that text is rendered and submits the current result once

### Requirement: Shared defaults and platform presentation

Both implementations MUST default `clearable` to `false`, `variant` to `outlined`, and `size` to `md`. Cedar MAY use an anchored history menu. Maple MAY use a full-screen history popup by default and retain mobile shape, color, label, and cancel-action properties.

#### Scenario: Render shared defaults

- **WHEN** Search is rendered without appearance or clearability props
- **THEN** it uses the outlined medium input contract and does not expose an active clear action

### Requirement: Accessibility and exposed methods

The input and all search/history actions MUST keep native or equivalent accessible semantics and names. Search MUST expose `focus()` and `blur()` that target the native input.

#### Scenario: Programmatic focus

- **WHEN** the consumer calls `focus()`
- **THEN** the native search input becomes the active element
