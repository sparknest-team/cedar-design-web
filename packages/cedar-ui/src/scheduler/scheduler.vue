<template>
  <section
    ref="root"
    :class="
      classes(n(), [disabled, n('--disabled')], [dragActive, n('--dragging')])
    "
    :aria-label="messages.title"
    :aria-busy="loading || pending"
    tabindex="-1"
    @focusin.capture="rememberEditorTrigger"
    @keydown.capture="navigateKeyboard"
    @dragover="previewPoint($event.clientX, $event.clientY)"
    @dragleave="leavePreview"
  >
    <header :class="n('toolbar')">
      <slot
        name="toolbar"
        :date="date"
        :mode="mode"
        :navigate="navigate"
        :create="
          () => createEvent(date, undefined, false, undefined, 'toolbar')
        "
      >
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
          <CSelect
            v-if="mode === 'resource-timeline'"
            :model-value="scale"
            :options="[
              { value: 'hour', label: messages.hourScale },
              { value: 'day', label: messages.dayScale },
            ]"
            :disabled="disabled"
            :aria-label="messages.scale"
            :class="n('mode-select')"
            @update:model-value="changeScale"
          />
          <template v-if="mode === 'resource-timeline'">
            <CButton
              variant="text"
              :aria-label="messages.zoomOut"
              :disabled="disabled || zoom <= 0.5"
              @click="setZoom(zoom / 2)"
              >−</CButton
            >
            <span>{{ Math.round(zoom * 100) }}%</span>
            <CButton
              variant="text"
              :aria-label="messages.zoomIn"
              :disabled="disabled || zoom >= 4"
              @click="setZoom(zoom * 2)"
              >+</CButton
            >
          </template>
          <CSelect
            v-if="
              resourceDimensions.length &&
              !crossGrouping &&
              ['resource-day', 'resource-timeline'].includes(mode)
            "
            :model-value="axisDimension"
            :options="[
              { value: '', label: messages.allResources },
              ...resourceDimensions.map((d) => ({
                value: d.id,
                label: d.label,
              })),
            ]"
            :disabled="disabled"
            :aria-label="messages.resourceDimension"
            :class="n('mode-select')"
            @update:model-value="setAxisDimension"
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
      </slot>
    </header>
    <div v-if="selectable || history" :class="n('batch-toolbar')">
      <CCheckbox
        v-if="selectable"
        v-model="selectionMode"
        :disabled="disabled || pending"
        >{{ messages.selectMode }}</CCheckbox
      >
      <template v-if="selectable && selectionMode">
        <span>{{ messages.selected }} {{ selectedEvents.length }}</span>
        <CButton
          :disabled="disabled || pending || !selectedEvents.length"
          @click="setSelected([])"
          >{{ messages.clearSelection }}</CButton
        >
        <CButton
          :disabled="locked || !selectedEvents.length"
          @click="batchMove"
          >{{ messages.moveDay }}</CButton
        >
        <CSelect
          v-if="resources.length"
          v-model="batchResource"
          :options="
            resources.map((r) => ({
              value: r.id,
              label: r.label,
              disabled: r.disabled,
            }))
          "
          :disabled="locked"
          :aria-label="messages.resources"
          :class="n('mode-select')"
        />
        <CButton
          v-if="resources.length"
          :disabled="locked || !selectedEvents.length || !batchResource"
          @click="batchAssign"
          >{{ messages.addResource }}</CButton
        >
        <CButton
          status="danger"
          :disabled="locked || !selectedEvents.length"
          @click="
            transaction(
              selectedEvents.map((event) => ({ type: 'remove', event })),
            )
          "
          >{{ messages.removeSelected }}</CButton
        >
      </template>
      <CButton v-if="history" :disabled="!canUndo" @click="undo">{{
        messages.undo
      }}</CButton>
      <CButton v-if="history" :disabled="!canRedo" @click="redo">{{
        messages.redo
      }}</CButton>
    </div>
    <CAlert v-if="error" status="danger" role="alert">{{
      messages.errors[error.code]
    }}</CAlert>
    <CAlert
      v-for="(warning, index) in warnings"
      :key="index"
      status="warning"
      role="status"
      >{{ messages.errors[warning.code] }}</CAlert
    >
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
          name="sidebar"
          :start-drag="startTemplateDrag"
          :cancel-drag="clearDrag"
          :disabled="locked || editorOpen"
          :unscheduled="unscheduled"
        >
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
          <template v-for="dimension in resourceDimensions" :key="dimension.id">
            <span :class="n('sidebar-title')">{{ dimension.label }}</span>
            <SchedulerResourceSelect
              :model-value="filterIds(dimension.id)"
              :dimension-id="dimension.id"
              :resources="resources"
              :store="resourceStore"
              :request="requestResources"
              :label="dimension.label"
              :messages="messages"
              :disabled="disabled"
              @update:model-value="setDimensionFilter(dimension.id, $event)"
              @error="resourceError"
            />
          </template>
          <span
            v-if="hasResources && !resourceDimensions.length"
            :class="n('sidebar-title')"
            >{{ messages.resources }}</span
          >
          <SchedulerResourceSelect
            v-if="hasResources && !resourceDimensions.length"
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
            :selected="selectedKeys.includes(event.id)"
            :selection-mode="selectable && selectionMode"
            :movable="!locked && !(selectable && selectionMode)"
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
        </slot>
      </aside>
      <main ref="viewport" :class="n('main')">
        <slot v-if="loading" name="loading"
          ><div :class="n('loading')" role="status">
            {{ messages.pending }}
          </div></slot
        >
        <template v-else>
          <SchedulerTimeGrid
            v-if="timeMode && columns.length"
            :columns="columns"
            :event-layout="
              eventLayout ?? (mode === 'week' ? 'stack' : 'columns')
            "
            :overlap-event-limit="overlapEventLimit"
            :is-unavailable="isUnavailable"
            :selected-keys="selectedKeys"
            :selection-mode="selectable && selectionMode"
            :events="visibleEvents"
            :preview-event="visualPreview"
            :now="showNowIndicator ? now : undefined"
            :today="now"
            :start-hour="safeStart"
            :end-hour="safeEnd"
            :step="slotMinutes"
            :snap-duration="snapMinutes"
            :drag-to-create="dragToCreate"
            :disabled="disabled"
            :locked="locked"
            :messages="messages"
            :locale="locale"
            @select="selectEvent"
            @create="createEvent"
            @create-range="createRange"
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
            <template #column-background="slotProps"
              ><slot name="column-background" v-bind="slotProps"
            /></template>
            <template #resource-header="slotProps"
              ><slot name="resource-header" v-bind="slotProps"
                ><span>{{
                  slotProps.resource?.label ?? dayLabel(slotProps.date)
                }}</span></slot
              ></template
            >
          </SchedulerTimeGrid>
          <SchedulerMonthView
            v-else-if="mode === 'month'"
            :days="days"
            :date="date"
            :weekday-count="weekdayCount"
            :locale="locale"
            :locked="locked"
            :disabled="disabled"
            :selection-mode="selectable && selectionMode"
            :selected-keys="selectedKeys"
            :month-limit="monthLimit"
            :events="visibleEvents"
            :drag-preview="visualPreview"
            :preview-time="previewTime"
            :messages="messages"
            @create="(day) => createEvent(day, undefined, true)"
            @drop="dropEvent"
            @select="selectEvent"
            @drag-start="startDrag"
            @drag-end="clearDrag"
            @pointer-drop="dropPoint"
            @pointer-move="previewPoint"
          >
            <template #event="{ event }"
              ><slot name="event" :event="event"
                ><span>{{ eventTime(event) }} {{ event.title }}</span></slot
              ></template
            >
          </SchedulerMonthView>
          <div
            v-else-if="mode === 'resource-timeline' && timelineResources.length"
            :class="[n('timeline'), virtualListProps && n('timeline--virtual')]"
            :style="{
              '--c-scheduler-axis-count': timelineAxis.cells.length,
              '--c-scheduler-axis-zoom': zoom,
            }"
          >
            <SchedulerTimelineRows
              :groups="groups"
              :grouped="!!resourceGroupBy || crossGrouping"
              :expanded="expanded"
              :options="virtualListProps"
              :layout-version="virtualListProps ? timelineLayoutVersion : ''"
            >
              <template #heading>
                <div v-if="showDateHeader" :class="n('timeline-heading')">
                  <span />
                  <span
                    v-for="group in dateHeaders"
                    :key="group.key"
                    :style="{ gridColumn: `span ${group.count}` }"
                    >{{ group.label }}</span
                  >
                </div>
                <div :class="n('timeline-heading')">
                  <span>{{ messages.resources }}</span
                  ><span
                    v-for="cell in timelineAxis.cells"
                    :key="+cell.start"
                    >{{
                      scale === "hour"
                        ? cell.start.toLocaleTimeString(locale, {
                            hour: "2-digit",
                            minute: "2-digit",
                            timeZoneName: "short",
                          })
                        : dayLabel(cell.start)
                    }}</span
                  >
                </div>
              </template>
              <template #group="{ group }">
                <CButton
                  v-if="resourceGroupBy || crossGrouping"
                  variant="text"
                  :disabled="disabled"
                  :aria-expanded="expanded.includes(group.key)"
                  :class="n('resource-group')"
                  @click="toggleGroup(group.key)"
                  >{{ expanded.includes(group.key) ? "▾" : "▸" }}
                  {{ group.label || messages.unassigned }} ({{
                    group.resources.length
                  }})</CButton
                >
              </template>
              <template #resource="{ resource }">
                <div :key="resource.id" :class="n('timeline-row')">
                  <div
                    :class="n('resource-label')"
                    :style="{ color: resource.color }"
                  >
                    <slot
                      name="resource-header"
                      :resource="timelineHeaderResource(resource.id)"
                      :resources="rowResources(resource.id)"
                      :date="date"
                      >{{
                        virtualListProps && crossGrouping
                          ? rowResources(resource.id)
                              .map((item) => item.label)
                              .join(" / ")
                          : resource.label
                      }}</slot
                    >
                    <template v-if="showResourceLoad">
                      <div
                        v-for="item in rowResources(resource.id)"
                        :key="item.id"
                      >
                        <CTag
                          size="sm"
                          :status="
                            resourcePeak(item.id) > (item.capacity ?? Infinity)
                              ? 'danger'
                              : 'default'
                          "
                          >{{ item.label }}: {{ resourcePeak(item.id) }} /
                          {{ item.capacity ?? "∞" }}</CTag
                        >
                        <CProgress
                          v-if="item.capacity != null"
                          :percent="
                            item.capacity > 0
                              ? Math.min(
                                  100,
                                  (resourcePeak(item.id) / item.capacity) * 100,
                                )
                              : resourcePeak(item.id) > 0
                                ? 100
                                : 0
                          "
                          :show-text="false"
                          :status="
                            resourcePeak(item.id) > item.capacity
                              ? 'danger'
                              : 'default'
                          "
                          :aria-label="messages.peakLoad"
                        />
                        <span
                          v-if="resourceSummaries(item.id)?.utilization != null"
                          >{{ messages.utilization }}
                          {{
                            resourceSummaries(item.id)!.utilization!.toFixed(1)
                          }}%</span
                        >
                      </div>
                    </template>
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
                        v-for="cell in timelineAxis.cells"
                        :key="+cell.start"
                        :class="{
                          [n('cell--unavailable')]:
                            scale === 'hour' &&
                            isUnavailable(cell.start, cell.end, resource.id),
                        }"
                        :title="
                          scale === 'hour' &&
                          isUnavailable(cell.start, cell.end, resource.id)
                            ? messages.unavailable
                            : undefined
                        "
                        variant="text"
                        :elevation="false"
                        :ripple="false"
                        :disabled="locked || resource.disabled"
                        :aria-label="`${messages.add}: ${rowResources(
                          resource.id,
                        )
                          .map((item) => item.label)
                          .join(
                            ' / ',
                          )} ${dayLabel(cell.start) + (scale === 'hour' ? ' ' + cell.start.toLocaleTimeString(locale) : '')}`"
                        @click="
                          createEvent(
                            cell.start,
                            resource.id,
                            scale === 'hour' ? false : undefined,
                          )
                        "
                        @dragover.prevent
                        @drop.prevent="
                          dropEvent(
                            cell.start,
                            resource.id,
                            scale === 'hour' ? false : undefined,
                          )
                        "
                        :data-scheduler-date="cell.start.toISOString()"
                        :data-scheduler-resource="resource.id"
                        :data-scheduler-duration="
                          scale === 'hour' ? 60 : undefined
                        "
                        data-scheduler-axis="horizontal"
                        :data-scheduler-all-day="
                          scale === 'hour' ? 'false' : undefined
                        "
                      />
                    </div>
                    <div
                      v-for="item in timelineItems(resource.id)"
                      :key="item.event.id"
                      :class="n('timeline-event')"
                      :data-scheduler-event-id="item.event.id"
                      :style="{
                        left: `${item.start * 100}%`,
                        width: `${(item.end - item.start) * 100}%`,
                        '--c-scheduler-lane': item.column,
                      }"
                    >
                      <SchedulerEventCard
                        :event="item.event"
                        :selected="selectedKeys.includes(item.event.id)"
                        :selection-mode="selectable && selectionMode"
                        :movable="!locked && !(selectable && selectionMode)"
                        :disabled="disabled"
                        compact
                        managed-pointer
                        @pointer-start="
                          (pointer, resize, finished) =>
                            timelinePointer.begin(
                              pointer,
                              item.event,
                              resize,
                              resource.id,
                              finished,
                            )
                        "
                        @select="selectEvent"
                        @drag-start="
                          (event, resize) =>
                            startDrag(event, resize, resource.id)
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
                      :class="[
                        n('timeline-event'),
                        n('drag-preview'),
                        n('event'),
                      ]"
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
              </template>
            </SchedulerTimelineRows>
          </div>
          <div v-else-if="mode === 'agenda'" :class="n('agenda')">
            <template v-for="day in days" :key="schedulerDateKey(day)">
              <section v-if="eventsOn(day).length" :class="n('agenda-day')">
                <h3>{{ dayLabel(day) }}</h3>
                <SchedulerEventCard
                  v-for="event in eventsOn(day)"
                  :key="event.id"
                  :event="event"
                  :selected="selectedKeys.includes(event.id)"
                  :selection-mode="selectable && selectionMode"
                  :movable="!locked && !(selectable && selectionMode)"
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
            <slot v-if="!days.some((day) => eventsOn(day).length)" name="empty"
              ><CEmpty :description="messages.empty"
            /></slot>
          </div>
          <slot v-else name="empty"
            ><CEmpty :description="messages.noResources"
          /></slot>
        </template>
        <SchedulerDependencies
          v-if="mode === 'resource-timeline' && dependencies.length"
          :host="viewport"
          :dependencies="dependencies"
          :events="visibleEvents"
        />
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
      :resource-dimensions="resourceDimensions"
      :show-assignment-details="showAssignmentDetails"
      :request-resources="requestResources"
      :readonly="readonly || disabled || loading || !!editorEvent.readonly"
      :pending="pending"
      :error="error"
      :error-message="error ? messages.errors[error.code] : undefined"
      :messages="messages"
      @update:open="editorOpen = $event"
      @save="saveEditor"
      @duplicate="duplicateEvent(editorEvent.id)"
      @remove="removeEditor"
      @resource-error="resourceError"
    >
      <template v-if="$slots.editor" #default="slotProps"
        ><slot name="editor" v-bind="slotProps"
      /></template>
    </SchedulerEditor>
    <Teleport to="body">
      <div
        v-if="timelineGhost"
        :class="[n('event'), n('drag-ghost')]"
        :style="{
          position: 'fixed',
          left: `${timelineGhost.left}px`,
          top: `${timelineGhost.top}px`,
          width: `${timelineGhost.width}px`,
          height: `${timelineGhost.height}px`,
          pointerEvents: 'none',
        }"
        aria-hidden="true"
        inert
      >
        {{ timelineGhost.title }}
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, nextTick } from "vue";
import { isValidSchedulerHiddenDays } from "./core/visible-days";
import { useTimelinePointer } from "./use-timeline-pointer";
import { useSchedulerNow } from "./use-now";
import { projectSchedulerDrag } from "./drag";
import type { SchedulerResize } from "./drag";
import CProgress from "../progress";
import { getSchedulerVisibleDays } from "./core/visible-days";
import SchedulerMonthView from "./components/SchedulerMonthView.vue";
import CButton from "../button";
import CCheckbox from "../checkbox";
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
import SchedulerEventCard from "./components/SchedulerEvent.vue";
import SchedulerDependencies from "./components/SchedulerDependencies.vue";
import SchedulerTimelineRows from "./components/SchedulerTimelineRows.vue";
import SchedulerTimeGrid from "./components/SchedulerTimeGrid.vue";
import SchedulerEditor from "./components/SchedulerEditor.vue";
import SchedulerResourceSelect from "./components/SchedulerResourceSelect.vue";
import {
  createSchedulerResourceRows,
  moveSchedulerResourceRow,
  getSchedulerResourceSummary,
  getSchedulerCellDate,
  getSchedulerAvailabilityIssues,
  filterSchedulerEventsByResources,
  duplicateSchedulerEvent,
  moveSchedulerEvent,
  createSchedulerTimeAxis,
  groupSchedulerResources,
  schedulerDate,
  schedulerDateKey,
  schedulerDay,
  getSchedulerRange,
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
  toolbar(props: {
    date: Date;
    mode: SchedulerMode;
    navigate: (direction: number) => void;
    create: () => void;
  }): unknown;
  "column-background"(props: {
    date: Date;
    resource?: SchedulerResource;
  }): unknown;
  sidebar(props: {
    startDrag: (template: SchedulerEventTemplate, event: DragEvent) => void;
    cancelDrag: () => void;
    disabled: boolean;
    unscheduled: SchedulerEvent[];
  }): unknown;
  "sidebar-extra"(props: {
    startDrag: (template: SchedulerEventTemplate, event: DragEvent) => void;
    cancelDrag: () => void;
    disabled: boolean;
  }): unknown;
  event(props: { event: SchedulerEvent }): unknown;
  "resource-header"(props: {
    resource?: SchedulerResource;
    resources?: SchedulerResource[];
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
const {
  value,
  mode,
  date,
  pending,
  warnings,
  error,
  locked,
  setMode,
  setDate,
  commit,
  transaction,
  undo,
  redo,
  canUndo,
  canRedo,
} = useScheduler(props, emit, resourceStore.get, () => messages.value.untitled);
const selectionMode = ref(false);
const localSelected = ref([...props.defaultSelectedKeys]);
const selectedKeys = computed(() =>
  [...new Set(props.selectedKeys ?? localSelected.value)].filter((id) =>
    value.value.some((event) => event.id === id),
  ),
);
const selectedEvents = computed(() =>
  value.value.filter((event) => selectedKeys.value.includes(event.id)),
);
const batchResource = ref<string>();
function setSelected(keys: string[]) {
  if (props.disabled || pending.value) return;
  const next = [...new Set(keys)];
  if (props.selectedKeys === undefined) localSelected.value = next;
  emit("update:selectedKeys", next);
}
async function batchMove() {
  const changes = selectedEvents.value.map((event) => ({
    type: "move" as const,
    event:
      event.start == null
        ? event
        : moveSchedulerEvent(event, addSchedulerDays(event.start, 1)),
  }));
  if (selectedEvents.value.some((event) => event.start == null)) {
    error.value = new SchedulerError(
      "invalid-event",
      "Unscheduled events have no date to move",
    );
    return;
  }
  await transaction(changes);
}
async function batchAssign() {
  if (!batchResource.value) return;
  await transaction(
    selectedEvents.value.map((event) => ({
      type: "update",
      event: {
        ...cloneSchedulerEvent(event),
        resourceIds: [
          ...new Set([...(event.resourceIds ?? []), batchResource.value!]),
        ],
      },
    })),
  );
}
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
const durationOr = (value: number | undefined, fallback: number) =>
  Number.isInteger(value) && value! > 0 ? value! : fallback;
const slotMinutes = computed(() =>
  Math.min(1440, durationOr(props.slotDuration, safeStep.value)),
);
const snapMinutes = computed(() =>
  Math.min(1440, durationOr(props.snapDuration, safeStep.value)),
);
const defaultMinutes = computed(() =>
  durationOr(props.defaultDuration, safeStep.value),
);
const monthLimit = computed(() => durationOr(props.monthEventLimit, 3));
const localZoom = ref(props.defaultZoom);
const zoom = computed(() => {
  const value = props.zoom ?? localZoom.value;
  return Number.isFinite(value) ? Math.max(0.5, Math.min(4, value)) : 1;
});
function setZoom(value: number) {
  if (props.disabled) return;
  if (props.zoom === undefined)
    localZoom.value = Math.max(0.5, Math.min(4, value));
  emit("update:zoom", Math.max(0.5, Math.min(4, value)));
  clearDrag();
}
watch(zoom, async (next, previous) => {
  const target =
    root.value?.querySelector<HTMLElement>(".c-scheduler__virtual-rows") ??
    viewport.value;
  if (!target) return;
  const width =
    parseFloat(
      getComputedStyle(root.value!).getPropertyValue(
        "--c-scheduler-resource-width",
      ),
    ) || 0;
  const left =
    width +
    ((target.scrollLeft + target.clientWidth / 2 - width) * next) / previous -
    target.clientWidth / 2;
  await nextTick();
  target.scrollLeft = Math.max(0, left);
  target.dispatchEvent(new Event("scroll"));
});
const dateHeaders = computed(() => {
  const groups: { key: string; label: string; count: number }[] = [];
  for (const cell of timelineAxis.value.cells) {
    const key =
      scale.value === "hour"
        ? schedulerDateKey(cell.start)
        : `${cell.start.getFullYear()}-${cell.start.getMonth()}`;
    if (groups[groups.length - 1]?.key === key)
      groups[groups.length - 1].count++;
    else
      groups.push({
        key,
        count: 1,
        label: cell.start.toLocaleDateString(
          locale.value,
          scale.value === "hour"
            ? { year: "numeric", month: "long", day: "numeric" }
            : { year: "numeric", month: "long" },
        ),
      });
  }
  return groups;
});
const localScale = ref(props.defaultScale);
const scale = computed(() => props.scale ?? localScale.value);
function changeScale(next: unknown) {
  if (
    props.disabled ||
    (next !== "hour" && next !== "day") ||
    next === scale.value
  )
    return;
  if (props.scale === undefined) localScale.value = next;
  emit("update:scale", next);
  clearDrag();
}
const localExpanded = ref<string[] | undefined>(
  props.defaultExpandedKeys?.slice(),
);
const crossGrouping = computed(
  () =>
    mode.value === "resource-timeline" &&
    props.resourceGroupDimensions.length >= 2 &&
    new Set(props.resourceGroupDimensions).size ===
      props.resourceGroupDimensions.length &&
    props.resourceGroupDimensions.every((id) =>
      props.resourceDimensions.some((d) => d.id === id),
    ),
);
const crossRows = computed(() =>
  crossGrouping.value
    ? createSchedulerResourceRows(
        props.resources.filter(
          (resource) =>
            !filterIds(resource.dimensionId ?? "").length ||
            filterIds(resource.dimensionId ?? "").includes(resource.id),
        ),
        props.resourceGroupDimensions,
      )
    : [],
);
const rowDirectory = computed(
  () => new Map(crossRows.value.map((row) => [row.key, row])),
);
const timelineResources = computed<SchedulerResource[]>(() =>
  crossGrouping.value
    ? crossRows.value.map((row) => ({
        ...row.resources[row.resources.length - 1],
        id: row.key,
        disabled: row.resources.some((resource) => resource.disabled),
      }))
    : filteredResources.value,
);
function rowIds(id?: string): string[] {
  return id ? (rowDirectory.value.get(id)?.resourceIds ?? [id]) : [];
}
function rowResources(id: string) {
  return (
    rowDirectory.value.get(id)?.resources ??
    [resourceStore.get(id)].filter((r): r is SchedulerResource => !!r)
  );
}
function timelineHeaderResource(id: string) {
  const items = rowResources(id);
  return items[items.length - 1];
}
function rowMatches(event: SchedulerEvent, id: string) {
  return rowIds(id).every((key) => event.resourceIds?.includes(key));
}
function targetDisabled(id?: string) {
  return rowIds(id).some((key) => resourceStore.get(key)?.disabled);
}
const groups = computed(() => {
  if (!crossGrouping.value)
    return groupSchedulerResources(
      filteredResources.value,
      props.resourceGroupBy,
    ).map((group) => ({ ...group, label: group.key }));
  return groupSchedulerResources(
    timelineResources.value,
    (resource) => rowDirectory.value.get(resource.id)!.groupKey,
  ).map((group) => ({
    ...group,
    label: rowDirectory.value.get(group.resources[0].id)!.groupLabel,
  }));
});

const expanded = computed(
  () =>
    props.expandedKeys ??
    localExpanded.value ??
    groups.value.map((group) => group.key),
);
function toggleGroup(key: string) {
  if (props.disabled) return;
  const next = expanded.value.includes(key)
    ? expanded.value.filter((item) => item !== key)
    : [...expanded.value, key];
  if (props.expandedKeys === undefined) localExpanded.value = next;
  emit("update:expandedKeys", next);
  clearDrag();
}
const range = computed(() =>
  getSchedulerRange(
    date.value,
    mode.value === "resource-timeline" && scale.value === "hour"
      ? "day"
      : mode.value,
    props.firstDayOfWeek,
  ),
);
function isUnavailable(start: Date, end: Date, resourceId?: string) {
  return (
    getSchedulerAvailabilityIssues(
      {
        id: "cell",
        title: "",
        start,
        end,
        resourceIds: rowIds(resourceId),
      },
      props,
    ).length > 0
  );
}
const timelineAxis = computed(() =>
  createSchedulerTimeAxis(range.value, scale.value),
);
const hiddenDays = computed(() =>
  ["week", "month", "agenda"].includes(mode.value) &&
  isValidSchedulerHiddenDays(props.hiddenDays)
    ? props.hiddenDays
    : [],
);
const days = computed(() =>
  getSchedulerVisibleDays(range.value, hiddenDays.value),
);
const weekdayCount = computed(() => 7 - new Set(hiddenDays.value).size);
watch(
  () => props.hiddenDays,
  () => clearDrag(),
  { deep: true },
);
watch(
  () => `${+range.value.start}:${+range.value.end}`,
  () =>
    emit("range-change", {
      start: new Date(range.value.start),
      end: new Date(range.value.end),
    }),
  { immediate: true },
);
const viewport = ref<HTMLElement>();
let initialTimeFocused = false;
async function focusInitialTime() {
  if (
    initialTimeFocused ||
    props.initialScrollMinute === undefined ||
    !timeMode.value
  )
    return;
  await nextTick();
  const container = viewport.value;
  const body = container?.querySelector<HTMLElement>(".c-scheduler__time-body");
  const cell = body?.querySelector<HTMLElement>(".c-scheduler__time-cell");
  if (!container || !body || !cell) return;
  const rowHeight =
    cell.getBoundingClientRect().height ||
    parseFloat(
      getComputedStyle(root.value!).getPropertyValue(
        "--c-scheduler-slot-height",
      ),
    ) ||
    36;
  const firstMinute = safeStart.value * 60;
  const lastMinute = safeEnd.value * 60 - slotMinutes.value;
  const minute = Math.max(
    firstMinute,
    Math.min(props.initialScrollMinute, lastMinute),
  );
  container.scrollTop =
    body.getBoundingClientRect().top -
    container.getBoundingClientRect().top +
    container.scrollTop -
    (container.querySelector<HTMLElement>(".c-scheduler__time-header")
      ?.offsetHeight ?? 0) +
    ((minute - firstMinute) / slotMinutes.value) * rowHeight;
  initialTimeFocused = true;
}
async function focusTimeline() {
  await nextTick();
  const container = viewport.value;
  if (!container || mode.value !== "resource-timeline") return;
  if (scale.value === "day") {
    container.scrollLeft = 0;
    return;
  }
  const target = new Date(range.value.start);
  target.setHours(safeStart.value);
  const track = container.querySelector<HTMLElement>(
    ".c-scheduler__timeline-track",
  );
  if (track)
    container.scrollLeft =
      timelineAxis.value.position(target) * track.clientWidth;
}
watch([scale, mode, () => +range.value.start], focusTimeline, {
  flush: "post",
});
const root = ref<HTMLElement>();
const keyboardTargets = [
  ".c-scheduler__event-button",
  ".c-scheduler__time-cell",
  ".c-scheduler__month-more",
  ".c-scheduler__overlap-more",
  ".c-scheduler__month-cell > .c-button",
  ".c-scheduler__all-day[tabindex='0']",
  "button[data-scheduler-date]",
].join(",");
let editorTrigger: HTMLElement | undefined;
let editorTriggerRect: DOMRect | undefined;
function rememberEditorTrigger(event: FocusEvent) {
  if (!(event.target instanceof HTMLElement)) return;
  const target = event.target.closest<HTMLElement>(
    `${keyboardTargets}, .c-scheduler__toolbar button`,
  );
  if (!target) return;
  editorTrigger = target;
  editorTriggerRect = target.getBoundingClientRect();
}
async function restoreEditorFocus() {
  await nextTick();
  if (editorTrigger?.isConnected && !editorTrigger.matches(":disabled")) {
    editorTrigger.focus();
    return;
  }
  const candidates = root.value?.querySelectorAll<HTMLElement>(keyboardTargets);
  let best: { element: HTMLElement; distance: number } | undefined;
  if (editorTriggerRect && candidates)
    for (const element of candidates) {
      if (element.matches(":disabled") || element.hidden) continue;
      const rect = element.getBoundingClientRect();
      const distance =
        Math.abs(rect.left - editorTriggerRect.left) +
        Math.abs(rect.top - editorTriggerRect.top);
      if (!best || distance < best.distance) best = { element, distance };
    }
  (best?.element ?? root.value)?.focus();
}
function navigateKeyboard(event: KeyboardEvent) {
  if (
    !root.value ||
    !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
  )
    return;
  const current =
    event.target instanceof HTMLElement
      ? event.target.closest<HTMLElement>(keyboardTargets)
      : undefined;
  if (!current || !root.value.contains(current)) return;
  const currentRect = current.getBoundingClientRect();
  const origin = {
    x: currentRect.left + currentRect.width / 2,
    y: currentRect.top + currentRect.height / 2,
  };
  const horizontal = event.key === "ArrowLeft" || event.key === "ArrowRight";
  const forward = event.key === "ArrowRight" || event.key === "ArrowDown";
  let best: { element: HTMLElement; score: number } | undefined;
  for (const element of root.value.querySelectorAll<HTMLElement>(
    keyboardTargets,
  )) {
    if (element === current || element.matches(":disabled") || element.hidden)
      continue;
    const rect = element.getBoundingClientRect();
    if (!rect.width && !rect.height) continue;
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const primary = horizontal ? x - origin.x : y - origin.y;
    if ((forward && primary <= 0) || (!forward && primary >= 0)) continue;
    const secondary = horizontal
      ? Math.abs(y - origin.y)
      : Math.abs(x - origin.x);
    const score = Math.abs(primary) + secondary * 2;
    if (!best || score < best.score) best = { element, score };
  }
  if (!best) return;
  event.preventDefault();
  best.element.focus();
}
const query = ref("");
const selectedResources = ref<string[]>([]);
const copyFilters = (filters: import("./core").SchedulerResourceFilters) =>
  Object.fromEntries(
    Object.entries(filters).map(([key, ids]) => [key, [...new Set(ids)]]),
  );
const localFilters = ref(copyFilters(props.defaultResourceFilters));
const dimensionFilters = computed(
  () => props.resourceFilters ?? localFilters.value,
);
const filterIds = (id: string): string[] =>
  Array.isArray(dimensionFilters.value[id]) ? dimensionFilters.value[id] : [];
const localAxisDimension = ref(props.defaultResourceDimension);
const axisDimension = computed(
  () => props.resourceDimension ?? localAxisDimension.value,
);
function setDimensionFilter(dimensionId: string, ids: string[]) {
  if (props.disabled) return;
  const next = {
    ...copyFilters(dimensionFilters.value),
    [dimensionId]: [...new Set(ids)],
  };
  if (props.resourceFilters === undefined)
    localFilters.value = copyFilters(next);
  emit("update:resourceFilters", next);
  clearDrag();
}
function setAxisDimension(value: unknown) {
  if (
    props.disabled ||
    typeof value !== "string" ||
    (value && !props.resourceDimensions.some((d) => d.id === value))
  )
    return;
  if (props.resourceDimension === undefined) localAxisDimension.value = value;
  emit("update:resourceDimension", value);
  clearDrag();
}
const dimensionDirectory = computed(() => [
  ...resourceStore.directory.value.values(),
]);
watch([dimensionFilters, axisDimension], () => clearDrag(), { deep: true });
const filteredResources = computed(() =>
  props.resources.filter(
    (resource) =>
      (!axisDimension.value || resource.dimensionId === axisDimension.value) &&
      (props.resourceDimensions.length
        ? !filterIds(resource.dimensionId ?? "").length ||
          filterIds(resource.dimensionId ?? "").includes(resource.id)
        : !selectedResources.value.length ||
          selectedResources.value.includes(resource.id)),
  ),
);
watch([() => props.resourceGroupDimensions, crossRows], () => clearDrag(), {
  deep: true,
});
const filtered = computed(() =>
  filterSchedulerEventsByResources(
    value.value,
    dimensionDirectory.value,
    dimensionFilters.value,
  ).filter(
    (event) =>
      event.title
        .toLocaleLowerCase()
        .includes(query.value.toLocaleLowerCase()) &&
      (props.resourceDimensions.length ||
        !selectedResources.value.length ||
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
watch(timeMode, (visible) => {
  if (visible) void focusInitialTime();
});
watch(
  () => props.initialScrollMinute,
  () => void focusInitialTime(),
);
onMounted(() => {
  void focusTimeline();
  void focusInitialTime();
});
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
    : `${dayLabel(days.value[0] ?? range.value.start)}${days.value.length > 1 ? ` – ${dayLabel(days.value[days.value.length - 1])}` : ""}`,
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
const timelineLayoutVersion = computed(() =>
  JSON.stringify([range.value, scale.value, visibleEvents.value]),
);
const timelineLayout = computed(() => {
  const eventIndex = new Map<string, SchedulerEvent[]>();
  for (const event of visibleEvents.value) {
    for (const id of new Set(event.resourceIds ?? [])) {
      const items = eventIndex.get(id) ?? [];
      items.push(event);
      eventIndex.set(id, items);
    }
  }
  const rows = rowDirectory.value;
  const currentRange = range.value;
  const precision = scale.value === "hour" ? "time" : "day";
  const cache = new Map<string, ReturnType<typeof layoutSchedulerTimeline>>();
  return (id: string) => {
    if (!cache.has(id)) {
      const ids = rows.get(id)?.resourceIds ?? [id];
      const candidates =
        ids
          .map((key) => eventIndex.get(key) ?? [])
          .sort((a, b) => a.length - b.length)[0] ?? [];
      cache.set(
        id,
        layoutSchedulerTimeline(
          candidates.filter((event) =>
            ids.every((key) => event.resourceIds?.includes(key)),
          ),
          currentRange,
          precision,
        ),
      );
    }
    return cache.get(id)!;
  };
});
function timelineItems(id: string) {
  return timelineLayout.value(id).map((item) =>
    scale.value === "hour"
      ? {
          ...item,
          start: timelineAxis.value.position(schedulerDate(item.event.start!)),
          end: timelineAxis.value.position(schedulerDate(item.event.end!)),
        }
      : item,
  );
}
const resourceSummaries = computed(() => {
  const cache = new Map<
    string,
    ReturnType<typeof getSchedulerResourceSummary>
  >();
  const events = value.value,
    currentRange = range.value;
  const directory = new Map(
    dimensionDirectory.value.map((resource) => [resource.id, { ...resource }]),
  );
  return (id: string) => {
    if (!cache.has(id)) {
      const resource = directory.get(id);
      if (resource)
        try {
          cache.set(
            id,
            getSchedulerResourceSummary(events, resource, currentRange),
          );
        } catch {
          return undefined;
        }
    }
    return cache.get(id);
  };
});
function resourcePeak(id: string) {
  return resourceSummaries.value(id)?.peakLoad ?? 0;
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
  setDate(
    navigateSchedulerDate(
      date.value,
      mode.value === "resource-timeline" && scale.value === "hour"
        ? "day"
        : mode.value,
      direction,
    ),
  );
}

const now = useSchedulerNow(() =>
  ["day", "week", "resource-day"].includes(mode.value),
);

const editorOpen = ref(false);
const editorExisting = ref(false);
const editorEvent = ref<SchedulerEvent>();
const announcement = ref("");
let idSequence = 0;
function nextEventId() {
  let id: string;
  do {
    id = `scheduler-${Date.now()}-${++idSequence}`;
  } while (value.value.some((event) => event.id === id));
  return id;
}
function duplicateEvent(id: string): boolean {
  if (locked.value) return false;
  const source = value.value.find((event) => event.id === id);
  if (!source || source.readonly) return false;
  try {
    const draft = duplicateSchedulerEvent(source, nextEventId());
    error.value = undefined;
    if (!props.editable) {
      emit("editor-request", {
        action: "create",
        source: "duplicate",
        event: draft,
        readonly: false,
      });
    } else {
      editorExisting.value = false;
      editorEvent.value = draft;
      editorOpen.value = true;
    }
    return true;
  } catch (cause) {
    error.value =
      cause instanceof SchedulerError
        ? cause
        : new SchedulerError("invalid-event", "Unable to duplicate event");
    return false;
  }
}
function selectEvent(event: SchedulerEvent) {
  if (props.disabled || pending.value) return;
  if (props.selectable && selectionMode.value) {
    setSelected(
      selectedKeys.value.includes(event.id)
        ? selectedKeys.value.filter((id) => id !== event.id)
        : [...selectedKeys.value, event.id],
    );
    return;
  }
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
function createRange(start: Date, end: Date, resourceId?: string) {
  createEvent(start, resourceId, false, {
    title: "",
    duration: (+end - +start) / 60000,
  });
}
function createEvent(
  at: Date,
  resourceId?: string,
  allDay = false,
  template?: SchedulerEventTemplate,
  source: "toolbar" | "cell" | "drop" = "cell",
) {
  if (locked.value || targetDisabled(resourceId)) return;
  if (source === "cell")
    emit("cell-click", {
      date: new Date(at),
      resourceId: crossGrouping.value ? undefined : resourceId,
      ...(crossGrouping.value ? { resourceIds: [...rowIds(resourceId)] } : {}),
    });
  error.value = undefined;
  const start = new Date(at);
  if (
    !template &&
    start.getHours() === 0 &&
    start.getMinutes() === 0 &&
    !allDay &&
    !(mode.value === "resource-timeline" && scale.value === "hour")
  )
    start.setHours(safeStart.value);
  const draft: SchedulerEvent = {
    id: nextEventId(),
    title: template?.title ?? "",
    description: template?.description,
    color: template?.color,
    accentColor: template?.accentColor,
    backgroundColor: template?.backgroundColor,
    backgroundPattern: template?.backgroundPattern,
    metadata: template?.metadata ? { ...template.metadata } : undefined,
    start: allDay ? schedulerDateKey(start) : start.toISOString(),
    end: allDay
      ? schedulerDateKey(addSchedulerDays(start, 1))
      : new Date(
          +start + (template?.duration ?? defaultMinutes.value) * 60000,
        ).toISOString(),
    allDay,
    resourceIds: resourceId
      ? [...rowIds(resourceId)]
      : [...(template?.resourceIds ?? [])],
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
  (open, previous) => {
    if (open)
      editorSnapshot = JSON.stringify(
        value.value.find((event) => event.id === editorEvent.value?.id),
      );
    else if (previous) {
      error.value = undefined;
      void restoreEditorFocus();
    }
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
const visualPreview = computed(() => {
  const event =
    dragPreview.value ??
    (!editorExisting.value && editorOpen.value
      ? editorEvent.value
      : props.previewEvent);
  return event
    ? {
        ...event,
        title: event.title.trim() || messages.value.newEvent,
      }
    : undefined;
});
const previewTime = computed(() => {
  const event = visualPreview.value;
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
function timelinePreview(id: string) {
  const preview = visualPreview.value;
  if (!preview || !rowMatches(preview, id)) return [];
  return layoutSchedulerTimeline(
    [
      ...visibleEvents.value.filter(
        (event) => event.id !== preview.id && rowMatches(event, id),
      ),
      preview,
    ],
    range.value,
    scale.value === "hour" ? "time" : "day",
  )
    .filter((item) => item.event.id === preview.id)
    .map((item) =>
      scale.value === "hour"
        ? {
            ...item,
            start: timelineAxis.value.position(
              schedulerDate(item.event.start!),
            ),
            end: timelineAxis.value.position(schedulerDate(item.event.end!)),
          }
        : item,
    );
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
function pointDate(target: HTMLElement, x: number, y: number) {
  const at = new Date(target.dataset.schedulerDate!);
  const duration = Number(target.dataset.schedulerDuration);
  if (!duration || target.dataset.schedulerAllDay === "true") return at;
  const rect = target.getBoundingClientRect();
  const horizontal = target.dataset.schedulerAxis === "horizontal";
  const extent = horizontal ? rect.width : rect.height;
  const fraction =
    extent > 0 ? (horizontal ? x - rect.left : y - rect.top) / extent : 0;
  return getSchedulerCellDate(at, duration, fraction, snapMinutes.value);
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
    pointDate(target, x, y),
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
  if (!drag || locked.value || targetDisabled(resourceId)) return;
  if (
    !crossGrouping.value &&
    drag.resourceId &&
    resourceId &&
    resourceStore.get(drag.resourceId)?.dimensionId !==
      resourceStore.get(resourceId)?.dimensionId
  )
    return;
  const event = value.value.find((event) => event.id === drag!.id);
  if (!event || event.readonly || JSON.stringify(event) !== drag.snapshot)
    return;
  const fromRow = drag.resourceId
    ? rowDirectory.value.get(drag.resourceId)
    : undefined;
  const toRow = resourceId ? rowDirectory.value.get(resourceId) : undefined;
  if (crossGrouping.value && (!fromRow || !toRow)) return;
  const projected = projectSchedulerDrag(
    event,
    at,
    drag.resize,
    snapMinutes.value,
    safeStart.value,
    crossGrouping.value ? undefined : drag.resourceId,
    crossGrouping.value ? undefined : resourceId,
    allDay,
  );
  if (projected && fromRow && toRow && !drag.resize) {
    if (projected.resourceDetails)
      for (let index = 0; index < fromRow.resourceIds.length; index++) {
        const from = fromRow.resourceIds[index],
          to = toRow.resourceIds[index];
        if (from !== to && projected.resourceDetails[from]) {
          if (!event.resourceIds?.includes(to))
            projected.resourceDetails[to] = {
              ...projected.resourceDetails[from],
            };
          delete projected.resourceDetails[from];
        }
      }
    projected.resourceIds = moveSchedulerResourceRow(
      event.resourceIds ?? [],
      fromRow,
      toRow,
    );
  }
  return projected;
}
function dropPoint(x: number, y: number) {
  const target = pointTarget(x, y);
  if (!target) {
    clearDrag();
    return;
  }
  const allDay = target.dataset.schedulerAllDay;
  void dropEvent(
    pointDate(target, x, y),
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
        +new Date(+start + (template.duration ?? defaultMinutes.value) * 60000),
      )
    )
      return;
    createEvent(start, resourceId, isAllDay, template, "drop");
    return;
  }
  if (!operation || locked.value || targetDisabled(resourceId)) return;
  if (!next) return;
  if (await commit({ type: operation.resize ? "resize" : "move", event: next }))
    announcement.value = messages.value.saved;
}
const timelinePointer = useTimelinePointer({
  locked: () => locked.value,
  start: startDrag,
  move: previewPoint,
  drop: dropPoint,
  end: clearDrag,
});
const timelineGhost = timelinePointer.ghost;
watch([locked, mode, date, dimensionFilters], () => timelinePointer.cancel(), {
  deep: true,
});
// Commands let an application use its own editor without depending on Vue internals.
defineExpose({
  change: (change: SchedulerChange) => commit(change),
  goToDate: (value: Date) => setDate(value),
  duplicateEvent,
  transaction,
  undo,
  redo,
  canUndo,
  canRedo,
});
</script>
