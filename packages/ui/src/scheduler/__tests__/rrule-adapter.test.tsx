import { test, expect } from "vitest";
import { schedulerZonedDate, expandSchedulerRRule } from "../adapters";
test("DST ambiguity and missing wall times require an explicit policy", () => {
  expect(() =>
    schedulerZonedDate("2026-03-08T02:30:00", "America/New_York"),
  ).toThrow();
  expect(() =>
    schedulerZonedDate("2026-11-01T01:30:00", "America/New_York"),
  ).toThrow();
  const early = schedulerZonedDate(
    "2026-11-01T01:30:00",
    "America/New_York",
    "earlier",
  );
  const late = schedulerZonedDate(
    "2026-11-01T01:30:00",
    "America/New_York",
    "later",
  );
  expect(+late - +early).toBe(3600000);
});
test("weekday/set-position rules and local nine oclock survive DST transitions", () => {
  const event = {
    id: "rule",
    title: "Meeting",
    start: "2026-03-02T14:00:00Z",
    end: "2026-03-02T15:00:00Z",
  };
  const values = expandSchedulerRRule(
    {
      event,
      timeZone: "America/New_York",
      rule: "FREQ=WEEKLY;BYDAY=MO;COUNT=3",
    },
    { start: new Date("2026-03-01"), end: new Date("2026-03-20") },
  );
  expect(values.map((e) => e.start)).toEqual([
    "2026-03-02T14:00:00.000Z",
    "2026-03-09T13:00:00.000Z",
    "2026-03-16T13:00:00.000Z",
  ]);
  const monthly = expandSchedulerRRule(
    { event, rule: "FREQ=MONTHLY;BYDAY=MO,TU,WE,TH,FR;BYSETPOS=-1;COUNT=2" },
    { start: new Date("2026-03-01"), end: new Date("2026-05-01") },
  );
  expect(monthly).toHaveLength(2);
  expect(String(monthly[0].start)).toContain("2026-03-31");
});
