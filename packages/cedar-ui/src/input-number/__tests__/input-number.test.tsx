import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { InputNumber } from "../index";

describe("InputNumber", () => {
  test("render", async () => {
    const wrapper = mount(InputNumber);
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("exposes spinbutton range and accessible controls", async () => {
    const wrapper = mount(InputNumber, {
      props: { modelValue: 2, min: 0, max: 3 },
    });
    const spinbutton = wrapper.get('[role="spinbutton"]');

    expect(spinbutton.attributes()).toMatchObject({
      "aria-valuemin": "0",
      "aria-valuemax": "3",
      "aria-valuenow": "2",
    });
    expect(wrapper.get('button[aria-label="增加数值"]').exists()).toBe(true);
    expect(wrapper.get('button[aria-label="减少数值"]').exists()).toBe(true);

    await spinbutton.trigger("keydown", { key: "ArrowUp" });
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([3]);
  });
});
