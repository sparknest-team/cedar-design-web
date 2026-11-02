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

可选中标签可用 Space / Enter 切换，checked 受控时仍由父级决定是否接受；未传 checked 的此示例由组件自持状态。loading 阻止选中动作，但不是 disabled API。关闭按钮也支持 Space / Enter，关闭不应冒泡为选中。动态示例点击 Add Tag 后聚焦输入，Enter 新增一项；固定首项不提供关闭按钮。这里只说明已展示的操作，不代表长按/异步与触屏组合已全部验收。

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

### 主值与默认值

使用普通 `v-model`。`modelValue` 表示可选标签是否选中，布尔值；`defaultValue` 仅在创建时初始化非受控值，后续修改不会重置当前状态。显式绑定值优先，初始化不发出 `update:modelValue`。

### `<Tag>` Props

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
| checkable             | 标签是否可选中                       | `boolean`                                                                                                                                              | `false` |
| model-value **(v-model)** | 标签是否选中（标签可选中时可用）     | `boolean`                                                                                                                                              | -       |
| default-value       | 标签默认选中状态（标签可选中时可用） | `boolean`                                                                                                                                              | `true`  |
| nowrap                | 内容是否不换行（超出省略）           | `boolean`                                                                                                                                              | `false` |
| round                 | 是否为圆角胶囊形                     | `boolean`                                                                                                                                              | `false` |

### `<Tag>` Events

| 事件名 | 说明                                   | 参数                                          |
| ------ | -------------------------------------- | --------------------------------------------- |
| close  | 点击关闭按钮时触发                     | `(event: MouseEvent) => void`                 |
| check  | 用户选中时触发（仅在可选中模式下触发） | `(check: boolean, event: MouseEvent) => void` |
| update:show | 可见状态变化                       | `(show: boolean) => void`                     |
| update:model-value | 选中状态变化                     | `(checked: boolean) => void`                  |

### `<Tag>` Slots

| 插槽名     | 说明           | 参数 |
| ---------- | -------------- | ---- |
| default    | 标签内容       | -    |
| icon       | 图标           | -    |
| close-icon | 关闭按钮的图标 | -    |

### 类型定义

组件导出以下类型定义

```ts
import type { TagProps } from '@cedar-design/ui'
```

## 同源实现与平台边界

两端各自保存完整源码，不引用公共核心，不共享组件实例或响应式状态；修改时同步维护两份实现。主体、Props、关键样式及配对测试纳入只读源码一致性检查，主题 token 和安装入口各自维护。

两端保留独立的 show/checked 状态，受控值由调用方更新；保留淡出效果，class/style 显式透传给实际标签。尺寸配置、RTL 上下文及图标资源由各库本地适配，移动端触控尺寸保留在 token 中。

### 完整变量默认值与使用边界

状态文字与 outline 描边使用可读 system content，彩色填充使用对应色板第 1 阶。未选中保持中性，已选中状态色优先于通用 hover；默认中性填充为 fill-2 → fill-3。color 优先于 status；预设色不属于本批对比度保证范围。自定义背景需要调用方验证文字对比度，必要时传 text-color。尺寸保留平台差异。以下列出全部公开声明；15 项无消费的预设图标 hover 背景／尺寸变量已移除。custom-icon-bg-hover 及 InputTag 的旧引用也已移除，不保留兼容别名。

| 变量 | 默认值 |
| --- | --- |
| `--c-tag-status-primary-bg-color` | `rgb(var(--c-primary-1))` |
| `--c-tag-status-primary-text-color` | `var(--c-sys-color-content-brand)` |
| `--c-tag-status-secondary-bg-color` | `rgb(var(--c-gray-2))` |
| `--c-tag-status-secondary-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tag-status-tertiary-bg-color` | `rgb(var(--c-gray-1))` |
| `--c-tag-status-tertiary-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tag-status-info-bg-color` | `rgb(var(--c-blue-1))` |
| `--c-tag-status-info-text-color` | `var(--c-sys-color-content-info)` |
| `--c-tag-status-success-bg-color` | `rgb(var(--c-success-1))` |
| `--c-tag-status-success-text-color` | `var(--c-sys-color-content-success)` |
| `--c-tag-status-warning-bg-color` | `rgb(var(--c-warning-1))` |
| `--c-tag-status-warning-text-color` | `var(--c-sys-color-content-warning)` |
| `--c-tag-status-danger-bg-color` | `rgb(var(--c-danger-1))` |
| `--c-tag-status-danger-text-color` | `var(--c-sys-color-content-danger)` |
| `--c-tag-variant-outline-status-primary-color` | `var(--c-sys-color-content-brand)` |
| `--c-tag-variant-outline-status-secondary-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tag-variant-outline-status-tertiary-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tag-variant-outline-status-info-color` | `var(--c-sys-color-content-info)` |
| `--c-tag-variant-outline-status-success-color` | `var(--c-sys-color-content-success)` |
| `--c-tag-variant-outline-status-warning-color` | `var(--c-sys-color-content-warning)` |
| `--c-tag-variant-outline-status-danger-color` | `var(--c-sys-color-content-danger)` |
| `--c-tag-variant-outline-default-color` | `var(--c-sys-color-content-primary)` |
| `--c-tag-variant-outline-default-border-color` | `var(--c-sys-color-border-default)` |
| `--c-tag-border-width` | `1px` |
| `--c-tag-border-type` | `solid` |
| `--c-tag-padding-horizontal` | `var(--c-spacing-4)` |
| `--c-tag-padding-vertical` | `0` |
| `--c-tag-icon-margin-right` | `var(--c-spacing-2)` |
| `--c-tag-text-font-weight` | `var(--c-font-weight-500)` |
| `--c-tag-border-radius` | `var(--c-sys-radius-sm)` |
| `--c-tag-round-radius` | `100px` |
| `--c-tag-size-xs` | `var(--c-size-4)` |
| `--c-tag-size-sm` | `var(--c-size-5)` |
| `--c-tag-size-md` | `var(--c-size-6)` |
| `--c-tag-size-lg` | `var(--c-size-7)` |
| `--c-tag-size-xl` | `var(--c-size-8)` |
| `--c-tag-size-xs-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-tag-size-sm-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-tag-size-md-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-tag-size-lg-font-size` | `var(--c-sys-font-size-md)` |
| `--c-tag-size-xl-font-size` | `var(--c-sys-font-size-md)` |
| `--c-tag-bg-not-checked-hover` | `var(--c-sys-color-state-hover)` |
| `--c-tag-custom-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-tag-default-bg` | `var(--c-sys-color-state-hover)` |
| `--c-tag-default-bg-hover` | `var(--c-color-fill-3)` |
| `--c-tag-default-icon-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tag-default-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-tag-default-border-color` | `transparent` |
| `--c-tag-default-border-color-hover` | `transparent` |
| `--c-tag-red-bg` | `rgb(var(--c-red-1))` |
| `--c-tag-red-bg-hover` | `rgb(var(--c-red-2))` |
| `--c-tag-red-border-color` | `transparent` |
| `--c-tag-red-border-color-hover` | `transparent` |
| `--c-tag-red-icon-color` | `rgb(var(--c-red-9))` |
| `--c-tag-red-text-color` | `rgb(var(--c-red-9))` |
| `--c-tag-orangered-bg` | `rgb(var(--c-orangered-1))` |
| `--c-tag-orangered-bg-hover` | `rgb(var(--c-orangered-2))` |
| `--c-tag-orangered-border-color` | `transparent` |
| `--c-tag-orangered-border-color-hover` | `transparent` |
| `--c-tag-orangered-icon-color` | `rgb(var(--c-orangered-9))` |
| `--c-tag-orangered-text-color` | `rgb(var(--c-orangered-9))` |
| `--c-tag-orange-bg` | `rgb(var(--c-orange-1))` |
| `--c-tag-orange-bg-hover` | `rgb(var(--c-orange-2))` |
| `--c-tag-orange-border-color` | `transparent` |
| `--c-tag-orange-border-color-hover` | `transparent` |
| `--c-tag-orange-icon-color` | `rgb(var(--c-orange-9))` |
| `--c-tag-orange-text-color` | `rgb(var(--c-orange-9))` |
| `--c-tag-gold-bg` | `rgb(var(--c-gold-1))` |
| `--c-tag-gold-bg-hover` | `rgb(var(--c-gold-2))` |
| `--c-tag-gold-border-color` | `transparent` |
| `--c-tag-gold-border-color-hover` | `transparent` |
| `--c-tag-gold-icon-color` | `rgb(var(--c-gold-9))` |
| `--c-tag-gold-text-color` | `rgb(var(--c-gold-9))` |
| `--c-tag-lime-bg` | `rgb(var(--c-lime-1))` |
| `--c-tag-lime-bg-hover` | `rgb(var(--c-lime-2))` |
| `--c-tag-lime-border-color` | `transparent` |
| `--c-tag-lime-border-color-hover` | `transparent` |
| `--c-tag-lime-icon-color` | `rgb(var(--c-lime-9))` |
| `--c-tag-lime-text-color` | `rgb(var(--c-lime-9))` |
| `--c-tag-green-bg` | `rgb(var(--c-green-1))` |
| `--c-tag-green-bg-hover` | `rgb(var(--c-green-2))` |
| `--c-tag-green-border-color` | `transparent` |
| `--c-tag-green-border-color-hover` | `transparent` |
| `--c-tag-green-icon-color` | `rgb(var(--c-green-9))` |
| `--c-tag-green-text-color` | `rgb(var(--c-green-9))` |
| `--c-tag-cyan-bg` | `rgb(var(--c-cyan-1))` |
| `--c-tag-cyan-bg-hover` | `rgb(var(--c-cyan-2))` |
| `--c-tag-cyan-border-color` | `transparent` |
| `--c-tag-cyan-border-color-hover` | `transparent` |
| `--c-tag-cyan-icon-color` | `rgb(var(--c-cyan-9))` |
| `--c-tag-cyan-text-color` | `rgb(var(--c-cyan-9))` |
| `--c-tag-blue-bg` | `rgb(var(--c-blue-1))` |
| `--c-tag-blue-bg-hover` | `rgb(var(--c-blue-2))` |
| `--c-tag-blue-border-color` | `transparent` |
| `--c-tag-blue-border-color-hover` | `transparent` |
| `--c-tag-blue-icon-color` | `rgb(var(--c-blue-9))` |
| `--c-tag-blue-text-color` | `rgb(var(--c-blue-9))` |
| `--c-tag-brand-bg` | `rgb(var(--c-brand-1))` |
| `--c-tag-brand-bg-hover` | `rgb(var(--c-brand-2))` |
| `--c-tag-brand-border-color` | `transparent` |
| `--c-tag-brand-border-color-hover` | `transparent` |
| `--c-tag-brand-icon-color` | `rgb(var(--c-brand-9))` |
| `--c-tag-brand-text-color` | `rgb(var(--c-brand-9))` |
| `--c-tag-purple-bg` | `rgb(var(--c-purple-1))` |
| `--c-tag-purple-bg-hover` | `rgb(var(--c-purple-2))` |
| `--c-tag-purple-border-color` | `transparent` |
| `--c-tag-purple-border-color-hover` | `transparent` |
| `--c-tag-purple-icon-color` | `rgb(var(--c-purple-9))` |
| `--c-tag-purple-text-color` | `rgb(var(--c-purple-9))` |
| `--c-tag-pinkpurple-bg` | `rgb(var(--c-pinkpurple-1))` |
| `--c-tag-pinkpurple-bg-hover` | `rgb(var(--c-pinkpurple-2))` |
| `--c-tag-pinkpurple-border-color` | `transparent` |
| `--c-tag-pinkpurple-border-color-hover` | `transparent` |
| `--c-tag-pinkpurple-icon-color` | `rgb(var(--c-pinkpurple-9))` |
| `--c-tag-pinkpurple-text-color` | `rgb(var(--c-pinkpurple-9))` |
| `--c-tag-magenta-bg` | `rgb(var(--c-magenta-1))` |
| `--c-tag-magenta-bg-hover` | `rgb(var(--c-magenta-2))` |
| `--c-tag-magenta-border-color` | `transparent` |
| `--c-tag-magenta-border-color-hover` | `transparent` |
| `--c-tag-magenta-icon-color` | `rgb(var(--c-magenta-9))` |
| `--c-tag-magenta-text-color` | `rgb(var(--c-magenta-9))` |
| `--c-tag-gray-bg` | `rgb(var(--c-gray-2))` |
| `--c-tag-gray-bg-hover` | `rgb(var(--c-gray-3))` |
| `--c-tag-gray-border-color` | `transparent` |
| `--c-tag-gray-border-color-hover` | `transparent` |
| `--c-tag-gray-icon-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tag-gray-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tag-close-margin-left` | `var(--c-spacing-2)` |
| `--c-tag-close-font-size` | `var(--c-sys-font-size-xs)` |

### 颜色覆盖边界

预设色 outline 保持透明；loading 不触发预设填充 hover。暗色背景消费 bg/bg-hover 变量，实例覆盖同样生效。预设 icon-color 与 text-color 分开。未选中预设保持中性，但自定义 color 属性仍生效。预设／自定义色不保证任意背景上的对比度。

### 动效变量

内置动效遵循 `prefers-reduced-motion: reduce`；减少动效不会阻止加载状态或关闭事件更新。

| Token | Default |
| --- | --- |
| `--c-tag-fade-duration` | `var(--c-sys-motion-duration-fast)` |
