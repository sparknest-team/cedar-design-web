import type { VNodeChild } from 'vue'

export interface ConfigProviderSlots {
  default?: () => VNodeChild
  empty?: (scope: { component: string }) => VNodeChild
  loading?: () => VNodeChild
}
