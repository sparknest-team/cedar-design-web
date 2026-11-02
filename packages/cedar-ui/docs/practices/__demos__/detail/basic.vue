<script setup>
import { computed, ref } from "vue";
import { usePracticeData, projectError } from "../shared/usePracticeData.js";
import { usePracticeNavigation } from "../shared/usePracticeNavigation.js";
const data = usePracticeData();
const {
  workspace,
  rows,
  projects,
  favorites,
  activity,
  savedDraft,
  latest,
  query,
  applied,
  current,
  selected,
  notice,
  statusOptions,
  categories,
  categoryOptions,
  priorities,
  filtered,
  pageRows,
  done,
  budget,
  overdue,
  active,
  detailOpen,
  createOpen,
  archiveOpen,
  editingKey,
  draft,
  fresh,
  search,
  clear,
  show,
  finish,
  finishSelected,
  startCreate,
  startEdit,
  create,
  requestArchive,
  confirmArchive,
  restore,
  favorite,
  reset,
  exportCsv,
} = data;
const { route, go, href } = usePracticeNavigation();
const required = [
  { required: true, whitespace: true, message: "此项不能为空" },
];
const money = (value) =>
  Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 2 });
const project = computed(() =>
  rows.value.find(
    (row) => row.key === (route.query.project || projects.value[0]?.key),
  ),
);
const noteText = ref("");
const projectEvents = computed(() =>
  activity.value.filter((event) => event.project === project.value?.key),
);
const info = computed(() =>
  project.value
    ? [
        { label: "项目编号", value: project.value.key },
        { label: "负责人", value: project.value.owner },
        { label: "业务类型", value: project.value.category },
        { label: "优先级", value: project.value.priority },
        { label: "开始日期", value: project.value.startDate },
        { label: "截止日期", value: project.value.dueDate },
        { label: "预算", value: money(project.value.budget) + " 元" },
        {
          label: "当前状态",
          value: project.value.archived ? "已归档" : project.value.status,
        },
      ]
    : [],
);
function addNote() {
  if (workspace.note(project.value, noteText.value)) {
    noteText.value = "";
    notice.value = "跟进已添加到项目记录和工作台动态。";
  }
}
const timeLabel = (value) => new Date(value).toLocaleString("zh-CN");
</script>
<template>
  <c-space class="practice-page" direction="column" block size="lg"
    ><c-result
      v-if="!project"
      status="404"
      title="项目不存在"
      subtitle="该项目可能已重置或编号无效"
      ><template #extra
        ><c-button @click="go('list')">返回项目列表</c-button></template
      ></c-result
    ><template v-else
      ><c-page-header
        title="项目业务详情"
        subtitle="项目资料、任务清单和操作记录在所有页面同步"
        :show-back="false"
        ><template #extra
          ><c-space wrap
            ><c-button v-if="!project.archived" @click="startEdit(project)"
              >编辑项目</c-button
            ><c-button
              v-if="!project.archived"
              :disabled="project.status === '已完成'"
              status="primary"
              @click="finish(project)"
              >完成交付</c-button
            ><c-button v-if="project.archived" @click="restore(project)"
              >恢复项目</c-button
            ><c-button v-else @click="requestArchive([project.key])"
              >归档项目</c-button
            ></c-space
          ></template
        ></c-page-header
      ><c-space wrap size="sm"
        ><c-button @click="go('dashboard')">工作台</c-button
        ><c-button @click="go('list')">项目列表</c-button
        ><c-button @click="go('card')">卡片视图</c-button
        ><c-button status="primary" @click="go('form')"
          >创建申请</c-button
        ></c-space
      ><c-card
        :title="project.name"
        :subtitle="project.key"
        :description="project.description"
        ><template #title-action
          ><c-tag>{{
            project.archived ? "已归档" : project.status
          }}</c-tag></template
        ><c-progress :percent="project.progress" /><c-steps
          :model-value="
            project.status === '已完成'
              ? 3
              : project.status === '进行中'
                ? 2
                : 1
          "
          ><c-step>项目创建</c-step><c-step>执行交付</c-step
          ><c-step>交付完成</c-step></c-steps
        ></c-card
      ><c-tabs default-value="info"
        ><c-tab-pane name="info" title="基本资料"
          ><c-card title="项目资料"
            ><c-descriptions
              :data="info"
              :column="{ xs: 1, md: 2 }"
              bordered /></c-card></c-tab-pane
        ><c-tab-pane name="tasks" title="任务清单"
          ><c-card title="交付任务"
            ><c-space direction="column" block
              ><c-checkbox
                v-for="task in project.tasks"
                :key="task.key"
                :model-value="task.done"
                :disabled="project.archived"
                @update:model-value="
                  (checked) => workspace.toggleTask(project, task.key, checked)
                "
                >{{ task.title }}</c-checkbox
              ></c-space
            ></c-card
          ></c-tab-pane
        ><c-tab-pane name="history" title="操作记录"
          ><c-card title="项目动态"
            ><c-space direction="column" block
              ><c-typography-paragraph
                v-for="event in projectEvents"
                :key="event.key"
                >{{ timeLabel(event.at) }} ·
                {{ event.text }}</c-typography-paragraph
              ><c-empty
                v-if="!projectEvents.length"
                description="项目尚无新增记录" /></c-space></c-card></c-tab-pane></c-tabs
      ><c-card title="新增跟进"
        ><c-form layout="vertical"
          ><c-form-item label="跟进内容"
            ><c-textarea
              v-model="noteText"
              placeholder="记录当前进展、风险或下一步计划"
              :disabled="project.archived"
              edit-mode="direct" /></c-form-item></c-form
        ><c-button
          status="primary"
          :disabled="!noteText.trim() || project.archived"
          @click="addNote"
          >添加跟进</c-button
        ></c-card
      ><c-typography-paragraph role="status" aria-live="polite">{{
        notice
      }}</c-typography-paragraph
      ><c-dialog
        v-model:open="createOpen"
        :title="editingKey ? '编辑项目资料' : '快速创建项目'"
        :footer="false"
        :unmount-on-close="true"
        ><c-form :model="draft" layout="vertical" @submit="create"
          ><c-grid :cols="{ xs: 1, md: 2 }" :col-gap="16" :row-gap="8"
            ><c-grid-item
              ><c-form-item
                label="项目名称"
                field="name"
                :rules="required"
                feedback
                ><c-input
                  v-model="draft.name"
                  edit-mode="direct"
                  placeholder="项目名称" /></c-form-item></c-grid-item
            ><c-grid-item
              ><c-form-item
                label="负责人"
                field="owner"
                :rules="required"
                feedback
                ><c-input
                  v-model="draft.owner"
                  edit-mode="direct"
                  placeholder="负责人" /></c-form-item></c-grid-item
            ><c-grid-item
              ><c-form-item label="业务类型" field="category"
                ><c-select
                  v-model="draft.category"
                  :options="categories"
                  edit-mode="direct" /></c-form-item></c-grid-item
            ><c-grid-item
              ><c-form-item label="优先级" field="priority"
                ><c-select
                  v-model="draft.priority"
                  :options="priorities"
                  edit-mode="direct" /></c-form-item></c-grid-item
            ><c-grid-item
              ><c-form-item label="开始日期" field="startDate"
                ><c-date
                  v-model="draft.startDate"
                  value-format="YYYY-MM-DD"
                  edit-mode="direct" /></c-form-item></c-grid-item
            ><c-grid-item
              ><c-form-item label="截止日期" field="dueDate"
                ><c-date
                  v-model="draft.dueDate"
                  value-format="YYYY-MM-DD"
                  edit-mode="direct" /></c-form-item></c-grid-item
            ><c-grid-item
              ><c-form-item label="项目预算（元）" field="budget"
                ><c-input-number
                  v-model="draft.budget"
                  :min="0"
                  :precision="2"
                  edit-mode="direct" /></c-form-item></c-grid-item></c-grid
          ><c-form-item label="项目说明" field="description"
            ><c-textarea
              v-model="draft.description"
              edit-mode="direct"
              placeholder="项目目标、交付物和验收要求" /></c-form-item
          ><c-space wrap
            ><c-button html-type="submit" status="primary">{{
              editingKey ? "保存项目" : "创建项目"
            }}</c-button
            ><c-button @click="createOpen = false">取消</c-button></c-space
          ><c-typography-paragraph role="status" aria-live="polite">{{
            notice
          }}</c-typography-paragraph></c-form
        ></c-dialog
      ><c-dialog v-model:open="archiveOpen" title="确认归档项目" :footer="false"
        ><c-space direction="column" block
          ><c-typography-paragraph
            >将归档所选项目。项目、任务和操作记录会保留，可在“已归档”筛选中恢复。</c-typography-paragraph
          ><c-space wrap
            ><c-button status="warning" @click="confirmArchive"
              >确认归档</c-button
            ><c-button @click="archiveOpen = false">取消归档</c-button></c-space
          ></c-space
        ></c-dialog
      ></template
    ></c-space
  >
</template>
<style scoped>
.practice-page {
  width: 100%;
  min-width: 0;
}
.practice-page :deep(.c-grid-item) {
  min-width: 0;
}
.practice-page :deep(.c-grid) {
  width: 100%;
}
.practice-page :deep(.c-space__item) {
  min-width: 0;
}
</style>
