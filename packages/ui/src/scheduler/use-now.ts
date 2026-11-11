import { onActivated, onDeactivated, onMounted, onScopeDispose, shallowRef, watch } from "vue";

/** Client-only clock: no timer for hidden/unsupported views, refreshed on tab return. */
export function useSchedulerNow(enabled: () => boolean) {
  const now = shallowRef<Date>();
  let mounted = false;
  let active = false;
  let disposed = false;
  let generation = 0;
  let binding = 0;
  let visibility: (() => void) | undefined;
  let ownerDocument: Document | undefined;
  let timer: ReturnType<typeof setInterval> | undefined;
  function clear() {
    generation++;
    if (timer !== undefined) clearInterval(timer);
    timer = undefined;
  }
  function sync() {
    if (!mounted || !active || disposed) return;
    clear();
    const version = generation;
    const current = () => mounted && active && !disposed && version === generation;
    const isEnabled = enabled();
    if (!current()) return;
    if (!isEnabled) {
      now.value = undefined;
      return;
    }
    now.value = new Date();
    if (!current()) return;
    const hidden = ownerDocument?.hidden;
    if (current() && !hidden)
      timer = setInterval(() => {
        if (!current()) return;
        const eligible = enabled() && !ownerDocument?.hidden;
        if (!current() || !eligible) return;
        const value = new Date();
        if (current()) now.value = value;
      }, 30000);
  }
  function resume() {
    if (!mounted || active || disposed) return;
    active = true;
    ownerDocument = document;
    const version = ++binding;
    visibility = () => {
      if (active && !disposed && version === binding) sync();
    };
    ownerDocument.addEventListener("visibilitychange", visibility);
    sync();
  }
  function suspend() {
    active = false;
    binding++;
    clear();
    if (visibility) ownerDocument?.removeEventListener("visibilitychange", visibility);
    visibility = undefined;
    ownerDocument = undefined;
  }
  watch(enabled, sync);
  onMounted(() => {
    mounted = true;
    resume();
  });
  onActivated(resume);
  onDeactivated(suspend);
  onScopeDispose(() => {
    disposed = true;
    suspend();
    mounted = false;
  });
  return now;
}
