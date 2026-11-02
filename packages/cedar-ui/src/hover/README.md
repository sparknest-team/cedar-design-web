---
permalink: /components/hover/
---

# Hover 悬停反馈

`v-hover` 通过鼠标进入和离开更新样式或通知回调；`HoverOverlay` 根据显式的悬停与聚焦状态绘制装饰遮层。两者可独立组合，遮层不接管点击和键盘语义。

## 基础示例

### 悬停与焦点

将鼠标移入按钮，观察悬停状态；再通过 Tab 聚焦，观察焦点状态。示例使用原生按钮语义，悬停指令自身只处理 mouseenter / mouseleave，键盘焦点由宿主事件传入。

<demo src="./__demos__/basic.vue"></demo>

## API

### 指令

| 用法 | 说明 |
| --- | --- |
| `v-hover="callback"` | 鼠标进入和离开时通知 `(hovering: boolean) => void` |
| `v-hover="styleObject"` | 鼠标进入时应用样式，离开时恢复 |
| `v-hover:desktop` / `v-hover:mobile` | 按指令的端侧判断启用，不代表支持真实触屏悬停 |

### HoverOverlay Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| hovering | boolean | false | 悬停装饰状态 |
| focusing | boolean | false | 焦点装饰状态 |

`useHoverOverlay()` 返回 `hovering` 与 `handleHovering`，可连接指令回调。遮层使用绝对定位，宿主需提供定位上下文；独立使用时引入 `@cedar-design/ui/hover/style`。
