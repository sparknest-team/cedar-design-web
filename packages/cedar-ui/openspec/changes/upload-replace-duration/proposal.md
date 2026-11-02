# Atomic attachment replacement and video duration

Add opt-in `reupload` UI, `replace(file, replacement?)` and a `replace(next, previous)` proposal event to Cedar and Maple Upload. Preserve the existing Form/presentation owners. Replacement validates the new file before atomically proposing a new UID at the same list position. A rejected chooser, validation error, removal guard veto or stale target must preserve the old file. Existing controlled model semantics govern acceptance and transport ownership.

Add optional `UploadFileItem.duration` in seconds. Read local video metadata with a bounded lifetime; remote records provide their own duration. Show a localized duration label for cards and text lists, omitting unknown/invalid values.

Maple bottom Popup and ActionSheet additionally support opt-in header-only swipe dismissal; standard field editors opt in unless confirmation is pending. This has no desktop Popup counterpart. Swipe cancels drafts and retains existing scroll locking and focus behavior.
