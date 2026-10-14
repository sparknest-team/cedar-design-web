import { defineComponent, h } from "vue";
import { flushPromises, mount } from "@vue/test-utils";
import { expect, test, vi } from "vitest";
import Button from "../../button";
import Demo from "../__demos__/error.vue";

test("error demo uses a native retry button and clears pending work on unmount", async () => {
  const devtoolsHook = Object.getOwnPropertyDescriptor(
    globalThis,
    "__VUE_DEVTOOLS_GLOBAL_HOOK__",
  );
  // Isolate demo timers from Vue's unrelated devtools-injection timeout.
  Object.defineProperty(globalThis, "__VUE_DEVTOOLS_GLOBAL_HOOK__", {
    configurable: true,
    value: { emit() {} },
  });
  vi.useFakeTimers();
  const retry = vi.fn();
  const Scroll = defineComponent({
    props: ["status", "target"],
    setup(_, { slots }) {
      return () => h("div", slots.error?.({ retry }));
    },
  });
  const wrapper = mount(Demo, {
    global: {
      components: { CInfiniteScroll: Scroll, CButton: Button },
      stubs: { CList: true, CListItem: true },
    },
  });
  try {
    const button = wrapper.find("button");
    expect(button.attributes("type")).toBe("button");
    await button.trigger("click");
    expect(retry).toHaveBeenCalledTimes(1);
    wrapper.findComponent(Scroll).vm.$emit("load");
    await flushPromises();
    expect(vi.getTimerCount()).toBeGreaterThan(0);
    wrapper.unmount();
    expect(vi.getTimerCount()).toBe(0);
  } finally {
    wrapper.unmount();
    vi.useRealTimers();
    if (devtoolsHook)
      Object.defineProperty(
        globalThis,
        "__VUE_DEVTOOLS_GLOBAL_HOOK__",
        devtoolsHook,
      );
    else Reflect.deleteProperty(globalThis, "__VUE_DEVTOOLS_GLOBAL_HOOK__");
  }
});
