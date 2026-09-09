<template>
  <section
    ref="root"
    :class="classes(n(), [disabled, n('--disabled')], [dragActive, n('--dragging')])"
    :aria-label="messages.title"
    :aria-busy="loading || pending"
    @dragover="previewPoint($event.clientX, $event.clientY)"
    @dragleave="leavePreview"
  >
    <header :class="n('toolbar')">
      <div :class="n('navigation')">
        <CButton
          :disabled="disabled"
          :aria-label="messages.previous"
          @click="navigate(-1)"
          >‹</CButton
        >
        <CButton :disabled="disabled" @click="setDate(new Date())">{{
          messages.today
        }}</CButton>
        <CButton
          :disabled="disabled"
          :aria-label="messages.next"
          @click="navigate(1)"
          >›</CButton
        >
        <strong :class="n('range-title')">{{ rangeTitle }}</strong>
      </div>
      <div :class="n('navigation')">
        <CSelect
          :model-value="mode"
          :options="modeOptions"
          :disabled="disabled"
          :class="n('mode-select')"
          :aria-label="messages.title"
          @update:model-value="changeMode"
        />
        <slot name="toolbar-extra" :date="date" :mode="mode" />
        <CButton
          v-if="!readonly"
          status="primary"
          :disabled="locked"
          @click="createEvent(date, undefined, false, undefined, 'toolbar')"
          >{{ messages.create }}</CButton
        >
      </div>
    </header>
    <CAlert v-if="error" status="danger" role="alert">{{
      messages.errors[error.code]
    }}</CAlert>
    <CAlert v-if="resourceStore.error.value" status="warning" role="alert">
      {{ messages.resolveError }}
      <CButton
        variant="text"
        @click="resourceStore.resolve(associatedResourceIds, true)"
        >{{ messages.retryResources }}</CButton
      >
    </CAlert>
    <div :class="n('workspace')">
      <aside v-if="showSidebar" :class="n('sidebar')">
        <slot
          name="sidebar-extra"
          :start-drag="startTemplateDrag"
          :cancel-drag="clearDrag"
          :disabled="locked || editorOpen"
        />
        <CInput
          v-model="query"
          :input-attrs="{ 'aria-label': messages.search }"
          :placeholder="messages.search"
          :aria-label="messages.search"
          :disabled="disabled"
          clearable
        />
        <span v-if="hasResources" :class="n('sidebar-title')">{{
          messages.resources
        }}</span>
        <SchedulerResourceSelect
          v-if="hasResources"
          v-model="selectedResources"
          :resources="resources"
          :store="resourceStore"
          :request="requestResources"
          :label="messages.resources"
          :messages="messages"
          :disabled="disabled"
          @error="resourceError"
        />
        <div :class="n('sidebar-title')">
          {{ messages.unscheduled }}
          <CTag size="sm">{{ unscheduled.length }}</CTag>
        </div>
        <SchedulerEventCard
          v-for="event in unscheduled"
          :key="event.id"
          :event="event"
          :movable="!locked"
          :disabled="disabled"
          @select="selectEvent"
          @drag-start="startDrag"
          @drag-end="clearDrag"
          @pointer-drop="dropPoint"
          @pointer-move="previewPoint"
        >
          <template #default="slotProps"
            ><slot name="event" v-bind="slotProps">{{
              event.title
            }}</slot></template
          >
        </SchedulerEventCard>
        <CEmpty v-if="!unscheduled.length" :description="messages.empty" />
      </aside>
      <main :class="n('main')">
        <slot v-if="loading" name="loading"
          ><div :class="n('loading')" role="status">
            {{ messages.pending }}
          </div></slot
        >
        <template v-else>
          <SchedulerTimeGrid
            v-if="timeMode && columns.length"
            :columns="columns"
            :events="visibleEvents"
            :preview-event="dragPreview"
            :start-hour="safeStart"
            :end-hour="safeEnd"
            :step="safeStep"
            :disabled="disabled"
            :locked="locked"
            :messages="messages"
            :locale="locale"
            @select="selectEvent"
            @create="createEvent"
            @drop="dropEvent"
            @drag-start="startDrag"
            @drag-end="clearDrag"
            @pointer-drop="dropPoint"
            @pointer-move="previewPoint"
          >
            <template #event="slotProps"
              ><slot name="event" v-bind="slotProps"
                ><span
                  >{{ eventTime(slotProps.event) }}
                  {{ slotProps.event.title }}</span
                ></slot
              ></template
            >
            <template #resource-header="slotProps"
              ><slot name="resource-header" v-bind="slotProps"
                ><span>{{
                  slotProps.resource?.label ?? dayLabel(slotProps.date)
                }}</span></slot
              ></template
            >
          </SchedulerTimeGrid>
          <div v-else-if="mode === 'month'" :class="n('month')">
            <div
              v-for="day in days.slice(0, 7)"
              :key="schedulerDateKey(day)"
              :class="n('month-heading')"
            >
              {{ day.toLocaleDateString(locale, { weekday: "short" }) }}
            </div>
            <div
              v-for="day in days"
              :key="schedulerDateKey(day)"
              :class="
                classes(n('month-cell'), [
                  day.getMonth() !== date.getMonth(),
                  n('month-cell--outside'),
                ])
              "
              @dragover.prevent
              :data-scheduler-date="day.toISOString()"
              @drop.prevent="dropEvent(day)"
            >
              <CButton
                variant="text"
                size="sm"
                :elevation="false"
                :disabled="locked"
                :aria-label="`${messages.add}: ${dayLabel(day)}`"
                @click="createEvent(day, undefined, true)"
                >{{ day.getDate() }}</CButton
              >
              <SchedulerEventCard
                v-for="event in eventsOn(day)"
                :key="event.id"
                :event="event"
                :movable="!locked"
                compact
                :disabled="disabled"
                @select="selectEvent"
                @drag-start="startDrag"
                @drag-end="clearDrag"
                @pointer-drop="dropPoint"
                @pointer-move="previewPoint"
              >
                <template #default="slotProps"
                  ><slot name="event" v-bind="slotProps"
                    ><span>{{ eventTime(event) }} {{ event.title }}</span></slot
                  ></template
                >
              </SchedulerEventCard>
              <div
                v-if="previewOn(day)"
                :class="[n('event'), n('drag-preview')]"
                aria-hidden="true"
                inert
              >
                <slot name="event" :event="dragPreview!">{{
                  dragPreview!.title
                }}</slot>
                <div :class="n('preview-time')">{{ previewTime }}</div>
              </div>
            </div>
          </div>
          <div
            v-else-if="mode === 'resource-timeline' && filteredResources.length"
            :class="n('timeline')"
          >
            <div :class="n('timeline-heading')">
              <span>{{ messages.resources }}</span
              ><span v-for="day in days" :key="schedulerDateKey(day)">{{
                dayLabel(day)
              }}</span>
            </div>
            <div
              v-for="resource in filteredResources"
              :key="resource.id"
              :class="n('timeline-row')"
            >
              <div
                :class="n('resource-label')"
                :style="{ color: resource.color }"
              >
                <slot
                  name="resource-header"
                  :resource="resource"
                  :date="date"
                  >{{ resource.label }}</slot
                >
              </div>
              <div
                :class="n('timeline-track')"
                :style="{
                  '--c-scheduler-lanes':
                    timelineItems(resource.id)[0]?.columns ?? 1,
                }"
              >
                <div :class="n('timeline-cells')">
                  <CButton
                    v-for="day in days"
                    :key="schedulerDateKey(day)"
                    variant="text"
                    :elevation="false"
                    :ripple="false"
                    :disabled="locked || resource.disabled"
                    :aria-label="`${messages.add}: ${resource.label} ${dayLabel(day)}`"
                    @click="createEvent(day, resource.id)"
                    @dragover.prevent
                    @drop.prevent="dropEvent(day, resource.id)"
                    :data-scheduler-date="day.toISOString()"
                    :data-scheduler-resource="resource.id"
                  />
                </div>
                <div
                  v-for="item in timelineItems(resource.id)"
                  :key="item.event.id"
                  :class="n('timeline-event')"
                  :style="{
                    left: `${item.start * 100}%`,
                    width: `${(item.end - item.start) * 100}%`,
                    '--c-scheduler-lane': item.column,
                  }"
                >
                  <SchedulerEventCard
                    :event="item.event"
                    :movable="!locked"
                    :disabled="disabled"
                    compact
                    @select="selectEvent"
                    @drag-start="
                      (event, resize) => startDrag(event, resize, resource.id)
                    "
                    @drag-end="clearDrag"
                    @pointer-drop="dropPoint"
                    @pointer-move="previewPoint"
                  >
                    <template #default="slotProps"
                      ><slot name="event" v-bind="slotProps">{{
                        item.event.title
                      }}</slot></template
                    >
                  </SchedulerEventCard>
                </div>
                <div
                  v-for="item in timelinePreview(resource.id)"
                  :key="`preview-${item.event.id}`"
                  :class="[n('timeline-event'), n('drag-preview'), n('event')]"
                  :style="{
                    left: `${item.start * 100}%`,
                    width: `${(item.end - item.start) * 100}%`,
                    '--c-scheduler-lane': item.column,
                  }"
                  aria-hidden="true"
                  inert
                >
                  <slot name="event" :event="item.event">{{
                    item.event.title
                  }}</slot>
                  <span :class="n('preview-time')">{{ previewTime }}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="mode === 'agenda'" :class="n('agenda')">
            <template v-for="day in days" :key="schedulerDateKey(day)">
              <section v-if="eventsOn(day).length" :class="n('agenda-day')">
                <h3>{{ dayLabel(day) }}</h3>
                <SchedulerEventCard
                  v-for="event in eventsOn(day)"
                  :key="event.id"
                  :event="event"
                  :movable="!locked"
                  :disabled="disabled"
                  @select="selectEvent"
                  @drag-start="startDrag"
                  @drag-end="clearDrag"
                  @pointer-drop="dropPoint"
                  @pointer-move="previewPoint"
                >
                  <template #default="slotProps"
                    ><slot name="event" v-bind="slotProps"
                      ><span
                        >{{ eventTime(event) }} {{ event.title }} ·
                        {{ resourceLabel(event) }}</span
                      ></slot
                    ></template
                  >
                </SchedulerEventCard>
              </section>
            </template>
            <slot v-if="!visibleEvents.length" name="empty"
              ><CEmpty :description="messages.empty"
            /></slot>
          </div>
          <slot v-else name="empty"
            ><CEmpty :description="messages.noResources"
          /></slot>
        </template>
      </main>
    </div>
    <div :class="n('live')" role="status" aria-live="polite">
      {{ pending ? messages.pending : announcement }}
    </div>
    <SchedulerEditor
      v-if="editorEvent"
      :open="editorOpen"
      :event="editorEvent"
      :existing="editorExisting"
      :resources="resources"
      :resource-store="resourceStore"
      :resource-enabled="hasResources"
      :request-resources="requestResources"
      :readonly="readonly || disabled || loading || !!editorEvent.readonly"
      :pending="pending"
      :error="error"
      :error-message="error ? messages.errors[error.code] : undefined"
      :messages="messages"
      @update:open="editorOpen = $event"
      @save="saveEditor"
      @remove="removeEditor"
      @resource-error="resourceError"
    >
      <template v-if="$slots.editor" #default="slotProps"
        ><slot name="editor" v-bind="slotProps"
      /></template>
    </SchedulerEditor>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { projectSchedulerDrag } from "./drag";
import type { SchedulerResize } from "./drag";
import CButton from "../button";
import CSelect from "../select";
import CInput from "../input";
import CTag from "../tag";
import CEmpty from "../empty";
import CAlert from "../alert";
import { createNamespace } from "../_utils/global-config";
import { useI18n } from "../locale";
import { schedulerProps } from "./props";
import type { SchedulerEventTemplate } from "./props";
import type { SchedulerEditorSlotProps } from "./props";
import { useScheduler } from "./use-scheduler";
import { useSchedulerResources } from "./use-resources";
import type { SchedulerResourceErrorContext } from "./props";
import type { SchedulerEmits } from "./use-scheduler";
import { schedulerMessages } from "./locale";
import SchedulerEventCard from "./components/scheduler-event.vue";
import SchedulerTimeGrid from "./components/scheduler-time-grid.vue";
import SchedulerEditor from "./components/scheduler-editor.vue";
import SchedulerResourceSelect from "./components/scheduler-resource-select.vue";
import {
  schedulerDate,
  schedulerDateKey,
  schedulerDay,
  getSchedulerRange,
  getSchedulerDays,
  navigateSchedulerDate,
  isSchedulerEventInRange,
  addSchedulerDays,
  cloneSchedulerEvent,
  layoutSchedulerTimeline,
  SchedulerError,
} from "./core";
import type {
  SchedulerEvent,
  SchedulerMode,
  SchedulerResource,
  SchedulerChange,
} from "./core";

defineOptions({ name: createNamespace("scheduler").name });
const { n, classes } = createNamespace("scheduler");
const props = defineProps(schedulerProps);
const emit = defineEmits<SchedulerEmits>();
defineSlots<{
  "sidebar-extra"(props: {
    startDrag: (template: SchedulerEventTemplate, event: DragEvent) => void;
    cancelDrag: () => void;
    disabled: boolean;
  }): unknown;
  event(props: { event: SchedulerEvent }): unknown;
  "resource-header"(props: {
    resource?: SchedulerResource;
    date: Date;
  }): unknown;
  "toolbar-extra"(props: { date: Date; mode: SchedulerMode }): unknown;
  editor(props: SchedulerEditorSlotProps): unknown;
  empty(): unknown;
  loading(): unknown;
}>();
function resourceError(error: unknown, context: SchedulerResourceErrorContext) {
  emit("resource-error", error, context);
}
const resourceStore = useSchedulerResources(
  () => props.resources,
  () => props.resolveResources,
  resourceError,
);
const { value, mode, date, pending, error, locked, setMode, setDate, commit } =
  useScheduler(props, emit, resourceStore.get, () => messages.value.untitled);
const associatedResourceIds = computed(() => [
  ...new Set(value.value.flatMap((event) => event.resourceIds ?? [])),
]);
watch(
  [associatedResourceIds, () => props.resolveResources],
  ([ids]) => {
    void resourceStore.resolve(ids);
  },
  { immediate: true },
);
const hasResources = computed(
  () =>
    !!(
      props.resources.length ||
      props.requestResources ||
      props.resolveResources ||
      associatedResourceIds.value.length
    ),
);
const { locale } = useI18n();
const messages = computed(() => ({
  ...(locale.value.startsWith("zh")
    ? schedulerMessages["zh-CN"]
    : schedulerMessages["en-US"]),
  ...(props.resourceLabel ? { resources: props.resourceLabel } : {}),
}));
const modeOptions = computed(() =>
  props.modes.map((value) => ({ value, label: messages.value.modes[value] })),
);
const safeStart = computed(() =>
  Number.isInteger(props.startHour) &&
  props.startHour >= 0 &&
  props.startHour < 24
    ? props.startHour
    : 8,
);
const safeEnd = computed(() =>
  Number.isInteger(props.endHour) &&
  props.endHour > safeStart.value &&
  props.endHour <= 24
    ? props.endHour
    : 24,
);
const safeStep = computed(() =>
  props.step > 0 && Number.isInteger(props.step) && 60 % props.step === 0
    ? props.step
    : 30,
);
const range = computed(() =>
  getSchedulerRange(date.value, mode.value, props.firstDayOfWeek),
);
const days = computed(() => getSchedulerDays(range.value));
watch(
  () => `${+range.value.start}:${+range.value.end}`,
  () =>
    emit("range-change", {
      start: new Date(range.value.start),
      end: new Date(range.value.end),
    }),
  { immediate: true },
);
const root = ref<HTMLElement>();
const query = ref("");
const selectedResources = ref<string[]>([]);
const filteredResources = computed(() =>
  props.resources.filter(
    (resource) =>
      !selectedResources.value.length ||
      selectedResources.value.includes(resource.id),
  ),
);
const filtered = computed(() =>
  value.value.filter(
    (event) =>
      event.title
        .toLocaleLowerCase()
        .includes(query.value.toLocaleLowerCase()) &&
      (!selectedResources.value.length ||
        event.resourceIds?.some((id) => selectedResources.value.includes(id))),
  ),
);
const visibleEvents = computed(() =>
  filtered.value.filter((event) => isSchedulerEventInRange(event, range.value)),
);
const unscheduled = computed(() =>
  filtered.value.filter((event) => event.start == null && event.end == null),
);
const timeMode = computed(() =>
  ["day", "week", "resource-day"].includes(mode.value),
);
function dayLabel(day: Date) {
  return day.toLocaleDateString(locale.value, {
    month: "short",
    day: "numeric",
    weekday: "short",
  });
}
const rangeTitle = computed(() =>
  mode.value === "month"
    ? date.value.toLocaleDateString(locale.value, {
        year: "numeric",
        month: "long",
      })
    : `${dayLabel(range.value.start)}${days.value.length > 1 ? ` – ${dayLabel(days.value[days.value.length - 1])}` : ""}`,
);
const columns = computed(() =>
  mode.value === "resource-day"
    ? filteredResources.value.map((resource) => ({
        key: resource.id,
        date: schedulerDay(date.value),
        resource,
        label: resource.label,
      }))
    : days.value.map((day) => ({
        key: schedulerDateKey(day),
        date: day,
        label: dayLabel(day),
      })),
);
function eventsOn(day: Date) {
  return visibleEvents.value.filter((event) =>
    isSchedulerEventInRange(event, {
      start: day,
      end: addSchedulerDays(day, 1),
    }),
  );
}
const timelineLayout = computed(
  () =>
    new Map(
      filteredResources.value.map((resource) => [
        resource.id,
        layoutSchedulerTimeline(
          visibleEvents.value.filter((event) =>
            event.resourceIds?.includes(resource.id),
          ),
          range.value,
          "day",
        ),
      ]),
    ),
);
function timelineItems(id: string) {
  return timelineLayout.value.get(id) ?? [];
}
function resourceLabel(event: SchedulerEvent) {
  return (
    (event.resourceIds ?? [])
      .map((id) => resourceStore.get(id)?.label ?? id)
      .join(", ") || messages.value.unassigned
  );
}
function eventTime(event: SchedulerEvent) {
  return event.allDay
    ? messages.value.allDay
    : event.start == null
      ? ""
      : schedulerDate(event.start).toLocaleTimeString(locale.value, {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
}
function changeMode(value: unknown) {
  setMode(value as SchedulerMode);
}
function navigate(direction: number) {
  setDate(navigateSchedulerDate(date.value, mode.value, direction));
}

const editorOpen = ref(false);
const editorExisting = ref(false);
const editorEvent = ref<SchedulerEvent>();
const announcement = ref("");
let idSequence = 0;
function selectEvent(event: SchedulerEvent) {
  if (props.disabled || pending.value) return;
  emit("event-click", cloneSchedulerEvent(event));
  if (!props.editable) {
    emit("editor-request", {
      action: "edit",
      source: "event",
      event: cloneSchedulerEvent(event),
      readonly: props.readonly || props.loading || !!event.readonly,
    });
    return;
  }
  error.value = undefined;
  editorExisting.value = true;
  editorEvent.value = cloneSchedulerEvent(event);
  editorOpen.value = true;
}
function createEvent(
  at: Date,
  resourceId?: string,
  allDay = false,
  template?: SchedulerEventTemplate,
  source: "toolbar" | "cell" | "drop" = "cell",
) {
  if (
    locked.value ||
    (resourceId &&
      props.resources.find((resource) => resource.id === resourceId)?.disabled)
  )
    return;
  if (source === "cell") emit("cell-click", { date: new Date(at), resourceId });
  error.value = undefined;
  const start = new Date(at);
  if (
    !template &&
    start.getHours() === 0 &&
    start.getMinutes() === 0 &&
    !allDay
  )
    start.setHours(safeStart.value);
  let id: string;
  do {
    id = `scheduler-${Date.now()}-${++idSequence}`;
  } while (value.value.some((event) => event.id === id));
  const draft: SchedulerEvent = {
    id,
    title: template?.title ?? "",
    description: template?.description,
    color: template?.color,
    taskId: template?.taskId,
    start: allDay ? schedulerDateKey(start) : start.toISOString(),
    end: allDay
      ? schedulerDateKey(addSchedulerDays(start, 1))
      : new Date(
          +start + (template?.duration ?? safeStep.value) * 60000,
        ).toISOString(),
    allDay,
    resourceIds: resourceId ? [resourceId] : [...(template?.resourceIds ?? [])],
  };
  if (!props.editable) {
    emit("editor-request", {
      action: "create",
      source,
      event: cloneSchedulerEvent(draft),
      readonly: false,
    });
    return;
  }
  editorExisting.value = false;
  editorEvent.value = draft;
  editorOpen.value = true;
}
// Detect external edits while a details form is open; never overwrite them with its stale draft.
let editorSnapshot = "";
watch(
  editorOpen,
  (open) => {
    if (open)
      editorSnapshot = JSON.stringify(
        value.value.find((event) => event.id === editorEvent.value?.id),
      );
  },
  { flush: "sync" },
);
async function saveEditor(event: SchedulerEvent) {
  if (event.id !== editorEvent.value?.id) {
    error.value = new SchedulerError("invalid-event", "Draft ID cannot change");
    emit("change-error", error.value, {
      type: editorExisting.value ? "update" : "create",
      event,
    });
    return;
  }
  if (
    editorExisting.value &&
    JSON.stringify(value.value.find((item) => item.id === event.id)) !==
      editorSnapshot
  ) {
    const cause = new Error("Event changed while editing");
    error.value = new SchedulerError("stale", cause.message);
    emit("change-error", error.value, { type: "update", event });
    return;
  }
  if (
    await commit({ type: editorExisting.value ? "update" : "create", event })
  ) {
    editorOpen.value = false;
    announcement.value = messages.value.saved;
  }
}
async function removeEditor(event: SchedulerEvent) {
  if (
    JSON.stringify(value.value.find((item) => item.id === event.id)) !==
    editorSnapshot
  ) {
    error.value = new SchedulerError("stale", "Event changed while editing");
    emit("change-error", error.value, { type: "remove", event });
    return;
  }
  if (await commit({ type: "remove", event })) {
    editorOpen.value = false;
    announcement.value = messages.value.saved;
  }
}
let drag:
  | {
      id: string;
      resize: SchedulerResize;
      resourceId?: string;
      snapshot: string;
    }
  | undefined;
const dragPreview = ref<SchedulerEvent>();
const dragActive = ref(false);
const previewTime = computed(() => {
  const event = dragPreview.value;
  if (event?.start == null || event.end == null) return "";
  if (event.allDay) return messages.value.allDay;
  const format = (value: NonNullable<SchedulerEvent["start"]>) =>
    schedulerDate(value).toLocaleTimeString(locale.value, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  return `${format(event.start)} – ${format(event.end)}`;
});
function previewOn(day: Date) {
  return (
    dragPreview.value &&
    isSchedulerEventInRange(dragPreview.value, {
      start: day,
      end: addSchedulerDays(day, 1),
    })
  );
}
function timelinePreview(id: string) {
  const preview = dragPreview.value;
  if (!preview?.resourceIds?.includes(id)) return [];
  return layoutSchedulerTimeline(
    [
      ...visibleEvents.value.filter(
        (event) => event.id !== preview.id && event.resourceIds?.includes(id),
      ),
      preview,
    ],
    range.value,
    "day",
  ).filter((item) => item.event.id === preview.id);
}
let dragTemplate: SchedulerEventTemplate | undefined;
function startTemplateDrag(template: SchedulerEventTemplate, event: DragEvent) {
  clearDrag();
  if (
    locked.value ||
    editorOpen.value ||
    typeof template.title !== "string" ||
    (template.duration !== undefined &&
      (!Number.isFinite(template.duration) || template.duration <= 0))
  ) {
    event.preventDefault();
    return;
  }
  dragTemplate = {
    ...template,
    resourceIds: template.resourceIds && [...template.resourceIds],
  };
  dragActive.value = true;
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "copy";
    event.dataTransfer.setData("text/plain", template.title);
  }
}
function startDrag(
  event: SchedulerEvent,
  resize: SchedulerResize = false,
  resourceId?: string,
) {
  clearDrag();
  if (!locked.value && !event.readonly) {
    drag = {
      id: event.id,
      resize,
      resourceId,
      snapshot: JSON.stringify(event),
    };
    dragActive.value = true;
  }
}
function pointTarget(x: number, y: number) {
  return document
    .elementsFromPoint(x, y)
    .map((element) => element.closest<HTMLElement>("[data-scheduler-date]"))
    .find((element) => element && root.value?.contains(element));
}
function previewPoint(x: number, y: number) {
  if (!drag || locked.value) {
    dragPreview.value = undefined;
    return;
  }
  const target = pointTarget(x, y);
  if (!target) {
    dragPreview.value = undefined;
    return;
  }
  const allDay = target.dataset.schedulerAllDay;
  dragPreview.value = projection(
    new Date(target.dataset.schedulerDate!),
    target.dataset.schedulerResource,
    allDay === undefined ? undefined : allDay === "true",
  );
}
function leavePreview(event: DragEvent) {
  if (
    !(event.relatedTarget instanceof Node) ||
    !root.value?.contains(event.relatedTarget)
  )
    dragPreview.value = undefined;
}
function projection(at: Date, resourceId?: string, allDay?: boolean) {
  if (
    !drag ||
    locked.value ||
    props.resources.find((resource) => resource.id === resourceId)?.disabled
  )
    return;
  const event = value.value.find((event) => event.id === drag!.id);
  if (!event || event.readonly || JSON.stringify(event) !== drag.snapshot)
    return;
  return projectSchedulerDrag(
    event,
    at,
    drag.resize,
    safeStep.value,
    safeStart.value,
    drag.resourceId,
    resourceId,
    allDay,
  );
}
function dropPoint(x: number, y: number) {
  const target = pointTarget(x, y);
  if (!target) {
    clearDrag();
    return;
  }
  const allDay = target.dataset.schedulerAllDay;
  void dropEvent(
    new Date(target.dataset.schedulerDate!),
    target.dataset.schedulerResource,
    allDay === undefined ? undefined : allDay === "true",
  );
}
function clearDrag() {
  dragActive.value = false;
  drag = undefined;
  dragTemplate = undefined;
  dragPreview.value = undefined;
}
async function dropEvent(at: Date, resourceId?: string, allDay?: boolean) {
  const template = dragTemplate;
  const operation = drag;
  const next = projection(at, resourceId, allDay);
  clearDrag();
  if (template) {
    if (locked.value || editorOpen.value) return;
    const start = new Date(at);
    const dateOnly = allDay === undefined;
    const isAllDay = allDay === true || (dateOnly && mode.value === "month");
    if (dateOnly && !isAllDay) start.setHours(safeStart.value, 0, 0, 0);
    if (
      !Number.isFinite(+start) ||
      !Number.isFinite(
        +new Date(+start + (template.duration ?? safeStep.value) * 60000),
      )
    )
      return;
    createEvent(start, resourceId, isAllDay, template, "drop");
    return;
  }
  if (
    !operation ||
    locked.value ||
    props.resources.find((resource) => resource.id === resourceId)?.disabled
  )
    return;
  if (!next) return;
  if (await commit({ type: operation.resize ? "resize" : "move", event: next }))
    announcement.value = messages.value.saved;
}
// Commands let an application use its own editor without depending on Vue internals.
defineExpose({
  change: (change: SchedulerChange) => commit(change),
  goToDate: (value: Date) => setDate(value),
});
</script>
