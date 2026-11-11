import { mount } from "@vue/test-utils";
import { createApp } from "vue";
import { afterEach, describe, test, expect, vi } from "vitest";
import CedarVue from "../../cedar-vue";
import { Message, _MessageComponent, messageProps } from "../index";

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

afterEach(async () => {
  Message.clear();
  Message.resetDefaultOptions();
  await delay(250);
});

describe("Message", () => {
  test("provides an accessible close control", async () => {
    const wrapper = mount(_MessageComponent, {
      global: { stubs: { transition: false } },
      props: { open: true, popupContainer: false, closable: true, duration: 0 },
    });
    await wrapper.get('button[aria-label="Close message"]').trigger("click");
    expect(_MessageComponent.name).toBe("CMessage");
    expect(wrapper.find(".c-message-icon-hover").exists()).toBe(true);
    expect(messageProps.duration.validator(0)).toBe(true);
    expect(wrapper.emitted("update:open")).toEqual([[false]]);
    wrapper.unmount();
  });

  test("renders messages created by Message.info", async () => {
    Message.info({ content: "Information", duration: 0 });

    await Promise.resolve();

    expect(
      document.body.querySelector(".c-message-info")?.textContent,
    ).toContain("Information");
  });

  test("is callable, supports center and has no normal alias", async () => {
    Message({ content: "Centered", position: "center", duration: 0 });
    await delay(50);
    expect(
      document.body.querySelector(".c-message-list-center")?.textContent,
    ).toContain("Centered");
    expect((Message as any).normal).toBeUndefined();
  });

  test("updates the same id without duplicate DOM", async () => {
    Message.info({ id: 1, content: "first", duration: 0 });
    await delay(50);
    Message.success({ id: 1, content: "second", duration: 0 });
    await delay(50);
    expect(document.body.querySelectorAll(".c-message").length).toBe(1);
    expect(document.body.querySelector(".c-message-content")?.textContent).toBe(
      "second",
    );
  });

  test("close handle is idempotent", async () => {
    const onClose = vi.fn();
    const onClosed = vi.fn();
    const handle = Message({
      content: "Lifecycle",
      duration: 0,
      onClose,
      onClosed,
    });
    await delay(50);
    handle.close();
    handle.close();
    await delay(300);
    expect({
      close: onClose.mock.calls.length,
      closed: onClosed.mock.calls.length,
    }).toEqual({ close: 1, closed: 1 });
  });

  test("is installed with the full CedarVue plugin", () => {
    const app = createApp({});
    app.use(CedarVue);

    expect(app.config.globalProperties.$message).toBeDefined();
  });
});

test("message variants apply to component, service, defaults and id updates", async () => {
  expect(messageProps.variant.default).toBe("neutral");
  expect(messageProps.variant.validator("tonal")).toBe(true);
  const wrapper = mount(_MessageComponent, {
    global: { stubs: { transition: false } },
    props: { open: true, popupContainer: false, duration: 0 },
  });
  expect(wrapper.find(".c-message--variant-neutral").exists()).toBe(true);
  for (const variant of ["neutral", "tonal", "solid"] as const) {
    await wrapper.setProps({ variant });
    expect(wrapper.find(".c-message--variant-" + variant).exists()).toBe(true);
  }
  wrapper.unmount();
  Message.setDefaultOptions({ variant: "tonal", duration: 0 });
  Message.info({ id: "variant-check", content: "tonal" });
  await Promise.resolve();
  expect(document.body.querySelector(".c-message--variant-tonal")).toBeTruthy();
  Message.success({
    id: "variant-check",
    variant: "neutral",
    content: "updated",
  });
  await Promise.resolve();
  expect(
    document.body.querySelector(".c-message--variant-neutral"),
  ).toBeTruthy();
  expect(document.body.querySelector(".c-message--variant-tonal")).toBeFalsy();
  Message.clear();
  Message.resetDefaultOptions();
});
