## ADDED Requirements

### Requirement: Partial resource directories
Scheduler SHALL allow resourceIds absent from the loaded resources. Only known disabled resources SHALL prevent new assignments. Existing disabled associations may be retained or removed. Directory pagination and label changes SHALL NOT invalidate a pending save; a newly assigned resource becoming disabled SHALL prevent completion. beforeChange remains the server authorization and full conflict validation boundary.

### Requirement: Separate resource discovery and hydration
requestResources({ query, cursor?, signal }) SHALL return { items, nextCursor? }. resolveResources(ids, { signal }) SHALL return resource records for labels. Both MAY return promises. Data MUST remain per Scheduler instance. Static resources take precedence; hydration and search MUST NOT append visible rows. IDs absent from results SHALL render as their IDs without being removed.

#### Scenario: Search and pagination
- WHEN a new query starts
- THEN the old request is aborted and late responses ignored
- AND pages are deduplicated by ID, with selected labels retained across searches
- AND errors allow retry, emit resource-error, and do not modify event values

#### Scenario: Hydrate existing associations
- WHEN loaded events or an editor reference IDs absent from the directory cache
- THEN missing IDs are resolved in batches with in-flight deduplication
- AND labels update without changing resourceIds or resetting the editor draft
- AND request replacement and unmount invalidate pending results

### Requirement: Resource-neutral UI
Resource labels SHALL default to generic resource wording and MAY be customized with resourceLabel. Without resources, callbacks or associated IDs, ordinary views SHALL omit resource selection controls. Resource modes still require explicit visible resources. Include resource-free, equipment and remote directory demos.
