// @vitest-environment node
import { createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";
import { expect, test, vi } from "vitest";
import Notification from "../Notification.vue";
import NotificationService from "../index";

test("SSR renders notification without creating browser timers", async () => {
  const timer = vi.spyOn(globalThis, "setTimeout");
  const html = await renderToString(
    createSSRApp({ render: () => h(Notification, { duration: 100 }) }),
  );
  expect(html).toContain('role="alert"');
  expect(timer).not.toHaveBeenCalled();
  timer.mockRestore();
});

test("SSR service calls return safe handles without invoking callbacks", () => {
  const onClose = vi.fn();
  for (const type of ["info", "success", "warning", "error"] as const) {
    const handle = NotificationService[type]({ content: "SSR", id: type, onClose });
    expect(() => handle.close()).not.toThrow();
  }
  expect(() => NotificationService.remove("SSR")).not.toThrow();
  expect(() => NotificationService.clear()).not.toThrow();
  const app = createSSRApp({});
  app.use(NotificationService);
  expect(() => app.config.globalProperties.$notification.info("SSR").close()).not.toThrow();
  expect(() => app.config.globalProperties.$notification.remove("SSR")).not.toThrow();
  expect(onClose).not.toHaveBeenCalled();
});
