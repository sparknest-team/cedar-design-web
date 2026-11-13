# Upload trigger position

Upload currently places its built-in entry before the file list. Add `trigger-position` on Cedar and Maple so users can place the entry before or after the list without external buttons or CSS reordering.

The public type is `UploadTriggerPosition = 'before' | 'after'`; the default is `after`. Values describe DOM order within Upload, including custom trigger slots and draggable entries. RTL does not rewrite these values. All list types are supported. Hidden triggers remain hidden and external buttons keep their own layout.

The user explicitly requested this cross-platform API, demos and documentation.
