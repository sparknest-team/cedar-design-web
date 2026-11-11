import { test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Demo from "../__demos__/business-calendar.vue";
import Scheduler from "../index";
import type { SchedulerInstance } from "../index";
import Space from "../../space";
import Tag from "../../tag";
import Alert from "../../alert";
import Checkbox from "../../checkbox";
test("business-calendar demo synchronizes settlement dates and booking validation including outside view", async () => {
  const wrapper = mount(Demo, {
    global: {
      components: Object.fromEntries(
        [Scheduler, Space, Tag, Alert, Checkbox].map((item) => [
          item.name!,
          item,
        ]),
      ),
    },
  });
  try {
    await flushPromises();
    const scheduler = wrapper.getComponent(Scheduler);
    const api = scheduler.vm.$.exposed as unknown as SchedulerInstance;
    const original = scheduler.props("modelValue")![0];
    const move = (day: string) =>
      api.change({
        type: "update",
        event: {
          ...original,
          start: `${day}T10:00:00`,
          end: `${day}T11:00:00`,
        },
      });
    expect(wrapper.text()).toContain("结算日：2026-02-28");
    expect(await move("2026-02-27")).toBe(false);
    expect(await move("2026-02-17")).toBe(false);
    expect(await move("2026-02-28")).toBe(true);
    await flushPromises();
    wrapper.getComponent(Checkbox).vm.$emit("update:modelValue", false);
    await flushPromises();
    expect(wrapper.text()).toContain("结算日：2026-02-27");
    expect(await move("2026-02-28")).toBe(false);
    expect(await move("2026-02-27")).toBe(true);
  } finally {
    wrapper.unmount();
    document.body.innerHTML = "";
  }
});
