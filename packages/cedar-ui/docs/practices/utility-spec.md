---
permalink: /practices/utility-spec/
---

# Utility 工具类规范（Cedar / Maple 共用）

两端 **语义与结构一致**，类名与变量均带库前缀，避免混用撞名：

| | Cedar | Maple |
|---|---|---|
| 类名前缀 | `c-`（如 `c-text-1`、`c-mt-16`） | `mp-`（如 `mp-text-1`、`mp-mt-16`） |
| CSS 变量 | `--c-*` | `--mp-*` |

**不做无前缀别名，不做向后兼容。**

## 交付方式

| | Cedar | Maple |
|---|---|---|
| 原子化 CSS preset | `@cedar-design/preset-unocss` / `@cedar-design/preset-tailwindcss` | `@maple-design/preset-unocss` / `@maple-design/preset-tailwindcss` |
| 暗色 | 只改 token，类名不变 | 同左 |

## 标准集合

下列以 Cedar（`c-`）举例；Maple 将前缀换成 `mp-` 即可。

### Color（语义）

| 类名 | 作用 |
|---|---|
| `c-text-1` … `c-text-4` | 文字层级 |
| `c-fill-1` … `c-fill-4` | 填充 |
| `c-color-border-1` … `c-color-border-4` | 边框色（与变量同名，避免和原子化 `c-border-*` 宽度类撞名） |
| `c-bg-0` / `c-bg-1` / `c-bg-2` | 背景层级 |

底层：`rgb(var(--{p}-primary-6))`、`var(--{p}-color-text-1)` 等。完整色阶原子不进默认工具包，见 Palette。

### Spacing / Size

间距与宽高仅由 Uno / Tailwind preset 按具体数值生成，不再提供语义档固定类。
`c-mt-16`（16px）、`c-h-10`（10px）、`c-w-full`（100%）；Maple 将前缀换成 `mp-`。
日常分类见 [常用写法](/components/style/atomic-usage/)。

### 布局 / 圆角 / 阴影 / 海拔

- Flex / Display / Position：`c-flex`、`c-justify-*`、`c-relative` 等  
- Overflow：`c-overflow-hidden`、`c-truncate`、`c-line-clamp-2` 等，由原子化 preset 生成  
- Radius：`c-rounded-*`（含 `xl`）→ `--{p}-rounded-*`  
- Elevation：`c-elevation--0` … `--24`（Maple：`mp-elevation--*`，独立 CSS）

## 平台差异（侧栏目录一致）

| 项 | Cedar | Maple |
|---|---|---|
| Typography 工具包 | 有（PC） | 无；用 token / 原子化 |
| 原子化 CSS preset | `@cedar-design/preset-unocss` / `@cedar-design/preset-tailwindcss` | `@maple-design/preset-unocss` / `@maple-design/preset-tailwindcss` |

## 禁止

- 无前缀工具类（`text-1`、`mt-4`、`flex`）与无前缀变量（`--brand-6`）  
- 固定 Utilities 内重复实现间距原子  
- 默认包内完整色板原子类  
- Maple 再复制进全量组件 CSS（utilities 保持独立入口）
