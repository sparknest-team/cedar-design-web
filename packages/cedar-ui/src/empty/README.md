---
permalink: /components/empty/
---

# Empty

指当前场景没有对应的数据内容，呈现出的一种状态。

## 案例

### 基础用法

空状态组件的基本用法。

<demo src="./__demos__/basic.vue"></demo>

### 自定义图片和文案

通过 `image` 插槽自定义图标、图片，或通过内容修改文案。

<demo src="./__demos__/user-define.vue"></demo>

### 图片尺寸

通过 `image-size` 属性控制图标尺寸，可选值为 `xs` `sm` `md` `lg` `xl`。

<demo src="./__demos__/size.vue"></demo>

### 操作按钮

通过 `extra` 插槽添加操作按钮。

<demo src="./__demos__/extra.vue"></demo>

## API

### `<Empty>` Props

| 属性               | 说明                         | 类型                                   | 默认值  |
| ------------------ | ---------------------------- | -------------------------------------- | ------- |
| description        | 描述内容                     | `string`                               | -       |
| img-src            | 自定义图片的地址             | `string`                               | -       |
| icon               | 自定义图标名                 | `string`                               | -       |
| image-size         | 图片/图标尺寸                | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | `'md'`  |
| in-config-provider | 是否在 ConfigProvider 中使用 | `boolean`                              | `false` |

### `<Empty>` Slots

| 插槽名  | 说明      | 参数 |
| ------- | --------- | ---- |
| image   | 图片/图标 | -    |
| default | 描述内容  | -    |
| extra   | 额外操作  | -    |

### 类型定义

组件导出以下类型定义

```ts
import type { EmptyProps } from '@cedar/ui'
```
