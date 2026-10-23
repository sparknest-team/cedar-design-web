# Typography scheduler lifecycle

Treat copy-delay as interaction feedback, not CSS motion completion. Isolate and cancel copy timers and measurement RAF on replacement, feature changes, suspension and disposal. Reject retained unavailable interaction and stale/replayed/reentrant callbacks. Keep disabled-text measurement and current API/defaults; Maple has no equivalent runtime component. Controlled tests do not certify native clipboard, fonts or frames.
