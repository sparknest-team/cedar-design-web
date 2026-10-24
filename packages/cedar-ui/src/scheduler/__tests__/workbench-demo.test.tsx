import { expect, test } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { nextTick } from "vue";
import Scheduler from "../index";
import Button from "../../button";
import Space from "../../space";
import Alert from "../../alert";
import Checkbox from "../../checkbox";
import Select from "../../select";
import Input from "../../input";
import Tree from "../../tree";
import Tag from "../../tag";
import Popover from "../../popover";
import Dialog from "../../dialog";
import Form from "../../form";
import { FormItem } from "../../form";
import DatePicker, { DatePicker as DatePanel } from "../../date";
import Empty from "../../empty";
import Divider from "../../divider";
import Demo from "../__demos__/task-calendar-workbench.vue";
const global = {
  components: Object.fromEntries(
    [
      Scheduler,
      Button,
      Space,
      Alert,
      Checkbox,
      Select,
      Input,
      Tree,
      Tag,
      Popover,
      Dialog,
      Form,
      FormItem,
      DatePicker,
      DatePanel,
      Empty,
      Divider,
    ].map((c) => [c.name!, c]),
  ),
};
const waitSave = async () => {
  await new Promise((resolve) => setTimeout(resolve, 220));
  await flushPromises();
};
test("workbench mounts with independent trees, default self, dynamic weekly projections and readonly details", async () => {
  const w = mount(Demo, { global, attachTo: document.body });
  try {
    await flushPromises();
    const s = w.getComponent(Scheduler);
    expect(s.props("mode")).toBe("week");
    expect(w.findAllComponents(Tree)).toHaveLength(2);
    expect(
      s.props("modelValue")!.every((e) => e.metadata?.ownerId === "me"),
    ).toBe(true);
    const tree = w.findAllComponents(Tree)[0];
    tree.vm.$emit("check", [], {
      checked: true,
      node: { resourceId: "station-a" },
    });
    await nextTick();
    expect(
      s.props("modelValue")!.some((e) => e.metadata?.ownerId === "station-a"),
    ).toBe(true);
    const order = s.props("modelValue")!.find((e) => e.metadata?.closed)!;
    s.vm.$emit("editor-request", {
      action: "edit",
      source: "event",
      event: order,
      readonly: true,
    });
    await flushPromises();
    expect(w.findAllComponents(Dialog)[0].props("open")).toBe(true);
    expect(document.body.textContent).toContain("已完成");
    const buttons = [...document.body.querySelectorAll("button")];
    expect(buttons.some((b) => b.textContent === "确认关单")).toBe(false);
  } finally {
    w.unmount();
  }
});

test("save failures retain editor and draft; removing last tasks dissolves an order", async () => {
  const w = mount(Demo, { global, attachTo: document.body });
  try {
    await flushPromises();
    const s = w.getComponent(Scheduler);
    const event = s
      .props("modelValue")!
      .find((e) => e.metadata?.orderId === "ATT-101")!;
    const trigger = () =>
      s.vm.$emit("editor-request", {
        action: "edit",
        source: "event",
        event,
        readonly: false,
      });
    trigger();
    await flushPromises();
    const sourceBefore = [
      ...w.findAllComponents(Tree)[0].props("checkedValues")!,
    ];
    const fail = w
      .findAllComponents(Checkbox)
      .find((c) => c.text() === "模拟保存失败")!;
    fail.vm.$emit("update:modelValue", true);
    await nextTick();
    w.getComponent(Form).vm.$emit("submit");
    await waitSave();
    expect(document.body.textContent).toContain("模拟保存失败");
    expect(w.findAllComponents(Dialog)[0].props("open")).toBe(true);
    fail.vm.$emit("update:modelValue", false);
    await nextTick();
    const removeButtons = [
      ...document.body.querySelectorAll<HTMLButtonElement>("button"),
    ].filter((b) => b.textContent?.trim() === "移出任务");
    removeButtons.forEach((b) => b.click());
    await nextTick();
    w.getComponent(Form).vm.$emit("submit");
    await waitSave();
    expect(
      s.props("modelValue")!.some((e) => e.metadata?.orderId === "ATT-101"),
    ).toBe(false);
    expect(w.findAllComponents(Tree)[0].props("checkedValues")).toEqual(
      sourceBefore,
    );
    expect(w.findAllComponents(Dialog)[0].props("open")).toBe(false);
  } finally {
    w.unmount();
  }
});

test("accepted Scheduler moves persist one business order and refresh every projection", async () => {
  const w = mount(Demo, { global });
  try {
    const s = w.getComponent(Scheduler);
    w.findAllComponents(Tree)[0].vm.$emit("check", [], {
      checked: true,
      node: { resourceId: "station-a" },
    });
    await nextTick();
    const before = s
      .props("modelValue")!
      .filter((e) => e.metadata?.orderId === "ATT-101");
    const event = {
      ...before[1],
      start: new Date(+new Date(before[1].start!) + 3600000).toISOString(),
      end: new Date(+new Date(before[1].end!) + 3600000).toISOString(),
    };
    expect(await s.vm.change({ type: "move", event })).toBe(true);
    await nextTick();
    const after = s
      .props("modelValue")!
      .filter((e) => e.metadata?.orderId === "ATT-101");
    expect(after).toHaveLength(4);
    after.forEach((item) => {
      const old = before.find((e) => e.id === item.id)!;
      expect(+new Date(item.start!) - +new Date(old.start!)).toBe(3600000);
      expect(item.metadata?.version).toBe(2);
    });
  } finally {
    w.unmount();
  }
});
