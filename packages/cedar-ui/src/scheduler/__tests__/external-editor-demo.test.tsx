import { expect, test } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import { nextTick } from "vue";
import Demo from "../__demos__/external-editor.vue";
import Scheduler from "../index";
import Button from "../../button";
import Checkbox from "../../checkbox";
import Dialog from "../../dialog";
import Form, { FormItem } from "../../form";
import Input from "../../input";
import DateField from "../../date";
import Textarea from "../../textarea";
import Space from "../../space";
import Alert from "../../alert";

const components = Object.fromEntries(
  [
    Scheduler,
    Button,
    Checkbox,
    Dialog,
    Form,
    FormItem,
    Input,
    DateField,
    Textarea,
    Space,
    Alert,
  ].map((component) => [component.name!, component]),
);

test("external editor keeps a rejected draft and retries without closing", async () => {
  const wrapper = mount(Demo, {
    global: { components },
  });
  try {
    const scheduler = wrapper.getComponent(Scheduler);
    wrapper.getComponent(Checkbox).vm.$emit("update:modelValue", true);
    await nextTick();
    wrapper
      .get(".c-scheduler__positioned-event button")
      .element.dispatchEvent(new MouseEvent("click", { bubbles: true, detail: 1 }));
    await flushPromises();
    expect(wrapper.getComponent(Dialog).props("open")).toBe(true);
    const titleInput = wrapper
      .findAllComponents(Input)
      .find((input) => input.props("modelValue") === "设备例行检查")!;
    titleInput.vm.$emit("update:modelValue", "现场复核已完成");
    await nextTick();
    wrapper.getComponent(Form).vm.$emit("submit");
    await flushPromises();
    expect(wrapper.getComponent(Dialog).props("open")).toBe(true);
    expect(titleInput.props("modelValue")).toBe("现场复核已完成");
    expect(scheduler.props("modelValue")[0].title).toBe("设备例行检查");
    expect(wrapper.getComponent(Checkbox).props("modelValue")).toBe(false);
    expect(wrapper.getComponent(Alert).text()).toContain("失败");

    wrapper.getComponent(Form).vm.$emit("submit");
    await flushPromises();
    await nextTick();
    expect(wrapper.getComponent(Dialog).props("open")).toBe(false);
    expect(scheduler.props("modelValue")[0].title).toBe("现场复核已完成");
  } finally {
    wrapper.unmount();
    document.body.innerHTML = "";
  }
});

test("external editor retries a rejected delete and removes only the requested event", async () => {
  const wrapper = mount(Demo, { global: { components } });
  try {
    const scheduler = wrapper.getComponent(Scheduler);
    wrapper.getComponent(Checkbox).vm.$emit("update:modelValue", true);
    await nextTick();
    wrapper
      .get(".c-scheduler__positioned-event button")
      .element.dispatchEvent(new MouseEvent("click", { bubbles: true, detail: 1 }));
    await flushPromises();
    const dialog = wrapper.getComponent(Dialog);
    const remove = dialog
      .findAllComponents(Button)
      .find((button) => button.text() === "删除")!;
    remove.vm.$emit("click");
    await flushPromises();
    expect(dialog.props("open")).toBe(true);
    expect(scheduler.props("modelValue")).toHaveLength(1);
    expect(wrapper.getComponent(Checkbox).props("modelValue")).toBe(false);
    expect(wrapper.getComponent(Alert).text()).toContain("失败");

    remove.vm.$emit("click");
    await flushPromises();
    expect(dialog.props("open")).toBe(false);
    expect(scheduler.props("modelValue")).toHaveLength(0);
  } finally {
    wrapper.unmount();
    document.body.innerHTML = "";
  }
});
