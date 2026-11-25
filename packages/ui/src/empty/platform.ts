import { computed, defineComponent, inject, onBeforeUpdate, provide, ref, useSlots } from 'vue'
import { IconEmpty as DefaultEmptyIcon } from '@cedar-design/icons-vue/icon-empty'
import { configProviderInjectionKey } from '../config-provider/context'
import { useI18n } from '../locale'

const skipConfigEmptyKey: unique symbol = Symbol('skipConfigEmpty')

export { DefaultEmptyIcon }

export function useDefaultDescription() {
  const { t } = useI18n()
  return computed(() => t('empty.description'))
}

export function useConfigEmpty(props: { imageUrl?: string; description?: string }) {
  const slots = useSlots()
  const checkContent = () => Boolean(slots.default || slots.image || slots.extra || props.imageUrl || props.description)
  // Vue updates slot presence before each render.
  const hasCustomContent = ref(checkContent())
  onBeforeUpdate(() => {
    hasCustomContent.value = checkContent()
  })
  const config = inject(configProviderInjectionKey, undefined)
  const skip = inject(skipConfigEmptyKey, false)
  return computed(() => {
    if (skip || hasCustomContent.value || !config?.slots.empty) return null
    return config.slots.empty({ component: 'empty' }) ?? null
  })
}

export const ConfigEmptyNodes = defineComponent({
  name: 'ConfigEmptyNodes',
  props: { nodes: { type: [Array, Object], required: true } },
  setup(innerProps) {
    provide(skipConfigEmptyKey, true)
    return () => innerProps.nodes
  },
})
