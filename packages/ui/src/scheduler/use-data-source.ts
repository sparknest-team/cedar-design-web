import {
  computed,
  onScopeDispose,
  ref,
  shallowRef,
  unref,
  watch,
} from "vue";
import type { Ref } from "vue";
import type { CompatibleMaybeRef as MaybeRef, CompatibleMaybeRefOrGetter as MaybeRefOrGetter } from '../_utils/maybe-ref'
import { resolveMaybeRefOrGetter as toValue } from '../_utils/maybe-ref'
import type { CompatibleShallowRef } from '../_utils/compatible-shallow-ref'
import { cloneSchedulerEvent, validateSchedulerEvent } from "./core";
import type { SchedulerEvent, SchedulerRange } from "./core";

export interface SchedulerEventQuery extends SchedulerRange {
  resourceIds: string[];
  signal: AbortSignal;
}
export type SchedulerRequestEvents = (
  query: SchedulerEventQuery,
) => SchedulerEvent[] | Promise<SchedulerEvent[]>;
export interface SchedulerDataSourceOptions {
  requestEvents: MaybeRef<SchedulerRequestEvents>;
  range: MaybeRefOrGetter<SchedulerRange | undefined>;
  resourceIds?: MaybeRefOrGetter<string[]>;
  enabled?: MaybeRefOrGetter<boolean>;
  /** Cache lifetime in milliseconds. Zero disables caching. */
  cacheTime?: number;
  maxCacheEntries?: number;
}

export interface SchedulerDataSource {
  events: Ref<SchedulerEvent[]>;
  loading: CompatibleShallowRef<boolean>;
  error: CompatibleShallowRef<unknown>;
  loadedRange: CompatibleShallowRef<SchedulerRange | undefined>;
  refresh: () => Promise<boolean>;
  cancel: () => void;
  invalidate: () => void;
}

/** Range loading only; persistence remains owned by the application. */
export function useSchedulerDataSource(options: SchedulerDataSourceOptions): SchedulerDataSource {
  const events = ref<SchedulerEvent[]>([]);
  const loading: CompatibleShallowRef<boolean> = shallowRef(false);
  const error: CompatibleShallowRef<unknown> = shallowRef<unknown>();
  const loadedRange: CompatibleShallowRef<SchedulerRange | undefined> = shallowRef<SchedulerRange>();
  const cache = new Map<
    string,
    { expires: number; events: SchedulerEvent[] }
  >();
  const cacheTime = Math.max(0, options.cacheTime ?? 30_000);
  const maxEntries = Math.max(0, Math.floor(options.maxCacheEntries ?? 20));
  let controller: AbortController | undefined;
  let generation = 0;
  let disposed = false;
  let publishing = false;
  const copy = (items: SchedulerEvent[]) => items.map(cloneSchedulerEvent);
  const query = computed(() => {
    const range = toValue(options.range);
    if (!range || !(toValue(options.enabled) ?? true)) return undefined;
    return {
      start: +range.start,
      end: +range.end,
      resourceIds: [...new Set(toValue(options.resourceIds) ?? [])].sort(),
    };
  });
  const key = computed(() =>
    query.value ? JSON.stringify(query.value) : undefined,
  );
  function cancel() {
    generation++;
    controller?.abort();
    controller = undefined;
    loading.value = false;
  }
  function invalidate() {
    cache.clear();
  }
  function publish(items: SchedulerEvent[], range?: SchedulerRange) {
    publishing = true;
    try {
      events.value = copy(items);
      loadedRange.value = range;
    } finally {
      publishing = false;
    }
  }
  // Both v-model replacement and in-place edits invalidate all overlapping windows.
  watch(
    events,
    () => {
      if (!publishing) {
        invalidate();
        cancel();
      }
    },
    { deep: true, flush: "sync" },
  );

  async function load(force = false): Promise<boolean> {
    cancel();
    error.value = undefined;
    const current = generation;
    const scope = query.value;
    const cacheKey = key.value;
    if (disposed || typeof window === "undefined") return false;
    if (!scope || !cacheKey) {
      publish([]);
      return false;
    }
    const range = { start: new Date(scope.start), end: new Date(scope.end) };
    publish([]);
    if (
      !Number.isFinite(scope.start) ||
      !Number.isFinite(scope.end) ||
      scope.end <= scope.start
    ) {
      error.value = new Error("Scheduler query end must be after start");
      return false;
    }
    if (force) cache.delete(cacheKey);
    const cached = cache.get(cacheKey);
    if (cached && cached.expires > Date.now()) {
      cache.delete(cacheKey);
      cache.set(cacheKey, cached);
      publish(cached.events, range);
      return true;
    }
    cache.delete(cacheKey);
    const request = new AbortController();
    controller = request;
    loading.value = true;
    try {
      const result = await unref(options.requestEvents)({
        start: new Date(range.start),
        end: new Date(range.end),
        resourceIds: [...scope.resourceIds],
        signal: request.signal,
      });
      if (disposed || current !== generation || request.signal.aborted)
        return false;
      if (!Array.isArray(result))
        throw new Error("Scheduler response must be an event array");
      const ids = new Set<string>();
      for (const event of result) {
        validateSchedulerEvent(event);
        if (ids.has(event.id))
          throw new Error(`Duplicate Scheduler event id: ${event.id}`);
        ids.add(event.id);
      }
      const snapshot = copy(result);
      if (cacheTime > 0 && maxEntries > 0) {
        cache.set(cacheKey, {
          expires: Date.now() + cacheTime,
          events: snapshot,
        });
        while (cache.size > maxEntries)
          cache.delete(cache.keys().next().value!);
      }
      publish(snapshot, range);
      return true;
    } catch (cause) {
      if (!disposed && current === generation && !request.signal.aborted)
        error.value = cause;
      return false;
    } finally {
      if (current === generation) {
        loading.value = false;
        controller = undefined;
      }
    }
  }
  watch(
    [key, () => unref(options.requestEvents)],
    ([, request], previous) => {
      if (previous && previous[1] !== request) invalidate();
      void load();
    },
    { immediate: true, flush: "sync" },
  );
  onScopeDispose(() => {
    disposed = true;
    cancel();
    invalidate();
  });
  return {
    events,
    loading,
    error,
    loadedRange,
    refresh: () => load(true),
    cancel,
    invalidate,
  };
}
