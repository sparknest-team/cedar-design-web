---
permalink: /components/result/
---

# Result

用于反馈一系列操作任务的处理结果，当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 案例

### 基础用法

展示结果状态。

<demo src="./__demos__/basic.vue"></demo>

### 成功状态

展示成功状态。

<demo src="./__demos__/success.vue"></demo>

### 警告状态

展示警告状态。

<demo src="./__demos__/warning.vue"></demo>

### 错误状态

展示错误状态。

<demo src="./__demos__/error.vue"></demo>

### HTTP状态码 403

没有当前页面的访问权限。

<demo src="./__demos__/403.vue"></demo>

### HTTP状态码 404

页面未找到

<demo src="./__demos__/404.vue"></demo>

### HTTP状态码 500

通常表示服务器错误

<demo src="./__demos__/500.vue"></demo>

### 自定义状态

自定义状态。需要传入指定的图标

<demo src="./__demos__/custom.vue"></demo>

### 完整功能

完整功能

<demo src="./__demos__/all.vue"></demo>

## API

### `<result>` Props

| 参数名   | 描述             | 类型                                                                             |  默认值  |
| -------- | ---------------- | -------------------------------------------------------------------------------- | :------: |
| status   | 结果页显示的状态 | `'info' \| 'success' \| 'warning' \| 'error' \| '403' \| '404' \| '500' \| null` | `'info'` |
| title    | 标题内容         | `string`                                                                         |   `-`    |
| subtitle | 子标题内容       | `string`                                                                         |   `-`    |

### `<result>` Slots

| 插槽名   |   描述   | 参数 | 版本  |
| -------- | :------: | ---- | :---- |
| icon     |   图标   | -    |       |
| title    |   标题   | -    |       |
| subtitle |  副标题  | -    |       |
| extra    |  操作区  | -    | 2.8.0 |
| default  | 默认插槽 | -    | 2.8.0 |

### 类型定义

组件导出以下类型定义

```ts
import type { ResultInstance } from '@cedar/ui'
```
