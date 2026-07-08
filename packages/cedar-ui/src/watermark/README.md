---
permalink: /components/watermark/
---

# Watermark

用于给页面的指定区域加上水印。

## 案例

### 基础用法

将一个面板分割成两个可以调整宽度或高度的两部分。用`direction`控制分割方向。

<demo src="./__demos__/basic.vue"></demo>

### 多行文本

通过 content 设置字符串数组可指定多行文字水印内容。

<demo src="./__demos__/multiline.vue"></demo>

### 图片水印

通过 image 设置图片水印。建议使用 2 倍或 3 倍图（支持Base64）。

<demo src="./__demos__/image.vue"></demo>

### 自定义

通过自定义参数以实现更多的水印效果。

<demo src="./__demos__/custom.vue"></demo>

## API

### `<watermark>` Props

| 参数名      | 描述                                                         | 类型                 |         默认值         |
| ----------- | ------------------------------------------------------------ | -------------------- | :--------------------: |
| content     | 水印文字内容                                                 | `string \| string[]` |          `-`           |
| image       | 图片源，建议使用 2 倍或 3 倍图                               | `string`             |          `-`           |
| width       | 水印宽度（默认为内容宽度）                                   | `number`             |          `-`           |
| height      | 水印高度（默认为内容高度）                                   | `number`             |          `-`           |
| gap         | 水印间的间距                                                 | `[number, number]`   |    `() => [90, 90]`    |
| offset      | 距离容器左上角的偏移量，默认为水印间距的一半                 | `[number, number]`   | `[gap[0]/2, gap[1]/2]` |
| rotate      | 旋转角度                                                     | `number`             |         `-22`          |
| font        | 水印字体样式，具体参数配置看 [WatermarkFont](#WatermarkFont) | `WatermarkFont`      |          `-`           |
| z-index     | 水印层级                                                     | `number`             |          `6`           |
| alpha       | 透明度                                                       | `number`             |          `1`           |
| anti-tamper | 水印防篡改                                                   | `boolean`            |         `true`         |
| grayscale   | 灰阶水印                                                     | `boolean`            |        `false`         |
| repeat      | 是否重复水印                                                 | `boolean`            |         `true`         |
| staggered   | 是否错开排列                                                 | `boolean`            |         `true`         |

### WatermarkFont

| 参数名     | 描述         | 类型                                                    |        默认值         |
| ---------- | ------------ | ------------------------------------------------------- | :-------------------: |
| color      | 字体颜色     | `string`                                                | `rgba(0, 0, 0, 0.15)` |
| fontSize   | 字体大小     | `number`                                                |         `16`          |
| fontFamily | 字体类型     | `string`                                                |     `sans-serif`      |
| fontStyle  | 字体样式     | `'none' \| 'normal' \| 'italic' \| 'oblique'`           |       `normal`        |
| textAlign  | 字体对齐方式 | `'start' \| 'end' \| 'left' \| 'right' \| 'center'`     |       `center`        |
| fontWeight | 字体粗细     | `'normal' \| 'bold' \| 'bolder' \| 'lighter' \| number` |       `normal`        |

### 类型定义

组件导出以下类型定义

```ts
import type { WatermarkInstance } from '@cedar/ui'
```
