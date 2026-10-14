## ADDED Requirements

### Requirement: Component-owned Popup motion
Maple Popup SHALL declare --mp-popup-transition-duration as 250ms and --mp-popup-transition-timing-function as ease in token.less. Its built-in fade/pop and base content/overlay transitions SHALL consume these variables. Overrides on the actual common popup ancestor SHALL reach both transition layers. Content-only overrides SHALL NOT be documented as changing the outer wrapper.

#### Scenario: Normal override and reduced preference
- **WHEN** a common popup ancestor sets 600ms and linear
- **THEN** built-in motion uses those values without theme-dependent substitution
- **AND WHEN** reduced motion applies
- **THEN** built-in transitions and starting movement are disabled

### Requirement: Guarded lifecycle completion
Both independent popup-transition helpers SHALL retain leaving content until current close completion, emit completion once per active phase, and ignore callbacks incompatible with current state or after disposal.

#### Scenario: Close and rapid reopen
- **WHEN** unmount-on-close is true and close starts
- **THEN** content and locks remain until leave completion
- **WHEN** the popup reopens before completion
- **THEN** stale closed callbacks do not unmount or unlock it

#### Scenario: Duplicate completion
- **WHEN** opened or closed is invoked repeatedly for a completed phase
- **THEN** the completion event is emitted once
