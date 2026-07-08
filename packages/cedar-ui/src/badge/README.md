---
permalink: /components/badge/
---

# Badge

一般出现在图标或文字的右上角。提供及时、重要的信息提示。

## 案例

### 基础用法

基本用法。只需指定 `content`或者 `content slot`，即可显示徽标。

<demo src="./__demos__/basic.vue"></demo>

### 内联类型

`default slot`和 `description` 同时为空时，会变为内联类型，也可以通过 `type` 属性指定为内联类型。
同时可以通过 `description` 属性指定描述文本。

<demo src="./__demos__/inline.vue"></demo>

### 小红点

设置 `dot`，即可只显示小红点而不显示数字。`count > 0` 时才显示。

<demo src="./__demos__/dot.vue"></demo>

### 自定义内容

设置 `content`，可设置徽标显示的内容。

<demo src="./__demos__/content.vue"></demo>

### 最大值

设置 `max`，可以限制最大显示的徽标数值，超过将会加 `+` 后缀。`max` 默认为 `99`。

<demo src="./__demos__/max.vue"></demo>

### 状态和颜色

我们提供`status`和`color`字段来设置徽标的状态和颜色。

<demo src="./__demos__/color.vue"></demo>

### 尺寸

我们提供四种尺寸（`xs`,`sm`, `md`, `lg`,`xl`）。

<demo src="./__demos__/size.vue"></demo>

### 位置

我们提供六种位置（`top-right`, `top-left`, `bottom-right`, `bottom-left`, `start`, `end`）。

<demo src="./__demos__/position.vue"></demo>

### 显示与隐藏

我们提供 `show` 和 `showZero` 属性来控制徽标的显示与隐藏。
通过 `show` 属性可以控制徽标是否显示，通过 `showZero` 属性可以控制徽标为0时是否显示。
<demo src="./__demos__/show.vue"></demo>

### 变体

我们提供两种变体（`outline`、`default`）。
<demo src="./__demos__/variant.vue"></demo>

## API

### `<Badge>` Props

| 参数名          | 描述                                                                               | 类型                                                           |   默认值    |
| --------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------- | :---------: |
| description     | 徽标的描述文本                                                                     | `string`                                                       |     `-`     |
| content         | 徽标显示的内容                                                                     | `number \| string`                                             |     `-`     |
| max             | 徽标最大显示数值，如果content超过这个数值会显示为`${max}+`，content 为数字时有效。 | `number`                                                       |    `99`     |
| dot             | 显示为小红点                                                                       | `boolean`                                                      |   `false`   |
| offset-x        | 设置徽标位置的偏移X，type为inline时无效。                                          | `number`                                                       |     `0`     |
| offset-y        | 设置徽标位置的偏移Y。                                                              | `number`                                                       |     `0`     |
| color           | 徽标的背景色，也可以设置自定义色值                                                 | `string`                                                       |     `-`     |
| text-color      | 徽标显示的内容颜色                                                                 | `string`                                                       |     `-`     |
| type            | 徽标的类型                                                                         | `'floating' \| 'inline'`                                       | `floating`  |
| position        | 徽标的位置，type 为 floating 时有效                                                | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `top-right` |
| inline-position | 徽标的位置，type 为 inline 时有效                                                  | `'start' \| 'end'`                                             |    `end`    |
| size            | 徽标的尺寸                                                                         | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                         |    `md`     |
| status          | 徽标的状态                                                                         | `'default' \| 'success' \| 'warning' \| 'danger'`              |  `danger`   |
| show            | 是否显示徽标                                                                       | `boolean`                                                      |   `true`    |
| show-zero       | 徽标为0时是否显示                                                                  | `boolean`                                                      |   `false`   |
| variant         | 徽标的变体                                                                         | `'outline' \| 'default'`                                       |  `default`  |

### `<Badge>` Slots

| 插槽名  | 说明             | 参数 |
| ------- | ---------------- | ---- |
| default | 徽标的描述文本   | -    |
| content | 徽标中显示的内容 | -    |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                                              | 默认值                    |
| --------------------------------------------------- | ------------------------- |
| --c-badge-font-weight                               | 500                       |
| --c-badge-description-size-xs-font-size             | 12px                      |
| --c-badge-description-size-sm-font-size             | 12px                      |
| --c-badge-description-size-md-font-size             | 14px                      |
| --c-badge-description-size-lg-font-size             | 16px                      |
| --c-badge-description-size-xl-font-size             | 18px                      |
| --c-badge-description-text-color                    | var(--c-color-text)       |
| --c-badge-size-xs-font-size                         | 12px                      |
| --c-badge-size-sm-font-size                         | 12px                      |
| --c-badge-size-md-font-size                         | 14px                      |
| --c-badge-size-lg-font-size                         | 16px                      |
| --c-badge-size-xl-font-size                         | 18px                      |
| --c-badge-size-xs-scale                             | 0.6667                    |
| --c-badge-size-sm-scale                             | 0.8333                    |
| --c-badge-size-md-scale                             | 1                         |
| --c-badge-size-lg-scale                             | 1                         |
| --c-badge-size-xl-scale                             | 1                         |
| --c-badge-size-xs-dot-width                         | 4px                       |
| --c-badge-size-sm-dot-width                         | 5px                       |
| --c-badge-size-md-dot-width                         | 6px                       |
| --c-badge-size-lg-dot-width                         | 7px                       |
| --c-badge-size-xl-dot-width                         | 8px                       |
| --c-badge-size-xs-dot-height                        | 4px                       |
| --c-badge-size-sm-dot-height                        | 5px                       |
| --c-badge-size-md-dot-height                        | 6px                       |
| --c-badge-size-lg-dot-height                        | 7px                       |
| --c-badge-size-xl-dot-height                        | 8px                       |
| --c-badge-size-xs-space                             | 0px                       |
| --c-badge-size-sm-space                             | 2px                       |
| --c-badge-size-md-space                             | 6px                       |
| --c-badge-size-lg-space                             | 6px                       |
| --c-badge-size-xs-padding                           | 0 6px                     |
| --c-badge-size-sm-padding                           | 0 6px                     |
| --c-badge-size-md-padding                           | 0 8px                     |
| --c-badge-size-lg-padding                           | 0 8px                     |
| --c-badge-size-xl-padding                           | 0 10px                    |
| --c-badge-size-xs-height                            | 16px                      |
| --c-badge-size-sm-height                            | 16px                      |
| --c-badge-size-md-height                            | 20px                      |
| --c-badge-size-lg-height                            | 20px                      |
| --c-badge-size-xl-height                            | 20px                      |
| --c-badge-size-xs-border-radius                     | 16px                      |
| --c-badge-size-sm-border-radius                     | 16px                      |
| --c-badge-size-md-border-radius                     | 20px                      |
| --c-badge-size-lg-border-radius                     | 20px                      |
| --c-badge-size-xl-border-radius                     | 20px                      |
| --c-badge-bg-color                                  | #ef4444                   |
| --c-badge-status-info-bg-color                      | var(--c-color-info)       |
| --c-badge-status-success-bg-color                   | var(--c-color-success)    |
| --c-badge-status-warning-bg-color                   | var(--c-color-warning)    |
| --c-badge-status-danger-bg-color                    | var(--c-color-danger)     |
| --c-badge-status-primary-bg-color                   | var(--c-color-primary)    |
| --c-badge-text-color                                | var(--c-color-white)      |
| --c-badge-status-info-text-color                    | var(--c-color-on-info)    |
| --c-badge-status-success-text-color                 | var(--c-color-on-success) |
| --c-badge-status-warning-text-color                 | var(--c-color-on-warning) |
| --c-badge-status-danger-text-color                  | var(--c-color-on-danger)  |
| --c-badge-status-primary-text-color                 | var(--c-color-on-primary) |
| --c-badge-variant-outline-bg-color                  | transparent               |
| --c-badge-variant-outline-status-info-bg-color      | var(--c-color-on-info)    |
| --c-badge-variant-outline-status-success-bg-color   | var(--c-color-on-success) |
| --c-badge-variant-outline-status-warning-bg-color   | var(--c-color-on-warning) |
| --c-badge-variant-outline-status-danger-bg-color    | var(--c-color-on-danger)  |
| --c-badge-variant-outline-status-primary-bg-color   | var(--c-color-on-primary) |
| --c-badge-variant-outline-text-color                | #ef4444                   |
| --c-badge-variant-outline-status-info-text-color    | var(--c-color-info)       |
| --c-badge-variant-outline-status-success-text-color | var(--c-color-success)    |
| --c-badge-variant-outline-status-warning-text-color | var(--c-color-warning)    |
| --c-badge-variant-outline-status-danger-text-color  | var(--c-color-danger)     |
| --c-badge-variant-outline-status-primary-text-color | var(--c-color-primary)    |

### 类型定义

组件导出以下类型定义

```ts
import type { BadgeInstance } from '@cedar/ui'
```
