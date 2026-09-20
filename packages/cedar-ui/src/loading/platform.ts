import { computed, inject } from "vue";
import { configProviderInjectionKey } from "../config-provider/context";

export function useLoadingPlatform() {
  const config = inject(configProviderInjectionKey, undefined);
  const customLoading = computed(() => config?.slots.loading?.()[0]);

  return { customLoading };
}
