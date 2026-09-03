---
permalink: /components/popconfirm/
---

# Popconfirm

点击元素，弹出气泡式的确认框。

## 案例

### 基础用法

折叠列表的基本使用方法。

<demo src="./__demos__/basic.vue"></demo>

### 自定义按钮

自定义按钮的文字或图标。

<demo src="./__demos__/custom.vue"></demo>

### 弹出位置

`popconfirm` 支持 12 个不同的方位。分别为：`上左` `上` `上右` `下左` `下` `下右` `左上` `左` `左下` `右上` `右` `右下`。

<demo src="./__demos__/placement.vue"></demo>

### 确认框类型

通过 `type` 属性可以设置确认框类型。

<demo src="./__demos__/type.vue"></demo>

## API

### `<popconfirm>` Props

| 参数名                      | 描述                                                                                      | 类型                                                                                                     |  默认值  |
| --------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | :------: |
| content                     | 内容                                                                                      | `string`                                                                                                 |   `-`    |
| placement                    | 弹出位置                                                                                  | `'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'` | `'top'`  |
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
| popup-container             | 弹出框的挂载点                                                                            | `string \| HTMLElement`                                                                                  |   `-`    |
| before-confirm                   | 触发 confirm 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。 | `(  done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>`                     |   `-`    |
| before-cancel               | 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。                         | `() => boolean`                                                                                          |   `-`    |

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
import type { PopconfirmInstance } from '@cedarjs/ui'
```
