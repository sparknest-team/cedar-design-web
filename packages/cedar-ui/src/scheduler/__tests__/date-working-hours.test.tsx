import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Scheduler from "../Scheduler.vue";
import { getSchedulerAvailabilityIssues as check } from "../core";
import type { SchedulerDateWorkingHours } from "../core";
const event = {
  id: "x",
  title: "Work",
  start: "2026-09-12T10:00:00",
  end: "2026-09-12T11:00:00",
  resourceIds: ["a", "b"],
};
const dateWorkingHours: SchedulerDateWorkingHours[] = [
  { date: "2026-09-12", intervals: [{ startMinute: 540, endMinute: 720 }] },
  { date: "2026-09-12", resourceIds: ["a"], intervals: [] },
];
test("date rules reopen weekends and specific closures override global and weekly hours", () => {
  const options = { workingHours: [], dateWorkingHours };
  expect(check(event, options)).toEqual([
    { code: "outside-working-hours", resourceId: "a" },
  ]);
  expect(check({ ...event, resourceIds: ["b"] }, options)).toEqual([]);
  expect(check({ ...event, resourceIds: [] }, options)).toEqual([]);
  expect(check({ ...event, allDay: true }, options)).toEqual([]);
});
test("date intervals merge but gaps and next-date closures reject", () => {
  const options = {
    dateWorkingHours: [
      {
        date: "2026-09-12",
        intervals: [
          { startMinute: 600, endMinute: 630 },
          { startMinute: 630, endMinute: 660 },
        ],
      },
    ],
  };
  expect(check(event, options)).toEqual([]);
  options.dateWorkingHours[0].intervals[1].startMinute = 640;
  expect(check(event, options)).toHaveLength(2);
  expect(
    check({ ...event, start: "2026-09-11T23:00:00" }, { dateWorkingHours }),
  ).toHaveLength(2);
  expect(
    check(
      { ...event, start: "2026-09-13T10:00:00", end: "2026-09-13T11:00:00" },
      { dateWorkingHours },
    ),
  ).toEqual([]);
});
test("date rules never override maintenance", () => {
  expect(
    check(
      { ...event, resourceIds: ["b"] },
      {
        dateWorkingHours,
        disabledRanges: [{ id: "repair", start: event.start, end: event.end }],
      },
    )[0].code,
  ).toBe("disabled-range");
});
test.each([
  [{ date: "2026-02-30", intervals: [] }],
  [{ date: "2026-9-12", intervals: [] }],
  [dateWorkingHours[0], dateWorkingHours[0]],
  [dateWorkingHours[1], { ...dateWorkingHours[1], resourceIds: ["a", "c"] }],
  [{ date: "2026-09-12", intervals: [{ startMinute: 720, endMinute: 600 }] }],
])("invalid or ambiguous date rules fail closed: %j", (...rows) => {
  expect(check(event, { dateWorkingHours: rows })).toEqual([
    { code: "invalid-config" },
  ]);
});
test("date changes during async persistence are stale and closures shade cells", async () => {
  let release!: () => void;
  const w = mount(Scheduler, {
    props: {
      defaultDate: "2026-09-12",
      defaultMode: "resource-day",
      resources: [{ id: "a", label: "A" }],
      beforeChange: () =>
        new Promise<void>((r) => {
          release = r;
        }),
    },
  });
  try {
    const pending = w.vm.change({ type: "create", event });
    await w.setProps({ dateWorkingHours });
    expect(w.findAll(".c-scheduler__cell--unavailable").length).toBeGreaterThan(
      0,
    );
    release();
    expect(await pending).toBe(false);
    expect(w.emitted("update:modelValue")).toBeUndefined();
    expect(await w.vm.change({ type: "create", event })).toBe(false);
  } finally {
    w.unmount();
  }
});
