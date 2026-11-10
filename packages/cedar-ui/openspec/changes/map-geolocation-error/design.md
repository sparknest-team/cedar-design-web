## Design

Geolocation failure rejects its internal request, is reported as an ordinary event without awaiting listener results, and releases the request state. A per-request generation prevents stale completion, error reporting and map movement after deactivation, replacement or unmount. No external SDK implementation or API credentials are supplied by this change.

The latest move request emits `loaded:address` when it settles, including failure or invalidation, so the owning MapSelect can clear waiting without interpreting ordinary event returns. Older requests cannot clear a newer request. During unmount, optional SDK `off` and `destroy` methods are invoked with the original listener and instances; cleanup of later resources remains reachable if an earlier disposer throws.
