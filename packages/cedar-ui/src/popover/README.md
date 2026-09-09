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
| popup-container | 弹出框挂载容器 | `string \| HTMLElement \| false` | `-` |
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

## 共同组件主体与 Trigger 契约

两端使用独立复制的组件主体；所有开关状态和生命周期由底层 Trigger 管理。`open` 是受控值，`defaultOpen` 初始化非受控状态；请求只派发一次 `update:open` 和 `open-change`，实际变化才产生 open/close，过渡完成才产生 opened/closed。默认打开也会产生首次 open。

明确支持 Trigger 的交互与渲染字段，包括 trigger（单值/数组）、disabled、mouseEnterDelay、mouseLeaveDelay、focusDelay、popupHoverStay、blurToClose、clickOutsideToClose、escToClose、restoreFocus、unmountOnClose、duration、showArrow、popupClass/popupStyle、contentClass/contentStyle、arrowClass/arrowStyle。各端定位扩展继续使用该端 Trigger 字段。

公开方法：open、close、resize、allowClose、getReference、setReference、focusReference。setReference() 无参数时恢复默认插槽引用，HTML/SVG 引用均受支持；focusReference 不会导致 focus 触发器再次打开。

默认值保留：Cedar Tooltip/Popover 为 hover、top、100 ms 延迟、有箭头、关闭后卸载；Maple Tooltip 为 hover，Popover 为 click，二者 bottom、零延迟、默认无箭头、关闭后保留内容。需要一致行为时显式传这些属性。

Popover 两端均支持 title/content 属性和同名插槽，插槽优先。Maple 内容新增 title/body 子层，原 popoverClass、defaultStyle、elevation 继续作用于外部内容面板；依赖直接子元素的 CSS 请改为针对 body 内的目标节点。
