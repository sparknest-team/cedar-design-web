## Implementation

- [x] Render a pointer-following event ghost preserving slot content and instance colors.
- [x] Render snapped target previews in time grids, month and timeline views.
- [x] Add start/end resize handles and reuse projection logic for commit.
- [x] Clear transient state on cancel, drop, blur, permission changes and unmount.
- [x] Respect reduced-motion and prevent preview hit testing.
- [x] Add drag-feedback demo and document behavior and styling tokens.

## Verification

- [x] Scheduler suite: 69 tests pass (including ghost content, resize geometry, cancellation, stopped releases and cross-card gesture isolation).
- [x] Filtered vue-tsc reports no Scheduler diagnostics; unrelated repository errors remain.
- [x] Browser: documentation demo renders, themed event background and two resize handles confirmed.
- [x] Scoped git diff whitespace check passes.
- [ ] Manually inspect intermediate pointer-held animation in a browser (not covered by the completed browser check).
