---
permalink: /components/comment/
---

# Comment

展示评论信息

## 基本用法

### 基础用法

一个基本的评论组件，带有作者、头像、时间和操作。

<demo src="./__demos__/basic.vue"></demo>

### 对齐

通过 `align` 属性可以设置 `datetime` 和 `actions` 的对齐方式.

<demo src="./__demos__/align.vue"></demo>

### 嵌套评论

评论可以嵌套使用

<demo src="./__demos__/nest.vue"></demo>

### 回复框

评论框配合回复框使用

<demo src="./__demos__/editor.vue"></demo>

## API

### `<comment>` Props

| 参数名   | 描述                               | 类型                                                                                 |  默认值  |
| -------- | ---------------------------------- | ------------------------------------------------------------------------------------ | :------: |
| author   | 作者名                             | `string`                                                                             |   `-`    |
| avatar   | 头像                               | `string`                                                                             |   `-`    |
| content  | 评论内容                           | `string`                                                                             |   `-`    |
| datetime | 时间描述                           | `string`                                                                             |   `-`    |
| align    | 靠左/靠右 展示 datetime 和 actions | `'left' \| 'right' \| { datetime?: "left" \| "right"; actions?: "left" \| "right" }` | `'left'` |

### `<comment>` Slots

| 插槽名   |   描述   | 参数 |
| -------- | :------: | ---- |
| avatar   |   头像   | -    |
| author   |   作者   | -    |
| datetime | 时间描述 | -    |
| content  | 评论内容 | -    |
| actions  | 操作列表 | -    |

### 类型定义

组件导出以下类型定义

```ts
import type { CommentInstance } from '@cedar/ui'
```
