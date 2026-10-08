# Non-color component token closure

## Why

Color contracts alone do not govern geometry, typography or animation. Several interactive components still hard-code transitions and omit reduced-motion behavior.

## What Changes

- Audit all non-color declarations in thirty-three paired families, preserving intentional desktop/mobile density.
- Route equal-valued spacing, typography and ordinary radius roles through existing system tokens.
- Add Tag fade-duration, Alert close-duration, Button transition-duration and Switch loading-duration on both platforms.
- Honor reduced-motion for those four effects without altering component state/events.
- Complete reduced-motion for Avatar, Collapse, Checkbox, Overlay and Trigger; expose ProgressGroup geometry and motion variables and stop all of its built-in effects.
- Keep shape geometry, local stacking, loading cycles and independent Ripple timing as component responsibilities.

## Scope

No prop changes or compatibility aliases. The paired default inventory and rationale are in design-ui/audits/non-color-token-resolution.md. This change does not claim browser layout acceptance for every component.
