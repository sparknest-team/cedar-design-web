import { useDemoControls } from "../../../test-utils/demo-controls";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { expect, test, vi } from "vitest";
import Checkbox, { CheckboxGroup } from "..";
import Button from "../../button";
import Space from "../../space";
import Demo from "../__demos__/async-options.vue";

useDemoControls();

test("reloading options keeps checkbox focus and the latest selection limit", async () => {
  vi.useFakeTimers();
  const wrapper = mount(Demo, {
    attachTo: document.body,
    global: {
      components: {
        CCheckbox: Checkbox,
        CCheckboxGroup: CheckboxGroup,
        CButton: Button,
        CSpace: Space,
      },
    },
  });
  const load = () =>
    wrapper
      .findAll("button")
      .find((button) => button.text() === "加载选项")
      .trigger("click");
  try {
    await load();
    vi.advanceTimersByTime(800);
    await nextTick();
    await load();
    const selected = wrapper.get("input[value=a]").element;
    selected.focus();
    await wrapper.get("input[value=a]").trigger("keydown", { key: " " });
    await wrapper.get("input[value=a]").trigger("keyup", { key: " " });
    expect(selected.checked).toBe(true);
    expect(wrapper.get("input[value=b]").element.disabled).toBe(true);
    vi.advanceTimersByTime(800);
    await nextTick();
    expect(wrapper.get("input[value=a]").element).toBe(selected);
    expect(document.activeElement).toBe(selected);
    expect(selected.checked).toBe(true);
    await wrapper.get("input[value=a]").trigger("keydown", { key: "Enter" });
    expect(selected.checked).toBe(false);
    expect(wrapper.get("input[value=b]").element.disabled).toBe(false);
    expect(wrapper.get("input[value=remote]").element.checked).toBe(true);
  } finally {
    wrapper.unmount();
    vi.useRealTimers();
  }
});
