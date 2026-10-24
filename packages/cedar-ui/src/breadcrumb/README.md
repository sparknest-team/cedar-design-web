---
permalink: /components/breadcrumb/
---

# Breadcrumb

面包屑是辅助导航模式，用于识别页面在层次结构内的位置，并根据需要向上返回。

当前位置（最后一级）默认使用主文字色，不额外加粗，并标记 `aria-current="page"`。纯文本无点击反馈；配置 `href` 的链接、绑定 `@click` 的操作和下拉入口显示品牌色、手型及悬停 / 按下反馈，键盘聚焦时显示焦点轮廓。`@click` 操作支持 Enter 和空格。最后一级通常保持纯文本；显式提供链接或操作时仍可交互。

触屏设备上，可点击项的触摸区域至少为 44 × 44px；按下显示底色和下划线，松手后恢复，不保留鼠标悬停效果。省略图标支持点击查看隐藏路径。

## 案例

### 基本用法

面包屑的基本用法

<demo src="./__demos__/basic.vue"></demo>

### 自定义分隔符

通过`separator`属性或插槽自定义分隔符，面包屑子项也可通过`separator`属性或插槽自定义分隔符，且优先级高于父项。

<demo src="./__demos__/custom-split.vue"></demo>

### 自定义图标

可以在内容中使用自定义图标

<demo src="./__demos__/custom-icon.vue"></demo>

### 参数化配置

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

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

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
| more-icon   | 自定义更多图标                     | `omittedItems` `count` `start` `end`                                        |
| item-render | routes设置时生效，自定义渲染面包屑 | `route:BreadcrumbRoute`<br/>`routes:BreadcrumbRoute[]`<br/>`paths:string[]` |
| separator   | 自定义分隔符                       | `-`                                                                         |

### BreadcrumbItem Props

| 属性           | 说明         | 类型                          | 默认值 |
| -------------- | ------------ | ----------------------------- | ------ |
| separator      | 分隔符文字   | `string \| number`            | `-`    |
| href           | 跳转链接     | `string`                      | `-`    |
| droplist       | 下拉菜单内容 | `BreadcrumbRoute['children']` | `-`    |
| dropdown-props | 下拉菜单属性 | `MenuProps`           | `-`    |

### BreadcrumbItem Events

| 事件名 | 说明     | 参数           |
| ------ | -------- | -------------- |
| click  | 点击事件（省略项不触发） | `event: MouseEvent` |
| select | 选择内置下拉项时触发 | `route: BreadcrumbRoute, event?: Event` |

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
import type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbRoute } from '@cedar-design/ui'
```

## 同源实现与平台边界

Breadcrumb 与 BreadcrumbItem 在 Cedar / Maple 中独立复制维护，主体、Props、上下文、类型、关键样式及配对测试纳入 `design-ui/bin/copied-components-check.mjs`。图标、安装入口、菜单实现和主题 token 由各库本地提供。

- 非空 `routes` 优先于默认插槽；空数组回退到插槽。默认路由渲染仅前面的项目带链接，最后一项标记 `aria-current="page"`；`item-render` 自行控制链接。
- 分隔符优先级：子项插槽 → 子项属性 → 父级插槽 → 父级属性；支持 `0` 和空字符串。
- `max-count` 沿用现有边界：总数大于 `max-count + 1` 才折叠；保留首项和尾部项目，省略位置不触发原项的点击、链接或下拉菜单。
- 内置下拉选择派发 `select(route, event)`。动态增删、重排及 SSR 会同步计算索引和分隔符。
- Cedar 项内容新增 `__content` 包装，属性透传到该内容节点；Maple 原有主题变量继续通过 token 映射生效。
