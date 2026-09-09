import { afterEach, describe, expect, test, vi } from "vitest";
import { createApp, nextTick, h } from "vue";
import { mount, flushPromises } from "@vue/test-utils";
import Scheduler, { schedulerProps } from "../index";
import type { SchedulerEvent } from "../core";
import SchedulerEditor from "../components/scheduler-editor.vue";

const wrappers: ReturnType<typeof mount>[] = [];
const events: SchedulerEvent[] = [
  {
    id: "e",
    title: "Design review",
    start: "2026-09-09T09:00:00",
    end: "2026-09-09T10:00:00",
    resourceIds: ["a", "b"],
  },
];
function setup(props = {}, options = {}) {
  const wrapper = mount(Scheduler, {
    props: {
      defaultDate: "2026-09-09",
      defaultMode: "agenda",
      resources: [
        { id: "a", label: "Alice" },
        { id: "b", label: "Bob" },
        { id: "c", label: "Carol" },
      ],
      defaultValue: events,
      ...props,
    },
    ...options,
  });
  wrappers.push(wrapper);
  return wrapper;
}
afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
  document.body.innerHTML = "";
});

describe("Scheduler", () => {
  test.each(["day", "month", "resource-timeline", "resource-day"])(
    "template drop creates a detached draft in %s",
    async (mode) => {
      const template = {
        title: "Template",
        description: "Details",
        duration: 60,
        resourceIds: ["b"],
      };
      const wrapper = setup(
        { defaultMode: mode, defaultValue: [] },
        {
          slots: {
            "sidebar-extra": ({ startDrag, cancelDrag }: any) =>
              h(
                "button",
                {
                  "data-template": "",
                  draggable: true,
                  onDragstart: (event: DragEvent) => startDrag(template, event),
                  onDragend: cancelDrag,
                },
                "Template",
              ),
          },
        },
      );
      await wrapper.get("[data-template]").trigger("dragstart");
      const selector =
        mode === "month"
          ? ".c-scheduler__month-cell"
          : mode === "resource-timeline"
            ? ".c-scheduler__timeline-cells button"
            : ".c-scheduler__time-cell";
      const target = wrapper.get(selector);
      await target.trigger("drop");
      const editor = wrapper.getComponent(SchedulerEditor);
      const draft = editor.props("event");
      expect(editor.props("open")).toBe(true);
      expect(editor.props("existing")).toBe(false);
      expect(draft.title).toBe(template.title);
      expect(draft.description).toBe(template.description);
      expect(draft.resourceIds).toEqual(
        mode.startsWith("resource") ? ["a"] : ["b"],
      );
      expect(draft.allDay).toBe(mode === "month");
      if (mode !== "month") {
        expect(+new Date(draft.end!) - +new Date(draft.start!)).toBe(3600000);
        expect(new Date(draft.start!).getHours()).toBe(8);
        expect(new Date(draft.start!).getDate()).toBe(
          new Date(target.attributes("data-scheduler-date")!).getDate(),
        );
      }
      expect(wrapper.emitted("change")).toBeUndefined();
      editor.vm.$emit("update:open", false);
      await nextTick();
      expect(wrapper.emitted("change")).toBeUndefined();
      await wrapper.get("[data-template]").trigger("dragstart");
      await target.trigger("drop");
      const second = wrapper.getComponent(SchedulerEditor).props("event");
      expect(second.id).not.toBe(draft.id);
      wrapper.getComponent(SchedulerEditor).vm.$emit("save", second);
      await flushPromises();
      expect(wrapper.emitted("change")?.[0][1]).toMatchObject({
        type: "create",
      });
      expect(template).toEqual({
        title: "Template",
        description: "Details",
        duration: 60,
        resourceIds: ["b"],
      });
    },
  );
  test.each(["readonly", "disabled", "loading"])(
    "template drop respects %s",
    async (flag) => {
      const wrapper = setup(
        { defaultMode: "day", [flag]: true },
        {
          slots: {
            "sidebar-extra": ({ startDrag }: any) =>
              h("button", {
                "data-template": "",
                onDragstart: (event: DragEvent) =>
                  startDrag({ title: "Template" }, event),
              }),
          },
        },
      );
      await wrapper.get("[data-template]").trigger("dragstart");
      const cell = wrapper.find(".c-scheduler__time-cell");
      if (cell.exists()) await cell.trigger("drop");
      expect(wrapper.findComponent(SchedulerEditor).exists()).toBe(false);
      expect(wrapper.emitted("change")).toBeUndefined();
    },
  );
  test("cancelled drags and disabled resources do not open drafts; save hooks can reject", async () => {
    const wrapper = setup(
      {
        defaultMode: "resource-day",
        defaultValue: [],
        beforeChange: () => false,
        resources: [
          { id: "a", label: "Alice", disabled: true },
          { id: "b", label: "Bob" },
        ],
      },
      {
        slots: {
          "sidebar-extra": ({ startDrag, cancelDrag }: any) =>
            h("button", {
              "data-template": "",
              onDragstart: (event: DragEvent) =>
                startDrag({ title: "New" }, event),
              onDragend: cancelDrag,
            }),
        },
      },
    );
    const card = wrapper.get("[data-template]");
    const columns = wrapper.findAll(".c-scheduler__time-column");
    await card.trigger("dragstart");
    await columns[0].get(".c-scheduler__time-cell").trigger("drop");
    expect(wrapper.findComponent(SchedulerEditor).exists()).toBe(false);
    await card.trigger("dragstart");
    await card.trigger("dragend");
    await columns[1].get(".c-scheduler__time-cell").trigger("drop");
    expect(wrapper.findComponent(SchedulerEditor).exists()).toBe(false);
    await card.trigger("dragstart");
    await columns[1].get(".c-scheduler__time-cell").trigger("drop");
    const editor = wrapper.getComponent(SchedulerEditor);
    editor.vm.$emit("save", editor.props("event"));
    await flushPromises();
    expect(editor.props("open")).toBe(true);
    expect(wrapper.emitted("change")).toBeUndefined();
  });
  test("public registration, props and empty rendering", () => {
    const app = createApp({});
    app.use(Scheduler);
    expect(app.component("CScheduler")).toBe(Scheduler);
    expect(app.component("CCScheduler")).toBeUndefined();
    expect(schedulerProps.beforeChange).toBeDefined();
    expect(schedulerProps).not.toHaveProperty("onChange");
    expect(
      setup({ defaultValue: [], showSidebar: false }).html(),
    ).toMatchSnapshot();
  });
  test("renders all six native modes", async () => {
    const wrapper = setup();
    for (const mode of [
      "day",
      "week",
      "month",
      "agenda",
      "resource-day",
      "resource-timeline",
    ] as const) {
      await wrapper.setProps({ mode });
      expect(wrapper.text()).toContain("Design review");
    }
    expect(wrapper.findAll(".c-scheduler__timeline-row")).toHaveLength(3);
  });
  test("shared event is projected twice in resource view but updated once", async () => {
    const wrapper = setup({ mode: "resource-day" });
    expect(wrapper.findAll(".c-scheduler__positioned-event")).toHaveLength(2);
    await wrapper.vm.change({
      type: "update",
      event: { ...events[0], title: "Updated" },
    });
    expect(wrapper.emitted("change")).toHaveLength(1);
    expect(wrapper.emitted("update:modelValue")?.[0][0]).toHaveLength(1);
  });
  test("controlled values remain unchanged until parent accepts", async () => {
    const wrapper = setup({ modelValue: events });
    const next = { ...events[0], title: "Accepted" };
    expect(await wrapper.vm.change({ type: "update", event: next })).toBe(true);
    expect(wrapper.text()).toContain("Design review");
    await wrapper.setProps({ modelValue: [next] });
    expect(wrapper.text()).toContain("Accepted");
  });
  test("beforeChange cancellation and rejection never commit", async () => {
    const wrapper = setup({ beforeChange: () => false });
    expect(await wrapper.vm.change({ type: "remove", event: events[0] })).toBe(
      false,
    );
    expect(wrapper.emitted("change")).toBeUndefined();
    await wrapper.setProps({
      beforeChange: () => Promise.reject(new Error("server failed")),
    });
    await wrapper.vm.change({ type: "remove", event: events[0] });
    expect(wrapper.emitted("change-error")).toHaveLength(1);
    expect(wrapper.text()).toContain("Design review");
  });
  test("pending hooks block duplicates and stale external values", async () => {
    let resolve!: (value: boolean) => void;
    const wrapper = setup({
      modelValue: events,
      beforeChange: () =>
        new Promise<boolean>((done) => {
          resolve = done;
        }),
    });
    const pending = wrapper.vm.change({ type: "remove", event: events[0] });
    await nextTick();
    expect(wrapper.attributes("aria-busy")).toBe("true");
    expect(await wrapper.vm.change({ type: "remove", event: events[0] })).toBe(
      false,
    );
    await wrapper.setProps({
      modelValue: [{ ...events[0], title: "Remote edit" }],
    });
    resolve(true);
    expect(await pending).toBe(false);
    expect(wrapper.emitted("change")).toBeUndefined();
    expect(wrapper.emitted("change-error")?.[0][0]).toMatchObject({
      code: "stale",
    });
  });
  test("hook receives isolated proposal and cannot mutate persisted state", async () => {
    const wrapper = setup({
      beforeChange: (context: any) => {
        context.value[0].title = "Injected";
        context.event.title = "Injected";
      },
    });
    await wrapper.vm.change({
      type: "update",
      event: { ...events[0], title: "Safe" },
    });
    expect(wrapper.text()).toContain("Safe");
    expect(wrapper.text()).not.toContain("Injected");
  });
  test("resource conflicts and readonly stop edits", async () => {
    const wrapper = setup({ allowOverlap: false });
    expect(
      await wrapper.vm.change({
        type: "create",
        event: { ...events[0], id: "second" },
      }),
    ).toBe(false);
    expect(wrapper.emitted("change-error")?.[0][0]).toMatchObject({
      code: "conflict",
    });
    for (const flag of ["readonly", "disabled", "loading"]) {
      await wrapper.setProps({ [flag]: true });
      expect(
        await wrapper.vm.change({ type: "remove", event: events[0] }),
      ).toBe(false);
      await wrapper.setProps({ [flag]: false });
    }
  });
  test("date navigation is controlled and emits new range only after parent update", async () => {
    const wrapper = setup({ date: "2026-09-09" });
    await wrapper.get('button[aria-label="下一页"]').trigger("click");
    expect(wrapper.emitted("update:date")).toHaveLength(1);
    expect(wrapper.emitted("range-change")).toHaveLength(1);
    await wrapper.setProps({ date: "2026-09-16" });
    expect(wrapper.emitted("range-change")).toHaveLength(2);
  });
  test("click opens internal editor and custom editor slot receives actions", async () => {
    const wrapper = setup(
      {},
      { slots: { editor: '<div data-editor="custom">Custom editor</div>' } },
    );
    await wrapper.get(".c-scheduler__event-button").trigger("click");
    await flushPromises();
    expect(wrapper.emitted("event-click")?.[0][0]).toMatchObject({ id: "e" });
    expect(wrapper.findComponent(SchedulerEditor).props("open")).toBe(true);
    expect(document.body.textContent).toContain("Custom editor");
  });
  test("native time grid supports move and resize through drag targets", async () => {
    const wrapper = setup({
      defaultMode: "resource-day",
      startHour: 8,
      endHour: 12,
    });
    await wrapper
      .get(".c-scheduler__positioned-event .c-scheduler__event")
      .trigger("dragstart");
    const columns = wrapper.findAll(".c-scheduler__time-column");
    await columns[2].findAll(".c-scheduler__time-cell")[4].trigger("drop");
    await flushPromises();
    const moved = (
      wrapper.emitted("update:modelValue")![0][0] as SchedulerEvent[]
    )[0];
    expect(moved.resourceIds).toEqual(["b", "c"]);
    expect(new Date(moved.start!).getHours()).toBe(10);
    await wrapper.get(".c-scheduler__resize").trigger("dragstart");
    await columns[1].findAll(".c-scheduler__time-cell")[7].trigger("drop");
    await flushPromises();
    expect(wrapper.emitted("change")?.[1][1]).toMatchObject({ type: "resize" });
  });
  test("unscheduled event drops into time grid without duplicating", async () => {
    const wrapper = setup({
      defaultMode: "day",
      defaultValue: [{ id: "todo", title: "Todo" }],
    });
    await wrapper
      .get(".c-scheduler__sidebar .c-scheduler__event")
      .trigger("dragstart");
    await wrapper.findAll(".c-scheduler__time-cell")[0].trigger("drop");
    await flushPromises();
    expect(
      wrapper.findAll(".c-scheduler__sidebar .c-scheduler__event"),
    ).toHaveLength(0);
    expect(wrapper.findAll(".c-scheduler__positioned-event")).toHaveLength(1);
  });
  test("editable false emits cell clicks without opening internal drawer", async () => {
    const wrapper = setup({ defaultMode: "day", editable: false });
    await wrapper.get(".c-scheduler__time-cell").trigger("click");
    expect(wrapper.emitted("cell-click")).toHaveLength(1);
    expect(wrapper.findComponent(SchedulerEditor).exists()).toBe(false);
  });
  test("async work after unmount does not publish updates", async () => {
    let resolve!: () => void;
    const wrapper = setup({
      beforeChange: () =>
        new Promise<void>((done) => {
          resolve = done;
        }),
    });
    const pending = wrapper.vm.change({ type: "remove", event: events[0] });
    wrapper.unmount();
    resolve();
    expect(await pending).toBe(false);
    expect(wrapper.emitted("change")).toBeUndefined();
  });
});
