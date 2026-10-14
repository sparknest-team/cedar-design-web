# DropdownMenu positioning

## ADDED Requirements

### Requirement: Consistent strategy across levels
Both libraries SHALL expose strategy: 'absolute' | 'fixed', default 'absolute'. Root and every open or subsequently opened submenu SHALL react to root strategy changes without changing selected values or open state. Nested independent DropdownMenu instances SHALL retain their own strategy.

#### Scenario: Update an open three-level tree
- GIVEN a root and two submenu levels are open with fixed strategy
- WHEN strategy becomes absolute
- THEN all three Trigger instances use absolute without emitting select or model changes.

### Requirement: Explicit independent implementation
Each package SHALL own its source. Public positioning options SHALL NOT be injected through platform-specific props spreads. Visual differences SHALL live in local appearance code. No compatibility alias is added.
