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

  test("keeps input changes separate from committed changes", async () => {
    const wrapper = mount(InputNumber, {
      props: { modelValue: 1, modelEvent: "input", clearable: true },
    });
    const input = wrapper.get("input");

    await input.trigger("focus");
    await input.setValue("2");
    expect(wrapper.emitted("update:modelValue")).toEqual([[2]]);
    expect(wrapper.emitted("change")).toBeUndefined();

    await input.trigger("keydown", { key: "Enter" });
    await input.trigger("blur");
    expect(wrapper.emitted("change")).toHaveLength(1);

    await wrapper.get(".c-field-decorator__clear-btn").trigger("click");
    expect(wrapper.emitted("clear")).toHaveLength(1);
    expect(wrapper.emitted("change")).toHaveLength(1);
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([undefined]);
  });

  test("preserves intermediate numeric input and forwards slots", async () => {
    const wrapper = mount(InputNumber, {
      props: { modelValue: 1, modelEvent: "input", clearable: true },
      slots: {
        prepend: () => "before",
        append: () => "after",
        "clear-icon": ({ clear }) => <button onClick={clear}>clear</button>,
      },
    });
    const input = wrapper.get("input");

    await input.setValue("1.");
    expect(input.element.value).toBe("1.");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    expect(wrapper.text()).toContain("before");
    expect(wrapper.text()).toContain("after");
    expect(wrapper.text()).toContain("clear");
  });

  test("clamps and formats values when committing", async () => {
    const wrapper = mount(InputNumber, {
      props: {
        modelValue: 1,
        min: 0,
        max: 2,
        precision: 1,
        formatter: (value: string) => `$${value}`,
        parser: (value: string) => value.replace("$", ""),
      },
    });
    const input = wrapper.get("input");

    await input.trigger("focus");
    await input.setValue("$3.26");
    await input.trigger("blur");

    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([2]);
    expect(input.element.value).toBe("$2.0");
  });
});
