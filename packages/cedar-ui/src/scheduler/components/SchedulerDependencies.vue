<template>
  <svg
    v-if="paths.length"
    :class="n('dependency-layer')"
    :width="width"
    :height="height"
    role="img"
    :aria-label="paths.map((path) => path.label).join('; ')"
  >
    <defs>
      <marker
        :id="marker"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
      </marker>
    </defs>
    <path
      v-for="path in paths"
      :key="path.id"
      :d="path.d"
      :marker-end="`url(#${marker})`"
      fill="none"
    >
      <title>{{ path.label }}</title>
    </path>
  </svg>
</template>
<script setup lang="ts">
import { ref, watch, nextTick, onBeforeUnmount, onMounted, onActivated, onDeactivated, useId } from "vue";
import { createNamespace } from "../../_utils/global-config";
import type { SchedulerDependency, SchedulerEvent } from "../core";
defineOptions({ name: createNamespace("scheduler-dependencies").name });
const { n } = createNamespace("scheduler");
const props = defineProps<{
  host?: HTMLElement;
  dependencies: SchedulerDependency[];
  events: SchedulerEvent[];
}>();
const marker = `scheduler-arrow-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
const paths = ref<{ id: string; d: string; label: string }[]>([]),
  width = ref(0),
  height = ref(0);
let frame: { view: Window; id: number } | undefined;
let detach = () => {};
let scheduleCurrent = () => {};
let mounted = false, active = false, disposed = false;
let generation = 0, binding = 0, rendering = 0;
function cancelFrame() {
  generation++;
  if (frame) frame.view.cancelAnimationFrame(frame.id);
  frame = undefined;
}
function measure(host: HTMLElement, current: () => boolean) {
    if (!current()) return;
    const bounds = host.getBoundingClientRect();
    if (!current()) return;
    const nextWidth = host.scrollWidth;
    if (!current()) return;
    const nextHeight = host.scrollHeight;
    if (!current()) return;
    const targets = new Map<string, DOMRect>();
    for (const element of host.querySelectorAll<HTMLElement>(
      "[data-scheduler-event-id]",
    )) {
      if (!current()) return;
      const rect = element.getBoundingClientRect();
      if (!current()) return;
      const clip =
        element
          .closest(".c-scheduler__virtual-rows")
          ?.getBoundingClientRect() ?? bounds;
      if (!current()) return;
      if (
        rect.bottom > clip.top &&
        rect.top < clip.bottom &&
        rect.right > clip.left &&
        rect.left < clip.right
      )
        targets.set(element.dataset.schedulerEventId!, rect);
    }
    const events = new Map(props.events.map((event) => [event.id, event]));
    const nextPaths = props.dependencies.flatMap((edge) => {
      if (!current()) return [];
      const from = targets.get(edge.fromId),
        to = targets.get(edge.toId);
      if (!from || !to) return [];
      const [a, b] = (edge.type ?? "finish-to-start").split("-to-");
      const x1 =
          (a === "start" ? from.left : from.right) -
          bounds.left +
          host.scrollLeft,
        x2 =
          (b === "start" ? to.left : to.right) - bounds.left + host.scrollLeft;
      const y1 = from.top + from.height / 2 - bounds.top + host.scrollTop,
        y2 = to.top + to.height / 2 - bounds.top + host.scrollTop;
      const middle = (x1 + x2) / 2;
      return [
        {
          id: edge.id,
          d: `M ${x1} ${y1} H ${middle} V ${y2} H ${x2}`,
          label: `${events.get(edge.fromId)?.title ?? edge.fromId} → ${events.get(edge.toId)?.title ?? edge.toId}`,
        },
      ];
    });
    if (!current()) return;
    width.value = nextWidth;
    if (!current()) return;
    height.value = nextHeight;
    if (current()) paths.value = nextPaths;
}
function queueRefresh() {
  cancelFrame();
  const version = ++rendering;
  const identity = binding;
  nextTick(() => {
    if (version === rendering && identity === binding && mounted && active && !disposed) scheduleCurrent();
  });
}
function bind() {
  binding++;
  rendering++;
  detach();
  detach = () => {};
  scheduleCurrent = () => {};
  cancelFrame();
  paths.value = [];
  width.value = height.value = 0;
  const host = props.host;
  if (!mounted || !active || disposed || !host) return;
  const identity = binding;
  const current = () => mounted && active && !disposed && identity === binding && props.host === host;
  const schedule = () => {
    if (!current()) return;
    cancelFrame();
    const version = generation;
    const view = host.ownerDocument.defaultView;
    if (!view) return;
    const id = view.requestAnimationFrame(() => {
      if (!current() || version !== generation) return;
      frame = undefined;
      const execution = ++generation;
      measure(host, () => current() && execution === generation);
    });
    frame = { view, id };
  };
  scheduleCurrent = schedule;
  const view = host.ownerDocument.defaultView;
  const observer = view?.ResizeObserver ? new view.ResizeObserver(schedule) : undefined;
  host.addEventListener("scroll", schedule, true);
  detach = () => {
    host.removeEventListener("scroll", schedule, true);
    observer?.disconnect();
  };
  observer?.observe(host);
  if (current()) queueRefresh();
}
watch(() => props.host, bind, { immediate: true, flush: "sync" });
watch(
  () => [props.events, props.dependencies],
  queueRefresh,
  { deep: true, flush: "sync" },
);
function resume() {
  if (!mounted || active || disposed) return;
  active = true;
  bind();
}
function suspend() {
  active = false;
  binding++;
  rendering++;
  cancelFrame();
  detach();
  detach = () => {};
  scheduleCurrent = () => {};
}
onMounted(() => { mounted = true; resume(); });
onActivated(resume);
onDeactivated(suspend);
onBeforeUnmount(() => {
  disposed = true;
  suspend();
  mounted = false;
});
</script>
