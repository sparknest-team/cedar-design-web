<template>
  <div
    :class="n('time-grid')"
    :style="{ '--c-scheduler-columns': columns.length }"
  >
    <div :class="n('time-heading')">
      <span :class="n('time-gutter')" />
      <div
        v-for="column in columns"
        :key="column.key"
        :class="n('column-heading')"
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
        @dragover.prevent
        @drop.prevent="emit('drop', column.date, column.resource?.id, true)"
      >
        <SchedulerEventCard
          v-for="event in allDayEvents(column)"
          :key="event.id"
          :event="event"
          :movable="!locked"
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
        <CButton
          variant="text"
          size="xs"
          :elevation="false"
          :disabled="locked || column.resource?.disabled"
          :aria-label="`${messages.add}: ${column.label} ${messages.allDay}`"
          @click="emit('create', column.date, column.resource?.id, true)"
          >+</CButton
        >
      </div>
    </div>
    <div :class="n('time-body')">
      <div :class="n('time-labels')">
        <div v-for="minute in minutes" :key="minute" :class="n('time-label')">
          {{ formatMinute(minute) }}
        </div>
      </div>
      <div
        v-for="column in columns"
        :key="column.key"
        :class="n('time-column')"
      >
        <CButton
          v-for="minute in minutes"
          :key="minute"
          variant="text"
          :elevation="false"
          :ripple="false"
          :class="n('time-cell')"
          :data-scheduler-date="atMinute(column.date, minute).toISOString()"
          :data-scheduler-resource="column.resource?.id"
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
        <div :class="n('event-layer')">
          <div
            v-for="item in positioned(column)"
            :key="item.event.id"
            :class="n('positioned-event')"
            :style="position(item)"
          >
            <SchedulerEventCard
              :event="item.event"
              :movable="!locked"
              :time="formatTime(item.event)"
              :label="`${item.event.title} ${formatTime(item.event)}`"
              :disabled="disabled"
              :resizable="!locked"
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
          <div
            v-for="item in previewItems(column)"
            :key="`preview-${item.event.id}`"
            :class="[n('positioned-event'), n('drag-preview')]"
            :style="position(item)"
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
import { computed } from "vue";
import CButton from "../../button";
import { createNamespace } from "../../_utils/global-config";
import SchedulerEventCard from "./scheduler-event.vue";
import {
  layoutSchedulerEvents,
  isSchedulerEventInRange,
  addSchedulerDays,
  schedulerDate,
} from "../core";
import type {
  SchedulerEvent,
  SchedulerResource,
  SchedulerLayoutItem,
} from "../core";
import type { SchedulerMessages } from "../locale";
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
  events: SchedulerEvent[];
  previewEvent?: SchedulerEvent;
  startHour: number;
  endHour: number;
  step: number;
  disabled: boolean;
  locked: boolean;
  messages: SchedulerMessages;
  locale: string;
}>();
const emit = defineEmits<{
  select: [event: SchedulerEvent];
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
function positioned(column: (typeof props.columns)[number]) {
  return layoutSchedulerEvents(
    eventsFor(column),
    column.date,
    props.startHour,
    props.endHour,
  );
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
function position(item: SchedulerLayoutItem) {
  const duration = (props.endHour - props.startHour) * 60;
  return {
    top: `${((item.start - props.startHour * 60) / duration) * 100}%`,
    height: `${((item.end - item.start) / duration) * 100}%`,
    left: `${(item.column / item.columns) * 100}%`,
    width: `${100 / item.columns}%`,
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
