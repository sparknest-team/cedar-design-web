import { h, nextTick } from "vue";
import { renderToString } from "@vue/server-renderer";
import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import InfiniteScroll, { infiniteScrollProps } from "..";

const nativeResizeObserver = globalThis.ResizeObserver;

const rect = (top: number, bottom: number, width = 100) =>
  ({
    x: 0,
    y: top,
    top,
    bottom,
    left: 0,
    right: width,
    width,
    height: bottom - top,
    toJSON: () => ({}),
  }) as DOMRect;

const makeTarget = () => {
  const target = document.createElement("div");
  document.body.appendChild(target);
  vi.spyOn(target, "getBoundingClientRect").mockReturnValue(rect(0, 100));
  Object.defineProperties(target, {
    clientHeight: { configurable: true, value: 100 },
    scrollHeight: { configurable: true, value: 100 },
    scrollTop: { configurable: true, writable: true, value: 0 },
  });
  return target;
};

const makeReachable = (
  wrapper: ReturnType<typeof mount>,
  detectorBottom = 90,
) => {
  const root = wrapper.element as HTMLElement;
  const detector = wrapper.find(".c-infinite-scroll__detector")
    .element as HTMLElement;
  vi.spyOn(root, "getBoundingClientRect").mockReturnValue(rect(0, 90));
  vi.spyOn(detector, "getBoundingClientRect").mockReturnValue(
    rect(detectorBottom, detectorBottom),
  );
};

afterEach(() => {
  document.body.innerHTML = "";
  vi.restoreAllMocks();
  if (nativeResizeObserver) {
    globalThis.ResizeObserver = nativeResizeObserver;
  } else {
    delete (globalThis as { ResizeObserver?: typeof ResizeObserver })
      .ResizeObserver;
  }
});

describe("infinite-scroll public contract", () => {
  it("exports the component and only the single-state props", () => {
    expect(InfiniteScroll.name).toMatch(/^C/);
    expect(Object.keys(infiniteScrollProps)).toEqual([
      "status",
      "bottomOffset",
      "immediate",
      "disabled",
      "target",
    ]);
    expect(infiniteScrollProps.status.default).toBe("idle");
    expect(infiniteScrollProps.bottomOffset.default).toBe(0);
    expect(infiniteScrollProps.immediate.default).toBe(true);
    expect(infiniteScrollProps.disabled.default).toBe(false);
  });

  it("renders safely during SSR", async () => {
    await expect(
      renderToString(
        h(InfiniteScroll, { target: "#scroller" }, () => "content"),
      ),
    ).resolves.toContain("content");
  });

  it("emits update before load and synchronously deduplicates checks", () => {
    const target = makeTarget();
    const order: string[] = [];
    const wrapper = mount(InfiniteScroll, {
      props: {
        target,
        immediate: false,
        "onUpdate:status": () => order.push("update"),
        onLoad: () => order.push("load"),
      },
    });
    makeReachable(wrapper);

    (wrapper.vm as any).check();
    (wrapper.vm as any).check();

    expect(order).toEqual(["update", "load"]);
    expect(wrapper.emitted("update:status")).toEqual([["loading"]]);
    expect(wrapper.emitted("load")).toHaveLength(1);
  });

  it("runs the initial check only when immediate is enabled", () => {
    let scheduled: FrameRequestCallback | undefined;
    const requestAnimationFrame = vi
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((callback) => {
        scheduled = callback;
        return 1;
      });
    const target = makeTarget();
    const immediateWrapper = mount(InfiniteScroll, { props: { target } });
    makeReachable(immediateWrapper);
    scheduled?.(0);
    expect(immediateWrapper.emitted("load")).toHaveLength(1);

    requestAnimationFrame.mockClear();
    mount(InfiniteScroll, { props: { target, immediate: false } });
    expect(requestAnimationFrame).not.toHaveBeenCalled();
  });

  it("ignores only the initial ResizeObserver notification when immediate is false", () => {
    let resizeCallback: ResizeObserverCallback | undefined;
    class ResizeObserverMock {
      constructor(callback: ResizeObserverCallback) {
        resizeCallback = callback;
      }

      observe() {}
      disconnect() {}
      unobserve() {}
    }
    globalThis.ResizeObserver =
      ResizeObserverMock as unknown as typeof ResizeObserver;

    let scheduled: FrameRequestCallback | undefined;
    const requestAnimationFrame = vi
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((callback) => {
        scheduled = callback;
        return 1;
      });
    const target = makeTarget();
    const wrapper = mount(InfiniteScroll, {
      props: { target, immediate: false },
    });
    makeReachable(wrapper);

    resizeCallback?.([], {} as ResizeObserver);
    expect(requestAnimationFrame).not.toHaveBeenCalled();
    expect(wrapper.emitted("load")).toBeUndefined();

    resizeCallback?.([], {} as ResizeObserver);
    expect(requestAnimationFrame).toHaveBeenCalledTimes(1);
    scheduled?.(0);
    expect(wrapper.emitted("load")).toHaveLength(1);
  });

  it("releases the lock only after an external state cycle", async () => {
    const target = makeTarget();
    const wrapper = mount(InfiniteScroll, {
      props: { target, immediate: false },
    });
    makeReachable(wrapper);

    (wrapper.vm as any).check();
    await wrapper.setProps({ status: "loading" });
    await wrapper.setProps({ status: "idle" });
    (wrapper.vm as any).check();

    expect(wrapper.emitted("load")).toHaveLength(2);
  });

  it("retries from error without emitting load", () => {
    const order: string[] = [];
    const wrapper = mount(InfiniteScroll, {
      props: {
        status: "error",
        immediate: false,
        "onUpdate:status": () => order.push("update"),
        onRetry: () => order.push("retry"),
        onLoad: () => order.push("load"),
      },
    });

    (wrapper.vm as any).retry();
    (wrapper.vm as any).retry();

    expect(order).toEqual(["update", "retry"]);
    expect(wrapper.emitted("retry")).toHaveLength(1);
    expect(wrapper.emitted("load")).toBeUndefined();
  });

  it("supports default and custom error retry UI", async () => {
    const defaultWrapper = mount(InfiniteScroll, {
      props: { status: "error", immediate: false },
    });
    await defaultWrapper.find(".c-infinite-scroll__retry").trigger("click");
    expect(defaultWrapper.emitted("retry")).toHaveLength(1);

    let slotRetry: (() => void) | undefined;
    const customWrapper = mount(InfiniteScroll, {
      props: { status: "error", immediate: false },
      slots: {
        error: ({ retry }: { retry: () => void }) => {
          slotRetry = retry;
          return h("span", "custom error");
        },
      },
    });
    expect(customWrapper.text()).toContain("custom error");
    slotRetry?.();
    expect(customWrapper.emitted("retry")).toHaveLength(1);
  });

  it("renders only the matching status slot", async () => {
    const wrapper = mount(InfiniteScroll, {
      props: { status: "loading", immediate: false },
      slots: {
        default: () => "content",
        loading: () => "loading slot",
        error: () => "error slot",
        finished: () => "finished slot",
      },
    });
    expect(wrapper.text()).toContain("contentloading slot");
    expect(wrapper.text()).not.toContain("error slot");

    await wrapper.setProps({ status: "finished" });
    expect(wrapper.text()).toContain("finished slot");
    expect(wrapper.text()).not.toContain("loading slot");
  });

  it("blocks disabled and finished states, then resumes from idle", async () => {
    const target = makeTarget();
    const wrapper = mount(InfiniteScroll, {
      props: { target, immediate: false, disabled: true },
    });
    makeReachable(wrapper);
    (wrapper.vm as any).check();
    expect(wrapper.emitted("load")).toBeUndefined();

    await wrapper.setProps({ disabled: false, status: "finished" });
    (wrapper.vm as any).check();
    (wrapper.vm as any).retry();
    expect(wrapper.emitted("load")).toBeUndefined();

    await wrapper.setProps({ status: "idle" });
    (wrapper.vm as any).check();
    expect(wrapper.emitted("load")).toHaveLength(1);
  });

  it("uses CSS length conversion and treats invalid strings as zero", () => {
    const target = makeTarget();
    const nativeGetComputedStyle = window.getComputedStyle;
    vi.spyOn(window, "getComputedStyle").mockImplementation(
      (element: Element) => {
        if ((element as HTMLElement).style.width === "2rem") {
          return { width: "32px" } as CSSStyleDeclaration;
        }
        return nativeGetComputedStyle(element);
      },
    );
    const wrapper = mount(InfiniteScroll, {
      props: { target, immediate: false, bottomOffset: "2rem" },
    });
    makeReachable(wrapper, 120);
    (wrapper.vm as any).check();
    expect(wrapper.emitted("load")).toHaveLength(1);

    const invalidWrapper = mount(InfiniteScroll, {
      props: { target, immediate: false, bottomOffset: "not-a-length" },
    });
    makeReachable(invalidWrapper, 120);
    (invalidWrapper.vm as any).check();
    expect(invalidWrapper.emitted("load")).toBeUndefined();
  });

  it.each([
    ["10vh", "100px"],
    ["10vw", "100px"],
    ["calc(1rem + 8px)", "24px"],
  ])("converts the %s CSS threshold through the browser", (value, pixels) => {
    const target = makeTarget();
    const nativeGetComputedStyle = window.getComputedStyle;
    vi.spyOn(window, "getComputedStyle").mockImplementation(
      (element: Element) => {
        if ((element as HTMLElement).style.width === value) {
          return { width: pixels } as CSSStyleDeclaration;
        }
        return nativeGetComputedStyle(element);
      },
    );
    const wrapper = mount(InfiniteScroll, {
      props: { target, immediate: false, bottomOffset: value },
    });
    if (value.startsWith("calc(")) {
      vi.spyOn(CSSStyleDeclaration.prototype, "width", "get").mockReturnValue(
        value,
      );
    }
    makeReachable(wrapper, 120);
    (wrapper.vm as any).check();
    expect(wrapper.emitted("load")).toHaveLength(1);
  });

  it("discovers the nearest scroll parent", () => {
    const parent = document.createElement("div");
    parent.style.overflowY = "auto";
    Object.defineProperty(parent, "clientHeight", { value: 100 });
    document.body.appendChild(parent);
    vi.spyOn(parent, "getBoundingClientRect").mockReturnValue(rect(0, 100));
    const wrapper = mount(InfiniteScroll, {
      attachTo: parent,
      props: { immediate: false },
    });
    makeReachable(wrapper);
    (wrapper.vm as any).check();
    expect(wrapper.emitted("load")).toHaveLength(1);
  });

  it("skips hidden layouts and resumes after they become measurable", () => {
    const target = makeTarget();
    const wrapper = mount(InfiniteScroll, {
      attachTo: document.body,
      props: { target, immediate: false },
    });
    const root = wrapper.element as HTMLElement;
    const detector = wrapper.find(".c-infinite-scroll__detector")
      .element as HTMLElement;
    root.style.display = "none";
    const detectorRect = vi
      .spyOn(detector, "getBoundingClientRect")
      .mockReturnValue(rect(0, 0, 0));
    (wrapper.vm as any).check();
    expect(wrapper.emitted("load")).toBeUndefined();

    root.style.display = "block";
    detectorRect.mockReturnValue(rect(90, 90));
    (wrapper.vm as any).check();
    expect(wrapper.emitted("load")).toHaveLength(1);
  });

  it("rebinds when target changes and removes listeners on unmount", async () => {
    const first = makeTarget();
    const second = makeTarget();
    const firstAdd = vi.spyOn(first, "addEventListener");
    const firstRemove = vi.spyOn(first, "removeEventListener");
    const secondAdd = vi.spyOn(second, "addEventListener");
    const secondRemove = vi.spyOn(second, "removeEventListener");
    const wrapper = mount(InfiniteScroll, {
      props: { target: first, immediate: false },
    });
    expect(firstAdd).toHaveBeenCalledWith("scroll", expect.any(Function), {
      passive: true,
    });

    await wrapper.setProps({ target: second });
    await nextTick();
    expect(firstRemove).toHaveBeenCalledWith("scroll", firstAdd.mock.calls.find(([type]) => type === "scroll")![1]);
    expect(secondAdd).toHaveBeenCalledWith("scroll", expect.any(Function), {
      passive: true,
    });

    wrapper.unmount();
    expect(secondRemove).toHaveBeenCalledWith("scroll", secondAdd.mock.calls.find(([type]) => type === "scroll")![1]);
  });

  it("supports a descendant virtual scroll target", async () => {
    const wrapper = mount(InfiniteScroll, {
      props: { immediate: false, bottomOffset: 20 },
      slots: { default: () => h("div", { class: "virtual-target" }) },
    });
    const virtualTarget = wrapper.find(".virtual-target")
      .element as HTMLElement;
    Object.defineProperties(virtualTarget, {
      clientHeight: { configurable: true, value: 100 },
      scrollHeight: { configurable: true, value: 140 },
      scrollTop: { configurable: true, writable: true, value: 20 },
    });
    await wrapper.setProps({ target: virtualTarget });
    await nextTick();
    makeReachable(wrapper);

    (wrapper.vm as any).check();
    expect(wrapper.emitted("load")).toHaveLength(1);
  });
});
