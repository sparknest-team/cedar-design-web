---
permalink: /components/link/
---

# Link

链接的基本样式。

## 案例

### 基础用法

链接的基本用法。

<demo src="./__demos__/basic.vue"></demo>

### 链接状态

链接使用统一语义状态，例如 `default`（默认）、`success`、`warning` 和 `danger`。

<demo src="./__demos__/link-status.vue"></demo>

### 链接模式

设置 `href` 后渲染为可导航链接；使用 `target="_blank"` 时建议同时设置 `rel="noopener noreferrer"`。

<demo src="./__demos__/link-mode.vue"></demo>

### 下划线

通过 `underline` 设置下划线的显示策略。

<demo src="./__demos__/link-underline.vue"></demo>

### 禁用状态

禁用状态下不会触发导航或点击事件。

<demo src="./__demos__/link-disabled.vue"></demo>

### 图标

通过 `icon` 设置带图标的链接，设置为 `true` 时候显示默认图标。

<demo src="./__demos__/link-icon.vue"></demo>

### 加载中状态

通过设置 `loading` 可以让链接处于加载中状态。处于加载中状态的链接不会触发点击事件。

<demo src="./__demos__/link-loading.vue"></demo>

### 悬浮态底色

两端均支持 `hoverable`（默认 `false`）：开启后增加内边距与悬浮/按下底色，不影响下划线策略。键盘聚焦使用 `:focus-visible` 显示焦点轮廓，无需开启 hoverable。

<demo src="./__demos__/hoverable.vue"></demo>

两端 Link 主体、Props、主样式和测试采用独立同源复制；仅组件前缀、本地图标与主题 token 适配不同，不共享核心或实例。

禁用或加载时移除 href/target/rel，禁止导航和 click，并退出 Tab 顺序（即使传入 tabindex）。普通状态原样透传原生属性。加载图标优先于 icon 插槽；动态图标插槽会随渲染更新。

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### `<Link>` Props

| 属性      | 说明                 | 类型                                     | 默认值    |
| --------- | -------------------- | ---------------------------------------- | --------- |
| href      | 链接地址             | `string`                                 | -         |
| target    | 原生链接打开目标     | `string`                                 | -         |
| rel       | 原生链接关系         | `string`                                 | -         |
| status    | 链接的状态           | `SemanticStatus`                         | `default` |
| underline | 下划线显示策略       | `always \| hover \| none`               | `none`    |
| hoverable | 鼠标悬浮时存在底色   | `boolean`                                | `false`   |
| icon      | 图标                 | `boolean`                                | `false`   |
| loading   | 链接是否为加载中状态 | `boolean`                                | `false`   |
| disabled  | 链接是否禁用         | `boolean`                                | `false`   |

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
import type { LinkProps, LinkUnderline, LinkInstance } from '@cedarjs/ui'
```

### 样式迁移

内部类名统一为 `c-link--status-*`、`c-link--underline-*`、`c-link--disabled`、`c-link--loading` 和 `c-link__icon`。请迁移旧的单连字符选择器，优先通过 `--c-link-*` CSS 变量定制。焦点支持 `--c-link-focus-width`（2px）、`--c-link-focus-offset`（2px）、`--c-link-focus-color`（currentColor）、`--c-link-focus-opacity`（0.8）。减少动态效果偏好下关闭加载旋转和过渡。
