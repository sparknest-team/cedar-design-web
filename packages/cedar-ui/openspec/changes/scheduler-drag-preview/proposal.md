# Scheduler drag and resize feedback

Render a pointer-following, inert copy of the dragged event (including its slot content), and a snapped target preview without mutating persisted events. Disable button ripple/text selection during dragging. Add a top resize handle alongside the existing bottom handle, with live start/end previews, minimum step duration, Escape cancellation and cleanup. Preserve existing commit validation and beforeChange.

No new public props. Precision resize applies to timed day/week/resource-day grids; month/timeline continue date-based movement. Maple remains unchanged.
