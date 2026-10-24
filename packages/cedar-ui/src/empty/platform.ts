import { computed, inject, provide, type ComputedRef } from 'vue'
import { IconEmpty as DefaultEmptyIcon } from '@cedar-design/icons-vue/icon-empty'
import { configProviderInjectionKey } from '../config-provider/context'
import { useI18n } from '../locale'

const skipConfigEmptyKey: unique symbol = Symbol('skipConfigEmpty')

export { DefaultEmptyIcon }

export function useDefaultDescription() {
  const { t } = useI18n()
  return computed(() => t('empty.description'))
}

export function useConfigEmpty(hasCustomContent: ComputedRef<boolean>) {
  const config = inject(configProviderInjectionKey, undefined)
  const skip = inject(skipConfigEmptyKey, false)
  return computed(() => {
    if (skip || hasCustomContent.value || !config?.slots.empty) return null
    return config.slots.empty({ component: 'empty' }) ?? null
  })
}

export function provideSkipConfigEmpty() {
  provide(skipConfigEmptyKey, true)
}
