import { describe, expect, test } from "vitest";
import {
  expandSchedulerRecurrences,
  splitSchedulerRecurrence,
  setSchedulerRecurrenceException,
  schedulerDateKey,
} from "../core";
import type { SchedulerRecurringEvent, SchedulerRecurrenceRule } from "../core";
const range = {
  start: new Date("2026-01-01T00:00:00"),
  end: new Date("2027-01-01T00:00:00"),
};
const series = (
  rule: SchedulerRecurrenceRule,
  start = "2026-01-31",
): SchedulerRecurringEvent => ({
  event: {
    id: "calendar",
    title: "Calendar",
    start: `${start}T09:00:00`,
    end: `${start}T10:00:00`,
  },
  rule,
});
const dates = (source: SchedulerRecurringEvent, window = range) =>
  expandSchedulerRecurrences([source], window).map((item) =>
    schedulerDateKey(item.start!),
  );
describe("monthly and yearly recurrence", () => {
  test("31st skips absent dates and count counts actual instances", () => {
    expect(dates(series({ frequency: "monthly", count: 4 }))).toEqual([
      "2026-01-31",
      "2026-03-31",
      "2026-05-31",
      "2026-07-31",
    ]);
  });
  test("last-day overflow recovers 31st after February and supports interval", () => {
    expect(
      dates(series({ frequency: "monthly", overflow: "last-day", count: 4 })),
    ).toEqual(["2026-01-31", "2026-02-28", "2026-03-31", "2026-04-30"]);
    expect(
      dates(
        series({
          frequency: "monthly",
          interval: 2,
          overflow: "last-day",
          count: 3,
        }),
      ),
    ).toEqual(["2026-01-31", "2026-03-31", "2026-05-31"]);
  });
  test("last weekday is the last matching day in the set; single weekday supports nth", () => {
    expect(
      dates(
        series(
          {
            frequency: "monthly",
            weekOfMonth: -1,
            daysOfWeek: [1, 2, 3, 4, 5],
            count: 3,
          },
          "2026-01-01",
        ),
      ),
    ).toEqual(["2026-01-30", "2026-02-27", "2026-03-31"]);
    expect(
      dates(
        series(
          { frequency: "monthly", weekOfMonth: 2, daysOfWeek: [1], count: 3 },
          "2026-01-01",
        ),
      ),
    ).toEqual(["2026-01-12", "2026-02-09", "2026-03-09"]);
  });
  test("fifth weekday skips months where it does not exist", () => {
    expect(
      dates(
        series(
          { frequency: "monthly", weekOfMonth: 5, daysOfWeek: [1], count: 2 },
          "2026-01-01",
        ),
      ),
    ).toEqual(["2026-03-30", "2026-06-29"]);
  });
  test("yearly leap day skips or falls back explicitly, including century rule", () => {
    const window = {
      start: new Date("2096-01-01T00:00:00"),
      end: new Date("2105-01-01T00:00:00"),
    };
    expect(
      dates(series({ frequency: "yearly", count: 3 }, "2096-02-29"), window),
    ).toEqual(["2096-02-29", "2104-02-29"]);
    expect(
      dates(
        series(
          { frequency: "yearly", overflow: "last-day", count: 3 },
          "2096-02-29",
        ),
        window,
      ),
    ).toEqual(["2096-02-29", "2097-02-28", "2098-02-28"]);
  });
  test("yearly month, ordinal and interval anchor to seed year", () => {
    const window = { ...range, end: new Date("2031-01-01T00:00:00") };
    expect(
      dates(
        series(
          {
            frequency: "yearly",
            interval: 2,
            monthOfYear: 11,
            weekOfMonth: 4,
            daysOfWeek: [4],
            count: 3,
          },
          "2026-01-01",
        ),
        window,
      ),
    ).toEqual(["2026-11-26", "2028-11-23", "2030-11-28"]);
  });
  test("monthly split from overflow instance preserves original implicit day", () => {
    const source = series({
      frequency: "monthly",
      overflow: "last-day",
      count: 4,
    });
    const original = expandSchedulerRecurrences([source], range);
    const split = splitSchedulerRecurrence([source], [], original[1], {
      nextEvent: { ...original[1], id: "tail" },
    });
    expect(
      expandSchedulerRecurrences(split.series, range).map((item) =>
        schedulerDateKey(item.start!),
      ),
    ).toEqual(original.map((item) => schedulerDateKey(item.start!)));
    expect(split.series[1].rule.dayOfMonth).toBe(31);
  });
  test("yearly split from non-leap replacement preserves month and leap day", () => {
    const window = {
      start: new Date("2024-01-01T00:00:00"),
      end: new Date("2030-01-01T00:00:00"),
    };
    const source = series(
      { frequency: "yearly", overflow: "last-day", count: 5 },
      "2024-02-29",
    );
    const original = expandSchedulerRecurrences([source], window);
    const split = splitSchedulerRecurrence([source], [], original[1], {
      nextEvent: { ...original[1], id: "tail" },
    });
    expect(
      expandSchedulerRecurrences(split.series, window).map((item) =>
        schedulerDateKey(item.start!),
      ),
    ).toEqual(original.map((item) => schedulerDateKey(item.start!)));
  });
  test("exceptions and until retain existing semantics for calendar rules", () => {
    const source = series({
      frequency: "monthly",
      dayOfMonth: -1,
      until: "2026-03-31T09:00:00",
    });
    const original = expandSchedulerRecurrences([source], range);
    const exceptions = setSchedulerRecurrenceException([], original[1]);
    expect(
      expandSchedulerRecurrences([source], range, { exceptions }).map((item) =>
        schedulerDateKey(item.start!),
      ),
    ).toEqual(["2026-01-31", "2026-03-31"]);
  });
  test("rejects conflicting fields and unsupported selectors", () => {
    for (const rule of [
      { frequency: "monthly", dayOfMonth: 0 },
      { frequency: "monthly", weekOfMonth: 6 },
      { frequency: "monthly", weekOfMonth: 1, dayOfMonth: 2 },
      { frequency: "monthly", daysOfWeek: [1] },
      { frequency: "weekly", dayOfMonth: 1 },
      { frequency: "monthly", monthOfYear: 2 },
      { frequency: "yearly", monthOfYear: 13 },
      { frequency: "monthly", weekOfMonth: -1, overflow: "last-day" },
    ])
      expect(() => dates(series(rule as SchedulerRecurrenceRule))).toThrow();
  });
});
