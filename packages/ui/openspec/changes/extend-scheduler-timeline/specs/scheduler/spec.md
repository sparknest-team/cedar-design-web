# Timeline scale and resource grouping

- `scale` / `defaultScale` / `update:scale` accept `hour` and `day`; default is `day`. Hour scale displays the focused local day; day scale displays a week. Navigation advances the matching range and scale changes preserve the focused date.
- `resourceGroupBy(resource)` returns a stable group key. `expandedKeys` / `defaultExpandedKeys` / `update:expandedKeys` control expansion. Omitted initial keys expand all groups. Disabled state blocks edits to scale and expansion. Grouping only affects timeline presentation and never mutates events or assignments.
- Hour slots use elapsed hours, including 23/25-hour DST days. Event positions and pointer targets match the same axis. Midnight creation retains midnight.
- Existing modelValue, mode, date, change, editor and drag APIs remain compatible. Internal core helpers remain framework independent.
