---
permalink: /components/page-header/
---

# PageHeader 页头

返回按钮只派发 `back` 事件，不自动调用路由或浏览器历史。示例通过 Message 显示通知；真实返回目的地由调用方处理。原生按钮支持点击、Enter 和空格。

展示当前页面的标题、上下文和相关操作。组件不负责固定定位、背景等业务布局与皮肤能力，可通过 `class` / `style` 实现。

## 基础示例

### 基础用法

使用 Card 承载页头、Space 排列操作。桌面端将标题、副标题和右侧“关注”“创建任务”横向展示，点击操作查看消息反馈。

<demo src="./__demos__/basic.vue"></demo>

## 内容与展示

### 面包屑与透明表面

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `title` | 页头的主标题 | 面包屑与透明表面、完整结构 |
| `subtitle` | 页头的次标题 | 面包屑与透明表面、完整结构 |
| `show-back` | 是否显示返回按钮 | 完整结构 |
<!-- demo-config-notes:end -->

比较面包屑导航和透明背景下的标题层级；完整业务内容另见独立案例。

<details>
<summary>配置说明与使用限制</summary>

#### 页头上方内容

使用 Card 承载页头，通过 `header` 插槽在标题上方展示面包屑，区分页面路径与当前页面信息。

#### 透明底色

页头默认透明。使用 Card 的 `tonal` 变体提供底色，展示页头自然融入外层表面，无需自定义背景样式。

</details>

<demo src="./__demos__/surface-comparison.vue"></demo>

### 完整结构

使用 Card 承载页头，通过 Space、Row / Col、Descriptions、Grid、Statistic 和 Divider 组合项目资料、统计和底部信息，无需自定义样式。桌面端标题与操作横向排列，资料和统计随栅格断点换行。

<demo src="./__demos__/content.vue"></demo>

## 阅读方向

继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部覆盖。返回按钮位于阅读起点，默认返回图形在 RTL 下指向右侧。标题、副标题与扩展区沿阅读顺序排列；自定义返回插槽不自动镜像。

## 使用说明

### 配置说明

返回按钮在支持悬停的鼠标指针和键盘聚焦时显示圆形反馈，反馈圆不影响标题布局。

## API

返回按钮默认使用当前语言的返回文案，可通过 `back-button-aria-label` 指定更具体的名称。标题插槽可按页面结构放置合适层级的标题元素；返回事件只通知，不自动导航。

### PageHeader Props

| 属性     | 说明             | 类型      | 默认值  |
| -------- | ---------------- | --------- | ------- |
| show-back | 是否显示返回按钮 | `boolean` | `false` |
| back-button-aria-label | 返回按钮的可访问名称 | `string` | 当前语言返回文案 |
| title    | 页头的主标题     | `string`  | `-`     |
| subtitle | 页头的次标题     | `string`  | `-`     |
| extra    | 右侧附加内容     | `string`  | `-`     |

### PageHeader Events

| 事件名 | 说明               | 参数           |
| ------ | ------------------ | -------------- |
| back   | 点击返回按钮时触发 | event: `MouseEvent` |

### PageHeader Slots

| 插槽名   | 说明           | 参数 |
| -------- | -------------- | ---- |
| header   | 页头上方内容   | -    |
| back     | 自定义返回图标 | -    |
| avatar   | 头像           | -    |
| title    | 主标题         | -    |
| subtitle | 次标题         | -    |
| extra    | 右侧额外内容   | -    |
| default  | 页头正文内容   | -    |
| footer   | 页头底部内容   | -    |

## Types

```ts
import type { PageHeaderProps } from '@cedar-design/ui'
```

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-page-header-back-color` | `var(--c-color-text-2)` | `color` |
| `--c-page-header-back-hover-bg` | `var(--c-sys-color-state-hover)` | `background` |
| `--c-page-header-back-hover-size` | `30px` | `height`, `width` |
| `--c-page-header-back-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-page-header-content-margin-top` | `var(--c-spacing-8)` | `margin-top` |
| `--c-page-header-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-page-header-footer-margin-top` | `var(--c-spacing-8)` | `margin-top` |
| `--c-page-header-item-gap` | `var(--c-spacing-6)` | `margin-inline-start` |
| `--c-page-header-row-gap` | `var(--c-spacing-6)` | `margin-bottom` |
| `--c-page-header-subtitle-color` | `var(--c-color-text-3)` | `color` |
| `--c-page-header-title-color` | `var(--c-color-text-1)` | `color` |
| `--c-page-header-title-font-size` | `var(--c-font-size-title-2)` | `font-size` |
| `--c-page-header-title-font-weight` | `600` | `font-weight` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-page-header-back-color: var(--c-color-text-2);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
