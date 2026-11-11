## ADDED Requirements

### Requirement: Accepted index drives rendering
Carousel SHALL render controlled current without optimistic mutation. User interaction SHALL emit one update:current/change proposal. Rejection SHALL restore the accepted position; later external acceptance SHALL update layout without emitting another notification.

### Requirement: Geometry and effects
Both libraries SHALL implement slide, fade and card effects, multi-slide sizing, spacing, auto-sized items and centered positions. Visible slide ARIA SHALL describe every visible item rather than only the active index.

### Requirement: Scoped interaction and lifecycle
Pointer mouse/touch interactions SHALL coexist, ignore editable children and cancel safely. Autoplay SHALL pause while dragging, focused, hidden or deactivated, and while hovered when configured. Timers, observers and listeners SHALL be removed on disposal.

### Requirement: Independent copies
Both component families SHALL export matching Props, Emits, Slots and Expose types and contain independently maintained local implementation files.
