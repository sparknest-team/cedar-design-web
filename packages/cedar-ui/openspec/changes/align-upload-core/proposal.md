# Upload independent-source convergence

Complete Cedar queue/request with Maple Form, all-file reading, external progress, media preview and custom chooser capabilities, then independently copy the core, SFC, props/types and styles. Keep only local Form, global locale and preview presentation responsibilities. No cross-library runtime, platform switch or compatibility alias.

Final API: modelValue/defaultValue; read/change/rejected/progress/success/error/remove/preview; requestChoose control callback; getFiles(status), submit/abort/retry/remove/reset/clearSuccess/clearError/chooseFile/preview/closePreview. after-read, oversize, onClickAction, preventDefaultPreview and getSuccess/getError/getLoading are migrated rather than aliased.

Non-goals: server storage, chunked/resumable protocol, retries without explicit request, trusting caller-provided URLs as library-owned resources.

