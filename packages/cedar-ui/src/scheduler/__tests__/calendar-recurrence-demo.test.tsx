import { FormItem } from "../../form";
import { RadioGroup } from "../../radio";
import { expect, test } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Demo from "../__demos__/calendar-recurrence.vue";
import Scheduler from "../index";
import Button from "../../button";
import InputNumber from "../../input-number";
import Checkbox from "../../checkbox";
import Space from "../../space";
import Alert from "../../alert";
import Tag from "../../tag";
test("calendar rule demo previews skip/fallback dates and keeps navigation usable", async () => {
  const wrapper = mount(Demo, {
    global: {
      components: Object.fromEntries(
        [
          RadioGroup,
          FormItem,
          Scheduler,
          Button,
          InputNumber,
          Checkbox,
          Space,
          Alert,
          Tag,
        ].map((item) => [item.name!, item]),
      ),
    },
  });
  try {
    await flushPromises();
    const labels = () =>
      wrapper.findAllComponents(Button).map((item) => item.text());
    expect(labels()).toContain("2026-03-31");
    expect(labels()).not.toContain("2026-02-28");
    wrapper.getComponent(Checkbox).vm.$emit("update:modelValue", true);
    await flushPromises();
    expect(labels()).toContain("2026-02-28");
    const target = wrapper
      .findAllComponents(Button)
      .find((item) => item.text() === "2026-02-28")!;
    await target.trigger("click");
    await flushPromises();
    expect(wrapper.getComponent(Scheduler).props("date")).toEqual(
      new Date("2026-02-28T09:00:00"),
    );
    const preset = wrapper
      .findAllComponents(RadioGroup)
      .find((item) =>
        item.props("options")?.some((option) => option.value === "weekday"),
      )!;
    preset.vm.$emit("update:modelValue", "weekday");
    await flushPromises();
    expect(labels()).toContain("2026-01-30");
    expect(labels()).toContain("2026-02-27");
    preset.vm.$emit("update:modelValue", "leap");
    await flushPromises();
    expect(labels()).toContain("2025-02-28");
  } finally {
    wrapper.unmount();
    document.body.innerHTML = "";
  }
});
