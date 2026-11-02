## MODIFIED Requirements

### Requirement: Rejected rule feedback ownership
An unexpected function-rule exception MUST remain observable to the public validate caller. The current task MUST release validating feedback while preserving a known previous business error; an older task MUST NOT clear newer pending feedback. No new business failure MUST be synthesized for an unexpected exception.
