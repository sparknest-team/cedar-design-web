---
"@cedarjs/ui": patch
---

Isolate Typography copy-feedback timers and ellipsis measurement frames by generation and lifecycle. Cancel replacements, feature changes, deactivation and disposal; reject stale/replayed/reentrant work and unavailable interaction. Preserve copy-delay default3000ms and disabled-text measurement; no CSS token or public API added.
