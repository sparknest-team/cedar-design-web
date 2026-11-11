# Custom Scheduler editing protocol

Extend the editor slot with action and structured/localized errors. When editable=false, keep all creation affordances and emit a single editor-request for toolbar, cell, template drop and existing event actions. The application owns the external form lifecycle and submits via change(). Existing cell-click/event-click remain notifications, not the recommended external editor integration.

Non-goals: router or schema-form integration, Maple, persistence or permissions outside beforeChange.
