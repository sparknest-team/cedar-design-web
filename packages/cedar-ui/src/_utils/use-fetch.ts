import { inject } from 'vue'
import { configProviderInjectionKey } from '../config-provider/context'

export const useFetch = (f?: { get: any; post: any } | undefined) => {
  const configProviderCtx = inject(configProviderInjectionKey, undefined)

  const fetch = f ?? (configProviderCtx as { fetch?: { get: any; post: any } } | undefined)?.fetch

  return {
    fetch,
  }
}
