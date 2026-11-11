## ADDED Requirements

### Requirement: Independent identical shared implementations
The libraries SHALL maintain independent local shared modules with identical runtime logic, type declarations and explicit exports, allowing only their diagnostic brand prefix to differ. They SHALL NOT wholesale re-export rattail or retain unused legacy aliases before the first public release.

#### Scenario: A shared implementation or type diverges
- **WHEN** a source inventory entry, runtime algorithm, generic signature or MotionState declaration differs between libraries
- **THEN** the shared source contract check fails without exclusions or erased-type normalization

### Requirement: Real package and consumer verification
Both libraries SHALL verify actual ESM / CJS / declaration builds, boundary behavior, SSR import and small-import tree shaking. Existing component size limits SHALL NOT be raised to hide regressions.

#### Scenario: An unrelated utility enters a small named import
- **WHEN** the existing small named-import fixture retains unrelated code or exceeds 512 gzip bytes
- **THEN** the package contract fails

### Requirement: Shared native resize observation
The common resize helper SHALL use the target owner window and release frames and listeners on suspension or unmount. Without native ResizeObserver it SHALL listen to window / visualViewport resize events; application-level standard polyfills MAY supply native-equivalent observation for older browsers.

#### Scenario: A canceled callback runs after unmount
- **WHEN** a measurement frame was dequeued before unmount and is invoked afterwards
- **THEN** it does not call the update callback or start a replacement measurement
