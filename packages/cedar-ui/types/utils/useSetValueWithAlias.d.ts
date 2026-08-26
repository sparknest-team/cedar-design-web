import type { Ref } from 'vue';
import type { PoiKeys } from '../map/props';
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
export declare const dataToScope: <T extends { [key in PoiKeys]?: string; }>({ origin, scope, alias, }: {
    origin: any;
    scope: Array<keyof T & string>;
    alias: T;
}) => object;
/**
 * @description: 根据数据源和目标对象设置属性
 * @param {Object} origin 数据源
 * @param {Object} target 目标对象
 * @param {Array} scope 过滤的key
 * @param {Object} alias 别名
 * @param {Array} exclude 排除的key
 * @return {Object} 目标对象
 * */
export declare const setValueWithAlias: <T extends { [key in PoiKeys]?: string; }>({ origin, target, scope, alias, exclude, }: {
    target: Ref<object | undefined>;
    origin: object;
    scope: Array<keyof T & string>;
    alias: T;
    exclude?: Array<keyof T & string>;
}) => object;
/**
 * @description: 根据别名转换数据
 * @param {Object} data 数据源
 * @param {Object} aliasMap 别名
 * @return {Object} 转换后的数据
 * */
export declare const realTransformAlias: (data: Record<string, any> | undefined, aliasMap: { [key in PoiKeys]?: string; }) => {};
