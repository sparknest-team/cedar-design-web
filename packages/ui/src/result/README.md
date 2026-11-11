---
permalink: /components/result/
---

# Result

用于反馈一系列操作任务的处理结果，当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 基础示例

### 基础用法

Next status 循环六种本地结果状态并更新标题/图形，Reset status 恢复 info；按钮不发请求或导航。Result 只展示传入的 status，不根据标题文字推断成功/失败。

展示结果状态。

<demo src="./__demos__/basic.vue"></demo>

## 内容与展示

### 成功、警告与失败

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `status` | 结果页显示的状态 | 成功、警告与失败、HTTP 结果状态对比、完整功能 |
| `title` | 标题内容 | 成功、警告与失败、完整功能 |
| `subtitle` | 子标题内容 | HTTP 结果状态对比 |
<!-- demo-config-notes:end -->

对比语义状态如何影响图形、标题和操作区；HTTP 状态与自定义图形另行展示。

<details>
<summary>配置说明与使用限制</summary>

#### 成功状态

展示成功状态。

#### 警告状态

展示警告状态。

#### 错误状态

展示错误状态。

</details>

<demo src="./__demos__/status-comparison.vue"></demo>

### HTTP 结果状态对比

比较无权限、资源不存在和服务器错误的内容层级，按业务恢复路径选择操作文案。

<details>
<summary>配置说明与使用限制</summary>

#### HTTP状态码 403

没有当前页面的访问权限。

#### HTTP状态码 404

页面未找到

#### HTTP状态码 500

通常表示服务器错误

</details>

<demo src="./__demos__/http-status-comparison.vue"></demo>

### 完整功能

完整功能

<demo src="./__demos__/all.vue"></demo>

## 自定义与插槽

### 自定义状态

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `title` | 标题内容 | 自定义状态 |
| `subtitle` | 子标题内容 | 自定义状态 |
<!-- demo-config-notes:end -->

自定义状态。需要传入指定的图标

<demo src="./__demos__/custom.vue"></demo>

## API

### Result Props

| 参数名   | 描述             | 类型                                                                             |  默认值  |
| -------- | ---------------- | -------------------------------------------------------------------------------- | :------: |
| status   | 结果页显示的状态 | `'info' \| 'success' \| 'warning' \| 'danger' \| 'question' \| 'empty' \| '403' \| '404' \| '500'` | `'info'` |
| title    | 标题内容         | `string`                                                                         |   `-`    |
| subtitle | 子标题内容       | `string`                                                                         |   `-`    |
| image-size | 状态图形尺寸，数字表示 px | `string \| number` | `-` |
| animation | 是否启用状态图形动画 | `boolean` | `true` |

### Result Slots

| 插槽名   |   描述   | 参数 | 版本  |
| -------- | :------: | ---- | :---- |
| icon     |   自定义状态图形   | `{ size?: string }` |       |
| title    |   标题   | -    |       |
| subtitle |  副标题  | -    |       |
| extra    |  操作区  | -    | 2.8.0 |
| default  | 默认插槽 | -    | 2.8.0 |

## Types

组件导出以下类型定义

```ts
import type { ResultInstance } from '@cedar-design/ui-vue'
```

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-result-background` | `var(--c-color-bg-white)` | `background-color` |
| `--c-result-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-result-content-margin` | `var(--c-spacing-8) 0 0` | `margin` |
| `--c-result-danger-border-color` | `var(--c-color-danger-light-3)` | `border-color` |
| `--c-result-danger-color` | `var(--c-sys-color-content-danger)` | `fill` |
| `--c-result-empty-border-color` | `rgb(var(--c-gray-2))` | `border-color` |
| `--c-result-empty-color` | `rgb(var(--c-gray-5))` | `fill` |
| `--c-result-extra-margin` | `var(--c-spacing-8) 0 0` | `margin` |
| `--c-result-image-size` | `80px` | `border`, `height`, `width` |
| `--c-result-info-border-color` | `var(--c-color-primary-light-3)` | `border-color` |
| `--c-result-info-color` | `var(--c-color-info)` | `fill` |
| `--c-result-padding` | `var(--c-spacing-10)` | `padding` |
| `--c-result-question-border-color` | `rgb(var(--c-gray-2))` | `border-color` |
| `--c-result-question-color` | `rgb(var(--c-gray-6))` | `fill` |
| `--c-result-subtitle-color` | `var(--c-color-text-2)` | `color` |
| `--c-result-subtitle-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-result-subtitle-line-height` | `1.5715` | `line-height` |
| `--c-result-subtitle-margin` | `var(--c-spacing-4) 0 0` | `margin` |
| `--c-result-success-border-color` | `var(--c-color-success-light-3)` | `border-color` |
| `--c-result-success-color` | `var(--c-sys-color-content-success)` | `fill` |
| `--c-result-title-color` | `var(--c-color-text-1)` | `color` |
| `--c-result-title-font-size` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-result-title-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-result-title-margin` | `var(--c-spacing-7) 0 0` | `margin` |
| `--c-result-warning-border-color` | `var(--c-color-warning-light-3)` | `border-color` |
| `--c-result-warning-color` | `var(--c-sys-color-content-warning)` | `fill` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-result-background: var(--c-color-bg-white);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
