---
permalink: /components/drawer/
---

# Drawer

从容器一侧进入的桌面抽屉。Drawer 与 Maple Popup 共用同一套模态表面控制逻辑；标题、页脚、操作按钮和宽高仍是 Drawer 的桌面端能力。

默认头部中的 `title` 插槽通过稳定且唯一的标题 id 与对话框关联；函数服务的文字或渲染函数标题使用相同规则，多个服务不会复用标题 id。显式 `ariaLabel` 优先，普通 `title` 属性仍可提供名称。隐藏头部或提供完整 `header` 插槽时，不引用未渲染的标题，应显式提供 `ariaLabel`。

`DrawerConfig` 支持与组件相同的 `dir`、`ariaLabel`、`closeButtonAriaLabel`、`overlayAnimationName`，错误通知为 `onGuardError(error, action)`。修改守卫不会重新打开已关闭的抽屉。

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

### 关闭守卫

`beforeClose({ action }, done, context)` 用于拦截关闭操作。


只记录日志的同步钩子应显式 return true；同步 undefined 表示仍在等待回调。注意：以前返回 `Promise<void>` 却不调用 done 的异步钩子，现在会在 Promise 完成后放行。


<demo src="./__demos__/guard-protocol.vue"></demo>


Promise 与 done 共用一次完成状态：`false` / `done(false)` 阻止，`true` / `done()` 允许；Promise&lt;void&gt; 正常完成允许。重复完成只生效一次，异常触发 guard-error，取消或卸载后迟到结果无效。此类关闭/确认回调同步返回 void 时保留原回调协议，等待 done。


守卫统一使用 `(payload, done, context)`：关闭 payload 为 `{ action }`，切换和提交为 `{ value, previousValue }`，Popup 为 `{ reason }`。context 提供 `signal` 和可选原始 `event`。返回 boolean/Promise，或调用 done()/done(false)；同步 void 等待 done，Promise&lt;void&gt; 放行。首次完成生效。等待期间自动管理 loading/disabled，取消后旧结果失效，不暴露内部按钮 refs。

## 阅读方向

继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部覆盖。抽屉 placement 的 left/right 保持物理侧，进入/退出仍从对应屏幕边缘运动；标题、内容和底部动作继承阅读方向。方向切换不提交或清空内容。

## 使用说明

### 异步操作反馈
before-* 等待期间显示加载反馈并标记 aria-busy；拒绝或失败后恢复，重复提交不再启动同一操作。普通事件返回的 Promise 不参与加载。

## API

### Drawer Props

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
| aria-label | 显式对话框名称，优先于自动标题名称 | `string` | - |
| close-button-aria-label | 关闭按钮的可访问名称 | `string` | `Close drawer` |
| overlay-animation-name | 遮罩动画名称 | `string` | `fade-drawer` |
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


### Drawer Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| update:open | 可见状态请求 | `boolean` |
| confirm / cancel | 点击对应操作按钮并获准关闭 | `Event` |
| open / close | 开始打开 / 开始关闭 | - |
| opened / closed | 打开 / 关闭动画结束 | - |
| click-overlay | 点击当前最上层遮罩 | `MouseEvent` |
| key-escape | 当前最上层抽屉收到 ESC | `KeyboardEvent` |
| guard-error | beforeClose 抛错或拒绝时通知；保持打开并结束等待 | `(error: unknown, action: DrawerAction)` |

### Drawer Slots

`default`、`header`、`title`、`footer`。`footer` 获得 `confirm`、`cancel`、`close` 三个方法。

footer 的 confirm、cancel、close 和内置按钮、遮罩、Esc 都是守卫请求，走 beforeClose；实例 confirm()/cancel() 也走守卫。实例 close()、Drawer.open() 返回句柄的 close()、父级直接设置 open=false 是不经过守卫的关闭命令，用于业务完成或主动退出，不额外发 confirm/cancel。受控实例的 close() 仍只请求 update:open(false)，父级拒绝时不会强改模型。直接关闭会终止当前守卫并使迟到结果失效；close() 返回 void，不等待离场，完成请监听 closed/onClosed。

这一职责与两端 Dialog 一致。Maple Popup 的 close()/requestClose() 和外部模型关闭属于可等待的守卫请求，返回 `Promise<boolean>`；不要将它们当作 Drawer 的直接关闭命令。Popup 的直接销毁仍由父级掌握。示例的“直接关闭”保留退出入口，不修改“允许关闭”选择，也不会伪装成守卫批准。

### 命令式调用

`Drawer.open(config)` 使用 camelCase 的同名配置，例如 `cancelButtonText`、`beforeClose`、`closeOnRouteChange`。通知事件使用 `onConfirm`、`onCancel`、`onOpen`、`onOpened`、`onClose`、`onClosed`、`onClickOverlay` 和 `onKeyEscape`。

```ts
import type { DrawerAction, DrawerConfig, DrawerProps } from '@cedar-design/ui'
```

## CSS Variables

内置淡入和四方向滑动在 `prefers-reduced-motion: reduce` 下关闭过渡及起始位移。自定义动画需由业务适配减少动态效果的偏好。

面板 bg 使用 surface-raised；overlay-bg 使用 sys-color-scrim；header-text-color／content-text-color 使用 content-primary，关闭按钮与标题共享 header-text-color；border-color 使用 border-default。几何、动效与层级保留 Drawer 既有默认值。Drawer 是 Cedar 平台组件，不在 Maple 创建空壳同名变量。

overlay-style 可设置实例遮罩变量，drawer-style 可设置面板内变量；两者是兄弟节点，变量不会互相继承。全局主题在实际共同祖先设置 system 变量。显式背景属性优先于变量消费。

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-drawer-bg` | `var(--c-sys-color-surface-raised)` | `background-color` |
| `--c-drawer-border-color` | `var(--c-sys-color-border-default)` | `border-bottom`, `border-top` |
| `--c-drawer-border-width` | `var(--c-border-width-1)` | `border-bottom`, `border-top` |
| `--c-drawer-close-btn-margin-left` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-drawer-close-icon-font-size` | `var(--c-size-3)` | `font-size` |
| `--c-drawer-content-padding-vertical` | `var(--c-spacing-6)` | `padding` |
| `--c-drawer-content-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-drawer-footer-button-margin-left` | `var(--c-spacing-6)` | `margin-inline-start` |
| `--c-drawer-footer-padding-vertical` | `var(--c-spacing-7)` | `padding` |
| `--c-drawer-header-font-size` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-drawer-header-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-drawer-header-height` | `var(--c-size-12)` | `height` |
| `--c-drawer-header-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-drawer-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-drawer-overlay-bg` | `var(--c-sys-color-scrim)` | `background-color` |
| `--c-drawer-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-drawer-transition-duration` | `var(--c-transition-duration-3)` | `transition` |
| `--c-drawer-transition-timing-function` | `var(--c-transition-timing-function-standard)` | `transition` |
| `--c-drawer-z-index` | `var(--c-z-index-drawer)` | `z-index` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-drawer-border-color: var(--c-sys-color-border-default);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
