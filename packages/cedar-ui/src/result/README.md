---
permalink: /components/result/
---

# Result

用于反馈一系列操作任务的处理结果，当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 案例

### 基础用法

Next status 循环六种本地结果状态并更新标题/图形，Reset status 恢复 info；按钮不发请求或导航。Result 只展示传入的 status，不根据标题文字推断成功/失败。

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

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### `<result>` Props

| 参数名   | 描述             | 类型                                                                             |  默认值  |
| -------- | ---------------- | -------------------------------------------------------------------------------- | :------: |
| status   | 结果页显示的状态 | `'info' \| 'success' \| 'warning' \| 'danger' \| 'question' \| 'empty' \| '403' \| '404' \| '500'` | `'info'` |
| title    | 标题内容         | `string`                                                                         |   `-`    |
| subtitle | 子标题内容       | `string`                                                                         |   `-`    |
| image-size | 状态图形尺寸，数字表示 px | `string \| number` | `-` |
| animation | 是否启用状态图形动画 | `boolean` | `true` |

### `<result>` Slots

| 插槽名   |   描述   | 参数 | 版本  |
| -------- | :------: | ---- | :---- |
| icon     |   自定义状态图形   | `{ size?: string }` |       |
| title    |   标题   | -    |       |
| subtitle |  副标题  | -    |       |
| extra    |  操作区  | -    | 2.8.0 |
| default  | 默认插槽 | -    | 2.8.0 |

### 类型定义

组件导出以下类型定义

```ts
import type { ResultInstance } from '@cedarjs/ui'
```
