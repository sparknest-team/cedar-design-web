## MODIFIED Requirements

### Requirement: Node-owned lazy data
Lazy caches MUST bind raw node identity and current row key. Only current live cell requests MAY commit children; replacement, deactivation and unmount MUST invalidate old callbacks. First completion MUST win, done without children MUST permit retry, and synchronous exceptions and rejected loader return Promises MUST release pending while preserving Vue error reporting. A fulfilled return Promise MUST NOT replace the done callback or publish its returned value.

### Requirement: Explicit loading in both modes
Existing boolean/object loading MUST work in both native-slot and data modes, expose root aria-busy and preserve editable row identity. It MUST NOT collect notification Promises or automatically disable business inputs.
