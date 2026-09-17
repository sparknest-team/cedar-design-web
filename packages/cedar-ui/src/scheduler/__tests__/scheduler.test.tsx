import { afterEach, describe, expect, test, vi } from "vitest";
import { createApp, nextTick, h } from "vue";
import { mount, flushPromises } from "@vue/test-utils";
import Scheduler, { schedulerProps } from "../index";
import type { SchedulerEvent } from "../core";
import SchedulerEditor from "../components/SchedulerEditor.vue";

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
  test("imperative saves normalize whitespace titles before hooks without mutating input", async () => {
    const beforeChange = vi.fn((_context: { event: SchedulerEvent }) => true);
    const wrapper = setup({ beforeChange });
    const event = { ...events[0], title: "   " };
    expect(await wrapper.vm.change({ type: "update", event })).toBe(true);
    expect(beforeChange.mock.calls[0][0].event.title).toBe("无主题");
    expect(wrapper.emitted("update:modelValue")?.[0][0]).toMatchObject([
      { title: "无主题" },
    ]);
    expect(event.title).toBe("   ");
  });
  test.each(["day", "month", "resource-timeline", "resource-day"])(
    "template drop creates a detached draft in %s",
    async (mode) => {
      const template = {
        title: "Template",
        description: "Details",
        accentColor: "#f53f3f",
        metadata: { orderId: "order-1" },
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
      expect(wrapper.get(".c-scheduler__drag-preview").text()).toContain(
        template.title,
      );
      expect(draft.title).toBe(template.title);
      expect(draft.description).toBe(template.description);
      expect(draft.accentColor).toBe(template.accentColor);
      expect(draft.metadata).toEqual(template.metadata);
      expect(draft.metadata).not.toBe(template.metadata);
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
      expect(wrapper.find(".c-scheduler__drag-preview").exists()).toBe(false);
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
        accentColor: "#f53f3f",
        metadata: { orderId: "order-1" },
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
  test("full sidebar slot replaces defaults and keeps the template drag API", async () => {
    const wrapper = setup(
      { defaultMode: "day", defaultValue: [] },
      {
        slots: {
          sidebar: ({ startDrag, cancelDrag, unscheduled }: any) =>
            h(
              "button",
              {
                "data-custom-sidebar": "",
                draggable: true,
                onDragstart: (event: DragEvent) =>
                  startDrag(
                    {
                      title: "Custom task",
                      metadata: { source: "custom-sidebar" },
                    },
                    event,
                  ),
                onDragend: cancelDrag,
              },
              `Custom ${unscheduled.length}`,
            ),
        },
      },
    );
    expect(wrapper.find("[aria-label='搜索资源']").exists()).toBe(false);
    await wrapper.get("[data-custom-sidebar]").trigger("dragstart");
    await wrapper.get(".c-scheduler__time-cell").trigger("drop");
    expect(wrapper.getComponent(SchedulerEditor).props("event")).toMatchObject({
      title: "Custom task",
      metadata: { source: "custom-sidebar" },
    });
  });
  test("editing preserves an independent metadata object through save", async () => {
    const source = {
      ...events[0],
      metadata: { orderId: "order-1", status: "planned" },
    };
    const wrapper = setup({ defaultValue: [source] });
    await wrapper.get(".c-scheduler__event-button").trigger("click");
    const editor = wrapper.getComponent(SchedulerEditor);
    const draft = editor.props("event") as SchedulerEvent;
    expect(draft.metadata).toEqual(source.metadata);
    expect(draft.metadata).not.toBe(source.metadata);
    draft.metadata!.status = "active";
    editor.vm.$emit("save", draft);
    await flushPromises();
    expect(source.metadata.status).toBe("planned");
    expect(wrapper.emitted("update:modelValue")?.at(-1)?.[0]).toMatchObject([
      { metadata: { orderId: "order-1", status: "active" } },
    ]);
  });
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
  test("initial scroll minute applies once and navigation preserves user scroll", async () => {
    const wrapper = setup({
      defaultMode: "day",
      startHour: 0,
      endHour: 24,
      initialScrollMinute: 420,
      showSidebar: false,
    });
    await flushPromises();
    const viewport = wrapper.get(".c-scheduler__main").element as HTMLElement;
    expect(viewport.scrollTop).toBeGreaterThan(0);
    viewport.scrollTop = 123;
    await wrapper.get("[aria-label='下一页']").trigger("click");
    await flushPromises();
    expect(viewport.scrollTop).toBe(123);
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
  test("empty month and all-day areas create once while existing events keep their action", async () => {
    const month = setup({ defaultMode: "month", editable: false });
    const day = month.get(".c-scheduler__month-cell");
    await day.trigger("click");
    expect(month.emitted("editor-request")?.[0][0]).toMatchObject({
      action: "create",
      source: "cell",
      event: { allDay: true },
    });
    await day.get("button").trigger("click");
    expect(month.emitted("editor-request")).toHaveLength(2);
    await month
      .get(".c-scheduler__month-cell .c-scheduler__event-button")
      .trigger("click");
    expect(month.emitted("editor-request")).toHaveLength(3);
    expect(month.emitted("editor-request")?.[2][0]).toMatchObject({
      action: "edit",
    });

    const week = setup({ defaultMode: "week", editable: false });
    const allDay = week.get(".c-scheduler__all-day");
    await allDay.trigger("click");
    expect(week.emitted("editor-request")?.[0][0]).toMatchObject({
      action: "create",
      source: "cell",
      event: { allDay: true },
    });
    expect(allDay.findAll(".c-button")).toHaveLength(0);
    await allDay.trigger("keydown", { key: "Enter" });
    expect(week.emitted("editor-request")).toHaveLength(2);
    await allDay.trigger("keydown", { key: " " });
    expect(week.emitted("editor-request")).toHaveLength(3);
    await week.setProps({ readonly: true });
    await allDay.trigger("keydown", { key: "Enter" });
    expect(week.emitted("editor-request")).toHaveLength(3);
  });
  test("arrow keys move focus between visible calendar controls", async () => {
    const wrapper = setup(
      {
        defaultMode: "day",
        showSidebar: false,
        defaultValue: [
          events[0],
          {
            ...events[0],
            id: "later",
            title: "Later review",
            start: "2026-09-09T11:00:00",
            end: "2026-09-09T12:00:00",
          },
        ],
      },
      { attachTo: document.body },
    );
    const buttons = wrapper.findAll<HTMLElement>(".c-scheduler__event-button");
    expect(buttons).toHaveLength(2);
    buttons.forEach((button, index) => {
      button.element.getBoundingClientRect = () =>
        ({
          left: 100,
          right: 200,
          top: 100 + index * 100,
          bottom: 140 + index * 100,
          width: 100,
          height: 40,
          x: 100,
          y: 100 + index * 100,
          toJSON: () => ({}),
        }) as DOMRect;
    });
    buttons[0].element.focus();
    await buttons[0].trigger("keydown", { key: "ArrowDown" });
    expect(document.activeElement).toBe(buttons[1].element);
    await buttons[1].trigger("keydown", { key: "ArrowUp" });
    expect(document.activeElement).toBe(buttons[0].element);
  });
  test("closing the editor restores focus to its calendar trigger", async () => {
    const wrapper = setup(
      { defaultMode: "day", showSidebar: false },
      { attachTo: document.body },
    );
    const trigger = wrapper.get<HTMLElement>(
      ".c-scheduler__event-button",
    ).element;
    trigger.focus();
    await wrapper.get(".c-scheduler__event-button").trigger("click");
    wrapper.findComponent(SchedulerEditor).vm.$emit("update:open", false);
    await nextTick();
    expect(document.activeElement).toBe(trigger);
  });
  test("deleting the editor trigger restores focus inside the calendar", async () => {
    const wrapper = setup(
      { defaultMode: "day", showSidebar: false },
      { attachTo: document.body },
    );
    const trigger = wrapper.get<HTMLElement>(
      ".c-scheduler__event-button",
    ).element;
    trigger.getBoundingClientRect = () =>
      ({ left: 100, top: 100, width: 100, height: 40 }) as DOMRect;
    trigger.focus();
    await wrapper.get(".c-scheduler__event-button").trigger("click");
    wrapper.findComponent(SchedulerEditor).vm.$emit("remove", events[0]);
    await flushPromises();
    expect(trigger.isConnected).toBe(false);
    expect(wrapper.element.contains(document.activeElement)).toBe(true);
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
