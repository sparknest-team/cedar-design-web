## Contract

公共 Search API：

- Props：`modelValue`、`defaultValue`、`modelModifiers`、`modelField`、`defaultField`、`model`、`fields`、`recentSearches`、`maxSearchHistoryCount`、`searchButton`、`buttonText`、`buttonProps`、`loading`、`clearable`、`disabled`、`readonly`、`variant`、`size`、`placeholder`。
- Maple 额外保留 `showAction`、`actionType`、`actionText`、`historyPopup`、`label`、`shape`、`background`、`inputBackground`、`searchIcon` 和移动端颜色能力。
- Events：`update:modelValue`、`update:modelField`、`update:model`、`input(value, event)`、`change(value, event)`、`clear(event)`、`search(result, event)`、`focus(event)`、`blur(event)`；Maple 额外保留 `cancel(event)`。
- Slots：`prefix`、`suffix`、`clear-icon`、`button-default`、`button-icon`；Maple 额外保留 `label`、`action`。
- Expose：`focus()`、`blur()`。

## Behavior

- `modelValue` 存在时使用受控值；否则以 `defaultValue` 初始化内部值。Maple 不再支持 `searchText/searchField` 别名。
- 用户编辑由 Input 先触发 `update:modelValue`，Search 再按 `update:modelValue` → `update:model` → `input` 转发；Input 的失焦或 Enter 提交转发为一次 `change`。
- 清空按 `update:modelValue('')` → `update:model` → `clear(event)` 执行，不触发 `input/change/search`，并保持焦点和可用的历史层。
- 字段切换按 `update:modelField` → `update:modelValue('')` → `update:model` → `change('', event)` 执行，并重新聚焦输入框。
- 搜索图标、搜索按钮、Enter 或历史项选择均触发一次 `search(result, event)`；`disabled`、`readonly` 或 `loading` 时阻止搜索。
- 搜索提交不主动调用 `blur()`。历史层的关闭和焦点转移可由端侧容器自然处理。
- `SearchResult` 仅包含 `modelField?`、`modelValue`、`model?`、`recentSearches`。搜索值保留原文；历史键 trim 后忽略空值、去重置顶并截断。
- `recentSearches` 完全受控，组件不自行持久化；搜索事件返回下一份历史列表。

## Platform Differences

- Cedar 使用输入框同宽 Menu，并保留桌面端后置按钮、`selectStyle` 和按钮插槽。
- Maple 默认通过全屏 Popup 展示历史，也允许同宽 Menu；保留取消操作、形状、颜色和触摸布局。
- Maple 的 `searchButton=true` 复用移动端右侧操作区进入搜索模式；原有 `showAction/actionType/actionText` 继续作为移动端扩展。
- 两端视觉结构与 token 可以不同，但值、字段、历史、事件和加载态契约一致。
- 首版只在各仓库内部对齐 TypeScript 功能逻辑，后续允许合理漂移，不建立共享包。
