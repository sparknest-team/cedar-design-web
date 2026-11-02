---
permalink: /components/badge/
---

# Badge

与 Maple 使用相同场景、参数和交互顺序；示例源码仅替换组件前缀，主题与站点外壳各自保留。

## 基础示例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 状态和颜色

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `content` | 徽标显示的内容 | 状态和颜色、外观配置对比 |
| `status` | 徽标的状态 | 状态和颜色 |
| `mode` | 徽标的类型 | 状态和颜色 |
| `description` | 徽标的描述文本 | 状态和颜色 |
| `color` | 徽标的背景色，也可以设置自定义色值 | 状态和颜色 |
| `text-color` | 徽标显示的内容颜色 | 状态和颜色 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/color.vue"></demo>

### 外观配置对比

选择一个对比维度后，同屏展示它的全部可选值；其余配置和内容保持一致。可切换其他配置检查组合效果；输入类预览共享一个值。

<details>
<summary>配置说明与使用限制</summary>

#### 外观组合

适用于通知数量和标记。调整变体、状态、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

</details>

<demo src="./__demos__/appearance-lab.vue"></demo>

## 布局与排列

### 位置与偏移

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `position` | 浮动徽标在宿主盒子中的物理角落或左右中点，默认 top-right；只在 floating 模式生效，RTL 不反转 | 位置与偏移 |
| `content` | 徽标显示的内容 | 位置与偏移 |
| `dot` | 显示为小红点 | 位置与偏移 |
| `offset-x` | 设置徽标位置的偏移X，mode为inline时无效。 | 位置与偏移 |
| `offset-y` | 设置徽标位置的偏移Y。 | 位置与偏移 |
| `mode` | 徽标的类型 | 位置与偏移 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/position.vue"></demo>

## 内容与展示

### 内联与独立展示

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `content` | 徽标显示的内容 | 内联与独立展示、小圆点、最大值与零值 |
| `dot` | 显示为小红点 | 内联与独立展示、小圆点、显示与隐藏 |
| `description` | 徽标的描述文本 | 内联与独立展示、显示与隐藏 |
| `show-zero` | 徽标为0时是否显示 | 最大值与零值、显示与隐藏 |
| `mode` | 徽标的类型 | 内联与独立展示 |
| `inline-position` | 内联徽标位于宿主内容的逻辑 start 或 end，默认 end；仅 inline 模式生效 | 内联与独立展示 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/inline.vue"></demo>

### 小圆点

<demo src="./__demos__/dot.vue"></demo>

### 最大值与零值

<demo src="./__demos__/max.vue"></demo>

### 显示与隐藏

<demo src="./__demos__/show.vue"></demo>

## 自定义与插槽

### 自定义内容

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `content` | 徽标显示的内容 | 自定义内容 |
| `mode` | 徽标的类型 | 自定义内容 |
| `inline-position` | 内联徽标位于宿主内容的逻辑 start 或 end，默认 end；仅 inline 模式生效 | 自定义内容 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/content.vue"></demo>

## API

<!-- same-source-api:start -->
### Props

| 参数名          | 描述                                                                               | 类型                                                           |   默认值    |
| --------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------- | :---------: |
| description     | 徽标的描述文本                                                                     | `string`                                                       |     `-`     |
| content         | 徽标显示的内容                                                                     | `number \| string`                                             |     `-`     |
| max             | 徽标最大显示数值，如果content超过这个数值会显示为`${max}+`，content 为数字时有效。 | `number`                                                       |    `99`     |
| dot             | 显示为小红点                                                                       | `boolean`                                                      |   `false`   |
| offset-x        | 设置徽标位置的偏移X，mode为inline时无效。                                          | `number`                                                       |     `0`     |
| offset-y        | 设置徽标位置的偏移Y。                                                              | `number`                                                       |     `0`     |
| color           | 徽标的背景色，也可以设置自定义色值                                                 | `string`                                                       |     `-`     |
| text-color      | 徽标显示的内容颜色                                                                 | `string`                                                       |     `-`     |
| mode            | 徽标的类型                                                                         | `'floating' \| 'inline'`                                       | `floating`  |
| position        | 浮动徽标在宿主盒子中的物理角落或左右中点，默认 top-right；只在 floating 模式生效，RTL 不反转 | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left' \| 'left' \| 'right'` | `top-right` |
| inline-position | 内联徽标位于宿主内容的逻辑 start 或 end，默认 end；仅 inline 模式生效 | `'start' \| 'end'`                                             |    `end`    |
| size            | 徽标的尺寸                                                                         | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                         |    `md`     |
| status          | 徽标的状态                                                                         | `SemanticStatus`                                               |  `danger`   |
| show            | 是否显示徽标                                                                       | `boolean`                                                      |   `true`    |
| show-zero       | 徽标为0时是否显示                                                                  | `boolean`                                                      |   `false`   |
| variant         | 徽标的变体                                                                         | `'outline' \| 'default'`                                       |  `default`  |

### Events

无组件自定义事件。

### Slots

| 插槽名  | 说明             | 参数 |
| ------- | ---------------- | ---- |
| default | 徽标的描述文本   | -    |
| content | 徽标中显示的内容 | -    |

### Methods

无公开方法。

### 跨端说明

属性和插槽契约一致。没有 default 插槽且 description 为空时自动独立内联展示；未提供 content 时显示圆点。两端分别通过各自配置读取文字方向，主题颜色和 CSS 前缀由各端提供。
<!-- same-source-api:end -->

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量 | 默认值 |
| --- | --- |
| `--c-badge-font-weight` | `var(--c-sys-font-weight-medium)` |
| `--c-badge-description-size-xs-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-badge-description-size-sm-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-badge-description-size-md-font-size` | `var(--c-sys-font-size-md)` |
| `--c-badge-description-size-lg-font-size` | `var(--c-sys-font-size-lg)` |
| `--c-badge-description-size-xl-font-size` | `var(--c-sys-font-size-xl)` |
| `--c-badge-description-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-badge-size-xs-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-badge-size-sm-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-badge-size-md-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-badge-size-lg-font-size` | `var(--c-sys-font-size-md)` |
| `--c-badge-size-xl-font-size` | `var(--c-sys-font-size-lg)` |
| `--c-badge-size-xs-scale` | `0.6667` |
| `--c-badge-size-sm-scale` | `0.8333` |
| `--c-badge-size-md-scale` | `1` |
| `--c-badge-size-lg-scale` | `1` |
| `--c-badge-size-xl-scale` | `1` |
| `--c-badge-size-xs-dot-width` | `4px` |
| `--c-badge-size-sm-dot-width` | `5px` |
| `--c-badge-size-md-dot-width` | `6px` |
| `--c-badge-size-lg-dot-width` | `7px` |
| `--c-badge-size-xl-dot-width` | `8px` |
| `--c-badge-size-xs-dot-height` | `4px` |
| `--c-badge-size-sm-dot-height` | `5px` |
| `--c-badge-size-md-dot-height` | `6px` |
| `--c-badge-size-lg-dot-height` | `7px` |
| `--c-badge-size-xl-dot-height` | `8px` |
| `--c-badge-size-xs-space` | `0px` |
| `--c-badge-size-sm-space` | `var(--c-sys-space-1)` |
| `--c-badge-size-md-space` | `var(--c-sys-space-3)` |
| `--c-badge-size-lg-space` | `var(--c-sys-space-3)` |
| `--c-badge-size-xl-space` | `var(--c-sys-space-4)` |
| `--c-badge-size-xs-padding` | `0 var(--c-sys-space-3)` |
| `--c-badge-size-sm-padding` | `0 var(--c-sys-space-3)` |
| `--c-badge-size-md-padding` | `0 var(--c-sys-space-4)` |
| `--c-badge-size-lg-padding` | `0 var(--c-sys-space-4)` |
| `--c-badge-size-xl-padding` | `0 10px` |
| `--c-badge-size-xs-height` | `20px` |
| `--c-badge-size-sm-height` | `20px` |
| `--c-badge-size-md-height` | `24px` |
| `--c-badge-size-lg-height` | `28px` |
| `--c-badge-size-xl-height` | `32px` |
| `--c-badge-size-xs-border-radius` | `20px` |
| `--c-badge-size-sm-border-radius` | `20px` |
| `--c-badge-size-md-border-radius` | `24px` |
| `--c-badge-size-lg-border-radius` | `28px` |
| `--c-badge-size-xl-border-radius` | `32px` |
| `--c-badge-bg-color` | `rgb(var(--c-danger-7))` |
| `--c-badge-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-status-default-bg-color` | `#e0e0e0` |
| `--c-badge-status-default-text-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-badge-status-info-bg-color` | `var(--c-sys-color-status-info)` |
| `--c-badge-status-info-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-status-success-bg-color` | `var(--c-sys-color-status-success)` |
| `--c-badge-status-success-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-status-warning-bg-color` | `var(--c-sys-color-status-warning)` |
| `--c-badge-status-warning-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-status-danger-bg-color` | `rgb(var(--c-danger-7))` |
| `--c-badge-status-danger-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-status-primary-bg-color` | `var(--c-sys-color-action-primary)` |
| `--c-badge-status-primary-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-status-secondary-bg-color` | `rgb(var(--c-gray-6))` |
| `--c-badge-status-secondary-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-status-tertiary-bg-color` | `rgb(var(--c-gray-7))` |
| `--c-badge-status-tertiary-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-variant-outline-bg-color` | `transparent` |
| `--c-badge-variant-outline-text-color` | `var(--c-sys-color-content-danger)` |
| `--c-badge-variant-outline-status-info-text-color` | `var(--c-sys-color-content-info)` |
| `--c-badge-variant-outline-status-success-text-color` | `var(--c-sys-color-content-success)` |
| `--c-badge-variant-outline-status-warning-text-color` | `var(--c-sys-color-content-warning)` |
| `--c-badge-variant-outline-status-danger-text-color` | `var(--c-sys-color-content-danger)` |
| `--c-badge-variant-outline-status-primary-text-color` | `var(--c-sys-color-content-brand)` |
| `--c-badge-variant-outline-status-default-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-badge-variant-outline-status-secondary-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-badge-variant-outline-status-tertiary-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-badge-border-color` | `var(--c-sys-color-surface-default)` |
| `--c-badge-offset` | `2px` |
| `--c-badge-ring-width` | `2px` |

填充徽标的文字配色以 Button 为准：primary、info、success、warning、danger、secondary 使用 `content-on-dark`；tertiary 在亮色使用 `content-on-dark`，暗色使用 `content-on-bright`。默认通知徽标使用红底白字，中性背景 `#e0e0e0` 为固定浅灰色。

彩色轮廓文字和描边与 Button 一致，使用对应的 `content-brand` / `content-info` / `content-success` / `content-warning` / `content-danger` 语义色；secondary 与 tertiary 轮廓均使用 `content-secondary` 保持可读性。`variant-outline-bg-color` 对所有状态均生效，默认透明。`color` 属性覆盖轮廓文字和描边，`text-color` 进一步覆盖文字；二者均保留背景变量的控制权。自定义前景或背景后须重新验证对比度。

### 类型定义

组件导出以下类型定义

```ts
import type { BadgeInstance } from '@cedar-design/ui'
```

### 颜色覆盖边界

bg-color 兜底和 danger 填充均使用红色背景与白色文字：浅色主题为 danger 第 7 阶，暗色主题为第 4 阶。中性固定浅灰与 secondary/tertiary 灰阶是有意的组件配色；border-color 隔离环可按宿主表面覆盖。自定义 color/text-color 由调用方保证对比度。
