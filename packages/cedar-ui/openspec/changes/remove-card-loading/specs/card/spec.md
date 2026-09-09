## ADDED Requirements

### Requirement: Loading is composed outside Card
Both Card components SHALL omit loading from public Props and SHALL render their default slot without conditional loading substitution. Card SHALL NOT own a loading indicator, busy state, loading class, or loading-specific click guard.

#### Scenario: Ordinary content and clicks
- **WHEN** a Card has body and footer slots
- **THEN** both remain mounted and Card emits click for normal clicks.

#### Scenario: Consumer needs loading feedback
- **WHEN** a consumer applies the library Loading directive
- **THEN** Loading manages its overlay without Card acquiring a loading Prop.
- **AND** overlay clicks prevent their default action and SHALL NOT bubble to the Card or its ancestors; ordinary clicks resume after the overlay is removed.
- **AND** the consumer explicitly controls disabled/aria-busy if required.

### Requirement: Paired documentation follows API removal
Both libraries SHALL remove the Card loading demo and stale property documentation. Existing Loading directive examples SHALL remain available as the migration destination.
