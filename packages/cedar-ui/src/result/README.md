---
permalink: /components/result/
---

# Result

用于反馈一系列操作任务的处理结果，当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 基础示例

### 基础用法

Next status 循环六种本地结果状态并更新标题/图形，Reset status 恢复 info；按钮不发请求或导航。Result 只展示传入的 status，不根据标题文字推断成功/失败。

展示结果状态。

<demo src="./__demos__/basic.vue"></demo>

## 内容与展示

### 成功、警告与失败

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `status` | 结果页显示的状态 | 成功、警告与失败、HTTP 结果状态对比、完整功能 |
| `title` | 标题内容 | 成功、警告与失败、完整功能 |
| `subtitle` | 子标题内容 | HTTP 结果状态对比 |
<!-- demo-config-notes:end -->

对比语义状态如何影响图形、标题和操作区；HTTP 状态与自定义图形另行展示。

<details>
<summary>配置说明与使用限制</summary>

#### 成功状态

展示成功状态。

#### 警告状态

展示警告状态。

#### 错误状态

展示错误状态。

</details>

<demo src="./__demos__/status-comparison.vue"></demo>

### HTTP 结果状态对比

比较无权限、资源不存在和服务器错误的内容层级，按业务恢复路径选择操作文案。

<details>
<summary>配置说明与使用限制</summary>

#### HTTP状态码 403

没有当前页面的访问权限。

#### HTTP状态码 404

页面未找到

#### HTTP状态码 500

通常表示服务器错误

</details>

<demo src="./__demos__/http-status-comparison.vue"></demo>

### 完整功能

完整功能

<demo src="./__demos__/all.vue"></demo>

## 自定义与插槽

### 自定义状态

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `title` | 标题内容 | 自定义状态 |
| `subtitle` | 子标题内容 | 自定义状态 |
<!-- demo-config-notes:end -->

自定义状态。需要传入指定的图标

<demo src="./__demos__/custom.vue"></demo>

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
import type { ResultInstance } from '@cedar-design/ui'
```
