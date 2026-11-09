## ADDED Requirements

### Requirement: Typed existing FilterForm contract
The component SHALL expose typed notification events, an unscoped actions slot and its inner Form instance.

#### Scenario: Reset scope
- **WHEN** a consumer calls the inner Form resetFields
- **THEN** only the internal model resets without container model events
- **AND** replacing the external model synchronizes the entire filter.
