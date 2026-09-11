import { test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Demo from "../__demos__/recurrence-following.vue";
import Scheduler from "../index";
import EventCard from "../components/scheduler-event.vue";
import { schedulerDate } from "../core";
import Button from "../../button";
import Select from "../../select";
import Input from "../../input";
import DateField from "../../date";
import Space from "../../space";
import Alert from "../../alert";
import Tag from "../../tag";
import Dialog from "../../dialog";
import Checkbox from "../../checkbox";
import Form, { FormItem } from "../../form";

test("following demo protects exceptions and keeps proposal atomic on save failure", async () => {
  const wrapper = mount(Demo, {
    attachTo: document.body,
    global: {
      components: Object.fromEntries(
        [
          Scheduler,
          Button,
          Select,
          Input,
          DateField,
          Space,
          Alert,
          Tag,
          Dialog,
          Checkbox,
          Form,
          FormItem,
        ].map((item) => [item.name!, item]),
      ),
    },
  });
  try {
    await flushPromises();
    const scheduler = wrapper.getComponent(Scheduler);
    const card = scheduler
      .findAllComponents(EventCard)
      .find(
        (item) => schedulerDate(item.props("event").start!).getDate() === 9,
      )!;
    await card.get(".c-scheduler__event-button").trigger("click");
    await flushPromises();
    const scope = wrapper
      .findAllComponents(Select)
      .find((item) =>
        item.props("options")?.some((option) => option.value === "following"),
      )!;
    scope.vm.$emit("update:modelValue", "following");
    await flushPromises();
    const click = async (label: string) => {
      const button = wrapper
        .findAllComponents(Button)
        .find((item) => item.text() === label)!;
      await button.trigger("click");
      await flushPromises();
    };
    await click("保存修改");
    expect(document.body.textContent).toContain("后续有 1 条例外");
    const policy = wrapper
      .findAllComponents(Select)
      .find((item) =>
        item.props("options")?.some((option) => option.value === "discard"),
      )!;
    policy.vm.$emit("update:modelValue", "discard");
    const checkbox = wrapper
      .findAllComponents(Checkbox)
      .find((item) => item.text() === "模拟保存失败")!;
    checkbox.vm.$emit("update:modelValue", true);
    await flushPromises();
    await click("保存修改");
    expect(document.body.textContent).toContain(
      "模拟保存失败，原系列和例外均保留",
    );
    expect(scheduler.props("modelValue")!.map((item) => item.title)).toEqual([
      "团队同步会",
      "团队同步会",
      "客户参会",
    ]);
    checkbox.vm.$emit("update:modelValue", false);
    await flushPromises();
    await click("保存修改");
    expect(document.body.textContent).toContain("2 个系列 · 0 条例外");
    expect(scheduler.props("modelValue")!.map((item) => item.title)).toEqual([
      "团队同步会",
      "团队同步会",
      "团队同步会",
    ]);
    expect(wrapper.getComponent(Dialog).props("open")).toBe(false);
  } finally {
    wrapper.unmount();
    document.body.innerHTML = "";
  }
});
