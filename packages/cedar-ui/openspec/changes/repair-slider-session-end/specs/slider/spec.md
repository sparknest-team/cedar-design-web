## MODIFIED Requirements

### Requirement: Canceled interaction completion
Each accepted pointer start MUST have exactly one end, including blocked/config/lifecycle/capture/blur cancellation. End MUST retain the last old-session proposal or its initial value and payload shape. Cancellation MUST NOT publish an extra model update or roll back earlier changes. Late events MUST be ineligible after cleanup.
