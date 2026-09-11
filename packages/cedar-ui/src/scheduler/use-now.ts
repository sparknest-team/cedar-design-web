import { onMounted, onScopeDispose, shallowRef, watch } from "vue";

/** Client-only clock: no timer for hidden/unsupported views, refreshed on tab return. */
export function useSchedulerNow(enabled: () => boolean) {
  const now = shallowRef<Date>();
  let mounted = false;
  let timer: ReturnType<typeof setInterval> | undefined;
  function clear() {
    if (timer !== undefined) clearInterval(timer);
    timer = undefined;
  }
  function sync() {
    if (!mounted) return;
    clear();
    if (!enabled()) {
      now.value = undefined;
      return;
    }
    now.value = new Date();
    if (!document.hidden)
      timer = setInterval(() => {
        now.value = new Date();
      }, 30000);
  }
  watch(enabled, sync);
  onMounted(() => {
    mounted = true;
    document.addEventListener("visibilitychange", sync);
    sync();
  });
  onScopeDispose(() => {
    clear();
    if (mounted) document.removeEventListener("visibilitychange", sync);
    mounted = false;
  });
  return now;
}
