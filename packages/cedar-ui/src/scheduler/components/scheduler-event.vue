<template>
  <div
    ref="root"
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
      :ripple="false"
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
    <span
      v-if="resizable && !disabled && !event.readonly"
      :class="[n('resize'), n('resize--start')]"
      :draggable="false"
      @pointerdown.stop="pointerDown($event, 'start')"
      aria-hidden="true"
      :title="resizeStartLabel"
      @click.stop
      @dragstart.stop="begin($event, 'start')"
    />
    <Teleport v-if="ghost" to="body">
      <div
        :class="[n('drag-ghost'), n('event')]"
        :style="{
          ...ghostTheme,
          left: `${ghost.left}px`,
          top: `${ghost.top}px`,
          width: `${ghost.width}px`,
          height: `${ghost.height}px`,
        }"
        aria-hidden="true"
        inert
      >
        <div :class="n('event-button')">
          <slot :event="event"
            ><span>{{ time }} {{ event.title }}</span></slot
          >
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from "vue";
import CButton from "../../button";
import { createNamespace } from "../../_utils/global-config";
import type { SchedulerEvent } from "../core";
import type { SchedulerResize } from "../drag";

defineOptions({ name: createNamespace("scheduler-event").name });
const { n, classes } = createNamespace("scheduler");
const props = withDefaults(
  defineProps<{
    event: SchedulerEvent;
    time?: string;
    label?: string;
    disabled?: boolean;
    movable?: boolean;
    compact?: boolean;
    resizable?: boolean;
    resizeLabel?: string;
    resizeStartLabel?: string;
  }>(),
  { movable: true },
);
const emit = defineEmits<{
  select: [event: SchedulerEvent];
  "drag-start": [event: SchedulerEvent, resize: SchedulerResize];
  "drag-end": [];
  "pointer-drop": [x: number, y: number];
  "pointer-move": [x: number, y: number];
}>();
defineSlots<{ default(props: { event: SchedulerEvent }): unknown }>();
function begin(event: DragEvent, resize: SchedulerResize) {
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
const root = ref<HTMLElement>();
const ghost = ref<{
  left: number;
  top: number;
  width: number;
  height: number;
}>();
const ghostTheme = ref<Record<string, string>>({});
let cancelGesture = () => {};
let detach = () => {};
let suppressClick = false;
let resetClick: ReturnType<typeof setTimeout> | undefined;
function captureClick(event: MouseEvent) {
  if (suppressClick) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}
function pointerDown(event: PointerEvent, resize: SchedulerResize) {
  if (
    event.button !== 0 ||
    props.movable === false ||
    props.disabled ||
    props.event.readonly
  )
    return;
  detach();
  clearTimeout(resetClick);
  suppressClick = false;
  const x = event.clientX;
  const y = event.clientY;
  const pointerId = event.pointerId;
  const rect = root.value!.getBoundingClientRect();
  const styles = window.getComputedStyle(root.value!);
  const theme: Record<string, string> = {};
  for (let index = 0; index < styles.length; index++) {
    const key = styles.item(index);
    if (key.startsWith("--c-scheduler-"))
      theme[key] = styles.getPropertyValue(key);
  }
  // Teleport must retain per-instance theme overrides instead of using body defaults.
  theme["--c-scheduler-event-background"] = styles.backgroundColor;
  theme["--c-scheduler-event-color"] = styles.borderLeftColor;
  theme["--c-scheduler-color"] = styles.color;
  ghostTheme.value = theme;
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
    if (!resize)
      ghost.value = {
        left: rect.left + next.clientX - x,
        top: rect.top + next.clientY - y,
        width: rect.width,
        height: rect.height,
      };
    emit("pointer-move", next.clientX, next.clientY);
  };
  const cancel = () => {
    detach();
    dragging.value = false;
    ghost.value = undefined;
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
  // A fresh press invalidates a gesture whose release was lost outside the page.
  const restart = () => cancel();
  cancelGesture = cancel;
  document.addEventListener("pointerdown", restart, true);
  document.addEventListener("pointermove", move, {
    passive: false,
    capture: true,
  });
  document.addEventListener("pointerup", up, true);
  document.addEventListener("pointercancel", cancel, true);
  document.addEventListener("keydown", key);
  window.addEventListener("blur", cancel);
  detach = () => {
    document.removeEventListener("pointerdown", restart, true);
    document.removeEventListener("pointermove", move, true);
    document.removeEventListener("pointerup", up, true);
    document.removeEventListener("pointercancel", cancel, true);
    document.removeEventListener("keydown", key);
    window.removeEventListener("blur", cancel);
  };
}
watch(
  () => [props.movable, props.disabled, props.event.readonly],
  () => {
    if (props.movable === false || props.disabled || props.event.readonly)
      cancelGesture();
  },
);
onBeforeUnmount(() => {
  cancelGesture();
  detach();
  clearTimeout(resetClick);
});
</script>
