import { afterEach, describe, expect, test, vi } from "vitest";
import { h, nextTick, ref } from "vue";
import { flushPromises, mount } from "@vue/test-utils";
import Scheduler from "../scheduler.vue";
import Editor from "../components/scheduler-editor.vue";
import ResourceSelect from "../components/scheduler-resource-select.vue";
import CSelect from "../../select";
import { useSchedulerResources } from "../use-resources";
import { schedulerMessages } from "../locale";
import type { SchedulerResource, SchedulerEvent } from "../core";

const wrappers: ReturnType<typeof mount>[] = [];
function keep<T extends ReturnType<typeof mount>>(wrapper: T): T {
  wrappers.push(wrapper);
  return wrapper;
}
function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (error: unknown) => void;
  const promise = new Promise<T>((yes, no) => {
    resolve = yes;
    reject = no;
  });
  return { promise, resolve, reject };
}
const event: SchedulerEvent = {
  id: "job",
  title: "Inspection",
  start: "2026-09-09T09:00:00",
  end: "2026-09-09T10:00:00",
  resourceIds: ["remote-42"],
};
function scheduler(props = {}) {
  return keep(
    mount(Scheduler, {
      props: {
        defaultMode: "agenda",
        defaultDate: "2026-09-09",
        defaultValue: [event],
        ...props,
      },
    }),
  );
}
afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
  document.body.innerHTML = "";
});

describe("Scheduler resource directory", () => {
  test("hydrates IDs without requiring visible resources or modifying IDs", async () => {
    const response = deferred<SchedulerResource[]>();
    const resolveResources = vi.fn(
      (_ids: string[], _context: { signal: AbortSignal }) => response.promise,
    );
    const wrapper = scheduler({ resolveResources });
    expect(wrapper.text()).toContain("remote-42");
    expect(resolveResources.mock.calls[0][0]).toEqual(["remote-42"]);
    await wrapper.get(".c-scheduler__event-button").trigger("click");
    expect(resolveResources).toHaveBeenCalledTimes(1);
    response.resolve([{ id: "remote-42", label: "Laser cutter" }]);
    await flushPromises();
    expect(wrapper.text()).toContain("Laser cutter");
    const editor = wrapper.getComponent(Editor);
    const picker = editor.getComponent(ResourceSelect).getComponent(CSelect);
    expect(picker.props("options")).toEqual([
      { value: "remote-42", label: "Laser cutter", disabled: undefined },
    ]);
    expect(editor.props("event").resourceIds).toEqual(["remote-42"]);
    expect(wrapper.emitted("change")).toBeUndefined();
    await wrapper.setProps({ mode: "resource-day" });
    expect(wrapper.findAll(".c-scheduler__time-column")).toHaveLength(0);
  });
  test("missing directory IDs can save and partial labels fall back to IDs", async () => {
    const wrapper = scheduler({ resolveResources: () => [] });
    await flushPromises();
    expect(wrapper.text()).toContain("remote-42");
    expect(
      await wrapper.vm.change({
        type: "update",
        event: { ...event, title: "Changed" },
      }),
    ).toBe(true);
    expect(
      (wrapper.emitted("update:modelValue")![0][0] as SchedulerEvent[])[0]
        .resourceIds,
    ).toEqual(["remote-42"]);
  });
  test("directory pages and labels do not cancel pending saves", async () => {
    const response = deferred<boolean>();
    const wrapper = scheduler({ beforeChange: () => response.promise });
    const saving = wrapper.vm.change({
      type: "update",
      event: { ...event, title: "Changed" },
    });
    await wrapper.setProps({ resources: [{ id: "other", label: "Page 2" }] });
    response.resolve(true);
    expect(await saving).toBe(true);
  });
  test("newly disabled assignments invalidate a pending save", async () => {
    const response = deferred<boolean>();
    const wrapper = scheduler({ beforeChange: () => response.promise });
    const saving = wrapper.vm.change({
      type: "update",
      event: { ...event, resourceIds: ["new"] },
    });
    await wrapper.setProps({
      resources: [{ id: "new", label: "Offline", disabled: true }],
    });
    response.resolve(true);
    expect(await saving).toBe(false);
    expect(wrapper.emitted("change-error")?.[0][0]).toMatchObject({
      code: "stale",
    });
  });
  test("no-resource plans hide directory fields", async () => {
    const wrapper = scheduler({
      defaultValue: [{ ...event, resourceIds: [] }],
    });
    expect(wrapper.findComponent(ResourceSelect).exists()).toBe(false);
    await wrapper.get(".c-scheduler__event-button").trigger("click");
    expect(wrapper.findComponent(ResourceSelect).exists()).toBe(false);
  });
  test("hydrate errors retry, and unmount aborts requests", async () => {
    const resolver = vi
      .fn()
      .mockRejectedValueOnce(new Error("offline"))
      .mockResolvedValue([{ id: "remote-42", label: "Recovered" }]);
    const wrapper = scheduler({ resolveResources: resolver });
    await flushPromises();
    expect(wrapper.emitted("resource-error")?.[0][1]).toMatchObject({
      type: "resolve",
      ids: ["remote-42"],
    });
    await wrapper.get(".c-alert button").trigger("click");
    await flushPromises();
    expect(wrapper.text()).toContain("Recovered");
    const pending = deferred<SchedulerResource[]>();
    let signal!: AbortSignal;
    await wrapper.setProps({
      resolveResources: (_ids: string[], context: { signal: AbortSignal }) => {
        signal = context.signal;
        return pending.promise;
      },
    });
    wrapper.unmount();
    expect(signal.aborted).toBe(true);
    pending.resolve([{ id: "remote-42", label: "Too late" }]);
    await flushPromises();
  });
});

describe("Scheduler remote resource picker", () => {
  function picker(request: any) {
    const selected = ref(["selected"]);
    return keep(
      mount({
        setup() {
          const store = useSchedulerResources(
            () => [{ id: "selected", label: "Selected device" }],
            () => undefined,
          );
          return () =>
            h(ResourceSelect, {
              resources: [],
              store,
              request,
              modelValue: selected.value,
              "onUpdate:modelValue": (ids: string[]) => {
                selected.value = ids;
              },
              label: "Devices",
              messages: schedulerMessages["zh-CN"],
            });
        },
      }),
    );
  }
  test("ignores out-of-order search results and keeps selected labels across pages", async () => {
    const first = deferred<any>();
    const second = deferred<any>();
    const request = vi
      .fn()
      .mockReturnValueOnce(first.promise)
      .mockReturnValueOnce(second.promise)
      .mockResolvedValue({
        items: [
          { id: "b", label: "B updated" },
          { id: "c", label: "C" },
        ],
      });
    const wrapper = picker(request);
    const select = wrapper.getComponent(CSelect);
    select.vm.$emit("search", "old");
    select.vm.$emit("search", "new");
    expect(request.mock.calls[0][0].signal.aborted).toBe(true);
    second.resolve({ items: [{ id: "b", label: "B" }], nextCursor: "2" });
    await flushPromises();
    first.resolve({ items: [{ id: "a", label: "Stale" }] });
    await flushPromises();
    expect(select.props("options")?.map((item: any) => item.value)).toEqual([
      "b",
      "selected",
    ]);
    select.vm.$emit("dropdown-reach-bottom", new Event("scroll"));
    await flushPromises();
    expect(request.mock.calls[2][0]).toMatchObject({
      query: "new",
      cursor: "2",
    });
    expect(select.props("options")?.map((item: any) => item.value)).toEqual([
      "b",
      "c",
      "selected",
    ]);
  });
  test("search errors are surfaced and opening retries", async () => {
    const request = vi
      .fn()
      .mockRejectedValueOnce(new Error("offline"))
      .mockResolvedValue({ items: [] });
    const wrapper = picker(request);
    const select = wrapper.getComponent(CSelect);
    select.vm.$emit("open-change", true);
    await flushPromises();
    expect(
      wrapper.getComponent(ResourceSelect).emitted("error")?.[0][1],
    ).toMatchObject({ type: "search", query: "" });
    select.vm.$emit("open-change", true);
    await flushPromises();
    expect(request).toHaveBeenCalledTimes(2);
    expect(select.props("loading")).toBe(false);
    await nextTick();
  });
});
