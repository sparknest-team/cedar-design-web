# Checkbox 原生主体

## Requirements

### Native input

Each checkbox SHALL have one native input[type=checkbox] associated with a label, emit click once per activation, expose mixed/readonly/error states, and remain keyboard-operable. Disabled prevents focus and all activation. Readonly keeps focus but does not mutate values. Controlled rejected proposals restore checked and indeterminate properties.

### Appearance and slots

Both libraries SHALL expose checked-color, unchecked-color, icon-size, ripple and three icon slots. icon-size accepts pixel numbers and CSS length strings; error and disabled colors take precedence. The complete checkbox slot overrides icons and may be provided by the group.

### Group

Both groups SHALL use the independently copied context and value/method cores. They expose role=group and aria-label, pass name to child native inputs, enforce max only on new selections, preserve locked/unloaded values, and unregister inactive children. uninject-group-context excludes only group inheritance, not Form.

### Styles

Both copies SHALL use the same BEM and rule body, with public token suffixes unchanged. Only defaults for density/fonts/motion may differ; no runtime platform configuration is introduced.

