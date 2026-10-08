---
permalink: /components/trigger/
---

# Trigger

连续点击两个独立触发器时，先关闭之前的顶层浮层，再打开新的浮层；嵌套子浮层仍视为父层内部。受控 open 只发出关闭请求，调用方仍可决定是否接受。

无视觉样式的锚点浮层基础组件，统一负责触发、定位、挂载、层级和打开状态。业务提示优先使用 Tooltip，结构化内容使用 Popover，命令选择使用 DropdownMenu；只有构建新的浮层组件时才直接使用 Trigger。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

### 方位与箭头

<demo src="./__demos__/placement.vue"></demo>

### 受控状态与偏移

`popup-offset` 是沿 placement 主轴向外的距离；`popup-translate` 是屏幕 x/y 轴上的附加平移。

<demo src="./__demos__/controlled.vue"></demo>

## API

### `<Trigger>` Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 受控打开状态 | `boolean` | `-` |
| default-open | 非受控初始状态 | `boolean` | `false` |
| trigger | 触发方式，可组合 | `hover \| click \| focus \| contextMenu \| manual \| TriggerEvent[]` | `hover` |
| disabled | 禁止打开 | `boolean` | `false` |
| reference | 外部参考元素；不传时使用默认插槽首个真实元素 | `string \| HTMLElement \| SVGElement` | `-` |
| placement | 首选方位，支持四个方向及 `-start/-end` | `TriggerPlacement` | `bottom` |
| strategy | 定位策略 | `absolute \| fixed` | `absolute` |
| cover | 沿主轴覆盖参考元素 | `boolean` | `false` |
| popup-offset | 沿 placement 主轴向外的距离 | `number` | `0` |
| popup-translate | 屏幕轴平移，或按 placement 配置平移 | `[number, number] \| Partial<Record<TriggerPlacement, [number, number]>>` | `-` |
| align-point | 以鼠标坐标作为虚拟参考点 | `boolean` | `false` |
| popup-container | 挂载容器；`false` 表示原地渲染 | `string \| HTMLElement \| false` | `body` |
| auto-fit-position | 空间不足时翻转并限制到可视区域 | `boolean` | `true` |
| auto-fit-popup-width | 浮层宽度等于参考元素宽度 | `boolean` | `false` |
| auto-fit-popup-min-width | 浮层最小宽度等于参考元素宽度 | `boolean` | `false` |
| auto-fix-position | 尺寸变化时自动重新定位 | `boolean` | `true` |
| update-at-scroll | 滚动时重新定位 | `boolean` | `false` |
| scroll-to-close | 滚动超过阈值时关闭 | `boolean` | `false` |
| scroll-to-close-distance | 滚动关闭阈值 | `number` | `0` |
| show-arrow | 渲染装饰箭头 | `boolean` | `false` |
| hide-empty | content 为空时不渲染浮层 | `boolean` | `false` |
| prevent-focus | 阻止定位层 mousedown 抢占焦点 | `boolean` | `false` |
| unmount-on-close | 离场结束后卸载内容 | `boolean` | `true` |
| animation-name | Vue Transition 名称 | `string` | `trigger-fade` |
| duration | 过渡时长 | `number \| { enter: number; leave: number }` | `-` |
| auto-fit-transform-origin | 根据最终方位设置动画原点 | `boolean` | `false` |
| opened-class | 打开时附加给首个参考节点的类名 | `ClassName` | `-` |
| popup-class / popup-style | 定位层类名和样式 | `ClassName / CSSProperties` | `-` |
| content-class / content-style | 内容层类名和样式 | `ClassName / CSSProperties` | `-` |
| arrow-class / arrow-style | 箭头类名和样式 | `ClassName / CSSProperties` | `-` |
| mouse-enter-delay / mouse-leave-delay | hover 打开和关闭延迟，毫秒 | `number` | `100 / 100` |
| focus-delay | focus 打开延迟，毫秒 | `number` | `0` |
| popup-hover-stay | 指针进入浮层后保持打开 | `boolean` | `true` |
| blur-to-close | 失焦时关闭 | `boolean` | `true` |
| close-on-click-reference | 再次点击参考元素时关闭 | `boolean` | `true` |
| click-outside-to-close | 点击外部关闭 | `boolean` | `true` |
| esc-to-close | Escape 关闭 | `boolean` | `true` |
| restore-focus | 关闭被接受后恢复参考元素焦点 | `boolean` | `true` |

### Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| update:open | 用户交互发出的受控更新请求 | `open: boolean` |
| open-change | 用户交互请求通知 | `open: boolean` |
| open / close | 实际开始进入 / 离开 | `-` |
| opened / closed | 动画进入 / 离开完成 | `-` |
| click-outside | 最上层浮层收到外部点击 | `event: Event` |
| resize | 参考元素尺寸变化 | `-` |

### Slots

| 插槽 | 说明 |
| --- | --- |
| default | 参考节点 |
| content | 浮层内容 |

### Expose

`open()`、`close()`、`resize()`、`allowClose()`、`getReference()`、`setReference(reference?)`、`focusReference()`、`isTopLayer(event?)`。

## 键盘与可访问性

`trigger="focus"` 支持键盘聚焦；`esc-to-close` 只让最上层浮层响应 Escape。Trigger 不自行设置 `role`、`aria-describedby` 或业务标签，Tooltip、Popover、Menu 等上层组件必须根据语义补充。

## 公开 CSS 变量

以下为实际 :root 默认值。业务定制优先使用组件变量；内部定位变量不属于公开 API。

| 变量 | 默认值 | 意义与场景 |
| --- | --- | --- |
| `--c-trigger-arrow-background` | `var(--c-sys-color-surface-overlay)` | 独立 Trigger 箭头背景；包装组件用自己的变量 |
| `--c-trigger-arrow-size` | `var(--c-sys-space-4)` | 箭头正方形尺寸 |
| `--c-trigger-arrow-radius` | `var(--c-sys-radius-sm)` | 箭头圆角 |
| `--c-trigger-transition-duration` | `var(--c-sys-motion-duration-fast)` | 默认 Trigger 淡入淡出时长 |
| `--c-trigger-transition-easing` | `var(--c-sys-motion-easing-standard)` | 默认 Trigger 缓动曲线 |

Tooltip 与 Popover 自行定义箭头外观；应覆盖其组件变量，而不是 Trigger arrow-background。

使用 Teleport 时，变量需放在实际 popup 的作用域中（例如通过 `popup-style`）；触发按钮上的变量不会自动继承到浮层。

### 减少动态效果

内置 CSS 过渡遵循 `prefers-reduced-motion: reduce`。关闭过渡不改变最终显隐、选中／展开状态及事件语义；插槽内自定义动画由应用自行控制。
