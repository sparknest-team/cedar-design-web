## MODIFIED Requirements

### Requirement: Document theme lifetime
An explicit theme MUST own only its rendered document. Active themes MUST resolve by stable creation order with descendants winning over ancestors. Updates MUST NOT reorder owners. Undefined, deactivation and unmount MUST release ownership. The final release MUST restore the original attribute exactly. SSR MUST NOT mutate a document. The global flag MUST continue to select configuration injection scope only.
