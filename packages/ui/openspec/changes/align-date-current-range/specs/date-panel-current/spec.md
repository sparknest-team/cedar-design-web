# ADDED Requirements

## Requirement: Independent current capabilities
showCurrent MUST control only current date highlighting. showNowButton MUST provide a single-selection current-date action, using output valueFormat and the same disabled, readonly, date/time rules and confirmation transaction as ordinary selection. Neither capability MUST alter model on mount.

### Scenario: Deferred current selection
- GIVEN disableConfirm=false
- WHEN current selection is invoked
- THEN only draft selection changes until confirmation.

## Requirement: Range exchange policy
Interaction candidates MUST be ordered by the shared local normalization algorithm. exchangeTime=true swaps whole date/time endpoints; false swaps calendar dates while preserving start/end clock positions. Final normalized candidates MUST be validated by endpoint rules. Model values, typed values and shortcuts MUST NOT be silently reordered.

### Scenario: Locked endpoint
- GIVEN a locked start endpoint
- WHEN an interactive reversed range would move it
- THEN the owner rejects the candidate.
