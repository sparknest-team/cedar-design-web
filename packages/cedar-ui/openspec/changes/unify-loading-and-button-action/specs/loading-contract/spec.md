## ADDED Requirements

### Requirement: Standard notifications and controlled loading
Button SHALL emit click/touchstart normally and SHALL NOT await observer results. Button SHALL expose controlled loading without action or autoLoading. SplitButton SHALL accept loading through buttonProps. Vue SHALL handle synchronous and async notification errors. Disabled clicks SHALL NOT consume component once notifications.

#### Scenario: async click notification
- WHEN an enabled button has an async click handler
- THEN the handler runs normally without automatic busy; business loading may independently control busy.

#### Scenario: controlled loading recovery
- WHEN the business sets loading before awaiting a request and resets it in finally
- THEN the button blocks clicks while loading and recovers on either success or failure.

### Requirement: Shared field loading
FieldDecorator SHALL own loading and loadingMode rendering. default SHALL show an indicator, line SHALL show a non-blocking indeterminate bottom line without changing layout or editing behavior. Selection fields SHALL not render a second spinner. Shared props and implementations SHALL be aligned across Cedar and Maple.

#### Scenario: editable field while loading
- WHEN a field is loading in line mode
- THEN it exposes busy state but remains editable unless separately disabled/readonly.
