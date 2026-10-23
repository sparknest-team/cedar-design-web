---
permalink: /components/style/utilities/
---

# Utilities 工具类总览

Cedar / Maple 语义与结构一致，**类名必须带库前缀**（`c-` / `mp-`），变量分别为 `--c-*` / `--mp-*`，避免两端混用撞名。  
不做无前缀别名，不做向后兼容。

|               | Cedar                                                    | Maple                                                                |
| ------------- | -------------------------------------------------------- | -------------------------------------------------------------------- |
| 类名          | `c-text-1`、`c-mt-16`                                    | `mp-text-1`、`mp-mt-16`                                              |
| 形态          | 固定 Utilities + Uno/TW preset                           | 独立 Utilities + Uno/TW preset                                       |
| Token         | `--c-*`                                                  | `--mp-*`                                                             |
| 暗色          | 只改 token，类名不变                                     | 同左                                                                 |
| 原子化 preset | `@cedarjs/preset-unocss` / `@cedarjs/preset-tailwindcss` | `@maplejs/maple-preset-unocss` / `@maplejs/maple-preset-tailwindcss` |

完整规范见 [Utility 工具类规范](/practices/utility-spec/)。色阶变量（`--c-red-1…10` 等）见 [Palette](/components/palette/)，不进默认工具包。

### 快速预览

<demo src="./__demos__/overview.vue"></demo>

### 分册

| 页面                                                 | 内容                                         |
| ---------------------------------------------------- | -------------------------------------------- |
| [颜色 Color](/components/style/color/)                     | 文字 / 填充 / 边框 / 背景层级                |
| [常用写法](/components/style/atomic-usage/)          | Flex / 间距 / 尺寸 / 溢出 / 圆角等日常原子类 |
| [海拔 Elevation](/components/style/elevation/)       | `c-elevation--0` … `--24`                    |
| [字体排版 Typography](/components/style/typography/) | PC 排版工具包                                |
| [原子化 CSS](/components/style/atomic-css/)          | Uno / TW 安装与配置                          |
