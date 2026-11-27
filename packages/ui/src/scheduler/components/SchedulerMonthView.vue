<template>
  <div :class="n('month')" :style="{ '--c-scheduler-weekday-count': weekdayCount }">
    <div v-for="day in days.slice(0, weekdayCount)" :key="schedulerDateKey(day)" :class="n('month-heading')">
      {{ weekdayFormatter.format(day) }}
    </div>
    <div
      v-for="day in days"
      :key="schedulerDateKey(day)"
      :class="classes(n('month-cell'), [day.getMonth() !== date.getMonth(), n('month-cell--outside')])"
      @dragover.prevent
      :data-scheduler-date="day.toISOString()"
      @drop.prevent="emit('drop', day)"
      @click="createFromEmpty($event, day)"
    >
      <CButton
        :class="n('month-date')"
        variant="text"
        size="sm"
        :elevation="false"
        :ripple="false"
        :disabled="locked"
        :aria-label="`${messages.add}: ${dayLabel(day)}`"
        @click="emit('create', day)"
        >{{ day.getDate() }}</CButton
      >
      <SchedulerEventCard
        v-for="event in eventsOn(day).slice(0, monthLimit)"
        :key="event.id"
        :event="event"
        :selected="selectedKeys.includes(event.id)"
        :selection-mode="selectionMode"
        :movable="!locked && !selectionMode"
        compact
        :disabled="disabled"
        @select="emit('select', $event)"
        @drag-start="(event, resize) => emit('drag-start', event, resize)"
        @drag-end="emit('drag-end')"
        @pointer-drop="(x, y) => emit('pointer-drop', x, y)"
        @pointer-move="(x, y) => emit('pointer-move', x, y)"
      >
        <template #default="slotProps"
          ><slot name="event" v-bind="slotProps"
            ><span>{{ eventTime(event) }} {{ event.title }}</span></slot
          ></template
        >
      </SchedulerEventCard>
      <CPopover
        v-if="eventsOn(day).length > monthLimit"
        trigger="click"
        :open="openDay === schedulerDateKey(day)"
        :title="dayLabel(day)"
        :content-class="n('month-more-content')"
        @update:open="setOpenDay(day, $event)"
      >
        <CButton variant="text" size="sm" :class="n('month-more')" :disabled="disabled">{{
          moreLabel(eventsOn(day).length - monthLimit)
        }}</CButton>
        <template #content>
          <CButton
            v-for="event in eventsOn(day)"
            :key="event.id"
            variant="text"
            block
            :disabled="disabled"
            :class="n('month-more-event')"
            @click="selectFromPopover(event)"
            >{{ eventTime(event) }} {{ event.title }}</CButton
          >
        </template>
      </CPopover>
      <div v-if="previewOn(day)" :class="[n('event'), n('drag-preview')]" aria-hidden="true" inert>
        <slot name="event" :event="dragPreview!">{{ dragPreview!.title }}</slot>
        <div :class="n('preview-time')">{{ previewTime }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { createNamespace } from '../../_utils/global-config'
import CButton from '../../button/base'
import CPopover from '../../popover'
import { addSchedulerDays, isSchedulerEventInRange, schedulerDate, schedulerDateKey } from '../core'
import type { SchedulerEvent } from '../core'
import type { SchedulerResize } from '../drag'
import type { SchedulerMessages } from '../locale'
import SchedulerEventCard from './SchedulerEvent.vue'

defineOptions({ name: createNamespace('scheduler-month-view').name })
const { n, classes } = createNamespace('scheduler')
const props = defineProps<{
  days: Date[]
  date: Date
  weekdayCount: number
  locale: string
  locked: boolean
  disabled: boolean
  selectionMode: boolean
  selectedKeys: string[]
  monthLimit: number
  events: SchedulerEvent[]
  dragPreview?: SchedulerEvent
  previewTime: string
  messages: SchedulerMessages
}>()
const emit = defineEmits<{
  create: [date: Date]
  drop: [date: Date]
  select: [event: SchedulerEvent]
  'drag-start': [event: SchedulerEvent, resize: SchedulerResize]
  'drag-end': []
  'pointer-drop': [x: number, y: number]
  'pointer-move': [x: number, y: number]
}>()
defineSlots<{ event(props: { event: SchedulerEvent }): unknown }>()
const openDay = ref('')
function createFromEmpty(event: MouseEvent, day: Date) {
  if (props.locked || !(event.target instanceof Element)) return
  if (event.target.closest(".c-scheduler__event, .c-scheduler__month-more, button, a, input, [role='button']")) return
  emit('create', day)
}
const dayFormatter = computed(
  () =>
    new Intl.DateTimeFormat(props.locale, {
      month: 'short',
      day: 'numeric',
      weekday: 'short',
    }),
)
const timeFormatter = computed(
  () =>
    new Intl.DateTimeFormat(props.locale, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }),
)
const weekdayFormatter = computed(() => new Intl.DateTimeFormat(props.locale, { weekday: 'short' }))
const dayLabel = (day: Date) => dayFormatter.value.format(day)
const eventTime = (event: SchedulerEvent) =>
  event.allDay
    ? props.messages.allDay
    : event.start == null
      ? ''
      : timeFormatter.value.format(schedulerDate(event.start))
const moreLabel = (count: number) => props.messages.moreEvents.replace('{count}', String(count))
const setOpenDay = (day: Date, open: boolean) => {
  openDay.value = open ? schedulerDateKey(day) : ''
}
const selectFromPopover = (event: SchedulerEvent) => {
  openDay.value = ''
  emit('select', event)
}
const eventsOn = (day: Date) =>
  props.events.filter((event) =>
    isSchedulerEventInRange(event, {
      start: day,
      end: addSchedulerDays(day, 1),
    }),
  )
const previewOn = (day: Date) =>
  !!props.dragPreview &&
  isSchedulerEventInRange(props.dragPreview, {
    start: day,
    end: addSchedulerDays(day, 1),
  })
</script>
