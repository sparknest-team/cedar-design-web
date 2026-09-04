---
permalink: /components/image/
---

# Image

展示图片。预览相关能力见下方 ImagePreview API。

## 案例

### 基础用法

设置 `src` 即可获得带预览能力的图片组件。

<demo src="./__demos__/basic.vue"></demo>

### 显示 Caption

通过 `title`、`description` 和 `footerPosition` 控制图片说明的展示位置。

<demo src="./__demos__/caption.vue"></demo>

### 额外操作

通过 `extra` 插槽在页脚定制额外内容。

<demo src="./__demos__/extra.vue"></demo>

### 错误状态

图片加载失败时的展示内容。

<demo src="./__demos__/error.vue"></demo>

### 加载状态

通过 `showLoader` 显示默认加载效果，或通过 `loader` 插槽自定义。

<demo src="./__demos__/loader.vue"></demo>

### 渐进加载

通过 `loader` 插槽传入小图，模拟渐进加载。

<demo src="./__demos__/progressive-loader.vue"></demo>

### 填充模式

<demo src="./__demos__/fit-mode.vue"></demo>

### 禁用预览

<demo src="./__demos__/disable-preview.vue"></demo>

### 错误时仍显示 Footer

`hide-footer="never"` 可在加载失败时仍展示底部信息。

<demo src="./__demos__/hide-footer-never.vue"></demo>

### 预览入口与受控状态

通过 `preview-src`、`v-model:preview-open` 和 `preview-props` 配置 Image 内嵌预览。

<demo src="./__demos__/preview-entry.vue"></demo>

### 图片预览组

PreviewGroup 可以收集子 Image，也可以直接接收 `images`。集合状态只由 Group 管理。

<demo src="./__demos__/preview-group.vue"></demo>

<demo src="./__demos__/component-preview-group.vue"></demo>

### 单图 Preview

ImagePreview 只接收单个 `src`，负责缩放、旋转、拖拽和全屏等变换。

<demo src="./__demos__/component-preview.vue"></demo>

### 自定义预览内容

关闭图标、指示器与操作区均可自定义。

<demo src="./__demos__/preview-features.vue"></demo>

<demo src="./__demos__/custom-preview-actions.vue"></demo>

### 指定挂载容器

<demo src="./__demos__/preview-popup-container.vue"></demo>

### 命令式预览

命令式 API 对单图和多图返回同一套控制方法。

<demo src="./__demos__/imperative-preview.vue"></demo>

## API

### `<image>` Props

| 参数名                     | 描述                                                    | 类型                                                       |  默认值   | 版本   |
| -------------------------- | ------------------------------------------------------- | ---------------------------------------------------------- | :-------: | :----- |
| src                        | 图片获取地址                                            | `string`                                                   |    `-`    |        |
| width                      | 图片显示宽度                                            | `string \| number`                                         |    `-`    |        |
| height                     | 图片显示高度                                            | `string \| number`                                         |    `-`    |        |
| title                      | 标题                                                    | `string`                                                   |    `-`    |        |
| description                | 描述，将显示在底部，如果 alt 没有值，则会将其设置给 alt | `string`                                                   |    `-`    |        |
| object-fit                 | 确定图片如何适应容器框                                  | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` |    `-`    |        |
| alt                        | 图片的文字描述                                          | `string`                                                   |    `-`    |        |
| hide-footer                | 是否隐藏 footer（支持 `'never'`，错误时仍显示底部）     | `boolean \| 'never'`                                       |  `false`  |        |
| footer-position            | 底部显示的位置                                          | `'inner' \| 'outer'`                                       | `'inner'` |        |
| show-loader                | 是否显示加载中效果                                      | `boolean`                                                  |  `false`  |        |
| preview-disabled           | 是否禁用点击预览                                        | `boolean`                                                  |  `false`  |        |
| preview-open **(v-model)** | 控制预览的打开状态                                      | `boolean`                                                  |    `-`    |        |
| default-preview-open       | 预览的默认打开状态                                      | `boolean`                                                  |  `false`  |        |
| preview-props              | 预览的配置项                                            | `ImagePreviewProps`                                        |    `-`    |        |
| footer-class               | 底部显示区域的类名                                      | `string\|array\|object`                                    |    `-`    | 2.23.0 |
| popup-container            | 预览挂载容器                                            | `string \| HTMLElement \| false`                           |    `-`    |        |

### `<image>` Events

| 事件名              | 描述                 | 参数            |
| ------------------- | -------------------- | --------------- |
| preview-open-change | 预览的打开和关闭事件 | open: `boolean` |

### `<image>` Slots

| 插槽名          |         描述         | 参数 |
| --------------- | :------------------: | ---- |
| error           |  自定义错误状态内容  | -    |
| error-icon      | 自定义错误状态的图标 | -    |
| loader          |  自定义加载状态效果  | -    |
| extra           |     底部额外内容     | -    |
| preview-actions |   自定义预览工具栏   | -    |

### `<image-preview>` Props

| 参数名             | 描述                                                              | 类型                    |                                           默认值                                           |
| ------------------ | ----------------------------------------------------------------- | ----------------------- | :----------------------------------------------------------------------------------------: |
| src                | 图片获取地址                                                      | `string`                |                                            `-`                                             |
| open **(v-model)** | 是否打开                                                          | `boolean`               |                                            `-`                                             |
| default-open       | 默认是否打开，非受控                                              | `boolean`               |                                          `false`                                           |
| mask-closable      | 点击 mask 是否触发关闭                                            | `boolean`               |                                           `true`                                           |
| closable           | 是否显示关闭按钮                                                  | `boolean`               |                                           `true`                                           |
| actions-layout     | 操作项的布局                                                      | `string[]`              | `[  'fullScreen',  'rotateRight',  'rotateLeft',  'zoomIn',  'zoomOut',  'originalSize',]` |
| popup-container    | 设置弹出框的挂载点，同 `teleport` 的 `to`，缺省值是 document.body | `HTMLElement \| string` |                                            `-`                                             |
| esc-to-close       | 是否支持 ESC 键关闭预览                                           | `boolean`               |                                           `true`                                           |
| wheel-zoom         | 是否开启滚轮缩放                                                  | `boolean`               |                                           `true`                                           |
| keyboard           | 是否开启键盘控制                                                  | `boolean`               |                                           `true`                                           |
| default-scale      | 默认缩放比                                                        | `number`                |                                            `1`                                             |
| scale-step         | 每次缩放的增量                                                    | `number`                |                                           `0.5`                                            |

### `<image-preview>` Events

| 事件名      | 描述         | 参数            |
| ----------- | ------------ | --------------- |
| close       | 关闭事件     | -               |
| open-change | 打开状态变更 | open: `boolean` |

### `<image-preview>` Slots

| 插槽名  |        描述        | 参数 | 版本   |
| ------- | :----------------: | ---- | :----- |
| actions | 自定义额外的操作项 | -    | 2.17.0 |

### `<image-preview-group>` Props

| 参数名                | 描述                                                              | 类型                    |                                           默认值                                           |
| --------------------- | ----------------------------------------------------------------- | ----------------------- | :----------------------------------------------------------------------------------------: |
| images                | 图片列表（设置了本属性之后，将不再收集子 Image 的图片信息）       | `string[]`              |                                            `-`                                             |
| current **(v-model)** | 当前展示的图片的下标                                              | `number`                |                                            `-`                                             |
| default-current       | 第一张展示的图片的下标                                            | `number`                |                                            `0`                                             |
| loop                  | 是否无限循环                                                      | `boolean`               |                                          `false`                                           |
| open **(v-model)**    | 是否打开，受控属性                                                | `boolean`               |                                            `-`                                             |
| default-open          | 默认是否打开，非受控                                              | `boolean`               |                                          `false`                                           |
| mask-closable         | 点击 mask 是否触发关闭                                            | `boolean`               |                                           `true`                                           |
| closable              | 是否显示关闭按钮                                                  | `boolean`               |                                           `true`                                           |
| actions-layout        | 控制条的布局                                                      | `string[]`              | `[  'fullScreen',  'rotateRight',  'rotateLeft',  'zoomIn',  'zoomOut',  'originalSize',]` |
| popup-container       | 设置弹出框的挂载点，同 `teleport` 的 `to`，缺省值是 document.body | `string \| HTMLElement` |                                            `-`                                             |

### `<image-preview-group>` Events

| 事件名      | 描述             | 参数            |
| ----------- | ---------------- | --------------- |
| change      | 切换图片         | index: `number` |
| open-change | 预览的打开和关闭 | open: `boolean` |

### `<image-preview-group>` Slots

| 插槽名  |        描述        | 参数 | 版本   |
| ------- | :----------------: | ---- | :----- |
| actions | 自定义额外的操作项 | -    | 2.46.0 |

### `<image-preview-action>` Props (2.17.0)

| 参数名   | 描述     | 类型      | 默认值  |
| -------- | -------- | --------- | :-----: |
| name     | 名称     | `string`  |   `-`   |
| disabled | 是否禁用 | `boolean` | `false` |

### 类型定义

```ts
import type { ImageInstance } from "@cedarjs/ui";
import { imagePreview } from "@cedarjs/ui";
```

### `imagePreview` 方法

| 方法名                             | 描述         | 参数                                  |
| ---------------------------------- | ------------ | ------------------------------------- |
| `imagePreview`                     | 打开图片预览 | `url \| url[] \| ImagePreviewOptions` |
| `imagePreview.close`               | 关闭预览     | `-`                                   |
| `imagePreview.setDefaultOptions`   | 设置默认配置 | `ImagePreviewOptions`                 |
| `imagePreview.resetDefaultOptions` | 重置默认配置 | `-`                                   |

## FAQ

### 关于 `image-preview` 的属性说明

1. 键盘快捷键 `keyboard` 设置此属性为 `true` 后，将根据 `actions-layout` 操作项来启用相应的快捷键操作。

- `esc`: 关闭预览
- `left`: 切换至上一张图片
- `right`: 切换至下一张图片
- `up`: 放大图片
- `down`: 缩小图片
- `space`: 还原至原始大小

2. 默认缩放比例 `defaultScale` 此属性定义了默认的图片缩放比例。例如，当设置为 1.5 时，图片将默认放大到原始大小的 1.5 倍。

3. `scaleStep` 控制滚轮、双击和工具栏每次放大或缩小的增量。
