# Disable default floating field hints

## Why
Cedar and Maple should show ordinary placeholders by default. Floating hints should be an explicit choice.

## What Changes
- Change the shared boolean field hint default to false in both Vue libraries.
- Preserve explicit hint opt-in, InputGroup inheritance and external-label suppression.
- Update bilingual API documentation and regression coverage.

## Non-goals
No changes to hint-center, native enterkeyhint, picker instruction strings, or explicitly enabled hint examples.
