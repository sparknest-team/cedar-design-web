# Notification timer ownership

Notification duration (3000ms, 0 persistent) is business display time, independent of CSS enter/leave tokens. Close emits once per mounted instance, cancels its pending timer, and cannot restart after close. Reset-on-update restarts active instances only. KeepAlive deactivation cancels timers and activation restarts the full configured display duration; unmount cancels all owned callbacks, including already-dequeued generation-stale callbacks. SSR does not schedule timers. This is Cedar-only; no Maple Notification is invented.
