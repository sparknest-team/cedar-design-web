---
permalink: /components/button/
---

# Button

按钮是一种命令组件，可发起一个即时操作。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>


### 变体

<demo src="./__demos__/variants.vue"></demo>

### 禁用状态

<demo src="./__demos__/disabled.vue"></demo>

### 变体

<demo src="./__demos__/button-variants.vue"></demo>

### 加载中状态

通过设置 loading 可以让按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件。

<demo src="./__demos__/loading.vue"></demo>

### 自动加载

<demo src="./__demos__/auto-loading.vue"></demo>

### 块级按钮

<demo src="./__demos__/block.vue"></demo>

### 自定义颜色

<demo src="./__demos__/custom-color.vue"></demo>

### 圆形按钮

<demo src="./__demos__/round.vue"></demo>

### 堆叠状态

<demo src="./__demos__/stacked.vue"></demo>

### 组合按钮
<demo src="./__demos__/button-group.vue"></demo>


## API

### `<Button>` Props

| 属性         | 说明                                                                                                                                    | 类型                                                      | 默认值    |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------- |
| status       | 按钮主题色                                                                                                                              | `'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | -         |
| variant      | 按钮变体样式                                                                                                                            | `'default' \| 'text' \| 'outline' \| 'link' \| 'tonal'`  | `'default'` |
| size         | 按钮尺寸                                                                                                                                | `'xs' \| 'sm' \| 'md' \| 'lg'`                           | `'md'`    |
| round        | 是否为圆形按钮                                                                                                                          | `boolean`                                                 | `false`   |
| block        | 是否为块级元素（宽度占满容器）                                                                                                          | `boolean`                                                 | `false`   |
| loading      | 是否为加载中状态                                                                                                                        | `boolean`                                                 | `false`   |
| loadingType  | 加载类型                                                                                                                                | `'default' \| 'fill' \| 'line'`                          | `'default'` |
| autoLoading  | 是否自动loading，方便处理异步任务                                                                                                       | `boolean`                                                 | `false`   |
| disabled     | 是否为禁用状态                                                                                                                          | `boolean`                                                 | -         |
| stacked      | 是否为堆叠状态（图标和文字垂直排列）                                                                                                    | `boolean`                                                 | -         |
| iconContainer| 是否为图标容器                                                                                                                          | `boolean`                                                 | `false`   |
| ripple       | 是否使用水波纹效果                                                                                                                      | `boolean`                                                 | `false`   |
| focusable    | 是否可以被聚焦                                                                                                                          | `boolean`                                                 | `false`   |
| autofocus    | 是否自动聚焦                                                                                                                            | `boolean`                                                 | `false`   |
| htmlType     | 原生按钮类型，可选值参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type '_blank')            | `'button' \| 'submit' \| 'reset'`                        | `'button'` |
| component    | 组件标签，设置为 `'a'` 时渲染为链接                                                                                                      | `'button' \| 'a'`                                         | `'button'` |
| color        | 自定义背景颜色                                                                                                                          | `string`                                                  | -         |
| textColor    | 自定义文字颜色                                                                                                                          | `string`                                                  | -         |
| elevation    | 海拔高度，可选值为 `true`、`false` 和 `0-24` 的等级（仅 `variant='default'` 时生效）                                                   | `boolean \| number`                                       | `true`    |

**注意：** 当按钮位于 `ButtonGroup` 内时，`status`、`variant`、`size`、`color`、`textColor`、`stacked`、`disabled` 属性会继承按钮组的设置，但可以通过在按钮上单独设置来覆盖。

### `<Button>` Events

| 事件名     | 说明           | 参数                          |
| ---------- | -------------- | ----------------------------- |
| click      | 点击触发的事件 | `(event: MouseEvent) => void` |
| touchstart | 触摸开始事件   | `(event: TouchEvent) => void` |

### `<Button>` Slots

| 插槽名  | 说明     | 参数 |
| ------- | -------- | ---- |
| default | 按钮内容 | -    |
| icon    | 图标插槽 | -    |

### `<ButtonGroup>` Props

| 属性      | 说明                                                                                                                                    | 类型                                                      | 默认值    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------- |
| size      | 按钮组尺寸，子按钮会继承此设置                                                                                                          | `'xs' \| 'sm' \| 'md' \| 'lg'`                           | `'md'`    |
| status    | 按钮组主题色，子按钮会继承此设置                                                                                                        | `'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| variant   | 按钮组变体样式，子按钮会继承此设置                                                                                                      | `'default' \| 'text' \| 'outline' \| 'link' \| 'tonal'` | `'default'` |
| color     | 按钮组背景颜色，子按钮会继承此设置                                                                                                      | `string`                                                  | `''`      |
| textColor | 按钮组文字颜色，子按钮会继承此设置                                                                                                      | `string`                                                  | `''`      |
| stacked   | 是否为堆叠状态（图标和文字垂直排列），子按钮会继承此设置                                                                                | `boolean`                                                 | `false`   |
| disabled  | 是否禁用所有子按钮                                                                                                                      | `boolean`                                                 | `false`   |
| vertical  | 是否为垂直排列                                                                                                                          | `boolean`                                                 | `false`   |
| elevation | 海拔高度，可选值为 `true`、`false` 和 `0-24` 的等级（仅 `variant='default'` 时生效）                                                   | `boolean \| number`                                       | `true`    |

**注意：** 按钮组内的子按钮会自动继承按钮组的 `status`、`variant`、`size`、`color`、`textColor`、`stacked`、`disabled` 属性，但子按钮可以通过单独设置这些属性来覆盖继承的值。

### 类型定义

组件导出以下类型定义

```ts
import type { ButtonProps, ButtonGroupProps } from '@cedar/ui'
```
