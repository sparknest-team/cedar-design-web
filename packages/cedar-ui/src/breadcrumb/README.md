---
permalink: /components/breadcrumb/
---

# Breadcrumb

面包屑是辅助导航模式，用于识别页面在层次结构内的位置，并根据需要向上返回。

## 案例

### 基本用法

面包屑的基本用法

<demo src="./__demos__/basic.vue"></demo>

### 自定义分隔符

通过`separator`属性或插槽自定义分隔符，面包屑子项也可通过`separator`属性或插槽自定义分隔符，且优先级高于父项。

<demo src="./__demos__/custom-split.vue"></demo>

### 自定义尺寸

通过指定样式来自自定义面包屑的尺寸

<demo src="./__demos__/size.vue"></demo>

### 自定义图标

可以在内容中使用自定义图标

<demo src="./__demos__/custom-icon.vue"></demo>

### 参数化配置

通过`routes`来传递面包屑数据。若是要自定义面包屑的话，建议使用`BreadcrumbItem`
组件默认使用a标签的href属性绑定路径，可通过`item`插槽自定义渲染

<demo src="./__demos__/routes.vue"></demo>

### 带有下拉菜单

通过`droplist`或者`routes`来指定下拉菜单。

<demo src="./__demos__/droplist.vue"></demo>

### 显示省略

通过`max-count`来指定面包屑的最多渲染数量，超出的部分将显示为省略号

<demo src="./__demos__/max-count.vue"></demo>

### 粘性定位

通过 `sticky` 开启粘性定位，用 `target` 指定需要监听滚动事件的元素（默认 `window`），
用 `offset-top` / `offset-bottom` 设置触发位置。底层基于 [Affix](#/components/affix/) 实现。

<demo src="./__demos__/sticky.vue"></demo>

### 基于 Body 的粘性定位

不设置 `target` 时默认以 `window` 为滚动容器，页面滚动到面包屑不可见时会固定在顶部。

<demo src="./__demos__/sticky-body.vue"></demo>

## API

### Breadcrumb Props

| 属性            | 说明                                                                                                                              | 类型                              | 默认值 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------ |
| max-count       | 最多展示的面包屑数量(0表示不限制)                                                                                                 | `number`                          | `0`    |
| routes          | 设置路径                                                                                                                          | `BreadcrumbRoute[]`               | `-`    |
| separator       | 分隔符文字                                                                                                                        | `string \| number`                | `/`    |
| custom-url      | 自定义链接地址                                                                                                                    | `(paths:string[])=>string`        | `-`    |
| sticky          | 是否开启滚动吸附（基于 Affix 组件）                                                                                            | `boolean`                         | `false`|
| offset-top      | 距窗口顶部达到指定偏移量后触发，仅 `sticky` 为 `true` 时生效                                                                       | `number`                          | `0`    |
| offset-bottom   | 距窗口底部达到指定偏移量后触发，仅 `sticky` 为 `true` 时生效                                                                       | `number`                          | `-`    |
| target          | 滚动容器，默认 `window`，仅 `sticky` 为 `true` 时生效                                                                            | `string \| HTMLElement \| Window` | `-`    |
| target-container| `target` 的外层滚动元素，默认 `window`。Affix 会监听该元素的滚动事件以避免固定块跨出容器，仅 `sticky` 为 `true` 时生效                | `string \| HTMLElement \| Window` | `-`    |

### Breadcrumb Slots

| 插槽名      | 说明                               | 参数                                                                        |
| ----------- | ---------------------------------- | --------------------------------------------------------------------------- |
| more-icon   | 自定义更多图标                     | `-`                                                                         |
| item-render | routes设置时生效，自定义渲染面包屑 | `route:BreadcrumbRoute`<br/>`routes:BreadcrumbRoute[]`<br/>`paths:string[]` |
| separator   | 自定义分隔符                       | `-`                                                                         |

### BreadcrumbItem Props

| 属性           | 说明         | 类型                          | 默认值 |
| -------------- | ------------ | ----------------------------- | ------ |
| separator      | 分隔符文字   | `string \| number`            | `-`    |
| droplist       | 下拉菜单内容 | `BreadcrumbRoute['children']` | `-`    |
| dropdown-props | 下拉菜单属性 | `MenuProps`                   | `-`    |

### BreadcrumbItem Events

| 事件名 | 说明     | 参数           |
| ------ | -------- | -------------- |
| click  | 点击事件 | `event: Event` |

### BreadcrumbItem Slots

| 插槽名    | 说明           | 参数 |
| --------- | -------------- | ---- |
| droplist  | 自定义下拉菜单 | `-`  |
| separator | 自定义分隔符   | `-`  |

### BreadcrumbRoute

| 参数名   | 描述                      | 类型                           | 默认值 |
| -------- | ------------------------- | ------------------------------ | ------ |
| label    | 面包屑名称                | `string`                       | `-`    |
| path     | 跳转路径(`a`标签的`href`) | `string`                       |
| children | 下拉菜单展示项            | `{label:string,path:string}[]` | `-`    |

## 类型定义

组件导出以下类型定义

```ts
import type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbRoute } from '@cedar/ui'
```
