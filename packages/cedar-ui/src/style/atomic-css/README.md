---
permalink: /components/style/atomic-css/
---

## 原子化 CSS

Cedar 提供两套能力：

| 能力             | 包 / 入口                                                | 何时用                           |
| ---------------- | -------------------------------------------------------- | -------------------------------- |
| 固定工具类 `c-*` | `@cedarjs/ui` 的 `style/utilities/index.less`            | 不接 Uno/TW 时使用               |
| Uno / TW preset  | `@cedarjs/preset-unocss` / `@cedarjs/preset-tailwindcss` | 使用带 `c-` 前缀的完整原子化体系 |

Preset **不是组件**，是构建期配置：装好后即可写 `c-flex`、`c-p-16`、`c-bg-primary`、`c-text-md` 等。主题切换（暗色 / StyleProvider）只改 CSS 变量，类名不变。日常分类速查见 [常用写法](/components/style/atomic-usage/)。

Maple 也提供 UnoCSS / Tailwind CSS preset。`mp-` 是否生效取决于生成器配置，详见下方“Maple 对应配置”。

> 下方 Demo 用与 Preset 等价的 CSS（`var(--c-*)`）做视觉预览；真实项目中这些类由 Uno / Tailwind 生成。

### 新手示例

UnoCSS 和 Tailwind **二选一配置**，但组件里的类名完全相同。可以先复制下面这张卡片，再逐个调整类名观察效果：

```vue
<template>
  <div
    class="c-flex c-max-w-md c-flex-col c-gap-12 c-rounded-lg c-border c-border-solid c-border-gray-200 c-bg-body c-p-16"
  >
    <h3 class="c-m-0 c-text-lg c-text-primary">第一张原子化卡片</h3>
    <p class="c-m-0 c-text-sm">组合小类完成布局，不需要另外写组件样式。</p>

    <div
      class="c-flex c-items-center c-justify-between c-gap-8 c-rounded-md c-bg-gray-100 c-p-12"
    >
      <code>c-flex c-items-center c-gap-8</code>
      <span class="c-text-success">Success</span>
    </div>

    <button
      class="c-rounded-md c-border-0 c-bg-primary c-px-16 c-py-8 c-text-white hover:c-opacity-80"
    >
      保存
    </button>
  </div>
</template>
```

读法很简单：`c-` 是 Cedar 前缀；`flex` 是布局；`p/px/py/gap` 是间距；`bg/text/border` 是颜色；`rounded` 是圆角；`hover:` 是交互状态。

<demo src="./__demos__/starter.vue"></demo>

### 与固定工具类的分工

<demo src="./__demos__/overview.vue"></demo>

---

## UnoCSS

### 安装

```shell
pnpm add -D @cedarjs/preset-unocss unocss
```

### 配置

```js
// uno.config.ts
import { defineConfig } from "unocss";
import { presetCedar } from "@cedarjs/preset-unocss";

export default defineConfig({
  presets: [presetCedar()],
});
```

可选参数：`presetCedar({ colors, fontSize, breakpoints })`，设为 `false` 可关闭某一块。

### 需已加载主题变量

```js
import "@cedarjs/ui/dist/index.css";
// 或自行引入含 --c-* 的主题样式
```

---

## Tailwind CSS

### 安装

```shell
pnpm add -D @cedarjs/preset-tailwindcss tailwindcss
```

### Tailwind v3

```js
// tailwind.config.js
import { presetCedar } from "@cedarjs/preset-tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  presets: [presetCedar()],
};
```

### Tailwind v4

```js
// tailwind.config.js
import { presetCedar } from "@cedarjs/preset-tailwindcss";

export default {
  presets: [presetCedar()],
};
```

```css
/* src/style.css */
@import "tailwindcss";
@config '../tailwind.config.js';
```

---

## 用法一览（与主题绑定的类）

完整分类（Flex / 间距 / 尺寸 / 溢出 / 圆角等）见 [常用写法](/components/style/atomic-usage/)。下面只列 preset 挂到 Cedar token 上的那几项。

### 颜色 Color

主题色 key 使用无前缀语义名，最终生成的 utility 统一带 `c-` 前缀。

| Theme key  | CSS 变量             | 背景            | 文字              | 边框颜色           |
| ---------- | -------------------- | --------------- | ----------------- | ------------------ |
| `body`     | `--c-color-body`     | `c-bg-body`     | —                 | —                  |
| `primary`  | `--c-color-primary`  | `c-bg-primary`  | `c-text-primary`  | `c-border-primary` |
| `info`     | `--c-color-info`     | `c-bg-info`     | `c-text-info`     | `c-border-info`    |
| `success`  | `--c-color-success`  | `c-bg-success`  | `c-text-success`  | `c-border-success` |
| `warning`  | `--c-color-warning`  | `c-bg-warning`  | `c-text-warning`  | `c-border-warning` |
| `danger`   | `--c-color-danger`   | `c-bg-danger`   | `c-text-danger`   | `c-border-danger`  |
| `disabled` | `--c-color-disabled` | `c-bg-disabled` | `c-text-disabled` | —                  |

颜色类只设置对应的颜色属性。比如 `c-border-primary` 只设置 `border-color`，需要和边框宽度类一起使用：

```html
<div class="c-border c-border-primary">primary border</div>
<div class="c-border-2 c-border-danger">danger border</div>
```

常见组合方式：

```html
<!-- 静态颜色 -->
<div class="c-bg-body c-text-primary">primary</div>

<!-- 状态变体 -->
<button class="c-border c-border-primary hover:c-bg-primary">hover</button>

<!-- 响应式变体；断点本身不加 c- 前缀 -->
<div class="c-bg-primary sm:c-bg-info md:c-bg-warning">responsive</div>
```

UnoCSS / Tailwind 只扫描源码中完整出现的类名。不要用 `c-bg-${status}` 动态拼接；必须动态选择时，使用完整类名映射或生成器的 safelist。

<demo src="./__demos__/colors.vue"></demo>

### 字号 Font size

| 档位 | CSS 变量           | Uno / Tailwind 类名 |
| ---- | ------------------ | ------------------- |
| xs   | `--c-font-size-xs` | `c-text-xs`         |
| sm   | `--c-font-size-sm` | `c-text-sm`         |
| md   | `--c-font-size-md` | `c-text-md`         |
| lg   | `--c-font-size-lg` | `c-text-lg`         |

> 两套引擎使用同一套类名。不要与固定工具类语义色 `c-text-1…4` 混淆。

<demo src="./__demos__/font-size.vue"></demo>

### 间距 Spacing

间距与宽高数值直接对应像素：`1 = 1px`。例如 `c-p-8` 为 8px、`c-mt-16` 为 16px、`c-h-10` 为 10px；
百分比用 `c-w-full` / `c-h-full` 或 `c-w-1/2`。方向写法与 Uno / Tailwind 一致。

| 类型           | 示例                                              |
| -------------- | ------------------------------------------------- |
| margin         | `c-m-16` `c-mt-16` `c-mx-8` `c-my-24`             |
| padding        | `c-p-16` `c-pt-16` `c-px-8` `c-py-24`             |
| gap            | `c-gap-8` `c-gap-x-16` `c-gap-y-24`               |
| auto           | `c-m-auto` `c-ml-auto`                            |
| width / height | `c-w-10` `c-h-10` `c-w-full` `c-h-auto` `c-w-1/2` |

<demo src="./__demos__/spacing.vue"></demo>

### 断点 Breakpoints / Screens

两边数值一致（框架惯例，**不加** `c-` 前缀）：

| 断点 | 宽度   |
| ---- | ------ |
| `sm` | 768px  |
| `md` | 992px  |
| `lg` | 1200px |
| `xl` | 1920px |

写法示例：`sm:c-bg-info` `md:c-bg-warning` `lg:c-bg-danger` `xl:c-bg-success`

<demo src="./__demos__/breakpoints.vue"></demo>

### 组合示例

```html
<template>
  <div class="c-bg-body c-text-md">
    <span class="c-text-primary">primary</span>
    <div class="c-bg-primary c-text-lg sm:c-bg-info md:c-bg-warning">
      responsive
    </div>
  </div>
</template>
```

<demo src="./__demos__/combined.vue"></demo>

---

## 可选配置

```js
presetCedar({
  colors: true, // 或 false / 覆盖部分 key
  fontSize: true, // 设为 false 可关闭，也可传自定义 fontSize map
  // Uno:
  breakpoints: true,
  // TW:
  // screens: true,
});
```

### 自定义主题映射

`colors` 和 `fontSize` 可覆盖部分默认值，未传入的 key 保持默认映射：

```js
presetCedar({
  colors: {
    primary: "var(--app-color-brand)",
    danger: "var(--app-color-error)",
  },
  fontSize: {
    md: "15px",
  },
});
```

设为 `false` 会关闭 Cedar 对应的主题映射。生成器自身的默认 utility 仍可能存在，但不再绑定 Cedar CSS 变量。

---

## Maple 对应配置

Maple 的 UnoCSS preset 已内置带 `mp-` 前缀的 `presetUno`：

```js
import { defineConfig } from "unocss";
import { presetMaple } from "@nio-pow/maple-preset-unocss";

export default defineConfig({
  presets: [presetMaple()],
});
```

UnoCSS 和 Tailwind CSS 两套 Maple preset 均生成 `mp-bg-primary`、`mp-text-primary`、`mp-border mp-border-primary` 等类，不提供无前缀别名。

Tailwind 的 `prefix` 是全局配置，同一个 Tailwind 实例不适合同时加载使用不同前缀的 Cedar 与 Maple preset。

---

## 注意

- Preset 包含框架提供的完整原子类，全部使用 `c-` 前缀，如 `c-flex`、`c-p-16`。
- 类名必须以 `c-` 开头（如 `c-bg-primary`），不提供无前缀别名。
- UnoCSS 与 Tailwind CSS 二选一，不要在同一应用中同时启用两套生成器。
- Cedar 与 Maple 使用了同名 theme key。即使 UnoCSS 可配置不同 utility 前缀，也应避免在同一个配置中直接合并两套 theme；否则同名颜色可能按 preset 顺序相互覆盖。
