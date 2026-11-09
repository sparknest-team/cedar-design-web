---
permalink: /components/skeleton/
---

# Skeleton

将加载中的数据用灰色占位。

## 基础示例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

## 内容与展示

### 骨架内容形态对比

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `title` | 是否显示标题占位 | 骨架内容形态对比、动画 |
| `loading` | 是否展示骨架屏（加载中状态） | 骨架内容形态对比、全屏模式 |
| `avatar` | 是否显示头像占位 | 骨架内容形态对比、动画 |
| `rows` | 段落行数 | 骨架内容形态对比 |
| `rows-width` | 每行宽度 | 骨架内容形态对比 |
| `card` | 是否显示卡片占位 | 骨架内容形态对比 |
<!-- demo-config-notes:end -->

比较标题/文本行与头像/卡片形态，按最终内容轮廓选择占位布局；动画和全屏加载另行展示。

<demo src="./__demos__/content-comparison.vue"></demo>

### 动画

<demo src="./__demos__/animation.vue"></demo>

### 全屏模式

点击后展示两秒再恢复，这是示例中的定时逻辑；组件本身不请求数据，也不会自动结束加载。实际业务应由请求结果控制 `loading`。

<demo src="./__demos__/fullscreen.vue"></demo>

## 自定义与插槽

### 自定义模板

通过 `template` 插槽组合 `SkeletonLine` 和 `SkeletonShape`。

<demo src="./__demos__/custom-template.vue"></demo>

## API

### Skeleton Props

| 参数名             | 描述                         | 类型                      | 默认值  |
| ------------------ | ---------------------------- | ------------------------- | :-----: |
| loading            | 是否展示骨架屏（加载中状态） | `boolean`                 | `true`  |
| animation          | 是否开启骨架屏动画           | `boolean`                 | `true`  |
| title              | 是否显示标题占位             | `boolean`                 | `false` |
| avatar             | 是否显示头像占位             | `boolean`                 | `false` |
| card               | 是否显示卡片占位             | `boolean`                 | `false` |
| rows               | 段落行数                     | `number \| string`        |   `3`   |
| rows-width         | 每行宽度                     | `Array<number \| string>` |  `[]`   |
| title-width        | 标题占位宽度；省略时使用主题变量，默认 `50%` | `number \| string`        |   `-`   |
| avatar-size        | 头像占位尺寸；省略时使用主题变量，默认 `34px` | `number \| string`        |   `-`   |
| card-height        | 卡片占位高度；省略时使用主题变量，默认 `160px` | `number \| string`        |   `-`   |
| fullscreen         | 是否使用全屏占位             | `boolean`                 | `false` |
| fullscreen-z-index | 全屏占位层级                 | `number \| string`        |  `100`  |

### Skeleton Slots

| 插槽名   | 描述                 |
| -------- | -------------------- |
| default  | 加载完成后的真实内容 |
| template | 自定义加载占位模板   |

### SkeletonLine Props

| 参数名       | 描述             | 类型                      | 默认值 |
| ------------ | ---------------- | ------------------------- | :----: |
| rows         | 展示的行数；非有限值归零，负数归零，小数向下取整 | `number`                  |  `1`   |
| widths       | 线型骨架的宽度   | `Array<number \| string>` |  `[]`  |
| line-height  | 线型骨架的行高   | `number`                  |  `20`  |
| line-spacing | 线型骨架的行间距 | `number`                  |  `15`  |

### SkeletonShape Props

| 参数名 | 描述           | 类型                   |   默认值   |
| ------ | -------------- | ---------------------- | :--------: |
| shape  | 图形骨架的形状 | `'square' \| 'circle'` | `'square'` |
| size   | 图形骨架的大小 | `'sm' \| 'md' \| 'lg'` |   `'md'`   |

## Types

组件导出以下类型定义

```ts
import type {
  SkeletonInstance,
  SkeletonLineProps,
  SkeletonShapeProps,
} from "@cedar-design/ui";
```

## 使用说明





### 全屏覆盖范围

`fullscreen` 使用当前位置的内联 `position: fixed` 占位，不会自动传送到 body。没有建立固定定位包含块的祖先时覆盖视口；祖先的 `transform`、相应 `will-change` 或 `contain` 可让覆盖范围变为该祖先。需要覆盖视口时，将 Skeleton 放在这些祖先之外，或由业务使用 Vue Teleport 安排位置。它是加载占位，不提供模态焦点管理。参见 [CSS Positioned Layout 固定定位包含块](https://www.w3.org/TR/css-position-3/#fixed-cb)。

尺寸属性未传值时使用对应主题 token；表中的 `-` 表示没有 Prop 默认值，并不表示占位没有尺寸。Line 与主体都将非有限行数归零，对负数取零，对小数向下取整。

### 动效

内置 Skeleton 占位及独立 Line、Shape 为装饰内容，默认 `aria-hidden="true"`；根节点通过 `aria-busy` 表示等待。自定义 `template` 和加载结束后的业务内容保持可访问，可按需提供业务状态文案。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-skeleton-animation-background` | `linear-gradient(90deg, transparent, var(--c-sys-color-surface-default), transparent)` | `background` |
| `--c-skeleton-animation-duration` | `1s` | `animation` |
| `--c-skeleton-avatar-background-color` | `var(--c-sys-color-state-hover)` | `background-color` |
| `--c-skeleton-avatar-border-radius` | `50%` | `border-radius` |
| `--c-skeleton-avatar-margin-right` | `var(--c-sys-space-6)` | `margin-inline-end` |
| `--c-skeleton-avatar-size` | `34px` | `height`, `width` |
| `--c-skeleton-card-background-color` | `var(--c-sys-color-state-hover)` | `background-color` |
| `--c-skeleton-card-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-skeleton-card-height` | `160px` | `height` |
| `--c-skeleton-card-margin-bottom` | `var(--c-sys-space-6)` | `margin-bottom` |
| `--c-skeleton-content-padding` | `var(--c-sys-space-6)` | `padding` |
| `--c-skeleton-row-border-radius` | `10px` | `border-radius` |
| `--c-skeleton-row-height` | `12px` | `height` |
| `--c-skeleton-row-margin-top` | `10px` | `margin-top` |
| `--c-skeleton-shape-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-skeleton-shape-size-lg` | `60px` | `height`, `width` |
| `--c-skeleton-shape-size-md` | `48px` | `height`, `width` |
| `--c-skeleton-shape-size-sm` | `36px` | `height`, `width` |
| `--c-skeleton-title-background-color` | `var(--c-sys-color-state-hover)` | `background-color` |
| `--c-skeleton-title-border-radius` | `10px` | `border-radius` |
| `--c-skeleton-title-width` | `50%` | `width` |
| `--c-skeleton-transition-duration` | `var(--c-sys-motion-duration-slow)` | `transition` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-skeleton-animation-background: linear-gradient(90deg, transparent, var(--c-sys-color-surface-default), transparent);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

### 动效

内置动效遵循 `prefers-reduced-motion: reduce`：保留内容与状态反馈，关闭装饰性动画。自定义动画需由调用方适配该偏好。
