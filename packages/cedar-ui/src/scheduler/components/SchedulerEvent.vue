<template>
  <div
    ref="root"
    :class="
      classes(
        n('event'),
        [compact, n('event--compact')],
        [selected && selectionMode, n('event--selected')],
        [dragging, n('event--dragging')],
        [!canModify, n('event--static')],
        [
          !!event.backgroundPattern && event.backgroundPattern !== 'solid',
          n(`event--pattern-${event.backgroundPattern}`),
        ],
      )
    "
    :style="eventTheme"
    :draggable="false"
    @pointerdown="pointerDown($event, false)"
    @click.capture="captureClick"
    @dragstart="startDrag"
    v-on="{ dragend: onNativeEnd }"
  >
    <CButton
      :class="n('event-button')"
      variant="text"
      size="sm"
      :elevation="false"
      :ripple="false"
      :disabled="disabled"
      :aria-label="label"
      :aria-pressed="selectionMode ? !!selected : undefined"
      @click="emit('select', event)"
    >
      <span v-if="event.milestone" aria-hidden="true">◆ </span>
      <slot :event="event">
        <span v-if="time" :class="n('event-time')">{{ time }}</span>
        <span :class="n('event-title')">{{ event.title }}</span>
      </slot>
    </CButton>
    <span
      v-if="
        resizable &&
        event.resizable !== false &&
        !event.milestone &&
        !disabled &&
        !event.readonly
      "
      :class="n('resize')"
      :draggable="false"
      @pointerdown.stop="pointerDown($event, true)"
      aria-hidden="true"
      :title="resizeLabel"
      @click.stop
      @dragstart.stop="resizeDrag"
    />
    <span
      v-if="
        resizable &&
        event.resizable !== false &&
        !event.milestone &&
        !disabled &&
        !event.readonly
      "
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
        }"
        aria-hidden="true"
        inert
      >
        <div :class="n('drag-summary')">
          <strong :class="n('event-title')">{{ event.title }}</strong>
          <span v-if="time" :class="n('event-time')">{{ time }}</span>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, onActivated, onDeactivated, ref, shallowRef, watch } from "vue";
import CButton from "../../button";
import { createNamespace } from "../../_utils/global-config";
import type { SchedulerEvent } from "../core";
import type { SchedulerResize } from "../drag";

defineOptions({ name: createNamespace("scheduler-event").name });
const { n, classes } = createNamespace("scheduler");
const props = withDefaults(
  defineProps<{
    event: SchedulerEvent;
    selected?: boolean;
    selectionMode?: boolean;
    time?: string;
    label?: string;
    disabled?: boolean;
    movable?: boolean;
    managedPointer?: boolean;
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
  "pointer-start": [
    pointer: PointerEvent,
    resize: SchedulerResize,
    finished: (moved: boolean) => void,
  ];
  "pointer-drop": [x: number, y: number];
  "pointer-move": [x: number, y: number];
}>();
defineSlots<{ default(props: { event: SchedulerEvent }): unknown }>();
const canModify = computed(
  () => props.movable !== false && !props.disabled && !props.event.readonly,
);
const canResize = computed(() => !!props.resizable && props.event.resizable !== false && !props.event.milestone);
let nativeVersion: number | undefined;
const onNativeEnd = shallowRef<() => void>(() => {});
function finishNative() {
  const owned = nativeVersion !== undefined;
  nativeVersion = undefined;
  onNativeEnd.value = () => {};
  if (owned) emit("drag-end");
}
const eventTheme = computed(() => ({
  ...(props.event.color
    ? { "--c-scheduler-event-color": props.event.color }
    : {}),
  ...(props.event.accentColor
    ? { "--c-scheduler-event-accent-color": props.event.accentColor }
    : {}),
  ...(props.event.backgroundColor
    ? {
        "--c-scheduler-event-background": props.event.backgroundColor,
        ...(props.event.backgroundPattern &&
        props.event.backgroundPattern !== "solid"
          ? {}
          : {
              "--c-scheduler-event-background-image": `linear-gradient(${props.event.backgroundColor}, ${props.event.backgroundColor})`,
            }),
      }
    : {}),
}));
function begin(event: DragEvent, resize: SchedulerResize) {
  if (!available()) return;
  if (
    props.movable === false ||
    props.disabled ||
    props.event.readonly ||
    (resize && !canResize.value)
  ) {
    event.preventDefault();
    return;
  }
  const version = ++managedVersion;
  const item = props.event;
  cancelGesture();
  finishNative();
  const current = () => available() && version === managedVersion && props.event === item && canModify.value && (!resize || canResize.value);
  if (!current()) return;
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    if (!current()) return;
    event.dataTransfer.setData("text/plain", item.id);
    if (!current()) return;
  }
  nativeVersion = version;
  onNativeEnd.value = () => { if (current() && nativeVersion === version) finishNative(); };
  emit("drag-start", item, resize);
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
}>();
const ghostTheme = ref<Record<string, string>>({});
let cancelGesture = () => {};
let detach = () => {};
let suppressClick = false;
let resetClick: ReturnType<typeof setTimeout> | undefined;
let mounted = false, active = true, disposed = false, managedVersion = 0;
const available = () => mounted && active && !disposed;
function captureClick(event: MouseEvent) {
  if (suppressClick) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}
function pointerDown(event: PointerEvent, resize: SchedulerResize) {
  if (
    !available() ||
    (resize && !canResize.value) ||
    event.button !== 0 ||
    props.movable === false ||
    props.disabled ||
    props.event.readonly
  )
    return;
  const previous = managedVersion;
  finishNative();
  if (!available() || previous !== managedVersion) return;
  if (props.managedPointer) {
    const version = ++managedVersion;
    cancelGesture();
    clearTimeout(resetClick);
    suppressClick = false;
    const item = props.event;
    const current = () => available() && version === managedVersion && props.managedPointer && props.event === item && canModify.value && (!resize || canResize.value);
    let started = false, completed = false;
    const start = () => {
      if (!current() || started) return;
      started = true;
      emit("pointer-start", event, resize, (moved) => {
        if (!current() || completed) return;
        completed = true;
        suppressClick = moved;
        clearTimeout(resetClick);
        resetClick = setTimeout(() => {
          if (current()) suppressClick = false;
        }, 0);
      });
    };
    if (event.pointerType !== "touch") {
      start();
      return;
    }
    const pointerId = event.pointerId;
    const x = event.clientX;
    const y = event.clientY;
    let waiting = true;
    const timer = setTimeout(() => {
      if (!current() || !waiting) return;
      cleanup();
      start();
    }, 350);
    const move = (next: PointerEvent) => {
      if (
        next.pointerId === pointerId &&
        Math.hypot(next.clientX - x, next.clientY - y) >= 8
      )
        cleanup();
    };
    const end = (next: PointerEvent) => {
      if (next.pointerId === pointerId) cleanup();
    };
    const cleanup = () => {
      if (!waiting) return;
      waiting = false;
      clearTimeout(timer);
      document.removeEventListener("pointermove", move, true);
      document.removeEventListener("pointerup", end, true);
      document.removeEventListener("pointercancel", end, true);
      document.removeEventListener("keydown", key);
      window.removeEventListener("blur", cleanup);
      if (cancelGesture === cleanup) cancelGesture = () => {};
    };
    const key = (next: KeyboardEvent) => { if (next.key === "Escape") cleanup(); };
    cancelGesture = cleanup;
    document.addEventListener("pointermove", move, true);
    document.addEventListener("pointerup", end, true);
    document.addEventListener("pointercancel", end, true);
    document.addEventListener("keydown", key);
    window.addEventListener("blur", cleanup);
    return;
  }
  const version = ++managedVersion;
  cancelGesture();
  if (!available() || version !== managedVersion) return;
  clearTimeout(resetClick);
  suppressClick = false;
  const origin = root.value;
  const item = props.event;
  if (!origin) return;
  let live = true;
  const owns = () => available() && version === managedVersion && root.value === origin && props.event === item && !props.managedPointer && canModify.value && (!resize || canResize.value);
  const current = () => live && owns();
  const x = event.clientX;
  const y = event.clientY;
  const touch = event.pointerType === "touch";
  let armed = !touch;
  let holdTimer: ReturnType<typeof setTimeout> | undefined;
  const pointerId = event.pointerId;
  const rect = origin.getBoundingClientRect();
  if (!current()) return;
  const styles = window.getComputedStyle(origin);
  if (!current()) return;
  const theme: Record<string, string> = {};
  for (let index = 0; index < styles.length; index++) {
    const key = styles.item(index);
    if (key.startsWith("--c-scheduler-"))
      theme[key] = styles.getPropertyValue(key);
    if (!current()) return;
  }
  // Teleport must retain per-instance theme overrides instead of using body defaults.
  theme["--c-scheduler-event-background"] = styles.backgroundColor;
  theme["--c-scheduler-event-background-image"] = styles.backgroundImage;
  theme["--c-scheduler-event-accent-color"] = styles.borderLeftColor;
  theme["--c-scheduler-color"] = styles.color;
  if (!current()) return;
  ghostTheme.value = theme;
  if (!current()) return;
  const move = (next: PointerEvent) => {
    if (!current() || next.pointerId !== pointerId) return;
    if (!armed && Math.hypot(next.clientX - x, next.clientY - y) >= 8) {
      cancel();
      return;
    }
    if (!armed) return;
    if (!dragging.value && Math.hypot(next.clientX - x, next.clientY - y) < 5)
      return;
    if (!dragging.value) {
      dragging.value = true;
      if (!current()) return;
      emit("drag-start", item, resize);
      if (!current()) return;
    }
    suppressClick = true;
    next.preventDefault();
    if (!resize) {
      const width = Math.min(240, Math.max(160, rect.width));
      ghost.value = {
        left: Math.max(
          8,
          Math.min(next.clientX + 16, window.innerWidth - width - 8),
        ),
        top: Math.max(8, Math.min(next.clientY + 16, window.innerHeight - 72)),
        width,
      };
    }
    if (!current()) return;
    emit("pointer-move", next.clientX, next.clientY);
  };
  const cancel = () => {
    if (!live) return;
    live = false;
    clearTimeout(holdTimer);
    detachLocal();
    if (detach === detachLocal) detach = () => {};
    if (cancelGesture === cancel) cancelGesture = () => {};
    const ending = managedVersion;
    dragging.value = false;
    if (ending !== managedVersion) return;
    ghost.value = undefined;
    if (ending !== managedVersion) return;
    suppressClick = false;
    emit("drag-end");
  };
  const up = (next: PointerEvent) => {
    if (!current() || next.pointerId !== pointerId) return;
    const moved = dragging.value;
    if (moved) emit("pointer-drop", next.clientX, next.clientY);
    if (!current()) return;
    cancel();
    if (!owns()) return;
    suppressClick = moved;
    resetClick = setTimeout(() => {
      if (owns()) suppressClick = false;
    }, 0);
  };
  const key = (next: KeyboardEvent) => {
    if (current() && next.key === "Escape") cancel();
  };
  // A fresh press invalidates a gesture whose release was lost outside the page.
  const restart = () => { if (current()) cancel(); };
  const pointerCancel = (next: PointerEvent) => { if (current() && next.pointerId === pointerId) cancel(); };
  const blur = () => { if (current()) cancel(); };
  const detachLocal = () => {
    document.removeEventListener("pointerdown", restart, true);
    document.removeEventListener("pointermove", move, true);
    document.removeEventListener("pointerup", up, true);
    document.removeEventListener("pointercancel", pointerCancel, true);
    document.removeEventListener("keydown", key);
    window.removeEventListener("blur", blur);
  };
  if (touch)
    holdTimer = setTimeout(() => {
      if (current()) armed = true;
    }, 350);
  cancelGesture = cancel;
  document.addEventListener("pointerdown", restart, true);
  document.addEventListener("pointermove", move, {
    passive: false,
    capture: true,
  });
  document.addEventListener("pointerup", up, true);
  document.addEventListener("pointercancel", pointerCancel, true);
  document.addEventListener("keydown", key);
  window.addEventListener("blur", blur);
  detach = detachLocal;
}
watch(
  () => [props.movable, props.disabled, props.event.readonly, props.event.resizable, props.event, props.managedPointer, props.resizable, props.event.milestone],
  () => {
    managedVersion++;
    clearTimeout(resetClick);
    suppressClick = false;
    cancelGesture();
    finishNative();
  },
  { flush: "sync" },
);
function suspend() {
  active = false;
  managedVersion++;
  cancelGesture();
  detach();
  clearTimeout(resetClick);
  suppressClick = false;
  finishNative();
}
onMounted(() => { mounted = true; });
onActivated(() => { active = true; });
onDeactivated(suspend);
onBeforeUnmount(() => { disposed = true; suspend(); mounted = false; });
</script>
