---
permalink: /components/page-header/
---

# PageHeader 页头

展示当前页面的标题、上下文和相关操作。API 参照 Naive UI；组件不负责固定定位、背景等业务布局与皮肤能力，可通过 `class` / `style` 实现。

## 案例

### 基础用法

带返回、主标题、副标题与右侧操作。

<demo src="./__demos__/basic.vue"></demo>

### 页头上方内容

通过 `header` 插槽展示面包屑等页头上方内容。

<demo src="./__demos__/breadcrumb.vue"></demo>

### 完整结构

包含 `header`、`avatar`、正文和 `footer`。

<demo src="./__demos__/content.vue"></demo>

### 透明底色

默认无底色，可用 `style` 或类名设置背景。

<demo src="./__demos__/transparent.vue"></demo>

## API

### PageHeader Props

| 属性     | 说明         | 类型     | 默认值 |
| -------- | ------------ | -------- | ------ |
| title    | 页头的主标题 | `string` | `-`    |
| subtitle | 页头的次标题 | `string` | `-`    |
| extra    | 右侧附加内容 | `string` | `-`    |

### PageHeader Events

| 事件名 | 说明               | 参数           |
| ------ | ------------------ | -------------- |
| back   | 点击返回按钮时触发 | event: `Event` |

### PageHeader Slots

| 插槽名   | 说明           | 参数 |
| -------- | -------------- | ---- |
| header   | 页头上方内容   | -    |
| back     | 自定义返回图标 | -    |
| avatar   | 头像           | -    |
| title    | 主标题         | -    |
| subtitle | 次标题         | -    |
| extra    | 右侧额外内容   | -    |
| default  | 页头正文内容   | -    |
| footer   | 页头底部内容   | -    |

## 类型定义

```ts
import type { PageHeaderProps } from '@cedarjs/ui'
```
