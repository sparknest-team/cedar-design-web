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
| title-width        | `50%` | `number \| string`        |   `-`   |
| avatar-size        | `34px` | `number \| string`        |   `-`   |
| card-height        | `160px` | `number \| string`        |   `-`   |
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

## 同源实现与平台边界

两端各自保存完整源码，不引用公共核心，不共享组件实例或响应式状态；修改时同步维护两份实现。主体、Props、关键样式及配对测试纳入只读源码一致性检查，主题 token 和安装入口各自维护。

Skeleton、SkeletonLine、SkeletonShape 均采用独立复制的源码；各库骨架主题和尺寸 token 独立维护。

### 受管默认值

| Token | Default |
| --- | --- |
| `--c-skeleton-content-padding` | `var(--c-sys-space-6)` |
| `--c-skeleton-card-border-radius` | `var(--c-sys-radius-md)` |
| `--c-skeleton-card-margin-bottom` | `var(--c-sys-space-6)` |
| `--c-skeleton-card-background-color` | `var(--c-sys-color-state-hover)` |
| `--c-skeleton-animation-background` | `linear-gradient(90deg, transparent, var(--c-sys-color-surface-default), transparent)` |
| `--c-skeleton-avatar-border-radius` | `50%` |
| `--c-skeleton-avatar-margin-right` | `var(--c-sys-space-6)` |
| `--c-skeleton-avatar-background-color` | `var(--c-sys-color-state-hover)` |
| `--c-skeleton-title-border-radius` | `10px` |
| `--c-skeleton-title-background-color` | `var(--c-sys-color-state-hover)` |
| `--c-skeleton-row-height` | `12px` |
| `--c-skeleton-row-border-radius` | `10px` |
| `--c-skeleton-row-margin-top` | `10px` |
| `--c-skeleton-shape-size-sm` | `36px` |
| `--c-skeleton-shape-size-md` | `48px` |
| `--c-skeleton-shape-size-lg` | `60px` |
| `--c-skeleton-shape-border-radius` | `var(--c-sys-radius-md)` |

### 动效变量

| Token | Default |
| --- | --- |
| `--c-skeleton-animation-duration` | `1s` |
| `--c-skeleton-transition-duration` | `var(--c-sys-motion-duration-slow)` |

内置动效遵循 prefers-reduced-motion: reduce：保留内容与状态反馈，关闭装饰性旋转、扫光和波纹。Icon 名称切换跳过等待，并取消尚未结束的切换。Ripple 时长变量只控制 CSS，250ms 生命周期计时未改变，每段视觉时长应不超过 250ms；自定义动画类由调用方负责适配。
