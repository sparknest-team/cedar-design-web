## ADDED Requirements

### Requirement: consistent explicit case matching
All eight implementations SHALL expose caseSensitive with their existing default matching behavior preserved. AutoComplete SHALL remove strict without an alias. Custom callbacks SHALL receive original query/data and SHALL take precedence over the built-in case policy. Each component's existing remote filtering bypass protocol SHALL remain valid. TreeSelect SHALL continue searching value with fieldNames mapping and case-sensitive defaults. Candidate rendering and keyboard eligibility SHALL agree after live changes.

### Requirement: existing multi-field custom filtering
Demos SHALL show OR matching on value and label using existing filterOption/filterTreeNode callbacks, including the explicit business case policy. Numeric zero, mapped/group options and existing model identities SHALL remain supported. Both libraries SHALL include public type tests and relevant runtime coverage, and both SHALL mark strict removal as a major migration.
