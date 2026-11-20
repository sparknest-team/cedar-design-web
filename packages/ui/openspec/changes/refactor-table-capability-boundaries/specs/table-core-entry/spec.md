# Opt-in Table core and headless features

## ADDED Requirements

### Requirement: Core is an explicit independent entry

`@cedar-design/ui-vue/table/core` SHALL export TableCore, its default component, tableCoreProps, TableCoreProps, TableCoreInstance, TableCoreColumn, TableCoreData and _TableCoreComponent. Its style SHALL be available through `table/core/style`. The existing root/Table exports and resolver SHALL continue to resolve the complete Table.

#### Scenario: Core consumer renders data

- **WHEN** a caller provides data, columns and optional rowKey
- **THEN** Core renders a semantic native table with groups, adaptive widths, physical left/right frozen columns, reading-direction-aware native scrolling and header associations
- **AND** it supports header/cell/empty/footer content slots, explicit column renderers, size, borders, stripe, hover, height constraints and busy state
- **AND** desktop filtering, pagination, selection, expansion, dragging, tooltips and virtualization are not implicitly enabled or imported

### Requirement: Optional headless state and computation have separate entries

`table/features/filter` and `table/features/sort` SHALL expose instance-local state composables without UI or client processing dependencies. The explicit `table/features/filter/client` and `table/features/sort/client` entries SHALL provide local processing. These are composition tools, not feature flags on Core and not mandatory registrations on the existing Table.

#### Scenario: Remote filtering

- **WHEN** a caller imports useTableFilters, provides filter column configuration and reacts to its change callback
- **THEN** filter state and reset/clear behavior work without a built-in filter panel, Trigger or local filter algorithm
- **AND** the caller supplies server results to Core's data prop

### Requirement: Static composition preserves original defaults

The complete Table SHALL continue to compose all original controllers and UI synchronously and retain its pipeline order, event trace, slots, public instance and types. Common rendering SHALL be shared without adding DOM wrappers to the complete Table. Its styles SHALL remain unchanged.
