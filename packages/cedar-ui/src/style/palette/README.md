---
permalink: /components/palette/
---

## 色板 Color Palette

此处列出提供的全部颜色

- 请注意，不建议直接在项目中使用以下变量，请优先使用 [ :link:`颜色 Color`](/components/color/)中标明的语义化设计变量。
  <br/>
- 示例：背景色：`bg-brand-1` 或 文字颜色：`brand-1`、css变量`--brand-1`。
  <br/>
- 当色号为主色（6号）时，可以省略色号，如:`bg-brand` 或 `brand`。

<demo src="./__demos__/colors.vue"></demo>

### 变量 CSS Variables

颜色变量定义规则：--${色系}-${色号}: ${r}, ${g}, ${b};
<br/>如需定制颜色，可以在项目中覆盖这些变量。

```css
:root body {
  --primary-7: 1, 160, 156;
  --primary-6: 0, 190, 190;
  --primary-5: 110, 209, 210;
  --primary-4: 170, 225, 228;
  --primary-3: 200, 238, 238;
  --primary-2: 232, 248, 248;
  --primary-1: 244, 251, 251;
}
```
