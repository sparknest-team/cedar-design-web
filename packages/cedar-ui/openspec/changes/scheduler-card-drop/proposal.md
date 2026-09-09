# Scheduler custom card creation

Cedar only: add a sidebar-extra scoped slot with startDrag(template, nativeEvent), cancelDrag and disabled. Templates are independent of scheduled values and reusable. A valid drop opens the existing editor; only confirmation commits a create through existing validation and beforeChange. Existing event move/resize remains unchanged.

Non-goals: Maple, cross-window drag payloads, touch card dragging, automatic persistence on drop.
