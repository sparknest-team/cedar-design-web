# InputTag shell ownership and live content tokens

## Why

InputTag now renders FieldDecorator but its content CSS still matches obsolete InputTag state classes. Form also repaints this shell, bypassing FieldDecorator state precedence. Thirty-three legacy shell tokens have no compiled consumers.

## What Changes

- Match content size/focus/disabled styles against actual FieldDecorator classes; disabled wins over focus for default chips.
- Remove Form's obsolete InputTag background/border/shadow overrides.
- Remove 33 unused InputTag shell declarations without aliases; retain and document 24 content tokens.
- Extend compiled consumer checks and Form ownership checks; add content cascade and DOM state tests.

## Limits

Cedar-only component. No xl density design, custom-color disabled redesign, full semantic-color migration, or browser layout acceptance.
