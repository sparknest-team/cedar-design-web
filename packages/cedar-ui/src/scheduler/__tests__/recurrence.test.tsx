import { describe, expect, test } from "vitest";
import {
  expandSchedulerRecurrences,
  setSchedulerRecurrenceException,
  schedulerDateKey,
} from "../core";
import type { SchedulerRecurringEvent, SchedulerRange } from "../core";
const range = (start = "2026-09-01", end = "2026-10-01"): SchedulerRange => ({
  start: new Date(`${start}T00:00:00`),
  end: new Date(`${end}T00:00:00`),
});
const daily = (): SchedulerRecurringEvent => ({
  event: {
    id: "series",
    title: "Standup",
    start: "2026-09-07T09:00:00",
    end: "2026-09-07T10:00:00",
    resourceIds: ["a"],
  },
  rule: { frequency: "daily", count: 5 },
});
const dates = (items: ReturnType<typeof expandSchedulerRecurrences>) =>
  items.map((item) => schedulerDateKey(item.start!));
describe("Scheduler recurrence", () => {
  test("daily interval and count use the whole series, not each visible window", () => {
    const series = daily();
    series.rule.interval = 2;
    expect(dates(expandSchedulerRecurrences([series], range()))).toEqual([
      "2026-09-07",
      "2026-09-09",
      "2026-09-11",
      "2026-09-13",
      "2026-09-15",
    ]);
    expect(
      dates(
        expandSchedulerRecurrences([series], range("2026-09-10", "2026-09-15")),
      ),
    ).toEqual(["2026-09-11", "2026-09-13"]);
  });
  test("weekly interval uses Monday boundaries and weekday count", () => {
    const series = daily();
    series.rule = {
      frequency: "weekly",
      interval: 2,
      daysOfWeek: [1, 3, 5],
      count: 5,
    };
    expect(dates(expandSchedulerRecurrences([series], range()))).toEqual([
      "2026-09-07",
      "2026-09-09",
      "2026-09-11",
      "2026-09-21",
      "2026-09-23",
    ]);
  });
  test("until is inclusive while visible end is exclusive", () => {
    const series = daily();
    series.rule = { frequency: "daily", until: "2026-09-09T09:00:00" };
    expect(expandSchedulerRecurrences([series], range())).toHaveLength(3);
    expect(
      expandSchedulerRecurrences([series], {
        start: new Date("2026-09-09T10:00:00"),
        end: new Date("2026-09-10T00:00:00"),
      }),
    ).toEqual([]);
  });
  test("includes long events starting before window and keeps full dates", () => {
    const series = daily();
    series.event.end = "2026-09-09T10:00:00";
    series.rule.count = 1;
    const items = expandSchedulerRecurrences(
      [series],
      range("2026-09-09", "2026-09-10"),
    );
    expect(items).toHaveLength(1);
    expect(schedulerDateKey(items[0].start!)).toBe("2026-09-07");
  });
  test("all-day instances preserve date strings and exclusive duration across months", () => {
    const series = daily();
    series.event = {
      id: "holiday",
      title: "Holiday",
      allDay: true,
      start: "2026-08-31",
      end: "2026-09-02",
    };
    series.rule.count = 2;
    const items = expandSchedulerRecurrences([series], range());
    expect(items.map(({ start, end }) => [start, end])).toEqual([
      ["2026-08-31", "2026-09-02"],
      ["2026-09-01", "2026-09-03"],
    ]);
  });
  test("cancellation does not extend count, replacing an exception retains stable identity", () => {
    const series = daily();
    const [first] = expandSchedulerRecurrences([series], range());
    let exceptions = setSchedulerRecurrenceException([], first);
    expect(
      expandSchedulerRecurrences([series], range(), { exceptions }),
    ).toHaveLength(4);
    exceptions = setSchedulerRecurrenceException(exceptions, first, {
      ...first,
      title: "Only this time",
    });
    expect(exceptions).toHaveLength(1);
    const result = expandSchedulerRecurrences([series], range(), {
      exceptions,
    });
    expect(result[0].id).toBe(first.id);
    expect(result[0].title).toBe("Only this time");
    expect(result[1].title).toBe("Standup");
    expect(series.event.title).toBe("Standup");
  });
  test("moved exceptions enter another window even when original occurrence is later", () => {
    const series = daily();
    const original = expandSchedulerRecurrences([series], range())[4];
    const exceptions = setSchedulerRecurrenceException([], original, {
      ...original,
      start: "2026-09-01T09:00:00",
      end: "2026-09-01T10:00:00",
    });
    const earlier = expandSchedulerRecurrences(
      [series],
      range("2026-09-01", "2026-09-02"),
      { exceptions },
    );
    expect(earlier).toHaveLength(1);
    expect(earlier[0].id).toBe(original.id);
    expect(
      expandSchedulerRecurrences([series], range("2026-09-11", "2026-09-12"), {
        exceptions,
      }),
    ).toEqual([]);
    expect(schedulerDateKey(earlier[0].originalStart)).toBe("2026-09-11");
  });
  test("orphan exceptions and dates excluded by the rule do not create phantom occurrences", () => {
    const series = daily();
    const exceptions = [
      {
        seriesId: series.event.id,
        originalStart: "2026-09-20T09:00:00",
        event: {
          ...series.event,
          start: "2026-09-01T09:00:00",
          end: "2026-09-01T10:00:00",
        },
      },
    ];
    expect(
      expandSchedulerRecurrences([series], range("2026-09-01", "2026-09-02"), {
        exceptions,
      }),
    ).toEqual([]);
  });
  test("returned objects and exception records do not alias source dates or resource arrays", () => {
    const series = daily();
    const [first] = expandSchedulerRecurrences([series], range());
    const exceptions = setSchedulerRecurrenceException([], first, first);
    first.resourceIds!.push("b");
    (first.start as Date).setFullYear(2000);
    expect(exceptions[0].event!.resourceIds).toEqual(["a"]);
    expect((exceptions[0].event!.start as Date).getFullYear()).toBe(2026);
    expect(series.event.resourceIds).toEqual(["a"]);
  });
  test("rejects invalid rules and duplicate series or exception identities", () => {
    const series = daily();
    for (const rule of [
      { frequency: "daily", interval: 0 },
      { frequency: "weekly", daysOfWeek: [] },
      { frequency: "daily", count: -1 },
      { frequency: "weekly", daysOfWeek: [7] },
      { frequency: "daily", until: "bad" },
    ]) {
      expect(() =>
        expandSchedulerRecurrences(
          [{ ...series, rule: rule as SchedulerRecurringEvent["rule"] }],
          range(),
        ),
      ).toThrow();
    }
    expect(() =>
      expandSchedulerRecurrences([series, series], range()),
    ).toThrow();
    const [first] = expandSchedulerRecurrences([series], range());
    const exceptions = setSchedulerRecurrenceException([], first);
    expect(() =>
      expandSchedulerRecurrences([series], range(), {
        exceptions: [...exceptions, ...exceptions],
      }),
    ).toThrow();
  });
  test("limits fail explicitly instead of publishing incomplete results", () => {
    expect(() =>
      expandSchedulerRecurrences([daily()], range(), { maxOccurrences: 2 }),
    ).toThrow("occurrence limit");
    expect(() =>
      expandSchedulerRecurrences([daily()], range(), { maxIterations: 2 }),
    ).toThrow("iteration limit");
  });
  test("local wall-clock starts recover after DST normalization and all-day duration stays calendar-based", () => {
    const series = daily();
    series.event.start = new Date(2026, 2, 7, 2, 30);
    series.event.end = new Date(2026, 2, 7, 3, 30);
    series.rule.count = 3;
    const result = expandSchedulerRecurrences(
      [series],
      range("2026-03-07", "2026-03-11"),
    );
    expect(result).toHaveLength(3);
    expect((result[2].start as Date).getHours()).toBe(2);
    expect(
      result.map((item) => +(item.end as Date) - +(item.start as Date)),
    ).toEqual([3600000, 3600000, 3600000]);
    series.event = {
      id: "all",
      title: "All day",
      start: "2026-03-07",
      end: "2026-03-09",
      allDay: true,
    };
    expect(
      expandSchedulerRecurrences([series], range("2026-03-07", "2026-03-11"))[1]
        .end,
    ).toBe("2026-03-10");
  });
});
