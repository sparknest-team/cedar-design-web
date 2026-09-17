<template>
  <div
    ref="root"
    @click.capture="suppressRangeClick"
    :class="n('time-grid')"
    :style="{ '--c-scheduler-columns': columns.length }"
  >
    <div :class="n('time-header')">
      <div :class="n('time-heading')">
        <span :class="n('time-gutter')" />
        <div
          v-for="column in columns"
          :key="column.key"
          :class="[
            n('column-heading'),
            isToday(column.date) && n('column-heading--today'),
          ]"
          :aria-current="isToday(column.date) ? 'date' : undefined"
          :data-scheduler-heading-date="column.date.toISOString()"
          :style="{ color: column.resource?.color }"
        >
          <slot
            name="resource-header"
            :resource="column.resource"
            :date="column.date"
            >{{ column.label }}</slot
          >
        </div>
      </div>
      <div :class="n('time-heading')">
        <span :class="n('time-gutter')">{{ messages.allDay }}</span>
        <div
          v-for="column in columns"
          :key="column.key"
          :class="n('all-day')"
          :data-scheduler-date="column.date.toISOString()"
          :data-scheduler-resource="column.resource?.id"
          data-scheduler-all-day="true"
          :tabindex="locked || column.resource?.disabled ? -1 : 0"
          role="button"
          :aria-disabled="locked || !!column.resource?.disabled"
          :aria-label="`${messages.add}: ${column.label} ${messages.allDay}`"
          @dragover.prevent
          @drop.prevent="emit('drop', column.date, column.resource?.id, true)"
          @click="createFromEmptyAllDay($event, column)"
          @keydown.enter.self.prevent="
            !locked &&
            !column.resource?.disabled &&
            emit('create', column.date, column.resource?.id, true)
          "
          @keydown.space.self.prevent="
            !locked &&
            !column.resource?.disabled &&
            emit('create', column.date, column.resource?.id, true)
          "
        >
          <SchedulerEventCard
            v-for="event in allDayEvents(column)"
            :key="event.id"
            :event="event"
            :selected="selectedKeys?.includes(event.id)"
            :selection-mode="selectionMode"
            :movable="!locked && !selectionMode"
            :disabled="disabled"
            :label="event.title"
            compact
            @select="emit('select', event)"
            @drag-start="
              (item, resize) =>
                emit('drag-start', item, resize, column.resource?.id)
            "
            @drag-end="emit('drag-end')"
            @pointer-drop="(x, y) => emit('pointer-drop', x, y)"
            @pointer-move="(x, y) => emit('pointer-move', x, y)"
          >
            <template #default="slotProps"
              ><slot name="event" v-bind="slotProps"
            /></template>
          </SchedulerEventCard>
          <div
            v-if="previewEvent?.allDay && previewBelongs(column)"
            :class="[n('event'), n('drag-preview')]"
            aria-hidden="true"
            inert
          >
            <slot name="event" :event="previewEvent">{{
              previewEvent.title
            }}</slot>
            <span :class="n('preview-time')">{{ messages.allDay }}</span>
          </div>
        </div>
      </div>
    </div>
    <div :class="n('time-body')">
      <div :class="n('time-labels')">
        <span
          v-if="nowPosition !== undefined"
          :class="n('now-label')"
          :style="{ top: `${nowPosition}%` }"
          >{{
            now?.toLocaleTimeString(locale, {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
          }}</span
        >
        <div v-for="minute in minutes" :key="minute" :class="n('time-label')">
          {{ formatMinute(minute) }}
        </div>
      </div>
      <div
        v-for="column in columns"
        :key="column.key"
        :class="n('time-column')"
      >
        <div :class="n('column-background')">
          <slot
            name="column-background"
            :date="column.date"
            :resource="column.resource"
          />
        </div>
        <CButton
          v-for="minute in minutes"
          :key="minute"
          variant="text"
          :elevation="false"
          :ripple="false"
          :class="[
            n('time-cell'),
            {
              [n('cell--unavailable')]: isUnavailable?.(
                atMinute(column.date, minute),
                atMinute(column.date, Math.min(minute + step, endHour * 60)),
                column.resource?.id,
              ),
            },
          ]"
          :title="
            isUnavailable?.(
              atMinute(column.date, minute),
              atMinute(column.date, Math.min(minute + step, endHour * 60)),
              column.resource?.id,
            )
              ? messages.unavailable
              : undefined
          "
          :data-scheduler-date="atMinute(column.date, minute).toISOString()"
          :data-scheduler-resource="column.resource?.id"
          :data-scheduler-duration="step"
          :data-scheduler-column="column.key"
          @pointerdown="beginRange($event, column)"
          data-scheduler-all-day="false"
          :disabled="locked || column.resource?.disabled"
          :aria-label="`${messages.add}: ${column.label} ${formatMinute(minute)}`"
          @click="
            emit(
              'create',
              atMinute(column.date, minute),
              column.resource?.id,
              false,
            )
          "
          @dragover.prevent
          @drop.prevent="
            emit(
              'drop',
              atMinute(column.date, minute),
              column.resource?.id,
              false,
            )
          "
        />
        <div
          v-if="selection?.key === column.key"
          :class="[n('drag-preview'), n('range-selection')]"
          :style="selectionStyle"
          aria-hidden="true"
          inert
        >
          {{
            formatMinute(
              selection!.range.start.getHours() * 60 +
                selection!.range.start.getMinutes(),
            )
          }}
          –
          {{
            formatMinute(
              selection!.range.end.getHours() * 60 +
                selection!.range.end.getMinutes(),
            )
          }}
        </div>
        <div
          v-if="
            now &&
            getSchedulerNowPosition(now, column.date, startHour, endHour) !==
              undefined
          "
          :class="n('now-indicator')"
          :style="{
            top: `${getSchedulerNowPosition(now!, column.date, startHour, endHour)}%`,
          }"
          role="img"
          :aria-label="`${messages.currentTime}: ${now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false })}`"
        />
        <div :class="n('event-layer')">
          <div
            v-for="item in visiblePositioned(column)"
            :key="item.event.id"
            :class="[
              n('positioned-event'),
              stacked(item) && n('positioned-event--stack'),
              focusedUnit === unitKey(column.key, item) &&
                n('positioned-event--group-focused'),
            ]"
            @click.capture="stackClick($event, item)"
            @focusin="focusedUnit = unitKey(column.key, item)"
            @focusout="focusedUnit = undefined"
            :style="position(item)"
          >
            <SchedulerEventCard
              :event="item.event"
              :selected="selectedKeys?.includes(item.event.id)"
              :selection-mode="selectionMode"
              :movable="!locked && !selectionMode"
              :time="formatTime(item.event)"
              :label="`${item.event.title} ${formatTime(item.event)}`"
              :disabled="disabled"
              :resizable="!locked && !selectionMode"
              :resize-label="messages.resize"
              :resize-start-label="messages.resizeStart"
              @select="emit('select', item.event)"
              @drag-start="
                (event, resize) =>
                  emit('drag-start', event, resize, column.resource?.id)
              "
              @drag-end="emit('drag-end')"
              @pointer-drop="(x, y) => emit('pointer-drop', x, y)"
              @pointer-move="(x, y) => emit('pointer-move', x, y)"
            >
              <template #default="slotProps"
                ><slot name="event" v-bind="slotProps"
                  ><span
                    >{{ formatTime(item.event) }} {{ item.event.title }}</span
                  ></slot
                ></template
              >
            </SchedulerEventCard>
          </div>
          <CPopover
            v-for="group in overflowGroups(column)"
            :key="group.key"
            trigger="click"
            :open="openOverlap === group.key"
            :title="moreLabel(group.hidden.length)"
            :content-class="n('overlap-more-content')"
            @update:open="setOpenOverlap(group.key, $event)"
          >
            <div
              :class="n('overlap-more-position')"
              :style="overflowPosition(group)"
            >
              <CButton
                variant="text"
                size="xs"
                block
                :disabled="disabled"
                :class="n('overlap-more')"
                >{{ moreLabel(group.hidden.length) }}</CButton
              >
            </div>
            <template #content>
              <CButton
                v-for="item in group.items"
                :key="item.event.id"
                variant="text"
                block
                :disabled="disabled"
                :class="n('month-more-event')"
                @click="selectFromOverlap(item.event)"
                >{{ formatTime(item.event) }} {{ item.event.title }}</CButton
              >
            </template>
          </CPopover>
          <div
            v-for="item in previewItems(column)"
            :key="`preview-${item.event.id}`"
            :class="[n('positioned-event'), n('drag-preview')]"
            :style="{
              ...position(item),
              ...(stacked(item) ? { zIndex: item.columns + 1 } : {}),
            }"
            aria-hidden="true"
            inert
          >
            <div
              :class="n('event')"
              :style="{ '--c-scheduler-event-color': item.event.color }"
            >
              <div :class="n('event-button')">
                <slot name="event" :event="item.event">{{
                  item.event.title
                }}</slot>
                <div :class="n('preview-time')">
                  {{ formatTime(item.event) }} –
                  {{ formatTime({ ...item.event, start: item.event.end }) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onBeforeUnmount, watch } from "vue";
import CButton from "../../button";
import CPopover from "../../popover";
import { createNamespace } from "../../_utils/global-config";
import SchedulerEventCard from "./SchedulerEvent.vue";
import {
  layoutSchedulerEvents,
  getSchedulerNowPosition,
  isSchedulerEventInRange,
  addSchedulerDays,
  schedulerDate,
  schedulerDateKey,
} from "../core";
import type {
  SchedulerEvent,
  SchedulerResource,
  SchedulerLayoutItem,
  SchedulerEventLayout,
} from "../core";
import type { SchedulerMessages } from "../locale";
import {
  getSchedulerCellDate,
  getSchedulerSelectionRange,
} from "../core/interaction";
import type { SchedulerResize } from "../drag";

defineOptions({ name: createNamespace("scheduler-time-grid").name });
const { n } = createNamespace("scheduler");
const props = defineProps<{
  columns: {
    key: string;
    date: Date;
    label: string;
    resource?: SchedulerResource;
  }[];
  isUnavailable?: (start: Date, end: Date, resourceId?: string) => boolean;
  events: SchedulerEvent[];
  eventLayout?: SchedulerEventLayout;
  overlapEventLimit?: number;
  now?: Date;
  today?: Date;
  selectedKeys?: string[];
  selectionMode?: boolean;
  previewEvent?: SchedulerEvent;
  startHour: number;
  endHour: number;
  step: number;
  snapDuration?: number;
  dragToCreate?: boolean;
  disabled: boolean;
  locked: boolean;
  messages: SchedulerMessages;
  locale: string;
}>();
const emit = defineEmits<{
  select: [event: SchedulerEvent];
  "create-range": [start: Date, end: Date, resourceId?: string];
  create: [date: Date, resourceId: string | undefined, allDay: boolean];
  drop: [date: Date, resourceId: string | undefined, allDay: boolean];
  "drag-start": [
    event: SchedulerEvent,
    resize: SchedulerResize,
    resourceId: string | undefined,
  ];
  "drag-end": [];
  "pointer-drop": [x: number, y: number];
  "pointer-move": [x: number, y: number];
}>();
defineSlots<{
  event(props: { event: SchedulerEvent }): unknown;
  "resource-header"(props: {
    resource?: SchedulerResource;
    date: Date;
  }): unknown;
}>();
const root = ref<HTMLElement>();
function createFromEmptyAllDay(
  event: MouseEvent,
  column: (typeof props.columns)[number],
) {
  if (
    props.locked ||
    column.resource?.disabled ||
    !(event.target instanceof Element) ||
    event.target.closest(".c-scheduler__event, button, a, input")
  )
    return;
  emit("create", column.date, column.resource?.id, true);
}
const openOverlap = ref("");
const selection = ref<{ key: string; range: { start: Date; end: Date } }>();
const selectionStyle = computed(() => {
  if (!selection.value) return {};
  const { start, end } = selection.value.range;
  const minute = start.getHours() * 60 + start.getMinutes();
  const length = (props.endHour - props.startHour) * 60;
  return {
    top: `${((minute - props.startHour * 60) / length) * 100}%`,
    height: `${((+end - +start) / 60000 / length) * 100}%`,
  };
});
let cancelRange = () => {};
let ignoreClick = false;
let clickTimer: ReturnType<typeof setTimeout> | undefined;
function suppressRangeClick(event: MouseEvent) {
  if (ignoreClick) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}
function beginRange(
  pointer: PointerEvent,
  column: (typeof props.columns)[number],
) {
  if (
    !props.dragToCreate ||
    props.locked ||
    column.resource?.disabled ||
    pointer.button !== 0
  )
    return;
  cancelRange();
  const snap = props.snapDuration ?? props.step;
  const origin = pointer.currentTarget as HTMLElement;
  const resolve = (element: HTMLElement, y: number) => {
    const rect = element.getBoundingClientRect();
    return getSchedulerCellDate(
      element.dataset.schedulerDate!,
      props.step,
      rect.height > 0 ? (y - rect.top) / rect.height : 0,
      snap,
    );
  };
  const start = resolve(origin, pointer.clientY);
  let end = start,
    moved = false;
  const touch = pointer.pointerType === "touch";
  let armed = !touch;
  let holdTimer: ReturnType<typeof setTimeout> | undefined;
  const move = (event: PointerEvent) => {
    if (event.pointerId !== pointer.pointerId) return;
    if (
      !armed &&
      Math.hypot(
        event.clientX - pointer.clientX,
        event.clientY - pointer.clientY,
      ) >= 8
    ) {
      cancelRange();
      return;
    }
    if (!armed) return;
    if (
      !moved &&
      Math.hypot(
        event.clientX - pointer.clientX,
        event.clientY - pointer.clientY,
      ) < 5
    )
      return;
    const target = document
      .elementsFromPoint(event.clientX, event.clientY)
      .map((el) => el.closest<HTMLElement>("[data-scheduler-column]"))
      .find(
        (el) =>
          el &&
          root.value?.contains(el) &&
          el.dataset.schedulerColumn === column.key,
      );
    if (!target) return;
    moved = true;
    event.preventDefault();
    end = resolve(target, event.clientY);
    const range = getSchedulerSelectionRange(start, end, snap);
    const boundary = new Date(column.date);
    boundary.setHours(props.endHour, 0, 0, 0);
    if (+range.end > +boundary) range.end = boundary;
    selection.value = { key: column.key, range };
  };
  const up = (event: PointerEvent) => {
    if (event.pointerId !== pointer.pointerId) return;
    const range = selection.value?.range;
    cancelRange();
    if (moved && range && !props.locked) {
      ignoreClick = true;
      clickTimer = setTimeout(() => {
        ignoreClick = false;
      }, 0);
      emit("create-range", range.start, range.end, column.resource?.id);
    }
  };
  const key = (event: KeyboardEvent) => {
    if (event.key === "Escape") cancelRange();
  };
  const cancel = () => cancelRange();
  cancelRange = () => {
    clearTimeout(holdTimer);
    document.removeEventListener("pointermove", move, true);
    document.removeEventListener("pointerup", up, true);
    document.removeEventListener("pointercancel", cancel, true);
    document.removeEventListener("keydown", key);
    window.removeEventListener("blur", cancel);
    selection.value = undefined;
    cancelRange = () => {};
  };
  if (touch)
    holdTimer = setTimeout(() => {
      armed = true;
    }, 350);
  document.addEventListener("pointermove", move, {
    capture: true,
    passive: false,
  });
  document.addEventListener("pointerup", up, true);
  document.addEventListener("pointercancel", cancel, true);
  document.addEventListener("keydown", key);
  window.addEventListener("blur", cancel);
}
watch(
  () => [props.locked, props.columns, props.dragToCreate],
  () => cancelRange(),
  { deep: true },
);
onBeforeUnmount(() => {
  cancelRange();
  clearTimeout(clickTimer);
});
const minutes = computed(() =>
  Array.from(
    {
      length: Math.ceil(((props.endHour - props.startHour) * 60) / props.step),
    },
    (_, i) => props.startHour * 60 + i * props.step,
  ),
);
const formatMinute = (minute: number) =>
  `${String(Math.floor(minute / 60)).padStart(2, "0")}:${String(minute % 60).padStart(2, "0")}`;
function atMinute(day: Date, minute: number) {
  const date = new Date(day);
  date.setMinutes(minute);
  return date;
}
function eventsFor(column: (typeof props.columns)[number]) {
  return props.events.filter(
    (event) =>
      !column.resource || event.resourceIds?.includes(column.resource.id),
  );
}
function allDayEvents(column: (typeof props.columns)[number]) {
  return eventsFor(column).filter(
    (event) =>
      event.allDay &&
      isSchedulerEventInRange(event, {
        start: column.date,
        end: addSchedulerDays(column.date, 1),
      }),
  );
}
// Reuse one packing result per rendered column for cards and overflow affordances.
const columnLayouts = computed(
  () =>
    new Map(
      props.columns.map((column) => [
        column.key,
        layoutSchedulerEvents(
          eventsFor(column),
          column.date,
          props.startHour,
          props.endHour,
        ),
      ]),
    ),
);
function positioned(column: (typeof props.columns)[number]) {
  return columnLayouts.value.get(column.key) ?? [];
}

type OverlapGroup = {
  key: string;
  items: SchedulerLayoutItem[];
  hidden: SchedulerLayoutItem[];
  start: number;
  end: number;
  columns: number;
};
function grouped(column: (typeof props.columns)[number]) {
  const groups: SchedulerLayoutItem[][] = [];
  for (const item of [...positioned(column)].sort(
    (a, b) => a.start - b.start,
  )) {
    const current = groups.at(-1);
    if (!current || item.start >= Math.max(...current.map((i) => i.end)))
      groups.push([item]);
    else current.push(item);
  }
  return groups;
}
function overflowGroups(
  column: (typeof props.columns)[number],
): OverlapGroup[] {
  const limit = props.overlapEventLimit;
  if (!limit) return [];
  return grouped(column).flatMap((items, index) => {
    const columns = Math.max(...items.map((item) => item.columns));
    const hidden = items.filter((item) => item.column >= limit);
    if (columns <= limit || !hidden.length) return [];
    return [
      {
        key: `${column.key}-${index}-${items.map((item) => item.event.id).join("-")}`,
        items,
        hidden,
        start: Math.min(...items.map((item) => item.start)),
        end: Math.max(...items.map((item) => item.end)),
        columns,
      },
    ];
  });
}
function visiblePositioned(column: (typeof props.columns)[number]) {
  const limit = props.overlapEventLimit;
  return limit
    ? positioned(column).filter(
        (item) => item.columns <= limit || item.column < limit,
      )
    : positioned(column);
}
function overflowPosition(group: OverlapGroup) {
  const duration = (props.endHour - props.startHour) * 60;
  const limit = props.overlapEventLimit ?? group.columns;
  return {
    top: `${((group.start - props.startHour * 60) / duration) * 100}%`,
    height: `${((group.end - group.start) / duration) * 100}%`,
    left: `${(limit / group.columns) * 100}%`,
    width: `${100 - (limit / group.columns) * 100}%`,
  };
}
const moreLabel = (count: number) =>
  props.messages.moreEvents.replace("{count}", String(count));
function setOpenOverlap(key: string, open: boolean) {
  openOverlap.value = open ? key : "";
}
function selectFromOverlap(event: SchedulerEvent) {
  openOverlap.value = "";
  emit("select", event);
}
function previewBelongs(column: (typeof props.columns)[number]) {
  const event = props.previewEvent;
  return (
    event &&
    (!column.resource || event.resourceIds?.includes(column.resource.id)) &&
    isSchedulerEventInRange(event, {
      start: column.date,
      end: addSchedulerDays(column.date, 1),
    })
  );
}
function previewItems(column: (typeof props.columns)[number]) {
  const preview = props.previewEvent;
  if (!preview || preview.allDay || !previewBelongs(column)) return [];
  return layoutSchedulerEvents(
    [...eventsFor(column).filter((event) => event.id !== preview.id), preview],
    column.date,
    props.startHour,
    props.endHour,
  ).filter((item) => item.event.id === preview.id);
}
const nowPosition = computed(() =>
  props.now && props.columns.some((column) => isToday(column.date))
    ? getSchedulerNowPosition(
        props.now,
        props.now,
        props.startHour,
        props.endHour,
      )
    : undefined,
);
function isToday(date: Date) {
  const today = props.today ?? props.now;
  return !!today && schedulerDateKey(date) === schedulerDateKey(today);
}
const focusedUnit = ref<string>();
function unitKey(columnKey: string, item: SchedulerLayoutItem) {
  return JSON.stringify([columnKey, item.layoutUnitId ?? item.event.id]);
}
function stacked(item: SchedulerLayoutItem) {
  return (
    (props.eventLayout === "stack" ||
      typeof props.eventLayout === "function") &&
    item.columns > 1
  );
}
function stackClick(event: MouseEvent, item: SchedulerLayoutItem) {
  if (
    !stacked(item) ||
    props.selectionMode ||
    event.detail === 0 ||
    props.disabled
  )
    return;
  (event.currentTarget as HTMLElement)
    .querySelector<HTMLButtonElement>("button:not(:disabled)")
    ?.focus();
}
function position(item: SchedulerLayoutItem) {
  const duration = (props.endHour - props.startHour) * 60;
  const custom =
    typeof props.eventLayout === "function"
      ? props.eventLayout({ ...item })
      : undefined;
  const valid =
    custom &&
    Number.isFinite(custom.left) &&
    Number.isFinite(custom.width) &&
    custom.left >= 0 &&
    custom.width > 0 &&
    custom.left + custom.width <= 1;
  return {
    top: `${((item.start - props.startHour * 60) / duration) * 100}%`,
    height: `${((item.end - item.start) / duration) * 100}%`,
    left: `${(valid ? custom.left : item.column / item.columns) * 100}%`,
    width: valid
      ? `${custom.width * 100}%`
      : stacked(item)
        ? `${100 - (item.column / item.columns) * 100}%`
        : `${100 / item.columns}%`,
    ...(stacked(item)
      ? {
          "--c-scheduler-stack-order": item.column,
          "--c-scheduler-stack-count": item.columns,
        }
      : {}),
  };
}
function formatTime(event: SchedulerEvent) {
  return event.start == null
    ? ""
    : schedulerDate(event.start).toLocaleTimeString(props.locale, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
}
</script>
