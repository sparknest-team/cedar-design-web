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

<demo src="./__demos__/google.vue"></demo>

<demo src="./__demos__/use-vmodel.vue"></demo>

## API

### Map Props

| Prop | Description | Type | Default |
| ----------------------- | -------------------------------------------- | -------------------------------------------- | ---------------- |
| model-value(**v-model**) | Initial map value representing the selected location | `Object` | - |
| default-value | Default map center | `{ [key in valueKeyAlias[keys]]: any }` | - |
| driver | Return value of `Fetch.genDriiver` | `Driver` | `-` |
| fetch | Return value of `Fetch.genFetch` | `CoreService` | `-` |
| geocoder-url | Geocoder endpoint URL | `string` | `-` |
| geocoder-handler | Processes geocoding-service responses | `(longitude: number, latitude: number)=>{})` | - |
| base-path | Base URL for map data | `String` | `'/pe/powerpro'` |
| is-international | Whether this is a Google map | `Boolean` | - |
| show-name | Whether to show the floating location name | `boolean` | `false` |
| show-locate-me-button | Whether to show the current-location button | `boolean` | `false` |
| show-edit-address-button | Whether to show the floating change-location button | `boolean` | `false` |
| show-map-tips | Whether to show tips above the map | `boolean` | `false` |
| map-type | Map type | `'qqmaps'\|'bmapGL'\|'amaps'` | `'amaps'` |
| enable-gis-search | Whether to enable GIS search; `fetch` is required when enabled | `boolean` | `false` |
| value-key-scope | String array of values displayed on the map | `Array` | `valueKeyScope` |
| value-key-alias | Mapping from map keys to values | `Object` | `valueKeyAlias` |

### MapSelect Props

| map-style | Styles applied directly to the map; can set map height | `object` | `{ height: '300px'}` |

### Map Events

| Event | Description | Arguments |
| --------------- | -------------------------- | ------------------------- |
| change | Emitted when the address changes | `(value: ModelValueType)` |
| init | Emitted after map initialization | `(value: ModelValueType)` |
| loading:address | Emitted while resolving the selected location's address | `-` |
| loaded:address | Emitted after resolving the selected location's address | `-` |

## Type definitions

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
