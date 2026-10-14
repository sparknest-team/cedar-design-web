---
permalink: /components/style/atomic-usage/
---

# 常用写法

这一页按场景整理带 `c-` 前缀的原子类。布局、间距、尺寸等类由 UnoCSS 或 Tailwind preset 在构建期生成，**不是 UI 包默认附带的全部工具类**；安装配置见 [原子化 CSS](/components/style/atomic-css/)。

下方 Demo 使用局部等价 CSS 展示效果，不要求文档读者先安装生成器。源码里的演示类只用于展示；业务中使用表格列出的 preset 类。

## 布局与组合

| 场景 | 类名示例 |
| --- | --- |
| 横向排列 | `c-flex c-items-center c-justify-between` |
| 纵向排列 | `c-flex c-flex-col` |
| 换行 | `c-flex c-flex-wrap` |
| 间隔 | `c-gap-12` |

<demo src="../atomic-css/__demos__/combined.vue"></demo>

## 内外间距

`p` / `m` 表示内 / 外间距，`x` / `y` 表示水平 / 垂直双轴，`t/r/b/l` 表示单侧。例如 `c-p-16`、`c-px-8`、`c-mt-16`。

<demo src="../atomic-css/__demos__/spacing.vue"></demo>

## 响应式布局

`sm:`、`md:`、`lg:`、`xl:` 在对应视口断点应用类；容器宽度与 viewport 不是同一概念。

<demo src="../atomic-css/__demos__/breakpoints.vue"></demo>

## 语义颜色与字号

业务优先使用语义颜色，不在组件中硬编码品牌色。固定颜色工具类与 preset 类的能力范围不同，见 [颜色 Color](/components/color/) 与 [Utilities 总览](/components/style/utilities/)。

<demo src="../atomic-css/__demos__/colors.vue"></demo>
<demo src="../atomic-css/__demos__/font-size.vue"></demo>
