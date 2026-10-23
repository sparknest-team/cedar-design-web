---
"@cedarjs/ui": patch
---

Keep private time-column scroll tasks cancellable and owner-window scoped; reject stale/replayed frames and settle invalid durations/reduced motion immediately. Preserve positive linear timing. Component lifecycle wiring remains a separate audit phase.

Follow-up: TimeColumn now owns the private disposer across hiding/suspension/disposal and current inputs; consume render continuations once, recheck geometry ownership and reject stale item commands. Preserve normal100ms timing and public API. Runtime-candidate closure is not parallel panel/native acceptance.
