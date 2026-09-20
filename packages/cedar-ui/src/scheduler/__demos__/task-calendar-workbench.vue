<template>
  <div
    ref="host"
    class="workbench-shell"
    @pointerdown.capture="captureDrag"
    @dragend="endDrag"
  >
    <nav v-if="navigationOpen" class="workbench-nav" aria-label="应用导航">
      <c-button variant="text">任务日历</c-button>
      <c-button variant="text" @click="navigationOpen = false"
        >收起导航</c-button
      >
    </nav>
    <c-scheduler
      ref="scheduler"
      class="task-calendar-workbench"
      :model-value="events"
      v-model:date="date"
      mode="week"
      show-now-indicator
      :snap-duration="1"
      :modes="['week']"
      :step="60"
      :start-hour="0"
      :end-hour="24"
      :initial-scroll-minute="420"
      :resources="data.resources"
      :event-layout="workbenchLayout"
      :editable="false"
      :readonly="role === 'viewer'"
      :disabled="saving"
      :preview-event="preview"
      :before-change="prepareMove"
      @change="finishMove"
      @change-error="moveError"
      @editor-request="openEditor"
    >
      <template #toolbar="{ navigate, create }">
        <c-space wrap>
          <c-button
            :aria-expanded="navigationOpen"
            @click="navigationOpen = !navigationOpen"
            >导航</c-button
          >
          <c-button aria-label="上一周" :disabled="saving" @click="navigate(-1)"
            >‹</c-button
          >
          <c-popover
            trigger="click"
            placement="bottom-start"
            :open="datePickerOpen"
            @update:open="datePickerOpen = $event"
          >
            <c-button :disabled="saving">{{ weekLabel(date) }}</c-button>
            <template #content
              ><c-date-picker
                :model-value="date"
                value-format="Date"
                @update:model-value="chooseDate"
            /></template>
          </c-popover>
          <c-button aria-label="下一周" :disabled="saving" @click="navigate(1)"
            >›</c-button
          >
          <c-button :disabled="saving" @click="goToday">今天</c-button>
        </c-space>
        <c-button
          status="primary"
          :disabled="saving || role === 'viewer'"
          @click="create"
          >新增出勤单</c-button
        >
      </template>
      <template #sidebar="{ startDrag, cancelDrag, disabled }">
        <div class="workbench-panels">
          <section class="source-panel" aria-label="人员设备选择">
            <strong class="panel-title">人员与设备</strong>
            <c-input
              v-model="query"
              placeholder="搜索人员、账号或设备"
              clearable
              :disabled="saving"
            />
            <div class="panel-scroll source-scroll">
              <c-tree
                :data="sourceTree"
                :checked-keys="sourceKeys"
                :expanded-keys="expandedSources"
                checkable
                only-check-leaf
                block-node
                :selectable="false"
                :disabled="saving"
                @update:expanded-keys="expandedSources = $event"
                @check="checkSources"
              >
                <template #title="node">
                  <span
                    v-if="node.resourceId"
                    class="source-object"
                    :data-owner="node.resourceId"
                  >
                    {{ resource(node.resourceId)?.label }}
                    <small v-if="resource(node.resourceId)?.account">{{
                      resource(node.resourceId)?.account
                    }}</small>
                    <span
                      v-if="resource(node.resourceId)?.managers"
                      class="quick-actions"
                    >
                      <c-button
                        v-for="id in resource(node.resourceId)?.managers"
                        :key="id"
                        size="xs"
                        :disabled="saving"
                        :aria-pressed="selected.includes(id)"
                        @click.stop="toggleResource(id)"
                        >{{ resource(id)?.label }}
                        {{ selected.includes(id) ? "−" : "+" }}</c-button
                      >
                    </span>
                  </span>
                  <span v-else>{{ node.title }}</span>
                </template>
              </c-tree>
            </div>
          </section>
          <section class="pending-panel" aria-label="待分配任务">
            <strong
              >待分配任务 <c-tag>{{ pending.length }}</c-tag></strong
            >
            <div class="panel-scroll">
              <c-tree
                :data="pendingTree"
                :checked-keys="pendingKeys"
                :expanded-keys="expandedPending"
                checkable
                only-check-leaf
                block-node
                :selectable="false"
                :disabled="disabled"
                @update:expanded-keys="expandedPending = $event"
                @check="checkPending"
              >
                <template #title="node">
                  <div
                    v-if="node.taskId"
                    class="pending-task"
                    :class="deadlineClass(task(node.taskId))"
                    :draggable="!disabled"
                    @dragstart="beginPending(node.taskId, startDrag, $event)"
                    @dragend="
                      cancelDrag();
                      endDrag();
                    "
                  >
                    <strong>{{ task(node.taskId)?.title }}</strong>
                    <span>{{
                      resource(task(node.taskId)?.deviceId)?.label
                    }}</span>
                    <span>{{ deadlineText(task(node.taskId)) }}</span>
                    <span
                      >{{ task(node.taskId)?.skill }} /
                      {{ task(node.taskId)?.people }} 人 /
                      {{ task(node.taskId)?.minutes }} 分钟</span
                    >
                    <small>{{ task(node.taskId)?.source }}</small>
                  </div>
                  <span v-else>{{ node.title }}</span>
                </template>
              </c-tree>
              <c-empty
                v-if="!pendingTree.length"
                description="暂无待分配任务"
              />
            </div>
          </section>
        </div>
      </template>
      <template #resource-header="{ date: day }">
        {{ day.toLocaleDateString("zh-CN", { weekday: "short" }) }}
        {{ day.getDate() }}
      </template>
      <template #column-background="{ date: day }">
        <div
          v-if="dragDeadline && schedulerDateKey(day) > dragDeadline"
          class="deadline-mask"
          aria-label="晚于任务截止日期"
        />
      </template>
      <template #event="{ event }">
        <div
          class="task-card"
          :data-order-id="event.metadata?.orderId"
          :data-edge="event.metadata?.edge"
          :class="{
            linked: activeOrder === event.metadata?.orderId,
            closed: event.metadata?.closed,
            rest: event.metadata?.kind === 'rest',
          }"
          @mouseenter="hoverOrder = String(event.metadata?.orderId ?? '')"
          @mouseleave="hoverOrder = ''"
          @dragover="allowMerge($event, event)"
          @drop="dropMerge($event, event)"
        >
          <strong>{{ event.title }}</strong>
          <span v-if="event.metadata?.kind !== 'rest'">{{
            event.metadata?.counterpart
          }}</span>
          <span v-if="!event.allDay"
            >{{ time(event.start) }}–{{ time(event.end) }}</span
          >
        </div>
      </template>
    </c-scheduler>
  </div>
  <c-alert
    v-if="notice"
    :status="noticeError ? 'danger' : 'warning'"
    class="workbench-notice"
    role="status"
    >{{ notice }}</c-alert
  >
  <c-space wrap class="workbench-test-controls">
    <span>联调演示</span>
    <c-select
      v-model="role"
      :options="roles"
      :disabled="saving"
      style="width: 170px"
    />
    <c-checkbox v-model="rejectSave" :disabled="saving"
      >模拟保存失败</c-checkbox
    >
    <c-checkbox v-model="conflict" :disabled="saving">模拟版本冲突</c-checkbox>
    <c-button :disabled="saving" @click="reload">重新加载</c-button>
    <c-popover trigger="click" title="最近提交的业务 DTO" placement="top">
      <c-button>提交数据</c-button>
      <template #content>
        <pre class="payload">{{ lastPayload || "尚未提交" }}</pre>
      </template>
    </c-popover>
  </c-space>
  <c-dialog
    v-model:open="editorOpen"
    :title="
      draft?.kind === 'rest'
        ? '休息安排'
        : draft?.version
          ? '出勤单详情'
          : '创建出勤单'
    "
    :footer="false"
    :closable="!saving"
    :overlay-closable="!saving"
    :esc-to-close="!saving"
    @update:open="onEditorVisibility"
  >
    <template v-if="draft">
      <c-alert v-if="editorError" status="danger">{{ editorError }}</c-alert>
      <template v-if="draft.kind === 'rest'">
        <p>{{ resource(draft.personId)?.label }}</p>
        <p>{{ format(draft.start) }} – {{ format(draft.end) }}</p>
        <c-button @click="closeEditor">关闭</c-button>
      </template>
      <c-form v-else :model="draft" layout="vertical" @submit="saveDraft()">
        <c-space
          ><c-tag>{{ statuses[draft.status] }}</c-tag
          ><span>{{ draft.id }}</span></c-space
        >
        <c-form-item label="执行人"
          ><c-select
            v-model="draft.personId"
            :options="personOptions"
            :disabled="readOnly || saving"
        /></c-form-item>
        <c-form-item label="开始"
          ><c-date
            :model-value="new Date(draft.start)"
            value-format="Date"
            :show-time="!draft.allDay"
            :disabled="readOnly || saving"
            @update:model-value="setStart"
        /></c-form-item>
        <c-form-item v-if="draft.allDay" label="结束日期（不含）"
          ><c-date
            :model-value="new Date(draft.end)"
            value-format="Date"
            :disabled="readOnly || saving"
            @update:model-value="setAllDayEnd"
        /></c-form-item>
        <p v-else>计划结束：{{ format(calculatedEnd) }}</p>
        <c-form-item label="任务">
          <div class="detail-task-list">
            <div
              v-for="(entry, index) in draftTasks"
              :key="entry.id"
              class="detail-task"
              :data-task-id="entry.id"
            >
              <WorkbenchPunches
                :data="data"
                :task="entry"
                :start="taskStart(index)"
              />
              <div>
                <c-tag>{{ entry.source }}</c-tag> ·
                {{ resource(entry.deviceId)?.label }}
              </div>
              <c-button variant="text" @click="workOrderTask = entry"
                >工单详情</c-button
              >
              <c-button
                v-if="!readOnly"
                variant="text"
                :disabled="saving"
                @click="removeDraftTask(entry.id)"
                >移出任务</c-button
              >
            </div>
            <c-select
              v-if="!readOnly"
              v-model="addTaskId"
              :options="availableTaskOptions"
              placeholder="选择同设备待办任务"
              :disabled="saving"
              @update:model-value="addTask"
            />
            <c-button
              v-if="!readOnly"
              :disabled="saving || !selectedTasks.length"
              @click="addSelected"
              >加入已勾选任务（{{ selectedTasks.length }}）</c-button
            >
          </div>
        </c-form-item>
        <template v-if="draft.status === 'closed'">
          <p v-for="record in linkedPunches" :key="record.id">
            实际：{{ format(record.start) }} – {{ format(record.end) }}
          </p>
        </template>
        <template v-if="closing && !readOnly">
          <c-divider />
          <c-form-item label="关联打卡">
            <div class="detail-task-list">
              <c-checkbox
                v-for="record in eligiblePunches"
                :key="record.id"
                :model-value="draft.punchIds.includes(record.id)"
                :disabled="saving"
                @update:model-value="togglePunch(record.id, $event)"
                >{{ format(record.start) }} – {{ time(record.end) }}</c-checkbox
              >
              <c-empty
                v-if="!eligiblePunches.length"
                description="暂无匹配打卡，可手动补录"
              />
            </div>
          </c-form-item>
          <c-checkbox v-model="manualPunch" :disabled="saving"
            >手动补录打卡</c-checkbox
          >
          <c-form-item v-if="manualPunch" label="登录"
            ><c-date
              v-model="punchStart"
              value-format="Date"
              show-time
              :disabled="saving"
          /></c-form-item>
          <c-form-item v-if="manualPunch" label="注销"
            ><c-date
              v-model="punchEnd"
              value-format="Date"
              show-time
              :disabled="saving"
          /></c-form-item>
        </template>
        <c-space wrap>
          <c-button
            v-if="!readOnly"
            html-type="submit"
            status="primary"
            :loading="saving"
            >{{ closing ? "确认关单" : "保存" }}</c-button
          >
          <c-button
            v-if="!readOnly && draft.version && !closing"
            :disabled="saving || !draft.taskIds.length"
            @click="closing = true"
            >关联打卡并关单</c-button
          >
          <c-button
            v-if="!readOnly && draft.version"
            status="danger"
            :disabled="saving"
            @click="saveDraft(true)"
            >删除出勤单</c-button
          >
          <c-button :disabled="saving" @click="closeEditor">{{
            readOnly ? "关闭" : "取消"
          }}</c-button>
        </c-space>
      </c-form>
    </template>
  </c-dialog>
  <c-dialog
    :open="!!workOrderTask"
    title="工单详情"
    :footer="false"
    @update:open="!$event && (workOrderTask = undefined)"
  >
    <template v-if="workOrderTask"
      ><h3>{{ workOrderTask.id }} · {{ workOrderTask.title }}</h3>
      <p>{{ resource(workOrderTask.deviceId)?.label }}</p>
      <p>
        {{ workOrderTask.skill }} / {{ workOrderTask.people }} 人 /
        {{ workOrderTask.minutes }} 分钟
      </p>
      <p>
        来源：{{ workOrderTask.source }}；截止：{{ workOrderTask.deadline }}
      </p></template
    >
  </c-dialog>
</template>
<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import type {
  SchedulerEvent,
  SchedulerEventTemplate,
  SchedulerEditorRequest,
  SchedulerChangeContext,
} from "../index";
import { schedulerDateKey } from "../core";
import type { TreeNodeData } from "../../tree";
import WorkbenchPunches from "./workbench-punches.vue";
import {
  createWorkbenchApi,
  createWorkbenchMock,
  copyData,
  moveWorkbenchOrder,
  orderEnd,
  orderTasks,
  pendingWorkbenchTasks,
  projectWorkbench,
  remainingDays,
  weekLabel,
  workbenchLayout,
  type WorkbenchOrder,
  type WorkbenchTask,
  type WorkbenchPunch,
  type SaveResult,
} from "./workbench-model";

const today = new Date();
const api = createWorkbenchApi(createWorkbenchMock(today));
const data = ref(api.load());
const date = ref(new Date(today));
const role = ref<"dispatcher" | "viewer">("dispatcher");
const roles = [
  { value: "dispatcher", label: "调度员（可编辑）" },
  { value: "viewer", label: "查看者（只读）" },
];
const statuses = {
  planned: "待出发",
  active: "进行中",
  submit: "待提交",
  review: "待审核",
  closed: "已完成",
};
const rejectSave = ref(false),
  conflict = ref(false),
  saving = ref(false),
  navigationOpen = ref(false),
  datePickerOpen = ref(false);
const query = ref(""),
  recent = ref<string[]>(["li", "station-a"]),
  selected = ref<string[]>(["me"]);
const selectedTasks = ref<string[]>([]),
  draggingTasks = ref<string[]>([]),
  dragDeadline = ref<string>();
const notice = ref(""),
  noticeError = ref(false),
  editorError = ref(""),
  lastPayload = ref("");
const editorOpen = ref(false),
  draft = ref<WorkbenchOrder>(),
  hoverOrder = ref("");
const closing = ref(false),
  manualPunch = ref(false),
  punchStart = ref<Date>(),
  punchEnd = ref<Date>();
const addTaskId = ref<string>(),
  workOrderTask = ref<WorkbenchTask>();
const host = ref<HTMLElement>();
const scheduler = ref();
let opener: HTMLElement | undefined;
let sequence = 0;
let staged: (() => SaveResult) | undefined;
const events = computed(() => projectWorkbench(data.value, selected.value));
const pending = computed(() => pendingWorkbenchTasks(data.value, today));
const resource = (id: unknown) =>
  data.value.resources.find((item) => item.id === id);
const task = (id: unknown) => data.value.tasks.find((item) => item.id === id);
const draftTasks = computed(() =>
  draft.value ? orderTasks(draft.value, data.value) : [],
);
const calculatedEnd = computed(() =>
  draft.value ? orderEnd(draft.value.start, draftTasks.value) : "",
);
const readOnly = computed(
  () =>
    role.value === "viewer" ||
    draft.value?.kind === "rest" ||
    draft.value?.status === "closed",
);
const activeOrder = computed(() =>
  editorOpen.value ? draft.value?.id : hoverOrder.value,
);
const personOptions = computed(() =>
  data.value.resources
    .filter((r) => r.dimensionId === "person")
    .map((r) => ({ value: r.id, label: r.label })),
);
const availableTaskOptions = computed(() =>
  pending.value
    .filter(
      (entry) =>
        !draft.value?.taskIds.includes(entry.id) &&
        (!draftTasks.value.length ||
          entry.deviceId === draftTasks.value[0].deviceId),
    )
    .map((entry) => ({
      value: entry.id,
      label: `${entry.title} · ${resource(entry.deviceId)?.label}`,
    })),
);
const eligiblePunches = computed(() =>
  data.value.punches.filter(
    (record) =>
      record.personId === draft.value?.personId &&
      record.deviceId === draftTasks.value[0]?.deviceId,
  ),
);
const linkedPunches = computed(() =>
  data.value.punches.filter((record) =>
    draft.value?.punchIds.includes(record.id),
  ),
);
const preview = computed<SchedulerEvent | undefined>(() =>
  editorOpen.value && draft.value?.version === 0
    ? {
        id: "workbench-draft",
        title:
          draftTasks.value.map((entry) => entry.title).join("、") || "新出勤单",
        start: draft.value.start,
        end: draft.value.allDay
          ? draft.value.end
          : draft.value.taskIds.length
            ? calculatedEnd.value
            : new Date(+new Date(draft.value.start) + 3600000).toISOString(),
        allDay: draft.value.allDay,
        color: resource(draft.value.personId)?.color,
        backgroundColor: resource(draft.value.personId)?.background,
      }
    : undefined,
);

interface Node extends TreeNodeData {
  resourceId?: string;
  taskId?: string;
  children?: Node[];
}
const group = (key: string, title: string, ids: string[]): Node => ({
  key,
  title,
  children: ids.map((id) => ({
    key: `${key}/${id}`,
    title: resource(id)?.label,
    resourceId: id,
  })),
});
const sourceTree = computed<Node[]>(() => [
  ...(query.value.trim()
    ? [
        group(
          "search",
          "搜索结果",
          data.value.resources
            .filter((r) =>
              `${r.label} ${r.account ?? ""}`
                .toLowerCase()
                .includes(query.value.trim().toLowerCase()),
            )
            .map((r) => r.id),
        ),
      ]
    : []),
  group("self", "自己", ["me"]),
  group("stations", "我的站", ["station-a", "station-b"]),
  group("favorites", "收藏", ["station-a", "station-c"]),
  group("recent", "最近使用", recent.value),
]);
const expandedSources = ref<Array<string | number>>([
  "self",
  "stations",
  "favorites",
  "recent",
  "search",
]);
const sourceKeys = computed(() =>
  sourceTree.value
    .flatMap((node) => node.children ?? [])
    .filter((node) => selected.value.includes(node.resourceId!))
    .map((node) => node.key!),
);
function checkSources(
  _keys: Array<string | number>,
  context: { checked?: boolean; node?: Node },
) {
  if (saving.value || !context.node) return;
  const ids = context.node.resourceId
    ? [context.node.resourceId]
    : (context.node.children ?? []).map((node) => node.resourceId!);
  selected.value = context.checked
    ? [...new Set([...selected.value, ...ids])]
    : selected.value.filter((id) => !ids.includes(id));
  if (context.checked)
    recent.value = [...new Set([...ids, ...recent.value])].slice(0, 12);
}
function toggleResource(id: string) {
  selected.value = selected.value.includes(id)
    ? selected.value.filter((value) => value !== id)
    : [...selected.value, id];
  recent.value = [...new Set([id, ...recent.value])].slice(0, 12);
}
const pendingTree = computed<Node[]>(() =>
  selected.value.flatMap((id) => {
    const owner = resource(id);
    const ids =
      owner?.dimensionId === "device"
        ? [id]
        : data.value.resources
            .filter((r) => r.managers?.includes(id))
            .map((r) => r.id);
    const tasks = pending.value.filter((entry) => ids.includes(entry.deviceId));
    return tasks.length
      ? [
          {
            key: `pending/${id}`,
            title: owner?.label,
            children: tasks.map((entry) => ({
              key: `pending/${id}/${entry.id}`,
              title: entry.title,
              taskId: entry.id,
            })),
          },
        ]
      : [];
  }),
);
const expandedPending = ref<Array<string | number>>(
  data.value.resources.map((r) => `pending/${r.id}`),
);
const pendingKeys = computed(() =>
  pendingTree.value
    .flatMap((node) => node.children ?? [])
    .filter((node) => selectedTasks.value.includes(node.taskId!))
    .map((node) => node.key!),
);
function checkPending(
  _keys: Array<string | number>,
  context: { checked?: boolean; node?: Node },
) {
  if (!context.node) return;
  const ids = context.node.taskId
    ? [context.node.taskId]
    : (context.node.children ?? []).map((node) => node.taskId!);
  const next = context.checked
    ? [...new Set([...selectedTasks.value, ...ids])]
    : selectedTasks.value.filter((id) => !ids.includes(id));
  if (new Set(next.map((id) => task(id)?.deviceId)).size > 1)
    return showNotice("请勾选同一设备的任务", true);
  selectedTasks.value = next;
}
const deadlineClass = (entry?: WorkbenchTask) => ({
  overdue: entry && remainingDays(entry, today) < 0,
  urgent:
    entry &&
    remainingDays(entry, today) >= 0 &&
    remainingDays(entry, today) <= 3,
});
const deadlineText = (entry?: WorkbenchTask) => {
  if (!entry) return "";
  const days = remainingDays(entry, today);
  return days < 0
    ? `逾期 ${-days} 天`
    : days === 0
      ? "今天截止"
      : `剩 ${days} 天`;
};
function beginPending(
  id: string,
  startDrag: (template: SchedulerEventTemplate, event: DragEvent) => void,
  event: DragEvent,
) {
  const ids = selectedTasks.value.includes(id)
    ? [...selectedTasks.value]
    : [id];
  draggingTasks.value = ids;
  dragDeadline.value = ids
    .map((key) => task(key)?.deadline ?? "")
    .filter(Boolean)
    .sort()[0];
  startDrag(
    {
      title: ids.map((key) => task(key)?.title).join("、"),
      duration: ids.reduce((sum, key) => sum + (task(key)?.minutes ?? 0), 0),
      metadata: { taskIds: ids },
    },
    event,
  );
}
function captureDrag(event: PointerEvent) {
  const node = (event.target as HTMLElement).closest<HTMLElement>(
    "[data-order-id]",
  );
  const order = data.value.orders.find(
    (item) => item.id === node?.dataset.orderId,
  );
  if (
    order &&
    order.kind === "work" &&
    order.status !== "closed" &&
    role.value !== "viewer"
  )
    dragDeadline.value = orderTasks(order, data.value)
      .map((entry) => entry.deadline)
      .sort()[0];
}
function endDrag() {
  dragDeadline.value = undefined;
  draggingTasks.value = [];
}
function allowMerge(event: DragEvent, target: SchedulerEvent) {
  if (
    draggingTasks.value.length &&
    !target.readonly &&
    !saving.value &&
    role.value !== "viewer"
  )
    event.preventDefault();
}
async function dropMerge(event: DragEvent, target: SchedulerEvent) {
  if (!draggingTasks.value.length) return;
  event.preventDefault();
  event.stopPropagation();
  const ids = [...draggingTasks.value];
  endDrag();
  const current = data.value.orders.find(
    (order) => order.id === target.metadata?.orderId,
  );
  if (!current || target.readonly || saving.value || role.value === "viewer")
    return showNotice("当前记录不可合并", true);
  const next = copyData(current);
  next.taskIds = [...new Set([...next.taskIds, ...ids])];
  if (!next.allDay)
    next.end = orderEnd(next.start, orderTasks(next, data.value));
  await persist(next);
}
function openEditor(request: SchedulerEditorRequest) {
  editorError.value = "";
  closing.value = false;
  manualPunch.value = false;
  addTaskId.value = undefined;
  opener =
    document.activeElement instanceof HTMLElement
      ? document.activeElement
      : undefined;
  if (request.action === "edit") {
    const order = data.value.orders.find(
      (item) => item.id === request.event.metadata?.orderId,
    );
    if (!order) return;
    draft.value = copyData(order);
  } else {
    const templateIds = request.event.metadata?.taskIds;
    const ids = Array.isArray(templateIds)
      ? templateIds.filter((id): id is string => typeof id === "string")
      : [...selectedTasks.value];
    const start = new Date(request.event.start ?? date.value);
    if (request.source === "toolbar") start.setHours(9, 0, 0, 0);
    else if (request.source === "cell") start.setMinutes(0, 0, 0);
    draft.value = {
      id: `ATT-${Date.now()}-${++sequence}`,
      version: 0,
      personId:
        selected.value.find((id) => resource(id)?.dimensionId === "person") ??
        "me",
      taskIds: ids,
      start: start.toISOString(),
      end: request.event.allDay
        ? new Date(request.event.end!).toISOString()
        : orderEnd(
            start.toISOString(),
            ids.map(task).filter((entry): entry is WorkbenchTask => !!entry),
          ),
      allDay: request.event.allDay,
      kind: "work",
      status: "planned",
      punchIds: [],
    };
  }
  punchStart.value = new Date(draft.value.start);
  punchEnd.value = new Date(draft.value.end);
  editorOpen.value = true;
  endDrag();
}
function setStart(value: Date | undefined) {
  if (draft.value && value && Number.isFinite(+value))
    draft.value.start = value.toISOString();
}
function setAllDayEnd(value: Date | undefined) {
  if (draft.value && value && Number.isFinite(+value))
    draft.value.end = value.toISOString();
}
function addTask(id: string) {
  if (draft.value && id)
    draft.value.taskIds = [...new Set([...draft.value.taskIds, id])];
  addTaskId.value = undefined;
}
function addSelected() {
  if (!draft.value) return;
  const ids = [...new Set([...draft.value.taskIds, ...selectedTasks.value])];
  if (new Set(ids.map((id) => task(id)?.deviceId)).size > 1) {
    editorError.value = "一张出勤单只能安排同一设备的任务";
    return;
  }
  draft.value.taskIds = ids;
}
function removeDraftTask(id: string) {
  if (draft.value)
    draft.value.taskIds = draft.value.taskIds.filter((value) => value !== id);
}
function taskStart(index: number) {
  return draft.value
    ? orderEnd(draft.value.start, draftTasks.value.slice(0, index))
    : "";
}
function togglePunch(id: string, checked: boolean) {
  if (draft.value)
    draft.value.punchIds = checked
      ? [...new Set([...draft.value.punchIds, id])]
      : draft.value.punchIds.filter((key) => key !== id);
}
function options() {
  const value = {
    role: role.value,
    fail: rejectSave.value,
    conflict: conflict.value,
  };
  conflict.value = false;
  return value;
}
function accept(result: SaveResult) {
  data.value = result.data;
  selectedTasks.value = selectedTasks.value.filter((id) =>
    pending.value.some((entry) => entry.id === id),
  );
  showNotice(result.warnings.join("；") || "已保存", false);
}
async function persist(
  value: WorkbenchOrder,
  remove = false,
  manual?: WorkbenchPunch,
) {
  saving.value = true;
  editorError.value = "";
  lastPayload.value = JSON.stringify(
    {
      operation: remove ? "remove" : "save",
      order: value,
      manualPunch: manual,
    },
    null,
    2,
  );
  try {
    accept(await api.save(value, options(), remove, manual));
    return true;
  } catch (error) {
    editorError.value = error instanceof Error ? error.message : "保存失败";
    showNotice(editorError.value, true);
    return false;
  } finally {
    saving.value = false;
  }
}
async function saveDraft(remove = false) {
  if (!draft.value || saving.value || readOnly.value) return;
  const value = copyData(draft.value);
  const dissolve = !!value.version && !value.taskIds.length;
  if (!value.allDay && value.taskIds.length)
    value.end = orderEnd(value.start, orderTasks(value, data.value));
  let manual: WorkbenchPunch | undefined;
  if (closing.value && !remove && !dissolve) {
    value.status = "closed";
    if (manualPunch.value) {
      if (
        !punchStart.value ||
        !punchEnd.value ||
        !Number.isFinite(+punchStart.value) ||
        !Number.isFinite(+punchEnd.value)
      ) {
        editorError.value = "请填写登录和注销时间";
        return;
      }
      manual = {
        id: `punch-${Date.now()}-${++sequence}`,
        personId: value.personId,
        deviceId: draftTasks.value[0]?.deviceId ?? "",
        start: punchStart.value.toISOString(),
        end: punchEnd.value.toISOString(),
      };
      value.punchIds = [...value.punchIds, manual.id];
    }
  }
  if (await persist(value, remove || dissolve, manual)) closeEditor();
}
async function prepareMove(context: SchedulerChangeContext) {
  if (!context.previous || context.type !== "move")
    throw new Error("请在出勤单详情中修改");
  if (context.event.allDay !== context.previous.allDay)
    throw new Error("请在详情中调整全天安排");
  const next = moveWorkbenchOrder(data.value, context.event, context.previous);
  lastPayload.value = JSON.stringify(
    { operation: "move", order: next },
    null,
    2,
  );
  staged = await api.prepare(next, options());
  return true;
}
function finishMove() {
  try {
    if (staged) accept(staged());
  } catch (error) {
    moveError(error);
  } finally {
    staged = undefined;
    endDrag();
  }
}
function moveError(error: unknown) {
  staged = undefined;
  showNotice(error instanceof Error ? error.message : "保存失败", true);
  endDrag();
}
function showNotice(message: string, error: boolean) {
  notice.value = message;
  noticeError.value = error;
}
function reload() {
  data.value = api.load();
  if (draft.value?.version)
    draft.value = copyData(
      data.value.orders.find((item) => item.id === draft.value?.id) ??
        draft.value,
    );
  editorError.value = "";
  showNotice("已重新加载", false);
}
async function onEditorVisibility(open: boolean) {
  if (open) return;
  hoverOrder.value = "";
  await nextTick();
  if (opener?.isConnected) opener.focus({ preventScroll: true });
}
function closeEditor() {
  editorOpen.value = false;
  void onEditorVisibility(false);
}
async function chooseDate(value: Date | undefined) {
  if (value && Number.isFinite(+value)) date.value = value;
  datePickerOpen.value = false;
}
async function goToday() {
  date.value = new Date();
  await nextTick();
  const container =
    host.value?.querySelector<HTMLElement>(".c-scheduler__main");
  const heading = [
    ...(host.value?.querySelectorAll<HTMLElement>(
      "[data-scheduler-heading-date]",
    ) ?? []),
  ].find(
    (element) =>
      schedulerDateKey(element.dataset.schedulerHeadingDate!) ===
      schedulerDateKey(new Date()),
  );
  const cell = host.value?.querySelector<HTMLElement>(
    ".c-scheduler__time-cell",
  );
  if (container && cell) {
    container.scrollTop = (cell.getBoundingClientRect().height || 36) * 7;
    if (heading) container.scrollLeft = Math.max(0, heading.offsetLeft - 64);
  }
}
const time = (value: SchedulerEvent["start"]) =>
  value == null
    ? ""
    : new Date(value).toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
const format = (value: string) =>
  new Date(value).toLocaleString("zh-CN", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
const cancelWithEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape") endDrag();
};
onMounted(() => {
  window.addEventListener("pointerup", endDrag);
  window.addEventListener("pointercancel", endDrag);
  window.addEventListener("blur", endDrag);
  window.addEventListener("keydown", cancelWithEscape);
});
onBeforeUnmount(() => {
  window.removeEventListener("pointerup", endDrag);
  window.removeEventListener("pointercancel", endDrag);
  window.removeEventListener("blur", endDrag);
  window.removeEventListener("keydown", cancelWithEscape);
});
watch(query, () => {
  if (!expandedSources.value.includes("search"))
    expandedSources.value.push("search");
});
</script>
<style scoped>
.workbench-shell {
  display: flex;
  min-width: 0;
}
.workbench-nav {
  flex: 0 0 88px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--c-color-border);
}
.task-calendar-workbench {
  min-width: 0;
  flex: 1;
  --c-scheduler-sidebar-width: 420px;
  --c-scheduler-max-height: 650px;
  --c-scheduler-min-height: 650px;
  --c-scheduler-column-min-width: 110px;
  --c-scheduler-gap: 8px;
  --c-scheduler-padding: 10px;
}
.task-calendar-workbench :deep(.c-scheduler__sidebar) {
  padding: 0;
  overflow: hidden;
}
.workbench-panels {
  display: grid;
  grid-template-columns: 190px minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  height: 650px;
  min-height: 0;
}
.source-panel,
.pending-panel {
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 12px;
}
.source-panel {
  border-right: 1px solid var(--c-color-border);
}
.panel-scroll {
  min-height: 0;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}
.source-object {
  color: var(--c-color-text-1);
  position: relative;
  display: block;
  white-space: nowrap;
}
.source-object small {
  display: block;
  font-size: 11px;
  color: var(--c-color-text-3);
}
.quick-actions {
  display: none;
  position: absolute;
  right: 0;
  bottom: 100%;
  z-index: 5;
  background: var(--c-color-bg-2);
  box-shadow: 0 2px 8px #0002;
}
.source-object:hover .quick-actions,
.source-object:focus-within .quick-actions,
.source-scroll :deep(.c-tree-node:focus-within) .quick-actions {
  display: flex;
}
.source-scroll :deep(.c-tree-node:has([data-owner="me"])) {
  --c-checkbox-control-color-checked: #466caa;
}
.source-scroll :deep(.c-tree-node:has([data-owner="li"])) {
  --c-checkbox-control-color-checked: #ad813c;
}
.source-scroll :deep(.c-tree-node:has([data-owner="zhang"])) {
  --c-checkbox-control-color-checked: #4b8d70;
}
.source-scroll :deep(.c-tree-node:has([data-owner="station-a"])) {
  --c-checkbox-control-color-checked: #8670ac;
}
.source-scroll :deep(.c-tree-node:has([data-owner="station-b"])) {
  --c-checkbox-control-color-checked: #a1657e;
}
.source-scroll :deep(.c-tree-node:has([data-owner="station-c"])) {
  --c-checkbox-control-color-checked: #458c98;
}
.pending-task {
  color: var(--c-color-text-2);
  display: flex;
  flex-direction: column;
  white-space: normal;
  font-size: 12px;
  line-height: 1.5;
  padding: 8px 0;
  cursor: grab;
}
.pending-task.overdue {
  color: #b8434b;
}
.pending-task.urgent {
  color: #a7782d;
}
.task-card {
  color: var(--c-scheduler-event-color);
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: left;
}
.task-card > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  flex-shrink: 0;
  line-height: 16px;
}
.task-card.closed::after {
  content: "";
  position: absolute;
  inset: 0;
  background: #ffffff66;
  pointer-events: none;
}
.task-calendar-workbench :deep(.c-scheduler__event) {
  border: 1px solid var(--c-scheduler-event-color);
  border-left-width: 4px;
  color: var(--c-scheduler-event-color);
  margin-bottom: 0;
}
.task-calendar-workbench :deep(.c-scheduler__event--static) {
  border-left-width: 1px;
}
.task-calendar-workbench :deep(.c-scheduler__positioned-event) {
  padding-top: 0;
  padding-bottom: 0;
}
.task-calendar-workbench :deep(.c-scheduler__event:has([data-edge="first"])) {
  border-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.task-calendar-workbench :deep(.c-scheduler__event:has([data-edge="middle"])) {
  border-block: 0;
  border-radius: 0;
}
.task-calendar-workbench :deep(.c-scheduler__event:has([data-edge="last"])) {
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.task-calendar-workbench :deep(.c-scheduler__event:has(.linked)) {
  box-shadow: inset 0 0 0 2px currentColor;
}
.task-calendar-workbench :deep(.c-scheduler__event:has(.rest)) {
  border-style: dashed;
}
.task-calendar-workbench :deep(.c-scheduler__event-button) {
  height: 100%;
  align-items: flex-start;
  padding-block: 0;
}
.deadline-mask {
  position: absolute;
  inset: 0;
  background: #66708526;
  pointer-events: none;
}
.detail-task-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}
.detail-task {
  padding: 8px 0;
  border-bottom: 1px solid var(--c-color-border);
}
.workbench-test-controls,
.workbench-notice {
  margin-top: 12px;
}
.payload {
  max-width: 480px;
  max-height: 300px;
  overflow: auto;
}

.task-calendar-workbench :deep(.c-scheduler__toolbar) {
  padding: 14px 16px;
}
.task-calendar-workbench :deep(.c-scheduler__toolbar .c-button) {
  box-shadow: none;
}
.task-calendar-workbench :deep(.c-scheduler__time-heading) {
  font-weight: 500;
}
.panel-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--c-color-text-1);
}
.panel-scroll {
  scrollbar-width: thin;
  scrollbar-color: var(--c-color-border) transparent;
}
.source-scroll :deep(.c-tree-node-title-text),
.pending-panel :deep(.c-tree-node-title-text) {
  color: var(--c-color-text-2);
}
.pending-task {
  border-bottom: 1px solid var(--c-color-border);
}
.pending-task > small {
  color: var(--c-color-text-3);
}
.pending-task:active {
  cursor: grabbing;
}
.task-card > :first-child {
  font-weight: 600;
}
.task-card > :not(:first-child) {
  opacity: 0.85;
}
.quick-actions {
  border: 1px solid var(--c-color-border);
  border-radius: 6px;
  padding: 4px;
}
.workbench-test-controls {
  padding: 12px 16px;
  background: var(--c-color-fill-1);
  border-radius: 8px;
}
</style>
