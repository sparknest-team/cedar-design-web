---
permalink: /components/overflow-list/
---

# OverflowList

## 案例

### 基础用法

折叠列表的基本使用方法。

<demo src="./__demos__/basic.vue"></demo>

### 折叠方向

通过 `from` 属性可以设置折叠的方向。

<demo src="./__demos__/from.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### `<overflow-list>` Props

| 参数名 | 描述               | 类型               | 默认值  |
| ------ | ------------------ | ------------------ | :-----: |
| min    | 最少展示的元素个数 | `number`           |   `0`   |
| margin | 项目间隔           | `number`           |   `8`   |
| from   | 折叠方向           | `'start' \| 'end'` | `'end'` |

### `<overflow-list>` Events

| 事件名 | 描述               | 参数            |
| ------ | ------------------ | --------------- |
| change | 溢出数量改变时触发 | value: `number` |

### `<overflow-list>` Slots

| 插槽名   |   描述   | 参数             |
| -------- | :------: | ---------------- |
| overflow | 折叠元素 | number: `number` |

### 类型定义

组件导出以下类型定义

```ts
import type { BadgeInstance } from '@cedarjs/ui'
```
