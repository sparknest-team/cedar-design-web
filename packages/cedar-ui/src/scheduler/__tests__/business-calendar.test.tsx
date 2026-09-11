import { describe, expect, test } from "vitest";
import {
  isSchedulerWorkingDate,
  getSchedulerCalendarDisabledRanges,
  getSchedulerAvailabilityIssues,
  expandSchedulerRecurrences,
  splitSchedulerRecurrence,
  schedulerDateKey,
} from "../core";
import type {
  SchedulerBusinessCalendar,
  SchedulerRecurringEvent,
} from "../core";
const calendar: SchedulerBusinessCalendar = {
  overrides: [
    { date: "2026-02-27", working: false, label: "Company holiday" },
    { date: "2026-02-28", working: true, label: "Makeup day" },
  ],
};
const range = {
  start: new Date("2026-02-01T00:00:00"),
  end: new Date("2026-04-01T00:00:00"),
};
const source = (): SchedulerRecurringEvent => ({
  event: {
    id: "payroll",
    title: "Payroll",
    start: "2026-02-01T09:00:00",
    end: "2026-02-01T10:00:00",
  },
  rule: {
    frequency: "monthly",
    weekOfMonth: -1,
    businessCalendar: calendar,
    count: 2,
  },
});
describe("Scheduler business calendar", () => {
  test("date overrides outrank weekly defaults; empty weeks still support makeup dates", () => {
    expect(isSchedulerWorkingDate("2026-02-27", calendar)).toBe(false);
    expect(isSchedulerWorkingDate("2026-02-28", calendar)).toBe(true);
    expect(isSchedulerWorkingDate("2026-03-01", calendar)).toBe(false);
    expect(
      isSchedulerWorkingDate("2026-02-28", { ...calendar, workingDays: [] }),
    ).toBe(true);
    expect(isSchedulerWorkingDate("2026-02-26", { workingDays: [] })).toBe(
      false,
    );
  });
  test("rejects invalid dates, duplicate overrides and invalid weekday configuration", () => {
    for (const invalid of [
      { overrides: [{ date: "2026-02-30", working: true }] },
      { overrides: [...calendar.overrides!, ...calendar.overrides!] },
      { workingDays: [7] },
    ])
      expect(() => isSchedulerWorkingDate("2026-02-01", invalid)).toThrow();
  });
  test("ordinal monthly rules include makeup weekends and omit holidays", () => {
    expect(
      expandSchedulerRecurrences([source()], range).map((item) =>
        schedulerDateKey(item.start!),
      ),
    ).toEqual(["2026-02-28", "2026-03-31"]);
    const noMakeup = source();
    noMakeup.rule.businessCalendar = { overrides: [calendar.overrides![0]] };
    expect(
      schedulerDateKey(expandSchedulerRecurrences([noMakeup], range)[0].start!),
    ).toBe("2026-02-26");
  });
  test("months with no working dates are skipped and do not consume count", () => {
    const series = source();
    series.rule.businessCalendar = {
      workingDays: [],
      overrides: [{ date: "2026-03-15", working: true }],
    };
    expect(
      expandSchedulerRecurrences([series], range).map((item) =>
        schedulerDateKey(item.start!),
      ),
    ).toEqual(["2026-03-15"]);
  });
  test("split inherits a detached business calendar without adding conflicting weekday selectors", () => {
    const series = source();
    const occurrence = expandSchedulerRecurrences([series], range)[0];
    const split = splitSchedulerRecurrence([series], [], occurrence, {
      nextEvent: { ...occurrence, id: "next" },
    });
    expect(split.series[0].rule.daysOfWeek).toBeUndefined();
    expect(
      expandSchedulerRecurrences(split.series, range).map((item) =>
        schedulerDateKey(item.start!),
      ),
    ).toEqual(["2026-02-28", "2026-03-31"]);
    split.series[0].rule.businessCalendar!.overrides![0].working = true;
    expect(calendar.overrides![0].working).toBe(false);
  });
  test("closed dates adapt to existing availability and respect exclusive boundaries", () => {
    const window = {
      start: new Date("2026-02-27T12:00:00"),
      end: new Date("2026-03-01T00:00:00"),
    };
    const disabledRanges = getSchedulerCalendarDisabledRanges(calendar, window);
    expect(disabledRanges).toHaveLength(1);
    expect(disabledRanges[0].label).toBe("Company holiday");
    expect(schedulerDateKey(disabledRanges[0].start)).toBe("2026-02-27");
    const base = { id: "job", title: "Job" };
    expect(
      getSchedulerAvailabilityIssues(
        { ...base, start: "2026-02-27T10:00:00", end: "2026-02-27T11:00:00" },
        { disabledRanges },
      )[0].code,
    ).toBe("disabled-range");
    expect(
      getSchedulerAvailabilityIssues(
        { ...base, start: "2026-02-28T10:00:00", end: "2026-02-28T11:00:00" },
        { disabledRanges },
      ),
    ).toEqual([]);
    expect(() =>
      getSchedulerCalendarDisabledRanges(calendar, range, 2),
    ).toThrow("limit");
  });
  test("rejects ambiguous business-calendar rule combinations", () => {
    for (const rule of [
      { frequency: "daily", businessCalendar: calendar },
      { frequency: "monthly", businessCalendar: calendar },
      {
        frequency: "monthly",
        weekOfMonth: -1,
        daysOfWeek: [1],
        businessCalendar: calendar,
      },
    ])
      expect(() =>
        expandSchedulerRecurrences(
          [{ ...source(), rule: rule as SchedulerRecurringEvent["rule"] }],
          range,
        ),
      ).toThrow();
  });
});
