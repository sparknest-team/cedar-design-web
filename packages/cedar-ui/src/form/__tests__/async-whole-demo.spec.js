import { useDemoControls } from "../../../test-utils/demo-controls";
import { flushPromises, mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import Form, { FormItem } from "..";
import Input from "../../input";
import Button from "../../button";
import Space from "../../space";
import Demo from "../__demos__/async-race.vue";

useDemoControls();

test.each([
  ["校验整表", "校验字段"],
  ["校验字段", "校验整表"],
])(
  "%s and %s preserve the newest result and reset invalidates old work",
  async (first, second) => {
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
    const field = () => wrapper.get("input:not([type=checkbox])");
    const click = async (name) => {
      await wrapper
        .findAll("button")
        .find((button) => button.text() === name)
        .trigger("click");
      await flushPromises();
    };
    try {
      for (const [oldValue, newValue] of [
        ["guest", "admin"],
        ["admin", "guest"],
      ]) {
        await field().setValue(oldValue);
        await click(first);
        await field().setValue(newValue);
        await click(second);
        expect(wrapper.get("p[role=status]").text()).toContain("等待结果：2");
        await click("返回最新结果");
        await click("返回最早结果");
        expect(wrapper.get("p[role=status]").text()).toContain(
          newValue === "admin" ? "通过；等待结果：0" : "未通过；等待结果：0",
        );
        expect(field().attributes("aria-invalid") === "true").toBe(
          newValue !== "admin",
        );
      }
      await field().setValue("guest");
      await click("校验整表");
      await click("重置");
      await click("返回最早结果");
      expect(wrapper.get("p[role=status]").text()).toContain(
        "已重置；等待结果：0",
      );
      expect(field().element.value).toBe("");
      expect(field().attributes("aria-invalid")).not.toBe("true");
    } finally {
      wrapper.unmount();
    }
  },
);
