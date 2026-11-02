---
permalink: /components/drawer/
---

# Drawer

从容器一侧进入的桌面抽屉。Drawer 与 Maple Popup 共用同一套模态表面控制逻辑；标题、页脚、操作按钮和宽高仍是 Drawer 的桌面端能力。

## 基础示例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

## 尺寸与定位

### 抽屉尺寸与方向

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `unmount-on-close` | 关闭动画后是否卸载内容 | 抽屉尺寸与方向 |
| `placement` | 抽屉面板在容器中的出现侧，默认 right；不是相对按钮的定位，不执行浮层避让翻转 | 抽屉尺寸与方向 |
| `popup-container` | 挂载容器 | 挂载位置 |
<!-- demo-config-notes:end -->

依次打开不同抽屉，比较方向和占用空间；嵌套、挂载容器与关闭拦截另见后续案例。

<details>
<summary>配置说明与使用限制</summary>

#### 自定义宽度

Drawer 不提供离散 `size` 枚举；左右位置使用 `width`，上下位置使用 `height`，均支持 `number | string`。

</details>

<demo src="./__demos__/position-size-comparison.vue"></demo>

### 挂载位置

`popup-container` 支持选择器、HTMLElement 和 `false`；`false` 表示保留在当前组件树位置。

<demo src="./__demos__/popup-container.vue"></demo>

## 内容与嵌套

### 嵌套抽屉

<demo src="./__demos__/nest-drawer.vue"></demo>

### 自定义节点

<demo src="./__demos__/custom-node.vue"></demo>

### 函数调用

<demo src="./__demos__/function-call.vue"></demo>

## 关闭与异步控制

### before 钩子与 done 兼容

`beforeClose({ action }, done, context)` 为统一入口，不新增另一套命名。


只记录日志的同步钩子应显式 return true；同步 undefined 表示仍在等待回调。注意：以前返回 `Promise<void>` 却不调用 done 的异步钩子，现在会在 Promise 完成后放行。


<demo src="./__demos__/guard-protocol.vue"></demo>


Promise 与 done 共用一次完成状态：`false` / `done(false)` 阻止，`true` / `done()` 允许；Promise&lt;void&gt; 正常完成允许。重复完成只生效一次，异常触发 guard-error，取消或卸载后迟到结果无效。此类关闭/确认回调同步返回 void 时保留原回调协议，等待 done。


守卫统一使用 `(payload, done, context)`：关闭 payload 为 `{ action }`，切换和提交为 `{ value, previousValue }`，Popup 为 `{ reason }`。context 提供 `signal` 和可选原始 `event`。返回 boolean/Promise，或调用 done()/done(false)；同步 void 等待 done，Promise&lt;void&gt; 放行。首次完成生效。等待期间自动管理 loading/disabled，取消后旧结果失效，不暴露内部按钮 refs。

## 阅读方向

继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部覆盖。抽屉 placement 的 left/right 保持物理侧，进入/退出仍从对应屏幕边缘运动；标题、内容和底部动作继承阅读方向。方向切换不提交或清空内容。

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dir | 阅读方向；省略时继承来源作用域。物理 left/right 方位保持原意。 | `ReadingDirection` (`ltr` / `rtl`) | — |
| open **(v-model)** | 是否可见 | `boolean` | - |
| default-open | 非受控模式下是否默认可见 | `boolean` | `false` |
| placement | 抽屉面板在容器中的出现侧，默认 right；不是相对按钮的定位，不执行浮层避让翻转 | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` |
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
| `before-close` | 返回 boolean/Promise 或调用 done；首次完成生效 | `DrawerBeforeClose` | — |
| esc-to-close | ESC 是否请求关闭 | `boolean` | `true` |
| lock-scroll | 是否锁定挂载容器滚动 | `boolean` | `true` |
| close-on-route-change | 路由变化时是否请求关闭 | `boolean` | `false` |
| z-index | 自定义层级 | `number` | 自动分配 |
| header / footer / cancel-button | 是否显示对应区域 | `boolean` | `true` |


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
import type { DrawerAction, DrawerConfig, DrawerProps } from '@cedar-design/ui'
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

### 守卫等待反馈

before-* 等待期间显示加载反馈并标记 aria-busy；拒绝或失败后恢复，重复提交不再启动同一操作。普通事件返回的 Promise 不参与加载。
