---
lang: en-US
permalink: /en/components/style/atomic-css/
---

# Style Atomic Css

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Starter

<demo src="./__demos__/starter.vue"></demo>

### Overview

Preview configuration: `:columns="columns"`, `:data="data"`, `:pagination="false"`.

<demo src="./__demos__/overview.vue"></demo>

## Colors, typography and spacing

### Colors

<demo src="./__demos__/colors.vue"></demo>

### Font Size

<demo src="./__demos__/font-size.vue"></demo>

### Spacing

<demo src="./__demos__/spacing.vue"></demo>

## Responsive layout and composition

### Breakpoints

Preview configuration: `:columns="columns"`, `:data="rows"`, `:pagination="false"`.

<demo src="./__demos__/breakpoints.vue"></demo>

### Combined

<demo src="./__demos__/combined.vue"></demo>

## UnoCSS

### Installation

```shell
pnpm add -D @cedar-design/preset-unocss-vue unocss
```

### Configuration

```js
// uno.config.ts
import { presetCedar } from '@cedar-design/preset-unocss-vue'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [presetCedar()],
})
```

Optional `presetCedar({ colors, fontSize, breakpoints })`; `false` disables a section.

### Load theme variables first

```js
import '@cedar-design/ui-vue/style'

// Or import a theme stylesheet containing --c-* variables
```

---

## Tailwind CSS

### Installation

```shell
pnpm add -D @cedar-design/preset-tailwindcss-vue tailwindcss
```

### Tailwind v3

```js
// tailwind.config.js
import { presetCedar } from '@cedar-design/preset-tailwindcss-vue'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [presetCedar()],
}
```

### Tailwind v4

```js
// tailwind.config.js
import { presetCedar } from '@cedar-design/preset-tailwindcss-vue'

export default {
  presets: [presetCedar({ tailwindVersion: 4 })],
}
```

```css
/* src/style.css */
@import 'tailwindcss';
@config '../tailwind.config.js';
```

In v4, write `c:p-4`, `c:bg-primary` and `c:sm:p-4`. The preset sets the prefix. Keep the CSS import as shown.

---

See [Common patterns](/en/components/style/atomic-usage/) for all Flex/spacing/sizing/overflow/radius classes. Only utilities mapped to Cedar tokens are listed below.

## Optional configuration

```js
presetCedar({
  colors: true, // or false / partial key overrides
  fontSize: true, // false disables it; custom fontSize maps are accepted
  // Uno:
  breakpoints: true,
  // TW:
  // screens: true,
})
```

### Custom theme mapping

`colors`/`fontSize` may override part of the defaults; omitted keys retain default mappings:

```js
presetCedar({
  colors: {
    primary: 'var(--app-color-brand)',
    danger: 'var(--app-color-error)',
  },
  fontSize: {
    md: '15px',
  },
})
```

`false` disables the corresponding Cedar theme mapping. Generator-native utilities may still exist but are independent of Cedar variables.

---

## Corresponding Maple configuration

Maple's UnoCSS preset includes `presetUno` with an `mp-` prefix:

```js
import { presetMaple } from '@nio-pow/preset-unocss'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [presetMaple()],
})
```

Both Maple UnoCSS/Tailwind presets generate `mp-bg-primary`, `mp-text-primary` and `mp-border mp-border-primary` without unprefixed aliases.

Tailwind `prefix` is global; one Tailwind instance should not load Cedar/Maple presets with different prefixes simultaneously.

---

## Notes

- The preset includes the framework's full atomic classes with `c-` prefixes, e.g. `c-flex`/`c-p-16`.
- Classes must start with `c-`, e.g. `c-bg-primary`; no unprefixed aliases.
- Choose UnoCSS or Tailwind CSS; do not enable both generators in one app.
- Cedar/Maple share theme key names. Even with different UnoCSS utility prefixes, avoid merging both themes in one config or matching colors may overwrite by preset order.
