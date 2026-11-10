import type { MapFetch, MapGeocoderHandler } from './props'

/** Minimal runtime contract implemented by an application's map SDK adapter. */
export interface MapSdkLngLat {
  getLng(): number
  getLat(): number
}

export interface MapSdkMap {
  setCenter(coordinates: MapSdkLngLat): void
  getCenter(): MapSdkLngLat
  on(event: string, handler: (...args: any[]) => void, ...args: any[]): void
  off?(event: string, handler: (...args: any[]) => void, ...args: any[]): void
  destroy?(): void
}

export interface MapSdkSearchService {
  geocoder(longitude: number, latitude: number): Record<string, any> | Promise<Record<string, any>>
  search(query: string, complete: MapSdkSearchCompletion): void | Promise<void>
  destroy?(): void
}

export type MapSdkSearchCompletion = (results: { list: Record<string, any>[] }, status: unknown) => void

export interface MapSdkMapOptions {
  zoom: number
  center: MapSdkLngLat
  container: string | HTMLElement
  panControl: boolean
  zoomEnable: boolean
  zoomControlPosition: string
}

export interface MapSdkSearchOptions {
  driver?: unknown
  fetch?: MapFetch
  geocoderUrl: string
  geocoderHandler?: MapGeocoderHandler
  map: MapSdkMap
  /** Legacy global SDK callback; explicit adapters use the callback passed to search. */
  complete: MapSdkSearchCompletion
}

export interface MapSdk {
  LngLat: new (longitude: number, latitude: number) => MapSdkLngLat
  Map: new (options: MapSdkMapOptions) => MapSdkMap
  MapService: { init(type: 'google' | 'amaps' | 'qqmaps', key: string): void | Promise<void> }
  SearchService: new (options: MapSdkSearchOptions) => MapSdkSearchService
}
