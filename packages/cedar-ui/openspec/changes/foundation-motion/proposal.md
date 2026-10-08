# Foundation motion policy

## Why

Shared color and geometry defaults do not guarantee consistent motion or respect for reduced-motion preferences.

## What Changes

- Add six paired component tokens: hover transition-duration; icon spin-duration; ripple expand-duration / fade-duration; skeleton animation-duration / transition-duration.
- Govern system fast (120ms) and slow (240ms) durations; Paper and Skeleton surface transitions use slow, Hover uses fast.
- Under reduced motion, stop Icon spin, skip name-switch delays, suppress decorative Ripple/Shimmer and remove Hover/Paper/Skeleton transitions.
- Keep Ripple lifecycle timers separate from CSS visual durations. No prop aliases or semantic-color changes.

## Limits

This stage covers these five primitives, not every animation in the library or externally supplied custom animation classes.
