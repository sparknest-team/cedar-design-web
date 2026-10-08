## Architecture

AutoComplete remains a free-text Input plus Trigger and Select suggestions. Both libraries independently own the same component, props, public types, Menu token bridge and contract tests. Local useInputForm and Input connect each library's existing Form system and desktop-hover/mobile-touch behavior. No shared runtime or platform configuration is introduced.

shouldOpen controls opening, filterOption filters candidates. Input owns editing/focus/clear notifications; AutoComplete only publishes one Form change on suggestion selection. Trigger options cannot override controller-owned opening/disabled state or the explicit popupContainer.

Values commit as strings. Selecting honors the same maxLength/wordLength/wordSlice rules as typing, while select metadata preserves the original option. Rich content uses option.render or the option slot; labels are text, without legacy VNode/function label aliases.

Vue useId provides deterministic per-app ARIA IDs. Keyboard listeners remain on the input; Tab is never intercepted globally.

## Styling and demos

Use semantic AutoComplete tokens mapped locally onto the Select menu tokens. Dependency styles stay in style/index.ts for module deduplication. Ten topics have separate demo cards, with direct Chinese/English source files driven by the documentation language switch.
