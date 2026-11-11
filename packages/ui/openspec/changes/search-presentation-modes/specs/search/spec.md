# Search

## MODIFIED Requirements

### Requirement: Explicit presentation modes
Search SHALL expose `presentation` with values `inline` and `popup`, defaulting to `inline` on both platforms. The previous `historyPopup` prop SHALL be removed.

#### Scenario: Default history menu
- WHEN an enabled Search with recent searches receives focus without a presentation prop
- THEN its inline input remains editable and its history menu opens.

#### Scenario: Popup history
- WHEN presentation is popup and Search receives focus
- THEN the local fullscreen search surface opens with the same accepted value, fields, history and event pipeline.

#### Scenario: Switching modes
- WHEN presentation changes while history is open
- THEN the previous history surface closes and stale closing state cannot prevent the next interaction.
