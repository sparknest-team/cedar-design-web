---
"@cedar-design/ui": patch
---

Cancel Anchor visual scroll and measurement on replacement, suspension, disposal and container/boundary change. Isolate stale/replayed notifications, measurements and completion; preserve same-target pending change. Replace private uncancellable tween loop with owned cancellable RAF retaining300ms/quartOut and current reduced-motion handling. Release AnchorLink registrations by DOM identity on href change/disposal. No public API or CSS token added.
