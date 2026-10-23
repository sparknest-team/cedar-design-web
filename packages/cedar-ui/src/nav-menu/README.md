---
permalink: /components/nav-menu/
---

# NavMenu 导航菜单

通过 `options` 定义导航结构，支持纵向展开、横向下拉及横向溢出收纳。子菜单由 `children` 自动产生，也可用 `NavMenu.Item` 定义独立一级入口；无需 SubMenu/ItemGroup 组件。

### 程序化滚动的生命周期

`scrollTo(key)` 展开路径后等待渲染，再以 nearest 对齐原生定位；返回 `Promise<void>`。连续调用只执行最新仍有效的请求。禁用、options／fieldNames／mode／responsive／折叠配置变化、KeepAlive 停用及卸载使旧请求失效；重新激活后请显式发起新请求，不会重放旧滚动。取消不回滚已经执行的浏览器滚动，不新增 CSS duration Token 或公共取消方法。

## 案例

<!-- api-review:start -->
### 组合审查 / API review

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

NavMenu 有两种清晰的使用方式：导航树使用 `options`，业务筛选等独立入口使用 `NavMenu.Item`。下面先介绍常用导航，再逐步进入层级、响应式和高级定制。

### 基础导航

#### 纵向导航

最常见的侧边导航。通过 `options` 和 `children` 声明层级，使用 `v-model` 获取当前页面。

<demo src="./__demos__/basic.vue" title="基础纵向导航" desc="使用 options 声明导航树，通过 v-model 管理当前选中项。"></demo>

#### 横向导航

用于页面顶部导航。一级菜单横向排列，含有 `children` 的入口通过浮层展示下级菜单。

<demo src="./__demos__/horizontal-sub-menu.vue" title="基础横向导航" desc="切换为 horizontal 模式，二级及更深层级在浮层中展开。"></demo>

### 层级与响应式

#### 多级菜单与手风琴

`accordion` 让同一层级只展开一个分支；初始选中深层页面时，菜单会自动展开其祖先路径。

<demo src="./__demos__/sub-menu.vue" title="多级菜单与手风琴" desc="展示深层选中、祖先自动展开和同层手风琴行为。"></demo>

#### 折叠菜单

适合空间有限的侧边栏。折叠后保留图标，分支改由浮层展开。

<demo src="./__demos__/collapsed.vue" title="侧边栏折叠" desc="通过外部按钮控制 collapsed；折叠后的分支使用浮层，叶项提供名称提示。"></demo>

#### 横向溢出收纳

横向空间不足时，末尾菜单自动收入“更多”。可拖动示例容器右下角观察变化。

<demo src="./__demos__/breakpoint.vue" title="横向溢出收纳" desc="缩窄容器观察更多菜单；收纳后的选项仍支持选择和键盘导航。"></demo>

### 独立入口与业务面板

`NavMenu.Item` 适合分类、地区和高级筛选等独立入口。它有自己的值和展开状态，不参与导航树的互斥选择。

#### 横向筛选栏

同时展示普通下拉、横向通栏选项和自定义筛选面板，是顶部业务导航的完整示例。

<demo src="./__demos__/items-horizontal.vue" title="横向筛选栏" desc="分类使用普通下拉，地区使用通栏选项，高级筛选使用自定义内容。"></demo>

#### 纵向工作台

页面入口负责互斥高亮，项目选择和高级筛选独立管理；全高面板从菜单右侧展开。

<demo src="./__demos__/items-vertical.vue" title="纵向工作台" desc="组合页面入口、项目下拉和右侧全高筛选面板。"></demo>

#### 标题更新策略

Item 的标题默认跟随选中项，也可以通过 `#label` 保持固定标题，或把选中值与显示标题分开管理。高亮状态可以由根菜单统一管理，也可以由每个 Item 独立管理。

##### 统一激活

为 Item 设置唯一 `name`，再通过根菜单的 `v-model:active-item` 统一保持单选高亮。打开一级入口只展开面板，不会提前激活；选择叶子节点后才更新当前高亮项，每个面板的内部值仍独立保留。确实需要初始高亮时，可以显式设置 `active-item` 或 `default-active-item`。

<demo src="./__demos__/item-label.vue" title="统一激活的标题策略" desc="初始无高亮；选择任一面板的叶子节点后，具名 Item 统一保持单选高亮，各面板内部值独立保存。"></demo>

##### 独立激活

不设置 `name` 时，每个 Item 根据自己的值独立高亮，适合多个筛选条件同时生效。下例初始同时选中了分类和地区，因此两个入口都会高亮；清空其中一项不会影响另一项。

<demo src="./__demos__/item-label-independent.vue" title="独立激活的筛选入口" desc="未具名 Item 各自维护标题和值，可以同时高亮；同一时间仍只展开一个面板。"></demo>

### 数据与状态控制

#### 受控选择与展开

受控属性始终以父级传入值为准。示例可切换是否接受更新请求，以观察选择与展开状态的区别。

<demo src="./__demos__/controlled.vue" title="受控选择与展开" desc="更新事件只表达请求；只有父级接受后，受控状态才发生改变。"></demo>

#### 业务字段映射

使用 `field-names` 接入不同字段结构，同时展示分组、分隔线、禁用、隐藏和整菜单禁用。

<demo src="./__demos__/field-names.vue" title="字段映射与禁用" desc="将 id、name、items 和 unavailable 映射为菜单标准字段。"></demo>

#### 节点内容定制

作用域插槽负责统一定制节点内容，选项本身也可以提供 VNode 或渲染函数。

<demo src="./__demos__/custom-content.vue" title="插槽与 VNode" desc="通过 label、extra 插槽和 option 图标定制节点，导航层级仍由 options 管理。"></demo>

### 外观

#### 尺寸

NavMenu 支持 `xs`、`sm`、`md`、`lg` 和 `xl` 五档组件尺寸。

<demo src="./__demos__/size.vue" title="五种尺寸" desc="并排比较五档菜单高度和文字尺寸。"></demo>

#### 主题

`light` 适合普通内容区域，`dark` 适合深色侧边栏或顶部栏。

<demo src="./__demos__/theme.vue" title="明暗主题" desc="比较 light 与 dark 两种菜单主题。"></demo>

## NavMenu API

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
| update:active-item | name / null |
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
| setActiveItem(value) | 更新具名 Item 的非受控激活项或发出受控更新请求 |

### 箭头方向

横向下拉入口收起朝下、展开朝上；纵向内联分支收起朝右、展开朝下；向右弹出的子菜单收起朝右、展开朝左。独立 Item 根据 placement 显示方向，展开后反向。箭头跟随实际 open 状态，受控状态未接受更新时不切换。

### 键盘

纵向 Up/Down 与横向 Left/Right 移动焦点，Home/End 到首尾；Right 展开纵向分支，Down 打开横向分支；Left 返回父级，弹出层 Escape 关闭当前层并恢复参考项焦点。Enter/空格激活节点。禁用项跳过；输入框保留原生按键。横向缩窄导致当前项进入“更多”时，焦点迁移至更多入口。

## NavMenu.Item API

标题默认跟随匹配的选中选项。`label` 插槽优先级最高：固定标题可写 `<template #label>高级筛选</template>`；手动标题可绑定独立的响应式变量。原 `update-label` 已移除。

`CNavMenuItem`（也可写 `NavMenu.Item`）是自定义一级入口，不参与根菜单普通导航树的 `modelValue`。未提供 `name` 时，Item 根据自己的值独立高亮，适合分类、地区等多个筛选条件同时生效；提供唯一 `name` 后，由根菜单的 `activeItem/defaultActiveItem` 统一保持单选高亮。两种模式都只允许同一时间展开一个 Item 面板，且不会清空其他面板的内部值。普通一级导航仍使用根 NavMenu 的 `options + v-model`。每个入口通过自己的 `options` 定义菜单，或通过 `content` 插槽完全替换面板。默认插槽自定义入口本身，`label`、`icon` 插槽局部自定义入口，`option-label`、`option-icon`、`option-extra` 自定义选项。

有默认插槽时，横向菜单使用滚动而不收入“更多”，避免复制包含表单的入口。纯 `options` 菜单继续支持自动溢出收纳。新 Item 不兼容旧的子组件收集协议。同一 NavMenu 下的 Item 面板互斥，点击其他入口会请求关闭已打开的面板；受控 open 需要业务接受 update:open。

| Item 属性 | 说明 | 默认 |
| --- | --- | --- |
| name | 稳定且唯一的入口标识；提供后由根菜单 activeItem 互斥高亮，并优先于 active | — |
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
| --c-nav-menu-light-bg | `var(~'--c-color-bg-2')` |
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
