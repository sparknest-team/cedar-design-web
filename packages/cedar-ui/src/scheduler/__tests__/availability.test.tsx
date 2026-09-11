import { describe, test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Scheduler from "../scheduler.vue";
import { getSchedulerAvailabilityIssues } from "../core";
import type {
  SchedulerEvent,
  SchedulerWorkingHours,
  SchedulerChange,
} from "../core";
const hours: SchedulerWorkingHours[] = [
  { daysOfWeek: [1, 2, 3, 4, 5], startMinute: 540, endMinute: 720 },
  { daysOfWeek: [1, 2, 3, 4, 5], startMinute: 780, endMinute: 1080 },
];
const event = (
  start = "2026-09-09T09:00:00",
  end = "2026-09-09T10:00:00",
): SchedulerEvent => ({
  id: "e",
  title: "Meeting",
  start,
  end,
  resourceIds: ["a"],
});

describe("availability core", () => {
  test("unconfigured schedules allow events; explicit empty hours close them", () => {
    expect(getSchedulerAvailabilityIssues(event(), {})).toEqual([]);
    expect(
      getSchedulerAvailabilityIssues(event(), { workingHours: [] }),
    ).toEqual([{ code: "outside-working-hours", resourceId: "a" }]);
  });
  test("enforces lunch gaps and half-open working boundaries", () => {
    expect(
      getSchedulerAvailabilityIssues(
        event("2026-09-09T11:00:00", "2026-09-09T12:00:00"),
        { workingHours: hours },
      ),
    ).toEqual([]);
    expect(
      getSchedulerAvailabilityIssues(
        event("2026-09-09T11:30:00", "2026-09-09T13:30:00"),
        { workingHours: hours },
      ),
    ).toHaveLength(1);
    expect(
      getSchedulerAvailabilityIssues(
        event("2026-09-12T09:00:00", "2026-09-12T10:00:00"),
        { workingHours: hours },
      ),
    ).toHaveLength(1);
  });
  test("merges adjacent windows without mutating configuration", () => {
    const windows = [
      { daysOfWeek: [3], startMinute: 540, endMinute: 600 },
      { daysOfWeek: [3], startMinute: 600, endMinute: 660 },
    ];
    const before = JSON.stringify(windows);
    expect(
      getSchedulerAvailabilityIssues(
        event("2026-09-09T09:00:00", "2026-09-09T11:00:00"),
        { workingHours: windows },
      ),
    ).toEqual([]);
    expect(JSON.stringify(windows)).toBe(before);
  });
  test("checks every resource and specific schedules override the global schedule", () => {
    const windows = [
      ...hours,
      {
        daysOfWeek: [3],
        startMinute: 600,
        endMinute: 1080,
        resourceIds: ["b"],
      },
    ];
    expect(
      getSchedulerAvailabilityIssues(
        { ...event(), resourceIds: ["a", "b"] },
        { workingHours: windows },
      ),
    ).toEqual([{ code: "outside-working-hours", resourceId: "b" }]);
  });
  test("resource-only rules do not close unrelated or unassigned schedules", () => {
    const windows = [
      { daysOfWeek: [], startMinute: 0, endMinute: 1440, resourceIds: ["b"] },
    ];
    expect(
      getSchedulerAvailabilityIssues(event(), { workingHours: windows }),
    ).toEqual([]);
    expect(
      getSchedulerAvailabilityIssues(
        { ...event(), resourceIds: [] },
        { workingHours: windows },
      ),
    ).toEqual([]);
  });
  test("maintenance applies to assigned resources and excludes adjacent events", () => {
    const range = {
      id: "repair",
      start: "2026-09-09T10:00:00",
      end: "2026-09-09T12:00:00",
      resourceIds: ["a"],
      label: "Maintenance",
    };
    expect(
      getSchedulerAvailabilityIssues(event(), { disabledRanges: [range] }),
    ).toEqual([]);
    expect(
      getSchedulerAvailabilityIssues(
        event("2026-09-09T10:00:00", "2026-09-09T11:00:00"),
        { disabledRanges: [range] },
      ),
    ).toEqual([
      {
        code: "disabled-range",
        resourceId: "a",
        rangeId: "repair",
        label: "Maintenance",
      },
    ]);
    expect(
      getSchedulerAvailabilityIssues(
        {
          ...event("2026-09-09T10:00:00", "2026-09-09T11:00:00"),
          resourceIds: ["b"],
        },
        { disabledRanges: [range] },
      ),
    ).toEqual([]);
  });
  test("all-day annotations skip work hours but respect maintenance; unscheduled bypasses availability", () => {
    const allDay = { ...event("2026-09-09", "2026-09-10"), allDay: true };
    expect(
      getSchedulerAvailabilityIssues(allDay, { workingHours: [] }),
    ).toEqual([]);
    expect(
      getSchedulerAvailabilityIssues(allDay, {
        disabledRanges: [
          { id: "closed", start: "2026-09-09", end: "2026-09-10" },
        ],
      }),
    ).toHaveLength(1);
    expect(
      getSchedulerAvailabilityIssues(
        { id: "u", title: "Backlog" },
        { workingHours: [] },
      ),
    ).toEqual([]);
  });
  test("cross-midnight events require coverage on both days", () => {
    const windows = [{ daysOfWeek: [3], startMinute: 1380, endMinute: 1440 }];
    const overnight = event("2026-09-09T23:00:00", "2026-09-10T01:00:00");
    expect(
      getSchedulerAvailabilityIssues(overnight, { workingHours: windows }),
    ).toHaveLength(1);
    expect(
      getSchedulerAvailabilityIssues(overnight, {
        workingHours: [
          ...windows,
          { daysOfWeek: [4], startMinute: 0, endMinute: 60 },
        ],
      }),
    ).toEqual([]);
  });
  test("invalid rules fail closed", () => {
    expect(
      getSchedulerAvailabilityIssues(event(), {
        workingHours: [{ daysOfWeek: [3], startMinute: 900, endMinute: 600 }],
      }),
    ).toEqual([{ code: "invalid-config" }]);
    expect(
      getSchedulerAvailabilityIssues(event(), {
        disabledRanges: [{ id: "bad", start: "bad", end: "bad" }],
      }),
    ).toEqual([{ code: "invalid-config" }]);
  });
});

describe("shared commit availability", () => {
  test.each(["create", "update", "move", "resize"] as const)(
    "%s cannot bypass working hours or call persistence first",
    async (type) => {
      const beforeChange = vi.fn();
      const w = mount(Scheduler, {
        props: {
          defaultDate: "2026-09-09",
          defaultValue: type === "create" ? [] : [event()],
          workingHours: [],
          beforeChange,
        },
      });
      try {
        expect(
          await w.vm.change({ type, event: event() } as SchedulerChange),
        ).toBe(false);
        expect(beforeChange).not.toHaveBeenCalled();
        expect(w.emitted("update:modelValue")).toBeUndefined();
        expect(
          (w.emitted("change-error")![0][0] as { code: string }).code,
        ).toBe("unavailable");
        expect(await w.vm.change({ type: "remove", event: event() })).toBe(
          type !== "create",
        );
      } finally {
        w.unmount();
      }
    },
  );
  test("rejects changed rules after awaiting persistence", async () => {
    let release!: () => void;
    const w = mount(Scheduler, {
      props: {
        defaultDate: "2026-09-09",
        beforeChange: () =>
          new Promise<void>((r) => {
            release = r;
          }),
      },
    });
    try {
      const result = w.vm.change({ type: "create", event: event() });
      await w.setProps({ workingHours: [] });
      release();
      expect(await result).toBe(false);
      expect((w.emitted("change-error")![0][0] as { code: string }).code).toBe(
        "stale",
      );
      expect(w.emitted("update:modelValue")).toBeUndefined();
    } finally {
      w.unmount();
    }
  });
  test("shades unavailable cells while leaving editor access available", () => {
    const w = mount(Scheduler, {
      props: {
        defaultDate: "2026-09-09",
        defaultMode: "resource-day",
        resources: [{ id: "a", label: "Room A" }],
        workingHours: hours,
      },
    });
    try {
      expect(
        w.findAll(".c-scheduler__cell--unavailable").length,
      ).toBeGreaterThan(0);
    } finally {
      w.unmount();
    }
  });
});
