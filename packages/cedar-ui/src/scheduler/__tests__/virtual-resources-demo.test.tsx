import { test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Demo from "../__demos__/virtual-resources.vue";
import Scheduler from "../index";
import Button from "../../button";
import Space from "../../space";
import Alert from "../../alert";
import Tag from "../../tag";
import VirtualList from "../../_components/virtual-list-v2";
test("large cross-resource demo renders bounded rows and preserves tasks when filtering", async () => {
  const w = mount(Demo, {
    global: {
      components: Object.fromEntries(
        [Scheduler, Button, Space, Alert, Tag].map((c) => [c.name!, c]),
      ),
    },
  });
  try {
    expect(w.getComponent(VirtualList).props("data")).toHaveLength(2100);
    expect(w.findAll(".c-scheduler__timeline-row").length).toBeLessThanOrEqual(
      30,
    );
    await w
      .findAll("button")
      .find((b) => b.text() === "前 3 个站")!
      .trigger("click");
    await flushPromises();
    expect(w.getComponent(VirtualList).props("data")).toHaveLength(63);
    expect(w.getComponent(Scheduler).props("modelValue")).toHaveLength(100);
    await w
      .findAll("button")
      .find((b) => b.text() === "仅人员 001")!
      .trigger("click");
    await flushPromises();
    expect(w.getComponent(VirtualList).props("data")).toHaveLength(200);
  } finally {
    w.unmount();
  }
});
