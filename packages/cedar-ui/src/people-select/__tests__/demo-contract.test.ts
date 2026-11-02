import { flushPromises, mount } from "@vue/test-utils";
import { expect, test, vi } from "vitest";
import PeopleSelect from "..";
import BasicDemo from "../__demos__/basic.vue";
import AsyncDemo from "../__demos__/data-source.vue";
const global = {
  components: { CPeopleSelect: PeopleSelect },
  stubs: {
    CSpace: { template: "<div><slot /></div>" },
    CButton: { template: "<button><slot /></button>" },
  },
};
test("basic demo uses static options and no transport configuration", async () => {
  const wrapper = mount(BasicDemo, { global });
  try {
    expect(wrapper.text()).toContain("孟帅");
    expect(wrapper.getComponent(PeopleSelect).props("options")).toHaveLength(2);
    wrapper
      .getComponent(PeopleSelect)
      .vm.$emit("update:modelValue", "wujiaming");
    await flushPromises();
    expect(wrapper.text()).toContain("当前 ID：wujiaming");
  } finally {
    wrapper.unmount();
  }
});
test("async demo initializes options once and performs debounced external searches", async () => {
  vi.useFakeTimers();
  const wrapper = mount(AsyncDemo, { global });
  try {
    const field = wrapper.getComponent(PeopleSelect);
    await flushPromises();
    expect(field.props("loading")).toBe(true);
    vi.advanceTimersByTime(200);
    await flushPromises();
    expect(field.props("options")).toHaveLength(2);
    field.vm.$emit("search", "吴");
    await flushPromises();
    expect(field.props("options")).toHaveLength(0);
    expect(field.props("loading")).toBe(true);
    vi.advanceTimersByTime(450);
    await flushPromises();
    expect(field.props("options")).toEqual([
      { value: "wujiaming", label: "吴甲明" },
    ]);
    expect(field.props("loading")).toBe(false);
    field.vm.$emit("search", "吴");
    await flushPromises();
    expect(field.props("options")).toHaveLength(1);
  } finally {
    wrapper.unmount();
    vi.useRealTimers();
  }
});
