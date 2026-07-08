---
permalink: /components/page-header/
---

# PageHeader

基础页头，适合使用在需要简单描述的场景。默认是没有底色的。

## 案例

### 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

### 带有面包屑

在页头中展示面包屑。

<demo src="./__demos__/breadcrumb.vue"></demo>

## API

### PageHeader Props

| 属性      | 说明             | 类型      | 默认值  |
| --------- | ---------------- | --------- | ------- |
| title     | 页头的主标题     | `string`  | `-`     |
| subtitle  | 页头的次标题     | `string`  | `-`     |
| show-back | 是否显示返回按钮 | `boolean` | `false` |

### PageHeader Events

| 事件名 | 说明               | 参数           |
| ------ | ------------------ | -------------- |
| back   | 点击返回按钮时触发 | event: `Event` |

### PageHeader Slots

| 插槽名     | 说明           | 参数 |
| ---------- | -------------- | ---- |
| breadcrumb | 面包屑         | -    |
| back-icon  | 返回按钮       | -    |
| title      | 主标题         | -    |
| subtitle   | 次标题         | -    |
| extra      | 额外的展示内容 | -    |

## 类型定义

组件导出以下类型定义

```ts
import type { PageHeaderProps } from '@cedar/ui'
```
