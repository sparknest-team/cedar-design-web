## MODIFIED Requirements

### Requirement: Native editor ownership
Search MUST expose its configured ID on only the active keyword editor. Inactive/cached inputs MUST have distinct internal IDs and leave the accessibility/Tab order. The reference MUST remain the sole named native form value carrier, including implicit forms; the popup MUST NOT duplicate that name. Explicit form metadata MUST be retained for active native constraint validation. Visible labels MUST associate with their own input. Explicit ariaLabel MUST precede label fallback, including field-selector configurations. Returning to read presentation MUST release stale history ownership.

### Requirement: Manual loading feedback
Direct and reading presentations MUST announce manual busy state while preserving the existing editable-input and blocked-repeat-search contract. Ordinary search/change listener Promises MUST NOT create loading tasks. Input MUST honor native aria-busy metadata in the absence of internal loading/pending; internal busy MUST take precedence over a false external hint.

### Requirement: Public entry and documentation
Maple Search sub-entry MUST offer named and default component exports with matching identity. Root/sub-entry type consumers MUST preserve nullable keyword values and event types. Documentation MUST describe actual edit-mode/type/read/loading/native identity contracts without obsolete auto-loading or presentation aliases. No new action or before hook is introduced.
