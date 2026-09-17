import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Scheduler from "../Scheduler.vue";
import {
  getSchedulerDependencyIssues,
  validateSchedulerEvent,
  getSchedulerCapacityIssues,
  isSchedulerEventInRange,
  layoutSchedulerEvents,
} from "../core";
const events = [
  {
    id: "a",
    title: "A",
    start: "2026-09-22T09:00:00",
    end: "2026-09-22T10:00:00",
    resourceIds: ["r"],
  },
  {
    id: "b",
    title: "B",
    start: "2026-09-22T10:00:00",
    end: "2026-09-22T11:00:00",
    resourceIds: ["r"],
  },
];
const edges = [{ id: "ab", fromId: "a", toId: "b" }];
test("dependencies diagnose cycles, missing endpoints and timing constraints", () => {
  expect(getSchedulerDependencyIssues(events, edges)).toEqual([]);
  expect(
    getSchedulerDependencyIssues(events, [
      ...edges,
      { id: "ba", fromId: "b", toId: "a" },
    ]).some((e) => e.code === "cycle"),
  ).toBe(true);
  expect(
    getSchedulerDependencyIssues(events, [
      { id: "x", fromId: "a", toId: "missing" },
    ])[0].code,
  ).toBe("missing-event");
});
test("dependency validation blocks normal commands that move successors too early", async () => {
  const w = mount(Scheduler, {
    props: { defaultValue: events, dependencies: edges },
  });
  try {
    expect(
      await w.vm.change({
        type: "move",
        event: { ...events[1], start: "2026-09-22T09:00:00" },
      }),
    ).toBe(false);
    expect((w.emitted("change-error")![0][0] as any).code).toBe("dependency");
  } finally {
    w.unmount();
  }
});
test("milestones have zero duration, remain visible at range start and consume no capacity", () => {
  const event = { ...events[0], milestone: true, end: events[0].start };
  expect(() => validateSchedulerEvent(event)).not.toThrow();
  expect(
    getSchedulerCapacityIssues(
      event,
      [],
      [{ id: "r", label: "R", capacity: 0 }],
    ),
  ).toEqual([]);
  expect(
    isSchedulerEventInRange(event, {
      start: new Date(event.start),
      end: new Date(event.start),
    }),
  ).toBe(false);
  expect(
    layoutSchedulerEvents([event], new Date("2026-09-22"), 8, 12),
  ).toHaveLength(1);
});
