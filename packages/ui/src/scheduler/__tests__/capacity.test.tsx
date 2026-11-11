import { test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Scheduler from "../Scheduler.vue";
import {
  getSchedulerResourceLoad as load,
  getSchedulerCapacityIssues as issues,
  SchedulerError,
} from "../core";
import type { SchedulerEvent } from "../core";
const resource = { id: "r", label: "Device", capacity: 2 };
const event = (id: string, start = "09", end = "11"): SchedulerEvent => ({
  id,
  title: id,
  start: `2026-09-15T${start}:00:00`,
  end: `2026-09-15T${end}:00:00`,
  resourceIds: ["r"],
});
const events = [event("a"), event("b", "10", "12")];
test("sweep calculates simultaneous rather than total intersections and uses half-open endpoints", () => {
  const spans = load(events, resource);
  expect(
    spans.map((s) => [
      s.start.getHours(),
      s.end.getHours(),
      s.load,
      s.exceeded,
    ]),
  ).toEqual([
    [9, 10, 1, false],
    [10, 11, 2, false],
    [11, 12, 1, false],
  ]);
  expect(issues(event("c", "11", "12"), events, [resource])).toEqual([]);
  expect(
    issues(
      event("c", "09", "12"),
      [event("a", "09", "10"), event("b", "10", "12")],
      [resource],
    ),
  ).toEqual([]);
  expect(issues(event("c"), events, [resource])[0]).toMatchObject({
    load: 3,
    capacity: 2,
    eventIds: ["a", "b", "c"],
  });
});
test("candidate replacement, duplicate assignments, all-day and unscheduled semantics", () => {
  expect(issues(events[0], events, [resource])).toEqual([]);
  expect(
    load([{ ...events[0], resourceIds: ["r", "r"] }], resource)[0].load,
  ).toBe(1);
  expect(
    load([{ id: "u", title: "Backlog", resourceIds: ["r"] }], resource),
  ).toEqual([]);
  expect(
    load(
      [
        {
          id: "d",
          title: "All day",
          start: "2026-09-15",
          end: "2026-09-16",
          allDay: true,
          resourceIds: ["r"],
        },
      ],
      resource,
    )[0].load,
  ).toBe(1);
  expect(
    issues(event("c"), events, [{ ...resource, capacity: undefined }]),
  ).toEqual([]);
  expect(issues(event("c"), [], [{ ...resource, capacity: 0 }])).toHaveLength(
    1,
  );
});
test("clips load to range, checks each resource, and does not mutate inputs", () => {
  const before = JSON.stringify(events);
  const spans = load(events, resource, {
    start: new Date(2026, 8, 15, 10, 30),
    end: new Date(2026, 8, 15, 11, 30),
  });
  expect(spans.map((s) => s.load)).toEqual([2, 1]);
  expect(spans[0].start.getMinutes()).toBe(30);
  expect(
    issues({ ...event("c"), resourceIds: ["r", "other"] }, events, [
      resource,
      { id: "other", label: "Other", capacity: 0 },
    ]).map((s) => s.resourceId),
  ).toEqual(["r", "other"]);
  spans[0].eventIds.length = 0;
  spans[0].start.setFullYear(2000);
  expect(JSON.stringify(events)).toBe(before);
});
test.each([-1, 1.5, NaN, Infinity])(
  "invalid capacity %s fails closed",
  (capacity) => {
    expect(() => load(events, { ...resource, capacity })).toThrow(
      SchedulerError,
    );
  },
);
test("invalid ranges and duplicate input ids reject", () => {
  expect(() =>
    load(events, resource, { start: new Date(0), end: new Date(0) }),
  ).toThrow();
  expect(() => load([events[0], events[0]], resource)).toThrow();
});
test("overcapacity rejects before persistence, while deletion and atomic replacement work", async () => {
  const hook = vi.fn();
  const w = mount(Scheduler, {
    props: {
      defaultDate: "2026-09-15",
      defaultMode: "agenda",
      defaultValue: events,
      resources: [resource],
      beforeTransaction: hook,
      history: true,
    },
  });
  try {
    expect(await w.vm.change({ type: "create", event: event("c") })).toBe(
      false,
    );
    expect(hook).not.toHaveBeenCalled();
    expect(
      (w.emitted("change-error")![0][0] as SchedulerError).capacityIssues![0]
        .load,
    ).toBe(3);
    expect(w.emitted("update:modelValue")).toBeUndefined();
    expect(
      await w.vm.transaction([
        { type: "remove", event: events[0] },
        { type: "create", event: event("c") },
      ]),
    ).toBe(true);
    expect(await w.vm.undo()).toBe(true);
    await w.setProps({ resources: [{ ...resource, capacity: 1 }] });
    expect(await w.vm.redo()).toBe(false);
    expect(await w.vm.change({ type: "remove", event: events[0] })).toBe(true);
  } finally {
    w.unmount();
  }
});
test("async capacity changes invalidate saved proposals", async () => {
  let release!: () => void;
  const w = mount(Scheduler, {
    props: {
      defaultDate: "2026-09-15",
      defaultMode: "agenda",
      resources: [resource],
      beforeChange: () =>
        new Promise<void>((r) => {
          release = r;
        }),
    },
  });
  try {
    const pending = w.vm.change({ type: "create", event: event("c") });
    await w.setProps({ resources: [{ ...resource, capacity: 0 }] });
    release();
    expect(await pending).toBe(false);
    expect((w.emitted("change-error")![0][0] as SchedulerError).code).toBe(
      "stale",
    );
  } finally {
    w.unmount();
  }
});
test("allowOverlap false remains stricter than resource capacity", async () => {
  const w = mount(Scheduler, {
    props: {
      defaultDate: "2026-09-15",
      defaultMode: "agenda",
      defaultValue: [events[0]],
      resources: [resource],
      allowOverlap: false,
    },
  });
  try {
    expect(await w.vm.change({ type: "create", event: events[1] })).toBe(false);
    expect((w.emitted("change-error")![0][0] as SchedulerError).code).toBe(
      "conflict",
    );
  } finally {
    w.unmount();
  }
});

test("two individually valid creates cannot overbook in one transaction", async () => {
  const hook = vi.fn();
  const w = mount(Scheduler, {
    props: {
      defaultDate: "2026-09-15",
      defaultMode: "agenda",
      defaultValue: [events[0]],
      resources: [resource],
      beforeTransaction: hook,
    },
  });
  try {
    expect(
      await w.vm.transaction([
        { type: "create", event: event("b") },
        { type: "create", event: event("c") },
      ]),
    ).toBe(false);
    expect(hook).not.toHaveBeenCalled();
    expect(w.emitted("update:modelValue")).toBeUndefined();
  } finally {
    w.unmount();
  }
});
test("candidate checks exclude historical overload outside its interval", () => {
  expect(
    issues(event("c", "12", "13"), events, [{ ...resource, capacity: 1 }]),
  ).toEqual([]);
});
