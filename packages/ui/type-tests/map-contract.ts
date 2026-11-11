import type { MapGeocoderHandler, MapGeocoderResult, MapProps, MapSelectProps, MapSdk } from '@cedar-design/ui-vue'
import type { MapSdk as EntrySdk, MapSdkSearchCompletion, MapSelectProps as EntryProps } from '@cedar-design/ui-vue/map'

const handler: MapGeocoderHandler = async (longitude, latitude): Promise<MapGeocoderResult> => ({ address: `${longitude},${latitude}` })
const root: MapSelectProps = { modelValue: {}, clearable: true, disabled: false, mapStyle: { height: '300px' }, geocoderHandler: handler, defaultValue: { longitude: 0 } }
const entry: EntryProps = root
const map: MapProps = { modelValue: {}, geocoderHandler: handler }
declare const sdk: MapSdk
const entrySdk: EntrySdk = sdk
const withSdk: MapProps = { modelValue: {}, sdk }
const selectWithSdk: MapSelectProps = { modelValue: {}, sdk: entrySdk }
const searchComplete: MapSdkSearchCompletion = (results) => { void results.list }
// @ts-expect-error Search results must contain a list of objects.
searchComplete({ list: [1] }, 'success')
// @ts-expect-error An adapter must provide the SDK constructors and initializer.
const incompleteSdk: MapSdk = { MapService: { init: () => {} } }
// @ts-expect-error Coordinates passed to the handler are numbers.
const invalid: MapGeocoderHandler = (longitude: boolean) => ({ address: String(longitude) })
void [entry, map, invalid, withSdk, selectWithSdk, incompleteSdk, searchComplete]

const mapError: import('@cedar-design/ui-vue').MapEmits['error'] = [new Error('location')]
const selectError: import('@cedar-design/ui-vue/map').MapSelectEmits['error'] = [new Error('location')]
// @ts-expect-error error carries the original error value
const invalidError: import('@cedar-design/ui-vue').MapEmits['error'] = []
void [mapError, selectError, invalidError]
