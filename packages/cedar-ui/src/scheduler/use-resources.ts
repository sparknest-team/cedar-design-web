import { computed, onScopeDispose, shallowRef, watch } from "vue";
import type { SchedulerResource } from "./core";
import type {
  SchedulerResolveResources,
  SchedulerResourceErrorContext,
} from "./props";

/** Instance-local labels, independent of visible rows and search pages. */
export function useSchedulerResources(
  resources: () => SchedulerResource[],
  resolver: () => SchedulerResolveResources | undefined,
  onError: (
    error: unknown,
    context: SchedulerResourceErrorContext,
  ) => void = () => {},
) {
  const cache = shallowRef(new Map<string, SchedulerResource>());
  const attempted = new Set<string>();
  const inFlight = new Set<string>();
  const requests = new Set<AbortController>();
  const error = shallowRef(false);
  let disposed = false;
  let generation = 0;
  function remember(items: SchedulerResource[]) {
    const next = new Map(cache.value);
    for (const item of items) next.set(item.id, { ...item });
    cache.value = next;
  }
  watch(resources, (items) => remember(items), { immediate: true, deep: true });
  const directory = computed(() => {
    const result = new Map(cache.value);
    for (const item of resources()) result.set(item.id, item);
    return result;
  });
  function get(id: string) {
    return directory.value.get(id);
  }
  function abort() {
    generation++;
    requests.forEach((request) => request.abort());
    requests.clear();
    inFlight.clear();
  }
  watch(resolver, () => {
    abort();
    attempted.clear();
    cache.value = new Map();
    error.value = false;
  });
  async function resolve(ids: string[], retry = false) {
    const request = resolver();
    const missing = [...new Set(ids)].filter(
      (id) => !get(id) && !inFlight.has(id) && (retry || !attempted.has(id)),
    );
    if (
      !request ||
      !missing.length ||
      disposed ||
      typeof window === "undefined"
    )
      return;
    const controller = new AbortController();
    const current = generation;
    requests.add(controller);
    missing.forEach((id) => {
      inFlight.add(id);
      attempted.add(id);
    });
    error.value = false;
    try {
      const result = await request([...missing], { signal: controller.signal });
      if (disposed || current !== generation || controller.signal.aborted)
        return;
      // Ignore extra records returned by an endpoint: hydration is not discovery.
      remember(result.filter((item) => missing.includes(item.id)));
    } catch (cause) {
      if (!disposed && current === generation && !controller.signal.aborted) {
        error.value = true;
        onError(cause, { type: "resolve", ids: [...missing] });
      }
    } finally {
      requests.delete(controller);
      if (current === generation) missing.forEach((id) => inFlight.delete(id));
    }
  }
  onScopeDispose(() => {
    disposed = true;
    abort();
  });
  return { directory, get, remember, resolve, error };
}
export type SchedulerResourceStore = ReturnType<typeof useSchedulerResources>;
