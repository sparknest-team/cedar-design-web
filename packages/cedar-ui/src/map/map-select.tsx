import { ref, reactive, defineComponent, useAttrs, onBeforeUnmount, onDeactivated, onActivated, onMounted, h, watch, mergeProps } from 'vue'
import { setValueWithAlias, dataToScope, realTransformAlias } from '../utils/useSetValueWithAlias'
import { mapSelectProps, type PoiKeys } from './props'
import { mapSelectEmits } from './emits'
import { IconLocation, IconLoading, IconCloseCircleFill } from '@cedar-design/icons-vue'
import Input from '../input'
import Dialog from '../dialog'
import Map from './map'
import { useI18n } from '../locale'
import { resolveMapType, useFetchGeocoder } from './utils'
import { useFetch } from '../_utils/use-fetch'
import { createNamespace } from '../_utils/global-config'


const { name } = createNamespace('map-select')

export default defineComponent({
  name,
  inheritAttrs: false,

  props: mapSelectProps,

  emits: mapSelectEmits,

  setup(props, { emit }) {
    const { t } = useI18n()
    const attrs = useAttrs()
    const { fetch: inheritedFetch } = useFetch()
    const show = ref(false)
    const value = ref<any>(props.modelValue)
    const value_ = ref<any>({})
    const valueKeyAlias = reactive(((): {
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
    })())
    const valueKeyScope = (() => {
      return ['longitude', 'latitude', 'address', 'name', 'adcode', 'countryCode', 'city', 'country'] as PoiKeys[]
    })()
    const confirmButtonLoading = ref(false)
    watch(show, (open) => { if (!open) confirmButtonLoading.value = false }, { flush: 'sync' })
    const address = ref('')
    const isLoading = ref(false)
    let generation = 0
    let active = false

    function updateModelValue() {
      const data = dataToScope({
        origin: value_.value,
        scope: props.valueKeyScope,
        alias: valueKeyAlias,
      })
      emit('update:modelValue', { ...props.modelValue, ...data })
      emit('change', { ...data }, { ...value_.value })
    }

    const fallback = async (version: number) => {
      const longitude = value.value?.[valueKeyAlias.longitude]
      const latitude = value.value?.[valueKeyAlias.latitude]
      address.value = value.value?.[valueKeyAlias.address] ?? ''
      isLoading.value = false
      if (address.value || longitude == null || latitude == null || longitude === '' || latitude === '' || !Number.isFinite(Number(longitude)) || !Number.isFinite(Number(latitude))) return
      // 如果没有地址，但是有经纬度，则调用地图接口获取地址，并且将数据同步到value_。如果使用了v-model，则同步到外部。
      isLoading.value = true
      try {
        const { fetchGeocoder } = useFetchGeocoder({ mapType: resolveMapType(props.mapType, props.isInternational), basePath: props.basePath, geocoderUrl: props.geocoderUrl, fetch: props.fetch ?? inheritedFetch, geocoderHandler: props.geocoderHandler })
        const parsedData = await fetchGeocoder(latitude, longitude)
        if (!active || version !== generation || !parsedData) return
        const parsedAliasData = realTransformAlias(parsedData, valueKeyAlias)
        setValueWithAlias({ target: value_, origin: parsedAliasData, scope: valueKeyScope, alias: valueKeyAlias })
        updateModelValue()
      } catch (error) {
        if (active && version === generation) emit('error', error)
      } finally {
        if (active && version === generation) isLoading.value = false
      }
    }

    const handleConfirm = () => {
      if (props.disabled || confirmButtonLoading.value) return false
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
      void fallback(++generation)
    }

    watch(() => props.modelValue, (v) => {
      value.value = v
      if (active) init()
      else address.value = v?.[valueKeyAlias.address] ?? ''
    }, { deep: true, immediate: true, flush: 'sync' })
    watch(() => props.valueKeyAlias, (alias) => {
      Object.assign(valueKeyAlias, { longitude: 'longitude', latitude: 'latitude', address: 'address', name: 'name', adcode: 'adcode', countryCode: 'countryCode', city: 'city', country: 'country' }, alias)
      if (active) init()
      else address.value = value.value?.[valueKeyAlias.address] ?? ''
    }, { deep: true, flush: 'sync' })
    watch(() => [props.mapType, props.isInternational, props.basePath, props.geocoderUrl, props.geocoderHandler, props.fetch], () => { if (active) init() }, { flush: 'sync' })
    watch(() => props.disabled, (disabled) => { if (disabled) show.value = false })
    onMounted(() => { active = true; init() })
    onDeactivated(() => { active = false; generation++; isLoading.value = false; confirmButtonLoading.value = false })
    onActivated(() => { if (!active) { active = true; init() } })
    onBeforeUnmount(() => { active = false; generation++ })

    const changeHandler = (v) => {
      setValueWithAlias({
        target: value_,
        origin: v,
        scope: valueKeyScope,
        alias: valueKeyAlias,
      })
    }
    const openDialog = () => {
      if (props.disabled || isLoading.value) return
      value_.value = { ...value.value }
      show.value = true
    }
    const clear = (event: Event) => {
      event.stopPropagation()
      if (props.disabled || isLoading.value) return
      generation++
      const data = {}
      valueKeyScope.forEach((key) => { data[valueKeyAlias[key]] = undefined })
      value_.value = data
      updateModelValue()
      emit('clear')
    }
    return () => (
      <>
        <Input
          {...mergeProps({ role: 'button', 'aria-label': t('common.placeholderSelect') }, attrs, {
            'aria-haspopup': 'dialog',
            'aria-expanded': show.value,
            onClick: openDialog,
            onKeydown: (event: KeyboardEvent) => {
              if (!event.defaultPrevented && !event.isComposing && event.keyCode !== 229 && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault()
                openDialog()
              }
            },
          })}
          class="map-select"
          modelValue={address.value}
          placeholder={t('common.placeholderSelect')}
          disabled={props.disabled}
          readonly
          v-slots={{
            suffix: () => props.clearable && address.value && !props.disabled && !isLoading.value
              ? h('button', { type: 'button', class: 'map-select-clear', 'aria-label': t('common.clear'), onClick: clear }, h(IconCloseCircleFill, { 'aria-hidden': 'true' }))
              : h(isLoading.value ? IconLoading : IconLocation, { 'aria-hidden': 'true' }),
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
              onError={(error: unknown) => emit('error', error)}
              style={props.mapStyle}
              valueKeyScope={valueKeyScope}
              valueKeyAlias={valueKeyAlias}
              enableGisSearch={props.enableGisSearch}
              fetch={props.fetch ?? inheritedFetch}
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
