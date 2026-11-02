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

两端 Link 主体、Props、主样式和测试采用独立同源复制；仅组件前缀、本地图标与主题 token 适配不同，不共享核心或实例。

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


### `<Link>` Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `size` | 文字、图标与加载图标的五档尺寸 | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' |
| `href` | 原生链接地址 | string | - |
| `target` | 原生打开目标 | string | - |
| `rel` | 原生链接关系 | string | - |
| `status` | 链接语义状态 | SemanticStatus | 'default' |
| `underline` | 下划线策略 | 'always' \| 'hover' \| 'none' | 'none' |
| `hoverable` | 显示带内边距的悬浮/按下底色 | boolean | false |
| `icon` | 显示默认前置图标；icon 插槽优先 | boolean | false |
| `loading` | 显示加载图标并阻止导航与点击 | boolean | false |
| `disabled` | 禁用链接 | boolean | false |


### `<Link>` Events

| 事件名 | 说明           | 参数                          |
| ------ | -------------- | ----------------------------- |
| click  | 点击触发的事件 | `(event: MouseEvent) => void` |

### Slots

| 插槽 | 说明 |
| --- | --- |
| default | 链接内容 |
| icon | 自定义图标，loading 时被加载图标替代 |

### 类型定义

组件导出以下类型定义

```ts
import type { LinkProps, LinkSize, LinkUnderline, LinkInstance } from '@cedar-design/ui'
```

### 样式迁移

内部类名统一为 `c-link--status-*`、`c-link--underline-*`、`c-link--disabled`、`c-link--loading` 和 `c-link__icon`。请迁移旧的单连字符选择器，优先通过 `--c-link-*` CSS 变量定制。焦点支持 `--c-link-focus-width`（2px）、`--c-link-focus-offset`（2px）、`--c-link-focus-color`（currentColor）、`--c-link-focus-opacity`（0.8）。减少动态效果偏好下关闭加载旋转和过渡。

文字配色与 Button 的 text 变体一致：default 使用 content-primary，secondary / tertiary 使用 content-secondary，彩色状态使用对应 content 语义色，禁用和加载使用 content-disabled。两品牌明暗模式均继承这些规则。

尺寸变量：`--c-link-size-xs-font-size`, `--c-link-size-sm-font-size`, `--c-link-size-md-font-size`, `--c-link-size-lg-font-size`, `--c-link-size-xl-font-size`。默认分别为 12 / 13 / 14 / 16 / 18px；md 引用原有 `--c-link-font-size`，图标和加载图标使用 1em。
