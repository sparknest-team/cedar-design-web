## MODIFIED Requirements

### Requirement: Deferred clear follows confirmation
A deferred reference clear MUST open and update the draft, MUST NOT publish before confirmation, and MUST retain configured emptyValue and validation/beforeCommit ownership. A changed empty draft MUST be confirmable while untouched incomplete ranges remain invalid. Cancel MUST restore the committed value. Blocked fields, locked endpoints and rejected controlled opening MUST NOT publish clearing.
