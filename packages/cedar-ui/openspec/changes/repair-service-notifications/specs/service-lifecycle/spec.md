## MODIFIED Requirements

### Requirement: Notification-independent completion
Service results and owned resource cleanup MUST complete even when user notification callbacks throw. Returned notification Promises MUST NOT control loading or task completion. The original error path MUST remain observable.

### Requirement: ActionSheet service ownership
A rejected guarded close request MUST retain its service owner. Repeated close MUST remain possible. A new invocation MUST replace the old singleton, dispose its host, settle it as close and invalidate old callbacks without synthesizing lifecycle notifications.
