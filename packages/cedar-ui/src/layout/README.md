---
permalink: /components/layout/
---

# Layout

页面的基础布局框架，常与组件嵌套使用，构建页面整体布局。

## 案例

### 基本用法

典型的页面布局

<demo src="./__demos__/basic.vue"></demo>

### 可伸缩侧边栏

可以用鼠标进行拖拽放大缩小的侧边栏，需要用到的参数：resize-directions。

<demo src="./__demos__/resize.vue"></demo>

### 侧栏折叠

通过 `v-model:collapsed` 控制折叠，也可以使用 `default-collapsed` 设置非受控初始状态。

<demo src="./__demos__/collapse.vue"></demo>

### 固定头尾与独立滚动

设置容器高度，对内容区域开启 `scrollable`。`scrollTo` 支持坐标和原生滚动选项。

<demo src="./__demos__/scroll.vue"></demo>

### 侧栏位置与折叠模式

`placement` 自动调整侧栏位置和箭头方向。`width` 模式改变内容可用宽度，`transform` 模式保留内容宽度。零宽度折叠时仍保留展开按钮，内部内容不可聚焦。

<demo src="./__demos__/sider-options.vue"></demo>

## API

### Layout Props

| 参数名    | 描述                                                               | 类型    | 默认值 |
| --------- | ------------------------------------------------------------------ | ------- | :----: |
| scrollable | 是否在自身启用原生滚动（需要约束高度） | boolean | false |
| has-sider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | boolean | false  |

### Layout-Header Slots

| 插槽名  | 描述 | 参数 |
| ------- | :--: | ---- |
| default | 内容 | -    |

### Layout-content Slots

| 插槽名  | 描述 | 参数 |
| ------- | :--: | ---- |
| default | 内容 | -    |

### Layout-Footer Slots

| 插槽名  | 描述 | 参数 |
| ------- | :--: | ---- |
| default | 内容 | -    |

### Layout-Sider Props

| 参数名            | 描述                                                                                                 | 类型                                          | 默认值  |
| ----------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------- | :-----: |
| theme             | 主题颜色                                                                                             | 'dark' \| 'light'                             | 'light' |
| collapsed         | 当前收起状态                                                                                         | boolean                                       |    -    |
| default-collapsed | 默认的收起状态                                                                                       | boolean                                       |  false  |
| collapsible       | 是否可收起                                                                                           | boolean                                       |  false  |
| width             | 宽度                                                                                                 | number \| string                              |   200   |
| collapsed-width   | 收缩宽度                                                                                             | number                                        |   48    |
| reverse-arrow     | 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用                                                    | boolean                                       |  false  |
| breakpoint        | 触发响应式布局的断点, 详见响应式栅格                                                                 | 'xxl' \| 'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs' |    -    |
| resize-directions | 可以用 ResizeBox 替换原生的 aside 标签，这个参数即 ResizeBox的 directions 参数。详情请看 ResizeBox。 | Array<'left' \| 'right' \| 'top' \| 'bottom'> |    -    |
| hide-trigger      | 隐藏底部折叠触发器                                                                                   | boolean                                       |  false  |

### Layout-Sider Events

| 事件名     | 描述                                                             | 参数                                                     |
| ---------- | ---------------------------------------------------------------- | -------------------------------------------------------- |
| collapse   | 展开-收起时的事件，有点击 trigger 以及响应式反馈两种方式可以触发 | collapsed: boolean<br>type: 'clickTrigger'\|'responsive' |
| breakpoint | 触发响应式布局断点时的事件                                       | collapsed: boolean                                       |

### Layout-Sider Slots

| 插槽名  |         描述         | 参数               |
| ------- | :------------------: | ------------------ |
| trigger | 自定义底部折叠触发器 | collapsed: boolean |

## 类型定义

组件导出以下类型定义

```ts
import type { LayoutProps } from '@cedarjs/ui'
```

### 新增布局能力

| 组件 | 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| Content | scrollable | boolean | false | 自身作为原生滚动容器 |
| Header / Footer / Sider | bordered | boolean | false | 显示与内容相邻的边框 |
| Sider | placement | 'left' / 'right' | 'left' | 侧栏所在方向，自动处理箭头；reverse-arrow 仍兼容 |
| Sider | collapse-mode | 'width' / 'transform' | 'width' | 折叠时改变内容宽度或移动内容 |

Layout、Content、Sider 均提供 `scroll` 事件（参数为原生 Event）及 `scrollTo(options: ScrollToOptions)` / `scrollTo(x: number, y: number)` 方法。Sider 默认在内部内容节点滚动。`width` 支持数字像素或 CSS 长度字符串；百分比宽度与 transform 模式组合不推荐，建议用 px/rem 等确定长度。

折叠按钮使用原生 button，支持 Tab、Enter 和空格；`collapsed-width="0"` 时隐藏区域设为 inert，展开入口保留在侧栏边缘。自定义 trigger 插槽应使用展示内容，避免嵌套按钮。
