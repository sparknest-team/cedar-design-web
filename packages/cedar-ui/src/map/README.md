---
permalink: /components/map/
---

# Map

## 案例

### 基础用法

无需登录或配置密钥即可运行。点击按钮更新本地位置模型；未接入 SDK 时显示降级提示并禁用搜索，不请求定位权限。真实地图的选点与搜索需要应用接入 SDK 适配器后再验收。

<demo src="./__demos__/basic.vue"></demo>

### 国际地图配置

通过 `map-type="google"` 和 `is-international` 配置国际地图；未接入 SDK 时保留同样的降级展示。

<demo src="./__demos__/google.vue"></demo>

[//]: # '### v-model'
[//]: # '使用v-model语法，会自动更新值，并且不会丢失类型'
[//]: # '<demo src="./__demos__/use-vmodel.vue"></demo>'

## 特殊说明

地图SDK正在迁移：当前源码未提供原map-core运行时导入；MapService、SearchService、LngLat的类型声明不等于可用依赖，缺任一依赖时初始化会进入降级显示，不代表真实地图初始化成功。恢复正式适配器／第三方生命周期契约前，不将降级渲染测试当地图服务验收。

内部300ms中心更新和500ms选点等待用于抑制程序化moveend反向解析，不是CSS动画完成时长或公开CSS变量；不应通过覆盖视觉duration Token控制它们。真实SDK下的计时取消、停用／卸载、旧回调／异步结果及监听释放尚待独立验证；MapSelect地址回填和定位也不由缺SDK测试覆盖。

<demo src="./__demos__/auth.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### Map Props

| 属性                    | 说明                                         | 类型                                         | 默认值           |
| ----------------------- | -------------------------------------------- | -------------------------------------------- | ---------------- |
| model-value(**v-model**) | 地图的初始值，表示所选位置的信息。           | `Object`                                     | -                |
| default-value            | 用来设置默认地图中心点                       | `{ [key in valueKeyAlias[keys]]: any }`      | -                |
| driver                  | `Fetch.genDriiver`的返回值                   | `Driver`                                     | `-`              |
| fetch                   | `Fetch.genFetch`的返回值                     | `CoreService`                                | `-`              |
| geocoder-url             | geocoderUrl接口路径                          | `string`                                     | `-`              |
| geocoder-handler         | 用于处理地图编码服务的响应。                 | `(longitude: number, latitude: number)=>{})` | -                |
| base-path                | 地图的基础路径，配置获取地图数据的基础 URL。 | `String`                                     | `'/pe/powerpro'` |
| is-international         | 指示地图是否为谷歌地图。                     | `Boolean`                                    | -                |
| show-name                | 是否展示悬浮框名称                           | `boolean`                                    | `false`          |
| show-locate-me-button      | 是否展示定位到当前位置按钮                   | `boolean`                                    | `false`          |
| show-edit-address-button   | 是否展示修改地点悬浮按钮                     | `boolean`                                    | `false`          |
| show-map-tips             | 是否展示地图上方tips                         | `boolean`                                    | `false`          |
| map-type                 | 要显示的地图类型。                           | `'qqmaps'\|'bmapGL'\|'amaps'`                | `'amaps'`        |
| enable-gis-search         | 是否启用gis搜索(**开启时`fetch`为必传**)     | `boolean`                                    | `false`          |
| value-key-scope           | 一个字符串数组，表示要在地图上显示的值列表。 | `Array`                                      | `valueKeyScope`  |
| value-key-alias           | 一个对象，表示地图键到值的映射关系。         | `Object`                                     | `valueKeyAlias`  |

### MapSelect Props

| map-style | 直接设置到地图上面的style，可以设置地图的高度。 | `object` | `{ height: '300px'}` |

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
import type { MapProps } from '@cedar-design/ui'
```
