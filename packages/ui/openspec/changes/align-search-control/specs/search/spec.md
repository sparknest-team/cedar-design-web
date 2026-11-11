# Search

## ADDED Requirements

### Requirement: Immutable field proposals
Search SHALL never mutate the supplied model. update:model SHALL propose a fresh object, preserve unrelated keys, clear declared fields and set the requested field. Search results SHALL use accepted controlled props after nextTick.

#### Scenario: Parent rejects field and value changes
- WHEN a controlled parent ignores field, model and value proposals
- THEN subsequent search uses the original field, value and model.

### Requirement: Deterministic value precedence
modelValue SHALL take precedence over model[currentField], which SHALL take precedence over local defaultValue. An absent field value in a supplied model SHALL render an empty string.

### Requirement: Shared event and history control
Both libraries SHALL preserve input-before-update, one committed change, clear-without-search, immutable normalized bounded history, and disabled/readonly/loading guards. Deactivation/unmount SHALL cancel pending actions.
