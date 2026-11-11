---
permalink: /components/breadcrumb/
---

# Breadcrumb

面包屑是辅助导航模式，用于识别页面在层次结构内的位置，并根据需要向上返回。

当前位置（最后一级）默认使用主文字色，不额外加粗，并标记 `aria-current="page"`。纯文本无点击反馈；配置 `href` 的链接、绑定 `@click` 的操作和下拉入口显示品牌色、手型及悬停 / 按下反馈，键盘聚焦时显示焦点轮廓。`@click` 操作支持 Enter 和空格。最后一级通常保持纯文本；显式提供链接或操作时仍可交互。

触屏设备上，可点击项的触摸区域至少为 44 × 44px；按下显示底色和下划线，松手后恢复，不保留鼠标悬停效果。默认省略图标仅用于提示；如需查看隐藏路径，可通过 more-icon 插槽提供可聚焦的按钮并组合 Tooltip。

默认导航区域和省略提示的无障碍名称随当前语言变化；可通过根组件的 aria-label 自定义导航区域名称。

## 基础示例

### 基本用法

面包屑的基本用法

<demo src="./__demos__/basic.vue"></demo>

## 内容与展示

### 参数化配置

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `routes` | 设置路径 | 参数化配置、带有下拉菜单、显示省略 |
| `max-count` | 最多展示的正常面包屑项数量，不包含 more（0 表示不限制） | 显示省略 |
<!-- demo-config-notes:end -->

通过`routes`来传递面包屑数据。若是要自定义面包屑的话，建议使用`BreadcrumbItem`
组件默认仅为前面的层级渲染链接，最后一级保持文本；可通过 `item-render` 插槽自定义渲染。

<demo src="./__demos__/routes.vue"></demo>

### 带有下拉菜单

通过`droplist`或者`routes`来指定下拉菜单。

<demo src="./__demos__/droplist.vue"></demo>

### 显示省略

通过`max-count`来指定面包屑的最多渲染数量，超出的部分将显示为省略号

<demo src="./__demos__/max-count.vue"></demo>

### 链接与点击

对比纯文本、`href` 链接和 `@click` 操作。点击后下方显示选择结果；最后一级默认保持纯文本。省略项不会触发 `click`。

<demo src="./__demos__/link.vue"></demo>

## 自定义与插槽

### 自定义分隔符

通过`separator`属性或插槽自定义分隔符，面包屑子项也可通过`separator`属性或插槽自定义分隔符，且优先级高于父项。

<demo src="./__demos__/custom-split.vue"></demo>

### 自定义图标

可以在内容中使用自定义图标

<demo src="./__demos__/custom-icon.vue"></demo>

routes 中含 children 的项目保留父路径链接，并提供独立的下拉按钮；选择子项时根组件派发 select(route, event)，由业务决定是否导航。手写 BreadcrumbItem 的 select 仍由该项监听。

## API

### Breadcrumb Props

| 属性            | 说明                                                                                                                              | 类型                              | 默认值 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------ |
| max-count       | 最多展示的正常面包屑项数量，不包含 more（0 表示不限制）                                                                           | `number`                          | `0`    |
| routes          | 设置路径                                                                                                                          | `BreadcrumbRoute[]`               | `-`    |
| separator       | 分隔符文字                                                                                                                        | `string \| number`                | `/`    |

### Breadcrumb Slots

| 插槽名      | 说明                               | 参数                                                                        |
| ----------- | ---------------------------------- | --------------------------------------------------------------------------- |
| default     | 面包屑子项                         | `-`                                                                         |
| more-icon   | 自定义更多图标                     | `omittedItems` `count` `start` `end`                                        |
| item-render | routes设置时生效，自定义渲染面包屑 | `route:BreadcrumbRoute`<br/>`routes:BreadcrumbRoute[]`<br/>`paths:string[]` |
| separator   | 自定义分隔符                       | `-`                                                                         |

### Breadcrumb Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| select | routes 模式选择内置下拉子项时触发 | `route: BreadcrumbRoute, event?: Event` |

`more-icon` 的 omittedItems 仅在 routes 模式提供被省略的路径数据；默认插槽组合模式下为空数组，count、start 和 end 仍描述省略范围。

### BreadcrumbItem Props

| 属性           | 说明         | 类型                          | 默认值 |
| -------------- | ------------ | ----------------------------- | ------ |
| separator      | 分隔符文字   | `string \| number`            | `-`    |
| href           | 跳转链接     | `string`                      | `-`    |
| droplist       | 下拉菜单内容 | `BreadcrumbRoute['children']` | `-`    |
| dropdown-props | 下拉菜单属性；open、onUpdate:open 和 onSelect 由组件管理 | `MenuProps`           | `-`    |

### BreadcrumbItem Events

| 事件名 | 说明     | 参数           |
| ------ | -------- | -------------- |
| click  | 点击事件（省略项不触发） | `event: MouseEvent` |
| select | 选择内置下拉项时触发 | `route: BreadcrumbRoute, event?: Event` |

### BreadcrumbItem Slots

| 插槽名    | 说明           | 参数 |
| --------- | -------------- | ---- |
| default   | 条目内容 | `-` |
| droplist  | 自定义下拉菜单 | `-`  |
| separator | 自定义分隔符   | `-`  |

## Types

### BreadcrumbRoute

| 参数名   | 描述                      | 类型                           | 默认值 |
| -------- | ------------------------- | ------------------------------ | ------ |
| label    | 面包屑名称                | `string`                       | `-`    |
| path     | 跳转路径(`a`标签的`href`) | `string`                       |
| children | 下拉菜单展示项            | `{label:string,path:string}[]` | `-`    |

组件导出以下类型定义

```ts
import type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbRoute } from '@cedar-design/ui-vue'
```

## 使用说明



- 非空 `routes` 优先于默认插槽；空数组回退到插槽。默认路由渲染仅前面的项目带链接，最后一项标记 `aria-current="page"`；`item-render` 自行控制链接。
- 分隔符优先级：子项插槽 → 子项属性 → 父级插槽 → 父级属性；支持 `0` 和空字符串。
- `max-count` 为非负整数，0 表示不限制；设置 1 时按 2 处理，以保留首项和当前位置。正数小数向下取整后至少按 2 处理，负数或非有限数按 0 处理；无效值会在开发环境提示。总数大于有效数量加 1 才折叠，省略位置不触发原项的点击、链接或下拉菜单。
- 内置下拉选择派发 `select(route, event)`。动态增删、重排及 SSR 会同步计算索引和分隔符。
- 自定义属性作用于面包屑项的内容节点。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-breadcrumb-bg` | `transparent` | `background-color` |
| `--c-breadcrumb-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-breadcrumb-dropdown-icon` | `var(--c-color-text-2)` | `color` |
| `--c-breadcrumb-font-weight-active` | `var(--c-font-weight-400)` | `font-weight` |
| `--c-breadcrumb-icon-color` | `var(--c-color-text-3)` | `color` |
| `--c-breadcrumb-link-text-color` | `rgb(var(--c-primary-8))` | `color` |
| `--c-breadcrumb-link-text-color-hover` | `rgb(var(--c-primary-9))` | `color` |
| `--c-breadcrumb-margin-dropdown-icon-left` | `var(--c-spacing-2)` | `margin-inline-start` |
| `--c-breadcrumb-margin-separator-horizontal` | `var(--c-spacing-2)` | `margin` |
| `--c-breadcrumb-padding-text-horizontal` | `var(--c-spacing-2)` | `margin`, `padding` |
| `--c-breadcrumb-separator-color` | `var(--c-color-text-4)` | `color` |
| `--c-breadcrumb-separator-font-size` | `inherit` | `font-size` |
| `--c-breadcrumb-separator-margin` | `0 var(--c-breadcrumb-margin-separator-horizontal)` | `margin` |
| `--c-breadcrumb-size-dropdown-icon` | `var(--c-size-3)` | `font-size` |
| `--c-breadcrumb-size-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-breadcrumb-size-text-height` | `var(--c-size-6)` | `line-height` |
| `--c-breadcrumb-text-border-radius-hover` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-breadcrumb-text-color` | `var(--c-color-text-2)` | `color` |
| `--c-breadcrumb-text-color-active` | `var(--c-color-text-1)` | `color` |
| `--c-breadcrumb-touch-target-size` | `44px` | `min-height`, `min-width` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-breadcrumb-icon-color: var(--c-color-text-3);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
