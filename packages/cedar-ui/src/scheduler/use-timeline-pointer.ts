import { nextTick, onBeforeUnmount, ref } from "vue";
import type { SchedulerEvent } from "./core";
import type { SchedulerResize } from "./drag";

/** The Scheduler owns the gesture so recycling a source row cannot terminate it. */
export function useTimelinePointer(options: {
  locked: () => boolean;
  start: (
    event: SchedulerEvent,
    resize: SchedulerResize,
    resourceId?: string,
  ) => void;
  move: (x: number, y: number) => void;
  drop: (x: number, y: number) => void;
  end: () => void;
}) {
  const ghost = ref<{
    title: string;
    left: number;
    top: number;
    width: number;
    height: number;
  }>();
  let cleanup = () => {};
  const cancel = () => cleanup();
  function begin(
    pointer: PointerEvent,
    event: SchedulerEvent,
    resize: SchedulerResize,
    resourceId: string,
    finished: (moved: boolean) => void,
  ) {
    cancel();
    if (options.locked() || pointer.button !== 0 || event.readonly) return;
    const origin = pointer.currentTarget as HTMLElement;
    const viewport =
      origin.closest<HTMLElement>(".c-scheduler__virtual-rows") ??
      origin.closest<HTMLElement>(".c-scheduler__main");
    const rect = origin.getBoundingClientRect();
    let x = pointer.clientX,
      y = pointer.clientY,
      moved = false,
      frame = 0,
      active = true;
    const edge = (position: number, start: number, end: number) =>
      position < start || position > end
        ? 0
        : position < start + 40
          ? -12 * (1 - (position - start) / 40)
          : position > end - 40
            ? 12 * (1 - (end - position) / 40)
            : 0;
    const tick = () => {
      if (!active || options.locked()) {
        cancel();
        return;
      }
      if (moved && viewport) {
        const area = viewport.getBoundingClientRect();
        const dx = edge(x, area.left, area.right),
          dy = edge(y, area.top, area.bottom);
        if (dx || dy) {
          const left = viewport.scrollLeft,
            top = viewport.scrollTop;
          viewport.scrollLeft += dx;
          viewport.scrollTop += dy;
          if (left !== viewport.scrollLeft || top !== viewport.scrollTop) {
            viewport.dispatchEvent(new Event("scroll"));
            void nextTick(() => {
              if (active) options.move(x, y);
            });
          }
        }
      }
      frame = requestAnimationFrame(tick);
    };
    const move = (next: PointerEvent) => {
      if (next.pointerId !== pointer.pointerId) return;
      x = next.clientX;
      y = next.clientY;
      if (!moved && Math.hypot(x - pointer.clientX, y - pointer.clientY) < 5)
        return;
      if (!moved) {
        moved = true;
        options.start(event, resize, resourceId);
      }
      next.preventDefault();
      if (!resize)
        ghost.value = {
          title: event.title,
          left: rect.left + x - pointer.clientX,
          top: rect.top + y - pointer.clientY,
          width: rect.width,
          height: rect.height,
        };
      options.move(x, y);
    };
    const up = (next: PointerEvent) => {
      if (next.pointerId !== pointer.pointerId) return;
      if (moved && !options.locked()) options.drop(next.clientX, next.clientY);
      cancel();
    };
    const key = (next: KeyboardEvent) => {
      if (next.key === "Escape") cancel();
    };
    const pointerCancel = (next: PointerEvent) => {
      if (next.pointerId === pointer.pointerId) cancel();
    };
    cleanup = () => {
      if (!active) return;
      active = false;
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", move, true);
      document.removeEventListener("pointerup", up, true);
      document.removeEventListener("pointercancel", pointerCancel, true);
      document.removeEventListener("keydown", key);
      window.removeEventListener("blur", cancel);
      ghost.value = undefined;
      finished(moved);
      if (moved) options.end();
      cleanup = () => {};
    };
    document.addEventListener("pointermove", move, {
      capture: true,
      passive: false,
    });
    document.addEventListener("pointerup", up, true);
    document.addEventListener("pointercancel", pointerCancel, true);
    document.addEventListener("keydown", key);
    window.addEventListener("blur", cancel);
    frame = requestAnimationFrame(tick);
  }
  onBeforeUnmount(cancel);
  return { begin, cancel, ghost };
}
