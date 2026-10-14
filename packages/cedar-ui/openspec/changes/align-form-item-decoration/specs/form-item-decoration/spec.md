# FormItem decoration

## ADDED Requirements

### Requirement: Independent decoration copies
Both packages SHALL maintain copied decoration props and label rendering locally; they SHALL NOT share runtime implementations or instances. Maple SHALL expose contentClass, contentFlex, labelAttrs, labelComponent, showColon and tooltip with the same semantics as Cedar.

#### Scenario: Custom decoration
- WHEN labelAttrs.for targets the native control id and contentFlex is false
- THEN the label SHALL preserve native association and content SHALL permit caller-owned layout.

### Requirement: Presentation status priority
An explicit validateStatus SHALL override automatic presentation without changing validation results. Only error SHALL display error messages; other states SHALL permit help. Automatic validation SHALL progress from validating to success/error. Empty explicit status/message in setFields SHALL clear presentation.

#### Scenario: Successful presentation with invalid data
- WHEN an invalid field has validateStatus=success
- THEN validate SHALL return its actual error and the field SHALL NOT display stale error presentation.
