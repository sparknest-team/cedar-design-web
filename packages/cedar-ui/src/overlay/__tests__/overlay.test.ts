import { afterEach as unmountAfterEach } from 'vitest'
const mountedWrappers: any[] = []
unmountAfterEach(() => { for (const wrapper of mountedWrappers.splice(0)) wrapper.unmount() })
const mount = (...args: any[]) => {
  const wrapper = mountComponent(args[0], args[1])
  mountedWrappers.push(wrapper)
  return wrapper
}
import { mount as mountComponent } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import Overlay from "../overlay.vue";
import { overlayProps } from "../props";

describe("Overlay", () => {
  it("uses the canonical overlay API", () => {
    expect(overlayProps).toHaveProperty("overlayClosable");
    expect(overlayProps).not.toHaveProperty("maskClosable");
  });

  it("only closes from the backdrop when allowed", async () => {
    const wrapper = mount(Overlay, {
      props: { defaultOpen: true, popupContainer: false },
      slots: { default: "content" },
    });
    await wrapper.get(".c-overlay__content").trigger("click");
    expect(wrapper.emitted("update:open")).toBeUndefined();
    await wrapper.get(".c-overlay__backdrop").trigger("click");
    expect(wrapper.emitted("click")?.[0]?.[0]).toBeInstanceOf(MouseEvent);
    expect(wrapper.emitted("update:open")?.at(-1)).toEqual([false]);
  });

  it("supports a non-closing backdrop", async () => {
    const onUpdateOpen = vi.fn();
    const wrapper = mount(Overlay, {
      props: {
        open: true,
        overlayClosable: false,
        popupContainer: false,
        "onUpdate:open": onUpdateOpen,
      },
    });
    await wrapper.get(".c-overlay__backdrop").trigger("click");
    expect(onUpdateOpen).not.toHaveBeenCalled();
  });

  it("can preserve mounted content after closing", async () => {
    const wrapper = mount(Overlay, {
      props: {
        defaultOpen: true,
        popupContainer: false,
        unmountOnClose: false,
      },
      slots: { default: "<span data-overlay-content>content</span>" },
    });

    expect(wrapper.emitted("open")).toHaveLength(1);
    await wrapper.get(".c-overlay__backdrop").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("close")).toHaveLength(1);
    expect(wrapper.find("[data-overlay-content]").exists()).toBe(true);
    expect(wrapper.get(".c-overlay").isVisible()).toBe(false);
  });

  it("emits Escape and closes only when enabled", async () => {
    const wrapper = mount(Overlay, {
      props: { defaultOpen: true, popupContainer: false },
    });
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("key-escape")?.[0]?.[0]).toBeInstanceOf(
      KeyboardEvent,
    );
    expect(wrapper.emitted("update:open")?.at(-1)).toEqual([false]);
  });
});
