# Neutral Switch variant naming

## Why

Component appearance must not imply a separate design-system version or theme. Themes use default / maple brands and light / dark modes.

## What Changes

- BREAKING: Switch variants are circle / round / line / tonal; all eight shape-specific variables use switch-tonal-*.
- Update both platforms, demos, types, tests, contracts, Playground and documentation without compatibility aliases.
- Preserve shape geometry and state precedence.

## Impact

Consumers must update the fourth variant and its variable suffixes together. Invalid persisted Playground themes fall back to default dark.
