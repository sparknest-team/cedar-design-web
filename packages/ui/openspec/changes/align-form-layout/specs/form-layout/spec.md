# Align Form layout

## ADDED Requirements

### Requirement: Shared layout API
Both libraries SHALL support labelAlign, labelColProps, wrapperColProps, labelColStyle, wrapperColStyle, labelColFlex and autoLabelWidth on Form. FormItem SHALL inherit and allow explicit override of layout and column options. Horizontal uses 24-column label/content defaults 5/19; vertical and inline SHALL not impose column proportions. Numeric flex values SHALL retain Col grow semantics. Explicit labelColFlex SHALL take precedence over autoLabelWidth.

### Requirement: Natural label measurement
Auto width SHALL align eligible visible horizontal labels, reset to zero when empty, and update on label resize, dynamic removal and layout changes. Observer/listener and registrations SHALL be removed on unmount/deactivation. Separate Forms SHALL own independent width registries. SSR SHALL not access browser APIs.

### Requirement: Local presentation
Cedar defaults horizontal and Maple defaults vertical. The copied layout code SHALL use each library's Row/Col and native observer without a shared runtime. Existing validation and mobile FormDetails presentation SHALL remain integrated.
