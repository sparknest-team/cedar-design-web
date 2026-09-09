## MODIFIED Requirements

### Requirement: Optional titles in editing workflows
Saving an empty or whitespace-only title through Scheduler SHALL produce `无主题` in Chinese or `Untitled` in English. Normalization SHALL precede validation and beforeChange without mutating the caller's draft. Invalid dates SHALL still be rejected. Built-in and custom editor saves and the imperative change method SHALL agree.

### Requirement: Time cell hover
Time cells SHALL not show a hover overlay during ordinary hover or drag interactions. Keyboard focus indicators SHALL remain available.
