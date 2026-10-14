import { flushPromises, mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { expect, test, vi } from "vitest";
import PeopleSelect from "..";
import BasicDemo from "../__demos__/basic.vue";

test("local asynchronous demo resolves an ID absent from the first page and supports search", async () => {
  vi.useFakeTimers();
  const wrapper = mount(BasicDemo, {
    global: {
      components: { CPeopleSelect: PeopleSelect },
      stubs: {
        CSpace: { template: "<div><slot /></div>" },
        CButton: { template: "<button><slot /></button>" },
      },
    },
  });
  try {
    vi.advanceTimersByTime(250);
    await flushPromises();
    await nextTick();
    expect(wrapper.text()).toContain("陈悦");
    expect(wrapper.text()).toContain("当前 ID：demo.chen");
    expect(wrapper.text()).not.toContain("更新token");
    const adapter = wrapper.findComponent(PeopleSelect).props("fetch");
    const firstPage = adapter.post("", { params: {} });
    vi.advanceTimersByTime(250);
    await flushPromises();
    expect(
      (await firstPage).data.result_list.map(
        (person: { user_id: string }) => person.user_id,
      ),
    ).toEqual(["demo.lin", "demo.zhou"]);
    const search = adapter.post("", { params: { name: "陈悦" } });
    vi.advanceTimersByTime(250);
    await flushPromises();
    expect((await search).data.result_list[0].user_id).toBe("demo.chen");
    wrapper
      .findComponent(PeopleSelect)
      .vm.$emit("update:modelValue", "demo.lin");
    await nextTick();
    vi.advanceTimersByTime(250);
    await flushPromises();
    expect(wrapper.text()).toContain("当前 ID：demo.lin");
    expect(wrapper.text()).toContain("林晓");
  } finally {
    wrapper.unmount();
    vi.useRealTimers();
  }
});
