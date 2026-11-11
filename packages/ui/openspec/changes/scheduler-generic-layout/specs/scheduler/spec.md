## ADDED Requirements

### Requirement: Generic continuous layout units

Time-grid events MAY provide layoutGroupId. Adjacent or overlapping members in one date/resource column SHALL share a lane. Gaps SHALL start a new unit. Overlap counts SHALL count units, not their member blocks. Packing SHALL be deterministic and SHALL NOT mutate input events. Focusing a member SHALL raise all members in that rendered column; blur SHALL restore stacking.

### Requirement: Application-owned horizontal geometry

The event-layout prop SHALL accept stack, columns, or a function returning fractional left/width. Invalid finite bounds SHALL fall back to stack. Vertical positions SHALL remain time-based. Product-specific geometry SHALL live in demos.

### Requirement: Business-neutral contracts

SchedulerEvent SHALL NOT include taskId. Task mapping helpers SHALL live in demos and store relationships in metadata. Layout grouping SHALL NOT imply group editing, moving or backend persistence. Duplication SHALL detach layout group identity.
