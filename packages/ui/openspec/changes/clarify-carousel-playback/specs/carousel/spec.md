## ADDED Requirements

### Requirement: Playback and numeric timing
Carousel MUST use the effective CSS duration for motion settlement when `moveSpeed` is non-finite. Public finite fractional slide numbers MUST be truncated before loop wrapping or non-loop clamping. Documentation MUST distinguish temporary focus pause from application-controlled persistent stop and explicit restart.

#### Scenario: Invalid motion duration
- **WHEN** `moveSpeed` is non-finite and the track has a CSS transition duration
- **THEN** the settlement timer uses that CSS duration rather than an immediate timeout

#### Scenario: Explicit playback control
- **WHEN** an application sets `autoPlay` to false on focus entry
- **THEN** playback stays stopped after focus leaves until the application enables it again
