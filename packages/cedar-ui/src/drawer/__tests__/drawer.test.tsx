import { afterEach as unmountAfterEach } from "vitest";
const mountedWrappers: any[] = [];
unmountAfterEach(() => {
  for (const wrapper of mountedWrappers.splice(0)) wrapper.unmount();
});
const mount = (...args: any[]) => {
  const wrapper = mountComponent(args[0], args[1]);
  mountedWrappers.push(wrapper);
  return wrapper;
};
import { nextTick } from "vue";
import { mount as mountComponent } from "@vue/test-utils";
import { describe, test, expect, vi } from "vitest";
import { Drawer, drawerProps } from "../index";

describe("Drawer", () => {
  test("render", async () => {
    const wrapper = mount(Drawer, {
      props: { open: true, popupContainer: false, title: "Settings" },
    });
    await nextTick();
    const dialog = wrapper.get('[role="dialog"]');
    expect(Drawer.name).toBe("CDrawer");
    expect(drawerProps.closeButtonAriaLabel.default).toBe("Close drawer");
    expect(drawerProps.beforeClose).toBeTruthy();
    expect(drawerProps).not.toHaveProperty("beforeConfirm");
    expect(drawerProps).not.toHaveProperty("beforeCancel");
    expect(drawerProps).toHaveProperty("lockScroll");
    expect(drawerProps).toHaveProperty("zIndex");
    expect(drawerProps).toHaveProperty("drawerClass");
    expect(drawerProps).toHaveProperty("cancelButtonText");
    expect(drawerProps).not.toHaveProperty("cancelText");
    expect(drawerProps.cancelButton.default).toBe(true);
    expect(drawerProps).toHaveProperty("overlay");
    expect(drawerProps).toHaveProperty("overlayClosable");
    expect(drawerProps).not.toHaveProperty("mask");
    expect(drawerProps).not.toHaveProperty("maskClosable");
    expect(dialog.attributes("aria-modal")).toBe("true");
    expect(dialog.attributes("aria-label")).toBe("Settings");
    expect(wrapper.get('button[aria-label="Close drawer"]')).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("beforeClose receives close action and commits once", async () => {
    let done: (() => void) | undefined;
    const beforeClose = vi.fn((_action, callback) => {
      done = callback;
    });
    const wrapper = mount(Drawer, {
      props: { defaultOpen: true, popupContainer: false, beforeClose },
    });
    await nextTick();

    await wrapper.get('button[aria-label="Close drawer"]').trigger("click");
    expect(beforeClose).toHaveBeenCalledWith(
      { action: "close" },
      expect.any(Function),
      expect.objectContaining({
        signal: expect.any(AbortSignal),
      }),
    );
    expect(wrapper.emitted("update:open")).toBeUndefined();

    done?.();
    done?.();
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(wrapper.emitted("update:open")).toEqual([[false]]);
  });
});
