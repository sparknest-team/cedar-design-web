import { h } from "vue";
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import Input from "../../input";
import InputGroup from "../../input/InputGroup.vue";
import Textarea from "../../textarea/textarea.vue";
import Select from "../../select";
import Cascader from "../../cascader";
import InputTag from "../../input-tag";
import DateField from "../../date";
import DateRange from "../../date-range";
import Time from "../../time";
import TimeRange from "../../time-range";

for (const [name, component] of Object.entries({
  Input,
  Textarea,
  Select,
  Cascader,
  InputTag,
  DateField,
  DateRange,
  Time,
  TimeRange,
})) {
  test(`${name} defaults to outline`, () => {
    const owner = mount(component, { props: { editMode: "direct" } });
    try {
      expect(owner.find(".c-field-decorator--variant-outline").exists()).toBe(
        true,
      );
    } finally {
      owner.unmount();
    }
  });
}

test("InputGroup defaults to outline while explicit variants remain available", () => {
  const owner = mount(InputGroup, {
    slots: { default: () => h(Select, { editMode: "direct" }) },
  });
  try {
    expect(owner.find(".c-field-decorator--variant-outline").exists()).toBe(
      true,
    );
  } finally {
    owner.unmount();
  }
});

test("explicit filled appearance still overrides the outline default", () => {
  const owner = mount(Select, {
    props: { variant: "filled", editMode: "direct" },
  });
  try {
    expect(owner.find(".c-field-decorator--variant-filled").exists()).toBe(
      true,
    );
  } finally {
    owner.unmount();
  }
});
