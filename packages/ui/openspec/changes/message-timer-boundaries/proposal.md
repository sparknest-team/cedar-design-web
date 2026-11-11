# Message display timer ownership boundaries

Fix reproduced inactive/unmounted scheduling and exhausted-hover deadlines in the independent Cedar and Maple implementations. Business display time stays separate from visual CSS transitions; no new props, events, aliases or tokens.

KeepAlive deactivation cancels pending work; reactivation uses the full current configured duration, consistently with Notification. Hover retains remaining time, except a positive exhausted deadline closes on resume. Explicit zero reset stays persistent. Only finite positive durations schedule automatic close.

Scope excludes Message service exit timing, native browser motion and real OS preference acceptance.
