---
permalink: /components/skeleton/
---

# Skeleton

将加载中的数据用灰色占位。

## 案例

### 基础用法

骨架屏组件提供 `<a-skeleton-line>` 和 `<a-skeleton-shape>` 两种组件，用户可根据需要组合使用。

<demo src="./__demos__/basic.vue"></demo>

### 图形骨架屏

图形骨架屏分为 `square` - **正方形（默认）**、 `circle` - **圆形**两种形状，并提供 `sm`、`md`、`lg` 三种尺寸。

<demo src="./__demos__/type.vue"></demo>

### 动画

通过设置 `animation` 属性，让骨架屏显示动画效果。

<demo src="./__demos__/animation.vue"></demo>

## API

### `<skeleton>` Props

| 参数名    | 描述                         | 类型      | 默认值  |
| --------- | ---------------------------- | --------- | :-----: |
| loading   | 是否展示骨架屏（加载中状态） | `boolean` | `true`  |
| animation | 是否开启骨架屏动画           | `boolean` | `false` |

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
import type { SkeletonInstance } from '@cedar/ui'
```
