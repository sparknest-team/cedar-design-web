---
permalink: /components/watermark/
---

# Watermark

给页面或局部区域添加文字、图片水印。组件会自动响应属性和主题变化，无需手动刷新。

## 案例

### 基础用法

使用 `content` 设置文字水印，默认插槽放置被水印覆盖的内容。

<demo src="./__demos__/basic.vue"></demo>

### 多行文本

通过字符串数组设置多行文字水印。

<demo src="./__demos__/multiline.vue"></demo>

### 图片水印

图片优先于文字；图片加载失败且存在文字时自动回退文字。

<demo src="./__demos__/image.vue"></demo>

### 自定义

调整旋转、间距、偏移、字体、重复和错列方式。

<demo src="./__demos__/custom.vue"></demo>

### 全屏水印

开启后，水印层固定覆盖整个视口；默认插槽内容仍保留在原位置。

<demo src="./__demos__/fullscreen.vue"></demo>

## API

### Props

| 参数          | 说明                                       | 类型                 | 默认值                     |
| ------------- | ------------------------------------------ | -------------------- | -------------------------- |
| `content`     | 单行或多行文字；图片加载失败时作为回退内容 | `string \| string[]` | `-`                        |
| `image`       | 图片地址，优先于文字                       | `string`             | `-`                        |
| `width`       | 单块水印宽度，默认按内容测量               | `number`             | `-`                        |
| `height`      | 单块水印高度，默认按内容测量               | `number`             | `-`                        |
| `gap`         | 水印间距 `[x, y]`                          | `[number, number]`   | `[90, 90]`                 |
| `offset`      | 第一块水印相对容器的偏移，默认是间距的一半 | `[number, number]`   | `[gap[0] / 2, gap[1] / 2]` |
| `rotate`      | 旋转角度                                   | `number`             | `-22`                      |
| `font`        | 文字样式                                   | `WatermarkFont`      | `-`                        |
| `z-index`     | 水印层级                                   | `number`             | `6`                        |
| `alpha`       | 整体透明度，范围为 `0..1`                  | `number`             | `1`                        |
| `anti-tamper` | 水印节点被移除或修改后是否恢复             | `boolean`            | `true`                     |
| `grayscale`   | 是否灰阶渲染                               | `boolean`            | `false`                    |
| `repeat`      | 是否重复水印                               | `boolean`            | `true`                     |
| `staggered`   | 重复时是否错列                             | `boolean`            | `true`                     |
| `fullscreen`  | 是否固定覆盖整个视口                       | `boolean`            | `false`                    |

### WatermarkFont

| 参数         | 类型                                | 默认值                             |
| ------------ | ----------------------------------- | ---------------------------------- |
| `color`      | `string`                            | `var(--c-watermark-content-color)` |
| `fontSize`   | `number`                            | `16`                               |
| `fontFamily` | `string`                            | `sans-serif`                       |
| `fontStyle`  | `'normal' \| 'italic' \| 'oblique'` | `normal`                           |
| `fontWeight` | `string \| number`                  | `normal`                           |
| `textAlign`  | `CanvasTextAlign`                   | `center`                           |
| `lineHeight` | `number`                            | `fontSize × 1.4`                   |

### 事件

| 事件名  | 说明                       | 参数                                              |
| ------- | -------------------------- | ------------------------------------------------- |
| `error` | 图片加载或 Canvas 渲染失败 | `{ source: 'image' \| 'canvas'; error: unknown }` |

### 方法

| 方法名   | 说明                   | 返回值          |
| -------- | ---------------------- | --------------- |
| `redraw` | 按当前属性重新生成水印 | `Promise<void>` |

### 插槽

| 插槽名    | 说明                 |
| --------- | -------------------- |
| `default` | 被水印覆盖的页面内容 |

### CSS 变量

| 变量名                        | 默认值                |
| ----------------------------- | --------------------- |
| `--c-watermark-content-color` | `rgba(0, 0, 0, 0.15)` |
