## ADDED Requirements

### Requirement: Public token consumer accountability
Badge and Tag declarations SHALL reach a compiled CSS property through variable references or have an explicit reviewed cross-component hold.

#### Scenario: Dead alias chain
- **WHEN** declarations only reference one another and never reach a CSS property
- **THEN** the consumer check rejects them

#### Scenario: Less-generated consumer
- **WHEN** a consumer uses interpolated token names or mixins
- **THEN** the check inspects compiled CSS instead of relying on raw text counts

#### Scenario: Removed hover declarations
- **WHEN** consumers consult Tag public declarations and documentation
- **THEN** the 13 preset icon-bg-hover names and two icon-hover size names are absent without aliases

#### Scenario: Cross-component reference
- **WHEN** custom-icon-bg-hover is inspected
- **THEN** it remains explicitly held for Cedar InputTag and is not represented as an effective standalone Tag customization point
