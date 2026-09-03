import { ref, defineComponent, useAttrs, useSlots, onMounted, h, watch, getCurrentInstance, computed, toRaw } from 'vue'
import { setValueWithAlias, dataToScope, realTransformAlias } from '../utils/useSetValueWithAlias'
import { mapProps, type PoiKeys } from './props'
import { IconLocation, IconLoading } from '@cedarjs/icons-vue'
import Input from '../input'
import Dialog from '../dialog'
import Map from './map'
import { useI18n } from '../locale'
import _ from 'lodash'
import { useFetchGeocoder } from './utils'
import { useFetch } from '../_utils/use-fetch'
import { createNamespace } from '../_utils/global-config'


const { name } = createNamespace('map-select')

export default defineComponent({
  name,

  props: {
    ...mapProps,
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    mapStyle: {
      type: Object,
      default: () => ({
        height: '300px',
      }),
    },
  },

  emits: ['change', 'init', 'clear', 'update:modelValue'],

  setup(props, { emit }) {
    const { t } = useI18n()
    const attrs = useAttrs()
    const slots = useSlots()
    const { fetch } = useFetch(props.fetch)
    const searchVal = ref('')
    const show = ref(false)
    const value = ref<any>(props.modelValue)
    const value_ = ref<any>({})
    const instance = getCurrentInstance()
    const isUsingVModel = computed(() => {
      // 判断是否传入了 `modelValue` prop 并且有 `update:modelValue` 事件监听器
      return Boolean(instance?.vnode.props && instance.vnode.props['onUpdate:modelValue'])
    })
    const valueKeyAlias = ((): {
      [key in PoiKeys]: string
    } => {
      const defaultValueMap = {
        longitude: 'longitude',
        latitude: 'latitude',
        address: 'address',
        name: 'name',
        adcode: 'adcode',
        countryCode: 'countryCode',
        city: 'city',
        country: 'country',
      }
      return { ...defaultValueMap, ...props.valueKeyAlias }
    })()
    const valueKeyScope = (() => {
      return ['longitude', 'latitude', 'address', 'name', 'adcode', 'countryCode', 'city', 'country'] as PoiKeys[]
    })()
    const confirmButtonLoading = ref(false)
    const address = ref('')
    const isLoading = ref(false)

    function updateModelValue() {
      const data = dataToScope({
        origin: value_.value,
        scope: props.valueKeyScope,
        alias: valueKeyAlias,
      })
      if (isUsingVModel.value) {
        // 使用了VModel,但是为undefined的情况，不能通过对象引用去改值，需要触发emit
        if (typeof props.modelValue === 'undefined') {
          emit('update:modelValue', data)
        } else {
          // 这里不能用emit update:modelValue，因为会覆盖类型，通过setValueWithAlias内部直接改props，实现相同的效果
          setValueWithAlias({
            target: value,
            origin: value_.value,
            scope: props.valueKeyScope,
            alias: valueKeyAlias,
          })
        }
      }
      emit('change', data, toRaw(value_.value))
    }

    const { fetchGeocoder } = useFetchGeocoder({
      mapType: props.mapType,
      basePath: props.basePath,
      fetch,
      geocoderHandler: props.geocoderHandler,
    })
    const fallback = async () => {
      // 没有经纬度，不需要fallback，直接return
      if (!value.value?.[valueKeyAlias.longitude] || !value.value?.[valueKeyAlias.latitude]) {
        return
      }
      // 如果外面传了地址，并且有经纬度，则优先展示外面传的地址
      if (value.value?.[valueKeyAlias.address]) {
        address.value = value.value[valueKeyAlias.address]
        return
      }
      // 如果没有地址，但是有经纬度，则调用地图接口获取地址，并且将数据同步到value_。如果使用了v-model，则同步到外部。
      isLoading.value = true
      const parsedData = await fetchGeocoder(value.value[valueKeyAlias.latitude], value.value[valueKeyAlias.longitude])
      isLoading.value = false
      // 将PoiInfo 转换成别名
      const parsedAliasData = realTransformAlias(parsedData, valueKeyAlias)
      // 更新内部值
      setValueWithAlias({
        target: value_,
        origin: parsedAliasData,
        scope: valueKeyScope,
        alias: valueKeyAlias,
      })
      address.value = parsedAliasData[valueKeyAlias.address]
      updateModelValue()
    }

    const handleConfirm = () => {
      show.value = false
      updateModelValue()
      return true
    }

    function initHandler(v: any, fixedV: any) {
      setValueWithAlias({
        target: value_,
        origin: fixedV,
        scope: valueKeyScope,
        alias: valueKeyAlias,
      })
      emit('init', v, fixedV)
    }

    function init() {
      value_.value = {}
      if (value.value) {
        Object.keys(value.value).forEach((key) => {
          value_.value[key] = value.value?.[key]
        })
      }
      fallback()
    }

    init()

    onMounted(() => {
      watch(
        () => props.modelValue,
        (v) => {
          value.value = v
          init()
        },
        { deep: true },
      )
    })

    const changeHandler = (v) => {
      setValueWithAlias({
        target: value_,
        origin: v,
        scope: valueKeyScope,
        alias: valueKeyAlias,
      })
    }
    return () => (
      <>
        <Input
          class="map-select"
          modelValue={address.value}
          placeholder={t('common.placeholderSelect')}
          clearable={props.clearable}
          disabled={props.disabled}
          v-slots={{
            suffix: () => h(isLoading.value ? IconLoading : IconLocation),
          }}
          {...({
            onClick: () => {
            if (value.value) {
              setValueWithAlias({
                target: value_,
                origin: value.value,
                scope: valueKeyScope,
                alias: valueKeyAlias,
              })
            }
            if (!isLoading.value) {
              show.value = true
            }
          },
          } as any)}
          onClear={(e: Event) => {
            e.stopPropagation()
            const data = {}
            valueKeyScope.forEach((key) => {
              data[valueKeyAlias[key]] = undefined
            })
            value_.value = data
            address.value = ''
            updateModelValue()
            emit('clear')
          }}
        ></Input>
        <Dialog
          class="map-select-model"
          width="960px"
          title={t('map.title')}
          open={show.value}
          popupContainer={props.popupContainer}
          onUpdate:open={(v: boolean) => {
            show.value = v
          }}
          onCancel={() => {
            show.value = false
          }}
          onConfirm={handleConfirm}
          confirmButtonLoading={confirmButtonLoading.value}
        >
          {show.value ? (
            <Map
              {...props}
              modelValue={value_.value}
              onUpdate:modelValue={(v: any) => {
                setValueWithAlias({
                  target: value_,
                  origin: v,
                  scope: valueKeyScope,
                  alias: valueKeyAlias,
                })
              }}
              onLoading:address={() => {
                confirmButtonLoading.value = true
              }}
              onLoaded:address={() => (confirmButtonLoading.value = false)}
              onInit={initHandler}
              style={props.mapStyle}
              valueKeyScope={valueKeyScope}
              valueKeyAlias={valueKeyAlias}
              enableGisSearch={props.enableGisSearch}
              fetch={fetch}
              onChange={changeHandler}
            ></Map>
          ) : (
            ''
          )}
        </Dialog>
      </>
    )
  },
})
