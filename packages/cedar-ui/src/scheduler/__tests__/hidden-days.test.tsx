import { test, expect, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Scheduler from "../scheduler.vue";
import Card from "../components/scheduler-event.vue";
import Grid from "../components/scheduler-time-grid.vue";
import {
  getSchedulerVisibleDays,
  getSchedulerRange,
  schedulerDateKey,
} from "../core";
const weekend = {
  id: "weekend",
  title: "Weekend booking",
  start: "2026-09-19T10:00:00",
  end: "2026-09-19T11:00:00",
  resourceIds: ["r"],
};
test("pure visible dates preserve first-day ordering and input range", () => {
  const range = getSchedulerRange("2026-09-16", "month", 0);
  const before = JSON.stringify(range);
  const days = getSchedulerVisibleDays(range, [0, 6, 0]);
  expect(days).toHaveLength(30);
  expect(days.slice(0, 5).map((d) => d.getDay())).toEqual([1, 2, 3, 4, 5]);
  expect(getSchedulerVisibleDays(range, [1, 2, 3, 4, 5, 6])).toHaveLength(6);
  days[0].setFullYear(2000);
  expect(JSON.stringify(range)).toBe(before);
  for (const hidden of [[0, 1, 2, 3, 4, 5, 6], [-1], [7], [1.5]])
    expect(() => getSchedulerVisibleDays(range, hidden)).toThrow();
});
test("month compresses columns, preserves query bounds and cross-weekend cards", async () => {
  const w = mount(Scheduler, {
    props: {
      defaultDate: "2026-09-18",
      defaultMode: "month",
      firstDayOfWeek: 0,
      hiddenDays: [0, 6],
      defaultValue: [
        weekend,
        {
          id: "cross",
          title: "Cross weekend",
          start: "2026-09-18",
          end: "2026-09-22",
          allDay: true,
        },
      ],
    },
  });
  try {
    expect(w.findAll(".c-scheduler__month-heading")).toHaveLength(5);
    expect(w.findAll(".c-scheduler__month-cell")).toHaveLength(30);
    expect(
      w.findAllComponents(Card).filter((c) => c.props("event").id === "cross"),
    ).toHaveLength(2);
    expect(w.text()).not.toContain("Weekend booking");
    const range = w.emitted("range-change")![0][0] as {
      start: Date;
      end: Date;
    };
    expect(schedulerDateKey(range.start)).toBe("2026-08-30");
    expect(schedulerDateKey(range.end)).toBe("2026-10-11");
    await w.setProps({ hiddenDays: [] });
    expect(w.findAll(".c-scheduler__month-cell")).toHaveLength(42);
    expect(w.text()).toContain("Weekend booking");
    expect(w.emitted("update:modelValue")).toBeUndefined();
  } finally {
    w.unmount();
  }
});
test("week dates are actual weekdays; single-day and timeline remain uncompressed", async () => {
  const w = mount(Scheduler, {
    props: { defaultDate: "2026-09-19", mode: "week", hiddenDays: [0, 6] },
  });
  try {
    expect(
      w
        .getComponent(Grid)
        .props("columns")
        .map((c) => c.date.getDay()),
    ).toEqual([1, 2, 3, 4, 5]);
    await w.setProps({ mode: "day" });
    expect(w.getComponent(Grid).props("columns")[0].date.getDay()).toBe(6);
    await w.setProps({
      mode: "resource-timeline",
      resources: [{ id: "r", label: "R" }],
    });
    expect(w.findAll(".c-scheduler__timeline-heading").at(-1)!.findAll("span")).toHaveLength(8);
    expect(w.findComponent(Grid).exists()).toBe(false);
  } finally {
    w.unmount();
  }
});
test("agenda displays empty state for hidden-only bookings while capacity still sees them", async () => {
  const w = mount(Scheduler, {
    props: {
      defaultDate: "2026-09-19",
      defaultMode: "agenda",
      hiddenDays: [0, 6],
      defaultValue: [weekend],
      resources: [{ id: "r", label: "R", capacity: 1 }],
    },
  });
  try {
    expect(w.findAll(".c-scheduler__agenda-day")).toHaveLength(0);
    expect(w.text()).toContain("暂无日程");
    expect(
      await w.vm.change({ type: "create", event: { ...weekend, id: "copy" } }),
    ).toBe(false);
    expect(w.emitted("update:modelValue")).toBeUndefined();
  } finally {
    w.unmount();
  }
});
test("dropping across hidden weekend uses target date and preserves calendar duration", async () => {
  const event = {
    id: "cross",
    title: "Cross weekend",
    start: "2026-09-18",
    end: "2026-09-22",
    allDay: true,
  };
  const w = mount(Scheduler, {
    props: {
      defaultDate: "2026-09-18",
      defaultMode: "month",
      hiddenDays: [0, 6],
      defaultValue: [event],
    },
  });
  try {
    w.getComponent(Card).vm.$emit(
      "drag-start",
      w.getComponent(Card).props("event"),
      false,
    );
    await w
      .findAll(".c-scheduler__month-cell")
      .find(
        (c) =>
          schedulerDateKey(new Date(c.attributes("data-scheduler-date"))) ===
          "2026-09-21",
      )!
      .trigger("drop");
    await flushPromises();
    expect(
      (w.emitted("update:modelValue")![0][0] as (typeof event)[])[0],
    ).toMatchObject({ start: "2026-09-21", end: "2026-09-25" });
  } finally {
    w.unmount();
  }
});
test("invalid component hidden days falls back without breaking rendering", () => {
  const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
  const w = mount(Scheduler, {
    props: {
      defaultDate: "2026-09-18",
      defaultMode: "month",
      hiddenDays: [0, 1, 2, 3, 4, 5, 6],
    },
  });
  try {
    expect(w.findAll(".c-scheduler__month-cell")).toHaveLength(42);
  } finally {
    w.unmount();
    warn.mockRestore();
  }
});
