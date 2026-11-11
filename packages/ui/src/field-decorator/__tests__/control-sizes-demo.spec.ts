import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { expect, test } from "vitest";
import Input from "../../input";
import Button from "../../button";
import Select from "../../select";
import Cascader from "../../cascader";
import Radio, { RadioGroup } from "../../radio";
import Space from "../../space";
import Demo from "../__demos__/control-sizes.vue";

test("selected controls retain size and support clear, tag removal and restoring values", async () => {
  const wrapper = mount(Demo, {
    global: {
      components: {
        CInput: Input,
        CButton: Button,
        CSelect: Select,
        CCascader: Cascader,
        CRadio: Radio,
        CRadioGroup: RadioGroup,
        CSpace: Space,
      },
      stubs: {
        CDate: true,
        CTime: true,
        CDateRange: true,
        CTimeRange: true,
        CInputNumber: true,
        CAutoComplete: true,
      },
    },
  });
  const cell = (name: string) => wrapper.get(`[data-control="${name}"]`);
  const controls = [
    "InputValue",
    "SelectValue",
    "CascaderValue",
    "SelectMultiple",
    "CascaderMultiple",
    "SelectOverflow",
    "CascaderOverflow",
  ];
  try {
    const groups = wrapper.findAllComponents(RadioGroup);
    for (const variant of ["outline", "filled", "standard"]) {
      groups[1].vm.$emit("update:modelValue", variant);
      for (const size of ["xs", "sm", "md", "lg", "xl"]) {
        groups[0].vm.$emit("update:modelValue", size);
        await nextTick();
        for (const name of controls) {
          const field = cell(name).get(".c-field-decorator");
          expect(field.classes()).toContain(`c-field-decorator--size-${size}`);
          expect(field.classes()).toContain(
            `c-field-decorator--variant-${variant}`,
          );
        }
        for (const name of [
          "SelectMultiple",
          "CascaderMultiple",
          "SelectOverflow",
          "CascaderOverflow",
        ]) {
          expect(cell(name).get(".c-selection-field").classes()).toContain(
            "c-selection-field--nowrap",
          );
        }
      }
    }
    for (const name of ["SelectMultiple", "CascaderMultiple"]) {
      expect(cell(name).findAll(".c-tag")).toHaveLength(2);
      await cell(name).findAll(".c-tag__close-btn")[0].trigger("click");
      expect(cell(name).findAll(".c-tag")).toHaveLength(1);
    }
    for (const name of controls) {
      await cell(name).get(".c-field-decorator__clear-btn").trigger("click");
      expect(cell(name).find(".c-field-decorator__clear-btn").exists()).toBe(
        false,
      );
      expect(cell(name).get(".c-field-decorator").classes()).toContain(
        "c-field-decorator--size-xl",
      );
    }
    await wrapper
      .get(".control-size-comparison__states")
      .findComponent(Button)
      .trigger("click");
    for (const name of controls)
      expect(cell(name).find(".c-field-decorator__clear-btn").exists()).toBe(
        true,
      );
    for (const name of ["SelectMultiple", "CascaderMultiple"])
      expect(cell(name).findAll(".c-tag")).toHaveLength(2);
    for (const name of ["SelectOverflow", "CascaderOverflow"])
      expect(cell(name).findAll(".c-tag")).toHaveLength(3);
  } finally {
    wrapper.unmount();
  }
});
