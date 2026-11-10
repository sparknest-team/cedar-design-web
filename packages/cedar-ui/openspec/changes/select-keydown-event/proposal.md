## Why

Select previously handled keyboard actions before forwarding native keydown listeners, so an application could not prevent opening or selection. Once listeners ran after the internal action.

## What Changes

- Declare `keydown` as a standard event on both platforms and notify it before internal input/search keyboard handling.
- Honor `preventDefault()` and Vue once-listener ownership without treating the event as a Promise task.
- Keep desktop editor Enter submission and mobile explicit confirmation policies.
