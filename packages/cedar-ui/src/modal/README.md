---
permalink: /components/modal/
---

# Modal

在当前页面打开一个浮层，承载相关操作。

## 案例

### 基本用法

对话框的基本用法。

<demo src="./__demos__/basic.vue"></demo>

<br />

### 异步关闭

可以通过 on-before-ok 更简洁的实现异步关闭功能

<demo src="./__demos__/async.vue"></demo>

<br />

### 函数调用

通过函数的方式使用对话框。

<demo src="./__demos__/global.vue"></demo>

<br />

### 弹出层表单

在对话框中使用表单

<demo src="./__demos__/form.vue"></demo>

<br />

### 确认框

确认提示框，需要手动设置`hideCancel`
<demo src="./__demos__/confirm.vue"></demo>

<br />

### 消息提示

有 `info`, `success`, `warning`, `error` 四种类型的消息提示。
消息默认会默认开启`simple`和`hideCancel`，如果想要取消可以再次设置。

<demo src="./__demos__/message.vue"></demo>

<br />

### 对话框宽度

通过设置`size`属性调整对话框的宽度，有 `sm`,`md`,`lg`三种宽度尺寸，默认为`md`。也可通过`width`属性自定义宽度。

<demo src="./__demos__/width.vue"></demo>

<br />

### 定制按钮文字

设置 `okText` 与 `cancelText` 可以自定义按钮文字。

<demo src="./__demos__/custom-text.vue"></demo>

<br />

### 可拖动

开启 `draggable` 属性，允许用户拖动对话框。

<demo src="./__demos__/draggable.vue"></demo>

<br />

### 全屏

开启 `fullscreen` 属性，可以让对话框占满整个容器。

<demo src="./__demos__/fullscreen.vue"></demo>

### 去除content边距

通过`body-class  `属性可以去除modal-body的边距，可以自行处理边距。

<demo src="./__demos__/no-padding.vue"></demo>

### 最大高度限制

对话框的最大高度限制为90%或1200px，取两者中的最小值，超出高度会出现滚动条。
<demo src="./__demos__/max-height.vue"></demo>

<br />

<br />

## API

### `<Modal>` Props

| 参数名                | 描述                                                                                      | 类型                                                                                |                  默认值                   |
| --------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | :---------------------------------------: |
| visible **(v-model)** | 对话框是否可见                                                                            | `boolean`                                                                           |                    `-`                    |
| default-visible       | 对话框默认是否可见（非受控状态）                                                          | `boolean`                                                                           |                  `false`                  |
| width                 | 对话框的宽度，不设置的情况下优先使用size尺寸的宽度                                        | `number\|string` <br/>                                                              |                    `-`                    |
| top                   | 对话框的距离顶部的高度，居中显示开启的情况下不生效                                        | `number\|string`                                                                    |                    `-`                    |
| mask                  | 是否显示遮罩层                                                                            | `boolean`                                                                           |                  `true`                   |
| title                 | 标题                                                                                      | `string`                                                                            |                    `-`                    |
| title-align           | 标题的水平对齐方向                                                                        | `'start' \| 'center'`                                                               |                `'center'`                 |
| align-center          | 对话框是否居中显示                                                                        | `boolean`                                                                           |                  `true`                   |
| unmount-on-close      | 关闭时是否卸载节点                                                                        | `boolean`                                                                           |                  `false`                  |
| mask-closable         | 是否点击遮罩层可以关闭对话框                                                              | `boolean`                                                                           |                  `true`                   |
| hide-cancel           | 是否隐藏取消按钮                                                                          | `boolean`                                                                           |                  `false`                  |
| simple                | 是否开启简单模式                                                                          | `boolean`                                                                           | `(props: any) => { return props.notice;}` |
| closable              | 是否显示关闭按钮                                                                          | `boolean`                                                                           |                  `true`                   |
| ok-text               | 确认按钮的内容                                                                            | `string`                                                                            |                    `-`                    |
| cancel-text           | 取消按钮的内容                                                                            | `string`                                                                            |                    `-`                    |
| ok-loading            | 确认按钮是否为加载中状态                                                                  | `boolean`                                                                           |                  `false`                  |
| ok-button-props       | 确认按钮的 Props                                                                          | `object`                                                                            |                    `-`                    |
| cancel-button-props   | 取消按钮的 Props                                                                          | `object`                                                                            |                     -                     |
| footer                | 是否展示页脚部分                                                                          | `boolean`                                                                           |                  `true`                   |
| render-to-body        | 对话框是否挂载在 `body` 元素下                                                            | `boolean`                                                                           |                  `true`                   |
| popup-container       | 弹出框的挂载容器                                                                          | `string \| HTMLElement`                                                             |                 `'body'`                  |
| mask-style            | 蒙层的样式                                                                                | `CSSProperties`                                                                     |                     -                     |
| modal-class           | 对话框的类名                                                                              | `string \| any[]`                                                                   |                     -                     |
| modal-style           | 对话框的样式                                                                              | `CSSProperties`                                                                     |                     -                     |
| on-before-ok          | 触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。 | `( done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>` |                    `-`                    |
| on-before-cancel      | 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。                         | `() => boolean`                                                                     |                     -                     |
| esc-to-close          | 是否支持 ESC 键关闭对话框                                                                 | `boolean`                                                                           |                  `true`                   |
| draggable             | 是否支持拖动                                                                              | `boolean`                                                                           |                  `false`                  |
| fullscreen            | 是否开启全屏                                                                              | `boolean`                                                                           |                  `false`                  |
| mask-animation-name   | 遮罩层动画名字                                                                            | `string`                                                                            |                     -                     |
| modal-animation-name  | 对话框动画名字                                                                            | `string`                                                                            |                     -                     |
| body-class            | 对话框内容部分的类名                                                                      | `string \| any[]`                                                                   |                     -                     |
| body-style            | 对话框内容部分的样式                                                                      | `StyleValue`                                                                        |                     -                     |
| hide-title            | 是否隐藏标题                                                                              | `boolean`                                                                           |                  `false`                  |
| body-padding          | content的边距                                                                             | `boolean`                                                                           |                  `true`                   |
| size                  | 对话框的宽度尺寸                                                                          | `sm` \| `md` \| `lg`                                                                |                   `md`                    |

### `<Modal>` Events

| 事件名       | 描述                         | 参数                                            |
| ------------ | ---------------------------- | ----------------------------------------------- |
| ok           | 点击确定按钮时触发           | `(event: MouseEvent) => void`                   |
| cancel       | 点击取消、关闭按钮时触发     | `(event: MouseEvent \| KeyboardEvent ) => void` |
| open         | 对话框打开后（动画结束）触发 | -                                               |
| close        | 对话框关闭后（动画结束）触发 | -                                               |
| before-open  | 对话框打开前触发             | -                                               |
| before-close | 对话框关闭前触发             | -                                               |

### `<Modal>` Slots

| 插槽名 | 描述 | 参数 |
| ------ | :--: | ---- |
| title  | 标题 | -    |
| footer | 页脚 | -    |

### `<Modal>`全局方法

#### ModalConfig

| 参数名             | 描述                                                                                      | 类型                                                                                 |  默认值  |
| ------------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | :------: |
| title              | 标题                                                                                      | `RenderContent`                                                                      |    -     |
| content            | 内容                                                                                      | `RenderContent`                                                                      |    -     |
| footer             | 页脚                                                                                      | `boolean \| RenderContent`                                                           |  `true`  |
| closable           | 是否显示关闭按钮                                                                          | `boolean`                                                                            |  `true`  |
| okText             | 确认按钮的内容                                                                            | `string`                                                                             |    -     |
| cancelText         | 取消按钮的内容                                                                            | `string`                                                                             |    -     |
| okButtonProps      | 确认按钮的 Props                                                                          | `ButtonProps`                                                                        |    -     |
| cancelButtonProps  | 取消按钮的 Props                                                                          | `ButtonProps`                                                                        |    -     |
| okLoading          | 确认按钮是否为加载中状态                                                                  | `boolean`                                                                            | `false`  |
| hideCancel         | 是否隐藏取消按钮                                                                          | `boolean`                                                                            | `false`  |
| mask               | 是否显示遮罩层                                                                            | `boolean`                                                                            |  `true`  |
| simple             | 是否开启简单模式                                                                          | `boolean`                                                                            | `false`  |
| maskClosable       | 是否点击遮罩层可以关闭对话框                                                              | `boolean`                                                                            |  `true`  |
| maskStyle          | 蒙层的样式                                                                                | `CSSProperties`                                                                      |    -     |
| alignCenter        | 对话框是否居中显示                                                                        | `boolean`                                                                            |  `true`  |
| escToClose         | 是否支持 ESC 键关闭对话框                                                                 | `boolean`                                                                            |  `true`  |
| draggable          | 是否支持拖动                                                                              | `boolean`                                                                            | `false`  |
| fullscreen         | 是否开启全屏                                                                              | `boolean`                                                                            | `false`  |
| onOk               | 点击确定按钮的回调函数                                                                    | `() => void`                                                                         |    -     |
| onCancel           | 点击取消按钮的回调函数                                                                    | `() => void`                                                                         |    -     |
| onBeforeOk         | 触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。 | `( done: (closed: boolean) => void ) => void \| boolean \| Promise<void \| boolean>` |   `-`    |
| onBeforeCancel     | 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。                         | `() => boolean`                                                                      |    -     |
| onOpen             | 对话框打开后（动画结束）触发                                                              | `() => void`                                                                         |    -     |
| onClose            | 对话框关闭后（动画结束）触发                                                              | `() => void`                                                                         |    -     |
| onBeforeOpen       | 对话框打开前触发                                                                          | `() => void`                                                                         |    -     |
| onBeforeClose      | 对话框关闭前触发                                                                          | `() => void`                                                                         |    -     |
| width              | 对话框的宽度，不设置的情况下会使用样式中的宽度值                                          | `number \| string`                                                                   |    -     |
| top                | 对话框的距离顶部的高度，居中显示开启的情况下不生效                                        | `number \| string`                                                                   |    -     |
| titleAlign         | 标题的水平对齐方向                                                                        | `'start' \| 'center'`                                                                | `center` |
| renderToBody       | 对话框是否挂载在 `body` 元素下                                                            | `boolean`                                                                            |  `true`  |
| popupContainer     | 弹出框的挂载容器                                                                          | `string \| HTMLElement`                                                              | `'body'` |
| modalClass         | 对话框的类名                                                                              | `string \| any[]`                                                                    |    -     |
| modalStyle         | 对话框的样式                                                                              | `CSSProperties`                                                                      |    -     |
| maskAnimationName  | 遮罩层动画名字                                                                            | `string`                                                                             |    -     |
| modalAnimationName | 对话框动画名字                                                                            | `string`                                                                             |    -     |
| hideTitle          | 是否隐藏标题                                                                              | `boolean`                                                                            | `false`  |
| bodyClass          | 对话框内容部分的类名                                                                      | `string \| any[]`                                                                    |    -     |
| bodyStyle          | 对话框内容部分的样式                                                                      | `StyleValue`                                                                         |    -     |

#### ModalMethod

| 参数名  | 描述                   | 类型                                                            | 默认值 |
| ------- | ---------------------- | --------------------------------------------------------------- | :----: |
| open    | 打开对话框             | `(config: ModalConfig, appContext?: AppContext) => ModalReturn` |   -    |
| confirm | 打开对话框（简单模式） | `(config: ModalConfig, appContext?: AppContext) => ModalReturn` |   -    |
| info    | 打开信息对话框         | `(config: ModalConfig, appContext?: AppContext) => ModalReturn` |   -    |
| success | 打开成功对话框         | `(config: ModalConfig, appContext?: AppContext) => ModalReturn` |   -    |
| warning | 打开警告对话框         | `(config: ModalConfig, appContext?: AppContext) => ModalReturn` |   -    |
| error   | 打开错误对话框         | `(config: ModalConfig, appContext?: AppContext) => ModalReturn` |   -    |

#### ModalReturn

| 参数名 | 描述       | 类型                                  | 默认值 |
| ------ | ---------- | ------------------------------------- | :----: |
| close  | 关闭对话框 | `() => void`                          |   -    |
| update | 更新对话框 | `(config: ModalUpdateConfig) => void` |   -    |

### 类型定义

组件导出以下类型定义

```ts
import type { ModalProps, ModalConfig, ModalMethod, ModalResult } from '@cedar/ui'
```
