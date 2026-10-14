import { afterEach, test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, nextTick, createSSRApp } from "vue";
import { renderToString } from "@vue/server-renderer";
import Scheduler from "../Scheduler.vue";
import { getSchedulerNowPosition } from "../core";
import { useSchedulerNow } from "../use-now";
afterEach(() => {
  vi.restoreAllMocks();
  vi.useRealTimers();
  expect(typeof globalThis.setInterval).toBe("function");
});
test("local position uses fractional minutes and half-open hours on the same date", () => {
  const day = new Date(2026, 8, 16);
  expect(getSchedulerNowPosition(new Date(2026, 8, 16, 8), day, 8, 20)).toBe(0);
  expect(getSchedulerNowPosition(new Date(2026, 8, 16, 14), day, 8, 20)).toBe(
    50,
  );
  expect(
    getSchedulerNowPosition(new Date(2026, 8, 16, 8, 0, 30), day, 8, 9),
  ).toBeCloseTo(100 / 120);
  expect(
    getSchedulerNowPosition(new Date(2026, 8, 16, 20), day, 8, 20),
  ).toBeUndefined();
  expect(
    getSchedulerNowPosition(new Date(2026, 8, 17, 14), day, 8, 20),
  ).toBeUndefined();
  expect(getSchedulerNowPosition("bad", day)).toBeUndefined();
  expect(getSchedulerNowPosition(day, day, 20, 8)).toBeUndefined();
});
test("clock starts on mount, pauses when hidden/disabled, refreshes on return and cleans up", async () => {
  vi.useFakeTimers({ toFake: ["Date", "setInterval", "clearInterval"] });
  vi.setSystemTime(new Date(2026, 8, 16, 10));
  const hidden = vi.spyOn(document, "hidden", "get").mockReturnValue(false);
  const Host = defineComponent({
    props: { enabled: Boolean },
    setup(props) {
      return { now: useSchedulerNow(() => props.enabled) };
    },
    render() {
      return null;
    },
  });
  const w = mount(Host, { props: { enabled: true } });
  try {
    expect(vi.getTimerCount()).toBe(1);
    const first = +w.vm.now!;
    vi.advanceTimersByTime(30000);
    expect(+w.vm.now!).toBe(first + 30000);
    hidden.mockReturnValue(true);
    document.dispatchEvent(new Event("visibilitychange"));
    expect(vi.getTimerCount()).toBe(0);
    vi.setSystemTime(new Date(2026, 8, 17, 0, 1));
    hidden.mockReturnValue(false);
    document.dispatchEvent(new Event("visibilitychange"));
    expect(w.vm.now!.getDate()).toBe(17);
    await w.setProps({ enabled: false });
    expect(w.vm.now).toBeUndefined();
    expect(vi.getTimerCount()).toBe(0);
    await w.setProps({ enabled: true });
    expect(vi.getTimerCount()).toBe(1);
  } finally {
    w.unmount();
  }
  expect(vi.getTimerCount()).toBe(0);
});
test("resource columns show lines only for today, clock updates and unsupported views hide them", async () => {
  vi.useFakeTimers({ toFake: ["Date", "setInterval", "clearInterval"] });
  vi.setSystemTime(new Date(2026, 8, 16, 14));
  vi.spyOn(document, "hidden", "get").mockReturnValue(false);
  const w = mount(Scheduler, {
    props: {
      date: "2026-09-16",
      mode: "resource-day",
      showNowIndicator: true,
      resources: [
        { id: "a", label: "A" },
        { id: "b", label: "B" },
      ],
    },
  });
  try {
    await nextTick();
    expect(w.findAll(".c-scheduler__now-indicator")).toHaveLength(2);
    expect(w.get(".c-scheduler__now-indicator").attributes("style")).toContain(
      "top: 50%",
    );
    vi.setSystemTime(new Date(2026, 8, 16, 15));
    vi.advanceTimersByTime(30000);
    await nextTick();
    expect(
      w.get(".c-scheduler__now-indicator").attributes("aria-label"),
    ).toContain("15:00");
    await w.setProps({ date: "2026-09-17" });
    expect(w.findAll(".c-scheduler__now-indicator")).toHaveLength(0);
    await w.setProps({ date: "2026-09-16", mode: "week" });
    expect(w.findAll(".c-scheduler__now-indicator")).toHaveLength(1);
    await w.setProps({ mode: "month" });
    expect(w.findAll(".c-scheduler__now-indicator")).toHaveLength(0);
    await w.setProps({ mode: "day", showNowIndicator: false });
    expect(w.findAll(".c-scheduler__now-indicator")).toHaveLength(0);
  } finally {
    w.unmount();
  }
});
test("SSR renders no clock marker or interval", async () => {
  vi.useFakeTimers({ toFake: ["Date", "setInterval", "clearInterval"] });
  const Host = defineComponent({
    setup() {
      const now = useSchedulerNow(() => true);
      return () => String(now.value ?? "");
    },
  });
  expect(await renderToString(createSSRApp(Host))).not.toContain("Date");
  expect(vi.getTimerCount()).toBe(0);
});
