import { test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Demo from "../__demos__/date-working-hours.vue";
import Scheduler from "../index";
import type { SchedulerInstance } from "../index";
import Space from "../../space";
import Alert from "../../alert";
import Checkbox from "../../checkbox";
test("demo validates personal hours, closure, offscreen dates and weekly fallback", async () => {
  const w = mount(Demo, {
    global: {
      components: Object.fromEntries(
        [Scheduler, Space, Alert, Checkbox].map((c) => [c.name!, c]),
      ),
    },
  });
  try {
    await flushPromises();
    const scheduler = w.getComponent(Scheduler);
    const api = scheduler.vm.$.exposed as unknown as SchedulerInstance;
    const original = scheduler.props("modelValue")![0];
    const move = (day: string, hour: number, resourceIds: string[]) =>
      api.change({
        type: "update",
        event: {
          ...original,
          resourceIds,
          start: `${day}T${hour}:00:00`,
          end: `${day}T${hour + 1}:00:00`,
        },
      });
    expect(await move("2026-09-12", 13, ["lin", "chen"])).toBe(false);
    expect(await move("2026-09-12", 13, ["lin"])).toBe(true);
    expect(await move("2026-09-12", 10, ["device"])).toBe(false);
    expect(await move("2026-09-30", 13, ["lin"])).toBe(false);
    w.getComponent(Checkbox).vm.$emit("update:modelValue", false);
    await flushPromises();
    expect(await move("2026-09-12", 10, ["lin"])).toBe(false);
    expect(await move("2026-09-30", 13, ["lin"])).toBe(true);
  } finally {
    w.unmount();
    document.body.innerHTML = "";
  }
});
