---
permalink: /components/map/
---

# Map

## 基础示例

### 基础用法

无需登录或配置密钥即可运行示例。点击按钮更新本地位置模型；未接入可用 SDK 时显示降级提示并禁用搜索，不请求定位权限。

<demo src="./__demos__/basic.vue"></demo>

## 内容与展示

### 特殊说明

当前未提供原 `map-core` 运行时依赖。应用可通过 `sdk` 显式传入 `MapSdk` 适配对象，包含 `Map`、`LngLat`、`MapService` 与 `SearchService`；未提供有效实现时显示降级状态。旧的全局接入仍可用，但显式适配器优先，不需要覆盖浏览器原生 `Map`。适配器需要按自身地图服务完成初始化、授权和资源释放。

地图交互的业务等待不通过 CSS 动效变量控制。

`MapSdk` 及其 `MapSdkMapOptions`、`MapSdkSearchOptions`、`MapSdkSearchCompletion`、`MapSdkMap`、`MapSdkLngLat` 和 `MapSdkSearchService` 类型从根入口和 `map` 子入口导出。显式适配器的 `search(query, complete)` 必须对该次请求调用传入的完成回调；组件忽略过期请求和重复回调。`MapSdkSearchOptions.complete` 仅供旧全局 SDK 兼容，显式适配器不能用它提交搜索结果。地图与搜索服务可提供 `off`、`destroy` 用于释放资源；供应商适配及授权由应用负责。

<demo src="./__demos__/auth.vue"></demo>

## 数据与选项

### 国际地图配置

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `map-type` | 要显示的地图类型。 | 国际地图配置 |
| `is-international` | 指示地图是否为谷歌地图。 | 国际地图配置 |
<!-- demo-config-notes:end -->

通过 `map-type="google"` 和 `is-international` 配置国际地图；未接入 SDK 时保留同样的降级展示。

启用 `is-international` 时实际地图类型为 `google`；否则使用 `map-type`。SDK 初始化和默认逆地址服务使用同一实际类型；显式 `geocoder-url` 优先。

<demo src="./__demos__/google.vue"></demo>

[//]: # '### v-model'
[//]: # '使用v-model语法，会自动更新值，并且不会丢失类型'
[//]: # '<demo src="./__demos__/use-vmodel.vue"></demo>'

## API

### Map Props

GIS 搜索在下一次输入时使用当前的 `enable-gis-search`、`base-path` 和 `fetch`；这些配置或 `is-international` 改变时会清除旧搜索结果并忽略旧的 GIS 搜索响应。

SDK 可用时，`sdk`、`map-type`、`is-international`、`base-path`、`driver`、`fetch`、`geocoder-url` 或 `geocoder-handler` 变化会释放旧实例并重新初始化；对象和函数按引用变化检测。同一轮的配置更改合并处理，旧请求结果不会应用到新实例。真实 SDK 的资源释放能力仍取决于适配器实现。

| 属性                    | 说明                                         | 类型                                         | 默认值           |
| ----------------------- | -------------------------------------------- | -------------------------------------------- | ---------------- |
| model-value(**v-model**) | 受控位置模型，组件不修改传入对象。           | `Object`                                     | -                |
| default-value            | 用来设置默认地图中心点                       | `{ [key in valueKeyAlias[keys]]: any }`      | -                |
| sdk                     | 显式地图 SDK 适配器；替换或移除时重新初始化 | `MapSdk` | `-` |
| driver                  | SDK 驱动对象                   | `object`                                     | `-`              |
| fetch                   | 带 get/post 的服务对象                     | `MapFetch`                                | `-`              |
| geocoder-url             | geocoderUrl接口路径                          | `string`                                     | `-`              |
| geocoder-handler         | 用于处理地图编码服务的响应。                 | `MapGeocoderHandler` | -                |
| base-path                | 地图的基础路径，配置获取地图数据的基础 URL。 | `String`                                     | `'/pe/powerpro'` |
| is-international         | 指示地图是否为谷歌地图。                     | `Boolean`                                    | -                |
| popup-container | MapSelect 对话框挂载容器；Map 本身不使用 | `PopupContainer` | 库默认 |
| show-name                | 是否展示悬浮框名称                           | `boolean`                                    | `false`          |
| show-locate-me-button      | 是否展示定位到当前位置按钮                   | `boolean`                                    | `false`          |
| show-edit-address-button   | 是否展示修改地点悬浮按钮                     | `boolean`                                    | `false`          |
| show-map-tips             | 是否展示地图上方tips                         | `boolean`                                    | `true`          |
| map-type                 | 要显示的地图类型。                           | `'qqmaps'\|'google'\|'amaps'`                | `'qqmaps'`        |
| enable-gis-search         | 是否启用gis搜索(**开启时`fetch`为必传**)     | `boolean`                                    | `false`          |
| value-key-scope           | 一个字符串数组，表示要在地图上显示的值列表。 | `Array`                                      | `valueKeyScope`  |
| value-key-alias           | 一个对象，表示地图键到值的映射关系。         | `Object`                                     | `valueKeyAlias`  |

地图程序性移动共用更新保护；较早的保护计时不会提前结束较新的移动。连续选择地点时，较早的地点详情或解析结果不会覆盖后一次选择。 连续移动地图时，仅最新的逆地址解析结果可以提交；父组件更改位置或卸载会使旧解析失效。 初始化等待期间卸载后不会继续创建地图或处理初始化解析结果。 初始化未完成时的模型更新不会重复创建地图，完成后地图中心同步最新模型。

### MapSelect Props

继承 Map Props，另有：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 禁用触发和清空 | `boolean` | `false` |
| clearable | 显示清空按钮 | `boolean` | `false` |
| map-style | 直接设置到地图上面的style，可以设置地图的高度。 | `object` | `{ height: '300px'}` |

SDK 初始化失败时会报告原始错误并显示重试按钮；初始化期间缓存停用会取消旧实例，恢复后重新初始化。地图 SDK 仍需应用提供可用的运行时实现。

### Map Events

| 事件名          | 说明                       | 参数                      |
| --------------- | -------------------------- | ------------------------- |
| error | SDK 初始化、搜索、地点选择、定位或地图移动后的逆地址解析失败 | 原始错误 `unknown` |
| change          | 位置变更通知 | `(scopedValue, fullValue)` |
| init            | 初始化地图完成时触发 | `(initialValue, completedValue)` |
| loading:address | 选择地点，地址解析中触发   | `-`                       |
| loaded:address  | 地址解析结束（含失败或取消）；失败通过 error 通知 | `-`                       |
| update:modelValue | 提出新的位置模型 | 新模型对象 |

### MapSelect Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `error` | 当前逆地址解析、地图 SDK 初始化、搜索、地点选择、定位或地图移动后的解析失败 | 原始错误 `unknown` |
| `clear` | 请求清空位置 | 无 |
| `change` | 提出位置变化 | `(scopedValue, fullValue)` |
| `init` | 转发地图初始化 | `(initialValue, completedValue)` |
| `update:modelValue` | 提出包含现有其他字段的新模型 | 新模型对象 |

`model-value` 由父组件持有；选择或解析结果通过 `update:modelValue` 提出新对象，父组件接受后更新显示。旧请求、停用或卸载后的结果不会提交。


`geocoder-handler` 接收数字经度、纬度，可同步或异步返回含 `address`、`poi`、`area_code`、`country_code`、`city`、`country` 的对象；它优先于 `fetch`。否则逆地址请求使用 `geocoder-url`，未指定时根据 `map-type` 和 `base-path` 生成默认路径；`fetch.get` 应返回含 `isValid()` 和 `data` 的响应。MapSelect 的降级解析会响应别名和服务配置变化；0 是有效坐标。SDK 内部服务运行时重配置仍需在 SDK 恢复后验证。根入口和 `map` 子入口导出 `MapProps`、`MapSelectProps`、`MapFetch`、`MapGeocoderHandler`、`MapGeocoderResult` 及组件实例类型。地图 SDK 不随当前构建提供，未配置时地图交互不可用。

## Types

根入口和 `map` 子入口提供 `MapEmits` 和 `MapSelectEmits` 事件类型。


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
import type { MapProps } from '@cedar-design/ui-vue'
```

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-map-locate-me-bg` | `var(--c-color-bg-white)` | `background` |
| `--c-map-locate-me-bottom` | `var(--c-spacing-10)` | `bottom` |
| `--c-map-locate-me-icon-size` | `18px` | `height`, `width` |
| `--c-map-locate-me-left` | `var(--c-spacing-6)` | `left` |
| `--c-map-locate-me-shadow-blur` | `var(--c-spacing-2)` | `box-shadow` |
| `--c-map-locate-me-shadow-color` | `rgb(var(--c-gray-10))` | `box-shadow` |
| `--c-map-locate-me-size` | `var(--c-size-6)` | `height`, `width` |
| `--c-map-poi-address-color` | `var(--c-color-text-3)` | `color`, `stroke` |
| `--c-map-poi-address-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-map-poi-bg` | `rgb(var(--c-gray-10))` | `background-color` |
| `--c-map-poi-border-radius` | `var(--c-size-25)` | `border-radius` |
| `--c-map-poi-edit-margin-left` | `var(--c-spacing-2)` | `margin-inline-start` |
| `--c-map-poi-name-color` | `var(--c-color-white)` | `color` |
| `--c-map-poi-name-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-map-poi-padding-x` | `var(--c-spacing-9)` | `padding` |
| `--c-map-poi-padding-y` | `var(--c-spacing-5)` | `padding` |
| `--c-map-poi-translate-y` | `-7px` | `transform` |
| `--c-map-position-current-right` | `var(--c-size-10)` | `right` |
| `--c-map-position-current-size` | `var(--c-size-6)` | `height`, `width` |
| `--c-map-position-current-top` | `var(--c-size-25)` | `top` |
| `--c-map-position-dot-margin-left` | `calc(-1 * var(--c-spacing-6))` | `margin-left` |
| `--c-map-position-dot-margin-top` | `calc(-1 * var(--c-size-6))` | `margin-top` |
| `--c-map-position-dot-size` | `var(--c-size-6)` | `height`, `width` |
| `--c-map-search-box-padding-x` | `var(--c-spacing-6)` | `padding` |
| `--c-map-search-box-padding-y` | `7px` | `padding` |
| `--c-map-search-empty-padding` | `var(--c-spacing-8)` | `padding` |
| `--c-map-search-item-address-color` | `var(--c-color-text-3)` | `color` |
| `--c-map-search-item-name-color` | `var(--c-color-text-1)` | `color` |
| `--c-map-search-item-padding-x` | `var(--c-spacing-6)` | `padding` |
| `--c-map-search-item-padding-y` | `var(--c-spacing-4)` | `padding` |
| `--c-map-search-item-selected-bg` | `var(--c-color-fill-1)` | `background-color` |
| `--c-map-search-margin` | `var(--c-spacing-9)` | `margin` |
| `--c-map-search-width` | `230px` | `width` |
| `--c-map-tips-color` | `var(--c-color-text-3)` | `color` |
| `--c-map-tips-padding-y` | `var(--c-spacing-5)` | `padding` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-map-locate-me-icon-size: 18px;
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
