---
"@cedarjs/ui": patch
---

Deduplicate Notification close and cancel owned timers after close, updates, KeepAlive deactivation and disposal. Ignore stale dequeued callbacks, restart active display time on reactivation, and preserve CSS motion defaults.
