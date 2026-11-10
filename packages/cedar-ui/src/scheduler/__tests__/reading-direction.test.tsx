import { afterEach, describe, expect, test, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Scheduler from "../Scheduler.vue";
import { schedulerPointerFraction, schedulerTimeEdge } from "../coordinates";
import { createSchedulerTimeAxis } from "../core/time-axis";
const owners: ReturnType<typeof mount>[] = [];
afterEach(() => {
  owners.splice(0).forEach(owner => owner.unmount());
  document.body.removeAttribute("dir");
  vi.restoreAllMocks();
});
const rect = { left: 10, right: 110, top: 20, width: 100, height: 200 };
describe.each(["ltr", "rtl"] as const)("Scheduler %s coordinates", direction => {
  test("horizontal time and semantic dependency edges agree", () => {
    const x = direction === "rtl" ? 85 : 35;
    expect(schedulerPointerFraction(rect, x, 70, true, direction)).toBe(.25);
    expect(schedulerPointerFraction(rect, x, 70, false, direction)).toBe(.25);
    expect(schedulerPointerFraction({ ...rect, width: 0 }, x, 0, true, direction)).toBe(0);
    expect(schedulerTimeEdge(rect, "start", direction)).toBe(direction === "rtl" ? 110 : 10);
    expect(schedulerTimeEdge(rect, "finish", direction)).toBe(direction === "rtl" ? 10 : 110);
    const axis = createSchedulerTimeAxis({ start: new Date("2026-09-22T08:00:00"), end: new Date("2026-09-22T12:00:00") });
    expect(axis.dateAt(schedulerPointerFraction(rect, x, 0, true, direction)).getHours()).toBe(9);
  });
  test("timeline drag snaps from reading start and keeps event duration", async () => {
    document.body.dir = direction;
    const owner = mount(Scheduler, { attachTo: document.body, props: {
      defaultDate: "2026-09-22", defaultMode: "resource-timeline", defaultScale: "hour", snapDuration: 15,
      resources: [{ id: "r", label: "Resource" }],
      defaultValue: [{ id: "e", title: "Meeting", start: "2026-09-22T09:00:00", end: "2026-09-22T10:00:00", resourceIds: ["r"] }],
    } });
    owners.push(owner); await flushPromises();
    const target = owner.findAll('[data-scheduler-axis="horizontal"]').find(cell => new Date(cell.attributes("data-scheduler-date")).getHours() === 11)!;
    vi.spyOn(target.element, "getBoundingClientRect").mockReturnValue(rect as DOMRect);
    const original = document.elementsFromPoint;
    Object.defineProperty(document, "elementsFromPoint", { configurable: true, value: () => [target.element] });
    try {
      expect(owner.get(".c-scheduler__timeline-event").attributes("style")).toContain("inset-inline-start");
      expect(owner.findAll(".c-scheduler__resize")).toHaveLength(2);
      await owner.get(".c-scheduler__timeline-event .c-scheduler__event").trigger("pointerdown", { button: 0, clientX: 0, clientY: 0 });
      const x = direction === "rtl" ? 85 : 35;
      document.dispatchEvent(new MouseEvent("pointermove", { clientX: x, clientY: 70, bubbles: true }));
      await flushPromises();
      expect(document.querySelector(".c-scheduler__drag-ghost")?.getAttribute("dir")).toBe(direction);
      document.dispatchEvent(new MouseEvent("pointerup", { clientX: x, clientY: 70, bubbles: true }));
      await flushPromises();
      const result = (owner.emitted("update:modelValue")![0][0] as any[])[0];
      expect(new Date(result.start).getHours()).toBe(11);
      expect(new Date(result.start).getMinutes()).toBe(15);
      expect(+new Date(result.end) - +new Date(result.start)).toBe(3600000);
      expect(result.resourceIds).toEqual(["r"]);
      await owner.get(".c-scheduler__timeline-event .c-scheduler__event").trigger("pointerdown", { button: 0, clientX: 0, clientY: 0 });
      document.dispatchEvent(new MouseEvent("pointermove", { clientX: x, clientY: 70, bubbles: true }));
      await flushPromises();
      document.body.dir = direction === "rtl" ? "ltr" : "rtl";
      await flushPromises();
      expect(document.querySelector(".c-scheduler__drag-ghost")).toBeNull();
      document.dispatchEvent(new MouseEvent("pointerup", { clientX: x, clientY: 70, bubbles: true }));
      await flushPromises();
      expect(owner.emitted("update:modelValue")).toHaveLength(1);
    } finally {
      Object.defineProperty(document, "elementsFromPoint", { configurable: true, value: original });
    }
  });
});

test("queued timeline zoom and positioning release their frames on unmount", async () => {
  const callbacks = new Map<number, FrameRequestCallback>();
  let sequence = 0;
  vi.spyOn(window, "requestAnimationFrame").mockImplementation(callback => {
    callbacks.set(++sequence, callback);
    return sequence;
  });
  const cancel = vi.spyOn(window, "cancelAnimationFrame").mockImplementation(id => { callbacks.delete(id); });
  const owner = mount(Scheduler, { attachTo: document.body, props: {
    defaultDate: "2026-09-22", defaultMode: "resource-timeline", defaultScale: "hour",
    zoom: 1, resources: [{ id: "r", label: "Resource" }],
  } });
  await flushPromises();
  await owner.setProps({ zoom: 2 });
  await flushPromises();
  const retained = [...callbacks.values()];
  expect(retained.length).toBeGreaterThan(0);
  owner.unmount();
  expect(cancel).toHaveBeenCalled();
  expect(callbacks.size).toBe(0);
  retained.forEach(callback => callback(0));
  expect(document.querySelector(".c-scheduler")).toBeNull();
});

test("a stale timeline positioning callback cannot discard the current frame", async () => {
  const callbacks = new Map<number, FrameRequestCallback>();
  let sequence = 0;
  const view = document.defaultView!;
  vi.spyOn(view, "requestAnimationFrame").mockImplementation(callback => { callbacks.set(++sequence, callback); return sequence; });
  const cancel = vi.spyOn(view, "cancelAnimationFrame").mockImplementation(id => { callbacks.delete(id); });
  const owner = mount(Scheduler, { attachTo: document.body, props: {
    defaultDate: "2026-09-22", defaultMode: "resource-timeline", scale: "hour", resources: [{ id: "r", label: "Resource" }],
  } });
  owners.push(owner);
  await flushPromises();
  const previous = [...callbacks.values()].at(-1)!;
  expect(previous).toBeTypeOf("function");
  await owner.setProps({ scale: "day" });
  await flushPromises();
  const current = [...callbacks.keys()].at(-1)!;
  expect(current).toBeGreaterThan(0);
  previous(0);
  owner.unmount(); owners.splice(owners.indexOf(owner), 1);
  expect(cancel).toHaveBeenCalledWith(current);
});
