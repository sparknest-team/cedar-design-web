# InputNumber repeat callback ownership

Both independent sources reproduce seven controlled-timer ownership regressions: stopped/dequeued work still steps, an old false-returning callback stops replacement work, disposed work steps, a consumed callback repeats, reentrant replacement is stopped, inactive work/start is accepted, and window pointer cancellation still permits old work.

Validate and consume a per-timer generation before user step code; check ownership again after reentrant code. Inactive/disposed owners reject scheduling. Keep 800ms initial/150ms repeat interaction cadence, owner-window release listeners, public API and all CSS tokens. These timings are not visual-motion tokens.

The test probe captures only 800ms/150ms callbacks and restores fake timers and mounted owners. Simulated dequeued callbacks are not browser/OS evidence. Native gesture and iframe-window coverage remain separate.
