import { flushPromises, mount } from "@vue/test-utils";
import { afterEach, expect, test, vi } from "vitest";
import Scheduler from "../Scheduler.vue";
import Button from "../../button";
import Checkbox from "../../checkbox";
import Space from "../../space";
import Demo from "../__demos__/async-change.vue";

const wrappers = [];
afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
  vi.useRealTimers();
});
function create() {
  vi.useFakeTimers();
  const wrapper = mount(Demo, {
    global: {
      components: {
        CScheduler: Scheduler,
        CButton: Button,
        CCheckbox: Checkbox,
        CSpace: Space,
      },
    },
  });
  wrappers.push(wrapper);
  return wrapper;
}
async function tick() {
  vi.advanceTimersByTime(650);
  await flushPromises();
}

test("parent acceptance switch refuses or accepts model proposals independently", async () => {
  const wrapper = create();
  const scheduler = wrapper.findComponent(Scheduler);
  const original = scheduler.props("modelValue");
  const proposal = original.map((event) =>
    event.id === "review" ? { ...event, title: "新标题" } : event,
  );
  await wrapper.findAll("input[type=checkbox]")[1].setValue(false);
  scheduler.vm.$emit("update:modelValue", proposal);
  await flushPromises();
  expect(scheduler.props("modelValue")).toEqual(original);
  await wrapper.findAll("input[type=checkbox]")[1].setValue(true);
  scheduler.vm.$emit("update:modelValue", proposal);
  await flushPromises();
  expect(scheduler.props("modelValue")[0].title).toBe("新标题");
  expect(scheduler.props("modelValue")[1]).toEqual(original[1]);
});

test("local save fails once, clears pending work and allows retry", async () => {
  const wrapper = create();
  await wrapper.findAll("input[type=checkbox]")[0].setValue(true);
  const hook = wrapper.findComponent(Scheduler).props("beforeChange");
  const first = hook({} as never);
  const rejection = expect(first).rejects.toThrow("模拟接口失败");
  await tick();
  await rejection;
  expect(wrapper.findAll("input[type=checkbox]")[0].element.checked).toBe(
    false,
  );
  expect(wrapper.get("p[role=status]").text()).toContain("活动请求：0");
  const second = hook({} as never);
  await tick();
  expect(await second).toBe(true);
});

test("unmount clears the local timer and settles the hook as cancelled", async () => {
  const wrapper = create();
  const request = wrapper.findComponent(Scheduler).props("beforeChange")(
    {} as never,
  );
  wrapper.unmount();
  expect(vi.getTimerCount()).toBe(0);
  expect(await request).toBe(false);
});
