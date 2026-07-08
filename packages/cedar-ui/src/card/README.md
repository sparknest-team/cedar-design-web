---
permalink: /components/card/
---

# Card

将信息分类后分标题、详情等区域聚合展现，一般作为简洁介绍或者信息的大盘和入口。

## 案例

### 基础用法

常规的内容容器，可承载文字、列表、图片、段落，常用于模块划分和内容概览。

<demo src="./__demos__/basic.vue"></demo>

### 自定义标题

通过`PageHeader`组件自定义标题。

<demo src="./__demos__/no-padding.vue"></demo>

### 鼠标悬浮样式

指定`hoverable`来为卡片添加鼠标悬浮样式，同时你可以通过样式覆盖来自定义悬浮样式。

<demo src="./__demos__/hoverable.vue"></demo>

### variant

设置 `variant` 来调整不同风格的卡片。

<demo src="./__demos__/variant.vue"></demo>

### 图片卡片和布局

使用 `cover` 插槽展示图片，通过设置 `direction` 来调整图片卡片的布局。

<demo src="./__demos__/image.vue"></demo>

### 尺寸

通过设置卡片的size来调整卡片的间距。

<demo src="./__demos__/size.vue"></demo>

### 文本省略和提示

开启 `ellipsis` 属性可以显示省略号，如果同时开启 `tooltip` 会在显示省略号时使用文本提示。
可将属性值设置为`false`手动关闭。
<demo src="./__demos__/tooltip.vue"></demo>

### 自定义插槽

`cover` 、`title-action` 、`sub-title` 、`description` 、`action` 插槽可以用于自定义卡片内容。

<demo src="./__demos__/slots.vue"></demo>

## API

### `<Card>` Props

| 属性         | 说明                                       | 类型                               | 默认值   |
| ------------ | ------------------------------------------ | ---------------------------------- | -------- |
| bordered     | 是否有边框                                 | `boolean`                          | `true`   |
| top-divider  | 是否有上分割线                             | `boolean`                          | `false`  |
| loading      | 是否为加载中                               | `boolean`                          | `false`  |
| hoverable    | 是否可悬浮                                 | `boolean`                          | `false`  |
| size         | 卡片尺寸                                   | `lg \| md \| sm`                   | `md`     |
| header-style | 自定义标题区域样式                         | `object`                           | -        |
| body-style   | 内容区域自定义样式                         | `object`                           | -        |
| title        | 卡片标题                                   | `string`                           | -        |
| body-padding | content的边距                              | `boolean`                          | `true`   |
| direction    | 卡片布局                                   | `row` \| `column` \| `row-reverse` | `column` |
| elevation    | 卡片阴影，最大值为9，传入true时，阴影值为1 | `boolean` \| `number` \| `string`  | `1`      |

### `<Card>` Slots

| 插槽名       | 说明                 | 参数 |
| ------------ | -------------------- | ---- |
| cover        | 卡片封面             | -    |
| title-action | 卡片右上角的操作区域 | -    |
| sub-title    | 卡片副标题           | -    |
| description  | 卡片描述             | -    |
| action       | 卡片底部的操作组     | -    |

### `<Card>` CSS 变量

| 变量名            | 默认值                   |
| ----------------- | ------------------------ |
| --c-card-bg-color | var(--c-color-container) |

### 类型定义

组件导出以下类型定义

```ts
import type { CardProps } from '@cedar/ui'
```
