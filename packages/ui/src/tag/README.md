---
permalink: /components/tag/
---

# Tag

用于信息的选择、筛选、分类。用户通过标签进行信息反馈和交互操作。

## 基础示例

### 基础用法

标签的基本用法、常用颜色。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 标签的颜色

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `color` | 自定义背景色（outline 时为边框色） | 标签的颜色 |
| `closable` | 标签是否可关闭 | 标签的颜色 |
<!-- demo-config-notes:end -->

我们提供多种预设色彩的标签样式，通过 `color` 设置不同颜色。如果预设值不能满足你的需求，`color` 字段也可以设置自定义色值。

<demo src="./__demos__/color.vue"></demo>

### 外观配置对比

选择一个对比维度后，同屏展示它的全部可选值；其余配置和内容保持一致。可切换其他配置检查组合效果；输入类预览共享一个值。

<details>
<summary>配置说明与使用限制</summary>

#### 标签的尺寸

标签的大小分为：`sm`、`md`、`lg` 三种，可以在不同场景下选择合适按钮尺寸。推荐及默认尺寸为 `md`。

#### 状态与变体

通过 `status` 与 `variant` 切换不同语义颜色和呈现风格（与 Button 对齐）。`color` 与 `status` 同时设置时 `color` 优先。

#### 外观组合

适用于短标签与分类标记。调整变体、状态、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

</details>

<demo src="./__demos__/appearance-lab.vue"></demo>

## 内容与展示

### 可选中

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `color` | 自定义背景色（outline 时为边框色） | 可选中、带图标的标签 |
| `checkable` | 标签是否可选中 | 可选中 |
| `status` | 标签状态色（与 `color` 互斥，`color` 优先） | 可选中 |
| `default-value` | 标签默认选中状态（标签可选中时可用） | 可选中 |
| `variant` | 标签变体（与 Button 对齐） | 可选中 |
| `loading` | 标签是否为加载中状态 | 可选中 |
<!-- demo-config-notes:end -->

可选中标签支持 Space / Enter；受控 checked 由父级决定是否接受，未传时由组件保存状态。loading 阻止选中动作。关闭按钮也支持 Space / Enter，关闭不会同时触发选中。动态示例通过 Add Tag 聚焦输入，按 Enter 新增；固定首项不提供关闭按钮。

通过设置 `checkable` ，可以实现点击选中的效果。

<demo src="./__demos__/checkable.vue"></demo>

### 带图标的标签

可通过 `icon` 插槽在标签中加入图标。

<demo src="./__demos__/icon.vue"></demo>

## 交互与控制

### 可关闭标签

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `closable` | 标签是否可关闭 | 可关闭标签、动态编辑标签 |
| `loading` | 标签是否为加载中状态 | 加载中状态 |
<!-- demo-config-notes:end -->

通过 `closable` 属性控制标签是否可关闭。可关闭标签可通过 `close` 事件执行一些关闭后操作，也可通过 `show` 属性控制标签的显示或隐藏。

<demo src="./__demos__/closable.vue"></demo>

### 动态编辑标签

可动态添加和删除标签。

<demo src="./__demos__/dynamic-tag.vue"></demo>

### 加载中状态

标签的加载中状态。

<demo src="./__demos__/loading.vue"></demo>

## API


加载中保留选中状态，可选中标签声明禁用与忙碌状态；关闭按钮持焦时进入加载会将焦点移到标签。正文中的独立交互控件不会触发标签选中。

关闭按钮名称默认使用当前语言的关闭文案，可通过 `close-button-aria-label` 覆盖。标签根始终保持单行；`nowrap` 主要启用内容截断内层，并不控制多行换行。

### 主值与默认值

使用普通 `v-model`。`modelValue` 表示可选标签是否选中，布尔值；`defaultValue` 仅在创建时初始化非受控值，后续修改不会重置当前状态。显式绑定值优先，初始化不发出 `update:modelValue`。

### Tag Props

| 属性                  | 说明                                 | 类型                                                                                                                                                   | 默认值  |
| --------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| color                 | 自定义背景色（outline 时为边框色）   | `string`                                                                                                                                               | -       |
| text-color            | 自定义文字色                         | `string`                                                                                                                                               | -       |
| status                | 标签状态色（与 `color` 互斥，`color` 优先） | `'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| variant               | 标签变体（与 Button 对齐）           | `'default' \| 'outline'`                                                                                                                               | `'default'` |
| size                  | 标签的大小                           | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                                                                                 | `'md'`  |
| show **(v-model)**    | 标签是否可见                         | `boolean`                                                                                                                                              | -       |
| default-show          | 标签默认是否可见                     | `boolean`                                                                                                                                              | `true`  |
| loading               | 标签是否为加载中状态                 | `boolean`                                                                                                                                              | `false` |
| closable              | 标签是否可关闭                       | `boolean`                                                                                                                                              | `false` |
| `close-button-aria-label` | 关闭按钮的可访问名称，默认使用当前语言 | `string` | `—` |
| checkable             | 标签是否可选中                       | `boolean`                                                                                                                                              | `false` |
| model-value **(v-model)** | 标签是否选中（标签可选中时可用）     | `boolean`                                                                                                                                              | -       |
| default-value       | 标签默认选中状态（标签可选中时可用） | `boolean`                                                                                                                                              | `true`  |
| nowrap                | 是否启用内容截断内层；根始终单行           | `boolean`                                                                                                                                              | `false` |
| round                 | 是否为圆角胶囊形                     | `boolean`                                                                                                                                              | `false` |

### Tag Events

| 事件名 | 说明                                   | 参数                                          |
| ------ | -------------------------------------- | --------------------------------------------- |
| close  | 点击关闭按钮时触发                     | `(event: MouseEvent) => void`                 |
| check  | 用户选中时触发（仅在可选中模式下触发） | `(check: boolean, event: MouseEvent) => void` |
| update:show | 可见状态变化                       | `(show: boolean) => void`                     |
| update:model-value | 选中状态变化                     | `(checked: boolean) => void`                  |

### Tag Slots

| 插槽名     | 说明           | 参数 |
| ---------- | -------------- | ---- |
| default    | 标签内容       | -    |
| icon       | 图标           | -    |
| close-icon | 关闭按钮的图标 | -    |

## Types

组件导出以下类型定义

```ts
import type { TagProps, TagSlots, TagEmits } from '@cedar-design/ui-vue'
```

## 使用说明



show / checked 为受控值时由调用方更新。隐藏时保留淡出效果，class / style 作用于实际标签；移动端触控尺寸可通过 CSS 变量定制。

### 颜色覆盖边界

预设色 outline 保持透明；loading 不触发预设填充 hover。暗色背景消费 bg/bg-hover 变量，实例覆盖同样生效。预设 icon-color 与 text-color 分开。未选中预设保持中性，但自定义 color 属性仍生效。预设／自定义色不保证任意背景上的对比度。

## CSS Variables

状态文字与 outline 描边使用对应的主题语义色，彩色填充使用浅色背景。未选中时保持中性，已选中状态色优先于 hover；默认中性背景在 fill-2 与 fill-3 之间切换。color 优先于 status。自定义背景时需保证文字对比度，必要时设置 text-color。

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-tag-bg-not-checked-hover` | `var(--c-sys-color-state-hover)` | `background-color` |
| `--c-tag-blue-bg` | `rgb(var(--c-blue-1))`<br>`rgba(var(--c-blue-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-blue-bg-hover` | `rgb(var(--c-blue-2))`<br>`rgba(var(--c-blue-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-blue-border-color` | `transparent` | `border` |
| `--c-tag-blue-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-blue-icon-color` | `rgb(var(--c-blue-9))` | `color` |
| `--c-tag-blue-text-color` | `rgb(var(--c-blue-9))` | `border-color`, `color` |
| `--c-tag-border-radius` | `var(--c-sys-radius-sm)` | `border-radius` |
| `--c-tag-border-type` | `solid` | `border` |
| `--c-tag-border-width` | `1px` | `border`, `line-height` |
| `--c-tag-brand-bg` | `rgb(var(--c-brand-1))`<br>`rgba(var(--c-brand-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-brand-bg-hover` | `rgb(var(--c-brand-2))`<br>`rgba(var(--c-brand-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-brand-border-color` | `transparent` | `border` |
| `--c-tag-brand-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-brand-icon-color` | `rgb(var(--c-brand-9))` | `color` |
| `--c-tag-brand-text-color` | `rgb(var(--c-brand-9))` | `border-color`, `color` |
| `--c-tag-close-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-tag-close-margin-left` | `var(--c-spacing-2)` | `margin-left`, `margin-right` |
| `--c-tag-custom-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-tag-cyan-bg` | `rgb(var(--c-cyan-1))`<br>`rgba(var(--c-cyan-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-cyan-bg-hover` | `rgb(var(--c-cyan-2))`<br>`rgba(var(--c-cyan-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-cyan-border-color` | `transparent` | `border` |
| `--c-tag-cyan-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-cyan-icon-color` | `rgb(var(--c-cyan-9))` | `color` |
| `--c-tag-cyan-text-color` | `rgb(var(--c-cyan-9))` | `border-color`, `color` |
| `--c-tag-default-bg` | `var(--c-sys-color-state-hover)` | `background-color` |
| `--c-tag-default-bg-hover` | `var(--c-color-fill-3)` | `background-color` |
| `--c-tag-default-border-color` | `transparent` | `border-color` |
| `--c-tag-default-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-default-icon-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-tag-default-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-tag-fade-duration` | `var(--c-sys-motion-duration-fast)` | `transition` |
| `--c-tag-gold-bg` | `rgb(var(--c-gold-1))`<br>`rgba(var(--c-gold-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-gold-bg-hover` | `rgb(var(--c-gold-2))`<br>`rgba(var(--c-gold-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-gold-border-color` | `transparent` | `border` |
| `--c-tag-gold-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-gold-icon-color` | `rgb(var(--c-gold-9))` | `color` |
| `--c-tag-gold-text-color` | `rgb(var(--c-gold-9))` | `border-color`, `color` |
| `--c-tag-gray-bg` | `rgb(var(--c-gray-2))`<br>`rgba(var(--c-gray-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-gray-bg-hover` | `rgb(var(--c-gray-3))`<br>`rgba(var(--c-gray-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-gray-border-color` | `transparent` | `border` |
| `--c-tag-gray-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-gray-icon-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-tag-gray-text-color` | `var(--c-sys-color-content-secondary)` | `border-color`, `color` |
| `--c-tag-green-bg` | `rgb(var(--c-green-1))`<br>`rgba(var(--c-green-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-green-bg-hover` | `rgb(var(--c-green-2))`<br>`rgba(var(--c-green-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-green-border-color` | `transparent` | `border` |
| `--c-tag-green-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-green-icon-color` | `rgb(var(--c-green-9))` | `color` |
| `--c-tag-green-text-color` | `rgb(var(--c-green-9))` | `border-color`, `color` |
| `--c-tag-icon-margin-right` | `var(--c-spacing-2)` | `margin-left`, `margin-right` |
| `--c-tag-lime-bg` | `rgb(var(--c-lime-1))`<br>`rgba(var(--c-lime-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-lime-bg-hover` | `rgb(var(--c-lime-2))`<br>`rgba(var(--c-lime-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-lime-border-color` | `transparent` | `border` |
| `--c-tag-lime-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-lime-icon-color` | `rgb(var(--c-lime-9))` | `color` |
| `--c-tag-lime-text-color` | `rgb(var(--c-lime-9))` | `border-color`, `color` |
| `--c-tag-magenta-bg` | `rgb(var(--c-magenta-1))`<br>`rgba(var(--c-magenta-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-magenta-bg-hover` | `rgb(var(--c-magenta-2))`<br>`rgba(var(--c-magenta-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-magenta-border-color` | `transparent` | `border` |
| `--c-tag-magenta-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-magenta-icon-color` | `rgb(var(--c-magenta-9))` | `color` |
| `--c-tag-magenta-text-color` | `rgb(var(--c-magenta-9))` | `border-color`, `color` |
| `--c-tag-orange-bg` | `rgb(var(--c-orange-1))`<br>`rgba(var(--c-orange-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-orange-bg-hover` | `rgb(var(--c-orange-2))`<br>`rgba(var(--c-orange-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-orange-border-color` | `transparent` | `border` |
| `--c-tag-orange-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-orange-icon-color` | `rgb(var(--c-orange-9))` | `color` |
| `--c-tag-orange-text-color` | `rgb(var(--c-orange-9))` | `border-color`, `color` |
| `--c-tag-orangered-bg` | `rgb(var(--c-orangered-1))`<br>`rgba(var(--c-orangered-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-orangered-bg-hover` | `rgb(var(--c-orangered-2))`<br>`rgba(var(--c-orangered-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-orangered-border-color` | `transparent` | `border` |
| `--c-tag-orangered-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-orangered-icon-color` | `rgb(var(--c-orangered-9))` | `color` |
| `--c-tag-orangered-text-color` | `rgb(var(--c-orangered-9))` | `border-color`, `color` |
| `--c-tag-padding-horizontal` | `var(--c-spacing-4)` | `padding` |
| `--c-tag-padding-vertical` | `0` | `line-height`, `padding` |
| `--c-tag-pinkpurple-bg` | `rgb(var(--c-pinkpurple-1))`<br>`rgba(var(--c-pinkpurple-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-pinkpurple-bg-hover` | `rgb(var(--c-pinkpurple-2))`<br>`rgba(var(--c-pinkpurple-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-pinkpurple-border-color` | `transparent` | `border` |
| `--c-tag-pinkpurple-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-pinkpurple-icon-color` | `rgb(var(--c-pinkpurple-9))` | `color` |
| `--c-tag-pinkpurple-text-color` | `rgb(var(--c-pinkpurple-9))` | `border-color`, `color` |
| `--c-tag-purple-bg` | `rgb(var(--c-purple-1))`<br>`rgba(var(--c-purple-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-purple-bg-hover` | `rgb(var(--c-purple-2))`<br>`rgba(var(--c-purple-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-purple-border-color` | `transparent` | `border` |
| `--c-tag-purple-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-purple-icon-color` | `rgb(var(--c-purple-9))` | `color` |
| `--c-tag-purple-text-color` | `rgb(var(--c-purple-9))` | `border-color`, `color` |
| `--c-tag-red-bg` | `rgb(var(--c-red-1))`<br>`rgba(var(--c-red-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-red-bg-hover` | `rgb(var(--c-red-2))`<br>`rgba(var(--c-red-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-red-border-color` | `transparent` | `border` |
| `--c-tag-red-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-red-icon-color` | `rgb(var(--c-red-9))` | `color` |
| `--c-tag-red-text-color` | `rgb(var(--c-red-9))` | `border-color`, `color` |
| `--c-tag-round-radius` | `100px` | `border-radius` |
| `--c-tag-size-lg` | `var(--c-size-7)` | `height`, `line-height` |
| `--c-tag-size-lg-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-tag-size-md` | `var(--c-size-6)` | `height`, `line-height` |
| `--c-tag-size-md-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-tag-size-sm` | `var(--c-size-5)` | `height`, `line-height` |
| `--c-tag-size-sm-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-tag-size-xl` | `var(--c-size-8)` | `height`, `line-height` |
| `--c-tag-size-xl-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-tag-size-xs` | `var(--c-size-4)` | `height`, `line-height` |
| `--c-tag-size-xs-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-tag-status-danger-bg-color` | `rgb(var(--c-danger-1))` | `background-color` |
| `--c-tag-status-danger-text-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-tag-status-info-bg-color` | `rgb(var(--c-blue-1))` | `background-color` |
| `--c-tag-status-info-text-color` | `var(--c-sys-color-content-info)` | `color` |
| `--c-tag-status-primary-bg-color` | `rgb(var(--c-primary-1))` | `background-color` |
| `--c-tag-status-primary-text-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-tag-status-secondary-bg-color` | `rgb(var(--c-gray-2))` | `background-color` |
| `--c-tag-status-secondary-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-tag-status-success-bg-color` | `rgb(var(--c-success-1))` | `background-color` |
| `--c-tag-status-success-text-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-tag-status-tertiary-bg-color` | `rgb(var(--c-gray-1))` | `background-color` |
| `--c-tag-status-tertiary-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-tag-status-warning-bg-color` | `rgb(var(--c-warning-1))` | `background-color` |
| `--c-tag-status-warning-text-color` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-tag-text-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-tag-variant-outline-default-border-color` | `var(--c-sys-color-border-default)` | `border` |
| `--c-tag-variant-outline-default-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-tag-variant-outline-status-danger-color` | `var(--c-sys-color-content-danger)` | `border`, `color` |
| `--c-tag-variant-outline-status-info-color` | `var(--c-sys-color-content-info)` | `border`, `color` |
| `--c-tag-variant-outline-status-primary-color` | `var(--c-sys-color-content-brand)` | `border`, `color` |
| `--c-tag-variant-outline-status-secondary-color` | `var(--c-sys-color-content-secondary)` | `border`, `color` |
| `--c-tag-variant-outline-status-success-color` | `var(--c-sys-color-content-success)` | `border`, `color` |
| `--c-tag-variant-outline-status-tertiary-color` | `var(--c-sys-color-content-secondary)` | `border`, `color` |
| `--c-tag-variant-outline-status-warning-color` | `var(--c-sys-color-content-warning)` | `border`, `color` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-tag-blue-border-color: transparent;
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

### 动效

内置动效遵循 `prefers-reduced-motion: reduce`；减少动效不会阻止加载状态或关闭事件更新。
