import { test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Demo from "../__demos__/resource-capacity.vue";
import Scheduler from "../index";
import Space from "../../space";
import Alert from "../../alert";
import Button from "../../button";
import Tag from "../../tag";
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
