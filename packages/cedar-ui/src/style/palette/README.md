---
permalink: /components/palette/
---

# 色板 Palette

### 介绍

Cedar 色阶以 CSS 变量提供，前缀一律 `--c-*`（与 Maple 的 `--mp-*` 同构）。
业务页优先用 [颜色 Color](/components/style/color/) 语义工具类（如 `c-text-1` / `c-fill-2`）；需要精细色阶或主题覆盖时再直接引用色阶变量。

完整色阶见 `style/color/css-variables.less`，语义见 `style/theme/css-variables.less`；暗色由 `:root[cedar-theme=dark]` 覆盖。

### 功能色阶（1–10）

通道值为 `R, G, B`，使用时包一层 `rgb()` / `rgba()`：

```css
color: rgb(var(--c-primary-6));
background: rgba(var(--c-primary-6), 0.12);
```

```html
<div style="background: rgb(var(--c-primary-6)); color: #fff">primary-6</div>
<div style="background: rgb(var(--c-success-6)); color: #fff">success-6</div>
```

定制主色示例：

```css
:root {
  --c-brand-6: 0, 190, 190;
  --c-brand-5: 55, 209, 204;
  --c-brand-7: 14, 153, 158;
}
```

`--c-primary-*` 映射到 `--c-brand-*`，覆盖 brand 色阶即可联动主色。更多见 [主题定制](/guide/theme/)。

### 色阶预览

<demo src="./__demos__/colors.vue"></demo>
