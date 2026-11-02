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

### before 钩子与 done 兼容

`beforeConfirm(done) / beforeCancel(done)` 为统一入口，不新增另一套命名。


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

## 阅读方向

继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部覆盖。内容与动作采用逻辑对齐，确认与取消顺序按阅读方向排列；方向切换不触发确认或取消，显式弹出方位仍沿用原有物理/逻辑约定。

## API

### `<popconfirm>` Props

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
| `before-cancel` | 返回 boolean/Promise 或调用 done；首次完成生效 | `PopconfirmBeforeConfirm` | — |

### `<popconfirm>` Events

| 事件名               | 描述                           | 参数               |
| -------------------- | ------------------------------ | ------------------ |
| open-change | 气泡确认框的显隐状态改变时触发 | open: `boolean` |
| confirm              | 点击确认按钮时触发             | -                  |
| cancel               | 点击取消按钮时触发             | -                  |

### `<popconfirm>` Slots

| 插槽名  | 描述 | 参数 |
| ------- | :--: | ---- |
| icon    | 图标 | -    |
| content | 内容 | -    |

### 类型定义

组件导出以下类型定义

```ts
import type { PopconfirmInstance } from '@cedar-design/ui'
```


### 方位语义与配置入口

placement 直接复用 TriggerPlacement / triggerPlacements；旧 TriggerPosition / TRIGGER_POSITIONS 别名已删除，方位值域不变。

### 守卫等待反馈

before-* 等待期间显示加载反馈并标记 aria-busy；拒绝或失败后恢复，重复提交不再启动同一操作。普通事件返回的 Promise 不参与加载。
