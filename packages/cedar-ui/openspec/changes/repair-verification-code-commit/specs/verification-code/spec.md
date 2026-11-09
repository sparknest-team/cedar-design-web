# VerificationCode confirmation contract

## ADDED Requirements
### Requirement: Completion follows final deferred acceptance
VerificationCode SHALL retain direct accepted-code finish notifications. In deferred mode it SHALL withhold finish while the draft is unconfirmed or a guard is pending/rejected. A successful changed-value commit SHALL publish model/change then a matching queued finish once. Canceling, resetting to another value, external replacement, disabling, deactivation or unmount SHALL retire stale completion notifications.

#### Scenario: A pending guard
- GIVEN a new full draft
- WHEN beforeCommit waits for done
- THEN no public finish or model update occurs
- AND after done(true), model/change precede one finish for the accepted code.

### Requirement: Public contracts describe existing field support
Both entries SHALL expose the actual component and existing methods. Model/empty-value types SHALL preserve supported nullable clear values without admitting arbitrary objects. Existing editor events/read slot and payload/done/context guard protocol SHALL be documented. Type/align enums SHALL diagnose invalid values, and zero gutter SHALL remain valid. No loading contract SHALL be introduced.

#### Scenario: Explicit null model
- GIVEN an explicit null model with a stale nonempty default
- THEN native cells display empty rather than reviving the default
- AND no unsolicited model proposal is emitted.
