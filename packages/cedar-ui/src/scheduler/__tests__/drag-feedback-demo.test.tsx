import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { expect, test } from "vitest";
import Scheduler from "../Scheduler.vue";
import Button from "../../button";
import DragFeedbackDemo from "../__demos__/drag-feedback.vue";

test("actual drag demo displays submitted IDs/times independently and resets them", async () => {
  const wrapper = mount(DragFeedbackDemo, {
    global: { components: { CScheduler: Scheduler, CButton: Button } },
  });
  try {
    const scheduler = wrapper.findComponent(Scheduler);
    const original = scheduler.props("modelValue")!;
    expect(original.map((event) => event.id)).toEqual(["design", "review"]);
    expect(wrapper.get('[data-demo-event="design"]').text()).toContain(
      "09:00:00",
    );
    const updated = original.map((event) =>
      event.id === "design"
        ? { ...event, start: "2026-09-09T09:30:00", end: "2026-09-09T11:00:00" }
        : event,
    );
    scheduler.vm.$emit("update:modelValue", updated);
    await nextTick();
    expect(wrapper.get('[data-demo-event="design"]').text()).toContain(
      "09:30:00",
    );
    expect(wrapper.get('[data-demo-event="review"]').text()).toContain(
      "11:00:00",
    );
    expect(wrapper.get('[data-demo-event="review"]').text()).toContain(
      "12:00:00",
    );
    const reset = wrapper
      .findAll("button")
      .find((button) => button.text() === "重置日程")!;
    await reset.trigger("click");
    expect(scheduler.props("modelValue")).toEqual(original);
    expect(scheduler.props("modelValue")).not.toBe(original);
    expect(wrapper.get('[data-demo-event="design"]').text()).toContain(
      "09:00:00",
    );
  } finally {
    wrapper.unmount();
  }
});
