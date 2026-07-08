---
permalink: /components/style/spacing/
---

## 边距 Spacing

用于设置元素的边距。

- 点击Class可快捷复制
- Properties表示该Class设置的属性值
- Effective CSS 表示该Class最终生效的CSS属性

**Class** 规则：`{type}{direction}-${negative}-{size}`。

**type** 是边距的类型：

- `m` - 表示 `margin`
- `p` - 表示 `padding`

**direction** 是边距的方向：

- `t` - 表示 `top`
- `r` - 表示 `right`
- `b` - 表示 `bottom`
- `l` - 表示 `left`
- `x` - 表示 `left` 和 `right`
- `y` - 表示 `top` 和 `bottom`
- `空` - 表示 4 个边的边距

**negative** 是边距的正负：

- `n` - 表示负边距
- `空` - 表示正边距

**size** 是边距的大小：

- 数值类目前支持`0px` ~ `64px`
- 状态类目前支持`auto`、`unset`
- 提供语义化的`size`:
- `xs-tight` -> `2px`
- `xs` -> `4px`
- `sm-tight` -> `6px`
- `sm` -> `8px` ,
- `md-tight` -> `12px` ,
- `md` -> `16px` ,
- `lg-tight` -> `20px` ,
- `lg` -> `24px` ,
- `xl-tight` -> `32px` ,
- `xl` -> `40px` ,
  <demo src="./__demos__/class.vue"></demo>

### 示例 Demo

自定义边距实现卡片
<demo src="./__demos__/demo.vue"></demo>
