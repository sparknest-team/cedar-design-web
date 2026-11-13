# Upload trigger position requirements

- Both platforms MUST expose `trigger-position`, typed as `UploadTriggerPosition`, with `before` and `after` values and default `after`.
- The trigger MUST precede or follow the file-list element in DOM, visual and keyboard browsing order. RTL MUST NOT rewrite the configured order.
- All list types, draggable entries and custom trigger slots MUST use the same behavior.
- Position changes MUST preserve the upload input, file items, custom trigger state and existing file values, without emitting model or request events.
- Existing visibility, maximum-count, disabled and readonly behavior MUST remain effective. Hidden lists or triggers MUST NOT produce duplicate entry elements.
- Both public entry points, API documents and interactive demos MUST describe the same contract.
