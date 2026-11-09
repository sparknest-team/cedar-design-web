---
permalink: /en/themes/
---

# Theme presets

Use ThemeProvider at application roots and in subtrees. theme selects light/dark and style-vars accepts brand presets or custom overrides. Providers do not mutate html.

## Built-in presets

| Brand | Light | Dark |
| --- | --- | --- |
| Default teal | Themes.default.light | Themes.default.dark |
| Maple | Themes.maple.light | Themes.maple.dark |

## Basic examples

### Switching presets

<demo src="./__demos__/toggle.vue"></demo>

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Themes } from '@cedar-design/ui'
const mode = ref<'light' | 'dark'>('dark')
</script>
<template>
  <c-theme-provider :theme="Themes.maple[mode]">
    <App />
  </c-theme-provider>
</template>
```

Omit style-vars to use the default palette and theme to inherit the outer mode. Explicit variable overrides take precedence over mode defaults. See [ThemeProvider](/en/components/theme-provider/) for local and nested themes, popups, SSR and variable rules.

## CSS Variables

| Variable | Description |
| --- | --- |
| `--c-primary-1` … `--c-primary-10` | Primary palette (mapped to brand) |
| `--c-brand-1` … `--c-brand-10` | Brand palette |
| `--c-success-*` / `--c-danger-*` / `--c-warning-*` / `--c-link-*` | Semantic palettes |
| `--c-gray-1` … `--c-gray-10` | Neutral palette |
| `--c-color-text-1` … `--c-color-text-4` | Text semantics (`c-text-1` … `c-text-4`) |
| `--c-color-bg-1` … `--c-color-bg-5` | Background semantics |
| `--c-color-fill-1` … `--c-color-fill-4` | Fill semantics |
| `--c-color-border-1` … `--c-color-border-4` | Border semantics |
| `--c-color-scheme` / `--c-color-body` / `--c-color-text` | Theme switching / body |

See [Palette](/en/components/palette/) for the complete palettes and [Color](/en/components/style/color/) for semantic utility classes.

<!-- component-css-variables:start -->

This component declares no independent public CSS variables. Use the configuration and layout APIs documented on this page.

Internal custom properties and measurement values are implementation details and are not customization APIs.

<!-- component-css-variables:end -->
