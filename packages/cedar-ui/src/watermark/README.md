---
permalink: /components/watermark/
---

# Watermark

给页面或局部区域添加文字、图片水印。组件会自动响应属性和主题变化，无需手动刷新。

## 基础示例

### 基础用法

局部示例提供深色底、显示开关及合成文字输入；显式font.color在深色底用白色0.4透明度、浅色底用黑色0.25透明度。改变文字/颜色会重新生成PNG；水印层pointer-events:none，内容按钮支持点击和Enter。隐藏卸载该实例，恢复后只保留一层并保留示例计数。这是局部显式配色与清理验收，不代表默认主题Token、全站暗色或防篡改已验收，不提供正文文字对比度合规保证。

使用 `content` 设置文字水印，默认插槽放置被水印覆盖的内容。

<demo src="./__demos__/basic.vue"></demo>

## 内容与展示

### 多行文本

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `content` | 单行或多行文字；图片加载失败时作为回退内容 | 多行文本、图片水印、全屏水印 |
| `image` | 图片地址，优先于文字 | 图片水印 |
| `width` | 单块水印宽度，默认按内容测量 | 图片水印 |
| `height` | 单块水印高度，默认按内容测量 | 图片水印 |
| `font` | 文字样式 | 图片水印 |
| `fullscreen` | 是否固定覆盖整个视口 | 全屏水印 |
<!-- demo-config-notes:end -->

通过字符串数组设置多行文字水印。

<demo src="./__demos__/multiline.vue"></demo>

### 图片水印

图片示例只使用合成SVG data URL。“本地图片失败”切换为故意无效的data URL，原生Image错误通知source=image，并回退红色FALLBACK 201文字。聚焦“恢复图片”按Enter后恢复原图，错误历史保留但不追加、覆盖层仍一层；恢复按钮再次禁用。这不是外部网络、CORS、Canvas故障或图片加载竞争验收。

图片优先于文字；图片加载失败且存在文字时自动回退文字。

<demo src="./__demos__/image.vue"></demo>

### 全屏水印

示例按钮可点击、Space 或 Enter 切换。全屏层固定覆盖视口且不拦截指针操作；退出后回到原局部容器，默认插槽内容不搬走。反复开启/退出不应累积全屏层，卸载会移除该实例的层。这里使用本地文字生成PNG，不代表图片加载失败、动态主题或防篡改组合均已浏览器验收。

开启后，水印层固定覆盖整个视口；默认插槽内容仍保留在原位置。

<demo src="./__demos__/fullscreen.vue"></demo>

## 自定义与插槽

### 自定义

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `content` | 单行或多行文字；图片加载失败时作为回退内容 | 自定义 |
| `rotate` | 旋转角度 | 自定义 |
| `gap` | 水印间距 `[x, y]` | 自定义 |
| `offset` | 第一块水印相对容器的偏移，默认是间距的一半 | 自定义 |
| `font` | 文字样式 | 自定义 |
<!-- demo-config-notes:end -->

调整旋转、间距、偏移、字体、重复和错列方式。

<demo src="./__demos__/custom.vue"></demo>

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
