import { afterEach, describe, expect, test, vi } from "vitest";
import { effectScope, ref, shallowRef } from "vue";
import { flushPromises } from "@vue/test-utils";
import { useSchedulerDataSource } from "../use-data-source";
import type { SchedulerRequestEvents } from "../use-data-source";
import type { SchedulerEvent } from "../core";

const scopes: ReturnType<typeof effectScope>[] = [];
const range = (day = 9) => ({
  start: new Date(2026, 8, day),
  end: new Date(2026, 8, day + 1),
});
const item = (id = "a"): SchedulerEvent => ({
  id,
  title: id,
  start: new Date(2026, 8, 9, 9),
  end: new Date(2026, 8, 9, 10),
});
function setup(requestEvents: SchedulerRequestEvents, extra = {}) {
  const selectedRange = ref(range());
  const scope = effectScope();
  scopes.push(scope);
  const source = scope.run(() =>
    useSchedulerDataSource({ requestEvents, range: selectedRange, ...extra }),
  )!;
  return { source, selectedRange, scope };
}
function deferred() {
  let resolve!: (events: SchedulerEvent[]) => void;
  let reject!: (cause: unknown) => void;
  const promise = new Promise<SchedulerEvent[]>((yes, no) => {
    resolve = yes;
    reject = no;
  });
  return { promise, resolve, reject };
}
afterEach(() => {
  scopes.splice(0).forEach((scope) => scope.stop());
  vi.useRealTimers();
});
describe("Scheduler range data source", () => {
  test("aborts navigation and ignores late success even when endpoint ignores signal", async () => {
    const a = deferred(),
      b = deferred();
    const request = vi
      .fn<SchedulerRequestEvents>()
      .mockReturnValueOnce(a.promise)
      .mockReturnValueOnce(b.promise);
    const { source, selectedRange } = setup(request);
    selectedRange.value = range(10);
    expect(request.mock.calls[0][0].signal.aborted).toBe(true);
    b.resolve([item("new")]);
    await flushPromises();
    a.resolve([item("old")]);
    await flushPromises();
    expect(source.events.value[0].id).toBe("new");
    expect(source.loadedRange.value).toEqual(range(10));
    expect(source.loading.value).toBe(false);
  });
  test("ignores stale failures without hiding current loading", async () => {
    const a = deferred(),
      b = deferred();
    const request = vi
      .fn<SchedulerRequestEvents>()
      .mockReturnValueOnce(a.promise)
      .mockReturnValueOnce(b.promise);
    const { source, selectedRange } = setup(request);
    selectedRange.value = range(10);
    a.reject(new Error("old"));
    await flushPromises();
    expect(source.error.value).toBeUndefined();
    expect(source.loading.value).toBe(true);
    b.resolve([]);
    await flushPromises();
    expect(source.loading.value).toBe(false);
  });
  test("caches normalized resource scope and expires entries", async () => {
    vi.useFakeTimers();
    const resourceIds = ref(["b", "a", "a"]);
    const request = vi.fn<SchedulerRequestEvents>().mockResolvedValue([item()]);
    const { source, selectedRange } = setup(request, {
      resourceIds,
      cacheTime: 100,
    });
    await flushPromises();
    resourceIds.value = ["a", "b"];
    expect(request).toHaveBeenCalledTimes(1);
    expect(request.mock.calls[0][0].resourceIds).toEqual(["a", "b"]);
    selectedRange.value = range(10);
    await flushPromises();
    selectedRange.value = range();
    expect(request).toHaveBeenCalledTimes(2);
    expect(source.events.value).toHaveLength(1);
    vi.advanceTimersByTime(101);
    selectedRange.value = range(10);
    await flushPromises();
    expect(request).toHaveBeenCalledTimes(3);
  });
  test("evicts least recently used ranges", async () => {
    const request = vi.fn<SchedulerRequestEvents>().mockResolvedValue([]);
    const { selectedRange } = setup(request, { maxCacheEntries: 2 });
    await flushPromises();
    for (const day of [10, 9, 11, 10]) {
      selectedRange.value = range(day);
      await flushPromises();
    }
    expect(request).toHaveBeenCalledTimes(4);
  });
  test("reports failures, retries and rejects duplicate or malformed responses atomically", async () => {
    const request = vi
      .fn<SchedulerRequestEvents>()
      .mockRejectedValueOnce(new Error("offline"))
      .mockResolvedValueOnce([item(), item()])
      .mockResolvedValueOnce([item("ok")]);
    const { source } = setup(request);
    await flushPromises();
    expect(source.error.value).toBeInstanceOf(Error);
    expect(await source.refresh()).toBe(false);
    expect(source.events.value).toEqual([]);
    expect(await source.refresh()).toBe(true);
    expect(source.error.value).toBeUndefined();
    expect(source.events.value[0].id).toBe("ok");
  });
  test("local edits invalidate overlapping caches and cancel stale refresh", async () => {
    const pending = deferred();
    const request = vi.fn<SchedulerRequestEvents>().mockResolvedValue([item()]);
    const { source, selectedRange } = setup(request);
    await flushPromises();
    source.events.value[0].title = "edited";
    selectedRange.value = range(10);
    await flushPromises();
    selectedRange.value = range();
    await flushPromises();
    expect(request).toHaveBeenCalledTimes(3);
    request.mockReturnValueOnce(pending.promise);
    const refresh = source.refresh();
    source.events.value = [item("local")];
    pending.resolve([item("stale")]);
    expect(await refresh).toBe(false);
    expect(source.events.value[0].id).toBe("local");
  });
  test("detaches incoming dates and arrays from caller and cache", async () => {
    const original = item();
    const request = vi
      .fn<SchedulerRequestEvents>()
      .mockResolvedValue([original]);
    const { source, selectedRange } = setup(request);
    await flushPromises();
    (original.start as Date).setFullYear(2000);
    original.title = "changed outside";
    selectedRange.value = range(10);
    await flushPromises();
    selectedRange.value = range();
    expect((source.events.value[0].start as Date).getFullYear()).toBe(2026);
    expect(source.events.value[0].title).toBe("a");
  });
  test("disabling and disposal abort pending work; enabling reloads", async () => {
    const enabled = ref(true);
    const pending = deferred();
    const request = vi
      .fn<SchedulerRequestEvents>()
      .mockReturnValue(pending.promise);
    const { source, scope } = setup(request, { enabled });
    enabled.value = false;
    expect(request.mock.calls[0][0].signal.aborted).toBe(true);
    expect(source.events.value).toEqual([]);
    enabled.value = true;
    expect(request).toHaveBeenCalledTimes(2);
    scope.stop();
    expect(request.mock.calls[1][0].signal.aborted).toBe(true);
    pending.resolve([item()]);
    await flushPromises();
    expect(source.events.value).toEqual([]);
  });
  test("source replacement invalidates cache; invalid ranges do not reach endpoint", async () => {
    const requestEvents = shallowRef<SchedulerRequestEvents>(
      vi.fn().mockResolvedValue([item()]),
    );
    const { source, selectedRange } = setup(requestEvents.value, {
      requestEvents,
    });
    await flushPromises();
    requestEvents.value = vi.fn().mockResolvedValue([item("other")]);
    await flushPromises();
    expect(source.events.value[0].id).toBe("other");
    selectedRange.value = { start: new Date(NaN), end: new Date() };
    expect(source.error.value).toBeInstanceOf(Error);
    expect(requestEvents.value).toHaveBeenCalledTimes(1);
  });
});
