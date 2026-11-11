## MODIFIED Requirements

### Requirement: Composition ownership
Earlier queued input normalization MUST NOT overwrite a later edit/composition buffer or caret. External model updates MUST NOT replace an active native composition buffer. Composition completion MUST retain existing text/numeric normalization, controlled-owner acceptance and event timing. Duplicate post-composition input MUST retain suppression.

### Requirement: Current Textarea empty policy
Textarea MUST read current empty-value/factory at clear time and current empty-values at display time. Policy changes MUST NOT emit model updates by themselves. Deferred clear MUST publish only on confirmation.
