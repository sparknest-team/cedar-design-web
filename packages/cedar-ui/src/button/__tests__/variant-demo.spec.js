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

vi.mock("@cedar-design/ui", () => ({ Message: { info: vi.fn() } }));
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

test("split button variant catalog keeps all four neutral variants and working primary and menu actions", async () => {
  const { Message } = await import("@cedar-design/ui");
  vi.clearAllMocks();
  const wrapper = mount(SplitDemo, { global: { components } });
  try {
    const splits = wrapper.findAllComponents(SplitButton);
    const variants = ["default", "outline", "tonal", "text"];
    expect(splits).toHaveLength(variants.length);
    for (const [index, split] of splits.entries()) {
      const buttons = split.findAllComponents(Button);
      expect(buttons).toHaveLength(2);
      for (const button of buttons) {
        expect(button.props("status")).toBeUndefined();
        expect(button.classes()).toContain("c-button--status-default");
        expect(button.classes()).toContain(`c-button--variant-${variants[index]}`);
      }
      await buttons[0].trigger("click");
      expect(Message.info).toHaveBeenLastCalledWith("发布成功");
      split.vm.$emit("select", "draft", { label: "保存草稿" });
      expect(Message.info).toHaveBeenLastCalledWith("保存草稿");
    }
    expect(Message.info).toHaveBeenCalledTimes(variants.length * 2);
  } finally {
    wrapper.unmount();
  }
});
