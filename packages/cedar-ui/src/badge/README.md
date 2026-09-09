---
permalink: /components/badge/
---

# Badge

与 Maple 使用相同场景、参数和交互顺序；示例源码仅替换组件前缀，主题与站点外壳各自保留。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

### 内联与独立展示

<demo src="./__demos__/inline.vue"></demo>

### 小圆点

<demo src="./__demos__/dot.vue"></demo>

### 自定义内容

<demo src="./__demos__/content.vue"></demo>

### 最大值与零值

<demo src="./__demos__/max.vue"></demo>

### 状态和颜色

<demo src="./__demos__/color.vue"></demo>

### 五种尺寸

<demo src="./__demos__/size.vue"></demo>

### 位置与偏移

<demo src="./__demos__/position.vue"></demo>

### 显示与隐藏

<demo src="./__demos__/show.vue"></demo>

### 实心与描边

<demo src="./__demos__/variant.vue"></demo>

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
| position        | 徽标物理位置（RTL 下不翻转），mode 为 floating 时有效                               | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left' \| 'left' \| 'right'` | `top-right` |
| inline-position | 徽标的位置，mode 为 inline 时有效                                                  | `'start' \| 'end'`                                             |    `end`    |
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

| 变量名                                              | 默认值                    |
| --------------------------------------------------- | ------------------------- |
| --c-badge-font-weight                               | 500                       |
| --c-badge-description-size-xs-font-size             | 12px                      |
| --c-badge-description-size-sm-font-size             | 12px                      |
| --c-badge-description-size-md-font-size             | 14px                      |
| --c-badge-description-size-lg-font-size             | 16px                      |
| --c-badge-description-size-xl-font-size             | 18px                      |
| --c-badge-description-text-color                    | var(--c-color-text-1)     |
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
| --c-badge-bg-color                                  | @color-danger-6           |
| --c-badge-status-info-bg-color                      | @color-info-6             |
| --c-badge-status-success-bg-color                   | @color-success-6          |
| --c-badge-status-warning-bg-color                   | @color-warning-6          |
| --c-badge-status-danger-bg-color                    | @color-danger-6           |
| --c-badge-status-primary-bg-color                   | @color-primary-6          |
| --c-badge-text-color                                | var(--c-color-white)      |
| --c-badge-status-info-text-color                    | var(--c-color-white)      |
| --c-badge-status-success-text-color                 | var(--c-color-white)      |
| --c-badge-status-warning-text-color                 | var(--c-color-white)      |
| --c-badge-status-danger-text-color                  | var(--c-color-white)      |
| --c-badge-status-primary-text-color                 | var(--c-color-white)      |
| --c-badge-variant-outline-bg-color                  | transparent               |
| --c-badge-variant-outline-text-color                | @color-danger-6           |
| --c-badge-variant-outline-status-info-text-color    | @color-info-6             |
| --c-badge-variant-outline-status-success-text-color | @color-success-6          |
| --c-badge-variant-outline-status-warning-text-color | @color-warning-6          |
| --c-badge-variant-outline-status-danger-text-color  | @color-danger-6           |
| --c-badge-variant-outline-status-primary-text-color | @color-primary-6          |
| --c-badge-border-color                              | var(--c-color-bg-2)       |

### 类型定义

组件导出以下类型定义

```ts
import type { BadgeInstance } from '@cedarjs/ui'
```
