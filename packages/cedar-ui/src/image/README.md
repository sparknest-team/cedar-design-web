---
permalink: /components/image/
---

# Image

## 基础示例

### 基础用法

设置 `src` 即可获得带预览能力的图片组件。

<demo src="./__demos__/basic.vue"></demo>

## 图片展示与状态

### 填充模式

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `width` | 图片显示宽度 | 填充模式、图片说明与附加内容、错误状态 |
| `src` | 图片获取地址 | 填充模式、图片说明与附加内容、错误状态 |
| `height` | 图片显示高度 | 填充模式、错误状态、加载状态 |
| `preview-disabled` | 是否禁用点击预览 | 填充模式、加载状态、懒加载与回退 |
| `object-fit` | 确定图片如何适应容器框 | 填充模式、懒加载与回退 |
| `title` | 标题 | 图片说明与附加内容 |
<!-- demo-config-notes:end -->

通过 `object-fit` 控制图片如何适应容器。

<demo src="./__demos__/fit-mode.vue"></demo>

### 图片说明与附加内容

比较图片说明和附加插槽的位置；预览入口、加载和错误回退保持独立。

<details>
<summary>配置说明与使用限制</summary>

#### 标题与描述

通过 `title`、`description` 和 `footer-position` 控制说明文案的展示位置。

#### 底部额外内容

通过 `extra` 插槽在页脚定制额外内容。

</details>

<demo src="./__demos__/content-comparison.vue"></demo>

### 错误状态

图片加载失败时展示默认错误态，也可用 `error` 插槽自定义。示例使用损坏的内联图片数据触发解码失败，不发送无效网络请求。

<demo src="./__demos__/error.vue"></demo>

### 加载状态

通过 `showLoader` 显示默认加载效果，或通过 `loader` 插槽自定义、模拟渐进加载。

<demo src="./__demos__/loader.vue"></demo>

### 懒加载与回退

`lazy` 使用原生 `loading="lazy"`；失败时可用 `fallback-src` 回退。

<demo src="./__demos__/lazy.vue"></demo>

## 预览入口与分组

### 禁用预览

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `width` | 图片显示宽度 | 禁用预览、预览入口与受控、图片预览组 |
| `src` | 图片获取地址 | 禁用预览、预览入口与受控、图片预览组 |
| `height` | 图片显示高度 | 预览入口与受控、图片预览组 |
| `object-fit` | 确定图片如何适应容器框 | 预览入口与受控、图片预览组 |
| `preview-disabled` | 是否禁用点击预览 | 禁用预览 |
| `preview-props` | 预览的配置项 | 预览入口与受控 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/disable-preview.vue"></demo>

### 预览入口与受控

通过 `preview-src`、`v-model:open` 和 `preview-props` 配置 Image 内嵌预览。

<demo src="./__demos__/preview-entry.vue"></demo>

### 单图 Preview

`ImagePreview` 只接收单个 `src`，负责缩放、旋转、拖拽和全屏等变换。

<demo src="./__demos__/component-preview.vue"></demo>

### 命令式预览

命令式 API 对单图和多图返回同一套控制方法。

<demo src="./__demos__/imperative-preview.vue"></demo>

### 图片预览组

`ImagePreviewGroup` 可以收集子 Image，集合状态只由 Group 管理。

<demo src="./__demos__/preview-group.vue"></demo>

### 数据驱动预览组

也可以直接传入 `images`，用按钮打开预览。

<demo src="./__demos__/component-preview-group.vue"></demo>

## 预览定制与交互

### 水波与行内

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `width` | 图片显示宽度 | 水波与行内、点击背景层关闭、错误时仍显示 Footer |
| `src` | 图片获取地址 | 水波与行内、点击背景层关闭、错误时仍显示 Footer |
| `height` | 图片显示高度 | 水波与行内、点击背景层关闭、尺寸、圆角与位置 |
| `object-fit` | 确定图片如何适应容器框 | 水波与行内、点击背景层关闭、尺寸、圆角与位置 |
| `preview-disabled` | 是否禁用点击预览 | 水波与行内、错误时仍显示 Footer、尺寸、圆角与位置 |
| `preview-props` | 预览的配置项 | 点击背景层关闭、指定挂载容器 |
<!-- demo-config-notes:end -->

`ripple` 开启点击水波；`block` 设为 `false` 时作为行内元素排列。

<demo src="./__demos__/ripple.vue"></demo>

### 点击背景层关闭

通过 `preview-props.overlayClosable` 控制点击图片外的背景层是否关闭预览。左图开启，右图关闭；点击图片本身均不会关闭预览。

<demo src="./__demos__/overlay-closable.vue"></demo>

### 错误时仍显示 Footer

`hide-footer="never"` 可在加载失败时仍展示底部信息。

<demo src="./__demos__/hide-footer-never.vue"></demo>

### 自定义预览内容

关闭图标、指示器与操作区均可自定义。

<demo src="./__demos__/preview-features.vue"></demo>

### 尺寸、圆角与位置

`width` / `height`、`radius` 和 `object-position` 控制几何与裁切位置。

<demo src="./__demos__/presentation.vue"></demo>

### 指定挂载容器

<demo src="./__demos__/preview-popup-container.vue"></demo>

## 生命周期

### PreviewGroup track lifecycle / 轨道生命周期

<demo src="./__demos__/track-lifecycle.vue"></demo>

展示图片，支持说明、加载回退与预览。两端示例分组一致。

单图与预览组未设置 `popup-container` 时均挂载到 body 并覆盖视口；只有显式 `false` 才原地渲染，需要父容器提供定位和尺寸。预览组仅由当前图片的 load/error 结束加载提示，切回已加载的缓存图片不会残留加载图标。

### 预览交互生命周期

<demo src="./__demos__/controller-lifecycle.vue"></demo>

## 阅读方向

继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部覆盖。预览集合的上一张/下一张、水平键与滑动沿阅读方向工作，值数组不反转。方向切换取消尚未完成的手势并保持当前图片、缩放与旋转；图片本身和放大后的拖拽坐标不自动镜像。图片序号保持 LTR 数值显示。

## API

图片预览组使用 `v-model` 绑定从 1 开始的图片序号，`defaultValue` 提供非受控初始图片序号；面板开关独立使用 `v-model:open` 与 `defaultOpen`。函数式预览配置同步使用 modelValue/defaultValue 和 onUpdate:modelValue。

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
| footer-position            | 说明区位于图片内部 inner 或外部 outer，默认 inner；不是四边浮层方位 | `'inner' \| 'outer'`                                       | `'inner'` |        |
| show-loader                | 是否显示加载中效果                                      | `boolean`                                                  |  `false`  |        |
| preview-disabled           | 是否禁用点击预览                                        | `boolean`                                                  |  `false`  |        |
| open **(v-model)** | 控制预览的打开状态                                      | `boolean`                                                  |    `-`    |        |
| default-open       | 预览的默认打开状态                                      | `boolean`                                                  |  `false`  |        |
| preview-props              | 预览的配置项                                            | `ImagePreviewProps`                                        |    `-`    |        |
| footer-class               | 底部显示区域的类名                                      | `string\|array\|object`                                    |    `-`    | 2.23.0 |
| popup-container            | 预览挂载容器                                            | `string \| HTMLElement \| false`                           |    `-`    |        |

### `<image>` Events

| 事件名              | 描述                 | 参数            |
| ------------------- | -------------------- | --------------- |
| open-change | 预览的打开和关闭事件 | open: `boolean` |

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
| overlay-closable   | 点击图片外的 overlay 是否触发关闭，点击图片不会关闭               | `boolean`               |                                           `true`                                           |
| closable           | 是否显示关闭按钮                                                  | `boolean`               |                                           `true`                                           |
| actions-layout     | 操作项的布局                                                      | `string[]`              | `[  'fullScreen',  'rotateRight',  'rotateLeft',  'zoomIn',  'zoomOut',  'originalSize',]` |
| popup-container    | 设置弹出框的挂载点，同 `teleport` 的 `to`，缺省值是 document.body | `HTMLElement \| string \| false` |                                            `-`                                             |
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
| model-value **(v-model)** | 当前展示的图片的序号（从 1 开始）                                              | `number`                |                                            `-`                                             |
| default-value       | 第一张展示的图片的序号（从 1 开始）                                            | `number`                |                                            `1`                                             |
| loop                  | 是否无限循环                                                      | `boolean`               |                                          `false`                                           |
| open **(v-model)**    | 是否打开，受控属性                                                | `boolean`               |                                            `-`                                             |
| default-open          | 默认是否打开，非受控                                              | `boolean`               |                                          `false`                                           |
| overlay-closable      | 点击图片外的 overlay 是否触发关闭，点击图片不会关闭               | `boolean`               |                                           `true`                                           |
| closable              | 是否显示关闭按钮                                                  | `boolean`               |                                           `true`                                           |
| actions-layout        | 控制条的布局                                                      | `string[]`              | `[  'fullScreen',  'rotateRight',  'rotateLeft',  'zoomIn',  'zoomOut',  'originalSize',]` |
| popup-container       | 设置弹出框的挂载点，同 `teleport` 的 `to`，缺省值是 document.body | `string \| HTMLElement \| false` |                                            `-`                                             |

### `<image-preview-group>` Events

| 事件名      | 描述             | 参数            |
| ----------- | ---------------- | --------------- |
| change      | 切换图片         | imageNumber: `number`，previousImageNumber: `number` |
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
import type { ImageInstance } from "@cedar-design/ui";
import { imagePreview } from "@cedar-design/ui";
```

### `imagePreview` 方法

命令式预览被新的调用替换时，会清理旧实例并触发旧实例的 `onClosed`；与正常关闭一样，每个实例只通知一次，可用于释放 Object URL 等资源。旧句柄不会关闭后来打开的预览。若 `onClosed` 内同步打开新的预览，保留该新调用，外层调用返回 `undefined`。

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

### 变量消费边界

预览组箭头字号由 `--c-image-preview-arrow-font-size` 控制。旧 actions-item、trigger、scale-value 尺寸以及 simple toolbar 变量对应的 DOM 已不存在，已删除这些无效入口；预览工具栏使用 preview-color-action-* 与 preview-padding-action-content，底栏使用现有 footer 变量。错误／加载层填满图片，不另加100px最小高度。缩放与轨道过渡消费 system motion，reduced-motion 时关闭。

### 图片预览组序号

`modelValue/defaultValue` 从 **1** 开始，`1` 表示第 1 张。`open(imageNumber = 1)`、`to(imageNumber)` 接收相同序号，无效或非整数序号会被忽略。`prev()/next()` 在循环边界也回传同一规则的序号。模型事件为 `update:modelValue(imageNumber)`，切换通知为 `change(imageNumber, previousImageNumber)`；外部赋值不补发切换通知。长按通知为 `long-press(imageNumber)`，指示器插槽参数为 `{ imageNumber, length }`。内部数组下标仍从 0 开始。

根节点 `class`、`style` 与 Image 容器样式合并；内部图片样式通过 `img-props.class/style` 设置。预览的 `open-change` 是 Vue 通知事件：每次状态切换只发送一次，`.once` 遵循 Vue 事件语义，返回 Promise 不控制 loading。类型中的 `onOpenChange` 监听器也走同一事件入口。
