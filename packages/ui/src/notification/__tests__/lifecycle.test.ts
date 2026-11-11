import { mount } from "@vue/test-utils";
import { defineComponent, h, KeepAlive, nextTick, ref } from "vue";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import Notification from "../Notification.vue";

beforeEach(() => {
  vi.useFakeTimers();
});
afterEach(() => {
  vi.restoreAllMocks();
  vi.useRealTimers();
});
const advance = async (ms: number) => {
  vi.advanceTimersByTime(ms);
  await nextTick();
};
describe("Notification timer ownership", () => {
  test("a dequeued callback from before update cannot close the current instance", async () => {
    const callbacks: Array<() => void> = [];
    vi.spyOn(window, "setTimeout").mockImplementation((callback: any) => {
      callbacks.push(callback);
      return callbacks.length;
    });
    const wrapper = mount(Notification, {
      props: { duration: 100, resetOnUpdate: true },
    });
    const old = callbacks[0];
    await wrapper.setProps({ duration: 200 });
    old();
    expect(wrapper.emitted("close")).toBeUndefined();
    callbacks[callbacks.length - 1]();
    expect(wrapper.emitted("close")).toHaveLength(1);
    wrapper.unmount();
  });
  test("a dequeued callback cannot close after unmount", () => {
    let callback: (() => void) | undefined;
    vi.spyOn(window, "setTimeout").mockImplementation((task: any) => {
      callback = task;
      return 1;
    });
    const close = vi.fn();
    const wrapper = mount(Notification, {
      props: { duration: 100, onClose: close },
    });
    wrapper.unmount();
    callback?.();
    expect(close).not.toHaveBeenCalled();
  });
  test("manual close cancels the timer and emits once during leaving", async () => {
    const wrapper = mount(Notification, {
      props: { closable: true, duration: 100 },
    });
    await wrapper.get("button").trigger("click");
    await advance(150);
    expect(wrapper.emitted("close")).toHaveLength(1);
    expect(vi.getTimerCount()).toBe(0);
    wrapper.unmount();
  });
  test("repeated close and updates cannot restart a closed notification", async () => {
    const wrapper = mount(Notification, {
      props: { closable: true, duration: 100, resetOnUpdate: true },
    });
    await wrapper.get("button").trigger("click");
    await wrapper.get("button").trigger("click");
    await wrapper.setProps({ duration: 200 });
    await advance(250);
    expect(wrapper.emitted("close")).toHaveLength(1);
    wrapper.unmount();
  });
  test("KeepAlive deactivation suspends automatic close", async () => {
    const shown = ref(true),
      close = vi.fn();
    const Host = defineComponent({
      setup: () => () =>
        h(KeepAlive, {}, () =>
          shown.value
            ? h(Notification, { duration: 100, onClose: close })
            : null,
        ),
    });
    const wrapper = mount(Host);
    await advance(30);
    shown.value = false;
    await nextTick();
    await advance(200);
    expect(close).not.toHaveBeenCalled();
    shown.value = true;
    await nextTick();
    await advance(99);
    expect(close).not.toHaveBeenCalled();
    await advance(1);
    expect(close).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
  test("unmount clears pending timer", async () => {
    const close = vi.fn();
    const wrapper = mount(Notification, {
      props: { duration: 100, onClose: close },
    });
    wrapper.unmount();
    await advance(200);
    expect(close).not.toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
  });
  test("zero duration remains persistent", async () => {
    const wrapper = mount(Notification, { props: { duration: 0 } });
    await advance(10000);
    expect(wrapper.emitted("close")).toBeUndefined();
    expect(vi.getTimerCount()).toBe(0);
    wrapper.unmount();
  });
  test("reset-on-update restarts the configured display time", async () => {
    const wrapper = mount(Notification, {
      props: { duration: 100, resetOnUpdate: true },
    });
    await advance(60);
    await wrapper.setProps({ duration: 200 });
    await advance(199);
    expect(wrapper.emitted("close")).toBeUndefined();
    await advance(1);
    expect(wrapper.emitted("close")).toHaveLength(1);
    wrapper.unmount();
  });
  test("without reset-on-update the original display deadline is preserved", async () => {
    const wrapper = mount(Notification, { props: { duration: 100 } });
    await advance(60);
    await wrapper.setProps({ duration: 200 });
    await advance(40);
    expect(wrapper.emitted("close")).toHaveLength(1);
    wrapper.unmount();
  });
});
