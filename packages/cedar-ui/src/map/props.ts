import { popupContainerProp } from '../_utils/popup-container'
import type { ExtractPropTypes, PropType } from 'vue'

export type PoiKeys = 'longitude' | 'latitude' | 'address' | 'name' | 'adcode' | 'countryCode' | 'city' | 'country'
export const mapProps = {
  geocoderUrl: String,
  geocoderHandler: Function,
  isInternational: Boolean,
  driver: Object,
  fetch: Object as PropType<{ get: any; post: any }>,
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
      [key in PoiKeys]?: string
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

export type MapProps = import("vue").ExtractPublicPropTypes<typeof mapProps>

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
