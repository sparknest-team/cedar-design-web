## MODIFIED Requirements

### Requirement: Current layout ownership
Affix MUST compare measured state with its last published state, reevaluate viewport units from the current environment, and reject stale lifecycle/resize continuations. Field geometry MUST observe current refs after a root replacement and reject frames from earlier activation generations.

### Requirement: Drag session ownership
Color control listeners MUST belong to the owner view, end on deactivation/unmount and reject callbacks from previous gestures even when a new gesture has started.
