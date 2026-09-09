---
'@cedarjs/ui': major
---

Align the first component-contract batch with Maple:

- Badge defaults to danger (red background, white text), supports left/right midpoint positions, and uses an independently copied SFC and styles.
- AutoComplete adds shouldOpen(inputValue), defaulting to non-empty input. It permits opening without replacing filterOption. Use shouldOpen={() => true} to allow empty-input suggestions.
- Form replaces scrollToFirstError with scrollToError: 'start' | 'end', selecting the first/last invalid field in rendered order. Migrate true to 'start'; omit to disable.
