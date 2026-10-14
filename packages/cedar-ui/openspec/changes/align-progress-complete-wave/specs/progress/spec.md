# Progress

## ADDED Requirements
### Requirement: Cross-platform progress contract
Both libraries SHALL use independent copies. Percent SHALL be a finite decimal 0–100 after normalization. Size SHALL support five presets and number|string custom CSS lengths (line thickness, circle diameter); strokeWidth overrides thickness. Determinate default status SHALL become success at 100; explicit status SHALL remain unchanged. Indeterminate SHALL omit aria-valuenow and never infer success.

#### Scenario: Dynamic gradient
Updating color to a gradient SHALL render reactive stops with stable SSR-compatible IDs; changing back SHALL remove defs.

#### Scenario: Complementary capabilities
Both libraries SHALL support line/circle, steps, track, rotate, textClass, text/default slots, animation, bufferColor and showText=true. Steps SHALL apply only to line mode, invalid counts ignored and finite counts floored. Buffer color decorates the remaining line track, not a second numeric value.

### Requirement: Group text and overflow
ProgressGroup SHALL use showText and text slot, not boolean status/status slot. Segments SHALL retain logical values for legend and tooltip, but both line and circle geometry SHALL clip cumulative display at max. Keyboard focus SHALL expose tooltip and Escape SHALL dismiss it.

