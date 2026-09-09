<template>
  <div
    :class="
      classes(
        n('event'),
        [compact, n('event--compact')],
        [dragging, n('event--dragging')],
      )
    "
    :style="
      event.color ? { '--c-scheduler-event-color': event.color } : undefined
    "
    :draggable="false"
    @pointerdown="pointerDown($event, false)"
    @click.capture="captureClick"
    @dragstart="startDrag"
    @dragend="emit('drag-end')"
  >
    <CButton
      :class="n('event-button')"
      variant="text"
      size="sm"
      :elevation="false"
      :disabled="disabled"
      :aria-label="label"
      @click="emit('select', event)"
    >
      <slot :event="event">
        <span v-if="time" :class="n('event-time')">{{ time }}</span>
        <span :class="n('event-title')">{{ event.title }}</span>
      </slot>
    </CButton>
    <span
      v-if="resizable && !disabled && !event.readonly"
      :class="n('resize')"
      :draggable="false"
      @pointerdown.stop="pointerDown($event, true)"
      aria-hidden="true"
      :title="resizeLabel"
      @click.stop
      @dragstart.stop="resizeDrag"
    />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";
import CButton from "../../button";
import { createNamespace } from "../../_utils/global-config";
import type { SchedulerEvent } from "../core";

defineOptions({ name: createNamespace("scheduler-event").name });
const { n, classes } = createNamespace("scheduler");
const props = withDefaults(defineProps<{
  event: SchedulerEvent;
  time?: string;
  label?: string;
  disabled?: boolean;
  movable?: boolean;
  compact?: boolean;
  resizable?: boolean;
  resizeLabel?: string;
}>(), { movable: true });
const emit = defineEmits<{
  select: [event: SchedulerEvent];
  "drag-start": [event: SchedulerEvent, resize: boolean];
  "drag-end": [];
  "pointer-drop": [x: number, y: number];
}>();
defineSlots<{ default(props: { event: SchedulerEvent }): unknown }>();
function begin(event: DragEvent, resize: boolean) {
  if (props.movable === false || props.disabled || props.event.readonly) {
    event.preventDefault();
    return;
  }
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", props.event.id);
  }
  emit("drag-start", props.event, resize);
}
function startDrag(event: DragEvent) {
  begin(event, false);
}
function resizeDrag(event: DragEvent) {
  begin(event, true);
}
const dragging = ref(false);
let detach = () => {};
let suppressClick = false;
let resetClick: ReturnType<typeof setTimeout> | undefined;
function captureClick(event: MouseEvent) {
  if (suppressClick) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}
function pointerDown(event: PointerEvent, resize: boolean) {
  if (
    event.button !== 0 ||
    props.movable === false ||
    props.disabled ||
    props.event.readonly
  )
    return;
  detach();
  suppressClick = false;
  const x = event.clientX;
  const y = event.clientY;
  const pointerId = event.pointerId;
  const move = (next: PointerEvent) => {
    if (next.pointerId !== pointerId) return;
    if (!dragging.value && Math.hypot(next.clientX - x, next.clientY - y) < 5)
      return;
    if (!dragging.value) {
      dragging.value = true;
      emit("drag-start", props.event, resize);
    }
    suppressClick = true;
    next.preventDefault();
  };
  const cancel = () => {
    detach();
    dragging.value = false;
    suppressClick = false;
    emit("drag-end");
  };
  const up = (next: PointerEvent) => {
    if (next.pointerId !== pointerId) return;
    const moved = dragging.value;
    if (moved) emit("pointer-drop", next.clientX, next.clientY);
    cancel();
    suppressClick = moved;
    resetClick = setTimeout(() => {
      suppressClick = false;
    }, 0);
  };
  const key = (next: KeyboardEvent) => {
    if (next.key === "Escape") cancel();
  };
  document.addEventListener("pointermove", move, { passive: false });
  document.addEventListener("pointerup", up);
  document.addEventListener("pointercancel", cancel);
  document.addEventListener("keydown", key);
  detach = () => {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
    document.removeEventListener("pointercancel", cancel);
    document.removeEventListener("keydown", key);
  };
}
onBeforeUnmount(() => {
  detach();
  clearTimeout(resetClick);
});
</script>
