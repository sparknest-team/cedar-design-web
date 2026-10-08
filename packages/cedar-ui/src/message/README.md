---
permalink: /components/message/
---

# Message 全局提示

用于展示轻量级、非模态的全局反馈。Cedar 与 Maple 共享同一套公开契约、队列、计时和命令式服务；两端分别维护源码和端侧外观。

## 基本使用

直接调用 `Message(...)` 创建 `default` 提示。

<demo src="./__demos__/basic.vue"></demo>

## 消息状态

状态统一为 `default / info / success / warning / danger / loading`。函数方法使用 `error`，组件状态使用标准语义 `danger`；普通提示直接调用 `Message(...)`，不提供 `normal` 别名。

<demo src="./__demos__/type.vue"></demo>

## 自定义图标

<demo src="./__demos__/custom-icon.vue"></demo>

## 位置

两端均支持 `top / center / bottom`。

<demo src="./__demos__/location.vue"></demo>

## 显示时长

`duration` 单位为毫秒，`0` 表示常驻；`Message.loading(...)` 默认常驻。

<demo src="./__demos__/time.vue"></demo>

## 可关闭

<demo src="./__demos__/closable.vue"></demo>

## 更新已有提示

同一挂载容器和位置内，相同 `id` 更新原实例，不创建重复 DOM。仅当 `resetOnUpdate` 为 `true` 时，更新会重新计算完整显示时长。

<demo src="./__demos__/update.vue"></demo>

## Loading 与多实例

<demo src="./__demos__/loading.vue"></demo>

<demo src="./__demos__/multiple.vue"></demo>

## 悬停暂停

`pauseOnHover` 会保存剩余时间，鼠标离开后从剩余时间继续，而不是重新开始完整时长。

<demo src="./__demos__/pause-on-hover.vue"></demo>

## 组件调用

声明式组件适合由页面状态控制显示，并支持 `icon`、`action` 插槽和完整开关生命周期。

<demo src="./__demos__/component.vue"></demo>

## 视觉变体

视觉变体与 status 独立：neutral 是中性浮层与状态图标；tonal 是低强调状态色底与深色正文；solid 是高强调实色底与配套前景。Cedar 默认 neutral，Maple 默认 solid，显式传入同一 variant 即得到同一套颜色语义。default/loading 的 solid 保留深色底，loading 图标仍表达进度。两端导出 MessageVariant，函数调用、setDefaultOptions 和相同 id 更新都支持 variant。

<demo src="./__demos__/variant.vue"></demo>

## API

### Props / MessageOptions

| 属性                  | 说明                                   | 类型                                                         | 默认值          |
| --------------------- | -------------------------------------- | ------------------------------------------------------------ | --------------- |
| open / `v-model:open` | 是否显示（组件）                       | `boolean`                                                    | `false`         |
| id                    | 队列内唯一标识，相同 id 更新原实例     | `string \| number`                                           | 自动生成        |
| status                | 语义状态                               | `default \| info \| success \| warning \| danger \| loading` | `default`       |
| variant | 视觉强调层级 | `neutral \| tonal \| solid` | `neutral` |
| position              | 显示位置                               | `top \| center \| bottom`                                    | `top`           |
| content               | 内容                                   | `MessageContent`                                             | -               |
| icon                  | 自定义图标                             | `MessageContent`                                             | -               |
| action                | 操作区内容                             | `MessageContent`                                             | -               |
| duration              | 自动关闭时长（ms），`0` 不自动关闭     | `number`                                                     | `3000`          |
| showIcon              | 是否显示状态图标                       | `boolean`                                                    | `true`          |
| closable              | 是否显示关闭按钮                       | `boolean`                                                    | `false`         |
| pauseOnHover          | 悬停时暂停并保存剩余时间               | `boolean`                                                    | `false`         |
| resetOnUpdate         | 相同 id 更新时是否重置完整时长         | `boolean`                                                    | `false`         |
| closeButtonAriaLabel  | 关闭按钮无障碍名称                     | `string`                                                     | `Close message` |
| popupContainer        | 挂载容器；函数调用按容器和位置隔离队列 | `string \| HTMLElement \| false`                             | `body`          |

函数选项另支持 `onOpen / onOpened / onClose / onClosed`，关闭回调接收当前 `id`。

### 事件

`update:open`、`open`、`opened`、`close`、`closed`；每次开关周期各触发一次。

### 方法

| 方法                                              | 说明                     |
| ------------------------------------------------- | ------------------------ |
| `Message(options \| string)`                      | 打开默认提示             |
| `Message.info/success/warning/error/loading(...)` | 打开对应状态提示         |
| `Message.clear(position?)`                        | 清空全部或指定位置的提示 |
| `Message.setDefaultOptions(options)`              | 设置后续调用的默认值     |
| `Message.resetDefaultOptions()`                   | 恢复默认值               |

返回 `{ close() }`；重复调用 `close()` 不会重复触发关闭生命周期。

### 插槽

`default`、`icon`、`action`。

## 公开 CSS 变量

视觉变体与 status 独立：neutral 是中性浮层与状态图标；tonal 是低强调状态色底与深色正文；solid 是高强调实色底与配套前景。Cedar 默认 neutral，Maple 默认 solid，显式传入同一 variant 即得到同一套颜色语义。default/loading 的 solid 保留深色底，loading 图标仍表达进度。两端导出 MessageVariant，函数调用、setDefaultOptions 和相同 id 更新都支持 variant。

颜色命名为 `--c-message-{variant}-{status}-{bg|content-color|icon-color|border-color|close-color}`。bg 控制面板底，content-color 控制正文与未单独设色的 action，icon-color 控制状态图标，border-color 控制边线，close-color 控制关闭按钮。自定义背景时需要同时验证三个前景。几何变量保留端侧密度，不要求两端强行同值。变量必须作用于实际 Teleport 容器祖先。

| 变量 | 默认值 |
| --- | --- |
| `--c-message-neutral-default-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-message-neutral-default-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-neutral-default-icon-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-neutral-default-border-color` | `var(--c-sys-color-border-default)` |
| `--c-message-neutral-default-close-color` | `var(--c-sys-color-content-secondary)` |
| `--c-message-neutral-info-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-message-neutral-info-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-neutral-info-icon-color` | `var(--c-sys-color-content-info)` |
| `--c-message-neutral-info-border-color` | `var(--c-sys-color-border-default)` |
| `--c-message-neutral-info-close-color` | `var(--c-sys-color-content-secondary)` |
| `--c-message-neutral-success-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-message-neutral-success-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-neutral-success-icon-color` | `var(--c-sys-color-content-success)` |
| `--c-message-neutral-success-border-color` | `var(--c-sys-color-border-default)` |
| `--c-message-neutral-success-close-color` | `var(--c-sys-color-content-secondary)` |
| `--c-message-neutral-warning-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-message-neutral-warning-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-neutral-warning-icon-color` | `var(--c-sys-color-content-warning)` |
| `--c-message-neutral-warning-border-color` | `var(--c-sys-color-border-default)` |
| `--c-message-neutral-warning-close-color` | `var(--c-sys-color-content-secondary)` |
| `--c-message-neutral-danger-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-message-neutral-danger-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-neutral-danger-icon-color` | `var(--c-sys-color-content-danger)` |
| `--c-message-neutral-danger-border-color` | `var(--c-sys-color-border-default)` |
| `--c-message-neutral-danger-close-color` | `var(--c-sys-color-content-secondary)` |
| `--c-message-neutral-loading-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-message-neutral-loading-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-neutral-loading-icon-color` | `var(--c-sys-color-content-brand)` |
| `--c-message-neutral-loading-border-color` | `var(--c-sys-color-border-default)` |
| `--c-message-neutral-loading-close-color` | `var(--c-sys-color-content-secondary)` |
| `--c-message-tonal-default-bg` | `var(--c-sys-color-surface-muted)` |
| `--c-message-tonal-default-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-default-icon-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-default-border-color` | `transparent` |
| `--c-message-tonal-default-close-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-info-bg` | `rgba(var(--c-blue-6), 0.12)` |
| `--c-message-tonal-info-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-info-icon-color` | `var(--c-sys-color-content-info)` |
| `--c-message-tonal-info-border-color` | `transparent` |
| `--c-message-tonal-info-close-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-success-bg` | `var(--c-color-success-light-1)` |
| `--c-message-tonal-success-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-success-icon-color` | `var(--c-sys-color-content-success)` |
| `--c-message-tonal-success-border-color` | `transparent` |
| `--c-message-tonal-success-close-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-warning-bg` | `var(--c-color-warning-light-1)` |
| `--c-message-tonal-warning-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-warning-icon-color` | `var(--c-sys-color-content-warning)` |
| `--c-message-tonal-warning-border-color` | `transparent` |
| `--c-message-tonal-warning-close-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-danger-bg` | `var(--c-color-danger-light-1)` |
| `--c-message-tonal-danger-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-danger-icon-color` | `var(--c-sys-color-content-danger)` |
| `--c-message-tonal-danger-border-color` | `transparent` |
| `--c-message-tonal-danger-close-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-loading-bg` | `var(--c-color-primary-light-1)` |
| `--c-message-tonal-loading-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-loading-icon-color` | `var(--c-sys-color-content-brand)` |
| `--c-message-tonal-loading-border-color` | `transparent` |
| `--c-message-tonal-loading-close-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-solid-default-bg` | `#333` |
| `--c-message-solid-default-content-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-message-solid-default-icon-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-message-solid-default-border-color` | `transparent` |
| `--c-message-solid-default-close-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-message-solid-info-bg` | `var(--c-sys-color-status-info)` |
| `--c-message-solid-info-content-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-info-icon-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-info-border-color` | `transparent` |
| `--c-message-solid-info-close-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-success-bg` | `var(--c-sys-color-status-success)` |
| `--c-message-solid-success-content-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-success-icon-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-success-border-color` | `transparent` |
| `--c-message-solid-success-close-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-warning-bg` | `var(--c-sys-color-status-warning)` |
| `--c-message-solid-warning-content-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-warning-icon-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-warning-border-color` | `transparent` |
| `--c-message-solid-warning-close-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-danger-bg` | `var(--c-sys-color-status-danger)` |
| `--c-message-solid-danger-content-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-danger-icon-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-danger-border-color` | `transparent` |
| `--c-message-solid-danger-close-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-loading-bg` | `#333` |
| `--c-message-solid-loading-content-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-message-solid-loading-icon-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-message-solid-loading-border-color` | `transparent` |
| `--c-message-solid-loading-close-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-message-wrapper-margin-top` | `var(--c-spacing-12)` |
| `--c-message-wrapper-margin-bottom` | `var(--c-spacing-12)` |
| `--c-message-wrapper-padding-horizontal` | `var(--c-spacing-5)` |
| `--c-message-z-index` | `var(--c-z-index-message)` |
| `--c-message-padding-top` | `var(--c-spacing-5)` |
| `--c-message-padding-bottom` | `var(--c-spacing-5)` |
| `--c-message-padding-left` | `var(--c-spacing-7)` |
| `--c-message-padding-right` | `var(--c-spacing-7)` |
| `--c-message-margin-bottom` | `var(--c-spacing-7)` |
| `--c-message-border-radius` | `var(--c-border-radius-sm)` |
| `--c-message-icon-font-size` | `20px` |
| `--c-message-content-font-size` | `var(--c-font-size-body-3)` |
| `--c-message-icon-margin-right` | `var(--c-spacing-4)` |
| `--c-message-box-shadow` | `var(--c-shadow2-down)` |
| `--c-message-border-width` | `1px` |
| `--c-message-border-style` | `solid` |
| `--c-message-close-icon-font-size` | `12px` |
| `--c-message-close-btn-margin-left` | `var(--c-spacing-4)` |
| `--c-message-close-icon-hover-size` | `20px` |
| `--c-message-close-icon-hover-opacity` | `0.08` |
| `--c-message-transition-duration` | `var(--c-transition-duration-1)` |
| `--c-message-transition-duration-icon` | `var(--c-transition-duration-4)` |
| `--c-message-transition-timing-function` | `var( --c-transition-timing-function-linear )` |
| `--c-message-transition-timing-function-icon` | `var( --c-transition-timing-function-overshoot )` |
