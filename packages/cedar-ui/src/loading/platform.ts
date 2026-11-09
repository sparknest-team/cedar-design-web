import { computed, inject } from "vue";
import { useI18n } from "../locale";
import { configProviderInjectionKey } from "../config-provider/context";

export function useLoadingPlatform() {
  const { t } = useI18n();
  const loadingText = computed(() => t("loading.text"));
  const config = inject(configProviderInjectionKey, undefined);
  const customLoading = computed(() => config?.slots.loading?.()[0]);

  return { customLoading, loadingText };
}
