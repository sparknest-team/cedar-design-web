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

[Layout](/components/layout/) 组件中集成了 `ResizeBox` 组件，可以在 Layout 中使用可伸缩的侧边栏。

<demo src="./__demos__/layout.vue"></demo>

## 交互与控制

### 受控的高宽

`ResizeBox` 的 `width` 和 `height` 都支持 `v-model`。

<demo src="./__demos__/controlled.vue"></demo>

### 定制伸缩杆内容

可通过插槽 `resize-trigger` 定制各个方向的伸缩杆的内容。

<demo src="./__demos__/custom-triggers.vue"></demo>

## 触发与定位

### 弹层定位

`directions` 指定显示调整手柄的边，默认只有右侧，可同时启用多边。

## API

### ResizeBox Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width **(v-model)** | 当前盒模型的 CSS 宽度；有限非负像素数 | `number` | `undefined` |
| height **(v-model)** | 当前盒模型的 CSS 高度；有限非负像素数 | `number` | `undefined` |
| component | 根 HTML 标签，需提供有效标签名称 | `string` | `'div'` |
| directions | 不重复的物理边数组；空数组移除所有手柄 | `ResizeBoxDirection[]`<br>`ResizeBoxDirection: 'left' \| 'right' \| 'bottom' \| 'top'` | `['right']` |

### ResizeBox Events

| 事件名       | 描述           | 参数                                                           |
| ------------ | -------------- | -------------------------------------------------------------- |
| update:width | 宽度更新请求；受控模式等待父级回写 | width: `number` |
| update:height | 高度更新请求；受控模式等待父级回写 | height: `number` |
| moving-start | 拖拽开始时触发 | ev: `MouseEvent`                                               |
| moving       | 拖拽时触发     | size: `{ width: number; height: number; }`<br>ev: `MouseEvent` |
| moving-end   | 拖拽结束时触发 | ev: `MouseEvent`                                               |

### ResizeBox Slots

| 插槽名              |     描述     | 参数                                                |
| ------------------- | :----------: | --------------------------------------------------- |
| default | 无参数的伸缩框内容 | - |
| resize-trigger      | 伸缩杆的内容 | direction: `'left' \| 'right' \| 'top' \| 'bottom'` |
| resize-trigger-icon | 伸缩杆的图标 | direction: `'left' \| 'right' \| 'top' \| 'bottom'` |

## Types

组件导出以下类型定义

```ts
import type { ResizeBoxInstance, ResizeBoxProps, ResizeBoxDirection } from '@cedar-design/ui'
```

## 阅读方向与交互

ResizeBox 的 `directions` 使用物理边：left 始终在左、right 始终在右，RTL 不交换手柄，也不反转宽高含义。左手柄向左、右手柄向右增大宽度；上手柄向上、下手柄向下增大高度，尺寸下限为 0。

手柄可聚焦，使用 spinbutton 表示有限非负、无固定上限的像素尺寸，aria-valuemin 为 0，不设置虚构的 aria-valuemax。名称与像素值文本跟随 Locale/ConfigProvider。鼠标和触摸指针保持物理边缘调整。

↑ 增大、↓ 减小当前宽度或高度，每次 10px；Shift 或 PageUp/PageDown 为 50px，Home 请求 0，End 无操作。左右手柄额外保留 ←/→ 移动物理边的快捷键；上下手柄的 ↑/↓ 按数值增减，不再按边缘移动方向解释。文字继承原生阅读方向。方向切换、移除活动手柄、组件停用或卸载会释放手势监听和临时光标。

## 尺寸与盒模型

width、height 以及更新事件的数值采用当前 box-sizing 对应的 CSS 尺寸：border-box 包含边框和内边距，content-box 表示内容区。测量、键盘或指针增量以及写回使用同一尺寸，不重复扣除手柄占位。受控模式只请求父级更新，未回写时保持原尺寸和可访问值。

## 拖动与取消

已开始的鼠标或指针拖动，在正常释放、取消、配置变化、KeepAlive 停用或卸载时，都只产生一次结束通知；先释放监听和光标，再通知。ResizeBox 使用 moving-start/moving-end，Split 使用 move-start/move-end，保留各自事件名称。没有原生终止鼠标事件时，结束参数使用该次按下事件。键盘离散调节只发值更新，不制造拖动开始或结束事件。结束表示手势停止，不回滚已应用的尺寸，也不等待监听器返回的 Promise。

width/height 的 0 有效；无效数值不写入 CSS，按未提供尺寸处理。无效方向列表按无手柄处理，数组中的有效方向保留并去重；开发环境使用统一 Vue 校验提示。公开 Props 包含更新与拖动通知监听，不收集监听器返回的 Promise。

```ts
import type { ResizeBoxProps, ResizeBoxDirection } from '@cedar-design/ui'
const edge: ResizeBoxDirection = 'right'
const props: ResizeBoxProps = { width: 200, directions: [edge], 'onUpdate:width': (width) => console.log(width) }
```

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-resize-box-trigger-bg` | `var(--c-color-neutral-3)` | `background-color` |
| `--c-resize-box-trigger-font-size-icon` | `12px` | `font-size`, `margin` |
| `--c-resize-box-trigger-icon-color` | `var(--c-color-text-1)` | `color` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-resize-box-trigger-bg: var(--c-color-neutral-3);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
