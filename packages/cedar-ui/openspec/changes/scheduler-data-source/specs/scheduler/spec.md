## ADDED Requirements

### Requirement: Independent range loader
`useSchedulerDataSource` SHALL accept a requestEvents callback (or ref), reactive range, optional reactive resourceIds/enabled, cacheTime and maxCacheEntries. It SHALL expose writable events, loading, error, loadedRange, refresh, cancel and invalidate. Range endpoints SHALL use exclusive end semantics. SSR SHALL not initiate requests.

### Requirement: Latest request wins
Navigation, disabling and scope disposal SHALL abort pending work. Responses from obsolete generations SHALL never publish events, errors or loading changes, including endpoints that ignore AbortSignal. A new range SHALL clear prior-window events. Undefined/disabled ranges SHALL clear events without a request.

### Requirement: Atomic publication and cache consistency
Responses SHALL be validated as complete arrays of valid events with unique IDs before publication. Published events and cached events SHALL have detached dates and resource IDs. Exact range and sorted unique resource IDs SHALL form the key. TTL and LRU SHALL bound caching. Source replacement and local reactive edits SHALL clear all cached windows. Local edits SHALL also cancel pending queries.

### Requirement: Explicit retry and persistence separation
Refresh SHALL bypass the current cache and resolve a boolean; errors SHALL be exposed without throwing asynchronous watch errors. Invalidate SHALL only clear cache. Cancel SHALL retain published events. Persistence SHALL remain application-owned through existing before-transaction hooks; remote writes SHALL use changes, not replace a full database with a partial window. The documentation SHALL explain that global conflicts require server validation and window changes invalidate local history.
