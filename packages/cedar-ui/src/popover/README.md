---
permalink: /components/popover/
---

# Popover

鼠标悬停、聚焦或点击在某个组件时，弹出的气泡式的卡片浮层。可以对卡片上的元素进行操作。

## 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 组件配置

### Popover Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open **(v-model)** | 气泡卡片是否可见 | `boolean` | `-` |
| default-open | 气泡卡片默认是否可见（非受控模式） | `boolean` | `false` |
| title | 标题 | `string` | `-` |
| content | 内容 | `string` | `-` |
| trigger | 触发方式 | `'hover' \| 'click' \| 'focus' \| 'contextMenu' \| 'manual'` | `'hover'` |
| disabled | 是否禁用 | `boolean` | `false` |
| placement | 弹出位置 | `PopoverPlacement` | `'top'` |
| content-class | 弹出内容类名 | `ClassName` | `-` |
| content-style | 弹出内容样式 | `CSSProperties` | `-` |
| arrow-class | 箭头类名 | `ClassName` | `-` |
| arrow-style | 箭头样式 | `CSSProperties` | `-` |
| popup-container | 弹出框挂载容器 | `string \| HTMLElement` | `-` |
| esc-to-close | 是否支持按 ESC 键关闭 | `boolean` | `true` |

### Popover Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| open-change | 显示状态改变时触发 | `open: boolean` |
| open | 开始打开时触发 | `-` |
| opened | 打开动画结束后触发 | `-` |
| close | 开始关闭时触发 | `-` |
| closed | 关闭动画结束后触发 | `-` |
| click-outside | 点击气泡卡片外部时触发 | `event: Event` |

### Popover Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| open | 打开气泡卡片 | `-` |
| close | 关闭气泡卡片 | `-` |
| resize | 重新计算气泡卡片位置 | `-` |

### Popover Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 触发元素 |
| title | 标题 |
| content | 气泡卡片内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { PopoverInstance, PopoverPlacement, PopoverProps, PopoverTrigger } from '@cedarjs/ui'
```
