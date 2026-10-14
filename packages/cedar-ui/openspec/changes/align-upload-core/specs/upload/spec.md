# Upload

## ADDED Requirements

### Requirement: accepted queue is authoritative
modelValue !== undefined SHALL define control. Same-tick proposals SHALL merge transactionally without permanent optimistic display. Automatic transport SHALL start only when a newly read uid is accepted. Delayed acceptance SHALL be observed. Cross-tick rejected proposals SHALL not consume accepted-list size limits. Parents own consistency of delayed list replacements.

#### Scenario: canceled preparation
- WHEN abort occurs while beforeUpload or headers/data/name is pending
- THEN no later network send or stale progress/success/error may commit.

#### Scenario: transformed files
- WHEN beforeRead or beforeUpload returns a replacement
- THEN accept, maxFileSize and maxTotalSize are rechecked, and concurrent transport replacements reserve their sizes.

### Requirement: resources and lifecycle
Only generated object URLs SHALL be revoked. Preview leases SHALL retain URLs until closure. Reset, remove, external identity replacement, deactivation and unmount SHALL invalidate affected pending operations. Hooks that return false or reject SHALL not leave unhandled errors or locked operations.

### Requirement: independent complete bodies
Both libraries SHALL expose matching Props/Emits/Slots/Expose and retain drag, directory, manual upload, custom request, external managed state, image/video preview and Form inheritance. No transport configuration SHALL mean read-only staging, not a network request. Shared visual token suffixes SHALL map to system roles.

