## ADDED Requirements

### Requirement: Shared foundation motion
Both platforms SHALL expose matching component motion tokens and SHALL honor prefers-reduced-motion for built-in Hover, Icon, Paper, Ripple and Skeleton effects.

#### Scenario: Reduced motion enabled during an Icon name transition
- **WHEN** the preference changes to reduce
- **THEN** the pending name delay is cancelled and the latest name is rendered without shrinking

#### Scenario: Decorative motion disabled
- **WHEN** reduced motion is enabled
- **THEN** Icon spin and Skeleton shimmer stop, Ripple is not visually shown, and surface/state transitions are removed without hiding content or focus feedback

#### Scenario: Override visual durations
- **WHEN** a consumer overrides a public motion token
- **THEN** the normal-motion CSS consumer uses that value, while reduced-motion policy still takes priority
