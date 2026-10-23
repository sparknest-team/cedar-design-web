# Unify Button implementation

Compare Cedar and Maple with the same functional contract, bring both candidates to feature parity, then copy the winning implementation. Scope includes Button/group integration, API, styles, demos, documentation and regression checks.

Maple lacks autofocus and native loading/link guards. Cedar lacks effective elevation/group block, touch handling and xl/tertiary styles. Both start loading for synchronous handlers and release too early when one of multiple async handlers rejects.

Breaking changes: loading-type becomes the Loading animation type in both libraries; loading-mode separates default/fill/line layout. Migrate Cedar loading-type=default/fill/line to loading-mode. Shared ripple/focusable defaults are true; Maple loading layout defaults to inline (default), use fill to retain covering layout. No legacy aliases.
