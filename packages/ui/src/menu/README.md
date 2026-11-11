---
permalink: /components/menu/
---

# Menu 菜单

用于收纳针对当前对象的临时命令，例如更多操作、右键菜单和按钮的附加操作。选择表单数据请使用 Select；选择层级数据请使用 Cascader。

---

## 基础示例

### 更多操作

使用默认插槽传入触发元素，通过 `options` 定义命令。菜单开启后会为触发元素添加 `c-menu-open` 类名。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 禁用状态

<demo src="./__demos__/disabled.vue"></demo>

## 选项与层级

### 分组、子菜单与选项内容

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `options` | 命令树 | 分组、子菜单与选项内容、选中与视觉强调 |
| `hide-on-select` | 激活命令后关闭浮层 | 选中与视觉强调 |
| `submenu-trigger` | 各级子菜单的展开方式，对所有层级统一生效 | 选中与视觉强调 |
<!-- demo-config-notes:end -->

比较平级分组、层级菜单和自定义选项内容。展开子菜单或选择选项，观察各自的数据层级；受控选中与外部定位独立展示。

<details>
<summary>配置说明与使用限制</summary>

#### 选项分组

分组标题与选项左对齐，标题行高 20px、上下各 4px 留白（总高 28px）；后续分组额外间隔 8px，首组不添加组间距。

在 `options` 中使用 `{ type: 'group', children }` 分组，不需要额外的分组组件。

#### 多级菜单

带 `children` 的普通选项自动成为子菜单。所有层级的子菜单共用 `submenu-trigger`，默认悬停展开；改成 `'click'` 时同样对所有层级生效，不能逐项配置，避免同一棵菜单里出现两种展开方式。

#### 自定义选项内容

选项的 `label`、`icon`、`extra` 都支持文本、VNode 或接收 `{ option, active, level }` 的渲染函数。需要统一渲染整组数据时，使用 `option-label`、`option-icon`、`option-extra` 作用域插槽。

`active` 只表示当前选项自身是否匹配菜单的选中值。选中子项时，父分支的 `active` 仍为 `false`；后代选中及展开状态只用于组件内部的路径强调，不作为渲染参数公开。根 Menu 使用 `modelValue/defaultValue` 控制选中值、`open/defaultOpen` 控制展开。`MenuOption` 的视觉强调统一使用 `highlight`，不会改变选中值。

</details>

<demo src="./__demos__/structure-comparison.vue"></demo>

### 选中与视觉强调

对比渲染函数、作用域插槽和手写 MenuOption。父分支可以有选中路径样式，但 active 仍为 false；highlight 也不会把选项变成选中值。

<demo src="./__demos__/active-rendering.vue"></demo>

### 选项值

动态增删或调整选项顺序时，为每个命令设置稳定且唯一的 `value`。数字 `0`、字符串 `'0'` 和布尔值 `false` 是不同的选项值。

## 触发与定位

### 右键菜单

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `trigger` | 根菜单触发方式 | 右键菜单、触发方式 |
| `options` | 命令树 | 右键菜单、定位策略 |
| `align-point` | 按触发时的鼠标坐标定位；打开后保持该位置，再次右键时更新 | 右键菜单 |
| `placement` | 浮层相对触发元素的首选方位，默认 bottom；启用默认的 auto-fit-position 时，空间不足会自动翻转并约束到可视区域，不保证最终停在该侧 | 弹出方向 |
| `strategy` | 根菜单及全部子菜单的定位策略 | 定位策略 |
| `submenu-trigger` | 各级子菜单的展开方式，对所有层级统一生效 | 定位策略 |
<!-- demo-config-notes:end -->

在目标区域内点击鼠标右键触发，需要同时设置 `trigger="contextMenu"` 和 `align-point`。菜单固定在本次右键触发的位置，移动鼠标不会改变位置；再次右键时才更新定位点。

<demo src="./__demos__/context-menu.vue"></demo>

### 与 SplitButton 组合

SplitButton 已封装按钮与下拉命令菜单的组合，并通过 `MenuOption` 定义附加操作，完整用法见 [SplitButton](/components/split-button/)。

### 触发方式

<demo src="./__demos__/trigger.vue"></demo>

### 弹出方向
使用 `placement` 设置菜单相对触发元素的首选方位，可选值见 Menu Props。空间不足时允许自动调整，最终位置可能与首选方位不同。

<demo src="./__demos__/placement.vue"></demo>

### 定位策略

根菜单和各级子菜单响应式使用同一 `strategy`，默认 `absolute`，可选 `fixed`。切换策略不会改变激活值或主动关闭菜单。`popup-container` 独立控制挂载位置；`fixed` 不保证脱离 transform 祖先的包含块。

<demo src="./__demos__/positioning.vue"></demo>

### 高度限制

<demo src="./__demos__/popup-height.vue"></demo>

### 切换触发元素

点击另一个由悬停打开的同级触发元素时，会关闭原菜单；点击子菜单内部不会关闭父菜单。

## 状态与内容定制

### 选中值与 select 事件

使用 `v-model` 管理当前激活值。激活命令时先触发 `update:modelValue`，再触发 `select(value, option, event)`；`select` 表示激活菜单项，不表示表单值变化。

<demo src="./__demos__/selection.vue"></demo>

### 受控打开状态

<demo src="./__demos__/controlled.vue"></demo>

### 页脚

<demo src="./__demos__/footer.vue"></demo>

## 阅读方向

继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部覆盖。子级沿阅读方向展开；进入子级与返回父级的左右键跟随当前方向，上下键与首尾定位保持顺序并跳过禁用项。挂载到外部容器的菜单继承来源方向，切换方向不改变选中值。

## 尺寸与阴影

`size` 控制选项的行高与字号，`md` 保持默认主题；`elevation=true` 使用菜单默认阴影，`false` 取消阴影，数字使用对应的全局阴影层级。

## 键盘操作

在触发元素上按 Enter、Space 或方向键进入菜单。菜单内使用上下键、Home/End 在可用选项间移动，Enter 或 Space 激活选项。前进方向键进入子菜单，后退方向键返回，方向随阅读方向变化。Escape 请求关闭最上层菜单，关闭后焦点返回触发元素。Tab 请求关闭并继续浏览器焦点导航；可编辑输入保留文本编辑按键。

## API

### 主值与默认值

使用普通 `v-model`。`modelValue` 表示选中选项的 value；`defaultValue` 仅在创建时初始化非受控值，后续修改不会重置当前状态。显式绑定值优先，初始化不发出 `update:modelValue`。

### Menu Props

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| options | 命令树 | `MenuOptionData[]` | `[]` |
| field-names | `label/value/children/disabled` 字段映射 | `MenuFieldNames` | `-` |
| model-value **(v-model)** | 当前激活值，用于受控高亮 | `MenuValue` | `-` |
| open **(v-model)** | 浮层是否可见 | `boolean` | `-` |
| default-open | 非受控默认可见状态 | `boolean` | `false` |
| trigger | 根菜单触发方式 | `'hover' \| 'click' \| 'focus' \| 'contextMenu'` 或数组 | `'click'` |
| submenu-trigger | 各级子菜单的展开方式，对所有层级统一生效 | `'hover' \| 'click'` | `'hover'` |
| placement | 浮层相对触发元素的首选方位，默认 bottom；启用默认的 auto-fit-position 时，空间不足会自动翻转并约束到可视区域，不保证最终停在该侧 | `MenuPlacement`<br>`'left' \| 'right' \| 'bottom' \| 'top' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `'bottom'` |
| `strategy` | 根菜单及全部子菜单的定位策略 | `'absolute' \| 'fixed'` | `'absolute'` |
| popup-container | 浮层挂载容器 | `string \| HTMLElement \| false` | `-` |
| popup-max-height | 默认限制、自定义像素高度或不限高 | `boolean \| number` | `true` |
| hide-on-select | 激活命令后关闭浮层 | `boolean` | `true` |
| auto-fit-popup-width | 浮层宽度跟随触发器 | `boolean` | `false` |
| disabled | 禁用菜单 | `boolean` | `false` |
| align-point | 按触发时的鼠标坐标定位；打开后保持该位置，再次右键时更新 | `boolean` | `false` |
| default-value | 非受控初始选中值 | `MenuValue` | `-` |
| size | 菜单项尺寸 | `MenuSize` | `md` |
| unmount-on-close | 关闭后是否卸载面板 | `boolean` | `true` |
| reference | 外部触发元素或选择器 | `MenuReference` | `-` |
| popup-class | 定位层类名 | `string / array / object` | `-` |
| offset-x / offset-y | 相对触发器偏移 | `string / number` | `0` |
| mouse-enter-delay / mouse-leave-delay | 根菜单悬停打开 / 关闭延迟，毫秒 | `number` | `100` |
| close-on-click-reference | 再次点击触发器是否关闭 | `boolean` | `true` |
| cover | 浮层是否覆盖触发器 | `boolean` | `false` |
| elevation | 默认阴影、关闭阴影或指定层级 | `boolean / number` | `true` |

### `MenuOptionData`

| 字段 | 描述 | 类型 |
| --- | --- | --- |
| type | 普通命令、分组或分隔线 | `'item' \| 'group' \| 'divider'` |
| label | 主内容 | `VNodeChild \| (context) => VNodeChild` |
| icon | 前置图标 | `VNodeChild \| (context) => VNodeChild` |
| extra | 右侧辅助内容，如快捷键 | `VNodeChild \| (context) => VNodeChild` |
| value | 激活命令时传给事件的值 | `any` |
| children | 子命令；普通项带 children 时成为子菜单 | `MenuOptionData[]` |
| disabled | 禁用当前项及其后代 | `boolean` |
| show | 是否渲染 | `boolean` |
| ripple | 点击波纹配置（Cedar 不渲染波纹） | `boolean` |
| props | 透传给命令行元素的 HTML 属性 | `HTMLAttributes` |

渲染上下文为 `{ option, active, level }`。`type: 'group'` 只负责视觉分组，不增加子项层级；`type: 'divider'` 不可聚焦或激活。

### Menu Events

| 事件名 | 描述 | 参数 |
| --- | --- | --- |
| update:model-value | 当前选中值更新请求 | `value: MenuValue` |
| open-change | 浮层显示状态更新请求 | `open: boolean` |
| select | 用户激活菜单项 | `value, option, event` |
| update:open | 打开状态更新请求 | `open: boolean` |
| key-escape | 根菜单处理 Escape | 无 |
| open / opened | 打开开始 / 完成 | 无 |
| close / closed | 关闭开始 / 完成 | 无 |
| click-outside | 顶层外部点击 | `event: Event` |

### Menu Slots

| 插槽名 | 描述 | 参数 |
| --- | --- | --- |
| default | 触发元素 | - |
| content | 追加手写内容，适合与 `MenuOption` 组合 | - |
| footer | 页脚 | - |
| option-label | 统一渲染选项主内容 | `{ option, active, level }` |
| option-icon | 统一渲染选项图标 | `{ option, active, level }` |
| option-extra | 统一渲染选项右侧内容 | `{ option, active, level }` |

### `<MenuOption>`

使用 MenuOption 编排 SplitButton 的附加操作，或在 `content` 中手写菜单项。通过 `label`、`value`、`disabled`、`ripple` 和 `highlight` 配置选项；`label` 渲染函数及 `default`、`icon`、`suffix` 插槽接收 `{ option, active, level }`，点击时触发 `click`。`highlight` 只控制视觉强调，不提交选中值。分组和子菜单通过 `options` 配置。



### Menu Methods

通过 `open()` 打开菜单、`close()` 关闭菜单、`resize()` 更新定位、`setReference(reference?)` 更换触发元素。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-menu-bg` | `var(--c-color-bg-popup)` | `background-color` |
| `--c-menu-border-color` | `var(--c-color-fill-3)` | `background-color`, `border`, `border-top` |
| `--c-menu-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-menu-box-shadow` | `var(--c-shadow2-down)` | `box-shadow` |
| `--c-menu-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-menu-group-title-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-menu-group-title-height` | `var(--c-size-5)` | `line-height` |
| `--c-menu-group-title-margin-top` | `var(--c-spacing-4)` | `margin-top` |
| `--c-menu-group-title-padding-horizontal` | `var(--c-spacing-6)` | `padding` |
| `--c-menu-group-title-text-color` | `var(--c-color-text-3)` | `color` |
| `--c-menu-max-height` | `var(--c-size-50)` | `max-height` |
| `--c-menu-option-bg` | `transparent` | `background-color` |
| `--c-menu-option-bg-disabled` | `transparent` | `background-color` |
| `--c-menu-option-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-menu-option-bg-selected` | `var(--c-color-fill-2)` | `background-color` |
| `--c-menu-option-bg-selected-hover` | `var(--c-menu-option-bg-selected)` | `background-color` |
| `--c-menu-option-font-weight-selected` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-menu-option-height` | `var(--c-size-9)` | `line-height` |
| `--c-menu-option-icon-margin-right` | `var(--c-spacing-4)` | `margin-inline-end` |
| `--c-menu-option-padding-horizontal` | `var(--c-spacing-6)` | `padding` |
| `--c-menu-option-suffix-icon-margin-left` | `var(--c-spacing-6)` | `margin-inline-start` |
| `--c-menu-option-text-color` | `var(--c-color-text-2)` | `color` |
| `--c-menu-option-text-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-menu-option-text-color-hover` | `var(--c-color-text-1)` | `color` |
| `--c-menu-option-text-color-selected` | `var(--c-color-text-1)` | `color` |
| `--c-menu-padding-vertical` | `var(--c-spacing-2)` | `margin`, `margin-top`, `padding` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-menu-border-color: var(--c-color-fill-3);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

### 选项状态颜色

通过 `--c-menu-option-bg-selected` 设置选中背景，`--c-menu-option-bg-selected-hover` 设置选中后的悬停背景。禁用样式优先于选中、悬停和聚焦样式。
