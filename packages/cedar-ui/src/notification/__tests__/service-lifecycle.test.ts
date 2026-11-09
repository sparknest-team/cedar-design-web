import { createApp, nextTick } from "vue";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import Notification from "../index";

beforeEach(() => {
  vi.useFakeTimers();
});
afterEach(async () => {
  Notification.clear();
  await nextTick();
  for (let i = 0; i < 4; i++) {
    vi.advanceTimersByTime(500);
    await nextTick();
  }
  vi.restoreAllMocks();
  vi.useRealTimers();
});
describe("Notification service ID ownership", () => {
  test("installed service exposes remove and removes the matching notification", async () => {
    const app = createApp({});
    app.use(Notification);
    const service = app.config.globalProperties.$notification;
    expect(Object.keys(service).sort()).toEqual(["clear", "error", "info", "remove", "success", "warning"]);
    service.info({ id: "plugin-id", content: "plugin notice", duration: 0 });
    await nextTick();
    expect(document.body.textContent).toContain("plugin notice");
    service.remove("plugin-id");
    await nextTick();
    vi.advanceTimersByTime(500);
    await nextTick();
    expect(document.body.textContent).not.toContain("plugin notice");
  });
  test("service forwards a custom close button accessible name", async () => {
    Notification.info({ id: "named-close", content: "notice", closable: true, duration: 0, closeButtonAriaLabel: "Dismiss alert" });
    await nextTick();
    expect(document.querySelector('.c-notification button')?.getAttribute('aria-label')).toBe('Dismiss alert');
    Notification.info({ id: "named-close", content: "updated", closable: true, closeButtonAriaLabel: "关闭通知" });
    await nextTick();
    expect(document.querySelector('.c-notification button')?.getAttribute('aria-label')).toBe('关闭通知');
  });
  test("updating a still-active ID retains its component identity", async () => {
    Notification.info({
      id: "active-update",
      content: "before update",
      duration: 0,
    });
    await nextTick();
    const first = document.querySelector(".c-notification");
    Notification.success({
      id: "active-update",
      content: "after update",
      duration: 0,
    });
    await nextTick();
    expect(document.querySelector(".c-notification")).toBe(first);
    expect(document.body.textContent).toContain("after update");
    expect(document.querySelectorAll(".c-notification")).toHaveLength(1);
  });
  test("clear remains silent and repeated clear is harmless", async () => {
    const close = vi.fn();
    Notification.info({
      id: "silent-clear",
      content: "silent old",
      duration: 0,
      onClose: close,
    });
    await nextTick();
    Notification.clear();
    Notification.clear();
    await nextTick();
    expect(close).not.toHaveBeenCalled();
  });
  test("clearing one position does not replace another position", async () => {
    Notification.info({
      id: "scoped-right",
      content: "scoped old right",
      duration: 0,
    });
    Notification.info({
      id: "scoped-left",
      content: "keep left",
      position: "top-left",
      duration: 0,
    });
    await nextTick();
    Notification.clear("top-right");
    Notification.info({
      id: "scoped-right",
      content: "scoped new right",
      duration: 0,
    });
    await nextTick();
    expect(document.body.textContent).toContain("scoped new right");
    expect(document.body.textContent).toContain("keep left");
  });
  test("clear followed by same-ID add in one update cycle creates the new notification", async () => {
    Notification.info({
      id: "clear-readd",
      content: "old content",
      duration: 0,
    });
    await nextTick();
    Notification.clear("top-right");
    Notification.info({
      id: "clear-readd",
      content: "new content",
      duration: 0,
    });
    await nextTick();
    expect(document.body.textContent).toContain("new content");
  });
  test("clearing all positions releases each ID for immediate re-add", async () => {
    Notification.info({
      id: "left-id",
      content: "old left",
      position: "top-left",
      duration: 0,
    });
    Notification.info({
      id: "right-id",
      content: "old right",
      position: "bottom-right",
      duration: 0,
    });
    await nextTick();
    Notification.clear();
    Notification.info({
      id: "left-id",
      content: "new left",
      position: "top-left",
      duration: 0,
    });
    Notification.info({
      id: "right-id",
      content: "new right",
      position: "bottom-right",
      duration: 0,
    });
    await nextTick();
    expect(document.body.textContent).toContain("new left");
    expect(document.body.textContent).toContain("new right");
  });
  test("a same-ID replacement after clear gets a fresh display timer", async () => {
    const oldClose = vi.fn(),
      newClose = vi.fn();
    Notification.info({
      id: "timer-readd",
      content: "old timed",
      duration: 50,
      onClose: oldClose,
    });
    await nextTick();
    vi.advanceTimersByTime(30);
    Notification.clear("top-right");
    Notification.info({
      id: "timer-readd",
      content: "new timed",
      duration: 100,
      onClose: newClose,
    });
    await nextTick();
    vi.advanceTimersByTime(20);
    await nextTick();
    expect(newClose).not.toHaveBeenCalled();
    expect(document.body.textContent).toContain("new timed");
    vi.advanceTimersByTime(79);
    await nextTick();
    expect(newClose).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    await nextTick();
    expect(newClose).toHaveBeenCalledTimes(1);
    expect(oldClose).not.toHaveBeenCalled();
  });
});


test('canonical corner values create independent notification regions', async () => {
  const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const;
  for (const position of corners) {
    Notification.info({ id: position, content: position, position, duration: 0 });
  }
  await nextTick();
  for (const position of corners) {
    expect(document.querySelector(`.c-notification-list-${position}`)?.textContent).toContain(position);
  }
  Notification.clear('bottom-left');
  await nextTick();
  expect(document.querySelector('.c-notification-list-top-right')?.textContent).toContain('top-right');
  expect(document.querySelector('.c-notification-list-bottom-right')?.textContent).toContain('bottom-right');
});

test('throwing close callback cannot retain the notification or reserve its ID', async () => {
  const cause = new Error('close notification')
  const handle = Notification.info({ id: 'throw-close', content: 'stale callback item', duration: 0, onClose: () => { throw cause } })
  await nextTick()
  expect(() => handle.close()).toThrow(cause)
  await nextTick()
  vi.advanceTimersByTime(500)
  await nextTick()
  expect(document.body.textContent).not.toContain('stale callback item')
  Notification.info({ id: 'throw-close', content: 'new item', duration: 0 })
  await nextTick()
  expect(document.body.textContent).toContain('new item')
  expect(document.body.textContent).not.toContain('stale callback item')
})

test('a close notification may replace its own logical ID without corrupting new ownership', async () => {
  const old = Notification.info({ id: 'reentrant-close', content: 'old reentrant', duration: 0, onClose: () => {
    Notification.info({ id: 'reentrant-close', content: 'new reentrant', duration: 0 })
  } })
  await nextTick()
  old.close()
  await nextTick()
  Notification.info({ id: 'reentrant-close', content: 'updated reentrant', duration: 0 })
  await nextTick()
  vi.advanceTimersByTime(500)
  await nextTick()
  expect(document.querySelectorAll('.c-notification')).toHaveLength(1)
  expect(document.body.textContent).toContain('updated reentrant')
})
