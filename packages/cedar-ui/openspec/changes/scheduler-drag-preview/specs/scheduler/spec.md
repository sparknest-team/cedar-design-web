## ADDED Requirements

### Requirement: Visual drag feedback
Moving an event SHALL render an aria-hidden, inert ghost using its event content and theme colors. Pointer movement over valid targets SHALL render a snapped projection and expected times; the preview MUST NOT commit changes. Preview elements MUST NOT intercept hit testing. Escape, pointercancel, window blur, drop, permission changes and unmount SHALL clean up listeners and ghosts.

### Requirement: Live bidirectional resize
Timed grids SHALL offer start and end handles. Resizing SHALL update the projected top/height and both timestamps by step increments. Duration MUST remain at least one step. Projection and final commit SHALL use the same calculation. Preview transitions SHALL honor prefers-reduced-motion. Failed/cancelled saves MUST retain original events.

### Requirement: Gesture isolation
Pointer release and cancellation SHALL be handled in the capture phase so custom card descendants cannot leave stale gestures by stopping propagation. A new pointer press SHALL cancel any prior gesture before the new card starts tracking movement. Resizing one event MUST NOT change another event's dates.
