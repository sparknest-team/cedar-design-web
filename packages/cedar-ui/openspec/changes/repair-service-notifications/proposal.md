# Repair service completion and notification ownership

Settle Dialog/Picker/ActionSheet results and release Message/Notification hosts even when user notification callbacks throw. Retain a vetoed ActionSheet close owner; new invocation explicitly replaces and disposes the old singleton. Notification Promises do not manage loading or close guards.
