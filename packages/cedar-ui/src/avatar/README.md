---
permalink: /components/avatar/
---

# Avatar 头像

用于展示用户或事物的头像，支持图片、文字、图标和头像组。

## 案例

### 基础用法

头像默认使用圆形外观；没有图片时，可以通过默认插槽展示文字或图标。

<demo src="./__demos__/basic.vue"></demo>

### 尺寸

`size` 控制头像宽高，单位为 px。可同时用于文字头像和图片头像。

<demo src="./__demos__/size.vue"></demo>

### 形状

`shape` 支持圆形和方形。

<demo src="./__demos__/shape.vue"></demo>

### 文字自适应

默认会按头像宽度缩放过长文字。修改输入框内容可以实时看到缩放效果；将 `autoFixFontSize` 设为 `false` 后保持原始字号。

<demo src="./__demos__/auto-fix.vue"></demo>

### 图片头像

使用 `imageUrl` 设置图片，并通过 `alt` 提供可访问的替代文本。

<demo src="./__demos__/image.vue"></demo>

### 图片填充

`objectFit` 控制图片在头像区域内的填充方式。

<demo src="./__demos__/fit.vue"></demo>

### 加载与回退

`lazy` 开启懒加载，`loading` 指定加载中占位图。失败时可用 `error` 占位图，或使用 `error` 插槽自定义内容。

<demo src="./__demos__/fallback.vue"></demo>

### 颜色与边框

使用 `color` 设置背景色，可传入主题色变量。`bordered` / `borderColor` 控制描边。

<demo src="./__demos__/style.vue"></demo>

### 头像组

`AvatarGroup` 会自动堆叠子头像。可以用 `bordered` 做出叠层描边，或设置 `maxCount` 将超出的头像收纳到 Popover 中。`zIndexAscend` 按顺序递增层级。

<demo src="./__demos__/group.vue"></demo>

### 纵向头像组

`vertical` 改为纵向堆叠，`offset` 控制重叠间距。

<demo src="./__demos__/group-vertical.vue"></demo>

### 头像可悬停

设置 `hoverable` 后，鼠标悬停时头像会放大。

<demo src="./__demos__/hoverable.vue"></demo>

### 交互图标

使用 `trigger-icon` 插槽添加交互入口，`triggerType` 支持独立按钮和悬浮背景层两种形式。

<demo src="./__demos__/trigger.vue"></demo>

## API

### `<Avatar>` Props

| 属性             | 说明                       | 类型                                                       | 默认值     |
| ---------------- | -------------------------- | ---------------------------------------------------------- | ---------- |
| shape            | 头像形状                   | `'circle' \| 'square'`                                     | `'circle'` |
| image-url         | 图片地址                   | `string`                                                   | -          |
| alt              | 图片替代文本               | `string`                                                   | `''`       |
| size             | 头像宽高，单位为 px        | `number`                                                   | `40`       |
| auto-fix-font-size  | 是否自动缩放过长的文字内容 | `boolean`                                                  | `true`     |
| trigger-type      | 交互图标展示方式           | `'button' \| 'overlay'`                                       | `'button'` |
| trigger-icon-style | 交互图标的自定义样式       | `CSSProperties`                                            | -          |
| object-fit        | 图片填充方式               | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | `'cover'`  |
| color            | 头像背景色                 | `string`                                                   | -          |
| bordered         | 是否显示描边               | `boolean`                                                  | `false`    |
| border-color      | 描边颜色                   | `string`                                                   | -          |
| loading          | 图片加载中的占位图地址     | `string`                                                   | -          |
| error            | 图片加载失败的占位图地址   | `string`                                                   | -          |
| lazy             | 是否懒加载图片             | `boolean`                                                  | `false`    |
| hoverable        | 是否开启悬停放大效果       | `boolean`                                                  | `false`    |

### `<Avatar>` Events

| 事件名 | 说明             | 参数                          |
| ------ | ---------------- | ----------------------------- |
| click  | 点击头像时触发   | `(event: MouseEvent) => void` |
| load   | 图片加载成功触发 | `() => void`                  |
| error  | 图片加载失败触发 | `() => void`                  |

### `<Avatar>` Slots

| 插槽名       | 说明                       |
| ------------ | -------------------------- |
| default      | 文字、图标或图片加载中内容 |
| error        | 图片加载失败时的回退内容   |
| trigger-icon | 头像上的交互图标           |

### `<AvatarGroup>` Props

| 属性            | 说明                               | 类型                   | 默认值     |
| --------------- | ---------------------------------- | ---------------------- | ---------- |
| shape           | 子头像形状                         | `'circle' \| 'square'` | `'circle'` |
| size            | 子头像宽高，单位为 px              | `number`               | `40`       |
| auto-fix-font-size | 是否自动缩放子头像中的文字         | `boolean`              | `true`     |
| max-count        | 最多直接展示的头像数，`0` 表示不限 | `number`               | `0`        |
| z-index-ascend    | 头像层级是否按顺序递增             | `boolean`              | `false`    |
| max-style        | 数量汇总头像的自定义样式           | `CSSProperties`        | -          |
| max-popover-props | 汇总 Popover 的属性                | `PopoverProps`         | -          |
| offset          | 组内头像的重叠偏移量               | `number \| string`     | -          |
| vertical        | 是否纵向堆叠                       | `boolean`              | `false`    |

### `<AvatarGroup>` Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 头像列表 |

### 类型定义

```ts
import type {
  AvatarGroupInstance,
  AvatarGroupProps,
  AvatarInstance,
  AvatarProps,
  AvatarShape,
  AvatarTriggerType,
  ObjectFit,
} from "@cedarjs/ui";
```
