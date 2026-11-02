import { useDemoControls } from "../../../test-utils/demo-controls";
import { flushPromises, mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import Steps, { Step } from "..";
import { RadioGroup } from "../../radio";
import Demo from "../__demos__/types.vue";

useDemoControls();

test("four Steps appearances share selectable progress", async () => {
  const wrapper = mount(Demo, {
    global: {
      components: { CSteps: Steps, CStep: Step, CRadioGroup: RadioGroup },
    },
  });
  try {
    expect(
      wrapper.findAllComponents(Steps).map((control) => control.props("type")),
    ).toEqual(["default", "arrow", "dot", "navigation"]);
    wrapper.getComponent(RadioGroup).vm.$emit("update:modelValue", 3);
    await flushPromises();
    expect(
      wrapper
        .findAllComponents(Steps)
        .map((control) => control.props("modelValue")),
    ).toEqual([3, 3, 3, 3]);
    await wrapper
      .get('[data-step-type="dot"] [data-step-index]')
      .trigger("click");
    await flushPromises();
    expect(
      wrapper
        .findAllComponents(Steps)
        .map((control) => control.props("modelValue")),
    ).toEqual([1, 1, 1, 1]);
  } finally {
    wrapper.unmount();
  }
});
