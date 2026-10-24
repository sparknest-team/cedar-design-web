---
permalink: /components/empty/
---

# Empty

指当前场景没有对应的数据内容，呈现出的一种状态。

## 案例

### 基础用法

空状态组件的基本用法。不传 `description` 时使用国际化文案。

<demo src="./__demos__/basic.vue"></demo>

### 图片尺寸

通过 `image-size` 属性控制图标尺寸，可选值为 `xs` `sm` `md` `lg` `xl`，也可传入数值。

<demo src="./__demos__/size.vue"></demo>

### 自定义图片和文案

通过 `image` 插槽自定义图标、图片，或通过默认插槽修改文案。

<demo src="./__demos__/user-define.vue"></demo>

### 操作按钮

Reload 只更新本地刷新次数和描述，不请求服务；真实业务请自行接入请求与结果状态。

通过 `extra` 插槽添加操作按钮。

<demo src="./__demos__/extra.vue"></demo>

### 显示与隐藏

通过两个按钮分别隐藏和恢复图标、描述。两者同时隐藏不代表隐藏整个组件，也不影响 extra 插槽。

通过 `show-icon`、`show-description` 控制图标和描述是否显示。

<demo src="./__demos__/show.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

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
import type { EmptyImageSize, EmptyProps } from '@cedar-design/ui'
```

ConfigProvider 的 `empty` 插槽可以替换未自定义内容的 Empty，不作为 Empty 的公开 Prop。

### 样式变量

| 变量 | 默认值 | 用途 |
| --- | --- | --- |
| `--c-empty-description-color` | `var(--c-sys-color-content-tertiary)` | 低强调的空状态说明文字 |
| `--c-empty-icon-color` | `var(--c-sys-color-content-decorative)` | 非文字装饰图标；不用于需要阅读的文字 |
| `--c-empty-padding` | `var(--c-spacing-5) 0` | 容器留白 |
| `--c-empty-image-margin-bottom` | `var(--c-spacing-2)` | 图标与说明的间距 |
| `--c-empty-description-font-size` | `var(--c-font-size-body-3)` | 说明文字字号 |
| `--c-empty-description-line-height` | `var(--c-line-height)` | 说明文字行高 |
| `--c-empty-extra-margin-top` | `var(--c-spacing-5)` | 额外操作上方间距 |
| `--c-empty-size-xs/sm/md/lg/xl` | `var(--c-size-15/20/25/35/45)` | 默认图标／图片的尺寸档位 |

描述是文字，必须按文本对比度检查；装饰图标可以更弱。自定义图片或插槽可能有自己的颜色，不会被 `icon-color` 强制重染。尺寸与间距按桌面／移动布局分别维护，但同名变量职责一致。
