import { test, expect, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { defineComponent, h, nextTick } from "vue";
import { useTimelinePointer } from "../use-timeline-pointer";
import Scheduler from "../scheduler.vue";
import VirtualList from "../../_components/virtual-list-v2";
const event = {
  id: "a",
  title: "Move me",
  start: "2026-09-22T09:00:00",
  end: "2026-09-22T10:00:00",
  resourceIds: ["r0"],
};
function setup() {
  return mount(Scheduler, {
    props: {
      defaultDate: "2026-09-22",
      defaultMode: "resource-timeline",
      defaultScale: "hour",
      virtualListProps: { height: 400 },
      resources: Array.from({ length: 100 }, (_, i) => ({
        id: `r${i}`,
        label: `R${i}`,
      })),
      defaultValue: [event],
    },
  });
}
test("pointer drag survives source recycling and commits the destination resource", async () => {
  const w = setup();
  const old = document.elementsFromPoint;
  try {
    await w
      .get(".c-scheduler__timeline-event .c-scheduler__event")
      .trigger("pointerdown", { button: 0, clientX: 0, clientY: 0 });
    Object.defineProperty(document, "elementsFromPoint", {
      configurable: true,
      value: () => [],
    });
    document.dispatchEvent(
      new MouseEvent("pointermove", {
        clientX: 30,
        clientY: 30,
        bubbles: true,
      }),
    );
    await flushPromises();
    w.getComponent(VirtualList).vm.scrollTo({ index: 80 });
    await flushPromises();
    expect(w.find(".c-scheduler__timeline-event").exists()).toBe(false);
    expect(document.querySelector(".c-scheduler__drag-ghost")).not.toBeNull();
    const target = w.find('[data-scheduler-resource="r80"]');
    Object.defineProperty(document, "elementsFromPoint", {
      configurable: true,
      value: () => [target.element],
    });
    document.dispatchEvent(
      new MouseEvent("pointerup", { clientX: 30, clientY: 30, bubbles: true }),
    );
    await flushPromises();
    expect(
      (w.emitted("update:modelValue")![0][0] as any[])[0].resourceIds,
    ).toEqual(["r80"]);
    expect(document.querySelector(".c-scheduler__drag-ghost")).toBeNull();
  } finally {
    w.unmount();
    Object.defineProperty(document, "elementsFromPoint", {
      configurable: true,
      value: old,
    });
  }
});
test("Escape cancels a managed gesture without saving", async () => {
  const w = setup();
  const old = document.elementsFromPoint;
  try {
    Object.defineProperty(document, "elementsFromPoint", {
      configurable: true,
      value: () => [],
    });
    await w
      .get(".c-scheduler__timeline-event .c-scheduler__event")
      .trigger("pointerdown", { button: 0, clientX: 0, clientY: 0 });
    document.dispatchEvent(
      new MouseEvent("pointermove", {
        clientX: 30,
        clientY: 30,
        bubbles: true,
      }),
    );
    await flushPromises();
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await flushPromises();
    expect(w.emitted("update:modelValue")).toBeUndefined();
    expect(document.querySelector(".c-scheduler__drag-ghost")).toBeNull();
  } finally {
    w.unmount();
    Object.defineProperty(document, "elementsFromPoint", {
      configurable: true,
      value: old,
    });
  }
});

test("edge scrolling refreshes the target and locking cancels queued frames", async () => {
  const originalRequest = globalThis.requestAnimationFrame;
  const originalCancel = globalThis.cancelAnimationFrame;
  const frames = new Map<number, FrameRequestCallback>();
  let sequence = 0,
    locked = false;
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    frames.set(++sequence, callback);
    return sequence;
  });
  vi.stubGlobal("cancelAnimationFrame", (id: number) => frames.delete(id));
  const move = vi.fn(),
    end = vi.fn(),
    drop = vi.fn();
  let gesture!: ReturnType<typeof useTimelinePointer>;
  const w = mount(
    defineComponent({
      setup() {
        gesture = useTimelinePointer({
          locked: () => locked,
          start: vi.fn(),
          move,
          end,
          drop,
        });
        return () =>
          h(
            "div",
            { class: "c-scheduler__virtual-rows" },
            h("button", "Source"),
          );
      },
    }),
  );
  try {
    const viewport = w.element as HTMLElement;
    vi.spyOn(viewport, "getBoundingClientRect").mockReturnValue({
      left: 0,
      top: 0,
      right: 200,
      bottom: 200,
      width: 200,
      height: 200,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    });
    gesture.begin(
      {
        button: 0,
        clientX: 100,
        clientY: 100,
        currentTarget: w.get("button").element,
      } as unknown as PointerEvent,
      event,
      false,
      "r0",
      vi.fn(),
    );
    document.dispatchEvent(
      new MouseEvent("pointermove", { clientX: 195, clientY: 195 }),
    );
    const runFrame = () => {
      const [id, callback] = frames.entries().next().value!;
      frames.delete(id);
      callback(0);
    };
    runFrame();
    await nextTick();
    expect(viewport.scrollTop).toBeGreaterThan(0);
    expect(viewport.scrollLeft).toBeGreaterThan(0);
    expect(move).toHaveBeenCalledTimes(2);
    locked = true;
    runFrame();
    expect(frames.size).toBe(0);
    expect(end).toHaveBeenCalledTimes(1);
    expect(drop).not.toHaveBeenCalled();
  } finally {
    w.unmount();
    globalThis.requestAnimationFrame = originalRequest;
    globalThis.cancelAnimationFrame = originalCancel;
    vi.restoreAllMocks();
  }
});
