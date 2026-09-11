import { describe, expect, test } from "vitest";
import {
  addSchedulerDays,
  applySchedulerChange,
  getSchedulerConflicts,
  getSchedulerDays,
  getSchedulerRange,
  layoutSchedulerEvents,
  layoutSchedulerTimeline,
  moveSchedulerEvent,
  navigateSchedulerDate,
  schedulerDate,
  schedulerDateKey,
  validateSchedulerEvent,
} from "../core";
import type { SchedulerEvent } from "../core";

const event = (
  id: string,
  start = "2026-09-09T09:00:00",
  end = "2026-09-09T10:00:00",
  resourceIds = ["a"],
): SchedulerEvent => ({ id, title: id, start, end, resourceIds });
describe("scheduler-core", () => {
  test("local date-only parsing and invalid calendar dates", () => {
    expect(schedulerDate("2026-09-09").getHours()).toBe(0);
    expect(Number.isNaN(+schedulerDate("2026-02-30"))).toBe(true);
    expect(schedulerDateKey(schedulerDate("2026-09-09"))).toBe("2026-09-09");
  });
  test("week boundaries and configurable first weekday", () => {
    const range = getSchedulerRange("2026-09-09", "week");
    expect(schedulerDateKey(range.start)).toBe("2026-09-07");
    expect(schedulerDateKey(range.end)).toBe("2026-09-14");
    expect(
      schedulerDateKey(getSchedulerRange("2026-09-09", "week", 0).start),
    ).toBe("2026-09-06");
  });
  test("month grid spans 42 local days", () => {
    const days = getSchedulerDays(getSchedulerRange("2026-02-15", "month"));
    expect(days).toHaveLength(42);
    expect(schedulerDateKey(days[0])).toBe("2026-01-26");
  });
  test("month navigation clamps Jan 31 and handles leap years", () => {
    expect(
      schedulerDateKey(navigateSchedulerDate("2026-01-31", "month", 1)),
    ).toBe("2026-02-28");
    expect(
      schedulerDateKey(navigateSchedulerDate("2024-01-31", "month", 1)),
    ).toBe("2024-02-29");
    expect(
      schedulerDateKey(navigateSchedulerDate("2026-09-09", "resource-day", 1)),
    ).toBe("2026-09-10");
  });
  test("unscheduled items are valid, partial/invalid dates and blank titles are rejected", () => {
    expect(() =>
      validateSchedulerEvent({ id: "a", title: "Plan" }),
    ).not.toThrow();
    for (const item of [
      { id: "a", title: "" },
      { ...event("a"), end: undefined },
      event("a", "bad"),
      event("a", "2026-09-09T10:00:00"),
    ]) {
      expect(() => validateSchedulerEvent(item)).toThrow();
    }
    expect(() =>
      validateSchedulerEvent({ ...event("a"), allDay: true }),
    ).toThrow();
  });
  test("immutable create update remove and duplicate/missing/readonly guards", () => {
    const initial = [event("a")];
    const created = applySchedulerChange(initial, {
      type: "create",
      event: event("b"),
    });
    expect(initial).toHaveLength(1);
    expect(created).toHaveLength(2);
    const updated = applySchedulerChange(created, {
      type: "update",
      event: { ...created[0], title: "New" },
    });
    expect(created[0].title).toBe("a");
    expect(updated[0].title).toBe("New");
    expect(
      applySchedulerChange(updated, { type: "remove", event: updated[0] }),
    ).toHaveLength(1);
    expect(() =>
      applySchedulerChange(initial, { type: "create", event: event("a") }),
    ).toThrow();
    expect(() =>
      applySchedulerChange(initial, { type: "remove", event: event("b") }),
    ).toThrow();
    expect(() =>
      applySchedulerChange([{ ...event("a"), readonly: true }], {
        type: "update",
        event: event("a"),
      }),
    ).toThrow();
  });
  test("adjacent tasks do not conflict; shared resources do", () => {
    expect(
      getSchedulerConflicts(event("a"), [
        event("b", "2026-09-09T10:00:00", "2026-09-09T11:00:00"),
      ]),
    ).toEqual([]);
    expect(getSchedulerConflicts(event("a"), [event("b")])).toEqual([
      { eventId: "b", resourceIds: ["a"] },
    ]);
    expect(
      getSchedulerConflicts(event("a"), [
        event("b", undefined, undefined, ["b"]),
      ]),
    ).toEqual([]);
  });
  test("moving one assignment preserves the others and deduplicates", () => {
    const original = event("a", undefined, undefined, ["a", "b"]);
    original.metadata = { orderId: "order-1" };
    const moved = moveSchedulerEvent(original, "2026-09-10T11:00:00", "a", "c");
    expect(moved.resourceIds).toEqual(["b", "c"]);
    expect(moved.metadata).toEqual({ orderId: "order-1" });
    expect(moved.metadata).not.toBe(original.metadata);
    expect(original.resourceIds).toEqual(["a", "b"]);
    expect(+schedulerDate(moved.end!) - +schedulerDate(moved.start!)).toBe(
      3600000,
    );
    expect(
      moveSchedulerEvent(original, "2026-09-10", "a", "b").resourceIds,
    ).toEqual(["b"]);
  });
  test("all-day movement preserves date duration across DST", () => {
    const moved = moveSchedulerEvent(
      {
        id: "a",
        title: "Trip",
        allDay: true,
        start: "2026-03-07",
        end: "2026-03-10",
      },
      "2026-03-15",
    );
    expect(moved.start).toBe("2026-03-15");
    expect(moved.end).toBe("2026-03-18");
    expect(schedulerDateKey(addSchedulerDays("2026-03-08", 1))).toBe(
      "2026-03-09",
    );
  });
  test("unscheduled items get a one-hour duration", () => {
    const moved = moveSchedulerEvent(
      { id: "u", title: "Todo" },
      "2026-09-09T09:00:00",
      undefined,
      "b",
    );
    expect(moved.resourceIds).toEqual(["b"]);
    expect(+schedulerDate(moved.end!) - +schedulerDate(moved.start!)).toBe(
      3600000,
    );
  });
  test("overlap packing uses independent groups and clips cross-midnight events", () => {
    const items = layoutSchedulerEvents(
      [
        event("a"),
        event("b", "2026-09-09T09:30:00", "2026-09-09T10:30:00"),
        event("c", "2026-09-09T11:00:00", "2026-09-09T12:00:00"),
        event("d", "2026-09-08T23:00:00", "2026-09-09T08:30:00"),
      ],
      schedulerDate("2026-09-09"),
      8,
      20,
    );
    expect(items.find((item) => item.event.id === "a")?.columns).toBe(2);
    expect(items.find((item) => item.event.id === "b")?.column).toBe(1);
    expect(items.find((item) => item.event.id === "c")?.columns).toBe(1);
    expect(items.find((item) => item.event.id === "d")?.start).toBe(480);
  });
  test("timeline clips boundaries and separates overlapping lanes", () => {
    const range = getSchedulerRange("2026-09-09", "week");
    const items = layoutSchedulerTimeline(
      [event("a", "2026-09-01", "2026-09-20"), event("b")],
      range,
    );
    expect(items[0].start).toBe(0);
    expect(items[0].end).toBe(1);
    expect(items[1].column).toBe(1);
    expect(items[0].columns).toBe(2);
  });
});
