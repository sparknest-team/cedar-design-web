---
permalink: /components/popconfirm/
---

# Popconfirm

点击元素，弹出气泡式的确认框。

## 基础示例

### 基础用法

点击按钮打开确认框；确认或取消后收起。示例只演示确认交互，不执行业务数据删除。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 确认框类型

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `content` | 内容 | 确认框类型 |
| `type` | 气泡确认框的类型 | 确认框类型 |
<!-- demo-config-notes:end -->

通过 `type` 属性可以设置确认框类型。

<demo src="./__demos__/type.vue"></demo>

## 布局与排列

### 弹出位置

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `content` | 内容 | 弹出位置 |
| `placement` | 浮层相对触发元素的首选方位，默认 top；启用默认的 auto-fit-position 时，空间不足会自动翻转并约束到可视区域，不保证最终停在该侧 | 弹出位置 |
<!-- demo-config-notes:end -->

`popconfirm` 支持 12 个不同的方位。分别为：`上左` `上` `上右` `下左` `下` `下右` `左上` `左` `左下` `右上` `右` `右下`。

<demo src="./__demos__/placement.vue"></demo>

## 内容与展示

### 关闭守卫

`beforeConfirm(payload, done, context)` 和 `beforeCancel(payload, done, context)` 分别接收确认或取消的 action、完成回调与上下文。


只记录日志的同步钩子应显式 return true；同步 undefined 表示仍在等待回调。注意：以前返回 `Promise<void>` 却不调用 done 的异步钩子，现在会在 Promise 完成后放行。


<demo src="./__demos__/guard-protocol.vue"></demo>


Promise 与 done 共用一次完成状态：`false` / `done(false)` 阻止，`true` / `done()` 允许；Promise&lt;void&gt; 正常完成允许。重复完成只生效一次，异常触发 guard-error，取消或卸载后迟到结果无效。此类关闭/确认回调同步返回 void 时保留原回调协议，等待 done。


守卫统一使用 `(payload, done, context)`：关闭 payload 为 `{ action }`，切换和提交为 `{ value, previousValue }`，Popup 为 `{ reason }`。context 提供 `signal` 和可选原始 `event`。返回 boolean/Promise，或调用 done()/done(false)；同步 void 等待 done，Promise&lt;void&gt; 放行。首次完成生效。等待期间自动管理 loading/disabled，取消后旧结果失效，不暴露内部按钮 refs。

## 自定义与插槽

### 自定义按钮

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `content` | 内容 | 自定义按钮 |
| `confirm-button-text` | 确认按钮的内容 | 自定义按钮 |
| `cancel-text` | 取消按钮的内容 | 自定义按钮 |
<!-- demo-config-notes:end -->

自定义按钮的文字或图标。

<demo src="./__demos__/custom.vue"></demo>

## 键盘与焦点

默认插槽应提供可聚焦的触发元素。打开后焦点进入非模态确认对话框；Tab 可进入按钮，Escape 请求关闭。关闭时若焦点仍在确认框内则返回触发元素；点击外部并把焦点移走时不会抢回焦点。受控模式下父组件未接受关闭请求，焦点保持在确认框中。

## 阅读方向

继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部覆盖。内容与动作采用逻辑对齐，确认与取消顺序按阅读方向排列；方向切换不触发确认或取消，显式弹出方位仍沿用原有物理/逻辑约定。

## 触发与定位

### 弹层位置

placement 直接使用 TriggerPlacement / triggerPlacements。

## API

### Popconfirm Props

| 参数名                      | 描述                                                                                      | 类型                                                                                                     |  默认值  |
| --------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | :------: |
| content                     | 内容                                                                                      | `string`                                                                                                 |   `-`    |
| placement                    | 浮层相对触发元素的首选方位，默认 top；启用默认的 auto-fit-position 时，空间不足会自动翻转并约束到可视区域，不保证最终停在该侧 | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `'top'`  |
| open **(v-model)** | 气泡确认框是否可见                                                                        | `boolean`                                                                                                |   `-`    |
| default-open       | 气泡确认框默认是否可见（非受控模式）                                                      | `boolean`                                                                                                | `false`  |
| type                        | 气泡确认框的类型                                                                          | `'info' \| 'success' \| 'warning' \| 'error'`                                                            | `'info'` |
| confirm-button-text                     | 确认按钮的内容                                                                            | `string`                                                                                                 |   `-`    |
| cancel-text                 | 取消按钮的内容                                                                            | `string`                                                                                                 |   `-`    |
| confirm-button-loading                  | 确认按钮是否为加载中状态                                                                  | `boolean`                                                                                                | `false`  |
| confirm-button-props             | 确认按钮的Props                                                                           | `ButtonProps`                                                                                            |   `-`    |
| cancel-button-props         | 取消按钮的Props                                                                           | `ButtonProps`                                                                                            |   `-`    |
| content-class               | 弹出框内容的类名                                                                          | `ClassName`                                                                                              |   `-`    |
| content-style               | 弹出框内容的样式                                                                          | `CSSProperties`                                                                                          |   `-`    |
| arrow-class                 | 弹出框箭头的类名                                                                          | `ClassName`                                                                                              |   `-`    |
| arrow-style                 | 弹出框箭头的样式                                                                          | `CSSProperties`                                                                                          |   `-`    |
| popup-container             | 弹出框的挂载点                                                                            | `string \| HTMLElement \| false`                                                                                  |   `-`    |
| `before-confirm` | 返回 boolean/Promise 或调用 done；首次完成生效 | `PopconfirmBeforeConfirm` | — |
| `before-cancel` | 返回 boolean/Promise 或调用 done；首次完成生效 | `PopconfirmBeforeCancel` | — |

### Popconfirm Events

| 事件名               | 描述                           | 参数               |
| -------------------- | ------------------------------ | ------------------ |
| update:open | 请求更新显示状态 | open: `boolean` |
| open-change | 显示状态更新请求通知；受控时父组件可能不接受 | open: `boolean` |
| guard-error | 守卫抛错或拒绝 Promise | error: `unknown`, action: `'confirm' \| 'cancel'` |
| confirm              | 点击确认按钮时触发             | -                  |
| cancel               | 点击取消按钮时触发             | -                  |

### Popconfirm Slots

| 插槽名  | 描述 | 参数 |
| ------- | :--: | ---- |
| default | 触发确认框的参考元素 | - |
| icon    | 图标 | -    |
| content | 内容 | -    |

## Types

组件导出以下类型定义

```ts
import type { PopconfirmInstance, PopconfirmProps, PopconfirmBeforeConfirm, PopconfirmBeforeCancel } from '@cedar-design/ui'
```


组件没有承诺公开的专用实例操作方法；内部 Trigger 方法和按钮引用不属于 Popconfirm 公共契约。

### 异步操作反馈

before-* 等待期间显示加载反馈并标记 aria-busy；拒绝或失败后恢复，重复提交不再启动同一操作。普通事件返回的 Promise 不参与加载。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-popconfirm-border-color` | `var(--c-color-neutral-3)` | `border` |
| `--c-popconfirm-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-popconfirm-border-width` | `var(--c-border-width-1)` | `border` |
| `--c-popconfirm-box-shadow` | `var(--c-shadow2-down)` | `box-shadow` |
| `--c-popconfirm-button-margin-left` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-popconfirm-content-bg` | `var(--c-color-bg-popup)` | `background-color` |
| `--c-popconfirm-content-text-color` | `var(--c-color-text-2)` | `color` |
| `--c-popconfirm-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-popconfirm-icon-margin-right` | `var(--c-spacing-4)` | `margin-inline-end` |
| `--c-popconfirm-line-height` | `var(--c-line-height)` | `height`, `line-height` |
| `--c-popconfirm-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-popconfirm-padding-vertical` | `var(--c-spacing-7)` | `padding` |
| `--c-popconfirm-status-danger-title-icon-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-popconfirm-status-info-title-icon-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-popconfirm-status-success-title-icon-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-popconfirm-title-font-size` | `var(--c-font-size-body-3)` | `font-size`, `height` |
| `--c-popconfirm-title-icon-color` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-popconfirm-title-icon-size` | `18px` | `font-size` |
| `--c-popconfirm-title-margin-bottom` | `var(--c-spacing-7)` | `margin-bottom` |
| `--c-popconfirm-title-text-color` | `var(--c-color-text-1)` | `color` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-popconfirm-border-color: var(--c-color-neutral-3);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
