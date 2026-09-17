---
permalink: /components/empty/
---

# Empty

指当前场景没有对应的数据内容，呈现出的一种状态。

## 案例

### 基础用法

空状态组件的基本用法。不传 `description` 时使用国际化文案。

<demo src="./__demos__/basic.vue"></demo>

### 自定义图片和文案

通过 `image` 插槽自定义图标、图片，或通过默认插槽修改文案。

<demo src="./__demos__/user-define.vue"></demo>

### 图片尺寸

通过 `image-size` 属性控制图标尺寸，可选值为 `xs` `sm` `md` `lg` `xl`，也可传入数值。

<demo src="./__demos__/size.vue"></demo>

### 操作按钮

通过 `extra` 插槽添加操作按钮。

<demo src="./__demos__/extra.vue"></demo>

### 显示与隐藏

通过 `show-icon`、`show-description` 控制图标和描述是否显示。

<demo src="./__demos__/show.vue"></demo>

## API

### `<Empty>` Props

| 属性               | 说明                         | 类型                                                     | 默认值  |
| ------------------ | ---------------------------- | -------------------------------------------------------- | ------- |
| description      | 描述内容，缺省时使用国际化文案 | `string`                                                   | -      |
| image-url        | 自定义图片的地址               | `string`                                                   | -      |
| alt              | 图片替代文本                   | `string`                                                   | `''`   |
| image-size       | 图片/图标尺寸                  | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number \| string` | `'md'` |
| show-icon        | 是否显示图标                   | `boolean`                                                  | `true` |
| show-description | 是否显示描述                   | `boolean`                                                  | `true` |

### `<Empty>` Events

| 事件名 | 说明     | 参数                  |
| ------ | -------- | --------------------- |
| click  | 点击回调 | `(ev: MouseEvent)`    |

### `<Empty>` Slots

| 插槽名  | 说明      | 参数 |
| ------- | --------- | ---- |
| image   | 图片/图标 | -    |
| default | 描述内容  | -    |
| extra   | 额外操作  | -    |

### 类型定义

组件导出以下类型定义

```ts
import type { EmptyImageSize, EmptyProps } from '@cedarjs/ui'
```

ConfigProvider 的 `empty` 插槽可以替换未自定义内容的 Empty，不作为 Empty 的公开 Prop。
