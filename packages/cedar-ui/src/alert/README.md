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

`variant` 支持 `standard`（默认，浅色填充 + 描边）、`tonal`（浅色填充无描边）、`outline`（透明背景 + 描边）。

<demo src="./__demos__/variant.vue"></demo>

### 提示标题

通过设置 `title` 可以给警告提示添加标题。

<demo src="./__demos__/title.vue"></demo>

### 居中

通过设置 `center`，内容居中显示。

<demo src="./__demos__/center.vue"></demo>

### 顶部公告

通过设置 `banner`，可将警告提示作为顶部公告使用（去除边框和圆角）。

<demo src="./__demos__/banner.vue"></demo>

### 隐藏图标

通过设置 `:show-icon="false"` 来隐藏图标。

<demo src="./__demos__/show-icon.vue"></demo>

### 自定义图标

通过 `#icon` 插槽自定义前置图标。

<demo src="./__demos__/custom-icon.vue"></demo>

### 操作项

通过 `#action` 插槽自定义操作按钮。

<demo src="./__demos__/action.vue"></demo>

### 可关闭

通过设置 `closable`，可开启关闭按钮。

<demo src="./__demos__/closable.vue"></demo>

### 自定义关闭图标

指定 `close-icon` slot，自定义关闭元素。

<demo src="./__demos__/close-icon.vue"></demo>

## API

### `<Alert>` Props

| 属性      | 说明                                                                  | 类型                                                | 默认值       |
| --------- | --------------------------------------------------------------------- | --------------------------------------------------- | ------------ |
| status | 警告提示的类型                                                        | `'info' \| 'success' \| 'warning' \| 'danger' \| 'default'` | `'info'`     |
| variant   | 视觉变体                                                              | `'standard' \| 'tonal' \| 'outline'`               | `'standard'` |
| color     | 自定义背景色（覆盖 type 派生背景）                                    | `string`                                            | -            |
| title     | 警告提示的标题                                                        | `string`                                            | -            |
| message   | 内容文本（亦可使用默认插槽）                                          | `string`                                            | -            |
| show-icon | 是否展示图标                                                          | `boolean`                                           | `true`       |
| closable  | 是否展示关闭按钮                                                      | `boolean`                                           | `false`      |
| banner    | 是否作为顶部公告使用（去除边框和圆角）                                | `boolean`                                           | `false`      |
| center    | 内容是否居中显示                                                      | `boolean`                                           | `false`      |
| elevation | 阴影层级，可选 `true` / `false` 或 `0-24`                             | `boolean \| number`                       | `false`      |

### `<Alert>` Events

| 事件名      | 说明               | 参数                          |
| ----------- | ------------------ | ----------------------------- |
| close       | 点击关闭按钮时触发 | `(event: MouseEvent) => void` |
| closed | 关闭动画结束后触发 | -                             |

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
  AlertStatus,
  AlertVariant,
} from '@cedarjs/ui'
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

新增能力：`variant` / `color` / `elevation` / `default` 类型 / `closed` 事件。

`type="default"` 不渲染内置图标；需要图标时用 `#icon`。

## 同源实现与平台边界

两端各自保存完整源码，不引用公共核心，不共享组件实例或响应式状态；修改时同步维护两份实现。主体、Props、关键样式及配对测试纳入只读源码一致性检查，主题 token 和安装入口各自维护。

关闭按钮支持键盘操作，close 只触发一次，closed 在离场动画完成后触发。Maple 内部关闭类由 __close-icon 调整为 __close-btn；默认图标资源由各库本地适配。

### 完整变量默认值

彩色标题、正文、图标及 outline 描边使用可读 system content。standard 与 tonal 使用同一第 1 阶浅底，前者额外带弱装饰描边；默认标题为 content-primary，正文、图标为 content-secondary。content 变量同时控制根容器继承色，关闭图标及未显式设色的操作内容跟随它。Maple 暗色继承同一套颜色，但保留原有几何覆盖（内边距 16px、图标 22px、图标/关闭间距 12px、正文行高 1.5）。color 仅改背景，调用方须同时验证前景对比度。下表为 :root 默认值，不是主题覆盖值。

| 变量 | 默认值 |
| --- | --- |
| `--c-alert-padding-vertical` | `var(--c-sys-space-4)` |
| `--c-alert-padding-horizontal` | `var(--c-sys-space-6)` |
| `--c-alert-padding-vertical-with-title` | `var(--c-sys-space-6)` |
| `--c-alert-padding-horizontal-with-title` | `var(--c-sys-space-6)` |
| `--c-alert-border-radius` | `var(--c-sys-radius-md)` |
| `--c-alert-border-width` | `1px` |
| `--c-alert-font-size-content` | `var(--c-sys-font-size-md)` |
| `--c-alert-font-size-title` | `var(--c-sys-font-size-lg)` |
| `--c-alert-font-weight-title` | `var(--c-sys-font-weight-medium)` |
| `--c-alert-line-height` | `1.5715` |
| `--c-alert-line-height-title` | `1.5` |
| `--c-alert-title-margin-bottom` | `var(--c-sys-space-2)` |
| `--c-alert-icon-size` | `16px` |
| `--c-alert-icon-margin-right` | `var(--c-sys-space-4)` |
| `--c-alert-action-margin-left` | `var(--c-sys-space-5)` |
| `--c-alert-close-margin-left` | `var(--c-sys-space-4)` |
| `--c-alert-standard-info-bg` | `rgb(var(--c-blue-1))` |
| `--c-alert-standard-info-border` | `rgb(var(--c-blue-3))` |
| `--c-alert-standard-info-title` | `var(--c-sys-color-content-info)` |
| `--c-alert-standard-info-content` | `var(--c-sys-color-content-info)` |
| `--c-alert-standard-info-icon` | `var(--c-sys-color-content-info)` |
| `--c-alert-standard-success-bg` | `rgb(var(--c-success-1))` |
| `--c-alert-standard-success-border` | `rgb(var(--c-success-3))` |
| `--c-alert-standard-success-title` | `var(--c-sys-color-content-success)` |
| `--c-alert-standard-success-content` | `var(--c-sys-color-content-success)` |
| `--c-alert-standard-success-icon` | `var(--c-sys-color-content-success)` |
| `--c-alert-standard-warning-bg` | `rgb(var(--c-warning-1))` |
| `--c-alert-standard-warning-border` | `rgb(var(--c-warning-3))` |
| `--c-alert-standard-warning-title` | `var(--c-sys-color-content-warning)` |
| `--c-alert-standard-warning-content` | `var(--c-sys-color-content-warning)` |
| `--c-alert-standard-warning-icon` | `var(--c-sys-color-content-warning)` |
| `--c-alert-standard-danger-bg` | `rgb(var(--c-danger-1))` |
| `--c-alert-standard-danger-border` | `rgb(var(--c-danger-3))` |
| `--c-alert-standard-danger-title` | `var(--c-sys-color-content-danger)` |
| `--c-alert-standard-danger-content` | `var(--c-sys-color-content-danger)` |
| `--c-alert-standard-danger-icon` | `var(--c-sys-color-content-danger)` |
| `--c-alert-standard-default-bg` | `var(--c-color-fill-2)` |
| `--c-alert-standard-default-border` | `var(--c-sys-color-border-default)` |
| `--c-alert-standard-default-title` | `var(--c-sys-color-content-primary)` |
| `--c-alert-standard-default-content` | `var(--c-sys-color-content-secondary)` |
| `--c-alert-standard-default-icon` | `var(--c-sys-color-content-secondary)` |
| `--c-alert-tonal-info-bg` | `rgb(var(--c-blue-1))` |
| `--c-alert-tonal-info-title` | `var(--c-sys-color-content-info)` |
| `--c-alert-tonal-info-content` | `var(--c-sys-color-content-info)` |
| `--c-alert-tonal-info-icon` | `var(--c-sys-color-content-info)` |
| `--c-alert-tonal-success-bg` | `rgb(var(--c-success-1))` |
| `--c-alert-tonal-success-title` | `var(--c-sys-color-content-success)` |
| `--c-alert-tonal-success-content` | `var(--c-sys-color-content-success)` |
| `--c-alert-tonal-success-icon` | `var(--c-sys-color-content-success)` |
| `--c-alert-tonal-warning-bg` | `rgb(var(--c-warning-1))` |
| `--c-alert-tonal-warning-title` | `var(--c-sys-color-content-warning)` |
| `--c-alert-tonal-warning-content` | `var(--c-sys-color-content-warning)` |
| `--c-alert-tonal-warning-icon` | `var(--c-sys-color-content-warning)` |
| `--c-alert-tonal-danger-bg` | `rgb(var(--c-danger-1))` |
| `--c-alert-tonal-danger-title` | `var(--c-sys-color-content-danger)` |
| `--c-alert-tonal-danger-content` | `var(--c-sys-color-content-danger)` |
| `--c-alert-tonal-danger-icon` | `var(--c-sys-color-content-danger)` |
| `--c-alert-tonal-default-bg` | `var(--c-color-fill-2)` |
| `--c-alert-tonal-default-title` | `var(--c-sys-color-content-primary)` |
| `--c-alert-tonal-default-content` | `var(--c-sys-color-content-secondary)` |
| `--c-alert-tonal-default-icon` | `var(--c-sys-color-content-secondary)` |
| `--c-alert-outline-info-border` | `var(--c-sys-color-content-info)` |
| `--c-alert-outline-info-title` | `var(--c-sys-color-content-info)` |
| `--c-alert-outline-info-content` | `var(--c-sys-color-content-info)` |
| `--c-alert-outline-info-icon` | `var(--c-sys-color-content-info)` |
| `--c-alert-outline-success-border` | `var(--c-sys-color-content-success)` |
| `--c-alert-outline-success-title` | `var(--c-sys-color-content-success)` |
| `--c-alert-outline-success-content` | `var(--c-sys-color-content-success)` |
| `--c-alert-outline-success-icon` | `var(--c-sys-color-content-success)` |
| `--c-alert-outline-warning-border` | `var(--c-sys-color-content-warning)` |
| `--c-alert-outline-warning-title` | `var(--c-sys-color-content-warning)` |
| `--c-alert-outline-warning-content` | `var(--c-sys-color-content-warning)` |
| `--c-alert-outline-warning-icon` | `var(--c-sys-color-content-warning)` |
| `--c-alert-outline-danger-border` | `var(--c-sys-color-content-danger)` |
| `--c-alert-outline-danger-title` | `var(--c-sys-color-content-danger)` |
| `--c-alert-outline-danger-content` | `var(--c-sys-color-content-danger)` |
| `--c-alert-outline-danger-icon` | `var(--c-sys-color-content-danger)` |
| `--c-alert-outline-default-border` | `var(--c-sys-color-border-default)` |
| `--c-alert-outline-default-title` | `var(--c-sys-color-content-primary)` |
| `--c-alert-outline-default-content` | `var(--c-sys-color-content-secondary)` |
| `--c-alert-outline-default-icon` | `var(--c-sys-color-content-secondary)` |

### 动效变量

内置动效遵循 `prefers-reduced-motion: reduce`；减少动效不会阻止加载状态或关闭事件更新。

| Token | Default |
| --- | --- |
| `--c-alert-close-duration` | `var(--c-sys-motion-duration-slow)` |
