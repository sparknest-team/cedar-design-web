---
title: Color 颜色
description: "表单颜色字段。面板请使用 ColorPicker。"
permalink: /components/color/
---

# Color

表单颜色字段（带触发器）。内部使用 `ColorPicker`。

未设置 disabled 或 readonly 时继承 FormItem 和 Form；显式 false 可覆盖对应的继承状态。禁用或只读时不能打开颜色面板或修改颜色。

默认触发器是原生按钮，支持 Tab、Enter 和空格。传入的 `id` 位于该按钮，可与 FormItem 标签的 `for` 关联。当标签未指定 `for` 或 `for` 与按钮 `id` 一致时，按钮名称由表单标签和本地化的“选择颜色”组成；`aria-label` 或 `aria-labelledby` 优先。没有表单标签时使用本地化的“选择颜色”。自定义触发器插槽应自行提供可访问名称和键盘操作。

纯面板请使用 [`ColorPicker`](/components/color-picker/)（默认无触发器）。设计 Token 色板见 [颜色 Color](/components/style/color/)。

## 基础示例

### 基本用法

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 尺寸

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置        | 作用       | 相关示例 |
| ----------- | ---------- | -------- |
| `size`      | 尺寸       | 尺寸     |
| `show-text` | 显示颜色值 | 尺寸     |

<!-- demo-config-notes:end -->

<demo src="./__demos__/size.vue"></demo>

## API

### 空值识别与阅读空文案

`empty-values` 用于空值识别，`empty-value` 保留原清空输出；`empty-text` 仅在 `read-pretty` 空内容下展示，默认 `'-'`，字段 > FormItem > Form，自定义 read 插槽优先。显式配置 empty-values 后，内置 required 接入该策略，自定义校验仍收到原值。详见[统一说明](/guide/empty-values/)。

| 参数         | 类型               | 缺省与范围                                            |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | 字段 > FormItem > Form > 组件族默认；完整覆盖，不合并 |
| empty-text   | string             | 字段 > FormItem > Form > '-'；显式 '' 有效            |

以上是字段展示层 API；纯面板不因此新增阅读模式。Form 与 FormItem 提供继承配置。empty-value 的现有类型与默认输出仍按该组件原 API 执行。

### Color Props

| 参数                 | 说明               | 类型                         | 默认值  |
| -------------------- | ------------------ | ---------------------------- | ------- |
| `model-value`        | 绑定值             | `string`                     | `-`     |
| `default-value` | 非受控初始值 | `string` | `undefined` |
| `format`             | 颜色格式           | `hex \| rgb`                 | `-`     |
| `size`               | 尺寸               | `xs \| sm \| md \| lg \| xl` | `md`    |
| `show-text`          | 显示颜色值         | `boolean`                    | `false` |
| `show-history`       | 显示历史颜色       | `boolean`                    | `false` |
| `show-preset`        | 显示预设颜色       | `boolean`                    | `false` |
| `disabled`           | 禁用，未设置时继承表单 | `boolean` | `undefined` |
| `readonly` | 只读，未设置时继承表单 | `boolean` | `undefined` |
| `disabled-alpha`     | 禁用透明通道       | `boolean`                    | `false` |
| `history-colors` | 历史颜色 | `string[]` | `undefined` |
| `preset-colors` | 预设颜色 | `string[]` | `undefined` |
| `empty-value` | 清空时使用的值或工厂 | `string \| null \| (() => string \| null)` | `undefined` |
| `color-picker-props` | 透传给 ColorPicker | `Partial<ColorPickerProps>` | `{}` |

### Color Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| `update:modelValue` | 更新字段值 | `(value)` |
| `change` | 通知颜色变化 | `(value: string)` |
| `update:open` / `open-change` | 更新或通知字段编辑层的打开状态 | `(open: boolean)` |

### Color Slots

| 插槽 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 自定义颜色选择触发器 | — |
| `read` | 自定义纯阅读内容 | `{ value, text }` |

### 编辑与确认

通过 `edit-mode` 配置编辑方式；未指定时依次继承 FormItem、Form，默认 `direct`。支持值：`direct / click / dblclick`。非 direct 编辑模式通过字段值入口打开编辑面板，并维护单份草稿；确认后才更新 v-model，取消、重置或启用 readPretty 时丢弃草稿。

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

`before-commit(value, { previousValue, signal })` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。

拖动监听绑定控件所属视图。KeepAlive 停用或卸载会结束当前手势并释放监听；重新激活后需重新开始手势，旧手势回调不能继续改值。

## CSS Variables

<!-- component-css-variables:start -->

本组件未声明独立的公共 CSS 变量。请使用本页公开的配置与布局入口。 组合控件的外观复用 `color-picker` 的公共变量；共享变量可能同时影响同一 DOM 子树中的其他控件。

内部自定义属性与测量中间值属于实现细节，不作为业务定制 API。

<!-- component-css-variables:end -->
