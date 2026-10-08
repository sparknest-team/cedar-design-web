# Close InputTag legacy icon token hold

## Why

InputTag embeds Tag close-btn controls, while old CSS still targets c-icon-hover pseudo-elements. These unreachable references kept an otherwise unused shared Tag token alive.

## What Changes

- Remove obsolete InputTag icon-hover mixin and default/focus pseudo-element rules, plus redundant custom Tag foreground rule.
- Remove Cedar input-tag-tag-remove-icon-color-bg and its focus token, and paired tag-custom-icon-bg-hover declarations and public tables.
- Remove the consumer-audit exemption; compile InputTag to reject the obsolete CSS and add real-DOM integration regressions.
- Keep existing visual and close behavior; do not introduce replacement variables or aliases.

## Limits

Maple has no InputTag. This is not full InputTag token governance, new hover styling or browser visual acceptance.
