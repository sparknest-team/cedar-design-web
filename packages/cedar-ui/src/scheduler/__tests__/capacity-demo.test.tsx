import { test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Demo from "../__demos__/resource-capacity.vue";
import Scheduler from "../index";
import Space from "../../space";
import Alert from "../../alert";
import Button from "../../button";
import Tag from "../../tag";
test("capacity-one move rejects overlap then accepts an adjacent recovery transaction", async () => {
  const w = mount(Demo, {
    global: { components: Object.fromEntries([Scheduler, Space, Alert, Button, Tag].map(c => [c.name!, c])) },
  });
  try {
    await flushPromises();
    await w.findAll("button").find(b => b.text() === "容量设为 1")!.trigger("click");
    await flushPromises();
    const scheduler = w.getComponent(Scheduler);
    const original = scheduler.props("modelValue")!;
    const move = async (start: string, end: string) => {
      const saved = await scheduler.vm.change({ type: "move", event: {
        ...original[0], start: `2026-09-15T${start}:00`, end: `2026-09-15T${end}:00`,
      } });
      await flushPromises();
      return saved;
    };
    expect(await move("07:30", "09:30")).toBe(true);
    expect(await move("09:30", "11:30")).toBe(false);
    expect(new Date(scheduler.props("modelValue")![0].start!).getHours()).toBe(7);
    expect(w.text()).toContain("该时段超出资源并发容量");
    expect(await move("08:00", "10:00")).toBe(true);
    expect(scheduler.props("modelValue")).toHaveLength(2);
    expect(new Date(scheduler.props("modelValue")![0].end!).getHours()).toBe(10);
    expect(scheduler.props("modelValue")![1]).toEqual(original[1]);
    expect(w.text()).not.toContain("该时段超出资源并发容量");
  } finally {
    w.unmount();
    document.body.innerHTML = "";
  }
});
test("demo rejects third booking, accepts increased capacity, flags reduced capacity and resets", async () => {
  const w = mount(Demo, {
    global: {
      components: Object.fromEntries(
        [Scheduler, Space, Alert, Button, Tag].map((c) => [c.name!, c]),
      ),
    },
  });
  const click = async (text: string) => {
    await w
      .findAll("button")
      .find((b) => b.text() === text)!
      .trigger("click");
    await flushPromises();
  };
  try {
    await flushPromises();
    await click("尝试追加第三单");
    expect(w.text()).toContain("第三单未保存：超出容量");
    expect(w.getComponent(Scheduler).props("modelValue")).toHaveLength(2);
    await click("容量设为 3");
    await click("尝试追加第三单");
    expect(w.text()).toContain("第三单已保存");
    expect(w.getComponent(Scheduler).props("modelValue")).toHaveLength(3);
    await click("容量设为 1");
    expect(w.text()).toContain("3/1 超出容量");
    await click("重置容量示例");
    expect(w.getComponent(Scheduler).props("modelValue")).toHaveLength(2);
    expect(w.text()).toContain("当前容量：2");
  } finally {
    w.unmount();
    document.body.innerHTML = "";
  }
});
