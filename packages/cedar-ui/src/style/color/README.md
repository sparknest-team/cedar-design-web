---
permalink: /components/style/color/
---

# 颜色 Color

语义色工具类带库前缀：Cedar `c-*`，Maple `mp-*`（变量 `--c-*` / `--mp-*`）。
完整色阶与语义变量见 [色板 Palette](/components/palette/)。

- 业务页用类名（`c-text-1`）；主题覆盖 / 组件 token 用变量（`--c-color-text-1`）
- 点击 Class 可快捷复制
- 不做无前缀别名、不做向后兼容

### 类名规则

| 类名                                    | 变量                                                                      |
| --------------------------------------- | ------------------------------------------------------------------------- |
| `c-text-1` … `c-text-4`                 | `var(--c-color-text-1)` … `var(--c-color-text-4)`                         |
| `c-fill-1` … `c-fill-4`                 | `var(--c-color-fill-1)` … `var(--c-color-fill-4)`                         |
| `c-color-border-1` … `c-color-border-4` | `var(--c-color-border-1)` … `var(--c-color-border-4)`                     |
| `c-bg-0` / `c-bg-1` / `c-bg-2`          | `var(--c-color-bg-white)` / `var(--c-color-bg-1)` / `var(--c-color-bg-2)` |

### 边框颜色 Border

<demo src="./__demos__/border.vue"></demo>

### 填充颜色 Fill

<demo src="./__demos__/fill.vue"></demo>

### 文字颜色 Text

<demo src="./__demos__/text.vue"></demo>

### 背景颜色 Background

<demo src="./__demos__/background.vue"></demo>
