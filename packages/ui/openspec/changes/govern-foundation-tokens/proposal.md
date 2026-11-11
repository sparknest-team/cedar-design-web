# Foundation token defaults

## Why

Hover, Icon, Paper, Ripple, Skeleton and Space have shared names but ungoverned defaults. Theme overrides hide platform differences.

## What Changes

- Govern all existing root defaults for these six families without adding aliases.
- Hover opacity is 0.04, focusing opacity 0.12; focusing wins simultaneous states.
- Icon inherits host font size on both platforms. Applications requiring the former mobile standalone size must set size="20" or icon-size explicitly.
- Paper uses surface-default and border-default. Skeleton placeholders use state-hover (neutral fill2); shimmer uses transparent / surface-default / transparent.
- Space row and column gaps reference shared spacing steps, preserving existing numeric values.
- Remove redundant component dark overrides and embedded theme imports. Keep state-layer/currentColor semantics separate from text colors.

## Scope

No new props or variable names, no lifecycle rewrite, no claim of full browser visual acceptance.
