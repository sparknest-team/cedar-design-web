---
permalink: /components/segmented/
---

# Segmented 分段控制器

用于在少数互斥选项之间快速切换。

`model-value` 为受控值：交互只提出更新，父级拒绝时原生选中状态和外观均恢复。`default-value` 只用于初始化；未提供两者时不默认选择首项。普通 `change` 仅通知，不等待返回的 Promise。

模型仅支持 string / number；undefined 表示非受控，null 不属于公开模型类型。

未设置的 disabled、readonly、size 依次继承 FormItem、Form；size 再继承 ConfigProvider，最终回退 md。显式 false 可覆盖继承状态。只读保留键盘焦点并阻止改值；FormItem 的错误状态通过 aria-invalid 反馈，错误消息关联到单选组，并与已有 aria-describedby 合并；不新增面板或加载属性。

## 基础示例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 分段尺寸与禁用状态

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `size` | 尺寸 | 分段尺寸与禁用状态 |
| `options` | 选项列表 | 分段尺寸与禁用状态 |
| `disabled` | 禁用 | 分段尺寸与禁用状态 |
| `default-value` | 非受控默认值 | 分段尺寸与禁用状态 |
<!-- demo-config-notes:end -->

比较不同尺寸的密度与禁用选项的行为；受控值和块级布局保持独立。

<demo src="./__demos__/appearance-state-comparison.vue"></demo>

## 布局与排列

### 块级撑满

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `block` | 撑满父宽度 | 块级撑满 |
| `options` | 选项列表 | 块级撑满 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/block.vue"></demo>

## 交互与控制

### 受控

<demo src="./__demos__/controlled.vue"></demo>

## 可访问性

- 根节点使用 `role="radiogroup"`，选项为原生 `radio`，支持键盘切换。
- 可通过 `name` 绑定表单字段名。
- 未设置 name 时使用支持 SSR 的稳定实例标识；不同实例保持独立原生单选组。
- 整体禁用时设置 `aria-disabled`。

## API

### Segmented Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 当前值 | `string \| number` | — |
| default-value | 非受控默认值 | `string \| number` | — |
| options | 选项列表，支持只读数组 | `ReadonlyArray<string \| number \| SegmentedOption>` | `[]` |
| size | 尺寸；未设置时继承表单和全局配置，最终回退 md | `xs \| sm \| md \| lg \| xl` | `undefined` |
| disabled | 禁用；未设置时继承表单，显式 false 可覆盖 | `boolean` | `undefined` |
| readonly | 只读；未设置时继承表单，显式 false 可覆盖 | `boolean` | `undefined` |
| block | 撑满父宽度 | `boolean` | `false` |
| orientation | 分段选项的横纵排列，默认 horizontal；不表示文字阅读方向 | `horizontal \| vertical` | `horizontal` |
| name | 原生 name | `string` | — |

### Segmented Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 值变化 | `(value, event)` |
| update:model-value | v-model | `(value)` |

### Segmented Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| label | 自定义选项内容 | `{ data: SegmentedOption }` |

## Types

### SegmentedOption

| 字段 | 说明 | 类型 |
| --- | --- | --- |
| label | 文案；省略时显示 value | `string \| () => VNodeChild` |
| value | 值 | `string \| number` |
| disabled | 禁用该项 | `boolean` |

数值 1 和字符串 "1" 是不同选项；同类型相同 value 重复出现时保留首项。label 插槽优先于选项 label；自定义图标内容仍需提供可访问名称。业务元数据仅通过插槽 data 传递，不自动透传为原生属性。

实例未增加 focus、blur 或 select 方法；本组件只负责互斥选择，不提供关联内容面板。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-segmented-bg` | `var(--c-sys-color-surface-muted)` | `background` |
| `--c-segmented-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-segmented-font-size-lg` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-segmented-font-size-md` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-segmented-font-size-sm` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-segmented-font-size-xl` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-segmented-font-size-xs` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-segmented-height-lg` | `var(--c-size-9)` | `min-height` |
| `--c-segmented-height-md` | `var(--c-size-8)` | `min-height` |
| `--c-segmented-height-sm` | `var(--c-size-7)` | `min-height` |
| `--c-segmented-height-xl` | `var(--c-size-10)` | `min-height` |
| `--c-segmented-height-xs` | `var(--c-size-6)` | `min-height` |
| `--c-segmented-item-bg-hover` | `var(--c-sys-color-state-hover)` | `background` |
| `--c-segmented-item-bg-selected` | `var(--c-sys-color-surface-default)` | `background` |
| `--c-segmented-item-border-radius` | `calc(var(--c-segmented-border-radius) - 1px)` | `border-radius` |
| `--c-segmented-item-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-segmented-item-color-hover` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-segmented-item-color-selected` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-segmented-item-disabled-color` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-segmented-item-font-weight-selected` | `500` | `font-weight` |
| `--c-segmented-item-padding-lg` | `0 14px` | `padding` |
| `--c-segmented-item-padding-md` | `0 var(--c-spacing-6)` | `padding` |
| `--c-segmented-item-padding-sm` | `0 var(--c-spacing-5)` | `padding` |
| `--c-segmented-item-padding-xl` | `0 var(--c-spacing-7)` | `padding` |
| `--c-segmented-item-padding-xs` | `0 var(--c-spacing-4)` | `padding` |
| `--c-segmented-label-gap` | `var(--c-spacing-2)` | `gap` |
| `--c-segmented-padding` | `var(--c-border-width-3)` | `padding` |
| `--c-segmented-shadow-selected` | `0 1px 2px rgba(0, 0, 0, 0.06)` | `box-shadow` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-segmented-border-radius: var(--c-border-radius-md);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
