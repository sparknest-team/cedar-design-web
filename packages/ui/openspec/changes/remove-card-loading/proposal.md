## Why

Card.loading duplicates the existing Loading directive while only replacing the body and suppressing the Card click event. Loading presentation belongs to Loading, not the content container. The user requested removal of unnecessary Card loading API and all related content.

## What Changes

- **BREAKING**: remove loading from Cedar and Maple Card Props and runtime, with no alias.
- Remove body replacement, loading click guard, loading styles/imports, Card loading demos and their documentation/locale entries.
- Migrate the existing description practice to the Loading directive; retain shared Loading and its existing Card composition examples.
- Keep both Card implementations identical and update contract tests and demo inventory.

## Impact

Use v-c-loading / v-mp-loading with auto-registration, or locally import vLoading and use v-loading. Loading retains slot content; explicitly disable interactive children when necessary. No component instance or runtime is shared between libraries.
