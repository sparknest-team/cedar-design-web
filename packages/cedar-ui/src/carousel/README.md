---
permalink: /components/carousel/
---

# Carousel

用于展示多张图片、视频或内嵌框架等内容的循环播放，支持系统自动播放或用户手动切换。

## 案例

### 基础用法

基础用法

<demo src="./__demos__/basic.vue"></demo>

## API

### `<Carousel>` Props

| 属性                       | 说明                                                                                 | 类型                                              | 默认值                             |
| -------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------- | ---------------------------------- |
| current(`v-model`)         | 当前展示索引                                                                         | number                                            | -                                  |
| default-current            | 当前展示索引（默认值）                                                               | number                                            | 1                                  |
| auto-play                  | 是否自动循环展示，或传入高级配置对象 `{ interval: 时间间隔, hoverToPause: 是否暂停}` | boolean \| CarouselAutoPlayConfig                 | false                              |
| move-speed                 | 幻灯片移动速率（毫秒）                                                               | number                                            | 500                                |
| animation-name             | 切换动画类型                                                                         | 'slide' \| 'fade' \| 'card'                       | 'slide'                            |
| trigger                    | 幻灯片切换触发方式                                                                   | 'click' \| 'hover'                                | 'click'                            |
| direction                  | 幻灯片移动方向                                                                       | 'horizontal' \| 'vertical'                        | 'horizontal'                       |
| show-arrow                 | 切换箭头显示时机                                                                     | 'always' \| 'hover' \| 'never'                    | 'always'                           |
| arrow-class                | 切换箭头样式                                                                         | string                                            | ''                                 |
| indicator-type             | 指示器类型                                                                           | 'line' \| 'dot' \| 'slider' \| 'never'            | 'dot'                              |
| indicator-position         | 指示器位置                                                                           | 'bottom' \| 'top' \| 'left' \| 'right' \| 'outer' | 'bottom'                           |
| indicator-class            | 指示器的样式                                                                         | string                                            | ''                                 |
| transition-timing-function | 过渡速度曲线，默认匀速                                                               | string                                            | 'cubic-bezier(0.34, 0.69, 0.1, 1)' |

### `<Carousel>` Events

| 事件名 | 描述                       | 参数                                                            |
| ------ | -------------------------- | --------------------------------------------------------------- |
| change | 幻灯片发生切换时的回调函数 | index:`number`<br/> prevIndex:`number` <br/> isManual:`boolean` |

### 类型定义

组件导出以下类型定义

```ts
import type { Carousel } from '@cedar/ui'
```
