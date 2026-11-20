## ADDED Requirements

### Requirement: Align the Table pagination bar
Table SHALL accept `pagination.align` with values `start` and `end`. The default placement SHALL align to the inline end. Table SHALL render inline pagination below its rows.

#### Scenario: Direction changes
- WHEN a Table with start-aligned pagination switches from LTR to RTL
- THEN its pagination moves from the left edge to the right edge
