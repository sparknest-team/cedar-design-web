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

| 属性     | 说明             | 类型      | 默认值  |
| -------- | ---------------- | --------- | ------- |
| show-back | 是否显示返回按钮 | `boolean` | `false` |
| title    | 页头的主标题     | `string`  | `-`     |
| subtitle | 页头的次标题     | `string`  | `-`     |
| extra    | 右侧附加内容     | `string`  | `-`     |

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

## 同源实现与平台边界

两端各自保存完整源码，不引用公共核心，不共享组件实例或响应式状态；修改时同步维护两份实现。主体、Props、关键样式及配对测试纳入只读源码一致性检查，主题 token 和安装入口各自维护。

返回按钮统一使用原生 button，支持键盘触发并派发 back(MouseEvent)。Cedar 内部类名由 c-page-header-xxx 调整为 c-page-header__xxx；图标资源仍由本库提供。
