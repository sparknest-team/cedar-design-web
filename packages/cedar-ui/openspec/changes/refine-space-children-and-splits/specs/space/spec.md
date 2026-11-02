## ADDED Requirements

### Requirement: Stable scoped child identity
Space SHALL preserve the path of keyed Fragments and child keys, including string/number/symbol identities. It SHALL NOT mutate caller VNodes or cache identities across instances. Empty text, whitespace text, comments and empty Fragments SHALL NOT create spacing items, while visible text, zero and empty elements SHALL remain.

### Requirement: Atomic wrapped separator groups
When wrap and meaningful split content are present, each separator SHALL stay with its preceding item. Switching wrap, direction, split and inherited reading direction SHALL preserve keyed child component identity. Nonwrapping layout SHALL keep its existing Flex items, gap, alignment and justify semantics. Trailing separators at line boundaries are allowed; oversized unbreakable groups can require content shrink/overflow handling.

### Requirement: Runtime structure diagnostics and public entry
Development validators SHALL check direction/align/justify values and size tuple structure. Valid CSS length expressions, numeric strings and zero remain supported; tuples contain exactly two lengths rather than preset names. Invalid size shapes SHALL use md spacing rather than emitting undefined. Maple SHALL expose a named Space from its subpath, matching the standard root and subpath types.
