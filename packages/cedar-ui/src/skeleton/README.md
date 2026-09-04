---
permalink: /components/skeleton/
---

# Skeleton

将加载中的数据用灰色占位。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

### 标题与段落

<demo src="./__demos__/title-and-rows.vue"></demo>

### 头像与卡片

<demo src="./__demos__/avatar-and-card.vue"></demo>

### 自定义模板

通过 `template` 插槽组合 `SkeletonLine` 和 `SkeletonShape`。

<demo src="./__demos__/custom-template.vue"></demo>

### 动画

<demo src="./__demos__/animation.vue"></demo>

### 全屏模式

<demo src="./__demos__/fullscreen.vue"></demo>

## API

### `<skeleton>` Props

| 参数名             | 描述                         | 类型                      | 默认值  |
| ------------------ | ---------------------------- | ------------------------- | :-----: |
| loading            | 是否展示骨架屏（加载中状态） | `boolean`                 | `true`  |
| animation          | 是否开启骨架屏动画           | `boolean`                 | `true`  |
| title              | 是否显示标题占位             | `boolean`                 | `false` |
| avatar             | 是否显示头像占位             | `boolean`                 | `false` |
| card               | 是否显示卡片占位             | `boolean`                 | `false` |
| rows               | 段落行数                     | `number \| string`        |   `3`   |
| rows-width         | 每行宽度                     | `Array<number \| string>` |  `[]`   |
| title-width        | 标题宽度                     | `number \| string`        |   `-`   |
| avatar-size        | 头像尺寸                     | `number \| string`        |   `-`   |
| card-height        | 卡片高度                     | `number \| string`        |   `-`   |
| fullscreen         | 是否使用全屏占位             | `boolean`                 | `false` |
| fullscreen-z-index | 全屏占位层级                 | `number \| string`        |  `100`  |

### `<skeleton>` Slots

| 插槽名   | 描述                 |
| -------- | -------------------- |
| default  | 加载完成后的真实内容 |
| template | 自定义加载占位模板   |

### `<skeleton-line>` Props

| 参数名       | 描述             | 类型                      | 默认值 |
| ------------ | ---------------- | ------------------------- | :----: |
| rows         | 展示的行数       | `number`                  |  `1`   |
| widths       | 线型骨架的宽度   | `Array<number \| string>` |  `[]`  |
| line-height  | 线型骨架的行高   | `number`                  |  `20`  |
| line-spacing | 线型骨架的行间距 | `number`                  |  `15`  |

### `<skeleton-shape>` Props

| 参数名 | 描述           | 类型                   |   默认值   |
| ------ | -------------- | ---------------------- | :--------: |
| shape  | 图形骨架的形状 | `'square' \| 'circle'` | `'square'` |
| size   | 图形骨架的大小 | `'sm' \| 'md' \| 'lg'` |   `'md'`   |

### 类型定义

组件导出以下类型定义

```ts
import type {
  SkeletonInstance,
  SkeletonLineProps,
  SkeletonShapeProps,
} from "@cedarjs/ui";
```
