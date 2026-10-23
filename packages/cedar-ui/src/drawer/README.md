---
permalink: /components/drawer/
---

# Drawer

从容器一侧进入的桌面抽屉。Drawer 与 Maple Popup 共用同一套模态表面控制逻辑；标题、页脚、操作按钮和宽高仍是 Drawer 的桌面端能力。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

### 自定义宽度

Drawer 不提供离散 `size` 枚举；左右位置使用 `width`，上下位置使用 `height`，均支持 `number | string`。

<demo src="./__demos__/size.vue"></demo>

### 抽屉位置

<demo src="./__demos__/location.vue"></demo>

### 自定义节点

<demo src="./__demos__/custom-node.vue"></demo>

### 嵌套抽屉

<demo src="./__demos__/nest-drawer.vue"></demo>

### 挂载位置

`popup-container` 支持选择器、HTMLElement 和 `false`；`false` 表示保留在当前组件树位置。

<demo src="./__demos__/popup-container.vue"></demo>

### 函数调用

<demo src="./__demos__/function-call.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open **(v-model)** | 是否可见 | `boolean` | - |
| default-open | 非受控模式下是否默认可见 | `boolean` | `false` |
| placement | 进入方向 | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` |
| title | 标题 | `string` | - |
| overlay | 是否显示遮罩 | `boolean` | `true` |
| overlay-class / overlay-style | 遮罩类名 / 样式 | `string / CSSProperties` | - |
| overlay-closable | 点击遮罩是否请求关闭 | `boolean` | `true` |
| closable | 是否显示关闭按钮 | `boolean` | `true` |
| confirm-button-text / cancel-button-text | 操作按钮文字 | `string` | - |
| confirm-button-loading / cancel-button-loading | 操作按钮加载状态 | `boolean` | `false` |
| confirm-button-disabled / cancel-button-disabled | 操作按钮禁用状态 | `boolean` | `false` |
| confirm-button-props / cancel-button-props | 操作按钮属性 | `ButtonProps` | - |
| unmount-on-close | 关闭动画后是否卸载内容 | `boolean` | `false` |
| width / height | 左右宽度 / 上下高度 | `number \| string` | `250` |
| popup-container | 挂载容器 | `string \| HTMLElement \| false` | `'body'` |
| drawer-class / drawer-style | 面板类名 / 样式 | `string \| any[] / CSSProperties` | - |
| body-class / body-style | 内容区类名 / 样式 | `string \| any[] / StyleValue` | - |
| before-close | 关闭控制钩子；调用 `done()` 后提交 | `(action, done, refs) => void` | - |
| esc-to-close | ESC 是否请求关闭 | `boolean` | `true` |
| lock-scroll | 是否锁定挂载容器滚动 | `boolean` | `true` |
| close-on-route-change | 路由变化时是否请求关闭 | `boolean` | `false` |
| z-index | 自定义层级 | `number` | 自动分配 |
| header / footer / cancel-button | 是否显示对应区域 | `boolean` | `true` |

`before-close` 的 `action` 为 `'confirm' | 'cancel' | 'close'`。关闭按钮、遮罩、ESC 和路由属于 `close`；实例暴露的 `close()` 是强制关闭方法，与 Dialog 一致，不经过拦截器。`refs` 可控制两个按钮的 loading / disabled 状态。

### Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| update:open | 可见状态请求 | `boolean` |
| confirm / cancel | 点击对应操作按钮并获准关闭 | `Event` |
| open / close | 开始打开 / 开始关闭 | - |
| opened / closed | 打开 / 关闭动画结束 | - |
| click-overlay | 点击当前最上层遮罩 | `MouseEvent` |
| key-escape | 当前最上层抽屉收到 ESC | `KeyboardEvent` |

### Slots

`default`、`header`、`title`、`footer`。`footer` 获得 `confirm`、`cancel`、`close` 三个方法。

### 命令式调用

`Drawer.open(config)` 使用 camelCase 的同名配置，例如 `cancelButtonText`、`beforeClose`、`closeOnRouteChange`。通知事件使用 `onConfirm`、`onCancel`、`onOpen`、`onOpened`、`onClose`、`onClosed`、`onClickOverlay` 和 `onKeyEscape`。

```ts
import type { DrawerAction, DrawerBeforeCloseRefs, DrawerConfig, DrawerProps } from '@cedarjs/ui'
```

## CSS 变量与颜色语义

内置 fade／四方向 slide 在 prefers-reduced-motion: reduce 下关闭过渡与起始位移，组件样式自身生效，不依赖全局动效兜底。默认时长不变；业务自定义动画另行适配。已有编译 CSS 检查不等于真实 OS 动态切换验收。

面板 bg 使用 surface-raised；overlay-bg 使用 sys-color-scrim；header-text-color／content-text-color 使用 content-primary，关闭按钮与标题共享 header-text-color；border-color 使用 border-default。几何、动效与层级保留 Drawer 既有默认值。Drawer 是 Cedar 平台组件，不在 Maple 创建空壳同名变量。

overlay-style 可设置实例遮罩变量，drawer-style 可设置面板内变量；两者是兄弟节点，变量不会互相继承。全局主题在实际共同祖先设置 system 变量。显式背景属性优先于变量消费。已移除从未被消费的 close-icon-right 变量；关闭按钮位置由标题布局和 close-btn-margin-left 控制，不提供无效兼容别名。

| 变量 | 默认值 |
| --- | --- |
| `--c-drawer-header-height` | `var(--c-size-12)` |
| `--c-drawer-footer-button-margin-left` | `var(--c-spacing-6)` |
| `--c-drawer-header-font-size` | `var(--c-font-size-title-1)` |
| `--c-drawer-padding-horizontal` | `var(--c-spacing-7)` |
| `--c-drawer-footer-padding-vertical` | `var(--c-spacing-7)` |
| `--c-drawer-content-padding-vertical` | `var(--c-spacing-6)` |
| `--c-drawer-header-font-weight` | `var(--c-font-weight-500)` |
| `--c-drawer-border-color` | `var(--c-sys-color-border-default)` |
| `--c-drawer-border-width` | `var(--c-border-width-1)` |
| `--c-drawer-header-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-drawer-content-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-drawer-bg` | `var(--c-sys-color-surface-raised)` |
| `--c-drawer-overlay-bg` | `var(--c-sys-color-scrim)` |
| `--c-drawer-line-height` | `var(--c-line-height)` |
| `--c-drawer-z-index` | `var(--c-z-index-drawer)` |
| `--c-drawer-close-icon-font-size` | `var(--c-size-3)` |
| `--c-drawer-close-btn-margin-left` | `var(--c-spacing-4)` |
| `--c-drawer-transition-duration` | `var(--c-transition-duration-3)` |
| `--c-drawer-transition-timing-function` | `var(--c-transition-timing-function-standard)` |
