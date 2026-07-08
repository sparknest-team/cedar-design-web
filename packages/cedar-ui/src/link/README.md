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

链接的状态分为 `normal` - 正常（默认）、`success` - 成功、`warning` - 警告、`danger` - 危险四种。

<demo src="./__demos__/link-status.vue"></demo>

### 悬浮状底色

可以通过 hoverable 属性设置是否在悬浮状态时隐藏底色。

<demo src="./__demos__/hoverable.vue"></demo>

### 图标

通过 `icon` 设置带图标的链接，设置为 `true` 时候显示默认图标。

<demo src="./__demos__/link-icon.vue"></demo>

### 加载中状态

通过设置 `loading` 可以让链接处于加载中状态。处于加载中状态的链接不会触发点击事件。

<demo src="./__demos__/link-loading.vue"></demo>

## API

### `<Link>` Props

| 属性      | 说明                 | 类型                                     | 默认值    |
| --------- | -------------------- | ---------------------------------------- | --------- |
| href      | 链接地址             | `string`                                 | -         |
| status    | 链接的状态           | `normal \| warning \| success \| danger` | `success` |
| hoverable | 鼠标悬浮时存在底色   | `boolean`                                | `true`    |
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
import type { LinkProps } from '@cedar/ui'
```
