---
permalink: /components/empty/
---

# Empty

指当前场景没有对应的数据内容，呈现出的一种状态。

## 基础示例

### 基础用法

空状态组件的基本用法。不传 `description` 时使用国际化文案。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 图片尺寸

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `image-size` | 图片/图标尺寸 | 图片尺寸 |
| `description` | 描述内容，缺省时使用国际化文案 | 图片尺寸 |
<!-- demo-config-notes:end -->

通过 `image-size` 属性控制图标尺寸，可选值为 `xs` `sm` `md` `lg` `xl`，也可传入数值。

<demo src="./__demos__/size.vue"></demo>

## 内容与展示

### 空态图形与补充操作

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `description` | 描述内容，缺省时使用国际化文案 | 空态图形与补充操作、显示与隐藏 |
| `image-url` | 自定义图片的地址 | 空态图形与补充操作 |
| `alt` | 图片替代文本 | 空态图形与补充操作 |
| `show-icon` | 是否显示图标 | 显示与隐藏 |
| `show-description` | 是否显示描述 | 显示与隐藏 |
<!-- demo-config-notes:end -->

对比自定义图形和补充操作，观察替换默认内容与保留业务操作入口的区别。

<details>
<summary>配置说明与使用限制</summary>

#### 操作按钮

Reload 只更新本地刷新次数和描述，不请求服务；真实业务请自行接入请求与结果状态。

通过 `extra` 插槽添加操作按钮。

#### 自定义图片和文案

通过 `image` 插槽自定义图标、图片，或通过默认插槽修改文案。

</details>

<demo src="./__demos__/content-comparison.vue"></demo>

### 显示与隐藏

通过两个按钮分别隐藏和恢复图标、描述。两者同时隐藏不代表隐藏整个组件，也不影响 extra 插槽。

通过 `show-icon`、`show-description` 控制图标和描述是否显示。

<demo src="./__demos__/show.vue"></demo>

## API

### Empty Props

| 属性               | 说明                         | 类型                                                     | 默认值  |
| ------------------ | ---------------------------- | -------------------------------------------------------- | ------- |
| description      | 描述内容，缺省时使用国际化文案 | `string`                                                   | -      |
| image-url        | 自定义图片的地址               | `string`                                                   | -      |
| alt              | 图片替代文本                   | `string`                                                   | `''`   |
| image-size       | 图片/图标尺寸                  | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number \| string` | `'md'` |
| show-icon        | 是否显示图标                   | `boolean`                                                  | `true` |
| show-description | 是否显示描述                   | `boolean`                                                  | `true` |

### Empty Events

| 事件名 | 说明     | 参数                  |
| ------ | -------- | --------------------- |
| click  | 点击回调 | `(ev: MouseEvent)`    |

### Empty Slots

| 插槽名  | 说明      | 参数 |
| ------- | --------- | ---- |
| image   | 图片/图标 | -    |
| default | 描述内容  | -    |
| extra   | 额外操作  | -    |

## Types

组件导出以下类型定义

```ts
import type { EmptyImageSize, EmptyProps } from '@cedar-design/ui'
```

ConfigProvider 的 `empty` 插槽可以替换未自定义内容的 Empty，不作为 Empty 的公开 Prop。

本地 default、image、extra 插槽，或非空 image-url、description 优先于全局替换；动态添加或移除内容也遵守此规则。全局替换接管整个 Empty 内容，show-icon、show-description、image-size 等只控制本地模板，不会改写提供者的节点。替换节点的冒泡点击仍触发 Empty 的 click 一次；多根节点与嵌套 Empty 保留相同行为，并避免递归套用全局替换。

## CSS Variables

描述是文字，必须按文本对比度检查；装饰图标可以更弱。自定义图片或插槽可能有自己的颜色，不会被 `icon-color` 强制重染。尺寸与间距按桌面／移动布局分别维护，但同名变量职责一致。

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-empty-description-color` | `var(--c-sys-color-content-tertiary)` | `color` |
| `--c-empty-description-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-empty-description-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-empty-extra-margin-top` | `var(--c-spacing-5)` | `margin-top` |
| `--c-empty-icon-color` | `var(--c-sys-color-content-decorative)` | `color` |
| `--c-empty-image-margin-bottom` | `var(--c-spacing-2)` | `margin-bottom` |
| `--c-empty-padding` | `var(--c-spacing-5) 0` | `padding` |
| `--c-empty-size-lg` | `var(--c-size-35)` | `font-size`, `height`, `width` |
| `--c-empty-size-md` | `var(--c-size-25)` | `font-size`, `height`, `width` |
| `--c-empty-size-sm` | `var(--c-size-20)` | `font-size`, `height`, `width` |
| `--c-empty-size-xl` | `var(--c-size-45)` | `font-size`, `height`, `width` |
| `--c-empty-size-xs` | `var(--c-size-15)` | `font-size`, `height`, `width` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-empty-description-color: var(--c-sys-color-content-tertiary);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
