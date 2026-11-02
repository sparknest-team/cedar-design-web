import { afterEach, describe, expect, test } from "vitest";
import { h } from "vue";
import { mount, flushPromises } from "@vue/test-utils";
import Scheduler from "../Scheduler.vue";
import Editor from "../components/SchedulerEditor.vue";
import type { SchedulerEditorRequest } from "../props";
const wrappers: ReturnType<typeof mount>[] = [];
const original = {
  id: "e",
  title: "Inspection",
  start: "2026-09-09T09:00:00",
  end: "2026-09-09T10:00:00",
  resourceIds: ["device"],
};
function setup(props = {}) {
  const wrapper = mount(Scheduler, {
    props: {
      editable: false,
      defaultMode: "resource-day",
      defaultDate: "2026-09-09",
      defaultValue: [original],
      resources: [{ id: "device", label: "Device" }],
      ...props,
    },
    slots: {
      "sidebar-extra": ({ startDrag, cancelDrag }: any) =>
        h(
          "button",
          {
            "data-template": "",
            onDragstart: (event: DragEvent) =>
              startDrag({ title: "New inspection", duration: 60 }, event),
            onDragend: cancelDrag,
          },
          "Drag",
        ),
    },
  });
  wrappers.push(wrapper);
  return wrapper;
}
function requests(wrapper: ReturnType<typeof setup>) {
  return (wrapper.emitted("editor-request") ?? []).map(
    ([request]) => request as SchedulerEditorRequest,
  );
}
afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
  document.body.innerHTML = "";
});
describe("Scheduler external editing requests", () => {
  test("toolbar and cells produce unique complete drafts without opening the drawer or saving", async () => {
    const wrapper = setup();
    await wrapper
      .findAll(".c-scheduler__toolbar button").find(button => button.text() === "新建日程")!
      .trigger("click");
    expect(requests(wrapper)[0]).toMatchObject({
      action: "create",
      source: "toolbar",
      readonly: false,
      event: { allDay: false, title: "" },
    });
    expect(wrapper.emitted("cell-click")).toBeUndefined();
    expect(new Date(requests(wrapper)[0].event.start!).getHours()).toBe(8);
    await wrapper.findAll(".c-scheduler__time-cell")[5].trigger("click");
    const cell = requests(wrapper)[1];
    expect(cell).toMatchObject({
      action: "create",
      source: "cell",
      event: { resourceIds: ["device"] },
    });
    expect(new Date(cell.event.start!).getHours()).toBe(10);
    expect(new Date(cell.event.start!).getMinutes()).toBe(30);
    expect(cell.event.id).not.toBe(requests(wrapper)[0].event.id);
    expect(wrapper.emitted("cell-click")).toHaveLength(1);
    expect(wrapper.findComponent(Editor).exists()).toBe(false);
    expect(wrapper.emitted("change")).toBeUndefined();
  });
  test("external template drop retains target and template fields and can commit via change", async () => {
    const wrapper = setup();
    await wrapper.get("[data-template]").trigger("dragstart");
    await wrapper.findAll(".c-scheduler__time-cell")[6].trigger("drop");
    const request = requests(wrapper)[0];
    expect(request).toMatchObject({
      action: "create",
      source: "drop",
      event: { title: "New inspection", resourceIds: ["device"] },
    });
    expect(
      +new Date(request.event.end!) - +new Date(request.event.start!),
    ).toBe(3600000);
    expect(wrapper.emitted("cell-click")).toBeUndefined();
    expect(wrapper.emitted("change")).toBeUndefined();
    expect(
      await wrapper.vm.change({ type: "create", event: request.event }),
    ).toBe(true);
    expect(wrapper.emitted("change")?.[0][1]).toMatchObject({ type: "create" });
    expect(wrapper.findComponent(Editor).exists()).toBe(false);
  });
  test("event request is isolated and readonly viewing remains available", async () => {
    const wrapper = setup({ readonly: true });
    await wrapper.get(".c-scheduler__event-button").trigger("click");
    const request = requests(wrapper)[0];
    expect(request).toMatchObject({
      action: "edit",
      source: "event",
      readonly: true,
    });
    request.event.title = "Mutated draft";
    request.event.resourceIds!.push("another");
    expect(wrapper.text()).toContain("Inspection");
    expect(original.resourceIds).toEqual(["device"]);
    expect(wrapper.emitted("event-click")?.[0][0]).toMatchObject({
      title: "Inspection",
    });
    await wrapper.get(".c-scheduler__time-cell").trigger("click");
    expect(requests(wrapper)).toHaveLength(1);
  });
  test("disabled blocks requests and built-in mode does not emit external requests", async () => {
    const wrapper = setup({ disabled: true });
    await wrapper.get(".c-scheduler__event-button").trigger("click");
    await wrapper.get("[data-template]").trigger("dragstart");
    await wrapper.get(".c-scheduler__time-cell").trigger("drop");
    expect(requests(wrapper)).toHaveLength(0);
    await wrapper.setProps({ disabled: false, editable: true });
    await wrapper.get(".c-scheduler__time-cell").trigger("click");
    expect(wrapper.getComponent(Editor).props("open")).toBe(true);
    expect(requests(wrapper)).toHaveLength(0);
  });
  test("pending external commit blocks new requests, rejected save leaves data unchanged", async () => {
    let done!: (value: boolean) => void;
    const wrapper = setup({
      beforeChange: () =>
        new Promise<boolean>((resolve) => {
          done = resolve;
        }),
    });
    const saving = wrapper.vm.change({
      type: "update",
      event: { ...original, title: "Changed" },
    });
    await wrapper.get(".c-scheduler__event-button").trigger("click");
    expect(requests(wrapper)).toHaveLength(0);
    done(false);
    expect(await saving).toBe(false);
    await flushPromises();
    expect(wrapper.emitted("change")).toBeUndefined();
  });
});
