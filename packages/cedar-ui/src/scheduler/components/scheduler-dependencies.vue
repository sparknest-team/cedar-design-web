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
import { ref, watch, nextTick, onBeforeUnmount, useId } from "vue";
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
let frame = 0,
  detach = () => {};
let alive=true;
function refresh() {
  if(!alive)return;
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    const host = props.host;
    if (!host) return;
    const bounds = host.getBoundingClientRect();
    width.value = host.scrollWidth;
    height.value = host.scrollHeight;
    const targets = new Map<string, DOMRect>();
    for (const element of host.querySelectorAll<HTMLElement>(
      "[data-scheduler-event-id]",
    )) {
      const rect = element.getBoundingClientRect();
      const clip =
        element
          .closest(".c-scheduler__virtual-rows")
          ?.getBoundingClientRect() ?? bounds;
      if (
        rect.bottom > clip.top &&
        rect.top < clip.bottom &&
        rect.right > clip.left &&
        rect.left < clip.right
      )
        targets.set(element.dataset.schedulerEventId!, rect);
    }
    const events = new Map(props.events.map((event) => [event.id, event]));
    paths.value = props.dependencies.flatMap((edge) => {
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
  });
}
watch(
  () => props.host,
  async (host) => {
    detach();
    if (!host) return;
    host.addEventListener("scroll", refresh, true);
    const observer =
      typeof ResizeObserver === "undefined"
        ? undefined
        : new ResizeObserver(refresh);
    observer?.observe(host);
    detach = () => {
      host.removeEventListener("scroll", refresh, true);
      observer?.disconnect();
    };
    await nextTick();
    refresh();
  },
  { immediate: true },
);
watch(
  () => [props.events, props.dependencies],
  async () => {
    await nextTick();
    refresh();
  },
  { deep: true },
);
onBeforeUnmount(() => {
  alive=false;
  detach();
  cancelAnimationFrame(frame);
});
</script>
