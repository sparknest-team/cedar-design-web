# Validation — 2026-09-10

- Scheduler Vitest: 115 tests / 12 files passed, including 9 loader regression tests.
- Vue declaration type check passed.
- Cedar library compilation completed successfully.
- Generated public API contract type check passed after compilation.
- Package validation: 0 errors, 0 warnings.
- Shared specification check: 0 errors; existing Col/Row missing-test warnings remain.
- Documentation renders the new remote-events demo. Browser failure injection displays the retry state; browser navigation loads the requested day's event.

Logs: /tmp/scheduler-loading-{tests,types,build,contracts,package,spec,docs}.log.

Browser on localhost:9992: returning to September 10 kept the request count at 3 (cache hit); rapid navigation reached September 12 with event 29; injected failure showed retry state. Documentation server selected port 9992 because 9991 was already occupied.
The slow retry (request 7) was followed by a faster navigation request 8; after both completed the page retained September 13 / event 30. Error state cleared, and browser error logs were empty.
