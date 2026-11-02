---
permalink: /components/split/
---

# Split

将面板分割成两部分。

## 基础示例

### 基础用法

将一个面板分割成两个可以调整宽度或高度的两部分。用`orientation`控制分割方向。

<demo src="./__demos__/basic.vue"></demo>

## 布局与排列

### 面板分割嵌套

面板分割可以嵌套使用。

<demo src="./__demos__/nested.vue"></demo>

## API

### `<split>` Props

| 参数名             | 描述                                                              | 类型                         |     默认值     |
| ------------------ | ----------------------------------------------------------------- | ---------------------------- | :------------: |
| component          | 分割框的 html 标签                                                | `string`                     |    `'div'`     |
| orientation          | 两个面板的排列轴向，默认 horizontal 表示左右面板；此时分割手柄自身为竖直 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| size **(v-model)** | 分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px     | `number\|string`             |      `-`       |
| default-size       | 默认分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px | `number\|string`             |     `0.5`      |
| min                | 最小阈值，可以是 0~1 代表百分比，或具体数值的像素，如 300px       | `number\|string`             |      `-`       |
| max                | 最大阈值，可以是 0~1 代表百分比，或具体数值的像素，如 300px       | `number\|string`             |      `-`       |
| disabled           | 是否禁用                                                          | `boolean`                    |    `false`     |

### `<split>` Events

| 事件名     | 描述             | 参数 |
| ---------- | ---------------- | ---- |
| move-start | 开始拖拽之前触发 | -    |
| moving     | 拖拽时触发       | -    |
| move-end   | 拖拽结束之后触发 | -    |

### `<split>` Slots

| 插槽名              |       描述       | 参数 |
| ------------------- | :--------------: | ---- |
| first               | 第一个面板的内容 | -    |
| resize-trigger      |   伸缩杆的内容   | -    |
| resize-trigger-icon |   伸缩杆的图标   | -    |
| second              | 第二个面板的内容 | -    |

### 类型定义

组件导出以下类型定义

```ts
import type { SplitInstance } from '@cedar-design/ui'
```

`--c-split-trigger-size-icon-wrapper`（默认6px）控制分隔手柄粗细：竖直手柄为宽度，水平手柄为高度；不改变沿面板方向的100%长度。


## 阅读方向与交互

Split 继承最近的原生 `dir`，横向第一个面板位于阅读起点。`size/defaultSize/min/max` 始终描述第一个面板，RTL 不会将尺寸变成 `1-size`，数字比例与 px 字符串保持原有单位。

横向 RTL 拖动时向左增大第一个面板；纵向仍向下增大。分隔条可聚焦，左右键按屏幕方向移动，纵向使用上下键，步长 10px，Shift 为 50px；Home/End 到达最小/最大边界。鼠标、触摸指针共用同一尺寸计算。切换方向、朝向、禁用或卸载会取消进行中的拖动并恢复原来的光标。方向切换本身不触发尺寸更新。
