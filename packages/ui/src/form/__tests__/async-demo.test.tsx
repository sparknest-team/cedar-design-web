import { flushPromises, mount } from "@vue/test-utils";
import { afterEach, expect, test, vi } from "vitest";
import Form, { FormItem } from "..";
import Input from "../../input";
import Button from "../../button";
import Checkbox from "../../checkbox";
import Space from "../../space";
import Demo from "../__demos__/async-validate-form.vue";

const wrappers = [];
afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
  vi.useRealTimers();
});
function create() {
  vi.useFakeTimers();
  const wrapper = mount(Demo, {
    global: {
      components: {
        CForm: Form,
        CFormItem: FormItem,
        CInput: Input,
        CButton: Button,
        CCheckbox: Checkbox,
        CSpace: Space,
      },
    },
  });
  wrappers.push(wrapper);
  return wrapper;
}
async function tick() {
  vi.advanceTimersByTime(650);
  await flushPromises();
}

test("async demo validates failure and success with visible model feedback", async () => {
  const wrapper = create();
  const labels = wrapper
    .findAll("label")
    .filter((label) => label.attributes("for"));
  expect(labels.map((label) => label.attributes("for"))).toEqual(
    wrapper.findAll("input[type=text]").map((input) => input.attributes("id")),
  );
  await wrapper.find("input").setValue("guest");
  await wrapper.find("form").trigger("submit");
  await flushPromises();
  expect(wrapper.get("p[role=status]").text()).toContain("校验中");
  await tick();
  expect(wrapper.text()).toContain("用户名必须是 admin");
  expect(wrapper.get("p[role=status]").text()).toContain("未通过");
  await wrapper.find("input").setValue("admin");
  await wrapper.find("form").trigger("submit");
  await flushPromises();
  await tick();
  expect(wrapper.get("p[role=status]").text()).toContain("提交结果：通过");
  expect(wrapper.find("pre").text()).toContain("admin");
});

test("reset cancels pending validation and preserves the reset result", async () => {
  const wrapper = create();
  await wrapper.find("input").setValue("guest");
  await wrapper.find("form").trigger("submit");
  await flushPromises();
  await wrapper.find("form").trigger("reset");
  await tick();
  expect(wrapper.get("p[role=status]").text()).toContain("已重置；活动校验：0");
  expect(wrapper.find("input").element.value).toBe("");
  expect(wrapper.text()).not.toContain("用户名必须是 admin");
});

test("server errors can be displayed and pending timers are cleaned on unmount", async () => {
  const wrapper = create();
  await wrapper
    .findAll("button")
    .find((button) => button.text() === "模拟服务端错误")
    .trigger("click");
  await flushPromises();
  expect(wrapper.text()).toContain("模拟服务端用户名错误");
  expect(wrapper.text()).toContain("模拟服务端岗位错误");
  await wrapper.find("form").trigger("submit");
  await flushPromises();
  wrapper.unmount();
  expect(vi.getTimerCount()).toBe(0);
});
