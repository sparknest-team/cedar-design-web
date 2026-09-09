## Why

Loading still uses mask for its content-covering layer, contrary to the shared overlay naming used for interaction overlays.

## What Changes

- **BREAKING**: rename Loading content-mask to content-overlay and loading-mask-background to loading-overlay-background in both libraries, without aliases.
- Update directive writes/removal, style declarations and consumers, tests, docs, and checked-in Playground runtime assets.
- Rename the Hover image overlay example; preserve character masks, visual gradient masks and negative tests asserting removed mask APIs.

## Impact

Custom CSS using previous classes/tokens must migrate. Public Loading Props and directive background option stay unchanged. Click interception remains unchanged.
