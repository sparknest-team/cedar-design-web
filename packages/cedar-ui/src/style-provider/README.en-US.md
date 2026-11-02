---
lang: en-US
permalink: /en/components/style-provider/
---

# Style Provider

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `tag="section"`, `:style-vars="active ? { '--c-demo-color': 'teal' } : null"`, `:style-vars="{ '--c-demo-color': 'coral' }"`.

<demo src="./__demos__/basic.vue"></demo>

## Global calls

```ts
import { StyleProvider, Themes } from '@cedar-design/ui'

StyleProvider.setStyleVars(Themes.default.dark)
StyleProvider.setStyleVars(Themes.maple.light)
StyleProvider.setStyleVars(null)
```

Each call replaces previous injected values rather than merging cumulatively. Values already equal to base styles are not written again.
`dark` sets `html[cedar-theme="dark"]`; `light` removes it. Without color-scheme, existing theme attributes remain. `null` removes this library's injection/theme attributes without affecting the other library. SSR calls have no side effects.

Variables accept full CSS names or camelCase such as `cColorScheme`. Library prefixes are not added automatically. Prefer full `--c-*` names.

## Installation and defaults

```ts
import { StyleProvider } from '@cedar-design/ui'

app.use(StyleProvider)

StyleProvider.setPropsDefaults({
  tag: 'section',
  styleVars: () => ({ '--c-demo-color': 'teal' }),
})
```

Set defaults during initialization before mounting; mounted instances are not retroactively updated. Explicit props take precedence. Object defaults are copied per instance; factories/`null` are supported. Defaults are local to each library, not shared.
Installation always registers `CStyleProvider` without modifying app global config. For aliases, use `app.component('MyStyleProvider', StyleProvider)`.

## API

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `style-vars` | Local CSS variables; null clears local overrides | `Record<string, string> \| null` | `{}` |
| `tag` | Wrapper tag | `string` | `div` |

The default slot supplies component content. No events.

## Type definitions

Exports `StyleVars`, `StyleProviderProps`, `StyleProviderDefaults` and `StyleProviderInstance`. `StyleProvider` is the only public component entry; `styleProviderProps` and resolver-facing `_StyleProviderComponent` are also exported.

No component-specific theme tokens. Variable values are strings; numeric dimensions should be unit-bearing strings.
