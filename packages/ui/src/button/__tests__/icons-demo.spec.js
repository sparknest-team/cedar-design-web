import {
  IconPlus,
  IconReply,
  IconInfoCircle,
  IconCheck,
  IconDelete,
  IconClose,
} from "@cedar-design/icons-vue";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { expect, test } from "vitest";
import Button from "..";
import Form, { FormItem } from "../../form";
import { RadioGroup } from "../../radio";
import Space from "../../space";
import IconsDemo from "../__demos__/icons.vue";
import { useDemoControls } from "../../../test-utils/demo-controls";

useDemoControls();

test("icon layouts share variant and size controls without hiding labels", async () => {
  const wrapper = mount(IconsDemo, {
    global: {
      components: {
        CIconPlus: IconPlus,
        CIconReply: IconReply,
        CIconInfoCircle: IconInfoCircle,
        CIconCheck: IconCheck,
        CIconDelete: IconDelete,
        CIconClose: IconClose,
        CButton: Button,
        CRadioGroup: RadioGroup,
        CForm: Form,
        CFormItem: FormItem,
        CSpace: Space,
      },
    },
  });
  try {
    const buttons = () => wrapper.findAllComponents(Button);
    for (const icon of [
      IconPlus,
      IconReply,
      IconInfoCircle,
      IconCheck,
      IconDelete,
      IconClose,
    ]) {
      expect(wrapper.findAllComponents(icon)).toHaveLength(3);
    }
    expect(buttons()).toHaveLength(18);
    expect(
      buttons()
        .slice(0, 6)
        .every((b) => b.classes().includes("c-button--icon-only")),
    ).toBe(true);
    expect(
      buttons()
        .slice(6)
        .map((b) => b.text()),
    ).toEqual([
      "Add",
      "Reply",
      "Info",
      "Confirm",
      "Delete",
      "Close",
      "Add",
      "Reply",
      "Info",
      "Confirm",
      "Delete",
      "Close",
    ]);
    expect(
      buttons()
        .slice(12)
        .every((b) => b.classes().includes("c-button--stacked")),
    ).toBe(true);
    const controls = wrapper.findAllComponents(RadioGroup);
    for (const variant of ["default", "text", "outline", "tonal"]) {
      controls[0].vm.$emit("update:modelValue", variant);
      for (const size of ["xs", "sm", "md", "lg", "xl"]) {
        controls[1].vm.$emit("update:modelValue", size);
        await nextTick();
        expect(
          buttons().every(
            (b) => b.props("variant") === variant && b.props("size") === size,
          ),
        ).toBe(true);
        expect(
          buttons()
            .slice(6)
            .every((b) => b.text().length > 0),
        ).toBe(true);
      }
    }
  } finally {
    wrapper.unmount();
  }
});
