---
lang: en-US
permalink: /en/components/map/
---

# Map

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `map-type="amaps"`.

<demo src="./__demos__/basic.vue"></demo>

## Content and presentation

### Auth

The original `map-core` runtime dependency is not included. Applications can provide an explicit `MapSdk` adapter through `sdk`, containing `Map`, `LngLat`, `MapService`, and `SearchService`; a fallback is shown when no valid implementation is available. Legacy global integration remains supported, but the explicit adapter takes precedence and does not require replacing the native browser `Map`. The adapter must handle initialization, authorization, and resource disposal for its map service.

`MapSdk`, `MapSdkMapOptions`, `MapSdkSearchOptions`, `MapSdkSearchCompletion`, `MapSdkMap`, `MapSdkLngLat`, and `MapSdkSearchService` are exported from both the root and `map` entry. An explicit adapter must call the supplied completion callback for that specific `search(query, complete)` request; stale and duplicate callbacks are ignored. `MapSdkSearchOptions.complete` exists for legacy global SDK compatibility and cannot submit results for explicit adapters. Map and search services may provide `off` and `destroy` for cleanup; the application owns vendor adaptation and authorization.

<demo src="./__demos__/auth.vue"></demo>

## Data and options

### Google

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `map-type` | Map type | Google |
| `is-international` | Whether this is a Google map | Google |
<!-- demo-config-notes:end -->


Preview configuration: `map-type="google"`, `is-international`, `map-type="amaps"`.

When `is-international` is enabled, the effective map type is `google`; otherwise it is `map-type`. SDK initialization and the default reverse geocoder use the same effective type; an explicit `geocoder-url` takes precedence.

<demo src="./__demos__/google.vue"></demo>

<demo src="./__demos__/use-vmodel.vue"></demo>

## API

### Map Props

GIS search uses the current `enable-gis-search`, `base-path`, and `fetch` on the next input. Changing these settings or `is-international` clears old results and ignores earlier GIS search responses.

When the SDK is available, changing `sdk`, `map-type`, `is-international`, `base-path`, `driver`, `fetch`, `geocoder-url`, or `geocoder-handler` retires the old instance and initializes a new one. Objects and functions are compared by reference. Changes in the same update are coalesced, and stale results cannot update the new instance. Actual resource disposal depends on the SDK adapter.

| Prop | Description | Type | Default |
| ----------------------- | -------------------------------------------- | -------------------------------------------- | ---------------- |
| model-value(**v-model**) | Controlled location model; the input object is not mutated | `Object` | - |
| default-value | Default map center | `{ [key in valueKeyAlias[keys]]: any }` | - |
| sdk | Explicit map SDK adapter; replacement or removal reinitializes the map | `MapSdk` | `-` |
| driver | SDK driver object | `object` | `-` |
| fetch | Service with get/post methods | `MapFetch` | `-` |
| geocoder-url | Geocoder endpoint URL | `string` | `-` |
| geocoder-handler | Processes geocoding-service responses | `MapGeocoderHandler` | - |
| base-path | Base URL for map data | `String` | `'/pe/powerpro'` |
| is-international | Whether this is a Google map | `Boolean` | - |
| popup-container | MapSelect dialog mount target; unused by Map itself | `PopupContainer` | Library default |
| show-name | Whether to show the floating location name | `boolean` | `false` |
| show-locate-me-button | Whether to show the current-location button | `boolean` | `false` |
| show-edit-address-button | Whether to show the floating change-location button | `boolean` | `false` |
| show-map-tips | Whether to show tips above the map | `boolean` | `true` |
| map-type | Map type | `'qqmaps'\|'google'\|'amaps'` | `'qqmaps'` |
| enable-gis-search | Whether to enable GIS search; `fetch` is required when enabled | `boolean` | `false` |
| value-key-scope | String array of values displayed on the map | `Array` | `valueKeyScope` |
| value-key-alias | Mapping from map keys to values | `Object` | `valueKeyAlias` |

Programmatic map moves share an update guard, so an older cooldown cannot end a newer move. When locations are selected in succession, an older place-detail or lookup result cannot overwrite the later selection. For successive map moves, only the latest reverse-geocoding result can commit; a parent location change or unmount invalidates older requests. Unmounting during initialization prevents later map creation or processing of the initial geocoding result. Model updates during initialization do not create duplicate maps; the center synchronizes to the latest model when initialization completes.

### MapSelect Props

Includes Map Props, plus:

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | Disable opening and clearing | `boolean` | `false` |
| clearable | Show the clear button | `boolean` | `false` |
| map-style | Styles applied directly to the map; can set map height | `object` | `{ height: '300px'}` |

SDK initialization failures report the original error and show a retry button. Deactivation during initialization retires the old instance and restarts initialization after activation. The application must still provide a usable map SDK runtime.

### Map Events

| Event | Description | Arguments |
| --------------- | -------------------------- | ------------------------- |
| error | SDK initialization, search, place selection, geolocation, or reverse geocoding after a map move failed | Original cause `unknown` |
| change | Position change notification | `(scopedValue, fullValue)` |
| init | Emitted after map initialization | `(initialValue, completedValue)` |
| loading:address | Emitted while resolving the selected location's address | `-` |
| loaded:address | Emitted when address resolution settles, including failure or cancellation; failures also emit error | `-` |
| update:modelValue | Proposes a new location model | New model object |

### MapSelect Events

| Event | Description | Arguments |
| --- | --- | --- |
| `error` | Current reverse geocoding, map SDK initialization, search, place selection, geolocation, or move geocoding failed | Original cause `unknown` |
| `clear` | Clear was requested | None |
| `change` | Position change proposed | `(scopedValue, fullValue)` |
| `init` | Map initialization forwarded | `(initialValue, completedValue)` |
| `update:modelValue` | Proposed model preserving other existing fields | New model object |

The parent owns `model-value`. Selection and geocoding propose a new object via `update:modelValue`; the display follows the accepted value. Results from obsolete requests or after deactivation or unmount do not commit.


`geocoder-handler` receives numeric longitude and latitude and can synchronously or asynchronously return an object containing `address`, `poi`, `area_code`, `country_code`, `city`, and `country`; it takes precedence over `fetch`. Otherwise reverse geocoding uses `geocoder-url`, or derives a default from `map-type` and `base-path`; `fetch.get` must return a response with `isValid()` and `data`. MapSelect fallback uses updated aliases and service configuration for subsequent requests; zero is a valid coordinate. Runtime SDK service reconfiguration requires verification when the SDK is restored. The root and `map` entry export `MapProps`, `MapSelectProps`, `MapFetch`, `MapGeocoderHandler`, `MapGeocoderResult`, and component instance types. The map SDK is not included in the current build; map interaction is unavailable when it is not configured.

## Types

`MapEmits` and `MapSelectEmits` are available from the root and `map` entry.


### valueKeyAlias

```ts
{
  longitude: 'longitude',
  latitude: 'latitude',
  address: 'address',
  name: 'name',
  adcode: 'adcode',
  city: 'city',
  countryCode: 'countryCode',
  country: 'country',
}
```

### valueKeyScope

```ts
;['longitude', 'latitude', 'address', 'name', 'adcode', 'city', 'country', 'countryCode']
```

### ModelValueType

ModelValueType keys depend on valueKeyAlias

```ts
interface ModelValueType {
  adcode?: string
  city?: string
  country?: string
  countryCode?: string
  address?: string
  latitude?: number
  longitude?: number
  name?: string
}
```

The component exports the following types

```ts
import type { MapProps } from '@cedar-design/ui'
```

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-map-locate-me-bg` | `var(--c-color-bg-white)` | `background` |
| `--c-map-locate-me-bottom` | `var(--c-spacing-10)` | `bottom` |
| `--c-map-locate-me-icon-size` | `18px` | `height`, `width` |
| `--c-map-locate-me-left` | `var(--c-spacing-6)` | `left` |
| `--c-map-locate-me-shadow-blur` | `var(--c-spacing-2)` | `box-shadow` |
| `--c-map-locate-me-shadow-color` | `rgb(var(--c-gray-10))` | `box-shadow` |
| `--c-map-locate-me-size` | `var(--c-size-6)` | `height`, `width` |
| `--c-map-poi-address-color` | `var(--c-color-text-3)` | `color`, `stroke` |
| `--c-map-poi-address-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-map-poi-bg` | `rgb(var(--c-gray-10))` | `background-color` |
| `--c-map-poi-border-radius` | `var(--c-size-25)` | `border-radius` |
| `--c-map-poi-edit-margin-left` | `var(--c-spacing-2)` | `margin-inline-start` |
| `--c-map-poi-name-color` | `var(--c-color-white)` | `color` |
| `--c-map-poi-name-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-map-poi-padding-x` | `var(--c-spacing-9)` | `padding` |
| `--c-map-poi-padding-y` | `var(--c-spacing-5)` | `padding` |
| `--c-map-poi-translate-y` | `-7px` | `transform` |
| `--c-map-position-current-right` | `var(--c-size-10)` | `right` |
| `--c-map-position-current-size` | `var(--c-size-6)` | `height`, `width` |
| `--c-map-position-current-top` | `var(--c-size-25)` | `top` |
| `--c-map-position-dot-margin-left` | `calc(-1 * var(--c-spacing-6))` | `margin-left` |
| `--c-map-position-dot-margin-top` | `calc(-1 * var(--c-size-6))` | `margin-top` |
| `--c-map-position-dot-size` | `var(--c-size-6)` | `height`, `width` |
| `--c-map-search-box-padding-x` | `var(--c-spacing-6)` | `padding` |
| `--c-map-search-box-padding-y` | `7px` | `padding` |
| `--c-map-search-empty-padding` | `var(--c-spacing-8)` | `padding` |
| `--c-map-search-item-address-color` | `var(--c-color-text-3)` | `color` |
| `--c-map-search-item-name-color` | `var(--c-color-text-1)` | `color` |
| `--c-map-search-item-padding-x` | `var(--c-spacing-6)` | `padding` |
| `--c-map-search-item-padding-y` | `var(--c-spacing-4)` | `padding` |
| `--c-map-search-item-selected-bg` | `var(--c-color-fill-1)` | `background-color` |
| `--c-map-search-margin` | `var(--c-spacing-9)` | `margin` |
| `--c-map-search-width` | `230px` | `width` |
| `--c-map-tips-color` | `var(--c-color-text-3)` | `color` |
| `--c-map-tips-padding-y` | `var(--c-spacing-5)` | `padding` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-map-locate-me-icon-size: 18px;
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
