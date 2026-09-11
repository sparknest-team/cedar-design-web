import { test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Demo from "../__demos__/resource-dimensions.vue";
import Scheduler from "../index";
import Button from "../../button";
import Space from "../../space";
import Alert from "../../alert";
import Tag from "../../tag";
import Picker from "../components/scheduler-resource-select.vue";
test("station and person demo combines filters and changes display dimension independently", async () => {
  const w = mount(Demo, {
    global: {
      components: Object.fromEntries(
        [Scheduler, Button, Space, Alert, Tag].map((c) => [c.name!, c]),
      ),
    },
  });
  const click = async (label: string) => {
    await w
      .findAll("button")
      .find((b) => b.text() === label)!
      .trigger("click");
    await flushPromises();
  };
  try {
    await flushPromises();
    expect(w.text()).toContain("匹配 2 / 5 条任务");
    await click("两站 + 小陈");
    expect(w.text()).toContain("匹配 3 / 5 条任务");
    await click("按人展示");
    expect(w.getComponent(Scheduler).props("resourceDimension")).toBe("person");
    expect(w.getComponent(Scheduler).props("modelValue")).toHaveLength(5);
    await click("清空维度筛选");
    expect(w.text()).toContain("匹配 5 / 5 条任务");
    w.findAllComponents(Picker)
      .find((p) => p.props("dimensionId") === "station")!
      .vm.$emit("update:modelValue", ["station:south"]);
    await flushPromises();
    expect(w.text()).toContain("匹配 2 / 5 条任务");
    expect(w.getComponent(Scheduler).props("resourceFilters")).toEqual({
      station: ["station:south"],
    });
  } finally {
    w.unmount();
    document.body.innerHTML = "";
  }
});
