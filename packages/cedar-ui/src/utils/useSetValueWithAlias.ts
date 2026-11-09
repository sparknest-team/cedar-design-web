import type { Ref } from 'vue'
import type { PoiKeys } from '../map/props'

/**
 * @description: 将数据转换根据scope过滤
 * @param {Object} origin 原始数据
 * @param {Array} scope 过滤的key
 * @param {Object} alias 别名
 * @return {Object} 过滤后的数据
 *
 * @example
 * const data = {
 *  longitude: '1',
 *  latitude: '2',
 *  address: '3',
 *  name: '4',
 *  }
 *
 *  const test1 = dataToScope({
 *    origin:data,
 *    scope:['name','address']
 *  })
 *  test1 : {name:'4',address:'3'}
 * */
export const dataToScope = <T extends { [key in PoiKeys]?: string }>({
  origin,
  scope,
  alias,
}: {
  origin: any
  scope: Array<keyof T & string>
  alias: T
}): object => {
  const result = {} as any
  scope.forEach((realKey) => {
    const aliasKey = alias[realKey]
    result[aliasKey] = origin ? origin[aliasKey as keyof T] : undefined
  })
  return result
}

/**
 * @description: 根据数据源和目标对象设置属性
 * @param {Object} origin 数据源
 * @param {Object} target 目标对象
 * @param {Array} scope 过滤的key
 * @param {Object} alias 别名
 * @param {Array} exclude 排除的key
 * @return {Object} 目标对象
 * */
export const setValueWithAlias = <T extends { [key in PoiKeys]?: string }>({
  origin,
  target,
  scope,
  alias,
  exclude = [],
}: {
  target: Ref<object | undefined>
  origin: object
  scope: Array<keyof T & string>
  alias: T
  exclude?: Array<keyof T & string>
}): object => {
  const aliasRealKeyValueEntries = Object.entries(alias)
  aliasRealKeyValueEntries.forEach(([realKey, aliasKey]) => {
    if (scope.includes(realKey as keyof T & string) && !exclude.includes(realKey as keyof T & string)) {
      if (!target.value) target.value = {}
      if (target.value) target.value[aliasKey] = origin[aliasKey]
    }
  })
  return target
}

/**
 * @description: 根据别名转换数据
 * @param {Object} data 数据源
 * @param {Object} aliasMap 别名
 * @return {Object} 转换后的数据
 * */
export const realTransformAlias = (data: Record<string, any> | undefined, aliasMap: { [key in PoiKeys]?: string }) => {
  if (typeof data === 'undefined') {
    return {}
  }
  const aliasRealKeyValueEntries = Object.entries(aliasMap)
  const result = {}
  aliasRealKeyValueEntries.forEach(([realKey, aliasKey]) => {
    if (data[realKey] !== undefined && data[realKey] !== null) {
      result[aliasKey] = data[realKey]
    }
  })
  return result
}
