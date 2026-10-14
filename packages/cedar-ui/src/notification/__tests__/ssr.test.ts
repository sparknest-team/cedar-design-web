// @vitest-environment node
import { createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";
import { expect, test, vi } from "vitest";
import Notification from "../Notification.vue";

test("SSR renders notification without creating browser timers", async () => {
  const timer = vi.spyOn(globalThis, "setTimeout");
  const html = await renderToString(
    createSSRApp({ render: () => h(Notification, { duration: 100 }) }),
  );
  expect(html).toContain('role="alert"');
  expect(timer).not.toHaveBeenCalled();
  timer.mockRestore();
});
