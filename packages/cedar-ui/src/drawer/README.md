---
permalink: /components/drawer/
---

# Drawer

触发命令后，从屏幕一侧滑出的抽屉式的面板。

## 案例

### 基础用法

点击触发按钮抽屉从右侧滑出，点击背景层区关闭。

<demo src="./__demos__/basic.vue"></demo>

### 抽屉尺寸

抽屉分为 xs、sm、md、lg 四种尺寸。默认尺寸为 md。

<demo src="./__demos__/size.vue"></demo>

### 抽屉位置

自定义位置，点击触发按钮抽屉从相应的位置滑出。

<demo src="./__demos__/location.vue"></demo>

### 自定义节点

通过插槽自定义内容，或者设置相应属性来控制显示或隐藏。

<demo src="./__demos__/custom-node.vue"></demo>

### 嵌套抽屉

在抽屉内打开新的抽屉。

<demo src="./__demos__/nest-drawer.vue"></demo>

### 挂载位置

通过 `popup-container` 可以设置弹出层节点的挂载位置

<demo src="./__demos__/popup-container.vue"></demo>

### 函数调用

通过函数的方式使用抽屉。

<demo src="./__demos__/function-call.vue"></demo>

## API

### `<Drawer>` Props

| 属性                  | 说明                                                                                      | 类型                                                                                | 默认值    |
| --------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------- |
| open **(v-model)** | 抽屉是否可见                                                                              | `boolean`                                                                           | `false`   |
| default-open       | 抽屉默认是否可见（非受控模式）                                                            | `boolean`                                                                           | `false`   |
| placement             | 抽屉放置的位置                                                                            | `'top' \| 'right' \| 'bottom' \| 'left'`                                            | `'right'` |
| title                 | 标题                                                                                      | `string`                                                                            | -         |
| size                  | 尺寸                                                                                      | `'sm' \| 'md' \| 'lg' \| 'xl'`                                                      | `md`      |
| overlay                  | 是否显示背景层                                                                            | `boolean`                                                                           | `true`    |
| overlay-class            | 背景层类名                                                                                | `string`                                                                            | -         |
| overlay-style            | 背景层样式                                                                                | `CSSProperties`                                                                     | -         |
| overlay-closable         | 点击背景层是否可以关闭                                                                    | `boolean`                                                                           | `true`    |
| closable              | 是否展示关闭按钮                                                                          | `boolean`                                                                           | `true`    |
| confirm-button-text               | 确认按钮的内容                                                                            | `string`                                                                            | -         |
| cancel-text           | 取消按钮的内容                                                                            | `string`                                                                            | -         |
| confirm-button-loading            | 确认按钮是否为加载中状态                                                                  | `boolean`                                                                           | `false`   |
| confirm-button-props       | 确认按钮的Props                                                                           | `ButtonProps`                                                                       | -         |
| cancel-button-props   | 取消按钮的Props                                                                           | `ButtonProps`                                                                       | -         |
| unmount-on-close      | 关闭时是否卸载节点                                                                        | `boolean`                                                                           | `false`   |
| width                 | 抽屉的宽度（仅在placement为right,left时可用）                                             | `number\|string`                                                                    | `250`     |
| height                | 抽屉的高度（仅在placement为top,bottom时可用）                                             | `number\|string`                                                                    | `250`     |
| popup-container       | 弹出框的挂载容器                                                                          | `string \| HTMLElement`                                                             | `'body'`  |
| drawer-style          | 抽屉的样式                                                                                | `CSSProperties`                                                                     | -         |
| before-confirm             | 触发 confirm 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。 | `( done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>` | -         |
| before-cancel         | 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。                         | `() => boolean`                                                                     | -         |
| esc-to-close          | 是否支持 ESC 键关闭抽屉                                                                   | `boolean`                                                                           | `true`    |
| overlay-animation-name | 背景层动画名称                                                                            | `string`                                                                            | `'fade-drawer'` |
| render-to-body        | 抽屉是否挂载在 `body` 元素下                                                              | `boolean`                                                                           | `true`    |
| header                | 是否展示头部内容                                                                          | `boolean`                                                                           | `true`    |
| footer                | 是否展示底部内容                                                                          | `boolean`                                                                           | `true`    |
| cancel-button         | 是否显示取消按钮                                                                          | `boolean`                                                                           | `true`    |

### `<Drawer>` Events

| 事件名       | 说明                       | 参数                                           |
| ------------ | -------------------------- | ---------------------------------------------- |
| confirm      | 点击确定按钮时触发         | `(event: MouseEvent) => void`                  |
| cancel       | 点击取消、关闭按钮时触发   | `(event: MouseEvent \| KeyboardEvent) => void` |
| open         | 抽屉打开后（动画结束）触发 | -                                              |
| close        | 抽屉关闭后（动画结束）触发 | -                                              |
| before-open  | 对话框打开前触发           | -                                              |
| before-close | 对话框关闭前触发           | -                                              |
| click-overlay | 点击背景层时触发           | `(event: MouseEvent) => void`                  |

### `<Drawer>` Slots

| 插槽名 | 说明 | 参数 |
| ------ | ---- | ---- |
| header | 页眉 | -    |
| title  | 标题 | -    |
| footer | 页脚 | -    |

### `<Drawer>` 全局方法

#### DrawerConfig（命令式配置，≠ 组件 Props）

命令式 `Drawer.open(config)` 的配置对象。拦截器与 Props 同名（`beforeConfirm` / `beforeCancel` / `beforeOpen` / `beforeClose`）；事件回调仍用 `onConfirm` / `onCancel` / `onOpen` / `onClose`。

| 属性              | 说明                                                                                      | 类型                                                                                 | 默认值    |
| ----------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------- |
| placement         | 抽屉放置的位置                                                                            | `'top' \| 'right' \| 'bottom' \| 'left'`                                             | `'right'` |
| title             | 标题                                                                                      | `RenderContent`                                                                      | -         |
| content           | 内容                                                                                      | `RenderContent`                                                                      | -         |
| overlay              | 是否显示背景层                                                                            | `boolean`                                                                            | `true`    |
| overlayClass         | 背景层类名                                                                                | `string`                                                                             | -         |
| overlayStyle         | 背景层样式                                                                                | `CSSProperties`                                                                      | -         |
| overlayClosable      | 点击背景层是否可以关闭                                                                    | `boolean`                                                                            | `true`    |
| overlayAnimationName | 背景层动画名称                                                                            | `string`                                                                             | `'fade-drawer'` |
| closable          | 是否展示关闭按钮                                                                          | `boolean`                                                                            | `true`    |
| confirmButtonText            | 确认按钮的内容                                                                            | `string`                                                                             | -         |
| cancelText        | 取消按钮的内容                                                                            | `string`                                                                             | -         |
| confirmButtonLoading         | 确认按钮是否为加载中状态                                                                  | `boolean`                                                                            | `false`   |
| confirmButtonProps     | 确认按钮的Props                                                                           | `ButtonProps`                                                                        | -         |
| cancelButtonProps | 取消按钮的Props                                                                           | `ButtonProps`                                                                        | -         |
| width             | 抽屉的宽度（仅在placement为right,left时可用）                                             | `number \| string`                                                                   | `250`     |
| height            | 抽屉的高度（仅在placement为top,bottom时可用）                                             | `number` \| `string`                                                                 | `250`     |
| popupContainer    | 弹出框的挂载容器                                                                          | `string \| HTMLElement`                                                              | `'body'`  |
| drawerStyle       | 抽屉的样式                                                                                | `CSSProperties`                                                                      | -         |
| onConfirm              | 点击确定按钮时触发                                                                        | `(event: MouseEvent) => void`                                                        | -         |
| onCancel          | 点击取消、关闭按钮时触发                                                                  | `(event: MouseEvent) => void`                                                        | -         |
| onClickOverlay    | 点击背景层时触发                                                                          | `(event: MouseEvent) => void`                                                        | -         |
| beforeConfirm          | 触发 confirm 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。 | `( done: (closed: boolean) => void ) => void \| boolean \| Promise<void \| boolean>` | -         |
| beforeCancel      | 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。                         | `() => boolean`                                                                      | -         |
| onOpen            | 抽屉打开后（动画结束）触发                                                                | `() => void`                                                                         | -         |
| onClose           | 抽屉关闭后（动画结束）触发                                                                | `() => void`                                                                         | -         |
| beforeOpen        | 抽屉打开前触发                                                                            | `() => void`                                                                         | -         |
| beforeClose       | 抽屉关闭前触发（对应事件 `before-close`）                                                 | `() => void`                                                                         | -         |
| escToClose        | 是否支持 ESC 键关闭抽屉                                                                   | `boolean`                                                                            | `true`    |
| header            | 是否展示头部内容                                                                          | `boolean \| RenderContent`                                                           | `true`    |
| footer            | 是否展示底部内容                                                                          | `boolean \| RenderContent`                                                           | `true`    |
| cancelButton      | 是否显示取消按钮                                                                          | `boolean`                                                                            | `true`    |

#### DrawerReturn

| 属性   | 说明     | 类型                                   | 默认值 |
| ------ | -------- | -------------------------------------- | ------ |
| close  | 关闭抽屉 | `() => void`                           | -      |
| update | 更新抽屉 | `(config: DrawerUpdateConfig) => void` | -      |

#### DrawerMethod

| 属性 | 说明     | 类型                                                              | 默认值 |
| ---- | -------- | ----------------------------------------------------------------- | ------ |
| open | 打开抽屉 | `(config: DrawerConfig, appContext?: AppContext) => DrawerReturn` | -      |

### 类型定义

组件导出以下类型定义

```ts
import type { DrawerProps } from '@cedarjs/ui'
```
