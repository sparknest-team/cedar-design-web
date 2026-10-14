---
permalink: /components/carousel/
---

# Carousel

用于展示多张图片、视频或内嵌框架等内容的循环播放，支持系统自动播放或用户手动切换。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

### 禁止循环

通过 `loop` 属性可以控制是否循环轮播。

<demo src="./__demos__/forbid-loop.vue"></demo>

### 自动播放

通过 `auto-play` 开启自动播放。传入 `true` 使用默认间隔 3000ms；传入数字则作为间隔（毫秒）。

<demo src="./__demos__/autoplay.vue"></demo>

示例使用 2000ms 间隔，下方页码按 1 开始显示（API 索引仍从 0 开始）。取消勾选立即停止自动播放，重新开启后继续；焦点在轮播内部时也会暂停。

### 悬停暂停自动播放

`auto-play` 支持传入对象 `{ interval, hoverToPause }` 进行高级配置。

<demo src="./__demos__/auto-play-hover.vue"></demo>

### 垂直轮播

通过 `direction` 属性可以控制轮播方向，支持 `horizontal` 和 `vertical`。

<demo src="./__demos__/vertical.vue"></demo>

### 切换箭头

通过 `show-arrow` 控制切换箭头的显示时机，支持 `always`、`hover`、`never`。PC 端默认 `always`。

<demo src="./__demos__/navigation.vue"></demo>

### 多图同屏

通过 `slides-per-view` 和 `space-between` 属性可以控制每屏显示的 slide 数量及间距。

<demo src="./__demos__/multi-slides.vue"></demo>

### 指示器类型

通过 `indicator-type` 设置指示器类型，支持 `dot`、`line`、`slider`。隐藏指示器请使用 `indicator`。

<demo src="./__demos__/indicator-type.vue"></demo>

### 指示器位置

通过 `indicator-position` 属性可以设置指示器位置。

<demo src="./__demos__/indicator-position.vue"></demo>

### 悬停触发

通过 `trigger` 属性可以设置指示器的触发方式，支持 `click` 和 `hover`。

<demo src="./__demos__/trigger.vue"></demo>

### 鼠标滚轮控制

通过 `mousewheel` 属性可以开启鼠标滚轮切换。

<demo src="./__demos__/mousewheel.vue"></demo>

### 键盘控制

通过 `keyboard` 属性可以开启键盘方向键切换。

<demo src="./__demos__/keyboard.vue"></demo>

### 自定义指示器

通过 `#indicator` 插槽可以自定义指示器。

<demo src="./__demos__/custom-indicator.vue"></demo>

### 监听切换事件

通过 `change` 事件可以监听幻灯片切换。

<demo src="./__demos__/change-event.vue"></demo>

### effect-fade

<demo src="./__demos__/effect-fade.vue"></demo>

### effect-card

<demo src="./__demos__/effect-card.vue"></demo>

### centered-slides

<demo src="./__demos__/centered-slides.vue"></demo>

### controlled

<demo src="./__demos__/controlled.vue"></demo>

### auto-sized

<demo src="./__demos__/auto-sized.vue"></demo>

### interactive-content

<demo src="./__demos__/interactive-content.vue"></demo>

## API

### Carousel Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `current` | 受控索引，零基 | `number` | `undefined` |
| `default-current` | 非受控初始索引 | `number` | `0` |
| `loop` | 循环，跨边界不复制实例 | `boolean` | `true` |
| `auto-play` | 自动播放及间隔 | `boolean \| number \| CarouselAutoPlayConfig` | `false` |
| `move-speed` | 显式切换时长（毫秒） | `number` | `undefined (token)` |
| `trigger` | 指示器触发方式 | `click \| hover` | `click` |
| `direction` | 内部滑动方向 | `horizontal \| vertical` | `horizontal` |
| `show-arrow` | 箭头显示策略 | `always \| hover \| never` | `always` |
| `arrow-class` | 箭头附加类 | `string` | `undefined` |
| `indicator` | 显示指示器 | `boolean` | `true` |
| `indicator-type` | 指示器样式 | `dot \| line \| slider` | `dot` |
| `indicator-position` | 指示器位置 | `bottom \| top \| left \| right \| outer` | `bottom` |
| `indicator-class` | 指示器附加类 | `string` | `undefined` |
| `indicator-color` | 自定义指示器背景 | `string` | `undefined` |
| `height` | 容器高度，数字为px | `number \| string` | `undefined` |
| `transition-timing-function` | 显式缓动曲线 | `string` | `undefined (token)` |
| `touchable` | 触摸拖动 | `boolean` | `true` |
| `draggable` | 鼠标拖动，可与触摸并存 | `boolean` | `false` |
| `mousewheel` | 滚轮切换 | `boolean` | `false` |
| `keyboard` | 组件内方向键/Home/End | `boolean` | `false` |
| `slides-per-view` | 同时显示页数；auto使用子项宽高 | `number \| auto` | `1` |
| `space-between` | 项间距；数字/数字字符串为px | `number \| string` | `0` |
| `effect` | 视觉效果，两端全部支持 | `slide \| fade \| card` | `slide` |
| `centered-slides` | 当前页居中 | `boolean` | `false` |
| `aria-label` | 轮播可访问名称 | `string` | Locale |
| `previous-button-aria-label` | 上一页按钮名称 | `string` | Locale |
| `next-button-aria-label` | 下一页按钮名称 | `string` | Locale |

### 模型与交互
索引从零开始。受控操作先发 update:current，再发 change(index, previousIndex, isManual)，父级接受 current 前不移动；外部赋值不补发 change。方法 options 的 event:false 只关闭 change，不吞掉模型提议。用户操作的 isManual 为 true，自动播放为 false。

loop 跨边界移动原有子项，不复制组件实例。非循环且未居中时，末尾视区钳制以避免留白，选中项可能在最后一组可见项内移动而不再移动轨道。部分可见页保持可访问，完全离屏页 inert。fade 固定展示一页；auto 使用 CarouselItem 显式 width（横向）或 height（纵向），纵向需提供容器高度。默认插槽只统计 CarouselItem（可包在 Vue Fragment 中），注释、普通元素不成为页。

auto-play=true 使用 3000ms 且悬停暂停，数字指定毫秒且不启用悬停暂停；对象配置 interval/hoverToPause。焦点在组件内、拖动中、文档/祖先隐藏、KeepAlive 停用始终暂停。尊重减少动态效果偏好。输入框、按钮等交互子项保留原生行为，自定义交互区域可加 data-carousel-no-drag。show-arrow=hover 在键盘聚焦时也显示。

### Events
| 事件 | 参数 |
| --- | --- |
| update:current | index: number |
| change | index: number, previousIndex: number, isManual: boolean |

### Slots
| 插槽 | 参数 |
| --- | --- |
| default | CarouselItem |
| prev / next / indicator | { index, length, hovering, prev, next, to, resize } |

### Methods
| 方法 | 签名 |
| --- | --- |
| prev / next | (options?: CarouselToOptions) => void |
| to | (index: number, options?: CarouselToOptions) => void |
| resize | () => void |

CarouselItem 无自有 Props、事件或方法；默认插槽为页面内容。

### Types
CarouselProps, CarouselItemProps, CarouselInstance, CarouselItemInstance, CarouselEmits, CarouselSlots, CarouselItemSlots, CarouselExpose, CarouselSlotScope, CarouselToOptions, CarouselChangeData, CarouselDirection, CarouselEffect, CarouselAutoPlayConfig, CarouselArrowType, CarouselIndicatorType, CarouselIndicatorPosition, CarouselTriggerEvent.

### 样式变量

| Token | 默认值 |
| --- | --- |
| `--c-carousel-indicator-dot-size` | `8px` |
| `--c-carousel-indicator-position` | `var(--c-sys-space-4)` |
| `--c-carousel-indicator-gap` | `var(--c-sys-space-3)` |
| `--c-carousel-indicator-color-default` | `rgb(255 255 255 / 35%)` |
| `--c-carousel-indicator-color-active` | `var(--c-sys-color-content-on-dark)` |
| `--c-carousel-indicator-outer-margin-bottom` | `var(--c-sys-space-8)` |
| `--c-carousel-indicator-line-width` | `20px` |
| `--c-carousel-indicator-line-height` | `3px` |
| `--c-carousel-indicator-line-border-radius` | `var(--c-sys-radius-sm)` |
| `--c-carousel-arrow-size` | `var(--c-sys-control-height-md)` |
| `--c-carousel-arrow-font-size` | `var(--c-sys-font-size-xl)` |
| `--c-carousel-arrow-margin` | `var(--c-sys-space-4)` |
| `--c-carousel-arrow-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-carousel-arrow-background` | `rgb(0 0 0 / 35%)` |
| `--c-carousel-arrow-background-hover` | `rgb(0 0 0 / 55%)` |
| `--c-carousel-arrow-disabled-opacity` | `0.4` |
| `--c-carousel-navigation-z-index` | `10` |
| `--c-carousel-transition-duration` | `var(--c-sys-motion-duration-standard)` |
| `--c-carousel-transition-timing-function` | `ease` |
| `--c-carousel-fade-duration` | `var(--c-sys-motion-duration-standard)` |
| `--c-carousel-card-duration` | `var(--c-sys-motion-duration-standard)` |
| `--c-carousel-card-scale` | `0.85` |
| `--c-carousel-card-opacity` | `0.6` |
| `--c-carousel-focus-width` | `2px` |
| `--c-carousel-focus-offset` | `2px` |
| `--c-carousel-focus-color` | `var(--c-sys-color-content-brand)` |


### 循环过渡边界

每个轮播项始终只有一个组件实例。普通上一页/下一页在出场项离开后回收位置；跨多页或居中跳转若需要同一项同时占据两个位置，则直接无动画定位，不复制交互内容，也不排队执行无限过渡。项目数量小于可视页数时不会复制项目填满。可访问名称跟随全局 Locale，显式标签属性优先。
