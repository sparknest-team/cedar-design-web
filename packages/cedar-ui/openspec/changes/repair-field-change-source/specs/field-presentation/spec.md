## MODIFIED Requirements

### Requirement: Confirmation source ownership
Deferred fields MUST preserve the initiating confirmation Event through before-commit waiting. A later confirmation MUST NOT replace the original source. Programmatic confirmation MUST NOT fabricate a public Event. Existing value-only and custom change tuples MUST remain unchanged. Ordinary change Promise returns MUST NOT block closure.

### Requirement: Initial editor state
Input MUST honor initial controlled open and defaultOpen without emitting an unsolicited close during watcher initialization. Later edit-mode/read-pretty changes MUST retain editor reset behavior. defaultOpen MUST remain creation-only.

### Requirement: Native Textarea autofill policy
Both native textarea elements MUST expose autocomplete="off" consistently with Input and the documented Maple policy. Forwarded native metadata MUST remain intact. This DOM attribute contract MUST NOT be treated as a guarantee about every browser/password manager's autofill behavior.
