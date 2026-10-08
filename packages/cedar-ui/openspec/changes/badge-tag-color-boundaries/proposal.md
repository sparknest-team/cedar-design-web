# Badge and Tag color boundaries

## Why

Preset Tag loading and outline states can be overridden by filled hover and dark rules. Badge color regression lacks a persistent entry point.

## What Changes

- Route Badge fallback red through system danger; preserve intentional neutral/palette pairs and remove redundant Maple dark defaults.
- Govern existing Badge colors and Tag preset color defaults without adding token names or aliases.
- Make Tag preset outline transparent, suppress loading hover, and move dark background values into public tokens.
- Document custom-color, unchecked, icon, contrast and unconsumed-token boundaries in both menu guides.

## Limits

No arbitrary preset/custom contrast guarantee, geometry redesign, or browser visual acceptance.
