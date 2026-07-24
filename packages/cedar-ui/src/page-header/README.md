---
permalink: /components/page-header/
---

# PageHeader 页头

内容区顶部的页面标题结构，适合列表页、详情页等需要描述当前页面的场景。默认无底色。

> 与 Maple 移动端 **AppBar** 不同：AppBar 是应用顶栏 chrome（固定导航条），PageHeader 是页内标题区。桌面端产品级顶栏请使用 `Layout.Header` / `SaasHeaderNav`。

## 案例

### 基础用法

带返回、主标题、副标题与右侧操作。

<demo src="./__demos__/basic.vue"></demo>

### 带有面包屑

通过 `breadcrumb` 插槽展示面包屑；可关闭返回按钮。

<demo src="./__demos__/breadcrumb.vue"></demo>

### 组合示例

面包屑 + 返回 + 自定义副标题/操作 + 下方内容区。

<demo src="./__demos__/content.vue"></demo>

### 透明底色

默认无底色，可用 `style` 或类名设置背景。

<demo src="./__demos__/transparent.vue"></demo>

## API

### PageHeader Props

| 属性      | 说明             | 类型      | 默认值 |
| --------- | ---------------- | --------- | ------ |
| title     | 页头的主标题     | `string`  | `-`    |
| subtitle  | 页头的次标题     | `string`  | `-`    |
| show-back | 是否显示返回按钮 | `boolean` | `false` |

### PageHeader Events

| 事件名 | 说明               | 参数           |
| ------ | ------------------ | -------------- |
| back   | 点击返回按钮时触发 | event: `Event` |

### PageHeader Slots

| 插槽名     | 说明           | 参数 |
| ---------- | -------------- | ---- |
| breadcrumb | 面包屑         | -    |
| back-icon  | 自定义返回图标 | -    |
| title      | 主标题         | -    |
| subtitle   | 次标题         | -    |
| extra      | 右侧额外内容   | -    |
| default    | 页头下方内容区 | -    |

## 类型定义

```ts
import type { PageHeaderProps } from '@cedar/ui'
```
