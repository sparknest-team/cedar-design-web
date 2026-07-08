// TODO: 脱敏迁移 - 暂时注释 @nio-pow/map-core，后续替换为公有包
// import { PoiInfo } from '@nio-pow/map-core'

export const useSuggest = (fetch?: { get: any; post: any }, basePath?: string) => {
  const geoUrl = basePath + '/gis/v2/in/map/suggest'
  const suggestSearch = async (params) => {
    const res = await fetch?.get?.(geoUrl, {
      params,
    })
    const data: any[] = res.data
    const result: PoiInfo[] = []

    data?.forEach((item) => {
      const poiInfo = new PoiInfo()
      if (item.type) poiInfo.type = item.type
      if (item.address) poiInfo.address = item.address
      if (item.countryCode) poiInfo.countryCode = item.countryCode
      if (item.area_code) poiInfo.adcode = item.area_code
      if (item.city) poiInfo.city = item.city
      if (item.name) poiInfo.name = item.name
      if (item.lng) poiInfo.longitude = item.lng
      if (item.lat) poiInfo.latitude = item.lat
      result.push(poiInfo)
    })
    return result
  }
  return { suggestSearch }
}
