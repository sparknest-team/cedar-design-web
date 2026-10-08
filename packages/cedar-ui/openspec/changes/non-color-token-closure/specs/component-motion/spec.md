## ADDED Requirements

### Requirement: Explicit component motion controls

Both platforms SHALL expose component tokens for Tag fade duration, Alert close duration, Button transition duration and Switch loading duration. Defaults SHALL use system fast, slow, standard and a one-second loading cycle respectively.

#### Scenario: Application overrides a duration

- **WHEN** an application overrides one of these component duration variables
- **THEN** the corresponding compiled transition or animation consumes that value

### Requirement: Reduced motion

Built-in Tag fading, Alert collapse, Button state transitions and Switch loading rotation SHALL stop when the user requests reduced motion, without suppressing state changes or completion events.

#### Scenario: Reduced-motion preference

- **WHEN** prefers-reduced-motion is reduce
- **THEN** the corresponding transition or animation resolves to none

### Requirement: Semantic density ownership

Spacing, font and radius values with matching semantic system roles SHALL reference those roles. Shape geometry and documented platform differences SHALL remain component-owned; equal numeric values alone SHALL NOT imply equal semantic roles.

#### Scenario: Platform-specific tag density

- **WHEN** the same size is used on desktop and mobile Tag
- **THEN** each platform retains its documented height and typography defaults

### Requirement: Progress group geometry and motion

Both platforms SHALL expose equal named variables for five line thickness sizes, tooltip geometry and typography, status weight and transition durations. Reduced-motion SHALL disable active segment transitions and tooltip/circle animations as well as base segment transitions.

#### Scenario: Vertical line thickness override

- **WHEN** a size thickness variable is overridden
- **THEN** horizontal tracks use it as height and vertical tracks use it as width

### Requirement: Composite reduced motion

Avatar, Collapse, Checkbox, Overlay and Trigger SHALL suppress their built-in CSS transitions for reduced-motion users while preserving final state geometry.

#### Scenario: Collapse remains functional

- **WHEN** reduced motion is requested and a collapse item opens
- **THEN** its final open geometry remains available without an animated height transition
