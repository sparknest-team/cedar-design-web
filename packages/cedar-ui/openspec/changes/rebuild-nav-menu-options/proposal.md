# NavMenu options-only reconstruction

The user explicitly authorizes a breaking reconstruction inspired by the local Naive UI 2.44.1 Menu. Options are the only hierarchy source. Public Item/SubMenu/ItemGroup components and their registration collectors are removed, while horizontal navigation and overflow remain.

API uses Cedar conventions: modelValue/defaultValue for selection, expandedKeys/defaultExpandedKeys for expansion, collapsed/defaultCollapsed, mode vertical/horizontal, fieldNames, size. Node key is string or number; label/icon/extra accept VNode or render context functions and root scoped slots. Group/divider are option types. Hidden and disabled nodes, active ancestor paths, accordion, external popup container and public showOption/scrollTo/resize controls are supported.

Implementation owns its data tree and state; existing Cedar Trigger, Tooltip and resize observer are reused. No runtime import from Naive UI, no new dependency and no synchronization of Maple NavMenu are introduced. Sider theme/collapse inheritance remains, with explicit props taking precedence. Old demos, exports, resolver entries and typings are migrated in the same change.

The reference is naive-ui/src/menu/src/Menu.tsx and interface.ts in this workspace. The implementation uses the data/path design, not copied TreeMate/render code.

## 后续扩展：独立 Item

用户补充需要自定义一级入口。允许默认插槽中的 NavMenu.Item，独立维护选中值、active 和 open，不恢复旧的子组件收集器、SubMenu、ItemGroup。Item 支持 options 与 content 插槽，标签跟随和选择关闭分别控制；通栏和全高浮层复用 Trigger。存在插槽时横向使用滚动，纯 options 仍保留更多收纳。

全高面板尊重 placement 的横向方向：right 系列紧贴入口右边缘，left 系列紧贴左边缘；纵向占满视口。其他 placement 保持右侧视口定位。

标题 API 简化：移除 updateLabel，默认根据已接受的 modelValue/defaultValue 匹配选项标题；未匹配时回退 label 属性。label 插槽承担固定标题、自定义格式和手动应用标题的控制。

具名 Item 支持根级互斥激活：Item 的 `name` 只标识自定义入口，根 NavMenu 通过 `activeItem/defaultActiveItem` 与 `update:activeItem` 管理当前入口。Item 自身 `modelValue` 仍是面板内部数据，切换入口不清空其他面板状态。未具名 Item 保持原有独立高亮。面板展开互斥与激活项互斥是两套状态。
