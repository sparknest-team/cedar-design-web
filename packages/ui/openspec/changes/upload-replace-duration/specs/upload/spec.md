# Upload requirements

- `reupload` defaults false. Replacement actions respect disabled/readonly and requestChoose.
- `replace(file, replacement?)` selects one file or uses a supplied File, preserving the item's list position with a new UID.
- accept, beforeAdd, beforeRead, count, file size and total size rules apply; count/total exclude the replaced item.
- beforeRemove can veto replacement; it runs after new-file read/validation. Rejected/obsolete proposals do not cancel old work.
- Replacement is an atomic model proposal, not a remove-plus-append; it emits replace and change, not remove. Parent acceptance invalidates obsolete transports and releases owned URLs when preview leases finish.
- `duration` is finite nonnegative seconds. Display mm:ss or h:mm:ss. Unknown metadata does not show a fabricated duration.
- Local metadata reading cleans temporary URLs, listeners and timeout on success, error, cancellation or unmount; no remote metadata fetch is initiated by this feature.
