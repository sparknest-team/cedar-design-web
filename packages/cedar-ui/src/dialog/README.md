---
permalink: /components/dialog/
---

# Dialog

在当前页面打开一个浮层，承载相关操作。组件式与函数式 API 命名一致。

## 案例

### 基本用法

<demo src="./__demos__/basic.vue"></demo>

### 异步关闭

通过 `before-close` / `beforeClose` 实现异步关闭，可通过 `refs` 控制按钮 loading。

<demo src="./__demos__/async.vue"></demo>

### 函数调用

<demo src="./__demos__/global.vue"></demo>

### Alert

<demo src="./__demos__/alert.vue"></demo>

### 确认框

<demo src="./__demos__/confirm.vue"></demo>

### 消息提示

设置 `type` 为 `info` / `success` / `warning` / `error` 显示对应图标。

<demo src="./__demos__/message.vue"></demo>

### 弹出层表单

<demo src="./__demos__/form.vue"></demo>

### 自定义底部

`footer` 插槽会暴露 `confirm`、`cancel` 和 `close` 方法，便于组合自定义操作。

<demo src="./__demos__/custom-footer.vue"></demo>

### 定制按钮文字

<demo src="./__demos__/custom-text.vue"></demo>

### 对话框宽度

通过 `width` 自定义宽度。

<demo src="./__demos__/width.vue"></demo>

### 简洁模式

`simple` 适合内容简短、操作聚焦的对话框。

<demo src="./__demos__/simple.vue"></demo>

### 可拖动

<demo src="./__demos__/draggable.vue"></demo>

### 全屏

<demo src="./__demos__/fullscreen.vue"></demo>

### 高级属性

组合 `footer`、`hide-title`、`body-class` / `body-style` 和 `unmount-on-close` 控制对话框的渲染行为。

<demo src="./__demos__/advanced.vue"></demo>

### 去除内容边距

通过 `body-class` / `body-style` 自定义内容区样式。

<demo src="./__demos__/no-padding.vue"></demo>

### 最大高度

<demo src="./__demos__/max-height.vue"></demo>

## API

### `<Dialog>` Props

| 参数名                    | 描述                                         | 类型                             | 默认值       |
| ------------------------- | -------------------------------------------- | -------------------------------- | ------------ |
| `open` **(v-model)**      | 是否显示                                     | `boolean`                        | `-`          |
| `default-open`            | 非受控默认显示                               | `boolean`                        | `false`      |
| `title`                   | 标题                                         | `string`                         | `-`          |
| `message`                 | 内容（也可用 default 插槽）                  | `string`                         | `-`          |
| `message-align`           | 内容对齐                                     | `'left' \| 'center' \| 'right'`  | `'left'`     |
| `type`                    | 类型图标：`info` `success` `warning` `error` | `string`                         | `-`          |
| `simple`                  | 简洁布局（紧凑 padding、footer 居中）        | `boolean`                        | `false`      |
| `width`                   | 宽度                                         | `number \| string`               | `-`          |
| `top`                     | 距顶部高度（`align-center` 时无效）          | `number \| string`               | `-`          |
| `title-align`             | 标题对齐                                     | `'start' \| 'center'`            | `'center'`   |
| `align-center`            | 垂直水平居中                                 | `boolean`                        | `true`       |
| `overlay`                    | 是否显示背景层                                 | `boolean`                        | `true`       |
| `overlay-class`              | 背景层 class                                   | `string`                         | `-`          |
| `overlay-style`              | 背景层 style                                   | `CSSProperties`                  | `-`          |
| `overlay-closable`           | 点击背景层关闭                                 | `boolean`                        | `true`       |
| `esc-to-close`            | ESC 关闭                                     | `boolean`                        | `true`       |
| `lock-scroll`             | 打开时锁定背景滚动                           | `boolean`                        | `true`       |
| `popup-container`         | 挂载位置，`false` 禁用 teleport              | `string \| HTMLElement \| false` | `'body'`     |
| `confirm-button`          | 显示确认按钮                                 | `boolean`                        | `true`       |
| `cancel-button`           | 显示取消按钮                                 | `boolean`                        | `true`       |
| `closable`                | 显示右上角关闭按钮                           | `boolean`                        | `true`       |
| `confirm-button-text`     | 确认按钮文案                                 | `string`                         | `-`          |
| `cancel-button-text`      | 取消按钮文案                                 | `string`                         | `-`          |
| `confirm-button-loading`  | 确认按钮 loading                             | `boolean`                        | `false`      |
| `cancel-button-loading`   | 取消按钮 loading                             | `boolean`                        | `false`      |
| `confirm-button-disabled` | 确认按钮 disabled                            | `boolean`                        | `false`      |
| `cancel-button-disabled`  | 取消按钮 disabled                            | `boolean`                        | `false`      |
| `confirm-button-props`    | 确认按钮 props                               | `ButtonProps`                    | `-`          |
| `cancel-button-props`     | 取消按钮 props                               | `ButtonProps`                    | `-`          |
| `footer`                  | 是否展示 footer 区域                         | `boolean`                        | `true`       |
| `dialog-class`            | 对话框 class                                 | `string \| any[]`                | `-`          |
| `dialog-style`            | 对话框 style                                 | `CSSProperties`                  | `-`          |
| `body-class`              | 内容区 class                                 | `string \| any[]`                | `-`          |
| `body-style`              | 内容区 style                                 | `StyleValue`                     | `-`          |
| `hide-title`              | 隐藏标题                                     | `boolean`                        | `false`      |
| `unmount-on-close`        | 关闭后卸载                                   | `boolean`                        | `false`      |
| `draggable`               | 可拖动                                       | `boolean`                        | `false`      |
| `fullscreen`              | 全屏                                         | `boolean`                        | `false`      |
| `overlay-animation-name`     | 背景层动画                                     | `string`                         | `fade-modal` |
| `dialog-animation-name`   | 对话框动画                                   | `string`                         | `zoom-modal` |
| `z-index`                 | 层级                                         | `number`                         | `-`          |
| `before-close`            | 关闭前拦截                                   | `(action, done, refs) => void`   | `-`          |

### `<Dialog>` Events

| 事件名       | 描述          | 参数            |
| ------------ | ------------- | --------------- |
| `open`       | 打开时        | `-`             |
| `opened`     | 打开动画结束  | `-`             |
| `close`      | 关闭时        | `-`             |
| `closed`     | 关闭动画结束  | `-`             |
| `confirm`    | 点击确认      | `Event`         |
| `cancel`     | 点击取消/关闭 | `Event`         |
| `click-overlay` | 点击背景层      | `MouseEvent`    |
| `key-escape` | ESC           | `KeyboardEvent` |

关闭按钮、背景层、ESC 和 `close()` 使用 `close` 语义，不会额外触发 `cancel`。

### `<Dialog>` Slots

| 插槽名    | 描述 | 参数                         |
| --------- | ---- | ---------------------------- |
| `default` | 内容 | `-`                          |
| `title`   | 标题 | `-`                          |
| `footer`  | 底部 | `cancel`, `confirm`, `close` |

确认与取消按钮默认使用 Button 的 `default` 状态和 `text` 变体；可通过 `confirmButtonProps` / `cancelButtonProps` 覆盖。

### 全局方法

所有函数式 Dialog 默认使用简洁布局（`simple: true`）并隐藏右上角关闭按钮（`closable: false`），仍可通过传入参数或全局默认配置显式覆盖。

#### DialogConfig

与组件 props 一致（camelCase），另支持：

| 参数名        | 描述                               | 类型                       |
| ------------- | ---------------------------------- | -------------------------- |
| `content`     | 可渲染内容；设置时优先于 `message` | `RenderContent`            |
| `footer`      | 是否展示 footer 或自定义 footer    | `boolean \| RenderContent` |
| `onConfirm`   | 确认回调                           | `(e?: Event) => void`      |
| `onCancel`    | 取消回调                           | `(e?: Event) => void`      |
| `onClickOverlay` | 点击背景层回调                       | `() => void`               |
| `onKeyEscape` | ESC 回调                           | `() => void`               |

#### DialogMethod

| 方法                               | 描述                           | 返回值                                 |
| ---------------------------------- | ------------------------------ | -------------------------------------- |
| `Dialog.open(config)`              | 打开对话框                     | `Promise<DialogAction> & DialogReturn` |
| `Dialog.confirm(config)`           | 确认框（默认 `type: warning`） | 同上                                   |
| `Dialog.alert(config)`             | Alert（无取消按钮）            | 同上                                   |
| `Dialog.info(config)`              | 信息提示                       | 同上                                   |
| `Dialog.success(config)`           | 成功提示                       | 同上                                   |
| `Dialog.warning(config)`           | 警告提示                       | 同上                                   |
| `Dialog.error(config)`             | 错误提示                       | 同上                                   |
| `Dialog.close()`                   | 关闭最近打开的函数式对话框     | `void`                                 |
| `Dialog.setDefaultOptions(config)` | 设置函数式默认配置             | `void`                                 |
| `Dialog.resetDefaultOptions()`     | 重置函数式默认配置             | `void`                                 |

#### DialogReturn

| 属性             | 描述     |
| ---------------- | -------- |
| `close()`        | 关闭     |
| `update(config)` | 更新配置 |

安装后可通过 `app.config.globalProperties.$dialog` 调用。

### 类型定义

```ts
import type {
  DialogAction,
  DialogBeforeCloseRefs,
  DialogConfig,
  DialogMethod,
  DialogReturn,
  DialogService,
  DialogType,
} from "@cedarjs/ui";
```
