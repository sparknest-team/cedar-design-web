## ADDED Requirements

### Requirement: Typed editor slot
The editor slot SHALL expose action (create/edit), event (detached draft), error, errorMessage, readonly, pending, save, remove and close. save(event?) SHALL validate and preserve the draft ID. Custom slot save() SHALL use the custom draft dates, not the built-in form's private date refs. Validation errors SHALL be visible to the slot. remove SHALL do nothing for new drafts. Pending SHALL prevent submission and closure.

### Requirement: External editor requests
With editable=false, toolbar new, cell create and template drop SHALL emit editor-request with action=create, a fresh complete draft, source (toolbar/cell/drop), and readonly=false. Existing event clicks SHALL emit action=edit, source=event and effective readonly. The internal editor SHALL NOT open or modify values. No editor-request SHALL be emitted when using the built-in editor. Disabled SHALL block requests; readonly/loading SHALL block creation but permit readonly event viewing; pending SHALL block requests. All targets retain date/time/resource semantics.

#### Scenario: External confirmation
- WHEN the application receives editor-request
- THEN it owns the form's cancel/replace/pending lifecycle and may navigate or display any UI
- AND it submits a complete event through change(), awaits its boolean result, and closes only after success
- AND beforeChange, loaded-event conflict validation and commit concurrency checks remain active

#### Scenario: Existing click notifications
- WHEN an actual cell or event is clicked
- THEN cell-click or event-click remains available
- AND consumers SHOULD use only editor-request to open the external editor, avoiding duplicate windows
- AND toolbar and drop creation SHALL NOT emit cell-click

External applications must detect changes since opening their form (snapshot/version) and perform server-side validation; change() only protects concurrency during its own commit.
