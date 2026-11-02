---
permalink: /components/resize-box/
---

# ResizeBox

## 基础示例

### 基础用法

`ResizeBox` 伸缩框组件的基础使用。通过设置 `directions`，可以指定四条边中的哪几条边可以进行伸缩。

<demo src="./__demos__/basic.vue"></demo>

## 布局与排列

### 在布局中使用

[Layout](/react/components/ResizeBox) 组件中集成了 `ResizeBox` 组件，可以在 Layout 中使用可伸缩的侧边栏。

<demo src="./__demos__/layout.vue"></demo>

## 交互与控制

### 受控的高宽

`ResizeBox` 的 `width` 和 `height` 都支持 `v-model`。

<demo src="./__demos__/controlled.vue"></demo>

### 定制伸缩杆内容

可通过插槽 `resize-trigger` 定制各个方向的伸缩杆的内容。

<demo src="./__demos__/custom-triggers.vue"></demo>

## API

### `<resize-box>` Props

| 参数名               | 描述                                       | 类型                                         |   默认值    |
| -------------------- | ------------------------------------------ | -------------------------------------------- | :---------: |
| width **(v-model)**  | 宽度                                       | `number`                                     |     `-`     |
| height **(v-model)** | 高度                                       | `number`                                     |     `-`     |
| component            | 伸缩框的 html 标签                         | `string`                                     |   `'div'`   |
| directions           | 启用尺寸调整手柄的边，默认仅 right；可选 top/right/bottom/left，可组合；不是鼠标移动方向，也不是浮层方位 | `('left' \| 'right' \| 'top' \| 'bottom')[]` | `['right']` |

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
import type { ResizeBoxInstance } from '@cedar-design/ui'
```


### 方位语义与配置入口

directions 指启用调整手柄的边，保留现有名称；默认仅右边，可组合多边。它不是 orientation 横纵轴，也不是 placement 弹层方位。从零设计时 edges 更直接，但本次未进行 API 改名。


## 阅读方向与交互

ResizeBox 的 `directions` 使用物理边：left 始终在左、right 始终在右，RTL 不交换手柄，也不反转宽高含义。左手柄向左、右手柄向右增大宽度；上手柄向上、下手柄向下增大高度，尺寸下限为 0。

手柄可聚焦并使用对应轴的方向键，步长 10px，Shift 为 50px；支持鼠标和触摸指针。文字继承原生阅读方向。方向切换、移除活动手柄、组件停用或卸载会释放手势监听和临时光标。
