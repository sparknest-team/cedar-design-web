---
lang: en-US
permalink: /en/components/config-provider/
---

# Config Provider

Provide language, size, direction and shared content to descendants. Configuration is subtree-scoped by default. Maple separates language and styles through LocaleProvider and ThemeProvider, without a ConfigProvider component.

## Basic examples

### Basic usage

- `size`: ComponentSize

<demo src="./__demos__/basic.vue"></demo>

## Shared content

### Empty states and loading indicators

Supported descendants consume empty/loading slots; the provider does not render them itself. The empty inner provider below inherits shared content, with local content or icon slots taking precedence. The empty component scope is a consumer-supplied identifier and need not equal a public component name.

<demo src="./__demos__/content-overrides.en-US.vue"></demo>

Use [ThemeProvider](/en/components/theme-provider/) for themes. ConfigProvider handles locale, size, direction and shared content.

## API

### ConfigProvider Props

| Prop | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| prefix-cls | Inherit the parent when omitted, with c at the root; custom prefixes require matching built styles | `string` | — |
| locale | Complete language pack; inherit the parent when omitted, or the global locale when the entire chain is unspecified | `CedarLang` | — |
| size | Default descendant size; inherit the parent when omitted, with component size taking precedence | `ComponentSize` (`xs` / `sm` / `md` / `lg` / `xl`) | — |
| global | Choose application-level injection during setup; static and intended for an application-lifetime root configuration | `boolean` | `false` |
| update-at-scroll | Inherit the parent when omitted, with false at the root; only supported popup consumers use this preference | `boolean` | — |
| scroll-to-close | Inherit the parent when omitted, with false at the root; does not actively close all popups | `boolean` | — |
| dir | Reading direction; inherits the source scope when omitted. Physical left/right placements keep their meaning. | `ReadingDirection` (`ltr` / `rtl`) | — |

### ConfigProvider Events

No declared events or public business instance methods. Native listeners fall through to the direction-carrying div; this is not a declared click event and listener Promises are not collected.

### ConfigProvider Slots

| Slot | Description | Prop |
| ------- | ---- | ---- |
| default | Subtree content | — |
| empty | Empty content for descendants supporting this configuration | `{ component: string }` |
| loading | Shared indicator consumed by Loading; a local icon takes precedence | — |

Nested providers inherit omitted prefix-cls, locale, size, update-at-scroll and scroll-to-close from the nearest parent; explicit false overrides remain effective. dir inherits through the reading-direction scope. locale remains a complete pack rather than a deep merge of partial packs. Size, language and scroll preferences update reactively. Keep prefix-cls fixed at initialization; changing a prefix requires matching styles and remounting the subtree.

empty/loading inherit independently and support dynamic additions, removals and fallback. The default subtree belongs only to its provider and never inherits parent content. Select, Cascader and TreeSelect read current empty content during rendering and retain complete node arrays; local empty slots win. Only an explicit theme claims document ownership; empty nested providers add no theme owner.

global chooses injection scope only during setup and cannot switch dynamically; other fields remain reactive while mounted. global=true installs application-level configuration without automatic restoration on Provider unmount or retroactive switching of consumers that already injected. Use it for application-lifetime roots; local or conditional content should keep global=false. Multiple global providers have no automatic reclamation priority.

## Types

The component exports the following types

```ts
import type { ConfigProviderProps, ConfigProviderInstance, ConfigProviderSlots } from '@cedar-design/ui'
```

Component subpath entries also export these types and configProviderProps. The internal injection context is not a public configuration method.


## Reading direction

Use `<c-config-provider dir="rtl">` to scope right-to-left layout. Omit `dir` to inherit, or nest `dir="ltr"` for a local override. Native DOM `dir` containers work too. The provider renders a `display: contents` div to carry direction to ordinary descendants without adding a layout box; place it in an HTML context that permits a div. It does not change the document direction. The former boolean `rtl` option is replaced by `dir` before release. Physical left/right placements retain their meaning.
## CSS Variables

<!-- component-css-variables:start -->

This component declares no independent public CSS variables. Use the configuration and layout APIs documented on this page.

Internal custom properties and measurement values are implementation details and are not customization APIs.

<!-- component-css-variables:end -->
