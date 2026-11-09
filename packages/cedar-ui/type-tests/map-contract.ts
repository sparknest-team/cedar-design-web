import type { MapGeocoderHandler, MapGeocoderResult, MapProps, MapSelectProps } from '@cedar-design/ui'
import type { MapSelectProps as EntryProps } from '@cedar-design/ui/map'

const handler: MapGeocoderHandler = async (longitude, latitude): Promise<MapGeocoderResult> => ({ address: `${longitude},${latitude}` })
const root: MapSelectProps = { modelValue: {}, clearable: true, disabled: false, mapStyle: { height: '300px' }, geocoderHandler: handler, defaultValue: { longitude: 0 } }
const entry: EntryProps = root
const map: MapProps = { modelValue: {}, geocoderHandler: handler }
// @ts-expect-error Coordinates passed to the handler are numbers.
const invalid: MapGeocoderHandler = (longitude: boolean) => ({ address: String(longitude) })
void [entry, map, invalid]
