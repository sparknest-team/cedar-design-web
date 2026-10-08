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
import { createApp, createSSRApp, h, nextTick } from "vue";
import { renderToString } from "@vue/server-renderer";
import { mount as mountComponent } from "@vue/test-utils";
import { afterEach, describe, expect, test, vi } from "vitest";
import {
  Dialog,
  _DialogComponent as DialogComponent,
  dialogProps,
} from "../index";

function mountDialog(props = {}, slots = {}) {
  return mount(DialogComponent, {
    props: { open: true, popupContainer: false, ...props },
    slots,
  });
}

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

afterEach(async () => {
  Dialog.close();
  Dialog.resetDefaultOptions();
  await delay(350);
});

describe("Dialog component contract", () => {
  test("installs the component and complete service", () => {
    const app = createApp({}).use(Dialog);
    expect(app.component(DialogComponent.name)).toBeTruthy();
    expect(app.config.globalProperties.$dialog.open).toBeTypeOf("function");
    expect(app.config.globalProperties.$dialog.setDefaultOptions).toBeTypeOf(
      "function",
    );
  });

  test("renders shared props and accessibility attributes", async () => {
    expect(dialogProps).toHaveProperty("overlay");
    expect(dialogProps).toHaveProperty("overlayClosable");
    expect(dialogProps).not.toHaveProperty("mask");
    expect(dialogProps).not.toHaveProperty("maskClosable");
    const wrapper = mountDialog({
      title: "Confirm deletion",
      message: "This cannot be undone.",
      type: "warning",
      simple: true,
      messageAlign: "center",
    });
    await nextTick();
    const dialog = wrapper.get('[role="dialog"]');
    expect(dialogProps.messageAlign.default).toBe("left");
    expect(dialog.attributes("aria-modal")).toBe("true");
    expect(dialog.attributes("aria-label")).toBe("Confirm deletion");
    expect(dialog.attributes("tabindex")).toBe("-1");
    expect(dialog.classes()).toContain("c-dialog-simple");
    expect(wrapper.get(".c-dialog-body").attributes("style")).toContain(
      "text-align: center",
    );
    expect(wrapper.find('button[aria-label="Close dialog"]').exists()).toBe(
      true,
    );
  });

  test("uses close semantics for close button and overlay", async () => {
    const beforeClose = vi.fn((_action, done) => done());
    const wrapper = mountDialog({ beforeClose });
    await nextTick();
    await wrapper.get('button[aria-label="Close dialog"]').trigger("click");
    expect(beforeClose).toHaveBeenCalledWith(
      "close",
      expect.any(Function),
      expect.any(Object),
    );
    expect(wrapper.emitted("cancel")).toBeUndefined();

    const overlayWrapper = mountDialog({ beforeClose });
    await nextTick();
    const wrapperElement = overlayWrapper.get(".c-dialog-wrapper");
    await wrapperElement.trigger("pointerdown");
    await wrapperElement.trigger("click");
    expect(overlayWrapper.emitted("click-overlay")?.[0]?.[0]).toBeInstanceOf(
      Event,
    );
    expect(overlayWrapper.emitted("cancel")).toBeUndefined();
  });

  test("uses text buttons by default and supports Button prop overrides", async () => {
    const wrapper = mountDialog({
      confirmButtonProps: { variant: "default", status: "danger" },
    });
    await nextTick();
    const [cancelButton, confirmButton] = wrapper.findAll(
      ".c-dialog-footer button",
    );
    expect(cancelButton.classes()).toContain("c-button--variant-text");
    expect(confirmButton.classes()).toContain("c-button--variant-default");
    expect(confirmButton.classes()).toContain("c-button--status-danger");
  });

  test("waits for beforeClose before emitting the action", async () => {
    let done: (() => void) | undefined;
    const wrapper = mountDialog({
      beforeClose: (_action, next) => (done = next),
    });
    await nextTick();
    await wrapper.findAll(".c-dialog-footer button").at(-1)!.trigger("click");
    expect(wrapper.emitted("confirm")).toBeUndefined();
    done?.();
    await nextTick();
    expect(wrapper.emitted("confirm")).toHaveLength(1);
    expect(wrapper.emitted("update:open")?.at(-1)).toEqual([false]);
  });

  test("ignores stale async close completions", async () => {
    const completions: Array<() => void> = [];
    const wrapper = mountDialog({
      beforeClose: (_action, done) => completions.push(done),
    });
    await nextTick();
    const confirm = wrapper.findAll(".c-dialog-footer button").at(-1)!;
    await confirm.trigger("click");
    await confirm.trigger("click");
    completions[0]();
    await nextTick();
    expect(wrapper.emitted("confirm")).toBeUndefined();
    completions[1]();
    await nextTick();
    expect(wrapper.emitted("confirm")).toHaveLength(1);
  });

  test("route close follows closeOnRouteChange", async () => {
    const wrapper = mountDialog({ closeOnRouteChange: true });
    window.dispatchEvent(new PopStateEvent("popstate"));
    await nextTick();
    expect(wrapper.emitted("update:open")?.at(-1)).toEqual([false]);
  });

  test("footer and instance expose confirm, cancel and close", async () => {
    let slotProps: Record<string, unknown> = {};
    const wrapper = mountDialog(
      {},
      {
        footer: (props) => {
          slotProps = props;
          return h("div", "footer");
        },
      },
    );
    await nextTick();
    expect(slotProps).toEqual(
      expect.objectContaining({
        confirm: expect.any(Function),
        cancel: expect.any(Function),
        close: expect.any(Function),
      }),
    );
    expect(wrapper.vm.confirm).toBeTypeOf("function");
    expect(wrapper.vm.cancel).toBeTypeOf("function");
    expect(wrapper.vm.close).toBeTypeOf("function");
  });

  test("traps keyboard focus and renders safely during SSR", async () => {
    const wrapper = mount(DialogComponent, {
      attachTo: document.body,
      props: { open: true, popupContainer: false },
    });
    await nextTick();
    const buttons = wrapper.findAll<HTMLButtonElement>("button");
    buttons.at(-1)!.element.focus();
    await wrapper.get('[role="dialog"]').trigger("keydown", { key: "Tab" });
    expect(document.activeElement).toBe(buttons[0].element);
    wrapper.unmount();

    const html = await renderToString(
      createSSRApp({ render: () => h(DialogComponent, { open: true }) }),
    );
    expect(typeof html).toBe("string");
  });
});

describe("Dialog functional contract", () => {
  test("uses explicit methods and supports string plus update handles", async () => {
    expect(Dialog).not.toBeTypeOf("function");
    for (const method of [
      "open",
      "confirm",
      "alert",
      "info",
      "success",
      "warning",
      "error",
    ]) {
      expect(Dialog[method]).toBeTypeOf("function");
    }

    const result = Dialog.open("Initial message");
    await nextTick();
    expect(document.querySelector(".c-dialog-body")?.textContent).toContain(
      "Initial message",
    );
    result.update({ message: "Updated message", title: "Updated title" });
    await nextTick();
    expect(document.querySelector(".c-dialog-body")?.textContent).toContain(
      "Updated message",
    );
    expect(document.querySelector(".c-dialog-title")?.textContent).toContain(
      "Updated title",
    );
    result.close();
    await expect(result).resolves.toBe("close");
  });

  test("applies defaults and resolves confirm", async () => {
    const onConfirm = vi.fn();
    Dialog.setDefaultOptions({ title: "Default title", onConfirm });
    const result = Dialog.confirm("Continue?");
    await nextTick();
    expect(
      Array.from(document.querySelectorAll(".c-dialog-title")).at(-1)
        ?.textContent,
    ).toContain("Default title");
    const buttons = document.querySelectorAll<HTMLButtonElement>(
      ".c-dialog-footer button",
    );
    buttons.item(buttons.length - 1).click();
    await expect(result).resolves.toBe("confirm");
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  test("supports overriding functional presentation", async () => {
    const result = Dialog.open({
      message: "General content",
      simple: false,
      closable: true,
    });
    await nextTick();
    const dialogs = document.querySelectorAll<HTMLElement>(".c-dialog");
    const dialog = dialogs.item(dialogs.length - 1);
    expect(dialog.classList.contains("c-dialog-simple")).toBe(false);
    const closeButton = dialog.querySelector<HTMLButtonElement>(
      'button[aria-label="Close dialog"]',
    );
    expect(closeButton).not.toBeNull();
    closeButton.click();
    await expect(result).resolves.toBe("close");
  });

  test.each([
    "open",
    "confirm",
    "alert",
    "info",
    "success",
    "warning",
    "error",
  ] as const)(
    "%s uses simple layout and hides the close button by default",
    async (method) => {
      const result = Dialog[method]("Message");
      await nextTick();
      const dialogs = document.querySelectorAll<HTMLElement>(".c-dialog");
      const dialog = dialogs.item(dialogs.length - 1);
      expect(dialog.classList.contains("c-dialog-simple")).toBe(true);
      expect(
        dialog.querySelector('button[aria-label="Close dialog"]'),
      ).toBeNull();
      result.close();
      await expect(result).resolves.toBe("close");
    },
  );
});
