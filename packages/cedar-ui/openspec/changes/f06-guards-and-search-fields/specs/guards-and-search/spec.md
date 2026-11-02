## ADDED Requirements

### Requirement: configurable semantic search fields
All eight selection implementations SHALL accept readonly semantic searchFields defaulting to label and case-insensitive matching. Normalized fields SHALL respect fieldNames; multiple fields SHALL use OR. Custom callbacks SHALL retain priority. Rendering, slot and keyboard candidate eligibility SHALL agree. Cedar TreeSelect's changed defaults SHALL be marked major with an explicit restoration path.

### Requirement: explicit compatible action guards
New guards SHALL take priority over their corresponding legacy hooks. Their false/error outcomes SHALL reject; true/void SHALL allow. Pending operations SHALL not duplicate effects. Forced closure, disposal and relevant prop replacement SHALL cancel and settle pending work without stale effects. Signal-aware and noncooperating async functions SHALL both be safe. guard-error SHALL surface active errors. Existing legacy callback completion meanings SHALL remain distinct, idempotent and covered by tests, including synchronous throws and rejected promises.
