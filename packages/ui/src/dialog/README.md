---
permalink: /components/dialog/
---

# Dialog

`draggable` 开启时，标题中的 input、textarea、button、带 href 的链接和可编辑内容保留原生指针行为，不启动拖动；普通标题区域仍可拖动。非居中模式支持数字 `top=0`，与字符串 `0px` 一样表示距顶部零像素。

在当前页面打开一个浮层，承载相关操作。组件式与函数式 API 命名一致。

## 基础示例

### 基本用法

<demo src="./__demos__/basic.vue"></demo>

## 调用方式与内容

### 函数调用

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `title` | 标题 | 确认框、弹出层表单、简洁模式 |
| `type` | 类型图标：`info` `success` `warning` `error` | 确认框、简洁模式 |
| `message` | 内容（也可用 default 插槽） | 确认框、简洁模式 |
| `before-close` | 返回 boolean/Promise 或调用 done；首次完成生效 | 弹出层表单 |
| `simple` | 简洁布局（紧凑 padding、footer 居中） | 简洁模式 |
<!-- demo-config-notes:end -->

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

### 简洁模式

`simple` 适合内容简短、操作聚焦的对话框。

<demo src="./__demos__/simple.vue"></demo>

### 函数调用的挂载目标

函数调用保留显式配置或 `setDefaultOptions` 中的 `popupContainer`，复用组件的选择器/HTMLElement 解析；缺失或非法选择器按组件规则回退 body。默认挂载 body，`false` 则在服务自己创建的 body 宿主内原地渲染。`handle.update({ popupContainer })` 迁移同一个对话框，保留内容状态和应用上下文；关闭后清理目标中的内容及服务宿主，不等待普通通知回调。自定义容器控制 DOM 挂载位置，视觉布局仍遵守 Dialog 定位和容纳块规则。

<demo src="./__demos__/service-container.vue"></demo>

## 尺寸与布局

### 弹窗尺寸与长内容

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `title` | 标题 | 去除内容边距、最大高度 |
| `body-style` | 内容区 style | 去除内容边距、最大高度 |
| `width` | 宽度 | 弹窗尺寸与长内容 |
| `fullscreen` | 全屏 | 弹窗尺寸与长内容 |
<!-- demo-config-notes:end -->

分别打开弹窗，比较宽度、全屏或长内容的可视范围；关闭当前弹窗后再打开另一种布局。

<details>
<summary>配置说明与使用限制</summary>

#### 对话框宽度

通过 `width` 自定义宽度。

</details>

<demo src="./__demos__/size-comparison.vue"></demo>

### 去除内容边距

通过 `body-class` / `body-style` 自定义内容区样式。

<demo src="./__demos__/no-padding.vue"></demo>

### 最大高度

<demo src="./__demos__/max-height.vue"></demo>

## 交互与定制

### 可拖动

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `unmount-on-close` | 关闭后卸载 | 定制按钮文字、高级属性 |
| `draggable` | 可拖动 | 可拖动 |
| `confirm-button-text` | 确认按钮文案 | 定制按钮文字 |
| `cancel-button-text` | 取消按钮文案 | 定制按钮文字 |
| `footer` | 是否展示 footer 区域 | 高级属性 |
| `type` | 类型图标：`info` `success` `warning` `error` | 高级属性 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/draggable.vue"></demo>

### 自定义底部

`footer` 插槽会暴露 `confirm`、`cancel` 和 `close` 方法，便于组合自定义操作。

<demo src="./__demos__/custom-footer.vue"></demo>

### 上下分割线

打开面板后，分别切换两个开关，对比上、下分割线。初始均关闭。

<demo src="./__demos__/dividers.vue"></demo>

### 定制按钮文字

<demo src="./__demos__/custom-text.vue"></demo>

### 高级属性

组合 `footer`、`hide-title`、`body-class` / `body-style` 和 `unmount-on-close` 控制对话框的渲染行为。

<demo src="./__demos__/advanced.vue"></demo>

## 异步与关闭控制

### 异步关闭

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `before-close` | 返回 boolean/Promise 或调用 done；首次完成生效 | 异步关闭、before 钩子与 done 兼容 |
| `title` | 标题 | 异步关闭 |
| `message` | 内容（也可用 default 插槽） | 异步关闭 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/async.vue"></demo>

### 关闭守卫

`beforeClose({ action }, done, context)` 用于拦截关闭操作。


只记录日志的同步钩子应显式 return true；同步 undefined 表示仍在等待回调。注意：以前返回 `Promise<void>` 却不调用 done 的异步钩子，现在会在 Promise 完成后放行。


<demo src="./__demos__/guard-protocol.vue"></demo>


Promise 与 done 共用一次完成状态：`false` / `done(false)` 阻止，`true` / `done()` 允许；Promise&lt;void&gt; 正常完成允许。重复完成只生效一次，异常触发 guard-error，取消或卸载后迟到结果无效。此类关闭/确认回调同步返回 void 时保留原回调协议，等待 done。


守卫统一使用 `(payload, done, context)`：关闭 payload 为 `{ action }`，切换和提交为 `{ value, previousValue }`，Popup 为 `{ reason }`。context 提供 `signal` 和可选原始 `event`。返回 boolean/Promise，或调用 done()/done(false)；同步 void 等待 done，Promise&lt;void&gt; 放行。首次完成生效。等待期间自动管理 loading/disabled，取消后旧结果失效，不暴露内部按钮 refs。

## 阅读方向

继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部覆盖。内容、标题与动作间距使用逻辑起止位置；外部弹层继承来源方向。关闭、确认、取消和未提交状态不因方向切换改变。

## 使用说明

### 异步操作反馈
before-* 等待期间显示加载反馈并标记 aria-busy；拒绝或失败后恢复，重复提交不再启动同一操作。普通事件返回的 Promise 不参与加载。

函数调用的通知回调不控制任务完成。服务的选择或关闭结果独立于回调异常结算，关闭完成时仍会清理所属宿主。异常继续通过调用方或 Vue 错误通道传递；回调返回 Promise 不控制 loading 或关闭。

### 拖动与取消
标题拖动只由发起手势的主指针控制。停用 `draggable`、关闭、进入全屏、丢失指针捕获或所属窗口失焦、停用以及卸载都会结束当前手势并释放监听和捕获。重新启用后需发起新手势，不会接续旧指针；停用保留当前偏移，全屏和原有关闭结束后的重置恢复默认位置。监听归属标题元素所在文档。

## API

### Dialog Props

分割线与 Card 保持一致，默认均关闭；可通过 `top-divider`、`bottom-divider` 分别开启，仅在对应头部或底部区域存在时显示。Dialog 的简洁模式与函数式调用同样支持，函数式参数使用 `topDivider`、`bottomDivider`。

| 参数名                    | 描述                                         | 类型                             | 默认值       |
| ------------------------- | -------------------------------------------- | -------------------------------- | ------------ |
| top-divider | 标题与内容之间的分割线 | `boolean` | `false` |
| bottom-divider | 内容与底部之间的分割线 | `boolean` | `false` |
| dir | 阅读方向；省略时继承来源作用域。物理 left/right 方位保持原意。 | `ReadingDirection` (`ltr` / `rtl`) | — |
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
| `close-on-route-change`   | 浏览器历史或 hash 变化时关闭                 | `boolean`                        | `false`      |
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
| `confirm-button-props`    | 确认按钮 props；默认 primary + default，可覆盖                               | `ButtonProps`                    | `-`          |
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
| `before-close` | 返回 boolean/Promise 或调用 done；首次完成生效 | `DialogBeforeClose` | — |

### Dialog Events

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

内置按钮、遮罩、Esc、footer 插槽方法及实例 confirm()/cancel() 发起 beforeClose 守卫请求。实例 close()、函数返回句柄 close()、Dialog.close() 和父级 open=false 为直接关闭命令，不经过守卫；受控实例仍由父级决定是否接受 update:open(false)。直接关闭会退役等待中的守卫，旧结果不能关闭重开的实例。close 不代表离场结束，使用 closed/onClosed 观察完成。Maple Popup 的 close()/requestClose() 则是返回 `Promise<boolean>` 的守卫请求，不能混作直接关闭命令。

### Dialog Slots

| 插槽名    | 描述 | 参数                         |
| --------- | ---- | ---------------------------- |
| `default` | 内容 | `-`                          |
| `title`   | 标题 | `-`                          |
| `footer`  | 底部 | `cancel`, `confirm`, `close` |

确认与取消按钮默认使用 Button 的 `default` 状态和 `text` 变体；可通过 `confirmButtonProps` / `cancelButtonProps` 覆盖。

### Dialog Methods

所有函数式 Dialog 默认使用简洁布局（`simple: true`）并隐藏右上角关闭按钮（`closable: false`），仍可通过传入参数或全局默认配置显式覆盖。

## Types

### DialogConfig

与组件 props 一致（camelCase），另支持：

| 参数名        | 描述                               | 类型                       |
| ------------- | ---------------------------------- | -------------------------- |
| `content`     | 可渲染内容；设置时优先于 `message` | `RenderContent`            |
| `footer`      | 是否展示 footer 或自定义 footer    | `boolean \| RenderContent` |
| `onConfirm`   | 确认回调                           | `(e?: Event) => void`      |
| `onCancel`    | 取消回调                           | `(e?: Event) => void`      |
| `onClickOverlay` | 点击背景层回调                       | `() => void`               |
| `onKeyEscape` | ESC 回调                           | `() => void`               |

### DialogMethod

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

### DialogReturn

| 属性             | 描述     |
| ---------------- | -------- |
| `close()`        | 关闭     |
| `update(config)` | 更新配置 |

安装后可通过 `app.config.globalProperties.$dialog` 调用。

```ts
import type {
  DialogAction,
  DialogConfig,
  DialogMethod,
  DialogReturn,
  DialogService,
  DialogType,
} from "@cedar-design/ui-vue";
```

## CSS Variables

普通和简洁模式随内容自然撑开，最大高度为 `90dvh`（不支持时回退 `90vh`）。超出时仅正文滚动，标题和操作区保持可见。通过 `--c-dialog-max-height` 或 `dialogStyle.maxHeight` 覆盖；全屏模式使用完整视口高度。非居中模式的默认顶部偏移限制在 `5dvh`（回退 `5vh`）以内；显式 `top` 仍由使用方控制。

Dialog 的公开颜色变量与 Maple 同义：`--c-dialog-background` 表示浮层背景（`surface-raised`），`--c-dialog-overlay-background` 表示遮罩，`--c-dialog-title-text-color` 和 `--c-dialog-content-text-color` 表示主要内容，`--c-dialog-close-button-color` 表示次要操作；`--c-dialog-status-{info|success|warning|danger}-color` 对应可读状态内容色（content-info/success/warning/danger），不是状态填充色。业务主题优先覆盖这些组件变量，跨组件主题则覆盖相应的 system 变量。边框、宽度、间距和布局仍遵循桌面端规格。

遮罩通过 Dialog 组件变量消费 `sys-color-scrim`；Dialog 的遮罩颜色由自身变量控制。实例遮罩变量可放在 `overlay-style` 上；放在面板 `dialog-style` 上的变量不会继承给兄弟遮罩节点。显式 `overlay-style.backgroundColor` 优先。Teleport 场景需要在实际 DOM 祖先作用域设置变量。暗色主题继承同一套颜色语义；几何保留平台差异。状态图标使用可读的 content 状态色。

变量按用途分组：background／overlay-background 是面板与遮罩；border-* 是面板或分隔线边框；title-* 是标题排版；content-* 是正文排版；actions-* 是操作区；close-button-* 是关闭按钮；status-* 是语义图标；simple-*／fullscreen-* 是对应模式的尺寸；animation-* 是入退场动效。width／margin-top 控制常规面板布局。内部拖动与定位变量不构成公开定制入口。

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-dialog-actions-button-gap` | `var(--c-sys-space-6)` | `margin-inline-start` |
| `--c-dialog-actions-padding` | `var(--c-sys-space-7) var(--c-sys-space-8)` | `padding` |
| `--c-dialog-animation-duration` | `var(--c-sys-motion-duration-slow)` | `transition` |
| `--c-dialog-animation-easing` | `var(--c-sys-motion-easing-standard)` | `transition` |
| `--c-dialog-background` | `var(--c-sys-color-surface-raised)` | `background-color` |
| `--c-dialog-border-color` | `var(--c-sys-color-border-default)` | `border-bottom`, `border-top` |
| `--c-dialog-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-dialog-border-width` | `1px` | `border-bottom`, `border-top` |
| `--c-dialog-close-button-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-dialog-close-button-font-size` | `var(--c-sys-font-size-lg)` | `font-size` |
| `--c-dialog-close-button-inset-inline-end` | `var(--c-sys-space-7)` | `inset-inline-end` |
| `--c-dialog-close-button-size` | `32px` | `height`, `width` |
| `--c-dialog-content-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-dialog-content-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-dialog-content-padding` | `28px var(--c-sys-space-8)` | `padding` |
| `--c-dialog-content-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-dialog-fullscreen-height` | `100vh`<br>`100dvh` | `height` |
| `--c-dialog-fullscreen-width` | `100vw` | `width` |
| `--c-dialog-margin-top` | `min(100px, 5vh)`<br>`min(100px, 5dvh)` | `top` |
| `--c-dialog-max-height` | `90vh`<br>`90dvh` | `max-height` |
| `--c-dialog-overlay-background` | `var(--c-sys-color-scrim)` | `background-color` |
| `--c-dialog-simple-actions-gap` | `32px` | `margin-top` |
| `--c-dialog-simple-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-dialog-simple-content-gap` | `28px` | `margin-bottom` |
| `--c-dialog-simple-padding` | `28px 32px 32px` | `padding` |
| `--c-dialog-simple-width` | `400px` | `width` |
| `--c-dialog-status-danger-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-dialog-status-icon-gap` | `var(--c-sys-space-5)` | `margin-inline-end` |
| `--c-dialog-status-icon-size` | `18px` | `font-size` |
| `--c-dialog-status-info-color` | `var(--c-sys-color-content-info)` | `color` |
| `--c-dialog-status-success-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-dialog-status-warning-color` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-dialog-title-font-size` | `var(--c-sys-font-size-lg)` | `font-size` |
| `--c-dialog-title-font-weight` | `var(--c-sys-font-weight-medium)` | `font-weight` |
| `--c-dialog-title-justify` | `center` | `justify-content` |
| `--c-dialog-title-min-height` | `48px` | `min-height` |
| `--c-dialog-title-padding` | `0 var(--c-sys-space-8)` | `padding` |
| `--c-dialog-title-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-dialog-width` | `520px` | `width` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-dialog-actions-button-gap: var(--c-sys-space-6);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
