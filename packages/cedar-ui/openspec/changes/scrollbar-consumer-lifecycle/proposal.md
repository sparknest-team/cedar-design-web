# Scrollbar consumer lifecycle

Preserve public native scroll overloads and style tokens; repair zero-origin/no-scroll and stale geometry correctness. Three independent copies gate retained commands/events/measurement by lifecycle, binding epoch and operation/node identity. Logical invalidation cannot undo completed native scrolling; no animation/cancel API introduced. Native observer and Thumb drag ownership are separate proof boundaries.
