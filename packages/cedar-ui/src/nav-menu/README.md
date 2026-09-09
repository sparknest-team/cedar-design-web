---
permalink: /components/nav-menu/
---

# NavMenu 导航菜单

通过 `options` 定义导航结构，支持纵向展开、横向下拉及横向溢出收纳。子菜单由 `children` 自动产生，也可用 `NavMenu.Item` 定义独立一级入口；无需 SubMenu/ItemGroup 组件。

## 案例

独立一级入口与 options 导航树均支持横向和纵向布局。先看自定义 Item 的用法，再看数据驱动导航及状态控制。

### 横向独立入口

一级入口横向排列。分类使用普通下拉，地区使用横向通栏选项；高级筛选自定义通栏内容并保持固定标题。

<demo src="./__demos__/items-horizontal.vue" title="横向独立入口示例" desc="一级入口横向排列。分类使用普通下拉，地区使用横向通栏选项；高级筛选自定义通栏内容并保持固定标题。"></demo>

### 纵向独立入口

一级入口纵向排列。页面入口互斥高亮，项目选项紧邻菜单向右展开；高级筛选使用 popup-layout=full-height 和 placement=right-start，紧贴菜单右边缘展示全高面板，切换入口时关闭其他面板。

<demo src="./__demos__/items-vertical.vue" title="纵向独立入口示例" desc="一级入口纵向排列。页面入口互斥高亮，项目选项紧邻菜单向右展开；高级筛选使用 popup-layout=full-height 和 placement=right-start，紧贴菜单右边缘展示全高面板，切换入口时关闭其他面板。"></demo>

### 自动标题与手动标题

`v-model` 更新后，入口自动显示对应选项的 label，无需额外开关；清空为 null 后恢复 label 属性。受控值未被接受时，标题也不会变化。固定标题或手动更新显示内容使用 `#label` 插槽，自定义内容里也可以通过 `select(key)` 更新 v-model。

<demo src="./__demos__/item-label.vue" title="自动标题与手动标题示例" desc="对比自动跟随选择、始终固定标题，以及选择后手动应用标题三种方式。"></demo>

### 自定义面板与标题策略

对比普通下拉、通栏与全高面板，以及选中后更新标题和保留固定标题两种策略。

<demo src="./__demos__/custom-items.vue" title="自定义面板与标题策略示例" desc="对比普通下拉、通栏与全高面板，以及选中后更新标题和保留固定标题两种策略。"></demo>

### 基础纵向导航

通过 options 和 children 定义导航树，使用 v-model 控制当前选中项。

<demo src="./__demos__/basic.vue" title="基础纵向导航示例" desc="通过 options 和 children 定义导航树，使用 v-model 控制当前选中项。"></demo>

### 横向多级导航

mode="horizontal" 将一级导航横向排列，分支通过浮层展开。

<demo src="./__demos__/horizontal-sub-menu.vue" title="横向多级导航示例" desc="mode='horizontal' 将一级导航横向排列，分支通过浮层展开。"></demo>

### 横向溢出收纳

拖动容器右下角缩窄宽度，观察选项自动收入“更多”；展开更多后仍可选择和使用键盘导航。

<demo src="./__demos__/breakpoint.vue" title="横向溢出收纳示例" desc="拖动容器右下角缩窄宽度，观察选项自动收入“更多”；展开更多后仍可选择和使用键盘导航。"></demo>

### 多级与手风琴

accordion 使同层只展开一个分支；默认选中深层选项时自动展开其祖先路径。

<demo src="./__demos__/sub-menu.vue" title="多级与手风琴示例" desc="accordion 使同层只展开一个分支；默认选中深层选项时自动展开其祖先路径。"></demo>

### 受控选择与展开

切换是否接受更新请求，观察受控选中值和展开状态只有在业务接受后才改变。

<demo src="./__demos__/controlled.vue" title="受控选择与展开示例" desc="切换是否接受更新请求，观察受控选中值和展开状态只有在业务接受后才改变。"></demo>

### 字段映射与禁用

映射业务数据字段，展示分组、分隔线、单项禁用、隐藏项和整菜单禁用。

<demo src="./__demos__/field-names.vue" title="字段映射与禁用示例" desc="映射业务数据字段，展示分组、分隔线、单项禁用、隐藏项和整菜单禁用。"></demo>

### 折叠导航

通过外部按钮控制折叠，折叠后分支弹出子菜单，叶项使用 Tooltip 提示名称。

<demo src="./__demos__/collapsed.vue" title="折叠导航示例" desc="通过外部按钮控制折叠，折叠后分支弹出子菜单，叶项使用 Tooltip 提示名称。"></demo>

### 插槽与 VNode

通过 label、extra 插槽和 option 的 VNode 图标定制节点内容，层级仍由 options 定义。

<demo src="./__demos__/custom-content.vue" title="插槽与 VNode示例" desc="通过 label、extra 插槽和 option 的 VNode 图标定制节点内容，层级仍由 options 定义。"></demo>

### 五种尺寸

分别展示 xs、sm、md、lg、xl，每一行标注对应尺寸。

<demo src="./__demos__/size.vue" title="五种尺寸示例" desc="分别展示 xs、sm、md、lg、xl，每一行标注对应尺寸。"></demo>

### 明暗主题

分别展示 light 和 dark 主题。

<demo src="./__demos__/theme.vue" title="明暗主题示例" desc="分别展示 light 和 dark 主题。"></demo>

## NavMenu API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 导航结构 | NavMenuOption[] | [] |
| model-value | 当前选中 key，支持 v-model；null 表示无选中 | string / number / null | undefined |
| default-value | 非受控初始选中值 | string / number / null | null |
| expanded-keys | 受控展开分支 | (string / number)[] | undefined |
| default-expanded-keys | 非受控初始展开分支 | (string / number)[] | [] |
| default-expand-all | 初始展开所有分支 | boolean | false |
| auto-expand-selected | 纵向非折叠时展开选中项祖先；受控时发出更新请求 | boolean | true |
| accordion | 同层只展开一个分支 | boolean | false |
| mode | 导航方向 | vertical / horizontal | vertical |
| collapsed | 折叠状态，支持 v-model:collapsed | boolean | undefined |
| default-collapsed | 非受控初始折叠 | boolean | false |
| theme | 主题 | light / dark | 继承 Sider，否则 light |
| size | 尺寸 | xs / sm / md / lg / xl | md |
| disabled | 全局禁用选择和用户展开 | boolean | false |
| field-names | key/label/children/disabled 字段映射 | NavMenuFieldNames | 默认同名 |
| responsive | 横向菜单启用更多收纳 | boolean | true |
| indent | 每层缩进（px） | number | 24 |
| root-indent | 根缩进（px） | number | 12 |
| collapsed-width | 折叠宽度（px） | number | 56 |
| icon-size | 图标尺寸（px） | number | 20 |
| popup-container | 浮层挂载容器，false 为当前位置 | Trigger 对应类型 | 继承 Trigger 定义 |
| popup-class | 浮层附加类名 | string / array / object | — |
| overflow-label | 更多入口标签 | string | 更多 |
| node-props | 节点 DOM 属性和事件；内部选择、禁用和键盘语义保留 | (context) => Record<string, unknown> | — |

受控属性以传入值为准；更新事件只是请求。`default-*` 仅初始化，不跟随后续修改。单选值与展开状态相互独立，`showOption` 不会更改选中值。

### NavMenuOption

```ts
interface NavMenuOption {
  key?: string | number
  type?: 'item' | 'group' | 'divider'
  label?: VNodeChild | ((context: NavMenuRenderContext) => VNodeChild)
  icon?: VNodeChild | ((context: NavMenuRenderContext) => VNodeChild)
  extra?: VNodeChild | ((context: NavMenuRenderContext) => VNodeChild)
  children?: NavMenuOption[]
  disabled?: boolean
  show?: boolean
  props?: HTMLAttributes
}
```

普通选项必须提供唯一且稳定的 key（自定义字段时使用映射后的 key）；数字 0 是合法 key。group/divider 可省略 key，但动态重排时建议显式提供。重复 key 或普通项缺失 key 会报错，避免选中路径混乱。show=false 的节点及其子树不渲染；禁用分支向下继承禁用。存在 children 的普通项负责展开，叶项负责选择。

### 事件

| 事件 | 参数 |
| --- | --- |
| update:model-value | key / null |
| update:expanded-keys | keys |
| update:collapsed | collapsed |
| select | key, 原始 option, 原始 Event |

### 插槽

默认插槽用于放置独立的 `CNavMenuItem`。存在默认插槽时，横向菜单使用滚动，`responsive` 不进行更多收纳。

label/icon/extra 均接收 `{ option, selected, expanded, active, level }`；active 表示处于选中项祖先路径，level 从 0 开始。

### 方法

| 方法 | 说明 |
| --- | --- |
| showOption(key?) | 展开指定项的祖先路径，默认当前选中项；不选择 |
| scrollTo(key?) | 先展开，再滚动到该项；受控展开需父级接受 |
| resize() | 手动重新计算横向溢出 |
| setCollapsed(value) | 更新非受控折叠或发出受控更新请求 |

### 箭头方向

横向下拉入口收起朝下、展开朝上；纵向内联分支收起朝右、展开朝下；向右弹出的子菜单收起朝右、展开朝左。独立 Item 根据 placement 显示方向，展开后反向。箭头跟随实际 open 状态，受控状态未接受更新时不切换。

### 键盘

纵向 Up/Down 与横向 Left/Right 移动焦点，Home/End 到首尾；Right 展开纵向分支，Down 打开横向分支；Left 返回父级，弹出层 Escape 关闭当前层并恢复参考项焦点。Enter/空格激活节点。禁用项跳过；输入框保留原生按键。横向缩窄导致当前项进入“更多”时，焦点迁移至更多入口。


## NavMenu.Item API

标题默认跟随匹配的选中选项。`label` 插槽优先级最高：固定标题可写 `<template #label>高级筛选</template>`；手动标题可绑定独立的响应式变量。原 `update-label` 已移除。

`CNavMenuItem`（也可写 `NavMenu.Item`）是独立入口，不参与根菜单 `modelValue` 的互斥选中。每个入口通过自己的 `options` 定义菜单，或通过 `content` 插槽完全替换面板。默认插槽自定义入口本身，`label`、`icon` 插槽局部自定义入口，`option-label`、`option-icon`、`option-extra` 自定义选项。

有默认插槽时，横向菜单使用滚动而不收入“更多”，避免复制包含表单的入口。纯 `options` 菜单继续支持自动溢出收纳。新 Item 不兼容旧的子组件收集协议。同一 NavMenu 下的 Item 面板互斥，点击其他入口会请求关闭已打开的面板；受控 open 需要业务接受 update:open。

| Item 属性 | 说明 | 默认 |
| --- | --- | --- |
| label | 未选中或选中值未匹配 options 时的入口标题，支持 VNode / 渲染函数 | — |
| options / fieldNames | 与 NavMenu 相同的选项和字段映射 | `[]` |
| modelValue / defaultValue | 独立受控值 / 初始值，支持字符串、数字和 null | `undefined` / `null` |
| active | 独立高亮；省略时根据选中值是否非 null 判断 | — |
| hideOnSelect | 调用 select 后关闭面板 | `true` |
| open / defaultOpen | 受控 / 初始面板状态 | `undefined` / `false` |
| disabled | 禁用入口（同时遵循父菜单 disabled） | `false` |
| trigger | Trigger 触发方式 | `click` |
| placement | 普通下拉的位置；全高面板使用 right/left 系列时紧贴入口对应边缘 | `bottom-start` |
| popupLayout | `dropdown` 普通下拉 / `full-width` 入口下方通栏 / `full-height` 右侧全高 | `dropdown` |
| popupStyle | 面板 CSS，可覆盖全高面板宽度、方向和尺寸 | — |
| popupContainer / popupClass | Trigger 挂载容器及浮层类名 | 跟随父菜单 |
| optionsMode | 默认选项面板的横向 / 纵向排列 | `vertical` |

所有入口插槽和 `content` 插槽收到 `{ modelValue, selectedOption, active, open, select, close }`。`select(key, event?)` 发出 `update:modelValue` 和 `select(key, option, event)`；自定义面板可以选择 options 外的值，此时 option 为 undefined。`close()` 关闭并恢复入口焦点。受控值只有父组件接受后才影响标题和高亮。`hideOnSelect` 独立于值是否被接受，需手动确认时设为 false。

Item 还发出 `update:open`、入口 `click`，暴露 `select`、`close`、`setOpen` 方法。通栏 / 全高是非模态浮层，不锁定页面滚动或限制焦点；默认挂载到 body，使用自定义容器时需避免祖先 transform 改变 fixed 定位基准。


## 从旧版本迁移

旧子组件收集协议和状态别名已移除。新的 `NavMenu.Item` 是独立一级入口，与旧 Item 的用法不同。

| 旧用法 | 新用法 |
| --- | --- |
| 旧 Item / SubMenu / ItemGroup 组件 | 导航树使用 options、children、type=group；自定义一级入口使用新的 NavMenu.Item |
| selectedKeys/defaultSelectedKeys 数组 | modelValue/defaultValue 单个 key |
| openKeys/defaultOpenKeys | expandedKeys/defaultExpandedKeys |
| menu-item-click | select(key, option, event) |
| pop / popButton 模式 | vertical + collapsed；横向仍用 horizontal |
| 子组件 title/icon 插槽 | 根 label/icon/extra 作用域插槽或 option VNode |
| 内置折叠按钮与 breakpoint | 外部按钮控制 collapsed；布局响应式交由容器 |
| triggerProps/tooltipProps 全量透传 | 明确的 popupContainer/popupClass 属性 |

所有库内演示、组件导出、全局类型和 resolver 均已迁移。样式改为 BEM `c-nav-menu__*` 与 `c-nav-menu--*`，旧选择器与未使用 token 不再保留。

## 设计参考

参考工作区 Naive UI 2.44.1 Menu 的 options 树、祖先路径和内容渲染设计；未引入 Naive UI 或 TreeMate 运行时依赖。浮层由本库 Trigger 提供，公开 API 使用 Cedar 命名约定。

## 样式变量

| 变量 | 默认值 |
| --- | --- |
| --c-nav-menu-font-size | `var(~'--c-font-size-body-3')` |
| --c-nav-menu-border-radius | `var(~'--c-border-radius-sm')` |
| --c-nav-menu-light-bg | `var(~'--c-color-menu-light-bg')` |
| --c-nav-menu-light-item-bg-hover | `var(~'--c-color-fill-2')` |
| --c-nav-menu-light-item-bg-selected | `var(~'--c-color-fill-2')` |
| --c-nav-menu-light-item-text-color | `var(~'--c-color-text-2')` |
| --c-nav-menu-light-item-text-color-selected | `rgb(var(~'--c-primary-6'))` |
| --c-nav-menu-light-item-text-color-disabled | `var(~'--c-color-text-4')` |
| --c-nav-menu-dark-bg | `var(~'--c-color-menu-dark-bg')` |
| --c-nav-menu-dark-item-bg-hover | `var(~'--c-color-menu-dark-hover')` |
| --c-nav-menu-dark-item-bg-selected | `var(~'--c-color-menu-dark-hover')` |
| --c-nav-menu-dark-item-text-color | `var(~'--c-color-text-4')` |
| --c-nav-menu-dark-item-text-color-selected | `var(~'--c-color-white')` |
| --c-nav-menu-dark-item-text-color-disabled | `var(~'--c-color-text-2')` |
| --c-nav-menu-row-height | `40px` |
| --c-nav-menu-row-height-xs | `28px` |
| --c-nav-menu-row-height-sm | `32px` |
| --c-nav-menu-row-height-lg | `48px` |
| --c-nav-menu-row-height-xl | `56px` |
| --c-nav-menu-content-gap | `8px` |
| --c-nav-menu-content-padding | `12px` |
| --c-nav-menu-icon-size | `20px` |
| --c-nav-menu-arrow-size | `12px` |
| --c-nav-menu-focus-width | `2px` |
| --c-nav-menu-focus-offset | `-2px` |
| --c-nav-menu-divider-width | `1px` |
| --c-nav-menu-divider-color | `var(--c-color-border-2)` |
| --c-nav-menu-popup-min-width | `180px` |
| --c-nav-menu-popup-max-height | `320px` |
| --c-nav-menu-popup-shadow | `0 6px 24px rgb(0 0 0 / 12%)` |
| --c-nav-menu-motion-duration | `150ms` |
| --c-nav-menu-panel-width | `min(400px, 100vw)` |
