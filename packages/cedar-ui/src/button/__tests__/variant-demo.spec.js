import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { expect, test, vi } from "vitest";
import ButtonDemo from "../__demos__/variants.vue";
import SplitDemo from "../../split-button/__demos__/variants.vue";
import Button from "..";
import SplitButton from "../../split-button";
import Radio, { RadioGroup } from "../../radio";
import Switch from "../../switch";
import { MenuOption } from "../../dropdown-menu";

vi.mock("@cedarjs/ui", () => ({ Message: { info: vi.fn() } }));

const components = {
  CButton: Button,
  CSplitButton: SplitButton,
  CRadio: Radio,
  CRadioGroup: RadioGroup,
  CSwitch: Switch,
  CMenuOption: MenuOption,
};

test.each([
  [ButtonDemo, 1, 3],
  [SplitDemo, 0, 1],
])(
  "variant demo starts neutral and radio controls update both appearance roles",
  async (demo, variantIndex, statusIndex) => {
    const wrapper = mount(demo, { global: { components } });
    try {
      const buttons = () => wrapper.findAllComponents(Button);
      for (const button of buttons()) {
        expect(button.props("status")).toBe(
          demo === SplitDemo ? undefined : "default",
        );
        expect(button.classes()).toContain("c-button--status-default");
        expect(button.classes()).toContain("c-button--variant-default");
      }
      const groups = wrapper.findAllComponents(RadioGroup);
      groups[variantIndex].vm.$emit("update:modelValue", "outline");
      groups[statusIndex].vm.$emit("update:modelValue", "danger");
      await nextTick();
      for (const button of buttons()) {
        expect(button.classes()).toContain("c-button--variant-outline");
        expect(button.classes()).toContain("c-button--status-danger");
      }
    } finally {
      wrapper.unmount();
    }
  },
);
