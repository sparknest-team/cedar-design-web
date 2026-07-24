---
title: Color 颜色
description: '表单颜色字段。面板请使用 ColorPicker。'
permalink: /components/color-field/
---

# Color

表单颜色字段（带触发器）。内部使用 `ColorPicker`。

纯面板请使用 [`ColorPicker`](/components/color-picker/)（默认无触发器）。设计 Token 色板见 [颜色 Color](/components/color/)。

## 案例

### 基本用法

<demo src="./__demos__/basic.vue"></demo>

### 尺寸

<demo src="./__demos__/size.vue"></demo>

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
