import { afterEach, describe, expect, test, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { h } from "vue";
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
  document.body.innerHTML = "";
});
describe("Scheduler pointer interaction", () => {
  function grid() {
    const wrapper = mount(Scheduler, {
      props: {
        defaultDate: "2026-09-09",
        defaultMode: "day",
        defaultValue: [event],
        startHour: 8,
        endHour: 12,
      },
      slots: {
        event: ({ event: item }: any) =>
          h("span", { "data-custom-event": "" }, `Custom ${item.title}`),
      },
    });
    wrappers.push(wrapper);
    return wrapper;
  }
  function target(element: Element) {
    Object.defineProperty(document, "elementsFromPoint", {
      configurable: true,
      value: () => [element],
    });
  }
  test("moving renders an inert source ghost and target preview without saving", async () => {
    const wrapper = grid();
    target(wrapper.findAll(".c-scheduler__time-cell")[4].element);
    await wrapper
      .get(".c-scheduler__positioned-event .c-scheduler__event")
      .trigger("pointerdown", { button: 0, clientX: 0, clientY: 0 });
    pointer("pointermove", 30, 40);
    await flushPromises();
    const ghost = document.querySelector(".c-scheduler__drag-ghost")!;
    expect(ghost.textContent).toContain("Custom Review");
    expect(wrapper.classes()).toContain("c-scheduler--dragging");
    expect(ghost.getAttribute("aria-hidden")).toBe("true");
    expect(ghost.hasAttribute("inert")).toBe(true);
    expect(wrapper.get(".c-scheduler__drag-preview").text()).toContain(
      "10:00 – 11:00",
    );
    expect(wrapper.emitted("change")).toBeUndefined();
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await flushPromises();
    expect(document.querySelector(".c-scheduler__drag-ghost")).toBeNull();
    expect(wrapper.classes()).not.toContain("c-scheduler--dragging");
    expect(wrapper.find(".c-scheduler__drag-preview").exists()).toBe(false);
    expect(wrapper.emitted("change")).toBeUndefined();
  });
  test.each([
    ["end", 6, "9", "11"],
    ["start", 1, "8", "10"],
  ])(
    "resize %s changes live geometry and commits the displayed interval",
    async (edge, index, startHour, endHour) => {
      const wrapper = grid();
      target(wrapper.findAll(".c-scheduler__time-cell")[Number(index)].element);
      const source = wrapper.get(".c-scheduler__positioned-event");
      const originalStyle = source.attributes("style");
      await source
        .get(
          edge === "start"
            ? ".c-scheduler__resize--start"
            : ".c-scheduler__resize:not(.c-scheduler__resize--start)",
        )
        .trigger("pointerdown", { button: 0, clientX: 0, clientY: 0 });
      pointer("pointermove", 30, 40);
      await flushPromises();
      const preview = wrapper.get(".c-scheduler__drag-preview");
      expect(wrapper.classes()).toContain("c-scheduler--dragging");
      expect(preview.attributes("style")).not.toBe(originalStyle);
      expect(preview.text()).toContain(
        edge === "start" ? "08:30 – 10:00" : "09:00 – 11:30",
      );
      expect(document.querySelector(".c-scheduler__drag-ghost")).toBeNull();
      expect(wrapper.emitted("change")).toBeUndefined();
      pointer("pointerup", 30, 40);
      await flushPromises();
      const changed = (
        wrapper.emitted("update:modelValue")![0][0] as (typeof event)[]
      )[0];
      expect(new Date(changed.start).getHours()).toBe(Number(startHour));
      expect(new Date(changed.end).getHours()).toBe(Number(endHour));
      expect(wrapper.emitted("change")?.[0][1]).toMatchObject({
        type: "resize",
      });
      expect(wrapper.find(".c-scheduler__drag-preview").exists()).toBe(false);
      expect(wrapper.classes()).not.toContain("c-scheduler--dragging");
    },
  );
  test("permissions changing or window blur cancels ghost and projection", async () => {
    const wrapper = grid();
    target(wrapper.findAll(".c-scheduler__time-cell")[4].element);
    const source = wrapper.get(
      ".c-scheduler__positioned-event .c-scheduler__event",
    );
    await source.trigger("pointerdown", { button: 0, clientX: 0, clientY: 0 });
    pointer("pointermove", 20, 20);
    await flushPromises();
    await wrapper.setProps({ disabled: true });
    expect(wrapper.find(".c-scheduler__drag-preview").exists()).toBe(false);
    expect(document.querySelector(".c-scheduler__drag-ghost")).toBeNull();
    await wrapper.setProps({ disabled: false });
    await source.trigger("pointerdown", { button: 0, clientX: 0, clientY: 0 });
    pointer("pointermove", 20, 20);
    window.dispatchEvent(new Event("blur"));
    await flushPromises();
    expect(wrapper.find(".c-scheduler__drag-preview").exists()).toBe(false);
    expect(document.querySelector(".c-scheduler__drag-ghost")).toBeNull();
  });
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
    for (const name of [
      "pointermove",
      "pointerup",
      "pointercancel",
      "keydown",
    ]) {
      expect(cleanup.mock.calls.some((call) => call[0] === name)).toBe(true);
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
  test("a stopped pointerup cannot leave another card subscribed to the next resize", async () => {
    const first = mount(Card, {
      attachTo: document.body,
      props: { event, resizable: true },
    });
    const second = mount(Card, {
      attachTo: document.body,
      props: {
        event: { ...event, id: "second", title: "Second" },
        resizable: true,
      },
    });
    wrappers.push(first, second);
    await first
      .get(".c-scheduler__resize")
      .trigger("pointerdown", { button: 0 });
    pointer("pointermove", 20, 20);
    const stop = (event: Event) => event.stopPropagation();
    second.element.addEventListener("pointerup", stop);
    await second.trigger("pointerup", { clientX: 20, clientY: 20 });
    second.element.removeEventListener("pointerup", stop);
    expect(first.emitted("pointer-drop")).toHaveLength(1);
    await second
      .get(".c-scheduler__resize")
      .trigger("pointerdown", { button: 0 });
    pointer("pointermove", 40, 40);
    await flushPromises();
    expect(first.classes()).not.toContain("c-scheduler__event--dragging");
    expect(second.classes()).toContain("c-scheduler__event--dragging");
    pointer("pointerup", 40, 40);
    expect(first.emitted("pointer-drop")).toHaveLength(1);
    expect(second.emitted("pointer-drop")).toHaveLength(1);
  });
  test("a new card gesture cancels a lost release and only updates the current event", async () => {
    const other = {
      ...event,
      id: "other",
      title: "Other",
      start: "2026-09-09T11:00:00",
      end: "2026-09-09T12:00:00",
    };
    const wrapper = mount(Scheduler, {
      attachTo: document.body,
      props: {
        defaultDate: "2026-09-09",
        defaultMode: "day",
        defaultValue: [event, other],
        startHour: 8,
        endHour: 14,
      },
    });
    wrappers.push(wrapper);
    const cards = wrapper.findAll(".c-scheduler__positioned-event");
    const originalStyle = cards[0].attributes("style");
    target(wrapper.findAll(".c-scheduler__time-cell")[5].element);
    await cards[0]
      .get(".c-scheduler__resize")
      .trigger("pointerdown", { button: 0 });
    pointer("pointermove", 20, 20);
    await flushPromises();
    // No pointerup: simulate release outside the page followed by a fresh press.
    await cards[1]
      .get(".c-scheduler__resize")
      .trigger("pointerdown", { button: 0 });
    target(wrapper.findAll(".c-scheduler__time-cell")[9].element);
    pointer("pointermove", 40, 40);
    await flushPromises();
    expect(cards[0].attributes("style")).toBe(originalStyle);
    expect(cards[0].get(".c-scheduler__event").classes()).not.toContain(
      "c-scheduler__event--dragging",
    );
    expect(wrapper.get(".c-scheduler__drag-preview").text()).toContain("Other");
    expect(wrapper.emitted("change")).toBeUndefined();
    pointer("pointerup", 40, 40);
    await flushPromises();
    const result = wrapper.emitted(
      "update:modelValue",
    )![0][0] as (typeof event)[];
    expect(result.find((item) => item.id === event.id)).toEqual(event);
    expect(
      new Date(result.find((item) => item.id === other.id)!.end).getHours(),
    ).toBe(13);
    expect(wrapper.emitted("change")).toHaveLength(1);
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
