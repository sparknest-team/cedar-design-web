---
permalink: /components/map/
---

# Map

## 特殊说明

<demo src="./__demos__/auth.vue"></demo>

## 案例

### 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

### google地图

google地图

<demo src="./__demos__/google.vue"></demo>

[//]: # '### v-model'
[//]: # '使用v-model语法，会自动更新值，并且不会丢失类型'
[//]: # '<demo src="./__demos__/use-vmodel.vue"></demo>'

## API

### Map Props

| 属性                    | 说明                                         | 类型                                         | 默认值           |
| ----------------------- | -------------------------------------------- | -------------------------------------------- | ---------------- |
| modelValue(**v-model**) | 地图的初始值，表示所选位置的信息。           | `Object`                                     | -                |
| defaultValue            | 用来设置默认地图中心点                       | `{ [key in valueKeyAlias[keys]]: any }`      | -                |
| driver                  | `Fetch.genDriiver`的返回值                   | `Driver`                                     | `-`              |
| fetch                   | `Fetch.genFetch`的返回值                     | `CoreService`                                | `-`              |
| geocoderUrl             | geocoderUrl接口路径                          | `string`                                     | `-`              |
| geocoderHandler         | 用于处理地图编码服务的响应。                 | `(longitude: number, latitude: number)=>{})` | -                |
| basePath                | 地图的基础路径，配置获取地图数据的基础 URL。 | `String`                                     | `'/pe/powerpro'` |
| isInternational         | 指示地图是否为谷歌地图。                     | `Boolean`                                    | -                |
| showName                | 是否展示悬浮框名称                           | `boolean`                                    | `false`          |
| showLocateMeButton      | 是否展示定位到当前位置按钮                   | `boolean`                                    | `false`          |
| showEditAddressButton   | 是否展示修改地点悬浮按钮                     | `boolean`                                    | `false`          |
| showMapTips             | 是否展示地图上方tips                         | `boolean`                                    | `false`          |
| mapType                 | 要显示的地图类型。                           | `'qqmaps'\|'bmapGL'\|'amaps'`                | `'amaps'`        |
| enableGisSearch         | 是否启用gis搜索(**开启时`fetch`为必传**)     | `boolean`                                    | `false`          |
| valueKeyScope           | 一个字符串数组，表示要在地图上显示的值列表。 | `Array`                                      | `valueKeyScope`  |
| valueKeyAlias           | 一个对象，表示地图键到值的映射关系。         | `Object`                                     | `valueKeyAlias`  |

### MapSelect Props

| mapStyle | 直接设置到地图上面的style，可以设置地图的高度。 | `object` | `{ height: '300px'}` |

### Map Events

| 事件名          | 说明                       | 参数                      |
| --------------- | -------------------------- | ------------------------- |
| change          | 当地址发生变化时触发       | `(value: ModelValueType)` |
| init            | 初始化地图完成时触发       | `(value: ModelValueType)` |
| loading:address | 选择地点，地址解析中触发   | `-`                       |
| loaded:address  | 选择地点，地址解析完成触发 | `-`                       |

## 类型定义

### valueKeyAlias

```ts
{
  longitude: 'longitude',
  latitude: 'latitude',
  address: 'address',
  name: 'name',
  adcode: 'adcode',
  city: 'city',
  countryCode: 'countryCode',
  country: 'country',
}
```

### valueKeyScope

```ts
;['longitude', 'latitude', 'address', 'name', 'adcode', 'city', 'country', 'countryCode']
```

### ModelValueType

ModelValueType里面的key取决于valueKeyAlias

```ts
interface ModelValueType {
  adcode?: string
  city?: string
  country?: string
  countryCode?: string
  address?: string
  latitude?: number
  longitude?: number
  name?: string
}
```

组件导出以下类型定义

```ts
import type { MapProps } from '@cedar/ui'
```
