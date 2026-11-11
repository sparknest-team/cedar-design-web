## ADDED Requirements
### Requirement: Scrollable regions
Layout and Content SHALL support opt-in native scrolling; Layout, Content and Sider SHALL expose scrollTo and emit scroll events from their scroll container.
### Requirement: Sider collapse and placement
Sider SHALL default to width collapse and left placement, support transform collapse and right placement, and retain an operable native button when collapsedWidth is zero. Hidden zero-width content SHALL be inert.
### Requirement: Borders and compatibility
Header, Footer and Sider SHALL offer opt-in borders. Existing collapsed, defaultCollapsed, reverseArrow and resizeDirections SHALL remain supported.
