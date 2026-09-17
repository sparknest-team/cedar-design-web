import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import Scheduler from "../Scheduler.vue";
import Space from "../../space";
import Alert from "../../alert";
import Checkbox from "../../checkbox";
import Demo from "../__demos__/layout-groups.vue";
import { layoutSchedulerEvents, duplicateSchedulerEvent } from "../core";
import type { SchedulerEvent } from "../core";

const day = new Date(2026, 8, 15);
const block = (
  id: string,
  start: number,
  end: number,
  layoutGroupId?: string,
): SchedulerEvent => ({
  id,
  title: id,
  start: new Date(2026, 8, 15, start),
  end: new Date(2026, 8, 15, end),
  layoutGroupId,
});
const events = [
  block("a", 9, 11, "g"),
  block("b", 11, 13, "g"),
  block("c", 10, 12),
  block("d", 15, 16, "g"),
];

test("demo maps business references into optional groups and switches geometry", async () => {
  const wrapper = mount(Demo, {
    global: {
      components: Object.fromEntries(
        [Scheduler, Space, Alert, Checkbox].map((component) => [
          component.name!,
          component,
        ]),
      ),
    },
  });
  try {
    const scheduler = wrapper.getComponent(Scheduler);
    expect(scheduler.props("modelValue")?.[0].layoutGroupId).toBe("A");
    const controls = wrapper.findAllComponents(Checkbox);
    controls[0].vm.$emit("update:modelValue", false);
    controls[1].vm.$emit("update:modelValue", true);
    await nextTick();
    expect(scheduler.props("modelValue")?.[0].layoutGroupId).toBeUndefined();
    expect(typeof scheduler.props("eventLayout")).toBe("function");
    expect(wrapper.text()).toContain("阶段一");
  } finally {
    wrapper.unmount();
  }
});

test("continuous group members share one lane; gaps create independent units", () => {
  const result = layoutSchedulerEvents(events, day);
  const [a, c, b, d] = result;
  expect(a.layoutUnitId).toBe(b.layoutUnitId);
  expect(a.column).toBe(b.column);
  expect(c.column).not.toBe(a.column);
  expect([a.columns, b.columns, c.columns]).toEqual([2, 2, 2]);
  expect(d.layoutUnitId).not.toBe(a.layoutUnitId);
  expect(d.columns).toBe(1);
  expect(layoutSchedulerEvents([...events].reverse(), day)).toEqual(result);
  expect(events[0]).not.toHaveProperty("column");
});

test("business metadata does not influence packing", () => {
  const result = layoutSchedulerEvents(
    [
      { ...block("a", 9, 12), metadata: { taskId: "same", type: "rest" } },
      { ...block("b", 9, 12), metadata: { taskId: "same", type: "rest" } },
    ],
    day,
  );
  expect(result.map((item) => item.column)).toEqual([0, 1]);
  expect(result.map((item) => item.columns)).toEqual([2, 2]);
});

test("overlapping members count as one unit; touching unrelated units reuse lanes", () => {
  const result = layoutSchedulerEvents(
    [block("a", 9, 12, "g"), block("b", 10, 13, "g"), block("c", 13, 14)],
    day,
  );
  expect(result.map((item) => item.columns)).toEqual([1, 1, 1]);
  expect(duplicateSchedulerEvent(events[0], "copy")).not.toHaveProperty(
    "layoutGroupId",
  );
});

test("clipping preserves grouping and separates event IDs from group IDs", () => {
  const result = layoutSchedulerEvents(
    [block("a", 7, 10, "g"), block("b", 10, 14, "g"), block("g", 8, 12)],
    day,
    8,
    13,
  );
  expect(result.map((item) => [item.start, item.end])).toEqual([
    [480, 720],
    [480, 600],
    [600, 780],
  ]);
  expect(result.every((item) => item.columns === 2)).toBe(true);
});

test("custom geometry reaches grid; focus raises the whole unit and blur restores it", async () => {
  const wrapper = mount(Scheduler, {
    attachTo: document.body,
    props: {
      defaultDate: day,
      defaultMode: "day",
      defaultValue: events,
      showSidebar: false,
      eventLayout: () => ({ left: 0.1, width: 0.8 }),
    },
  });
  try {
    const cards = wrapper.findAll(".c-scheduler__positioned-event");
    expect((cards[0].element as HTMLElement).style.left).toBe("10%");
    expect((cards[0].element as HTMLElement).style.width).toBe("80%");
    const button = cards[0].get("button").element as HTMLButtonElement;
    button.focus();
    await nextTick();
    expect(
      wrapper.findAll(".c-scheduler__positioned-event--group-focused"),
    ).toHaveLength(2);
    button.blur();
    await nextTick();
    expect(
      wrapper.findAll(".c-scheduler__positioned-event--group-focused"),
    ).toHaveLength(0);
    await wrapper.setProps({ eventLayout: () => ({ left: NaN, width: 2 }) });
    expect((cards[0].element as HTMLElement).style.left).toBe("0%");
    expect((cards[0].element as HTMLElement).style.width).toBe("100%");
  } finally {
    wrapper.unmount();
  }
});
