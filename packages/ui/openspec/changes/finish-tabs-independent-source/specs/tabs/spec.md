## ADDED Requirements

### Requirement: Independent six-component source
Tabs, TabPane, TabsNavs, TabNav, TabsItems and TabItem SHALL use independent local source copies. Namespace imports and global configuration access MAY differ. No generic platform module or unused panel provider SHALL remain.

#### Scenario: Existing model and visibility contracts
- WHEN a controlled selection request is rejected
- THEN the original panel stays active, with stable ARIA relationships and native hidden attributes.

### Requirement: Existing public type contracts
The component entry SHALL export TabsEmits, six component slot types and TabsNavsExpose. Only TabsNavs SHALL expose resize; no new focus or selection method is introduced.
