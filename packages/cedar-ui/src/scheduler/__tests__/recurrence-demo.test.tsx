import { test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Demo from "../__demos__/recurring-events.vue";
import Scheduler from "../index";
import type { SchedulerInstance } from "../index";
import Button from "../../button";
import Select from "../../select";
import InputNumber from "../../input-number";
import Space from "../../space";
import Alert from "../../alert";
import Tag from "../../tag";

test("recurring demo edits and deletes only one occurrence and restores exceptions", async () => {
  const wrapper = mount(Demo, {
    global: {
      components: Object.fromEntries(
        [Scheduler, Button, Select, InputNumber, Space, Alert, Tag].map(
          (item) => [item.name!, item],
        ),
      ),
    },
  });
  try {
    await flushPromises();
    const scheduler = wrapper.getComponent(Scheduler);
    const instance = scheduler.vm.$.exposed as unknown as SchedulerInstance;
    const original = scheduler.props("modelValue")![0];
    expect(scheduler.props("modelValue")).toHaveLength(3);
    expect(
      await instance.change({
        type: "update",
        event: { ...original, title: "Only Monday" },
      }),
    ).toBe(true);
    await flushPromises();
    expect(scheduler.props("modelValue")!.map((item) => item.title)).toEqual([
      "Only Monday",
      "项目同步会",
      "项目同步会",
    ]);
    expect(wrapper.text()).toContain("1 条本次例外");
    expect(
      await instance.change({
        type: "update",
        event: { ...original, start: undefined, end: undefined },
      }),
    ).toBe(false);
    expect(await instance.change({ type: "remove", event: original })).toBe(
      true,
    );
    await flushPromises();
    expect(scheduler.props("modelValue")).toHaveLength(2);
    const restore = wrapper
      .findAllComponents(Button)
      .find((button) => button.text() === "恢复全部例外")!;
    await restore.trigger("click");
    await flushPromises();
    expect(scheduler.props("modelValue")).toHaveLength(3);
    expect(scheduler.props("modelValue")![0].title).toBe("项目同步会");
  } finally {
    wrapper.unmount();
    document.body.innerHTML = "";
  }
});
