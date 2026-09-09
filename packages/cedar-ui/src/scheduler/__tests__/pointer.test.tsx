import { afterEach, describe, expect, test, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Card from "../components/scheduler-event.vue";
import Scheduler from "../index";
const wrappers: ReturnType<typeof mount>[] = [];
const elementsFromPoint = document.elementsFromPoint;
const event = {
  id: "e",
  title: "Review",
  start: "2026-09-09T09:00:00",
  end: "2026-09-09T10:00:00",
  resourceIds: ["a", "b"],
};
function pointer(type: string, x: number, y: number) {
  document.dispatchEvent(
    new MouseEvent(type, { clientX: x, clientY: y, bubbles: true }),
  );
}
afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
  Object.defineProperty(document, "elementsFromPoint", {
    configurable: true,
    value: elementsFromPoint,
  });
});
describe("Scheduler pointer interaction", () => {
  test("movement threshold, pointer release and cleanup", async () => {
    const wrapper = mount(Card, { props: { event } });
    wrappers.push(wrapper);
    await wrapper.trigger("pointerdown", { button: 0, clientX: 0, clientY: 0 });
    pointer("pointermove", 2, 2);
    expect(wrapper.emitted("drag-start")).toBeUndefined();
    pointer("pointermove", 10, 10);
    pointer("pointerup", 20, 30);
    expect(wrapper.emitted("drag-start")?.[0][1]).toBe(false);
    expect(wrapper.emitted("pointer-drop")?.[0]).toEqual([20, 30]);
    pointer("pointerup", 50, 50);
    expect(wrapper.emitted("pointer-drop")).toHaveLength(1);
  });
  test("Escape cancels, readonly ignores pointer, unmount cleans listeners", async () => {
    const wrapper = mount(Card, { props: { event } });
    wrappers.push(wrapper);
    await wrapper.trigger("pointerdown", { button: 0, clientX: 0, clientY: 0 });
    pointer("pointermove", 10, 10);
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    pointer("pointerup", 20, 20);
    expect(wrapper.emitted("pointer-drop")).toBeUndefined();
    await wrapper.setProps({ movable: false });
    await wrapper.trigger("pointerdown", { button: 0, clientX: 0, clientY: 0 });
    pointer("pointermove", 10, 10);
    expect(wrapper.emitted("drag-start")).toHaveLength(1);
    await wrapper.setProps({ movable: true });
    await wrapper.trigger("pointerdown", { button: 0, clientX: 0, clientY: 0 });
    const cleanup = vi.spyOn(document, "removeEventListener");
    wrapper.unmount();
    for (const name of ["pointermove", "pointerup", "pointercancel", "keydown"]) {
      expect(cleanup.mock.calls.some(call => call[0] === name)).toBe(true);
    }
    cleanup.mockRestore();
  });
  test("resize handle emits resize gesture", async () => {
    const wrapper = mount(Card, { props: { event, resizable: true } });
    wrappers.push(wrapper);
    await wrapper
      .get(".c-scheduler__resize")
      .trigger("pointerdown", { button: 0, clientX: 0, clientY: 0 });
    pointer("pointermove", 20, 20);
    pointer("pointerup", 20, 30);
    expect(wrapper.emitted("drag-start")?.[0][1]).toBe(true);
  });
  test("pointer hit testing commits a multi-resource move", async () => {
    const wrapper = mount(Scheduler, {
      props: {
        defaultDate: "2026-09-09",
        defaultMode: "resource-day",
        defaultValue: [event],
        resources: [
          { id: "a", label: "A" },
          { id: "b", label: "B" },
          { id: "c", label: "C" },
        ],
      },
    });
    wrappers.push(wrapper);
    const target = wrapper
      .findAll(".c-scheduler__time-column")[2]
      .findAll(".c-scheduler__time-cell")[4].element;
    Object.defineProperty(document, "elementsFromPoint", {
      configurable: true,
      value: () => [target],
    });
    await wrapper
      .get(".c-scheduler__positioned-event .c-scheduler__event")
      .trigger("pointerdown", { button: 0, clientX: 0, clientY: 0 });
    pointer("pointermove", 100, 100);
    pointer("pointerup", 100, 100);
    await flushPromises();
    expect(wrapper.emitted("update:modelValue")?.[0][0]).toMatchObject([
      { resourceIds: ["b", "c"] },
    ]);
    expect(wrapper.emitted("change")).toHaveLength(1);
  });
});
