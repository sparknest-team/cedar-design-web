import { test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Scheduler from "../Scheduler.vue";
import Grid from "../components/SchedulerTimeGrid.vue";
import Popover from "../../popover";
import { getSchedulerCellDate, getSchedulerSelectionRange } from "../core";
test("cell snapping and backward selection preserve half-open ranges", () => {
  expect(
    getSchedulerCellDate("2026-09-22T09:00:00", 60, 0.6, 15).getMinutes(),
  ).toBe(30);
  expect(
    getSchedulerCellDate("2026-09-22T08:00:00", 60, 0, 45).getHours(),
  ).toBe(8);
  const range = getSchedulerSelectionRange(
    "2026-09-22T11:00:00",
    "2026-09-22T09:30:00",
    15,
  );
  expect(range.start.getHours()).toBe(9);
  expect(range.end.getMinutes()).toBe(15);
  expect(() => getSchedulerSelectionRange("bad", "2026-09-22", 15)).toThrow();
});
test("grid spacing, drag selection, and click default duration are independent", async () => {
  const w = mount(Scheduler, {
    props: {
      defaultDate: "2026-09-22",
      defaultMode: "day",
      slotDuration: 60,
      snapDuration: 15,
      defaultDuration: 45,
      dragToCreate: true,
      editable: false,
    },
  });
  const old = document.elementsFromPoint;
  try {
    expect(w.getComponent(Grid).props("step")).toBe(60);
    const cells = w.findAll(".c-scheduler__time-cell");
    await cells[0].trigger("click");
    let draft = (w.emitted("editor-request")![0][0] as any).event;
    expect(+new Date(draft.end) - +new Date(draft.start)).toBe(45 * 60000);
    await cells[0].trigger("pointerdown", {
      button: 0,
      clientX: 0,
      clientY: 0,
    });
    Object.defineProperty(document, "elementsFromPoint", {
      configurable: true,
      value: () => [cells[2].element],
    });
    document.dispatchEvent(
      new MouseEvent("pointermove", {
        clientX: 20,
        clientY: 80,
        bubbles: true,
      }),
    );
    await flushPromises();
    expect(w.find(".c-scheduler__range-selection").exists()).toBe(true);
    document.dispatchEvent(
      new MouseEvent("pointerup", { clientX: 20, clientY: 80, bubbles: true }),
    );
    await flushPromises();
    draft = (w.emitted("editor-request")![1][0] as any).event;
    expect(+new Date(draft.end) - +new Date(draft.start)).toBe(135 * 60000);
  } finally {
    w.unmount();
    Object.defineProperty(document, "elementsFromPoint", {
      configurable: true,
      value: old,
    });
  }
});
test("month uses a fixed default limit and exposes all events through the internal popover", async () => {
  const events = Array.from({ length: 5 }, (_, i) => ({
    id: `e${i}`,
    title: `Task${i}`,
    start: "2026-09-22T09:00:00",
    end: "2026-09-22T10:00:00",
  }));
  const w = mount(Scheduler, {
    props: {
      defaultDate: "2026-09-22",
      defaultMode: "month",
      defaultValue: events,
    },
  });
  try {
    expect(
      w.findAll(".c-scheduler__month-cell .c-scheduler__event"),
    ).toHaveLength(3);
    expect(w.findComponent(Popover).exists()).toBe(true);
    expect(w.text()).toContain("还有 2 项");
    await w.findComponent(Popover).get("button").trigger("click");
    expect(
      document.body.querySelectorAll(".c-scheduler__month-more-event"),
    ).toHaveLength(5);
  } finally {
    w.unmount();
  }
});
