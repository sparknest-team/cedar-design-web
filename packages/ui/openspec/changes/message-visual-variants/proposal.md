# Message visual variants

## Why
Implicit platform colors made identically named Message tokens mean different things.

## What Changes
Both platforms expose neutral, tonal and solid variants with identical color-role defaults; preserve neutral desktop and solid mobile defaults. Replace legacy ambiguous color tokens without aliases before release. Remove unused close offsets.

## Impact
Message props, service options, exported types, tokens, docs and regression checks on both platforms.

