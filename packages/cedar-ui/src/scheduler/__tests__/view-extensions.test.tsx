import { afterEach, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { h, nextTick } from "vue";
import Scheduler from "../Scheduler.vue";
import Card from "../components/SchedulerEvent.vue";
import { duplicateSchedulerEvent } from "../core";
import { projectSchedulerDrag } from "../drag";
afterEach(() => vi.useRealTimers());
test("today heading remains visible without a clock line; time label shares its coordinate", async () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 8, 15, 10, 30));
  const w = mount(Scheduler, {
    props: {
      date: new Date(2026, 8, 15),
      mode: "week",
      showNowIndicator: false,
    },
  });
  try {
    await nextTick();
    expect(w.findAll('[aria-current="date"]')).toHaveLength(1);
    expect(w.find(".c-scheduler__now-label").exists()).toBe(false);
    await w.setProps({ showNowIndicator: true });
    expect(w.get(".c-scheduler__now-label").text()).toBe("10:30");
    expect(
      (w.get(".c-scheduler__now-label").element as HTMLElement).style.top,
    ).toBe(
      (w.get(".c-scheduler__now-indicator").element as HTMLElement).style.top,
    );
    expect(
      w.get(".c-scheduler__time-header").findAll(".c-scheduler__time-heading"),
    ).toHaveLength(2);
    await w.setProps({ date: new Date(2026, 9, 15) });
    expect(w.findAll('[aria-current="date"]')).toHaveLength(0);
    expect(w.find(".c-scheduler__now-label").exists()).toBe(false);
  } finally {
    w.unmount();
  }
});
test("toolbar and background slots expose generic context and preserve navigation/create", async () => {
  const w = mount(Scheduler, {
    props: { defaultDate: new Date(2026, 8, 15), editable: false },
    slots: {
      toolbar: ({ navigate, create }) => [
        h("button", { class: "next", onClick: () => navigate(1) }, "Next"),
        h("button", { class: "create", onClick: create }, "Create"),
      ],
      "column-background": ({ date }) =>
        h("span", { class: "custom-background" }, date.getDate()),
    },
  });
  try {
    expect(w.findAll(".custom-background")).toHaveLength(7);
    await w.get(".next").trigger("click");
    expect((w.emitted("update:date")![0][0] as Date).getDate()).toBe(22);
    await w.get(".create").trigger("click");
    expect(w.emitted("editor-request")![0][0]).toMatchObject({
      action: "create",
      source: "toolbar",
    });
  } finally {
    w.unmount();
  }
});
test("fixed-duration events retain moving but suppress resize handles and resize projections", async () => {
  const event = {
    id: "fixed",
    title: "Fixed",
    start: "2026-09-15T09:00:00",
    end: "2026-09-15T10:00:00",
    resizable: false,
  };
  const w = mount(Card, { props: { event, resizable: true, movable: true } });
  try {
    expect(w.find(".c-scheduler__resize").exists()).toBe(false);
    expect(w.classes()).not.toContain("c-scheduler__event--static");
    expect(
      projectSchedulerDrag(
        event,
        new Date(2026, 8, 15, 11),
        true,
        30,
        0,
        undefined,
        undefined,
        false,
      ),
    ).toBeUndefined();
    expect(
      projectSchedulerDrag(
        event,
        new Date(2026, 8, 15, 11),
        false,
        30,
        0,
        undefined,
        undefined,
        false,
      ),
    ).toBeDefined();
    expect(duplicateSchedulerEvent(event, "copy").resizable).toBe(false);
    await w.setProps({ event: { ...event, resizable: true } });
    expect(w.findAll(".c-scheduler__resize")).toHaveLength(2);
  } finally {
    w.unmount();
  }
});
