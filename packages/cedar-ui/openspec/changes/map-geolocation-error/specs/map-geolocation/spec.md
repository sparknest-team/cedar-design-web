## ADDED Requirements

### Requirement: Geolocation failure and lifecycle
Map SHALL report the original geolocation failure through its error event and permit retry. MapSelect SHALL forward that error. Pending location results SHALL NOT mutate a deactivated or unmounted map. Event listener returns SHALL NOT be awaited as tasks.

#### Scenario: Permission denied
- **WHEN** the location provider reports a permission error
- **THEN** the component reports the error, exits the locating state and allows a later request

#### Scenario: Stale location result
- **WHEN** the component is deactivated or unmounted before a location request completes
- **THEN** the late result does not move the map or notify a stale error

#### Scenario: A move geocoding request fails
- **WHEN** the current move geocoding request fails
- **THEN** Map emits the original error and settles the address-loading notification so MapSelect can recover its confirm action
- **AND** a superseded request cannot report an error or settle a newer request

#### Scenario: SDK resource disposal
- **WHEN** a map instance unmounts
- **THEN** the registered move listener is detached when the SDK provides off, and the search and map objects are destroyed when they provide destroy

#### Scenario: SDK initialization fails
- **WHEN** SDK initialization, search service creation or initial geocoding fails
- **THEN** Map reports the error, releases partial SDK resources and offers a retry; MapSelect forwards the error
- **AND** search and location controls remain disabled until initialization succeeds

#### Scenario: Initialization is interrupted by deactivation
- **WHEN** a map is deactivated while initialization or retry is pending
- **THEN** partial resources are released and a fresh attempt starts on activation
- **AND** results from the retired attempt cannot initialize the map

#### Scenario: GIS search configuration changes
- **WHEN** GIS search configuration changes while a GIS suggestion request is pending
- **THEN** previous results are cleared and the retired request cannot populate results
- **AND** the next search uses the current GIS setting, base path and fetch provider

#### Scenario: A GIS suggestion has a zero coordinate
- **WHEN** a suggestion contains longitude or latitude equal to zero
- **THEN** Map and MapSelect retain the zero coordinate when resolving and selecting the suggestion

#### Scenario: Search or place selection fails
- **WHEN** the current search or place selection fails
- **THEN** Map reports the original error and MapSelect forwards it
- **AND** a place selection whose detail or geocoding request fails does not change the selected location
- **AND** a superseded or deactivated request cannot report a stale error or commit a location

#### Scenario: A pending place selection is cancelled
- **WHEN** a pending selection is superseded by a search, model or search configuration change, or the map is deactivated
- **THEN** its move-suppression state is released without waiting for the retired request
- **AND** a subsequent map move can resolve normally and the retired selection cannot overwrite it
