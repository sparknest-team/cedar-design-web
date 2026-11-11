## MODIFIED Requirements

### Requirement: Current task ownership
Only the current live element job and current preload attempt MUST mutate its element. Replacement and unmount MUST invalidate pending frames, preload callbacks and registered listeners.

### Requirement: Finite total attempts
Attempt counts MUST include the initial request, floor finite values to at least one, and fall back to three for non-finite values. Cache hits MUST NOT consume network attempts.

### Requirement: Public options and URL encoding
LazyOptions, LazyContext and LazyState MUST be publicly exported. CSS background URLs MUST be quoted and escaped. Module-wide configuration, cache and event replacement semantics MUST be documented. Inline resource-option changes MUST invalidate previous jobs.
