# Repair measurement and drag ownership

Affix layout uses the current viewport and emits state transitions once. Field geometry rebinds observation targets when refs change. Delayed measurement and drag callbacks must not resume stale lifecycle or gesture sessions.
