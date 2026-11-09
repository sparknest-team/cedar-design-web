import { popupContainerProp } from '../_utils/popup-container'
import type { CSSProperties, PropType } from 'vue'

export type PoiKeys = 'longitude' | 'latitude' | 'address' | 'name' | 'adcode' | 'countryCode' | 'city' | 'country'
export interface MapGeocoderResult {
  address?: string
  poi?: string
  area_code?: string
  country_code?: string
  city?: string
  country?: string
}
export type MapGeocoderHandler = (longitude: number, latitude: number) => MapGeocoderResult | Promise<MapGeocoderResult>
export interface MapFetch {
  get: (...args: any[]) => any
  post: (...args: any[]) => any
}
export const mapProps = {
  geocoderUrl: String,
  geocoderHandler: Function as PropType<MapGeocoderHandler>,
  isInternational: Boolean,
  driver: Object,
  fetch: Object as PropType<MapFetch>,
  popupContainer: popupContainerProp,
  showName: {
    type: Boolean,
    default: false,
  },
  showLocateMeButton: {
    type: Boolean,
    default: false,
  },
  showEditAddressButton: {
    type: Boolean,
    default: false,
  },
  showMapTips: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: Object,
    required: true as const,
  },
  mapType: {
    type: String as PropType<'amaps' | 'google' | 'qqmaps'>,
    default: 'qqmaps',
  },
  defaultValue: {
    type: Object as PropType<{
      [key in PoiKeys]?: string | number
    }>,
  },
  enableGisSearch: {
    type: Boolean,
    default: false,
  },
  basePath: {
    type: String,
    default: '/pe/powerpro',
  },
  valueKeyScope: {
    type: Array as PropType<PoiKeys[]>,
    default: () => ['longitude', 'latitude', 'address', 'name', 'adcode', 'countryCode', 'city', 'country'],
  },
  valueKeyAlias: {
    type: Object as PropType<{
      [key in PoiKeys]?: string
    }>,
    default: () => ({
      longitude: 'longitude',
      latitude: 'latitude',
      address: 'address',
      name: 'name',
      adcode: 'adcode',
      countryCode: 'countryCode',
      city: 'city',
      country: 'country',
    }),
  },
}

export const mapSelectProps = {
  ...mapProps,
  disabled: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  mapStyle: { type: Object as PropType<CSSProperties>, default: () => ({ height: '300px' }) },
}

export type MapProps = import("vue").ExtractPublicPropTypes<typeof mapProps>
export type MapSelectProps = import("vue").ExtractPublicPropTypes<typeof mapSelectProps>

export interface ModelValueType {
  adcode?: string
  city?: string
  country?: string
  countryCode?: string
  address?: string
  latitude?: number
  longitude?: number
  name?: string
}
