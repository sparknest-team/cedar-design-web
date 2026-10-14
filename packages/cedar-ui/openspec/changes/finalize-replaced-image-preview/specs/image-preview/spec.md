## MODIFIED Requirements

### Requirement: Imperative preview terminal cleanup

Each imperative preview SHALL release its host and notify its onClosed callback exactly once when it closes normally or is replaced.

#### Scenario: A new preview replaces an existing preview

- WHEN a consumer opens another imperative preview
- THEN the previous host is removed and its onClosed callback runs once
- AND the old handle cannot close the new preview.

#### Scenario: The terminal callback throws

- WHEN onClosed throws
- THEN the old singleton references and host have already been cleared.

#### Scenario: The terminal callback opens a newer preview

- WHEN onClosed synchronously opens another preview
- THEN the newer call remains active without an orphaned host
- AND the interrupted outer call returns undefined.
