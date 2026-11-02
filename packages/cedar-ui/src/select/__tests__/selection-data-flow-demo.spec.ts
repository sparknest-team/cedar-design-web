import { useDemoControls } from "../../../test-utils/demo-controls";
import { afterEach, describe, expect, test } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import { nextTick } from "vue";
import Select from "../index";
import Button from "../../button";
import Checkbox from "../../checkbox";
import Demo from "../__demos__/selection-data-flow.vue";

useDemoControls();

const cleanups: (() => void)[] = [];
afterEach(() => cleanups.splice(0).forEach((cleanup) => cleanup()));
const settle = async () => {
  await nextTick();
  await flushPromises();
  await new Promise((resolve) => setTimeout(resolve, 80));
  await nextTick();
};
function create() {
  const host = document.createElement("div");
  document.body.appendChild(host);
  const wrapper = mount(Demo, {
    attachTo: host,
    global: {
      components: { CSelect: Select, CButton: Button, CCheckbox: Checkbox },
    },
  });
  cleanups.push(() => {
    wrapper.unmount();
    host.remove();
  });
  return wrapper;
}
function cityOption(panel = false) {
  // Cedar's click editor contains an inline Select whose Menu teleports outside the editor.
  const options = Array.from(
    document.querySelectorAll<HTMLElement>('[role="option"]'),
  ).filter((element) => element.textContent?.includes("杭州"));
  const option = panel ? options[options.length - 1] : options[0];
  expect(option).toBeTruthy();
  return option!;
}
describe("Select data flow demo", () => {
  test("opening and highlighting leave the form empty; inline selection commits once", async () => {
    const wrapper = create();
    const select = wrapper.findAllComponents(Select)[0];
    await select.get("input").trigger("click");
    await settle();
    expect(select.emitted("update:modelValue")).toBeUndefined();
    expect(wrapper.text()).toContain("form.city = undefined");
    cityOption().dispatchEvent(new MouseEvent("mouseenter"));
    await settle();
    expect(select.emitted("update:modelValue")).toBeUndefined();
    cityOption().click();
    await settle();
    expect(select.emitted("update:modelValue")).toEqual([["hangzhou"]]);
    expect(wrapper.text()).toContain('form.city = "hangzhou"');
    expect(wrapper.text()).toContain('update:modelValue("hangzhou")');
  });
  test("panel selection stays draft until the actual confirm button is clicked", async () => {
    const wrapper = create();
    const select = wrapper.findAllComponents(Select)[1];
    await select.get("button").trigger("click");
    await settle();
    cityOption(true).click();
    await settle();
    expect(select.emitted("update:modelValue")).toBeUndefined();
    expect(wrapper.text()).toContain("form.panelCity = undefined");
    const confirm = document.querySelector<HTMLButtonElement>(
      ".c-field-presentation__footer button",
    );
    expect(confirm).toBeTruthy();
    confirm!.click();
    await settle();
    expect(select.emitted("update:modelValue")).toEqual([["hangzhou"]]);
    expect(wrapper.text()).toContain('form.panelCity = "hangzhou"');
  });
});
