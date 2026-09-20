## Contract

公共 AutoComplete API：

- Props：`modelValue`、`defaultValue`、`options`、`fieldNames`、`filterOption`、`strict`、`disabled`、`readonly`、`clearable`、`variant`、`size`、`placeholder`、`inputAttrs`。
- Events：`update:modelValue`、`input(value, event)`、`search(value, event)`、`change(value, event)`、`select(value, option, event)`、`clear(event)`、`focus(event)`、`blur(event)`。
- Slots：`prefix`、`suffix`、`clear-icon`、`option({ data })`、`footer`。
- Expose：`focus()`、`blur()`。
- Types：`AutoCompleteProps`、`AutoCompleteOption`、`AutoCompleteOptionData`、`AutoCompleteFilterOption`、`AutoCompleteInstance` 和运行时 props。

## Value and Options

- AutoComplete 是允许自由输入的 editable combobox；`modelValue` 为输入文本，不是候选对象。
- `modelValue` 存在时使用受控值；否则以 `defaultValue` 初始化内部值。后续 `defaultValue` 变化不重置用户状态。
- 公共候选项接受 `string | number | AutoCompleteOptionData`。对象基础字段为 `value: string | number`、`label?: string`、`disabled?: boolean`，并允许业务扩展字段。
- primitive 候选项以自身作为 value，以字符串形式作为 label；对象候选项按 `fieldNames` 读取 value、label、disabled。
- 归一化候选信息保留 `raw`；所有写入输入框和事件中的 value 都使用字符串形式。
- 首版不提供候选项必选开关；需要离散值约束时使用 Select 或 Form 规则。

## Filtering and Visibility

- `filterOption=true` 时按归一化 label 做不区分大小写的 `includes`；`strict=true` 时内建过滤改为区分大小写。
- `filterOption=false` 时不执行客户端过滤，适用于服务端已经返回最终建议的场景。
- 自定义 `filterOption(inputValue, option)` 完全决定候选项是否有效，`strict` 不再叠加。
- 用户编辑时实时触发 `search`，业务自行负责防抖、请求取消、loading 和缓存。
- 空 options 或过滤后没有有效项时关闭下拉；首版不新增空结果和 loading 面板 API。
- 默认在可编辑输入框聚焦且存在有效候选项时展开，包括空文本聚焦。Maple MAY 保留 `getShow(value)` 作为移动端兼容扩展。

## Events and Focus

- 原生键入按 `update:modelValue(value)` → `input(value, event)` → `search(value, event)` 执行，不触发 `change/select`。
- 失焦或未用于候选选择的 Enter 沿用 Input 的提交边界，只在提交值变化时触发一次 `change(value, event)`。
- 选中按 `update:modelValue(value)` → `select(value, option, event)` → `change(value, event)` → 关闭下拉执行；不触发 `input/search`。
- 选中同值仍触发 `select`，但不重复触发值更新或 `change`。
- 清空按 `update:modelValue('')` → `clear(event)` 执行，不触发 `input/search/change/select`，并关闭下拉、保持焦点。
- 选中后关闭下拉并保持 DOM 焦点在输入框，不主动 blur，也不使用异步重新抢焦点。
- `disabled` 与 `readonly` 阻止编辑、清空、展开、搜索和选择；readonly 仍允许聚焦与复制。

## Keyboard and Accessibility

- 实际输入元素承担 `role=combobox`、`aria-autocomplete=list`、`aria-expanded`、`aria-controls` 和 `aria-activedescendant`。
- 候选容器使用 `role=listbox`，候选使用 `role=option`、`aria-selected`、`aria-disabled`，并具有稳定 id。
- DOM 焦点保持在输入框，上下键移动活动候选，Enter 接受，Escape 关闭且不改变值。
- Tab 关闭下拉并按浏览器默认顺序离开；组件 MUST NOT `preventDefault()`。
- `focus(event)` / `blur(event)` 转发真实焦点事件，`focus()` / `blur()` 操作内部输入。

## Shared Defaults

- `defaultValue=''`、`options=[]`、`filterOption=true`、`strict=false`。
- `variant='outlined'`、`size='md'`、`clearable=false`、`disabled=false`、`readonly=false`。
- 原生输入属性通过 `inputAttrs` 沿用 Input 的优先级与无障碍规则，内部默认 `autocomplete='off'`。

## Platform Differences

- Cedar MAY 保留 `popupContainer`、`triggerProps`、`virtualListProps`、选项组、`dropdownScroll`、`dropdownReachBottom` 和桌面弹层定位。
- Maple MAY 保留 `getShow`、移动 Menu、`line`、`hint`、`textColor`、`focusColor`、`blurColor`、`enterkeyhint` 与 Form validation 集成。
- 两端视觉结构和 token 可以不同；值、候选归一化、过滤优先级、事件顺序、焦点和键盘契约必须一致。
- 首版只在各仓库内对齐 TypeScript 职责，不建立跨仓库共享包；首版后允许实现合理漂移。
