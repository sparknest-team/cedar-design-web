---
permalink: /components/trigger/
---

# Trigger



更换或清空浮层引用，以及卸载组件时，会移除旧窗口的滚动监听。

关闭或解绑后，尚未执行的定位和滚动关闭任务不会影响后续打开的浮层。

mouse-enter-delay／mouse-leave-delay 是交互请求延迟，独立于CSS进出时长。取消、替换、KeepAlive停用或卸载后，旧已出队回调不会提交；停用或卸载后保留的请求方法不再调度。重新激活接受新请求、不重放旧延迟，受控open仍由调用方决定。

连续点击两个独立触发器时，先关闭之前的顶层浮层，再打开新的浮层；嵌套子浮层仍视为父层内部。受控 open 只发出关闭请求，调用方仍可决定是否接受。

无视觉样式的锚点浮层基础组件，统一负责触发、定位、挂载、层级和打开状态。业务提示优先使用 Tooltip，结构化内容使用 Popover，命令选择使用 Menu；只有构建新的浮层组件时才直接使用 Trigger。

## 基础示例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

## 布局与排列

### 方位与箭头

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `trigger` | 触发方式，可组合 | 方位与箭头 |
| `placement` | 浮层相对触发元素的首选方位，默认 bottom；启用默认的 auto-fit-position 时，空间不足会自动翻转并约束到可视区域，不保证最终停在该侧 | 方位与箭头 |
| `popup-offset` | 沿 placement 主轴向外的距离 | 方位与箭头 |
| `show-arrow` | 渲染装饰箭头 | 方位与箭头 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/placement.vue"></demo>

## 交互与控制

### 受控状态与偏移

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `open` | 受控打开状态 | 受控状态与偏移 |
| `trigger` | 触发方式，可组合 | 受控状态与偏移 |
| `placement` | 浮层相对触发元素的首选方位，默认 bottom；启用默认的 auto-fit-position 时，空间不足会自动翻转并约束到可视区域，不保证最终停在该侧 | 受控状态与偏移 |
| `popup-offset` | 沿 placement 主轴向外的距离 | 受控状态与偏移 |
| `popup-translate` | 屏幕轴平移，或按 placement 配置平移 | 受控状态与偏移 |
<!-- demo-config-notes:end -->

`popup-offset` 是沿 placement 主轴向外的距离；`popup-translate` 是屏幕 x/y 轴上的附加平移。

本例通过 `v-model:open` 接受开关请求，面板显示父级实际值。外部打开/关闭按钮直接更新父级；触发元素上的 Enter/Space 会产生原生按钮点击，Escape 或外部点击请求关闭。示例没有拒绝请求，不代表受控拒绝场景已覆盖。

<demo src="./__demos__/controlled.vue"></demo>

## 触发与定位

### 弹层定位

placement 是首选方位，auto-fit-position 默认 true 时最终方位可能变化；它不是 position 坐标。top-start 与 top-left 不是同一种枚举：前者是锚点方位及沿边对齐，后者是容器角落。top/bottom 的 start/end 随阅读方向镜像；left/right 仍是物理方位，纵向 start/end 维持上下语义。

## 使用说明

### 配置说明

以下为实际 :root 默认值。业务定制优先使用组件变量；内部定位变量不属于公开 API。

使用 Teleport 时，变量需放在实际 popup 的作用域中（例如通过 `popup-style`）；触发按钮上的变量不会自动继承到浮层。

### 减少动态效果

`allowClose()` 只恢复内部关闭门控；没有公开的对应禁用方法，也不能用它阻止关闭。

## API

### Trigger Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dir | 阅读方向；省略时继承来源作用域。物理 left/right 方位保持原意。 | `ReadingDirection` (`ltr` / `rtl`) | — |
| open | 受控打开状态 | `boolean` | `-` |
| default-open | 非受控初始状态 | `boolean` | `false` |
| trigger | 触发方式，可组合 | `hover \| click \| focus \| contextMenu \| manual \| TriggerEvent[]`<br>`TriggerEvent: 'manual' \| 'hover' \| 'click' \| 'focus' \| 'contextMenu'` | `hover` |
| disabled | 禁止打开 | `boolean` | `false` |
| reference | 外部参考元素；不传时使用默认插槽首个真实元素 | `string \| HTMLElement \| SVGElement` | `-` |
| placement | 浮层相对触发元素的首选方位，默认 bottom；启用默认的 auto-fit-position 时，空间不足会自动翻转并约束到可视区域，不保证最终停在该侧 | `TriggerPlacement`<br>`'left' \| 'right' \| 'bottom' \| 'top' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `bottom` |
| strategy | 定位策略 | `absolute \| fixed` | `absolute` |
| cover | 沿主轴覆盖参考元素 | `boolean` | `false` |
| popup-offset | 沿 placement 主轴向外的距离 | `number` | `0` |
| popup-translate | 屏幕轴平移，或按 placement 配置平移 | `[number, number] \| Partial<Record<TriggerPlacement, [number, number]>>`<br>`TriggerPlacement: 'left' \| 'right' \| 'bottom' \| 'top' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `-` |
| align-point | 以鼠标坐标作为虚拟参考点 | `boolean` | `false` |
| popup-container | 挂载容器；`false` 表示原地渲染。同文档或可访问的同源 iframe 之间切换时，会尝试恢复未转移的原生输入、按钮等焦点，包括开放 Shadow DOM 中的同类元素；可能承载封闭 Shadow DOM 的不透明宿主不会自动恢复。 | `string \| HTMLElement \| false` | `body` |
| auto-fit-position | 空间不足时翻转并限制到可视区域 | `boolean` | `true` |
| auto-fit-popup-width | 浮层宽度等于参考元素宽度 | `boolean` | `false` |
| auto-fit-popup-min-width | 浮层最小宽度等于参考元素宽度 | `boolean` | `false` |
| auto-fix-position | 是否观察触发元素的尺寸变化；禁用该选项后仍观察浮层和定位父级，并响应窗口变化 | `boolean` | `true` |
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
| opened-class | 打开时合并给默认插槽的首个节点；外部 reference 不添加该类 | `ClassName` | `-` |
| reference-attrs | 写入实际参考元素的属性，或接收 open 的函数；属性撤销、引用替换或卸载时恢复原属性 | `TriggerReferenceAttrs \| ((open: boolean) => TriggerReferenceAttrs)` | `-` |
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

### Trigger Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| update:open | 用户交互发出的受控更新请求 | `open: boolean` |
| open-change | 用户交互请求通知 | `open: boolean` |
| open / close | 实际开始进入 / 离开 | `-` |
| opened / closed | 动画进入 / 离开完成 | `-` |
| click-outside | 最上层浮层收到外部点击 | `event: Event` |
| resize | 参考元素尺寸变化 | `-` |

### Trigger Slots

| 插槽 | 说明 |
| --- | --- |
| default | 参考节点 |
| content | 浮层内容 |

### Trigger Methods

`open()`、`close()`、`resize()`、`allowClose()`、`getReference()`、`setReference(reference?)`、`focusReference()`、`isTopLayer(event?)`。

## 键盘与可访问性

`trigger="focus"` 支持键盘聚焦；`esc-to-close` 只让最上层浮层响应 Escape。Trigger 不自行设置 `role`、`aria-describedby` 或业务标签，Tooltip、Popover、Menu 等上层组件必须根据语义补充。

## 参考元素的原生事件修饰符

`click`、`mouseenter`、`mouseleave`、`focusin`、`focusout`、`contextmenu` 的原生监听器和 `.once`、`.capture`、`.passive` 均绑定到实际参考元素，不会落到浮层。`.once` 按原生元素的监听生命周期执行；更新回调不重新启用已消费的监听，换参考元素或移除后重加监听才开始新的周期。停用和卸载会解绑。普通监听器只通知，返回 Promise 不驱动打开或加载，异常进入 Vue 的事件错误处理链。

`reference-attrs` 的 `aria-describedby` 与参考元素已有描述 ID 合并去重；清理或更换引用时恢复原始属性。

`fixed` 定位会识别 transform、filter、perspective 等形成的固定定位包含块，并处理轴向缩放；不保证旋转或倾斜坐标系精确。可访问的同源 iframe 引用与弹层之间会换算坐标并绑定各自文档事件；不支持跨源或无共同祖先的浏览上下文。启用 `update-at-scroll` 时，两端文档及可滚动祖先的滚动都会更新位置。

## CSS Variables

Tooltip 与 Popover 自行定义箭头外观；应覆盖其组件变量，而不是 Trigger arrow-background。

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-trigger-arrow-background` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-trigger-arrow-radius` | `var(--c-sys-radius-sm)` | `border-radius` |
| `--c-trigger-arrow-size` | `var(--c-sys-space-4)` | `height`, `width` |
| `--c-trigger-transition-duration` | `var(--c-sys-motion-duration-fast)` | `transition` |
| `--c-trigger-transition-easing` | `var(--c-sys-motion-easing-standard)` | `transition` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-trigger-arrow-background: var(--c-sys-color-surface-overlay);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

### 减少动态效果

内置 CSS 过渡遵循 `prefers-reduced-motion: reduce`。关闭过渡不改变最终显隐、选中／展开状态及事件语义；插槽内自定义动画由应用自行控制。
