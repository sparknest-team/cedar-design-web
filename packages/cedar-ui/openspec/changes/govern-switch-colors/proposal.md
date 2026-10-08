## Why
Switch uses unrelated fallback colors and Maple dark overrides. A single foreground cannot contrast against both solid tracks and the tonal unchecked tonal track.

## Changes
Govern eight existing color defaults and add two public color tokens on both platforms: switch-tonal-text-color and switch-tonal-handle-color. Preserve existing props, events, geometry and unavailable-state priority. Document the tonal foreground migration explicitly.

## Non-goals
No runtime sharing, interaction changes, arbitrary custom-color contrast guarantee, motion or geometry redesign.
