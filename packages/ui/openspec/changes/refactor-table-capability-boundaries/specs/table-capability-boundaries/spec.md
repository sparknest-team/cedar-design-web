# Table capability boundaries

## ADDED Requirements

### Requirement: Existing Table remains the complete entry

The refactored implementation SHALL retain all existing Table imports, exports, installation, subcomponents, props, defaults, events, slots, instance methods, public types, DOM semantics, classes and public tokens. Existing consumers SHALL NOT register plugins or change configuration to retain functionality. Controlled state ownership, raw row identity, callback arguments and observable event ordering SHALL remain unchanged.

#### Scenario: Existing application upgrades

- **WHEN** an application using the existing root or table entry upgrades
- **THEN** its current sorting, filtering, pagination, selection, expansion, lazy loading, summary, spanning, resizing, dragging and virtual rendering continue to work without migration
- **AND** the full entry continues to provide its current synchronous UI and styles

### Requirement: Layout is independent from desktop interaction

The layout kernel SHALL have no runtime dependency on Vue, DOM, desktop components, icons, localization or styles. The Vue layout adapter SHALL retain existing measurement and resource lifecycle behavior. Basic rendering SHALL NOT transitively import desktop feature implementations.

#### Scenario: Auto layout with frozen columns

- **WHEN** content changes rendered column widths in auto mode
- **THEN** frozen offsets use current measured widths according to existing rules rather than stale resize widths
- **AND** group headers, operation columns, extra columns and RTL retain their existing positioning semantics

#### Scenario: Layout owner is replaced or deactivated

- **WHEN** a measurement target is replaced or the owning instance is deactivated or unmounted
- **THEN** resources are released according to the existing lifecycle contract
- **AND** invalid callbacks cannot commit stale layout to a new owner

### Requirement: Opt-in capability isolation

A future basic entry SHALL be additive and explicitly selected. Its public contract SHALL describe the capabilities it supports. It SHALL NOT import the full Table to simulate a lightweight component with disabled props. Feature composition SHALL be instance-local without global mutable plugin registration.

#### Scenario: Basic table consumer builds production assets

- **WHEN** a consumer imports only the basic table and its required styles
- **THEN** desktop filter UI, Trigger, pagination, selection controls, dragging and virtual-list implementations and their feature styles are absent from its runtime dependency graph
- **AND** adaptive widths, frozen columns and basic table accessibility remain available

### Requirement: Feature state, client computation and UI are separable

Optional feature controllers SHALL NOT import their desktop UI or client-side processing implementations. The full entry SHALL retain its current processing semantics. Virtualization SHALL consume the current row projection and shared layout as a rendering strategy without duplicating sort, filter or selection state.

#### Scenario: Future opt-in consumer uses remote filtering

- **WHEN** a consumer explicitly composes filter state and custom UI for remote processing
- **THEN** its production assets contain no built-in client filter algorithm or desktop filter panel unless explicitly imported
- **AND** this composition does not change the existing full Table's API or remote-processing behavior

### Requirement: Compatibility is validated through observable behavior and published assets

Implementation SHALL validate the original full entry against pre-refactor consumer fixtures, behavior tests and production builds. Source-level extraction or unchanged API counts SHALL NOT be sufficient proof. Bundle size budgets SHALL be derived from measured baselines with matching tools and conditions.

#### Scenario: A feature controller is extracted

- **WHEN** an internal feature moves to a separate module
- **THEN** its controlled and uncontrolled behavior, event trace and cross-feature combinations pass the relevant regression checks
- **AND** existing Vue/TSX consumers and ESM/CJS/type/style entries continue to resolve

### Requirement: Mobile reuse respects independent source ownership

Future Maple integration SHALL preserve its existing native-slot Table API, maintain independent runtime sources, and enforce equivalent shared layout algorithms through explicit source-contract checks. It SHALL NOT introduce a Maple runtime dependency on Cedar or share desktop-only interaction UI.

#### Scenario: Mobile adopts the layout kernel

- **WHEN** Maple introduces data-column rendering based on the validated layout logic
- **THEN** existing native-slot consumers remain valid
- **AND** copied kernel behavior and types are checked for parity while mobile rendering and interaction remain independently owned
