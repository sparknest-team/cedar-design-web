# Table typed configuration

## ADDED Requirements

### Requirement: Opt-in row relationship
The library SHALL provide a typed configuration entry binding one row type to data, columns and their row callbacks while keeping published legacy types unchanged.

#### Scenario: Invalid typed column
- WHEN a typed configuration uses a misspelled path or a wrong row method
- THEN type checking rejects it, including inside grouped child columns, sorting and filtering.

#### Scenario: Existing Table consumes typed configuration
- WHEN the checked configuration is bound through Vue or TSX
- THEN the original Table renders, sorts, filters and expands the supplied rows without extra wrapping or transforms.

### Requirement: Honest row shape
Typed tree children SHALL share the business row type. The typed entry SHALL not promise automatically generated summary records are complete business rows.

#### Scenario: Summary compatibility
- WHEN the caller needs automatic legacy summaries
- THEN the original Table Props remain available unchanged; the opt-in typed entry instead accepts a complete-row custom summary.
