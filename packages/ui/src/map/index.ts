import { withInstall } from '../_utils/global-config'
import _Map from './map'
import _MapSelect from './map-select'
import { mapProps, mapSelectProps } from './props'

const Map: import('../_utils/global-config').ComponentWithInstall<typeof _Map & { Select: typeof _MapSelect }> = withInstall(_Map, Object.assign(_Map, {
  Select: _MapSelect,
}), { components: [_Map, _MapSelect] })

export type MapInstance = InstanceType<typeof _Map>
export type MapSelectInstance = InstanceType<typeof _MapSelect>
export type { MapProps, MapSelectProps, MapFetch, MapGeocoderHandler, MapGeocoderResult, ModelValueType, PoiKeys } from './props'
export type { MapEmits, MapSelectEmits } from './emits'
export type { MapSdk, MapSdkLngLat, MapSdkMap, MapSdkMapOptions, MapSdkSearchCompletion, MapSdkSearchOptions, MapSdkSearchService } from './sdk'

export { mapProps, mapSelectProps }
export { Map }
export { _MapSelect as MapSelect }

export const _MapComponent: typeof Map = Map
export const _MapSelectComponent: typeof _MapSelect = _MapSelect

export default Map
