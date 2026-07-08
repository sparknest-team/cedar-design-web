import type { App } from 'vue'
import type { ArcoOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Map from './map'
import _MapSelect from './map-select'
import { mapProps } from './props'

const Map = Object.assign(_Map, {
  Select: _MapSelect,
  install: (app: App, options?: ArcoOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Map.name, _Map)
    app.component(componentPrefix + _MapSelect.name, _MapSelect)
  },
})

export type MapInstance = InstanceType<typeof _Map>
export type MapSelectInstance = InstanceType<typeof _MapSelect>
export type { MapProps, ModelValueType, PoiKeys } from './props'

export { mapProps }
export { Map }
export { _MapSelect as MapSelect }

export const _MapComponent = Map
export const _MapSelectComponent = _MapSelect

export default Map
