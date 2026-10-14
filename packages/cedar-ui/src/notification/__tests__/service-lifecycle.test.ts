import { nextTick } from "vue";
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
      position: "topLeft",
      duration: 0,
    });
    await nextTick();
    Notification.clear("topRight");
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
    Notification.clear("topRight");
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
      position: "topLeft",
      duration: 0,
    });
    Notification.info({
      id: "right-id",
      content: "old right",
      position: "bottomRight",
      duration: 0,
    });
    await nextTick();
    Notification.clear();
    Notification.info({
      id: "left-id",
      content: "new left",
      position: "topLeft",
      duration: 0,
    });
    Notification.info({
      id: "right-id",
      content: "new right",
      position: "bottomRight",
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
    Notification.clear("topRight");
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
