import { test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { nextTick } from "vue";
import Scheduler from "../index";
import DialogDemo from "../__demos__/event-dialog.vue";
import PopoverDemo from "../__demos__/event-popover.vue";
import Button from "../../button";
import Space from "../../space";
import Alert from "../../alert";
import Tag from "../../tag";
import Textarea from "../../textarea";
import Checkbox from "../../checkbox";
import Dialog from "../../dialog";
import Form from "../../form";
import { FormItem } from "../../form";
import Input from "../../input";
import DateField from "../../date";
import Popover from "../../popover";
const global = {
  components: Object.fromEntries(
    [
      Scheduler,
      Button,
      Space,
      Alert,
      Tag,
      Textarea,
      Checkbox,
      Dialog,
      Form,
      FormItem,
      Input,
      DateField,
      Popover,
    ].map((c) => [c.name!, c]),
  ),
};
async function click(w: any) {
  w.element.dispatchEvent(
    new MouseEvent("click", { bubbles: true, detail: 1 }),
  );
  await flushPromises();
}
test("single click opens external dialog; cancel preserves source and save uses Scheduler", async () => {
  const w = mount(DialogDemo, { global });
  try {
    await click(w.get(".c-scheduler__positioned-event button"));
    expect(w.getComponent(Dialog).props("open")).toBe(true);
    const input = w.findComponent(Input);
    input.vm.$emit("update:modelValue", "改后的巡检");
    await nextTick();
    const shared = w.getComponent(Scheduler);
    expect(shared.props("modelValue")[0].title).toBe("站点巡检");
    await w.getComponent(Form).vm.$emit("submit");
    await flushPromises();
    expect(shared.props("modelValue")[0].title).toBe("改后的巡检");
    expect(w.getComponent(Dialog).props("open")).toBe(false);
    await click(w.get(".c-scheduler__positioned-event button"));
    w.findComponent(Input).vm.$emit("update:modelValue", "不保存");
    await nextTick();
    const buttons = w.getComponent(Dialog).findAllComponents(Button);
    await buttons.find((b) => b.text() === "取消")!.vm.$emit("click");
    await flushPromises();
    expect(shared.props("modelValue")[0].title).toBe("改后的巡检");
  } finally {
    w.unmount();
  }
});
test("single click opens popover, advanced action opens dialog, failed save preserves draft", async () => {
  const w = mount(PopoverDemo, { global });
  try {
    await click(w.get(".c-scheduler__positioned-event button"));
    const firstPopover = w
      .findAllComponents(Popover)
      .find((p) => p.props("open"))!;
    await click(w.findAll(".c-scheduler__positioned-event button")[1]);
    firstPopover.vm.$emit("click-outside", new MouseEvent("click"));
    await nextTick();
    expect(
      w
        .findAllComponents(Popover)
        .find((p) => p.props("open"))
        ?.props("title"),
    ).toBe("设备维护");
    await click(w.get(".c-scheduler__positioned-event button"));
    const pop = w.findAllComponents(Popover).find((p) => p.props("open"))!;
    expect(pop).toBeTruthy();
    expect(w.getComponent(Dialog).props("open")).toBe(false);
    // The content slot is teleported by the shared Popover.
    const advanced = [...document.querySelectorAll("button")].find(
      (b) => b.textContent?.trim() === "高级编辑",
    );
    expect(advanced).toBeTruthy();
    advanced!.click();
    await flushPromises();
    expect(w.findAllComponents(Popover).some((p) => p.props("open"))).toBe(
      false,
    );
    expect(w.getComponent(Dialog).props("open")).toBe(true);
    const checkboxes = w.findAllComponents(Checkbox);
    checkboxes
      .find((c) => c.text() === "模拟接口保存失败")!
      .vm.$emit("update:modelValue", true);
    await nextTick();
    w.findComponent(Input).vm.$emit("update:modelValue", "失败草稿");
    await nextTick();
    w.getComponent(Form).vm.$emit("submit");
    await flushPromises();
    expect(w.getComponent(Dialog).props("open")).toBe(true);
    expect(w.getComponent(Scheduler).props("modelValue")[0].title).toBe(
      "站点巡检",
    );
    expect(w.findComponent(Input).props("modelValue")).toBe("失败草稿");
  } finally {
    w.unmount();
  }
});
test("readonly preview opens full details without save or delete actions", async () => {
  const w = mount(PopoverDemo, { global });
  try {
    w.findAllComponents(Checkbox)
      .find((c) => c.text() === "只读查看")!
      .vm.$emit("update:modelValue", true);
    await nextTick();
    await click(w.get(".c-scheduler__positioned-event button"));
    const advanced = [...document.querySelectorAll("button")].find(
      (b) => b.textContent?.trim() === "查看完整详情",
    );
    expect(advanced).toBeTruthy();
    advanced!.click();
    await flushPromises();
    const dialog = w.getComponent(Dialog);
    expect(dialog.props("open")).toBe(true);
    expect(
      dialog
        .findAllComponents(Button)
        .some((b) => ["确认保存", "删除"].includes(b.text())),
    ).toBe(false);
    expect(w.findComponent(Input).props("disabled")).toBe(true);
  } finally {
    w.unmount();
  }
});
test("cell creation uses Popover and preserves its draft when entering advanced edit", async () => {
  const w = mount(PopoverDemo, { global });
  try {
    await click(w.get(".c-scheduler__time-cell"));
    expect(w.getComponent(Dialog).props("open")).toBe(false);
    expect(
      w
        .findAllComponents(Popover)
        .find((p) => p.props("open"))
        ?.props("title"),
    ).toBe("新建日程");
    expect(w.get(".c-scheduler__drag-preview").text()).toContain("新日程");
    w.findComponent(Input).vm.$emit("update:modelValue", "格子草稿");
    await nextTick();
    expect(w.get(".c-scheduler__drag-preview").text()).toContain("格子草稿");
    const advanced = [...document.querySelectorAll("button")].find(
      (b) => b.textContent?.trim() === "高级编辑",
    );
    advanced!.click();
    await flushPromises();
    expect(w.getComponent(Dialog).props("open")).toBe(true);
    expect(w.getComponent(Dialog).props("title")).toBe("业务新增窗口");
    expect(w.findComponent(Input).props("modelValue")).toBe("格子草稿");
    expect(w.getComponent(Scheduler).props("modelValue")).toHaveLength(3);
    w.getComponent(Form).vm.$emit("submit");
    await flushPromises();
    expect(w.getComponent(Scheduler).props("modelValue")).toHaveLength(4);
    expect(w.find(".c-scheduler__drag-preview").exists()).toBe(false);
  } finally {
    w.unmount();
  }
});
test("cell quick save works, but toolbar creation bypasses Popover", async () => {
  const w = mount(PopoverDemo, { global });
  try {
    await click(w.get(".c-scheduler__time-cell"));
    w.findComponent(Input).vm.$emit("update:modelValue", "快速新增");
    await nextTick();
    w.getComponent(Form).vm.$emit("submit");
    await flushPromises();
    expect(w.getComponent(Scheduler).props("modelValue")).toHaveLength(4);
    expect(w.findAllComponents(Popover).some((p) => p.props("open"))).toBe(
      false,
    );
    await click(
      w
        .getComponent(Scheduler)
        .findAll("button")
        .find((b) => b.text() === "新建日程")!,
    );
    expect(w.getComponent(Dialog).props("open")).toBe(true);
    expect(w.findAllComponents(Popover).some((p) => p.props("open"))).toBe(
      false,
    );
  } finally {
    w.unmount();
  }
});
