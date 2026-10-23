---
title: Color 颜色
description: '表单颜色字段。面板请使用 ColorPicker。'
permalink: /components/color/
---

# Color

表单颜色字段（带触发器）。内部使用 `ColorPicker`。

纯面板请使用 [`ColorPicker`](/components/color-picker/)（默认无触发器）。设计 Token 色板见 [颜色 Color](/components/style/color/)。

## 案例

### 基本用法

<demo src="./__demos__/basic.vue"></demo>

### 尺寸

<demo src="./__demos__/size.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 绑定值 | `string` | `-` |
| `format` | 颜色格式 | `hex \| rgb` | `-` |
| `size` | 尺寸 | `xs \| sm \| md \| lg \| xl` | `md` |
| `show-text` | 显示颜色值 | `boolean` | `false` |
| `show-history` | 显示历史颜色 | `boolean` | `false` |
| `show-preset` | 显示预设颜色 | `boolean` | `false` |
| `disabled` | 禁用 | `boolean` | `false` |
| `disabled-alpha` | 禁用透明通道 | `boolean` | `false` |
| `color-picker-props` | 透传给 ColorPicker | `object` | `{}` |

### Form 字段展示与确认

本组件支持 `presentation`，字段 > FormItem > Form 逐层继承；未指定时为 `inline`，保留原有交互。支持值：`inline / click / dblclick`。其他编辑展示使用 Cell 入口和一份草稿，确认后才更新 v-model；取消、重置或启用 readPretty 丢弃草稿。

Cedar 使用 presentation="click" / "dblclick" 在原位进入编辑，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。 readPretty 为纯阅读属性，与 readonly、disabled 独立。

`before-commit(value, { previousValue, signal })` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。
