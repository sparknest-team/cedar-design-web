---
permalink: /components/ellipsis/
---

# Ellipsis 文本省略

文本省略组件，支持单行和多行文本省略，可配置展开收起功能。

## 基础用法

基础的单行文本省略。

<demo src="./__demos__/basic.vue"></demo>

## 多行省略

通过 `line-clamp` 属性设置多行文本省略。

<demo src="./__demos__/multiline.vue"></demo>

## 展开收起

通过 `expand-trigger` 属性启用点击展开收起功能。

<demo src="./__demos__/expand.vue"></demo>

## 自定义 Tooltip

可以自定义 tooltip 内容或禁用 tooltip。

<demo src="./__demos__/custom-tooltip.vue"></demo>

## 高级用法

在表格、卡片等复杂布局中使用省略组件。

<demo src="./__demos__/advanced.vue"></demo>

## 组件配置

### Ellipsis Props

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| expand | 是否展开 | `boolean` | `false` |
| expandTrigger | 展开触发方式 | `'click'` | `-` |
| lineClamp | 多行省略的行数 | `number \| string` | `-` |
| tooltip | tooltip 配置，`false` 表示禁用 | `object \| boolean` | `true` |

### Ellipsis Events

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| update:expand | 展开状态改变时触发 | `(expand: boolean) => void` |

### Ellipsis Slots

| 插槽名 | 说明 |
| ------ | ---- |
| default | 需要省略的文本内容 |
| tooltip-content | 自定义 tooltip 内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { EllipsisProps, EllipsisExpandTrigger } from '@cedarjs/ui'
```

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称 | 默认值 | 说明 |
| ---- | ------ | ---- |
| --c-ellipsis-background | `transparent` | 省略组件背景色 |

## 使用说明

1. **单行省略**：不设置 `line-clamp` 属性时，组件会使用单行省略模式
2. **多行省略**：设置 `line-clamp` 属性可以控制多行文本的省略行数
3. **展开收起**：设置 `expand-trigger="click"` 可以启用点击展开收起功能
4. **Tooltip 配置**：可以通过 `tooltip` 属性自定义 tooltip 的显示内容和样式
