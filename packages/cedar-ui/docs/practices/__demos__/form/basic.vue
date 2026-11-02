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
const step = ref(0);
const failNext = ref(false);
const committed = ref(null);
const formMessage = ref(
  savedDraft.value
    ? "存在可恢复草稿，可先恢复继续办理。"
    : "填写基础信息后，设置计划与预算，再核对提交。",
);
function next({ errors } = {}) {
  if (errors) {
    formMessage.value = "请补全必填项。";
    return;
  }
  if (step.value === 1 && projectError(draft.value)) {
    formMessage.value = projectError(draft.value);
    return;
  }
  step.value++;
  formMessage.value =
    step.value === 2
      ? "请确认全部资料，返回修改不会生成项目。"
      : "设置项目执行计划。";
}
function saveDraft() {
  savedDraft.value = JSON.parse(JSON.stringify(draft.value));
  formMessage.value = "草稿已保存，切换页面或刷新后仍可恢复。";
}
function restoreDraft() {
  if (savedDraft.value) {
    draft.value = JSON.parse(JSON.stringify(savedDraft.value));
    step.value = 0;
    formMessage.value = "已恢复上次保存的草稿。";
  }
}
function submit() {
  if (failNext.value) {
    failNext.value = false;
    formMessage.value = "模拟保存失败，草稿已保留，请重试提交。";
    return;
  }
  const row = workspace.save(draft.value);
  if (!row) {
    formMessage.value = projectError(draft.value);
    return;
  }
  committed.value = row;
  savedDraft.value = null;
  step.value = 3;
  formMessage.value = "项目已创建，列表、卡片和工作台已同步。";
}
function resetForm() {
  step.value = 0;
  draft.value = fresh();
  committed.value = null;
  failNext.value = false;
  formMessage.value = "已清空当前表单，工作区里的项目不受影响。";
}
</script>
<template>
  <c-space class="practice-page" direction="column" block size="lg"
    ><c-page-header
      title="创建项目申请"
      subtitle="基础资料 → 计划预算 → 核对提交 → 办理完成"
      :show-back="false"
      ><template #extra
        ><c-space wrap
          ><c-button @click="resetForm">清空当前表单</c-button></c-space
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
      ><c-steps :model-value="step + 1"
        ><c-step>基础资料</c-step><c-step>计划预算</c-step
        ><c-step>核对提交</c-step><c-step>办理完成</c-step></c-steps
      ></c-card
    ><c-card v-if="step === 0" title="基础资料"
      ><c-form :model="draft" layout="vertical" @submit="next"
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
                edit-mode="direct" /></c-form-item></c-grid-item></c-grid
        ><c-space wrap
          ><c-button html-type="submit" status="primary"
            >下一步：计划预算</c-button
          ><c-button @click="saveDraft">保存草稿</c-button
          ><c-button :disabled="!savedDraft" @click="restoreDraft"
            >恢复草稿</c-button
          ></c-space
        ></c-form
      ></c-card
    ><c-card v-else-if="step === 1" title="计划与预算"
      ><c-form :model="draft" layout="vertical" @submit="next"
        ><c-grid :cols="{ xs: 1, md: 2 }" :col-gap="16" :row-gap="8"
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
          ><c-button html-type="submit" status="primary"
            >下一步：核对提交</c-button
          ><c-button @click="step = 0">上一步</c-button
          ><c-button @click="saveDraft">保存草稿</c-button></c-space
        ></c-form
      ></c-card
    ><c-card v-else-if="step === 2" title="核对项目申请"
      ><c-space direction="column" block
        ><c-typography-paragraph
          >项目：{{ draft.name }} · 负责人：{{
            draft.owner
          }}</c-typography-paragraph
        ><c-typography-paragraph
          >类型：{{ draft.category }} · 优先级：{{ draft.priority }} · 预算：{{
            money(draft.budget)
          }}
          元</c-typography-paragraph
        ><c-typography-paragraph
          >执行计划：{{ draft.startDate || "待安排" }} 至
          {{ draft.dueDate || "待安排" }}</c-typography-paragraph
        ><c-typography-paragraph
          >项目说明：{{ draft.description || "未填写" }}</c-typography-paragraph
        ><c-checkbox v-model="failNext">模拟本次提交失败</c-checkbox
        ><c-space wrap
          ><c-button status="primary" @click="submit">{{
            formMessage.includes("失败") ? "重试提交" : "确认创建项目"
          }}</c-button
          ><c-button @click="step = 0">返回修改</c-button></c-space
        ></c-space
      ></c-card
    ><c-card v-else
      ><c-result
        status="success"
        title="项目已创建"
        :subtitle="committed.key + ' · ' + committed.name"
        ><template #extra
          ><c-space wrap
            ><c-button
              status="primary"
              @click="go('detail', { project: committed.key })"
              >查看项目详情</c-button
            ><c-button @click="go('list')">返回项目列表</c-button
            ><c-button @click="resetForm">继续创建</c-button></c-space
          ></template
        ></c-result
      ></c-card
    ><c-typography-paragraph role="status" aria-live="polite">{{
      formMessage
    }}</c-typography-paragraph></c-space
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
