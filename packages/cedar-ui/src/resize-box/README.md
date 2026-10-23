---
permalink: /components/resize-box/
---

# ResizeBox

## 案例

### 基础用法

`ResizeBox` 伸缩框组件的基础使用。通过设置 `directions`，可以指定四条边中的哪几条边可以进行伸缩。

<demo src="./__demos__/basic.vue"></demo>

### 受控的高宽

`ResizeBox` 的 `width` 和 `height` 都支持 `v-model`。

<demo src="./__demos__/controlled.vue"></demo>

### 在布局中使用

[Layout](/react/components/ResizeBox) 组件中集成了 `ResizeBox` 组件，可以在 Layout 中使用可伸缩的侧边栏。

<demo src="./__demos__/layout.vue"></demo>

### 定制伸缩杆内容

可通过插槽 `resize-trigger` 定制各个方向的伸缩杆的内容。

<demo src="./__demos__/custom-triggers.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### `<resize-box>` Props

| 参数名               | 描述                                       | 类型                                         |   默认值    |
| -------------------- | ------------------------------------------ | -------------------------------------------- | :---------: |
| width **(v-model)**  | 宽度                                       | `number`                                     |     `-`     |
| height **(v-model)** | 高度                                       | `number`                                     |     `-`     |
| component            | 伸缩框的 html 标签                         | `string`                                     |   `'div'`   |
| directions           | 可以进行伸缩的边，有上、下、左、右可以使用 | `('left' \| 'right' \| 'top' \| 'bottom')[]` | `['right']` |

### `<resize-box>` Events

| 事件名       | 描述           | 参数                                                           |
| ------------ | -------------- | -------------------------------------------------------------- |
| moving-start | 拖拽开始时触发 | ev: `MouseEvent`                                               |
| moving       | 拖拽时触发     | size: `{ width: number; height: number; }`<br>ev: `MouseEvent` |
| moving-end   | 拖拽结束时触发 | ev: `MouseEvent`                                               |

### `<resize-box>` Slots

| 插槽名              |     描述     | 参数                                                |
| ------------------- | :----------: | --------------------------------------------------- |
| resize-trigger      | 伸缩杆的内容 | direction: `'left' \| 'right' \| 'top' \| 'bottom'` |
| resize-trigger-icon | 伸缩杆的图标 | direction: `'left' \| 'right' \| 'top' \| 'bottom'` |

### 类型定义

组件导出以下类型定义

```ts
import type { ResizeBoxInstance } from '@cedarjs/ui'
```
