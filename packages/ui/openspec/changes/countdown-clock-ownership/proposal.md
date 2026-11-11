# Countdown business-clock ownership

Six reproduced failures in each independent source: pre-pause RAF consumes a restarted frame, consumed callback runs twice, inactive time reset schedules background work, retained inactive start runs, disposed reset emits, and reentrant change/reset schedules an extra old frame.

Validate/consume per-frame generation before handle mutation and notification; recheck after reentrant change. Deactivation freezes remaining duration; inactive reset updates data/change and defers auto-start until activation. Explicit pause cancels resume; inactive start and disposed controls do not run. Keep existing business performance.now deadline, formatting, public methods, single end per run and all CSS tokens. Reduced visual motion must not shorten business time.

Controlled clock/RAF replay verifies lifecycle, not native/browser/OS preference or owner-window behavior. No API additions or compatibility aliases.
