---
permalink: /en/themes/
---

# Theme Customization

Use ThemeProvider at application roots and in subtrees. theme accepts light/dark or a brand preset; style-vars accepts custom overrides. Providers do not mutate html.

One theme boundary for the entire application or a subtree. A provider around the application is its global theme; nesting creates local overrides with the same rules. Providers never mutate html or other application roots.

## Built-in presets

| Brand | Light | Dark |
| --- | --- | --- |
| Default teal | Themes.default.light | Themes.default.dark |
| Maple | Themes.maple.light | Themes.maple.dark |

## Basic examples

### Switching presets

<demo src="./__demos__/toggle.vue"></demo>

### Variable overrides

<demo src="../theme-provider/__demos__/basic.vue"></demo>

## Local themes

### Application roots and nesting

<demo src="../theme-provider/__demos__/local-theme.vue"></demo>

```vue
<c-theme-provider :theme="mode">
  <App />
  <c-theme-provider theme="light"><Preview /></c-theme-provider>
</c-theme-provider>
```

Omit theme to inherit. Use light/dark or a Themes preset object for an explicit boundary. Explicit themes replace inherited presets while style-vars overrides continue to inherit. style-vars overrides defaults, inner keys win, and null clears this layer. Explicit boundaries re-evaluate loaded component aliases. tag changes the wrapper; use a suitable layout host or display: contents where necessary.

Library declarative popups inherit their owning Vue provider with body, custom popup-container and inline targets. Services created outside a provider need a popup-container inside the themed region. Third-party Teleports need an explicit theme host; foreign documents must load the library styles.

## Theme presets

```vue
<script setup lang="ts">
import { Themes } from '@cedar-design/ui'
</script>

<c-theme-provider :theme="Themes.maple.dark">
  <App />
</c-theme-provider>
```

Import Themes from the library root. Update presets and custom variables through reactive props; no static method mutates the document root. Explicit style-vars take precedence over theme defaults, and fixed color overrides are inherited by descendants.

## Installation and defaults

```ts
import { ThemeProvider } from '@cedar-design/ui'
app.use(ThemeProvider)
ThemeProvider.setPropsDefaults({ theme: 'light', tag: 'section', styleVars: () => ({}) })
```

Defaults apply to subsequently created instances; explicit props take precedence. Variable objects are copied for each instance. SSR renders the same theme boundary as the client, without retaining theme state across requests.

## API

### ThemeProvider Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| theme | Light/dark mode or preset; inherit when omitted | `ThemeProviderTheme` | — |
| style-vars | CSS variables for this boundary; null clears the overrides | `StyleVars \| null` | `{}` |
| tag | Wrapper element tag | `string` | `'div'` |

The default slot supplies component content. No events.

## Types

Exports ThemeProvider, themeProviderProps, ThemeProviderProps, ThemeProviderInstance, ThemeProviderDefaults, ThemeProviderTheme, ThemeProviderMode, StyleVarName and StyleVars. Variables accept full --c- names or camelCase names with the library prefix; values are CSS strings and dimensions require units.

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
