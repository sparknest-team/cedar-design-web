// TODO: 脱敏迁移 - @maple-design/map-core 暂不可用，先用本地类型占位，接入公有地图包后再替换

export interface PoiInfo {
  type?: string
  address?: string
  countryCode?: string
  adcode?: string
  city?: string
  name?: string
  longitude?: number
  latitude?: number
}

export const useSuggest = (fetch?: { get: any; post: any }, basePath?: string) => {
  const geoUrl = basePath + '/gis/v2/in/map/suggest'
  const suggestSearch = async (params: Record<string, unknown>) => {
    const res = await fetch?.get?.(geoUrl, {
      params,
    })
    const data: any[] = res?.data
    const result: PoiInfo[] = []

    data?.forEach((item) => {
      const poiInfo: PoiInfo = {}
      if (item.type) poiInfo.type = item.type
      if (item.address) poiInfo.address = item.address
      if (item.countryCode) poiInfo.countryCode = item.countryCode
      if (item.area_code) poiInfo.adcode = item.area_code
      if (item.city) poiInfo.city = item.city
      if (item.name) poiInfo.name = item.name
      if (item.lng || item.lng === 0) poiInfo.longitude = item.lng
      if (item.lat || item.lat === 0) poiInfo.latitude = item.lat
      result.push(poiInfo)
    })
    return result
  }
  return { suggestSearch }
}
