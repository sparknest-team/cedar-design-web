---
permalink: /components/alert/
---

# Alert

向用户显示警告的信息时，通过警告提示，展现需要关注的信息。

## 案例

### 基础用法

展现需要关注的信息，适用于简短的警告提示。

<demo src="./__demos__/basic.vue"></demo>

### 提示类型

警告提示有 `info`、`success`、`warning`、`danger`、`default` 五种类型。`default` 类型下默认不展示图标，可通过 `#icon` 插槽自定义。

<demo src="./__demos__/type.vue"></demo>

### 视觉变体

`variant` 支持 `standard`（默认，浅色填充 + 描边）、`tonal`（浅色填充无描边）、`outlined`（透明背景 + 描边）。

<demo src="./__demos__/variant.vue"></demo>

### 提示标题

通过设置 `title` 可以给警告提示添加标题。

<demo src="./__demos__/title.vue"></demo>

### 可关闭

通过设置 `closable`，可开启关闭按钮。

<demo src="./__demos__/closable.vue"></demo>

### 自定义关闭图标

指定 `close-icon` slot，自定义关闭元素。

<demo src="./__demos__/close-icon.vue"></demo>

### 隐藏图标

通过设置 `:show-icon="false"` 来隐藏图标。

<demo src="./__demos__/show-icon.vue"></demo>

### 操作项

通过 `#action` 插槽自定义操作按钮。

<demo src="./__demos__/action.vue"></demo>

### 顶部公告

通过设置 `banner`，可将警告提示作为顶部公告使用（去除边框和圆角）。

<demo src="./__demos__/banner.vue"></demo>

## API

### `<Alert>` Props

| 属性      | 说明                                                                  | 类型                                                | 默认值       |
| --------- | --------------------------------------------------------------------- | --------------------------------------------------- | ------------ |
| type      | 警告提示的类型                                                        | `'info' \| 'success' \| 'warning' \| 'danger' \| 'default'` | `'info'`     |
| variant   | 视觉变体                                                              | `'standard' \| 'tonal' \| 'outlined'`               | `'standard'` |
| color     | 自定义背景色（覆盖 type 派生背景）                                    | `string`                                            | -            |
| title     | 警告提示的标题                                                        | `string`                                            | -            |
| message   | 内容文本（亦可使用默认插槽）                                          | `string`                                            | -            |
| show-icon | 是否展示图标                                                          | `boolean`                                           | `true`       |
| closable  | 是否展示关闭按钮                                                      | `boolean`                                           | `false`      |
| banner    | 是否作为顶部公告使用（去除边框和圆角）                                | `boolean`                                           | `false`      |
| center    | 内容是否居中显示                                                      | `boolean`                                           | `false`      |
| elevation | 阴影层级，可选 `true` / `false` 或 `0-24`                             | `boolean \| string \| number`                       | `false`      |

### `<Alert>` Events

| 事件名      | 说明               | 参数                          |
| ----------- | ------------------ | ----------------------------- |
| close       | 点击关闭按钮时触发 | `(event: MouseEvent) => void` |
| after-close | 关闭动画结束后触发 | -                             |

### `<Alert>` Slots

| 插槽名     | 说明     | 参数 |
| ---------- | -------- | ---- |
| default    | 内容     | -    |
| icon       | 图标     | -    |
| title      | 标题     | -    |
| action     | 操作项   | -    |
| close-icon | 关闭图标 | -    |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  AlertInstance,
  AlertProps,
  AlertType,
  AlertVariant,
} from '@cedar/ui'
```

### 样式变量

参见 `style/token.less`，所有变量以 `--c-alert-` 为前缀。覆盖示例：

```css
:root {
  --c-alert-padding-vertical: 12px;
  --c-alert-padding-horizontal: 20px;
}
```

## 升级提示（Breaking）

| 旧 | 新 |
| -- | -- |
| `type="error"` | `type="danger"` |
| `type="normal"` | `type="default"` |
| `closeable` | `closable` |
| `#close-element` slot | `#close-icon` slot |

新增能力：`variant` / `color` / `elevation` / `default` 类型 / `after-close` 事件。
