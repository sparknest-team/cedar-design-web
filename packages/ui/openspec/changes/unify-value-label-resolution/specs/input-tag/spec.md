## ADDED Requirements

### Requirement: Primitive value display fallback

InputTag SHALL resolve primitive value display data synchronously through `fallbackOption`, without changing the bound value. When no display label is returned it SHALL display the primitive value. Object tags retain their own display data.

#### Scenario: Business display data changes

- **GIVEN** a model containing a URL and a fallback that reads reactive business data
- **WHEN** the business updates the URL's label
- **THEN** the displayed tag and reading presentation update without emitting a model update or change

#### Scenario: A resolved tag is removed

- **GIVEN** a model of primitive values with resolved labels
- **WHEN** a tag is removed
- **THEN** the model update contains the remaining original values, not the resolved objects
