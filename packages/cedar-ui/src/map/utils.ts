import { base64ToString } from '../utils'

export const getMapInitData = (
  mapType: 'amaps' | 'google' | 'qqmaps',
  baseUrl: string,
): {
  key: string
  geoUrl: string
} => {
  const keyMap = {
    google: 'QUl6YVN5QWJHMFA2T2tObldrQzJaZkVoQ01welhqcUIzWU9ob1N3',
    amaps: 'NTVmNTk0ZjU3MjYzYWEwZDE2MTRiZDIyMTYwYjJhZmI=',
    qqmaps: 'U1g0QlotWVI1S0QtWVNaNFItUE9EQTItUDZEWjMtNTNCMlQ=',
  }
  const geoUrlMap = {
    google: '/node/api/v1/gis/rgeo',
    amaps: '/gis/v2/in/map/rgeo',
    qqmaps: '/gis/v2/in/map/rgeo',
  }
  return {
    key: base64ToString(keyMap[mapType]),
    geoUrl: baseUrl + geoUrlMap[mapType],
  }
}

export const parseRgeoData = (
  data: any,
  location: {
    latitude: string
    longitude: string
  },
) => {
  return {
    // 用旧的经纬度，防止地图组件传入的经纬度不准确
    longitude: location.longitude,
    latitude: location.latitude,
    address: data.address,
    name: data.poi,
    adcode: data.area_code,
    countryCode: data.country_code,
    city: data.city,
    country: data.country,
  }
}
const fetchGeocoder = async (params: {
  latitude: string
  longitude: string
  mapType: 'amaps' | 'google' | 'qqmaps'
  basePath: string
  fetch?: { get: any; post: any }
  geocoderHandler?: any
}) => {
  const { mapType, basePath, fetch, latitude, longitude, geocoderHandler } = params
  const { key, geoUrl } = getMapInitData(mapType, basePath)
  let data: any = {}
  if (geocoderHandler) {
    try {
      // 如果外面传了逆地理解析方法，则直接调用
      data = await geocoderHandler(longitude, latitude)
    } catch {}
  } else {
    // 如果外面没有传逆地理解析方法，则调用默认的逆地理解析接口
    const params = {
      key,
      latitude,
      longitude,
    }
    try {
      const res = await fetch?.get?.(geoUrl, {
        params,
      })
      if (res?.isValid?.()) {
        data = res.data
      }
    } catch {}
  }
  // 解析数据，将接口数据转换成PoiInfo
  return parseRgeoData(data, {
    latitude,
    longitude,
  })
}
export const useFetchGeocoder = (params: {
  mapType: 'amaps' | 'google' | 'qqmaps'
  basePath: string
  fetch?: { get: any; post: any }
  geocoderHandler?: any
}) => {
  const { mapType, basePath, fetch, geocoderHandler } = params
  return {
    fetchGeocoder: async (latitude: string, longitude: string) => {
      return fetchGeocoder({
        latitude,
        longitude,
        mapType,
        basePath,
        fetch,
        geocoderHandler,
      })
    },
  }
}
