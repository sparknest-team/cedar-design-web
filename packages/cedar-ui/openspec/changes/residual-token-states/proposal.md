# Residual variable defaults and persistent selection

## Why

Residual inspection found an inappropriate border role for small next-day text, undocumented fallback-only variables and menu hover painting that bypassed persistent selection.

## What Changes

- Register Maple Carousel fade/card durations, Picker check color and TimeRange next-day text in token.less.
- Use system content-secondary for next-day text and content-brand for the selected check icon.
- Correct CSS variable prefixes in Picker and TimeRange documentation.
- Provide selected-hover background roles on both DropdownMenu implementations. Preserve Maple's translucent child cover rather than replacing its DOM or painting model.
- Exclude disabled and selected items from generic menu hover/active painting; disabled clears all selection and hover backgrounds.

## Compatibility

No props or runtime DOM changes. Carousel timing remains 300ms. New selected-hover defaults inherit each platform's selected background. No legacy aliases are introduced.
