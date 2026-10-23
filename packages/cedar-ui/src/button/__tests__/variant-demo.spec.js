import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { expect, test, vi } from "vitest";
import Button from "..";
import { useDemoControls } from "../../../test-utils/demo-controls";
import { MenuOption } from "../../menu";
import Radio, { RadioGroup } from "../../radio";
import Select from "../../select";
import Space from "../../space";
import SplitButton from "../../split-button";
import SplitDemo from "../../split-button/__demos__/variants.vue";
import Switch from "../../switch";
import ButtonDemo from "../__demos__/variants.vue";

useDemoControls();

vi.mock("@cedarjs/ui", () => ({ Message: { info: vi.fn() } }));
// Documentation bootstrap needs @config in the site; component tests isolate that shell.

const components = {
  CButton: Button,
  CSplitButton: SplitButton,
  CRadio: Radio,
  CRadioGroup: RadioGroup,
  CSwitch: Switch,
  CMenuOption: MenuOption,
  CSpace: Space,
};

test("button catalog controls update variant and size while preserving every semantic status", async () => {
  const wrapper = mount(ButtonDemo, { global: { components } });
  try {
    const statuses = [
      "default",
      "primary",
      "secondary",
      "tertiary",
      "info",
      "success",
      "warning",
      "danger",
    ];
    const buttons = () => wrapper.findAllComponents(Button);
    expect(buttons()).toHaveLength(statuses.length);
    expect(buttons().map((button) => button.props("status"))).toEqual(statuses);
    for (const button of buttons()) {
      expect(button.classes()).toContain("c-button--variant-default");
      expect(button.props("size")).toBe("md");
    }
    const controls = wrapper.findAllComponents(Select);
    expect(controls).toHaveLength(2);
    controls[0].vm.$emit("update:modelValue", "outline");
    controls[1].vm.$emit("update:modelValue", "lg");
    await nextTick();
    for (const [index, button] of buttons().entries()) {
      expect(button.classes()).toContain("c-button--variant-outline");
      expect(button.classes()).toContain(`c-button--status-${statuses[index]}`);
      expect(button.props("size")).toBe("lg");
    }
  } finally {
    wrapper.unmount();
  }
});

test("split button variant demo starts neutral and radio controls update both appearance roles", async () => {
  const wrapper = mount(SplitDemo, { global: { components } });
  try {
    const buttons = () => wrapper.findAllComponents(Button);
    for (const button of buttons()) {
      expect(button.props("status")).toBeUndefined();
      expect(button.classes()).toContain("c-button--status-default");
      expect(button.classes()).toContain("c-button--variant-default");
    }
    const groups = wrapper.findAllComponents(RadioGroup);
    groups[0].vm.$emit("update:modelValue", "outline");
    groups[1].vm.$emit("update:modelValue", "danger");
    await nextTick();
    for (const button of buttons()) {
      expect(button.classes()).toContain("c-button--variant-outline");
      expect(button.classes()).toContain("c-button--status-danger");
    }
  } finally {
    wrapper.unmount();
  }
});
