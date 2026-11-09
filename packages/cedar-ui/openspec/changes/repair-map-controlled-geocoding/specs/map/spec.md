## ADDED Requirements

### Requirement: Controlled map value and asynchronous geocoding

Map and MapSelect SHALL emit independent model proposals without mutating the supplied value. MapSelect SHALL render accepted model changes and discard obsolete geocoding completions after replacement or disposal. Current geocoding failures SHALL emit `error` with the original cause.

#### Scenario: Parent rejects a geocoding result

- **WHEN** a current geocoding request completes and the parent does not accept its model proposal
- **THEN** the parent value remains unchanged and the displayed address follows the accepted model

#### Scenario: A later model supersedes an older request

- **WHEN** the model changes while geocoding is pending
- **THEN** the older request cannot emit a model change or error after it completes
