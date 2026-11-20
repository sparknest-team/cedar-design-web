---
permalink: /components/nav-menu/
---

# NavMenu 导航菜单

通过 `options` 定义导航结构，支持纵向展开、横向下拉及横向溢出收纳。子菜单由 `children` 自动产生，也可用 `NavMenu.Item` 定义独立一级入口；无需 SubMenu/ItemGroup 组件。

### 程序化滚动的生命周期

`scrollTo(key)` 展开路径后等待渲染，再以 nearest 对齐原生定位；返回 `Promise<void>`。连续调用只执行最新仍有效的请求。禁用、options／fieldNames／mode／responsive／折叠配置变化、KeepAlive 停用及卸载使旧请求失效；重新激活后请显式发起新请求，不会重放旧滚动。取消不回滚已经执行的浏览器滚动。

NavMenu 有两种清晰的使用方式：导航树使用 `options`，业务筛选等独立入口使用 `NavMenu.Item`。下面先介绍常用导航，再逐步进入层级、响应式和高级定制。

## 基础示例

### 基础导航

#### 纵向导航

最常见的侧边导航。通过 `options` 和 `children` 声明层级，使用 `v-model` 获取当前页面。

<demo src="./__demos__/basic.vue" title="基础纵向导航" desc="使用 options 声明导航树，通过 v-model 管理当前选中项。"></demo>

#### 横向导航

用于页面顶部导航。一级菜单横向排列，含有 `children` 的入口通过浮层展示下级菜单。

<demo src="./__demos__/horizontal-sub-menu.vue" title="基础横向导航" desc="切换为 horizontal 模式，二级及更深层级在浮层中展开。"></demo>

## 外观与布局

### 外观

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `options` | 导航结构 | 外观 |
| `size` | 尺寸 | 外观 |
| `mode` | 导航方向 | 外观 |
<!-- demo-config-notes:end -->

#### 尺寸

NavMenu 支持 `xs`、`sm`、`md`、`lg` 和 `xl` 五档组件尺寸。

<demo src="./__demos__/size.vue" title="五种尺寸" desc="并排比较五档菜单高度和文字尺寸。"></demo>

## 层级与响应式

### 层级与响应式

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `options` | 导航结构 | 层级与响应式 |
| `accordion` | 同层只展开一个分支 | 层级与响应式 |
| `default-value` | 非受控初始选中值 | 层级与响应式 |
| `collapsed` | 折叠状态，支持 v-model:collapsed | 层级与响应式 |
| `mode` | 导航方向 | 层级与响应式 |
<!-- demo-config-notes:end -->

#### 多级菜单与手风琴

`accordion` 让同一层级只展开一个分支；初始选中深层页面时，菜单会自动展开其祖先路径。

<demo src="./__demos__/sub-menu.vue" title="多级菜单与手风琴" desc="展示深层选中、祖先自动展开和同层手风琴行为。"></demo>

#### 折叠菜单

适合空间有限的侧边栏。折叠后保留图标，分支改由浮层展开。

<demo src="./__demos__/collapsed.vue" title="侧边栏折叠" desc="通过外部按钮控制 collapsed；折叠后的分支使用浮层，叶项提供名称提示。"></demo>

#### 横向溢出收纳

横向空间不足时，末尾菜单自动收入“更多”。可拖动示例容器右下角观察变化。

<demo src="./__demos__/breakpoint.vue" title="横向溢出收纳" desc="缩窄容器观察更多菜单；收纳后的选项仍支持选择和键盘导航。"></demo>

## 导航入口与业务面板

### 独立入口与业务面板

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `mode` | 导航方向 | 独立入口与业务面板 |
| `active-item` | 受控的具名 NavMenu.Item 激活项，支持 v-model:active-item | 独立入口与业务面板 |
<!-- demo-config-notes:end -->

`NavMenu.Item` 适合分类、地区和高级筛选等独立入口。它有自己的值和展开状态，不参与导航树的互斥选择。

#### 横向筛选栏

同时展示普通下拉、横向通栏选项和自定义筛选面板，是顶部业务导航的完整示例。

<demo src="./__demos__/items-horizontal.vue" title="横向筛选栏" desc="分类使用普通下拉，地区使用通栏选项，更多筛选使用 full 面板与自定义内容。"></demo>

#### 纵向工作台

页面入口负责互斥高亮，项目选择和高级筛选独立管理；全高面板从菜单右侧展开。

<demo src="./__demos__/items-vertical.vue" title="纵向工作台" desc="组合页面入口、项目下拉和右侧全高筛选面板。"></demo>

#### 入口状态与视觉强调

通过插槽直接显示业务 `active` 和面板 `open`。独立入口匹配有效选项时才 active；`highlight` 可以单独覆盖外观。具名入口只在选择叶子项后更新 activeItem，打开面板不会提前激活。

<demo src="./__demos__/entry-state.vue" title="入口状态与视觉强调" desc="比较 active、open 与 highlight；支持数字 0、空字符串、清空和未匹配值。"></demo>

#### 标题更新策略

Item 的标题默认跟随选中项，也可以通过 `#label` 保持固定标题，或把选中值与显示标题分开管理。高亮状态可以由根菜单统一管理，也可以由每个 Item 独立管理。

##### 统一激活

为 Item 设置唯一 `name`，再通过根菜单的 `v-model:active-item` 统一保持单选高亮。打开一级入口只展开面板，不会提前激活；选择叶子节点后才更新当前高亮项，每个面板的内部值仍独立保留。确实需要初始高亮时，可以显式设置 `active-item` 或 `default-active-item`。

<demo src="./__demos__/item-label.vue" title="统一激活的标题策略" desc="初始无高亮；选择任一面板的叶子节点后，具名 Item 统一保持单选高亮，各面板内部值独立保存。"></demo>

##### 独立激活

不设置 `name` 时，每个 Item 根据自己的值独立高亮，适合多个筛选条件同时生效。下例初始同时选中了分类和地区，因此两个入口都会高亮；清空其中一项不会影响另一项。

<demo src="./__demos__/item-label-independent.vue" title="独立激活的筛选入口" desc="未具名 Item 各自维护标题和值，可以同时高亮；同一时间仍只展开一个面板。"></demo>

## 数据与状态控制

### 数据与状态控制

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `options` | 导航结构 | 数据与状态控制 |
| `model-value` | 当前选中 key，支持 v-model；null 表示无选中 | 数据与状态控制 |
| `expanded-keys` | 受控展开分支 | 数据与状态控制 |
| `field-names` | key/label/children/disabled 字段映射 | 数据与状态控制 |
| `disabled` | 全局禁用选择和用户展开 | 数据与状态控制 |
| `default-value` | 非受控初始选中值 | 数据与状态控制 |
<!-- demo-config-notes:end -->

#### 受控选择与展开

受控属性始终以父级传入值为准。示例可切换是否接受更新请求，以观察选择与展开状态的区别。

<demo src="./__demos__/controlled.vue" title="受控选择与展开" desc="更新事件只表达请求；只有父级接受后，受控状态才发生改变。"></demo>

<demo src="./__demos__/item-controlled.vue" title="受控状态与禁用" desc="Item 独立控制选中值与展开状态，父级可以接受或拒绝更新。"></demo>

<demo src="./__demos__/panel-state.vue" title="面板状态与关闭" desc="默认保留内部草稿，可通过 unmount-on-close 卸载，根 close 方法统一关闭。"></demo>

#### 业务字段映射

使用 `field-names` 接入不同字段结构，同时展示分组、分隔线、禁用、隐藏和整菜单禁用。

<demo src="./__demos__/field-names.vue" title="字段映射与禁用" desc="将 id、name、items 和 unavailable 映射为菜单标准字段。"></demo>

#### 节点内容定制

作用域插槽负责统一定制节点内容，选项本身也可以提供 VNode 或渲染函数。

<demo src="./__demos__/custom-content.vue" title="插槽与 VNode" desc="通过 label、extra 插槽和 option 图标定制节点，导航层级仍由 options 管理。"></demo>

## 使用说明

### 配置说明

`popup-layout="full"` 从入口底边开始，宽度占满视口，高度占满下方剩余视口区域。Maple 同名布局从整个筛选栏底边开始；移动端默认 full-width，桌面端默认 dropdown。

局部亮暗主题统一由外层 `<c-theme-provider theme="dark">` 设置；本组件不再提供 theme 属性。嵌套区域可显式设置 theme="light"，库内弹层跟随所属 Provider。

## API

### NavMenu Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 导航结构 | NavMenuOption[] | [] |
| model-value | 当前选中 key，支持 v-model；null 表示无选中 | string / number / null | undefined |
| default-value | 非受控初始选中值 | string / number / null | null |
| active-item | 受控的具名 NavMenu.Item 激活项，支持 v-model:active-item | string / number / null | undefined |
| default-active-item | 非受控的具名 NavMenu.Item 初始激活项 | string / number / null | null |
| expanded-keys | 受控展开分支 | (string / number)[] | undefined |
| default-expanded-keys | 非受控初始展开分支 | (string / number)[] | [] |
| default-expand-all | 初始展开所有分支 | boolean | false |
| auto-expand-selected | 纵向非折叠时展开选中项祖先；受控时发出更新请求 | boolean | true |
| accordion | 同层只展开一个分支 | boolean | false |
| mode | 导航方向 | vertical / horizontal | vertical |
| collapsed | 折叠状态，支持 v-model:collapsed | boolean | undefined |
| default-collapsed | 非受控初始折叠 | boolean | false |
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
| overflow-label | 更多入口标签；未设置时跟随当前语言 | string | 当前语言的更多 |
| node-props | 节点 DOM 属性和事件；内部选择、禁用和键盘语义保留 | (context) => Record<string, unknown> | — |

受控属性以传入值为准；更新事件只是请求。`default-*` 仅初始化，不跟随后续修改。单选值与展开状态相互独立，`showOption` 不会更改选中值。

### 两端对应关系

两端面板均在首次展开时创建，关闭或切换入口后默认保留挂载，内部草稿和分支展开状态继续保留。设置 `unmount-on-close` 后，在关闭过渡结束时卸载面板；再次展开会重新创建内部组件，但不会清空 Item 自身的选中值。草稿提交、重置和筛选生效时机由业务决定。

根 `close()` 只请求关闭 Item 面板并恢复入口焦点，不改变选中值、active-item 或桌面导航树的 expanded-keys。受控 open 拒绝更新时仍保持展开。当 `open` 为真时，添加 `#content` 或传入选项即可展开。移除 `#content` 后，有选项时显示选项列表，选项为空时收起面板。KeepAlive 停用期间隐藏面板并请求关闭，重新激活时仍以受控值为准。

Item 的选中值、展开状态、事件、插槽上下文及 `select/close/setOpen` 方法保持一致。两端根菜单都提供 `close/resize/setActiveItem`。`name` 必须在当前菜单内唯一，动态修改后会释放旧名称；同一次更新允许交换名称或在重排时复用旧名称，以更新完成后的名称检查重复。纵向选项会在初始值、受控值或 options 更新时展开当前值的可用祖先路径；用户仍可手动收起分支。

| 能力 | Cedar | Maple |
| --- | --- | --- |
| 根菜单 | options 导航树或 Item 入口；默认 vertical | 仅 Item 筛选栏；默认 horizontal |
| popup-layout | dropdown（默认）/ full-width / full-height / full | full-width（默认）/ full |
| 面板起点 | 当前入口底边 | 整个筛选栏底边；独立 Item 使用自身底边 |
| 触发与定位 | trigger / placement | 固定点击向下展开 |
| 遮罩与滚动 | 非模态，不锁背景滚动 | 根级 overlay / overlay-closable / lock-scroll / esc-to-close / z-index |
| 主题 | 由 ThemeProvider 局部主题控制 | 跟随全局主题，无 theme 属性 |
| 导航树专用方法 | showOption / scrollTo / setCollapsed | — |

两端 `NavMenuPopupLayout` 分别导出本端支持的值域；Maple 的 `NavMenuMode` 仅为 horizontal，`options-mode` 仍支持两个方向。入口 default 插槽替换入口内部内容，移动端位于原生按钮中，请使用文本、图标等非交互内容；表单和操作按钮放在 content 插槽。

### 箭头方向

横向下拉入口收起朝下、展开朝上；纵向内联分支收起朝右、展开朝下；向右弹出的子菜单收起朝右、展开朝左。独立 Item 根据 placement 显示方向，展开后反向。箭头跟随实际 open 状态，受控状态未接受更新时不切换。

### 键盘

纵向 Up/Down 与横向 Left/Right 移动焦点，Home/End 到首尾；Right 展开纵向分支，Down 打开横向分支；Left 返回父级，弹出层 Escape 关闭当前层并恢复参考项焦点。Enter/空格激活节点。禁用项跳过；输入框保留原生按键。横向缩窄导致当前项进入“更多”时，焦点迁移至更多入口。

### NavMenuOption Events

| 事件 | 参数 |
| --- | --- |
| update:model-value | key / null |
| update:active-item | name / null |
| update:expanded-keys | keys |
| update:collapsed | collapsed |
| select | key, 原始 option, 原始 Event |

### NavMenuOption Slots

默认插槽用于放置独立的 `CNavMenuItem`。存在默认插槽时，横向菜单使用滚动，`responsive` 不进行更多收纳。

label/icon/extra 渲染函数、同名插槽及 nodeProps 均接收 `{ option, active, expanded, level }`。`active` 只表示当前节点自身匹配 modelValue，祖先路径强调留在内部；`expanded` 表示分支展开，level 从 0 开始。

### NavMenuOption Methods

| 方法 | 说明 |
| --- | --- |
| close() | 请求关闭所有 Item 面板并恢复入口焦点，不修改导航树展开状态 |
| showOption(key?) | 展开指定项的祖先路径，默认当前选中项；不选择 |
| scrollTo(key?) | 先展开，再滚动到该项；受控展开需父级接受 |
| resize() | 手动重新计算横向溢出 |
| setCollapsed(value) | 更新非受控折叠或发出受控更新请求 |
| setActiveItem(value) | 更新具名 Item 的非受控激活项或发出受控更新请求 |

### NavMenuItem Props

使用 content 插槽时，自定义面板的无障碍名称跟随入口的名称；入口可通过 aria-label 或 aria-labelledby 指定名称。请确保自定义入口具有有意义的名称。

标题默认跟随匹配的选中选项。`label` 插槽优先级最高：固定标题可写 `<template #label>高级筛选</template>`；手动标题可绑定独立的响应式变量。

`v-model` 保存面板的选中值。插槽 `active` 只表示业务上的当前入口：提供 name 且处于根菜单中时，由根 activeItem 是否等于该 name 决定；独立入口则由主值是否匹配 options 中的普通选项决定（包括 0 和空字符串）。未知值、分组和分隔项不激活独立入口。`highlight` 仅覆盖视觉强调，true 强制强调、false 取消强调，省略时跟随 active；它不改变 active 或主值。打开面板不会激活入口。

`CNavMenuItem`（也可写 `NavMenu.Item`）是自定义一级入口，不参与根菜单普通导航树的 `modelValue`。未提供 `name` 时，Item 根据自己的值独立高亮，适合分类、地区等多个筛选条件同时生效；提供唯一 `name` 后，由根菜单的 `activeItem/defaultActiveItem` 统一保持单选高亮。两种模式都只允许同一时间展开一个 Item 面板，且不会清空其他面板的内部值。普通一级导航仍使用根 NavMenu 的 `options + v-model`。每个入口通过自己的 `options` 定义菜单，或通过 `content` 插槽完全替换面板。默认插槽自定义入口内部内容，`label`、`icon` 插槽局部自定义入口，`option-label`、`option-icon`、`option-extra` 自定义选项。

有默认插槽时，横向菜单使用滚动而不收入“更多”，避免复制包含表单的入口。纯 `options` 菜单继续支持自动溢出收纳。同一 NavMenu 下的 Item 面板互斥，点击其他入口会请求关闭已打开的面板；受控 open 需要业务接受 update:open。

| Item 属性 | 说明 | 默认 |
| --- | --- | --- |
| name | 稳定且唯一的入口标识；提供后由根菜单 activeItem 互斥管理当前入口；视觉覆盖另用 highlight | — |
| label | 未选中或选中值未匹配 options 时的入口标题，支持 VNode / 渲染函数 | — |
| options | 菜单选项，结构与 NavMenu 一致 | `[]` |
| field-names | 选项字段映射，与 NavMenu 一致 | `undefined` |
| model-value | 受控选中 key，支持字符串、数字和 null，支持 v-model | `undefined` |
| default-value | 非受控初始选中 key，支持字符串、数字和 null，仅初始化时读取 | `null` |
| highlight | 入口视觉强调覆盖，不改变业务 active 或选中值；省略时跟随 active | — |
| hide-on-select | 调用 select 后关闭面板 | `true` |
| unmount-on-close | 关闭过渡结束后卸载面板；默认保留首次展开后的内容 | false |
| open | 受控展开状态，支持 v-model:open | `undefined` |
| default-open | 非受控初始展开状态，仅初始化时读取 | `false` |
| disabled | 禁用入口（同时遵循父菜单 disabled） | `undefined` |
| trigger | Trigger 触发方式 | `click` |
| placement | 普通下拉的位置；全高面板使用 right/left 系列时紧贴入口对应边缘 | `bottom-start` |
| popup-layout | `dropdown` 普通下拉 / `full-width` 入口下方通栏 / `full-height` 右侧全高 / `full` 入口下方宽高铺满 | `dropdown` |
| popup-style | 面板 CSS，可覆盖全高面板宽度、方向和尺寸 | — |
| popup-container | 浮层挂载容器；省略时跟随父菜单 | 跟随父菜单 |
| popup-class | 浮层附加类名；省略时跟随父菜单 | 跟随父菜单 |
| options-mode | 默认选项面板的横向 / 纵向排列 | `vertical` |

所有入口插槽和 `content` 插槽收到 `{ modelValue, selectedOption, active, open, select, close }`。`select(key, event?)` 发出 `update:modelValue` 和 `select(key, option, event)`；自定义面板可以选择 options 外的值，此时 option 为 undefined；独立入口 active 为 false，如需强调可显式设置 highlight。`close()` 关闭并恢复入口焦点。受控值只有父组件接受后才影响标题和业务 active。入口插槽的 active 表示入口状态；label 渲染函数的 active 则表示其上下文 option 自身是否匹配 Item 的主值，未匹配时为 false。`hideOnSelect` 独立于值是否被接受，需手动确认时设为 false。

Item 还发出 `update:open`、入口 `click`，暴露 `select`、`close`、`setOpen` 方法。通栏 / 全高是非模态浮层，不锁定页面滚动或限制焦点；默认挂载到 body，使用自定义容器时需避免祖先 transform 改变 fixed 定位基准。

## Types

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

## 设计参考

参考工作区 Naive UI 2.44.1 Menu 的 options 树、祖先路径和内容渲染设计；未引入 Naive UI 或 TreeMate 运行时依赖。浮层由本库 Trigger 提供，公开 API 使用 Cedar 命名约定。

## 阅读方向与键盘交互

NavMenu 继承最近的原生 `dir` 并支持动态切换。横向菜单的左右键按阅读方向移动焦点；纵向上下键不反转。RTL 下左键展开/进入子级，右键收起/返回父级，LTR 相反；Escape 关闭浮层并返回触发项。

数据菜单的嵌套浮层优先向阅读结束侧展开，空间不足时自动调整，浮层继承来源作用域。显式 `NavMenu.Item` 的物理 `placement` 保持原意。切换方向不会选中菜单或清空筛选值。

## CSS Variables

菜单与子菜单使用同一组主题变量。`--c-nav-menu-light-bg` 控制背景，`--c-nav-menu-light-item-bg-hover` 控制悬停背景，选中和禁用状态使用表中对应变量。名称带 `light` 的变量在亮色和暗色主题中均生效；使用 ThemeProvider 可为局部菜单和其弹层设置主题与覆盖值。

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-nav-menu-arrow-size` | `12px` | `width` |
| `--c-nav-menu-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-nav-menu-content-gap` | `8px` | `gap`, `margin`, `padding` |
| `--c-nav-menu-content-padding` | `12px` | `padding` |
| `--c-nav-menu-divider-color` | `var(--c-color-border-2)` | `background`, `border` |
| `--c-nav-menu-divider-width` | `1px` | `border`, `height`, `width` |
| `--c-nav-menu-focus-offset` | `-2px` | `outline-offset` |
| `--c-nav-menu-focus-width` | `2px` | `outline` |
| `--c-nav-menu-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-nav-menu-icon-size` | `20px` | `font-size` |
| `--c-nav-menu-light-bg` | `var(--c-color-bg-2)` | `background` |
| `--c-nav-menu-light-item-bg-hover` | `var(--c-color-fill-2)` | `background` |
| `--c-nav-menu-light-item-bg-selected` | `var(--c-color-fill-2)` | `background` |
| `--c-nav-menu-light-item-text-color` | `var(--c-color-text-2)` | `color` |
| `--c-nav-menu-light-item-text-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-nav-menu-light-item-text-color-selected` | `var(--c-sys-color-action-primary)` | `color`, `outline` |
| `--c-nav-menu-motion-duration` | `150ms` | `transition` |
| `--c-nav-menu-panel-width` | `min(400px, 100vw)` | 组件样式 |
| `--c-nav-menu-popup-max-height` | `320px` | `max-height` |
| `--c-nav-menu-popup-min-width` | `180px` | `min-width` |
| `--c-nav-menu-popup-shadow` | `0 6px 24px rgba(0, 0, 0, 0.12)` | `box-shadow` |
| `--c-nav-menu-row-height` | `40px` | `min-height` |
| `--c-nav-menu-row-height-lg` | `48px` | `min-height` |
| `--c-nav-menu-row-height-sm` | `32px` | `min-height` |
| `--c-nav-menu-row-height-xl` | `56px` | `min-height` |
| `--c-nav-menu-row-height-xs` | `28px` | `min-height` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-nav-menu-arrow-size: 12px;
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
