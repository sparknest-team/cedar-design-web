import { nextTick, onBeforeUnmount, onMounted, onActivated, onDeactivated, ref } from "vue";
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
  let mounted = false, suspended = false, disposed = false, generation = 0;
  const available = () => mounted && !suspended && !disposed;
  let cleanup = () => {};
  const cancel = () => { generation++; cleanup(); };
  function begin(
    pointer: PointerEvent,
    event: SchedulerEvent,
    resize: SchedulerResize,
    resourceId: string,
    finished: (moved: boolean) => void,
  ) {
    if (!available()) return;
    const request = ++generation;
    cleanup();
    if (request !== generation || !available() || options.locked() || pointer.button !== 0 || event.readonly) return;
    if (request !== generation || !available()) return;
    const origin = pointer.currentTarget as HTMLElement;
    const viewport =
      origin.closest<HTMLElement>(".c-scheduler__virtual-rows") ??
      origin.closest<HTMLElement>(".c-scheduler__main");
    const rect = origin.getBoundingClientRect();
    if (request !== generation || !available()) return;
    let x = pointer.clientX,
      y = pointer.clientY,
      moved = false,
      frame = 0,
      active = true;
    let frameVersion = 0;
    const current = () => active && request === generation && available();
    const schedule = () => {
      if (!current()) return;
      const version = ++frameVersion;
      frame = requestAnimationFrame(() => {
        if (!current() || version !== frameVersion) return;
        frameVersion++;
        frame = 0;
        tick();
      });
    };
    const edge = (position: number, start: number, end: number) =>
      position < start || position > end
        ? 0
        : position < start + 40
          ? -12 * (1 - (position - start) / 40)
          : position > end - 40
            ? 12 * (1 - (end - position) / 40)
            : 0;
    const tick = () => {
      if (!current()) return;
      const locked = options.locked();
      if (!current()) return;
      if (locked) {
        cancel();
        return;
      }
      if (moved && viewport) {
        const area = viewport.getBoundingClientRect();
        if (!current()) return;
        const dx = edge(x, area.left, area.right),
          dy = edge(y, area.top, area.bottom);
        if (dx || dy) {
          const left = viewport.scrollLeft,
            top = viewport.scrollTop;
          if (!current()) return;
          viewport.scrollLeft += dx;
          if (!current()) return;
          viewport.scrollTop += dy;
          if (!current()) return;
          if (left !== viewport.scrollLeft || top !== viewport.scrollTop) {
            viewport.dispatchEvent(new Event("scroll"));
            if (!current()) return;
            void nextTick(() => {
              if (current()) options.move(x, y);
            });
          }
        }
      }
      schedule();
    };
    const move = (next: PointerEvent) => {
      if (!current() || next.pointerId !== pointer.pointerId) return;
      const locked = options.locked();
      if (!current()) return;
      if (locked) { cancel(); return; }
      x = next.clientX;
      y = next.clientY;
      if (!moved && Math.hypot(x - pointer.clientX, y - pointer.clientY) < 5)
        return;
      if (!moved) {
        moved = true;
        options.start(event, resize, resourceId);
        if (!current()) return;
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
      if (!current()) return;
      options.move(x, y);
    };
    const up = (next: PointerEvent) => {
      if (!current() || next.pointerId !== pointer.pointerId) return;
      const locked = options.locked();
      if (!current()) return;
      if (moved && !locked) options.drop(next.clientX, next.clientY);
      if (current()) cancel();
    };
    const key = (next: KeyboardEvent) => {
      if (current() && next.key === "Escape") cancel();
    };
    const pointerCancel = (next: PointerEvent) => {
      if (current() && next.pointerId === pointer.pointerId) cancel();
    };
    const blur = () => { if (current()) cancel(); };
    cleanup = () => {
      if (!active) return;
      active = false;
      frameVersion++;
      cleanup = () => {};
      const ending = generation;
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", move, true);
      document.removeEventListener("pointerup", up, true);
      document.removeEventListener("pointercancel", pointerCancel, true);
      document.removeEventListener("keydown", key);
      window.removeEventListener("blur", blur);
      ghost.value = undefined;
      if (ending !== generation) return;
      finished(moved);
      if (moved && ending === generation) options.end();
    };
    document.addEventListener("pointermove", move, {
      capture: true,
      passive: false,
    });
    document.addEventListener("pointerup", up, true);
    document.addEventListener("pointercancel", pointerCancel, true);
    document.addEventListener("keydown", key);
    window.addEventListener("blur", blur);
    schedule();
  }
  onMounted(() => { mounted = true; });
  onActivated(() => { suspended = false; });
  onDeactivated(() => { suspended = true; cancel(); });
  onBeforeUnmount(() => { disposed = true; cancel(); mounted = false; });
  return { begin, cancel, ghost };
}
