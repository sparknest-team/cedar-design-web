## ADDED Requirements

### Requirement: Containing-block and document-aware positioning

Trigger SHALL position fixed popups relative to their actual containing block and translate reference geometry between accessible same-origin frame documents. Reference changes SHALL rebind document event listeners and popup layer ownership without retaining stale bindings.

#### Scenario: Fixed popup inside a scaled containing block

- **WHEN** a fixed popup is mounted under an axis-aligned transformed ancestor
- **THEN** its position and arrow use that ancestor's coordinate system

#### Scenario: Reference changes to a same-origin iframe

- **WHEN** a reference is changed from the parent document to an iframe element
- **THEN** iframe Escape and outside interactions use the new reference while popup-document interactions continue to work
