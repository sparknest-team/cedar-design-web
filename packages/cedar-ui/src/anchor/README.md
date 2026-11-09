---
permalink: /components/anchor/
---

# Anchor

通过锚点可快速找到信息内容在当前页面的位置。

## 基础示例

### 基础用法

锚点的基本用法

<demo src="./__demos__/basic.vue"></demo>

## 布局与排列

### 固钉位置

使用 `affix` 组件可以让锚点固定在页面之内。

<demo src="./__demos__/affix.vue"></demo>

## 内容与展示

### 无轴线模式

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `show-line` | 是否显示左侧轴线 | 无轴线模式 |
| `change-hash` | 是否改变hash。设置为 `false` 时点击锚点不会改变页面的 hash | 是否改变hash |
<!-- demo-config-notes:end -->

设置 `show-line` 为 false 可隐藏轴线，背景仍可独立显示。

<demo src="./__demos__/show-line.vue"></demo>

### 是否改变hash

可以设置点击锚点而不改变浏览器历史。

<demo src="./__demos__/hash.vue"></demo>

## 生命周期与边界

### 锚点滚动偏移量

可以设置 `boundary` 来定制锚点滚动偏移量。

<demo src="./__demos__/boundary.vue"></demo>

指定元素作为 scroll-container 时，点击锚点会滚动目标到该容器之间的各层滚动容器，不滚动其外层或窗口；目标不在指定容器中时不执行定位。使用 Window 或省略容器时，按目标到窗口的滚动链定位。数字 boundary 偏移应用于最外层定位。

轴线与背景可独立显示；切换开关或链接尺寸变化后会重新定位。

### 滚动消费者生命周期

<demo src="./__demos__/scroll-lifecycle.vue"></demo>

连续点击会取消上一次滚动；KeepAlive 停用、卸载、滚动容器或 boundary 改变会取消当前滚动与测量帧，移除原容器监听。激活只重新绑定和测量，不恢复旧动画。旧通知、旧滚动完成和重复帧不能覆盖新阶段；同一目标的重复点击仍保留一次有效的待发 change 通知。失效的保留点击不阻止默认导航，也不发 select。

锚点滚动持续 300ms；启用减少动态效果时直接定位，滚动过程中启用则在下一帧完成。取消滚动时停留在当前位置，不跳到目标，也不触发完成通知。

AnchorLink 卸载或 href 改变后会停止跟踪旧链接；停用、卸载或新的定位请求会使旧的测量结果失效。

## 阅读方向

轴线和高亮位于阅读起点，链接缩进使用逻辑位置，纵向滚动和锚点目标保持不变。

## API

### Anchor Props

| 参数名           | 描述                                                                         | 类型                                                  |  默认值   |
| ---------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------- | :-------: |
| boundary         | 滚动边界值，设置该值为数字后，将会在距离滚动容器 `boundary` 距离时停止滚动。 | `'start' \| 'end' \| 'center' \| 'nearest' \| number` | `'start'` |
| show-line        | 是否显示左侧轴线                                                             | `boolean`                                             |  `true`   |
| show-background  | 是否显示背景                                                                 | `boolean`                                             |  `true`   |
| scroll-container | 滚动容器                                                                     | `string \| HTMLElement \| Window`                     |    `-`    |
| change-hash      | 是否改变hash。设置为 `false` 时点击锚点不会改变页面的 hash                   | `boolean`                                             |  `true`   |

指定元素作为 scroll-container 时，点击锚点会滚动目标到该容器之间的各层滚动容器，不滚动其外层或窗口；目标不在指定容器中时不执行定位。使用 Window 或省略容器时，按目标到窗口的滚动链定位。数字 boundary 偏移应用于最外层定位。

轴线与背景可独立显示；切换开关或链接尺寸变化后会重新定位。

Anchor 跟踪同页 hash 链接；非 hash 地址保留原生导航行为，不参与自动定位。根元素默认为 div，可按需传入 role="navigation" 和 aria-label；当前锚点使用 aria-current="location"。数字 boundary 必须有限，允许负偏移；无效值在开发环境提示并按 start 处理。

### Anchor Events

| 事件名 | 描述               | 参数                                             |
| ------ | ------------------ | ------------------------------------------------ |
| select | 用户点击链接时触发；preHash 是点击前的当前锚点 | hash: `string \| undefined`<br>preHash: `string` |
| change | 链接发生改变时触发 | hash: `string`                                   |

### AnchorLink Props

| 参数名 | 描述               | 类型     | 默认值 |
| ------ | ------------------ | -------- | :----: |
| title  | 锚点链接的文本内容 | `string` |  `-`   |
| href   | 锚点链接的地址     | `string` |  `-`   |

## Types

组件导出以下类型定义

```ts
import type { AnchorProps, AnchorLinkProps, AnchorBoundaryPosition, AnchorInstance, AnchorLinkInstance } from '@cedar-design/ui'
```

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-anchor-border-radius-title-hover` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-anchor-color-bg-line` | `var(--c-color-fill-3)` | `background-color` |
| `--c-anchor-color-bg-line-active` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-anchor-color-bg-title-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-anchor-color-title` | `var(--c-color-text-2)` | `color` |
| `--c-anchor-color-title-active` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-anchor-color-title-hover` | `rgb(var(--c-primary-5))` | `color` |
| `--c-anchor-font-size-title` | `14px` | `font-size` |
| `--c-anchor-font-weight-title-active` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-anchor-font-weight-title-hover` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-anchor-line-slider-height` | `12px` | `height` |
| `--c-anchor-line-width` | `2px` | `inset-inline-start`, `width` |
| `--c-anchor-sub-item--inset` | `-6px` | `margin-inline-start` |
| `--c-anchor-title-margin-bottom` | `var(--c-spacing-1)` | `margin-bottom` |
| `--c-anchor-title-padding-x` | `16px` | `padding-inline-start` |
| `--c-anchor-title-padding-y` | `4px` | `padding` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-anchor-border-radius-title-hover: var(--c-border-radius-sm);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
