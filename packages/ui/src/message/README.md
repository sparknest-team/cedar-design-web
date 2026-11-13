---
permalink: /components/message/
---

# Message 全局提示

用于展示轻量级、非模态的全局反馈。

## 基础示例

### 基本使用

直接调用 `Message(...)` 创建 `default` 提示。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 消息状态

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `status` | 语义状态 | 外观组合 |
| `position` | 消息自身在可视区域中的 top/center/bottom 区域，默认 top；不相对触发元素定位 | 外观组合 |
| `closable` | 是否显示关闭按钮 | 外观组合 |
| `duration` | 自动关闭时长（ms），`0` 不自动关闭 | 外观组合 |
| `variant` | 视觉强调层级 | 外观组合 |
<!-- demo-config-notes:end -->

状态统一为 `default / info / success / warning / danger / loading`。函数方法使用 `error`，组件状态使用标准语义 `danger`；普通提示直接调用 `Message(...)`，不提供 `normal` 别名。

<demo src="./__demos__/type.vue"></demo>

### 视觉变体

视觉变体与 status 独立：neutral 是中性浮层与状态图标；tonal 是低强调状态色底与深色正文；solid 是高强调实色底与配套前景。Cedar 与 Maple 默认均为 neutral；显式 solid / tonal 保持相同视觉语义。default/loading 的 solid 保留深色底，loading 图标仍表达进度。两端导出 MessageVariant，函数调用、setDefaultOptions 和相同 id 更新都支持 variant。

<demo src="./__demos__/variant.vue"></demo>

### 外观组合

适用于操作结果的即时反馈。调整变体、状态，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

<demo src="./__demos__/appearance-lab.vue"></demo>

## 布局与排列

### 位置

两端均支持 `top / center / bottom`。

<demo src="./__demos__/location.vue"></demo>

## 内容与展示

### 显示时长

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `status` | 语义状态 | 组件调用 |
| `position` | 消息自身在可视区域中的 top/center/bottom 区域，默认 top；不相对触发元素定位 | 组件调用 |
| `closable` | 是否显示关闭按钮 | 组件调用 |
| `duration` | 自动关闭时长（ms），`0` 不自动关闭 | 组件调用 |
<!-- demo-config-notes:end -->

`duration` 单位为毫秒，`0` 表示常驻；`Message.loading(...)` 默认常驻。

展示期限独立于 CSS 进出动效。重启、hover 暂停、清理或卸载使旧计时回调失效，关闭状态在回调执行时再次检查；不会用动效 Token 修改业务展示时长。

KeepAlive 停用取消计时，激活从当前配置完整 duration 重启；停用期间更新、卸载后保留的 restart 不调度。hover 正时长已耗尽时恢复会请求关闭，显式重置为0仍常驻。仅有限正 duration 自动关闭，负数和非有限值不调度。

服务等待真实离场完成再清理和调用 onClosed，不再强制150ms或200ms退出。未挂载就 close/clear 的条目直接清理；此时服务 onClosed 仍报告完成，但组件未产生 open/opened/close 动画事件。业务 duration 与 CSS 过渡时长分开。

启用减少动态效果时，关闭内置进出场过渡和装饰图标淡入，保留静态位置、颜色和展示时长；自定义图标动效由调用方适配。

<demo src="./__demos__/time.vue"></demo>

### 更新已有提示

同一挂载容器和位置内，相同 `id` 更新原实例，不创建重复 DOM。仅当 `resetOnUpdate` 为 `true` 时，更新会重新计算完整显示时长。

<demo src="./__demos__/update.vue"></demo>

### 悬停暂停

`pauseOnHover` 会保存剩余时间，鼠标离开后从剩余时间继续，而不是重新开始完整时长。

<demo src="./__demos__/pause-on-hover.vue"></demo>

### 组件调用

声明式组件适合由页面状态控制显示，并支持 `icon`、`action` 插槽和完整开关生命周期。

<demo src="./__demos__/component.vue"></demo>

## 自定义与插槽

### 自定义图标

<demo src="./__demos__/custom-icon.vue"></demo>

## 交互与控制

### 可关闭

<demo src="./__demos__/closable.vue"></demo>

### Loading 与多实例

<demo src="./__demos__/loading.vue"></demo>

<demo src="./__demos__/multiple.vue"></demo>

## 阅读方向

继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部覆盖。内容、图标与关闭按钮间距随阅读方向排列；方向切换不改变消息类型、计时或关闭语义。函数式调用遵循显式配置或文档方向。

## 使用说明

### 组件属性透传

`Message.Component` 的 `id`、`class`、`style`、`aria-*` 和原生事件监听器透传到实际 `role="alert"` 消息区域：Cedar 为消息根节点，Maple 为内部可见消息面板。每个属性只应用一次；内部必需角色和样式类保留，组件 `open` 等生命周期监听器不会绑定为同名 DOM 事件。原生属性会随父级更新，内联与 Teleport 模式使用同一规则。`dir` 继续决定消息的阅读方向。函数服务的 `id` 仍是更新同一消息的业务标识，不等同于组件的原生 DOM id。
### 配置说明

视觉变体与 status 独立：neutral 是中性浮层与状态图标；tonal 是低强调状态色底与深色正文；solid 是高强调实色底与配套前景。Cedar 与 Maple 默认均为 neutral；显式 solid / tonal 保持相同视觉语义。default/loading 的 solid 保留深色底，loading 图标仍表达进度。两端导出 MessageVariant，函数调用、setDefaultOptions 和相同 id 更新都支持 variant。

close/closed 通知回调抛错不会保留已关闭项目或空管理器宿主，资源清理独立于通知回调执行。

## API

### Message Options

| 属性                  | 说明                                   | 类型                                                         | 默认值          |
| --------------------- | -------------------------------------- | ------------------------------------------------------------ | --------------- |
| `open` | 是否显示（组件） 支持 `v-model:open`。 | `boolean` | `false` |
| id                    | 队列内唯一标识，相同 id 更新原实例     | `string \| number`                                           | 自动生成        |
| status                | 语义状态                               | `default \| info \| success \| warning \| danger \| loading` | `default`       |
| variant | 视觉强调层级 | `neutral \| tonal \| solid` | `neutral` |
| position              | 消息自身在可视区域中的 top/center/bottom 区域，默认 top；不相对触发元素定位 | `top \| center \| bottom`                                    | `top`           |
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

### Message Events

`update:open`、`open`、`opened`、`close`、`closed`；每次开关周期各触发一次。 服务端渲染的消息初始为打开时，激活阶段跳过首次入场动画，并在挂载时按 `open`、`opened` 的顺序触发事件。

### Message Methods

| 方法                                              | 说明                     |
| ------------------------------------------------- | ------------------------ |
| `Message(options \| string)`                      | 打开默认提示             |
| `Message.info/success/warning/error/loading(...)` | 打开对应状态提示         |
| `Message.clear(position?)`                        | 清空全部或指定位置的提示 |
| `Message.setDefaultOptions(options)`              | 设置后续调用的默认值     |
| `Message.resetDefaultOptions()`                   | 恢复默认值               |

返回 `{ close() }`；重复调用 `close()` 不会重复触发关闭生命周期。句柄绑定具体消息项：相同 id 更新原项时旧句柄仍有效；原项离场完成后复用 id，新项不会被旧句柄关闭。

函数第二参数 appContext 对每条消息生效，内容中的注入、全局组件、全局属性和错误处理使用该应用上下文；它不会自动捕获调用处的局部 Provider。不同应用仍共享同一容器和位置的队列与排列顺序，Message.clear 也继续跨应用清理。每次调用优先显式上下文，其次 install 设置的当前默认上下文；更新原项且没有可用上下文时保留原作用域。相同 id 改用另一可用上下文会重建该项展示并按 duration 重新计时，原业务句柄仍有效；其他消息的展示和计时不受影响。

`Message.Component` 是具有真实 Props 和实例类型的声明式组件；`restartTimer()` 为组件实例方法，只在已激活、open 且 resetOnUpdate=true 时重新计时。它不是函数服务句柄的方法，hover 暂停时只重置保存的剩余时间。

| 组件实例方法 | 说明 |
| ---- | ---- |
| restartTimer() | 按当前 duration 重置计时；受 active、open、resetOnUpdate 与 hover 暂停约束 |

`MessageContent` 为 `VNodeChild | (() => VNodeChild)`：支持文字、数字、布尔空内容、VNode、嵌套子节点数组及同步渲染函数。任意普通对象和异步任务不是内容协议。content、icon、action 使用相同规则，本地插槽优先。

duration 应为有限非负数；负数、NaN、Infinity 等非法值不调度自动关闭，并在开发环境触发属性校验提示。0 表示常驻，restartTimer 仍遵守相同规则。

### Message Slots

`default`、`icon`、`action`。


消息层级会自动保持在当前文档内活动的弹层之上，也会跟随新打开的弹层和显式 `zIndex` 的变化。消息不会接管弹窗焦点或 Esc 处理。`--c-message-z-index` 用于设置消息层级下限；自定义挂载容器仍需避免被祖先的层叠上下文或裁剪限制。

## CSS Variables

颜色命名为 `--c-message-{variant}-{status}-{bg|content-color|icon-color|border-color|close-color}`。bg 控制面板底，content-color 控制正文与未单独设色的 action，icon-color 控制状态图标，border-color 控制边线，close-color 控制关闭按钮。自定义背景时需要同时验证三个前景。几何变量保留端侧密度，不要求两端强行同值。变量必须作用于实际 Teleport 容器祖先。

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-message-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-message-border-style` | `solid` | `border` |
| `--c-message-border-width` | `1px` | `border` |
| `--c-message-box-shadow` | `var(--c-shadow2-down)` | `box-shadow` |
| `--c-message-close-btn-margin-left` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-message-close-icon-font-size` | `12px` | `font-size` |
| `--c-message-close-icon-hover-opacity` | `0.08` | `opacity` |
| `--c-message-close-icon-hover-size` | `20px` | `height`, `width` |
| `--c-message-content-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-message-icon-font-size` | `20px` | `font-size` |
| `--c-message-icon-margin-right` | `var(--c-spacing-4)` | `margin-inline-end`, `margin-inline-start` |
| `--c-message-margin-bottom` | `var(--c-spacing-7)` | `margin-bottom` |
| `--c-message-neutral-danger-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-message-neutral-danger-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-message-neutral-danger-close-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-message-neutral-danger-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-neutral-danger-icon-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-message-neutral-default-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-message-neutral-default-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-message-neutral-default-close-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-message-neutral-default-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-neutral-default-icon-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-neutral-info-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-message-neutral-info-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-message-neutral-info-close-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-message-neutral-info-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-neutral-info-icon-color` | `var(--c-sys-color-content-info)` | `color` |
| `--c-message-neutral-loading-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-message-neutral-loading-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-message-neutral-loading-close-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-message-neutral-loading-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-neutral-loading-icon-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-message-neutral-success-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-message-neutral-success-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-message-neutral-success-close-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-message-neutral-success-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-neutral-success-icon-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-message-neutral-warning-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-message-neutral-warning-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-message-neutral-warning-close-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-message-neutral-warning-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-neutral-warning-icon-color` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-message-padding-bottom` | `var(--c-spacing-5)` | `padding` |
| `--c-message-padding-left` | `var(--c-spacing-7)` | `padding` |
| `--c-message-padding-right` | `var(--c-spacing-7)` | `padding` |
| `--c-message-padding-top` | `var(--c-spacing-5)` | `padding` |
| `--c-message-solid-danger-bg` | `var(--c-sys-color-status-danger)` | `background-color` |
| `--c-message-solid-danger-border-color` | `transparent` | `border-color` |
| `--c-message-solid-danger-close-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-danger-content-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-danger-icon-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-default-bg` | `#333` | `background-color` |
| `--c-message-solid-default-border-color` | `transparent` | `border-color` |
| `--c-message-solid-default-close-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-message-solid-default-content-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-message-solid-default-icon-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-message-solid-info-bg` | `var(--c-sys-color-status-info)` | `background-color` |
| `--c-message-solid-info-border-color` | `transparent` | `border-color` |
| `--c-message-solid-info-close-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-info-content-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-info-icon-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-loading-bg` | `#333` | `background-color` |
| `--c-message-solid-loading-border-color` | `transparent` | `border-color` |
| `--c-message-solid-loading-close-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-message-solid-loading-content-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-message-solid-loading-icon-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-message-solid-success-bg` | `var(--c-sys-color-status-success)` | `background-color` |
| `--c-message-solid-success-border-color` | `transparent` | `border-color` |
| `--c-message-solid-success-close-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-success-content-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-success-icon-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-warning-bg` | `var(--c-sys-color-status-warning)` | `background-color` |
| `--c-message-solid-warning-border-color` | `transparent` | `border-color` |
| `--c-message-solid-warning-close-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-warning-content-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-warning-icon-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-tonal-danger-bg` | `var(--c-color-danger-light-1)` | `background-color` |
| `--c-message-tonal-danger-border-color` | `transparent` | `border-color` |
| `--c-message-tonal-danger-close-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-danger-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-danger-icon-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-message-tonal-default-bg` | `var(--c-sys-color-surface-muted)` | `background-color` |
| `--c-message-tonal-default-border-color` | `transparent` | `border-color` |
| `--c-message-tonal-default-close-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-default-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-default-icon-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-info-bg` | `rgba(var(--c-blue-6), 0.12)` | `background-color` |
| `--c-message-tonal-info-border-color` | `transparent` | `border-color` |
| `--c-message-tonal-info-close-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-info-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-info-icon-color` | `var(--c-sys-color-content-info)` | `color` |
| `--c-message-tonal-loading-bg` | `var(--c-color-primary-light-1)` | `background-color` |
| `--c-message-tonal-loading-border-color` | `transparent` | `border-color` |
| `--c-message-tonal-loading-close-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-loading-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-loading-icon-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-message-tonal-success-bg` | `var(--c-color-success-light-1)` | `background-color` |
| `--c-message-tonal-success-border-color` | `transparent` | `border-color` |
| `--c-message-tonal-success-close-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-success-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-success-icon-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-message-tonal-warning-bg` | `var(--c-color-warning-light-1)` | `background-color` |
| `--c-message-tonal-warning-border-color` | `transparent` | `border-color` |
| `--c-message-tonal-warning-close-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-warning-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-warning-icon-color` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-message-transition-duration` | `var(--c-transition-duration-1)` | `animation`, `transition` |
| `--c-message-transition-duration-icon` | `var(--c-transition-duration-4)` | `animation` |
| `--c-message-transition-timing-function` | `var(--c-transition-timing-function-linear)` | `animation`, `transition` |
| `--c-message-transition-timing-function-icon` | `var(--c-transition-timing-function-overshoot)` | `animation` |
| `--c-message-wrapper-margin-bottom` | `var(--c-spacing-12)` | `bottom` |
| `--c-message-wrapper-margin-top` | `var(--c-spacing-12)` | `top` |
| `--c-message-wrapper-padding-horizontal` | `var(--c-spacing-5)` | `padding` |
| `--c-message-z-index` | `var(--c-z-index-message)` | `z-index` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-message-border-radius: var(--c-border-radius-sm);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
