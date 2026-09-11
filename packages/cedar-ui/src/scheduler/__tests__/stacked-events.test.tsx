import { test, expect } from "vitest";
import { nextTick } from "vue";
import Button from "../../button";
import Space from "../../space";
import Alert from "../../alert";
import Checkbox from "../../checkbox";
import Popover from "../../popover";
import { mount } from "@vue/test-utils";
import Scheduler from "../scheduler.vue";
import Grid from "../components/scheduler-time-grid.vue";
import Demo from "../__demos__/stacked-events.vue";
async function mouse(
  wrapper: { element: Element },
  type: string,
  detail: number,
) {
  wrapper.element.dispatchEvent(
    new MouseEvent(type, { bubbles: true, detail }),
  );
  await nextTick();
}
const events = [0, 1, 2].map((i) => ({
  id: String(i),
  title: `Task ${i}`,
  start: "2026-09-22T09:00:00",
  end: "2026-09-22T11:00:00",
}));
function setup(extra = {}) {
  return mount(Scheduler, {
    attachTo: document.body,
    props: {
      defaultDate: "2026-09-22",
      defaultMode: "week",
      defaultValue: events,
      editable: false,
      ...extra,
    },
  });
}
test("week defaults to percentage-offset stacks; pointer and keyboard activation open details", async () => {
  const w = setup();
  try {
    expect(w.getComponent(Grid).props("eventLayout")).toBe("stack");
    const cards = w.findAll(".c-scheduler__positioned-event--stack");
    expect(cards).toHaveLength(3);
    cards.forEach((card, index) => {
      const style = (card.element as HTMLElement).style;
      expect(parseFloat(style.left)).toBeCloseTo((index * 100) / 3);
      expect(parseFloat(style.left) + parseFloat(style.width)).toBeCloseTo(100);
    });
    const button = cards[0].get("button");
    await mouse(button, "click", 1);
    expect(document.activeElement).toBe(button.element);

    expect(w.emitted("editor-request")).toHaveLength(1);
    await mouse(cards[1].get("button"), "click", 0);
    expect(w.emitted("editor-request")).toHaveLength(2);
    (button.element as HTMLButtonElement).blur();
    expect(cards[0].element.contains(document.activeElement)).toBe(false);
    await w.setProps({ eventLayout: "columns" });
    expect(w.findAll(".c-scheduler__positioned-event--stack")).toHaveLength(0);
    expect(
      (w.find(".c-scheduler__positioned-event").element as HTMLElement).style
        .width,
    ).toBe("33.333333333333336%");
  } finally {
    w.unmount();
  }
});
test("stack viewing respects readonly, disabled and single-click multiselection", async () => {
  const w = setup({ readonly: true });
  try {
    await mouse(w.get(".c-scheduler__positioned-event button"), "click", 1);
    expect((w.emitted("editor-request")![0][0] as any).readonly).toBe(true);
    await w.setProps({ disabled: true });
    await mouse(w.get(".c-scheduler__positioned-event"), "click", 1);
    expect(w.emitted("editor-request")).toHaveLength(1);
    await w.setProps({
      disabled: false,
      readonly: false,
      selectable: true,
    });
    w.getComponent(Checkbox).vm.$emit("update:modelValue", true);
    await nextTick();
    await mouse(w.get(".c-scheduler__positioned-event button"), "click", 1);
    expect(w.emitted("update:selectedKeys")?.[0]?.[0]).toEqual(["0"]);
  } finally {
    w.unmount();
  }
});
test("dense overlap groups use a month-style more popover when limited", async () => {
  const dense = Array.from({ length: 5 }, (_, index) => ({
    id: `dense-${index}`,
    title: `Dense ${index}`,
    start: "2026-09-22T09:00:00",
    end: "2026-09-22T11:00:00",
  }));
  const w = setup({ defaultValue: dense, overlapEventLimit: 2 });
  try {
    expect(w.findAll(".c-scheduler__positioned-event")).toHaveLength(2);
    const popover = w.getComponent(Popover);
    expect(popover.text()).toContain("还有 3 项");
    await popover.get("button").trigger("click");
    expect(
      document.body.querySelectorAll(".c-scheduler__month-more-event"),
    ).toHaveLength(5);
  } finally {
    w.unmount();
  }
});
test("stack demo renders its layout and interaction controls", () => {
  const w = mount(Demo, {
    global: {
      components: Object.fromEntries(
        [Scheduler, Button, Space, Alert, Checkbox].map((c) => [c.name!, c]),
      ),
    },
  });
  try {
    expect(w.text()).toContain("切换并排布局");
    expect(w.text()).toContain("只读查看");
    expect(w.text()).toContain("还有 2 项");
  } finally {
    w.unmount();
  }
});
