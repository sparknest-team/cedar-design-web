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

### 悬浮态底色（Cedar 扩展）

桌面端可以通过 `hoverable` 设置悬浮态底色。该能力属于 Cedar 的平台扩展，不属于两端公共 Demo。

<demo src="./__demos__/hoverable.vue"></demo>

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

### 类型定义

组件导出以下类型定义

```ts
import type { LinkProps } from '@cedarjs/ui'
```
