import { useDemoControls } from "../../../test-utils/demo-controls";
import { mount, flushPromises } from "@vue/test-utils";
import { expect, test } from "vitest";
import Form, { FormItem } from "..";
import Input from "../../input";
import Button from "../../button";
import Space from "../../space";
import Demo from "../__demos__/async-race.vue";

useDemoControls();

test("remounted async field ignores a prior instance result in both return orders", async () => {
  const wrapper = mount(Demo, {
    global: {
      components: {
        CForm: Form,
        CFormItem: FormItem,
        CInput: Input,
        CButton: Button,
        CSpace: Space,
      },
    },
  });
  const click = (name) =>
    wrapper
      .findAll("button")
      .find((button) => button.text() === name)
      .trigger("click");
  const field = () => wrapper.get("input:not([type=checkbox])");
  const mounted = () => wrapper.findAll("input[type=checkbox]")[2];
  try {
    await field().setValue("guest");
    await click("校验字段");
    await mounted().setValue(false);
    expect(wrapper.find("input:not([type=checkbox])").exists()).toBe(false);
    expect(
      wrapper.findAll("button").find((button) => button.text() === "校验字段")
        .element.disabled,
    ).toBe(true);
    await mounted().setValue(true);
    await field().setValue("admin");
    await click("校验字段");
    await click("返回最新结果");
    await flushPromises();
    await click("返回最早结果");
    await flushPromises();
    expect(wrapper.get("[role=status]").text()).toContain("通过；等待结果：0");
    expect(field().attributes("aria-invalid")).not.toBe("true");
    await click("校验字段");
    await mounted().setValue(false);
    await mounted().setValue(true);
    await field().setValue("guest");
    await click("校验字段");
    await click("返回最新结果");
    await flushPromises();
    await click("返回最早结果");
    await flushPromises();
    expect(wrapper.get("[role=status]").text()).toContain(
      "未通过；等待结果：0",
    );
    expect(field().attributes("aria-invalid")).toBe("true");
    await click("校验字段");
    await mounted().setValue(false);
    await mounted().setValue(true);
    await field().setValue("admin");
    await click("校验字段");
    await click("返回最早结果");
    await flushPromises();
    expect(wrapper.get("[role=status]").text()).toContain(
      "校验中；等待结果：1",
    );
    expect(field().attributes("aria-invalid")).not.toBe("true");
    await click("返回最新结果");
    await flushPromises();
    expect(wrapper.get("[role=status]").text()).toContain("通过；等待结果：0");
    expect(field().attributes("aria-invalid")).not.toBe("true");
  } finally {
    wrapper.unmount();
  }
});
