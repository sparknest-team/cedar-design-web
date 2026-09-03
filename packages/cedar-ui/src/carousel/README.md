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

## API

### `<Carousel>` Props

| 属性                       | 说明                                                                                 | 类型                                              | 默认值                             |
| -------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------- | ---------------------------------- |
| current(`v-model`)         | 当前展示索引（0-based）                                                               | `number`                                          | -                                  |
| default-current            | 当前展示索引默认值（0-based）                                                         | `number`                                          | `0`                                |
| loop                       | 是否循环轮播                                                                         | `boolean`                                         | `true`                             |
| auto-play                  | 是否自动播放；`true` 为 3000ms，数字为间隔毫秒，或 `{ interval, hoverToPause }`       | `boolean \| number \| CarouselAutoPlayConfig`     | `false`                            |
| move-speed                 | 幻灯片移动速率（毫秒）                                                               | `number`                                          | `500`                              |
| trigger                    | 指示器切换触发方式                                                                   | `CarouselTriggerEvent`                            | `click`                            |
| direction                  | 幻灯片移动方向                                                                       | `'horizontal' \| 'vertical'`                      | `horizontal`                       |
| show-arrow                 | 切换箭头显示时机                                                                     | `CarouselArrowType`                               | `always`                           |
| arrow-class                | 切换箭头样式                                                                         | `string`                                          | `-`                                |
| indicator                  | 是否显示指示器                                                                       | `boolean`                                         | `true`                             |
| indicator-type             | 指示器类型                                                                           | `CarouselIndicatorType`                           | `dot`                              |
| indicator-position         | 指示器位置                                                                           | `CarouselIndicatorPosition`                       | `bottom`                           |
| indicator-class            | 指示器的样式                                                                         | `string`                                          | `-`                                |
| indicator-color            | 指示器颜色                                                                           | `string`                                          | `-`                                |
| height                     | 轮播容器高度                                                                         | `string`                                          | `-`                                |
| transition-timing-function | 过渡速度曲线                                                                         | `string`                                          | `cubic-bezier(0.34, 0.69, 0.1, 1)` |
| touchable                  | 是否允许触摸滑动                                                                     | `boolean`                                         | `true`                             |
| draggable                  | 是否允许鼠标拖拽切换                                                                 | `boolean`                                         | `false`                            |
| mousewheel                 | 是否允许鼠标滚轮切换                                                                 | `boolean`                                         | `false`                            |
| keyboard                   | 是否允许键盘方向键切换                                                               | `boolean`                                         | `false`                            |
| slides-per-view            | 每屏显示的 slide 数量，`'auto'` 时由 slide 自身宽度决定                               | `number \| 'auto'`                                | `1`                                |
| space-between              | slide 之间的间距                                                                     | `string \| number`                                | `0`                                |
| aria-label                 | 轮播区域无障碍标签                                                                   | `string`                                          | `Carousel`                         |
| previous-button-aria-label | 上一页按钮无障碍标签                                                                 | `string`                                          | `Previous slide`                   |
| next-button-aria-label     | 下一页按钮无障碍标签                                                                 | `string`                                          | `Next slide`                       |

### `<Carousel>` Events

| 事件名 | 描述                       | 参数                                                            |
| ------ | -------------------------- | --------------------------------------------------------------- |
| `update:current` | v-model 绑定值更新时触发（0-based） | `index: number` |
| `change` | 幻灯片发生切换时的回调函数（0-based） | `index: number` <br/> `prevIndex: number` <br/> `isManual: boolean` |

### `<Carousel>` Methods

通过 ref 可以调用以下方法：

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| `next` | 切换到下一页 | `-` |
| `prev` | 切换到上一页 | `-` |
| `to` | 跳转到指定索引 | `index: number` |
| `resize` | 重新计算轮播尺寸 | `-` |

### `<Carousel>` Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 轮播项内容，放置 `<CarouselItem>` | `-` |
| `prev` | 自定义上一页按钮 | `{ index, length, prev, next, to, hovering }` |
| `next` | 自定义下一页按钮 | `{ index, length, prev, next, to, hovering }` |
| `indicator` | 自定义指示器 | `{ index, length, prev, next, to, hovering }` |

### `<CarouselItem>` Props

`CarouselItem` 无额外 props，通过 provide/inject 从父组件 `Carousel` 获取配置。

### 类型定义

```ts
type CarouselTriggerEvent = 'click' | 'hover'
type CarouselArrowType = 'always' | 'hover' | 'never'
type CarouselIndicatorType = 'dot' | 'line' | 'slider'
type CarouselIndicatorPosition = 'bottom' | 'top' | 'left' | 'right' | 'outer'
type CarouselAutoPlayConfig = {
  interval?: number
  hoverToPause?: boolean
}
```
