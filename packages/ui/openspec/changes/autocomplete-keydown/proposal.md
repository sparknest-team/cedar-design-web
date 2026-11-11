## Why

AutoComplete once keyboard listeners run after the internal action, preventing callers from suppressing suggestion navigation or opening.

## What Changes

- Declare the original keydown as a standard event, emitted before internal handling on both platforms.
- Forward editor input keydown through the public component and preserve once listener ownership.
- Keep keyboard events as notifications and do not await listener results.
