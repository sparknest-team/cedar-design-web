# Ripple lifecycle contract

- Defaults SHALL remain expand 200ms, fade 140ms, with 250ms minimum display and removal grace; the 30ms creation and 20ms activation scheduling remain internal implementation delays.
- Release SHALL wait until the transform's computed duration plus delay has elapsed from activation, and never fade before the 250ms display floor. Removal SHALL wait at least the greater of 250ms and computed opacity duration plus delay. Nonnegative valid CSS times are caller-owned; custom animations are not supported by this transition contract.
- Each wave SHALL be released once. Disabling/unmounting SHALL cancel all owned timers and direct wave nodes without touching nested directive instances.
- Document event registration and cleanup SHALL use the mounted ownerDocument; no SSR-time DOM access SHALL be added.
- Matching Enter/Space keyup or blur SHALL release keyboard feedback; unrelated keyup SHALL not end another held activation.
- Unit/compiler evidence SHALL not be relabeled as native device or OS reduced-motion acceptance.
