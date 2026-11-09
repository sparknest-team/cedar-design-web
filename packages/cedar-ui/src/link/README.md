---
permalink: /components/link/
---

# Link

链接的基本样式。

## 基础示例

### 基础用法

链接的基本用法。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 链接尺寸与语义颜色

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `status` | 链接的状态 | 链接尺寸与语义颜色、链接模式、下划线 |
| `href` | 链接地址 | 链接模式、悬浮态底色 |
| `size` | 文字、图标和加载图标尺寸 | 链接尺寸与语义颜色 |
| `icon` | 图标 | 链接尺寸与语义颜色 |
| `loading` | 链接是否为加载中状态 | 链接尺寸与语义颜色 |
| `target` | 原生链接打开目标 | 链接模式 |
<!-- demo-config-notes:end -->

比较尺寸和语义颜色；导航目标、禁用拦截和加载反馈保留独立行为示例。

<details>
<summary>配置说明与使用限制</summary>

#### 五种尺寸

通过 `size` 设置五档尺寸，文字、图标和加载图标同步缩放，默认 `md`。

#### 链接状态

链接使用统一语义状态，例如 `default`（默认）、`success`、`warning` 和 `danger`。

</details>

<demo src="./__demos__/appearance-comparison.vue"></demo>

### 链接模式

设置 `href` 后渲染为可导航链接；使用 `target="_blank"` 时建议同时设置 `rel="noopener noreferrer"`。

<demo src="./__demos__/link-mode.vue"></demo>

### 下划线

通过 `underline` 设置下划线的显示策略。

<demo src="./__demos__/link-underline.vue"></demo>

### 禁用状态

禁用状态下不会触发导航或点击事件。

<demo src="./__demos__/link-disabled.vue"></demo>

### 悬浮态底色

两端均支持 `hoverable`（默认 `false`）：开启后增加内边距与悬浮/按下底色，不影响下划线策略。键盘聚焦使用 `:focus-visible` 显示焦点轮廓，无需开启 hoverable。

<demo src="./__demos__/hoverable.vue"></demo>



禁用或加载时移除 href/target/rel，禁止导航和 click，并退出 Tab 顺序（即使传入 tabindex）。普通状态原样透传原生属性。加载图标优先于 icon 插槽；动态图标插槽会随渲染更新。

## 内容与展示

### 图标

通过 `icon` 设置带图标的链接，设置为 `true` 时候显示默认图标。

<demo src="./__demos__/link-icon.vue"></demo>

## 交互与控制

### 加载中状态

通过设置 `loading` 可以让链接处于加载中状态。处于加载中状态的链接不会触发点击事件。

<demo src="./__demos__/link-loading.vue"></demo>

## API

### 原生链接与手动加载

导航请提供 href。禁用或加载时，原本有 href 的链接保留 link 角色，移除导航属性并退出 Tab 顺序。download、hreflang、referrerpolicy 和 ARIA 等原生属性直接透传。loading 优先于 icon 插槽。click 是 MouseEvent 通知事件，遵守 Vue 的 once 语义，不根据监听器返回的 Promise 管理 loading；没有导航目标的业务操作使用 Button。

加载示例首次激活时由业务准备报告，完成后再次激活交给浏览器原生下载；卸载时取消准备任务。


### Link Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `size` | 文字、图标与加载图标的五档尺寸 | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' |
| `href` | 原生链接地址 | string | - |
| `target` | 原生打开目标 | string | - |
| `rel` | 原生链接关系 | string | - |
| `status` | 链接语义状态 | `SemanticStatus`<br>`'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | 'default' |
| `underline` | 下划线策略 | 'always' \| 'hover' \| 'none' | 'none' |
| `hoverable` | 显示带内边距的悬浮/按下底色 | boolean | false |
| `icon` | 显示默认前置图标；icon 插槽优先 | boolean | false |
| `loading` | 显示加载图标并阻止导航与点击 | boolean | false |
| `disabled` | 禁用链接 | boolean | false |


### Link Events

| 事件名 | 说明           | 参数                          |
| ------ | -------------- | ----------------------------- |
| click  | 点击触发的事件 | `(event: MouseEvent) => void` |

### Link Slots

| 插槽 | 说明 |
| --- | --- |
| default | 链接内容 |
| icon | 自定义图标，loading 时被加载图标替代 |

## Types

组件导出以下类型定义

```ts
import type { LinkProps, LinkSize, LinkUnderline, LinkInstance } from '@cedar-design/ui'
```

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-link-bg-active` | `var(--c-color-fill-3)` | `background-color` |
| `--c-link-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-link-border-radius` | `var(--c-sys-radius-sm)` | `border-radius` |
| `--c-link-focus-color` | `currentColor` | `outline` |
| `--c-link-focus-offset` | `2px` | `outline-offset` |
| `--c-link-focus-opacity` | `0.8` | `opacity` |
| `--c-link-focus-width` | `2px` | `outline` |
| `--c-link-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-link-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-link-margin-icon-right` | `var(--c-spacing-3)` | `margin-inline-end` |
| `--c-link-padding-horizontal` | `var(--c-spacing-2)` | `padding` |
| `--c-link-padding-vertical` | `1px` | `padding` |
| `--c-link-size-icon` | `1em` | `font-size` |
| `--c-link-size-lg-font-size` | `var(--c-sys-font-size-lg)` | `font-size` |
| `--c-link-size-md-font-size` | `var(--c-link-font-size)` | `font-size` |
| `--c-link-size-sm-font-size` | `var(--c-sys-font-size-sm)` | `font-size` |
| `--c-link-size-xl-font-size` | `var(--c-sys-font-size-xl)` | `font-size` |
| `--c-link-size-xs-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-link-spin-duration` | `1s` | `animation` |
| `--c-link-text-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-link-text-color-active` | `var(--c-link-text-color)` | `color` |
| `--c-link-text-color-default` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-link-text-color-disabled` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-text-color-error` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-link-text-color-error-active` | `var(--c-link-text-color-error)` | `color` |
| `--c-link-text-color-error-disabled` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-text-color-error-hover` | `var(--c-link-text-color-error)` | `color` |
| `--c-link-text-color-error-loading` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-text-color-hover` | `var(--c-link-text-color)` | `color` |
| `--c-link-text-color-info` | `var(--c-sys-color-content-info)` | `color` |
| `--c-link-text-color-loading` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-text-color-primary` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-link-text-color-secondary` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-link-text-color-success` | `var(--c-sys-color-content-success)` | `color` |
| `--c-link-text-color-success-active` | `var(--c-link-text-color-success)` | `color` |
| `--c-link-text-color-success-disabled` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-text-color-success-hover` | `var(--c-link-text-color-success)` | `color` |
| `--c-link-text-color-success-loading` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-text-color-tertiary` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-link-text-color-warning` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-link-text-color-warning-active` | `var(--c-link-text-color-warning)` | `color` |
| `--c-link-text-color-warning-disabled` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-text-color-warning-hover` | `var(--c-link-text-color-warning)` | `color` |
| `--c-link-text-color-warning-loading` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-transition-duration` | `0.15s` | `transition` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-link-border-radius: var(--c-sys-radius-sm);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

### 样式定制

优先通过 `--c-link-*` CSS 变量定制外观。键盘焦点支持 `--c-link-focus-width`（2px）、`--c-link-focus-offset`（2px）、`--c-link-focus-color`（currentColor）和 `--c-link-focus-opacity`（0.8）。启用减少动态效果时，关闭加载旋转和过渡。

文字配色与 Button 的 text 变体一致：default 使用 content-primary，secondary / tertiary 使用 content-secondary，彩色状态使用对应 content 语义色，禁用和加载使用 content-disabled。两品牌明暗模式均继承这些规则。

尺寸变量：`--c-link-size-xs-font-size`, `--c-link-size-sm-font-size`, `--c-link-size-md-font-size`, `--c-link-size-lg-font-size`, `--c-link-size-xl-font-size`。默认分别为 12 / 13 / 14 / 16 / 18px；md 引用原有 `--c-link-font-size`，图标和加载图标使用 1em。
