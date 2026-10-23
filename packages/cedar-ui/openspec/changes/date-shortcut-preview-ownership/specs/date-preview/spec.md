# Single shortcut-preview grace

Hover leave waits100ms before clearing preview without committing the model. A new hover,current configuration/model/visibility change,suspension or disposal invalidates the old task. Each delivery consumes its own identity once;stale callbacks cannot clear a newer preview or consume its timer. Retained hover commands require the current visible,active,enabled,editable preview context. Preview setter reentry must be checked before clearing input draft.

Activation accepts new hover only;do not replay old grace. This does not change public selection/confirmation APIs or add CSS Tokens. Range preview and other retained date commands/native/OS evidence remain separate.

## Range shortcut preview

All range preview writes retire the preceding shortcut timer and header-settlement phase,including a fresh cell selection. Leaving alone must preserve valid preview-header settlement during the100ms grace. A live cleanup consumes its timer once,rechecks ownership after preview/input writes,and passes original preview eligibility to its private deferred header reset. Each deferred reset consumes once and rejects stale suspension/disposal/replacement. Existing other helper callers keep the default behavior and are not certified by shortcut tests. Native/OS and Maple year-panel evidence remain separate.
