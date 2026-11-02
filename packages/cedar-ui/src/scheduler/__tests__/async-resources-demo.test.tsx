import { FormItem } from "../../form";
import { flushPromises, mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { expect, test, vi } from "vitest";
import Scheduler from "../Scheduler.vue";
import Button from "../../button";
import Select from "../../select";
import Space from "../../space";
import Demo from "../__demos__/async-resources.vue";

test("resource demo clears stale failure feedback after retry and kind switch", async () => {
  vi.useFakeTimers();
  const wrapper = mount(Demo, {
    global: {
      components: {
        CFormItem: FormItem,
        CScheduler: Scheduler,
        CButton: Button,
        CSelect: Select,
        CSpace: Space,
      },
    },
  });
  const feedback = () => wrapper.get('p[role="status"]').text();
  try {
    vi.advanceTimersByTime(500);
    await flushPromises();
    const scheduler = wrapper.getComponent(Scheduler);
    scheduler.vm.$emit("resource-error", new Error("offline"), {
      type: "resolve",
      ids: ["device-12"],
    });
    await nextTick();
    expect(feedback()).toContain("回显失败");
    const resolve = scheduler.props("resolveResources")!(["device-12"], {
      signal: new AbortController().signal,
    });
    vi.advanceTimersByTime(500);
    expect(await resolve).toEqual([{ id: "device-12", label: "实验设备 12" }]);
    await nextTick();
    expect(feedback()).toContain("资源名称回显成功");

    scheduler.vm.$emit("resource-error", new Error("offline"), {
      type: "search",
      query: "12",
    });
    await nextTick();
    expect(feedback()).toContain("搜索失败");
    const search = scheduler.props("requestResources")!({
      query: "12",
      signal: new AbortController().signal,
    });
    vi.advanceTimersByTime(500);
    expect((await search).items).toEqual([
      { id: "device-12", label: "实验设备 12" },
    ]);
    await nextTick();
    expect(feedback()).toContain("搜索重试成功");

    wrapper.getComponent(Select).vm.$emit("update:modelValue", "person");
    await nextTick();
    expect(feedback()).toContain("打开详情查看名称回显");
  } finally {
    wrapper.unmount();
    vi.useRealTimers();
  }
});
