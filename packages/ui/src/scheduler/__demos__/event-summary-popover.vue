<template>
  <c-popover
    :open="open"
    :trigger="[]"
    :reference="reference"
    :placement="placement"
    :title="title"
    :show-arrow="false"
    :auto-fit-position="false"
    :popup-style="popupStyle"
    @update:open="emit('update:open', $event)"
    @click-outside="emit('click-outside', $event)"
  >
    <span ref="anchor"><slot /></span>
    <template #content
      ><div ref="content"><slot name="content" /></div
    ></template>
  </c-popover>
</template>
<script setup lang="ts">
import {
  computed,
  shallowRef,
  ref,
  watch,
  nextTick,
  onMounted,
  onBeforeUnmount,
} from "vue";
import type { PopoverPlacement } from "@cedar-design/ui-vue";
import { getEventSummaryPosition } from "./event-summary-position";
const props = defineProps<{
  open: boolean;
  title: string;
  target?: HTMLElement;
}>();
const emit = defineEmits<{
  "update:open": [boolean];
  "click-outside": [Event];
}>();
const anchor = shallowRef<HTMLElement>(),
  content = shallowRef<HTMLElement>(),
  reference = shallowRef<HTMLElement>();
const placement = ref<PopoverPlacement>("right-start"),
  left = ref(0),
  top = ref(0),
  ready = ref(false);
const maxWidth = ref(360),
  maxHeight = ref(600);
const popupStyle = computed<import("vue").CSSProperties>(() => ({
  position: "fixed" as const,
  left: `${left.value}px`,
  top: `${top.value}px`,
  width: "360px",
  maxWidth: `${maxWidth.value}px`,
  maxHeight: `${maxHeight.value}px`,
  overflow: "auto",
  overflowWrap: "anywhere" as const,
  boxSizing: "border-box" as const,
  overscrollBehavior: "contain",
  visibility: ready.value ? ("visible" as const) : ("hidden" as const),
}));
let cleanup = () => {},
  generation = 0;
function stop() {
  generation++;
  cleanup();
  cleanup = () => {};
  ready.value = false;
}
async function start() {
  stop();
  if (!props.open) return;
  const version = generation;
  await nextTick();
  if (version !== generation) return;
  const card =
    props.target ??
    anchor.value?.closest<HTMLElement>(".c-scheduler__event") ??
    anchor.value;
  const view = card?.ownerDocument.defaultView;
  const popup = content.value?.closest<HTMLElement>("[trigger-placement]");
  if (!card || !view || !popup) return;
  reference.value = card;
  let frame = 0,
    active = true;
  const measure = () => {
    if (!active) return;
    const viewport = view.visualViewport;
    const x = viewport?.offsetLeft ?? 0,
      y = viewport?.offsetTop ?? 0;
    const width = viewport?.width ?? view.innerWidth,
      height = viewport?.height ?? view.innerHeight;
    maxWidth.value = Math.max(0, width - 16);
    maxHeight.value = Math.max(0, height - 16);
    const result = getEventSummaryPosition(
      card.getBoundingClientRect(),
      {
        width: Math.min(360, maxWidth.value),
        height: Math.min(popup.offsetHeight, maxHeight.value),
      },
      { left: x, top: y, right: x + width, bottom: y + height },
    );
    left.value = result.x;
    top.value = result.y;
    placement.value = result.placement;
    ready.value = true;
  };
  const schedule = () => {
    view.cancelAnimationFrame(frame);
    frame = view.requestAnimationFrame(measure);
  };
  const observer =
    typeof ResizeObserver === "undefined"
      ? undefined
      : new ResizeObserver(schedule);
  observer?.observe(card);
  observer?.observe(popup);
  observer?.observe(content.value!);
  view.addEventListener("resize", schedule);
  view.addEventListener("scroll", schedule, true);
  view.visualViewport?.addEventListener("resize", schedule);
  view.visualViewport?.addEventListener("scroll", schedule);
  cleanup = () => {
    active = false;
    view.cancelAnimationFrame(frame);
    observer?.disconnect();
    view.removeEventListener("resize", schedule);
    view.removeEventListener("scroll", schedule, true);
    view.visualViewport?.removeEventListener("resize", schedule);
    view.visualViewport?.removeEventListener("scroll", schedule);
  };
  measure();
  await nextTick();
  if (active) schedule();
}
watch(
  () => [props.open, props.target],
  () => (props.open ? void start() : stop()),
);
watch(content, () => {
  if (props.open && content.value) void start();
});
onMounted(() => {
  if (props.open) void start();
});
onBeforeUnmount(stop);
</script>
