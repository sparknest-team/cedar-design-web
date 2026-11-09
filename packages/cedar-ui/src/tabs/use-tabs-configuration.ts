import { useI18n } from '../locale'
import { computed, type ComputedRef } from 'vue'
import { useSize } from '../_hooks/use-size'
import type { ComponentSize } from '../_utils/constant'

export function useTabsConfiguration(size: ComputedRef<ComponentSize | undefined>) {
  return { size: useSize(size).mergedSize }
}

export function useTabsLocale() {
  const { t } = useI18n()
  const get = (key: string, fallback: string) => { const value = t(key); return value === key ? fallback : value }
  return computed(() => ({ close: get('tabs.close', 'Close'), add: get('tabs.add', 'Add tab'), previous: get('tabs.previous', 'Previous tabs'), next: get('tabs.next', 'Next tabs') }))
}
