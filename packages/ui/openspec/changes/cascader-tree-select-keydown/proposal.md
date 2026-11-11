## Why

Cascader and TreeSelect once listeners run after the internal Enter action, so preventing the event cannot stop opening.

## What Changes

- Expose standard keydown notifications before keyboard actions for Cascader on both platforms and Cedar TreeSelect.
- Forward editor keyboard notifications through the public component and preserve Vue once semantics.
- Keep keyboard events as notifications, without awaiting listener results.
