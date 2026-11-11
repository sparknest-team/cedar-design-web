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
</script>
<template>
  <c-space class="practice-page" direction="column" block size="lg"
    ><c-page-header
      title="项目协作空间"
      subtitle="按业务类型发现项目，收藏与编辑在列表同步"
      :show-back="false"
      ><template #extra
        ><c-space wrap
          ><c-button status="primary" @click="startCreate"
            >快速新建</c-button
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
    ><c-typography-paragraph
      >本地演示工作区 ·
      各页面共享数据，刷新保留本次会话。归档可恢复，重置会还原整个工作区。</c-typography-paragraph
    ><c-card title="项目筛选"
      ><c-form :model="query" layout="vertical" @submit="search"
        ><c-grid :cols="{ xs: 1, md: 3 }" :col-gap="16" :row-gap="8"
          ><c-grid-item
            ><c-form-item label="关键词"
              ><c-input
                v-model="query.keyword"
                placeholder="项目、编号、负责人或类型"
                edit-mode="direct"
                clearable /></c-form-item></c-grid-item
          ><c-grid-item
            ><c-form-item label="项目状态"
              ><c-select
                v-model="query.status"
                :options="statusOptions"
                edit-mode="direct" /></c-form-item></c-grid-item
          ><c-grid-item
            ><c-form-item label="业务类型"
              ><c-select
                v-model="query.category"
                :options="categoryOptions"
                edit-mode="direct" /></c-form-item></c-grid-item></c-grid
        ><c-space wrap
          ><c-checkbox v-model="query.archived" edit-mode="direct"
            >查看已归档项目</c-checkbox
          ><c-checkbox v-model="query.favorites" edit-mode="direct"
            >仅看收藏</c-checkbox
          ><c-button html-type="submit" status="primary">查询项目</c-button
          ><c-button @click="clear">清空筛选</c-button></c-space
        ></c-form
      ></c-card
    ><c-typography-paragraph
      >共 {{ filtered.length }} 个项目 · 已收藏
      {{ favorites.length }} 个</c-typography-paragraph
    ><c-grid :cols="{ xs: 1, md: 2, xl: 3 }" :col-gap="16" :row-gap="16"
      ><c-grid-item v-for="row in filtered" :key="row.key"
        ><c-card
          :title="row.name"
          :subtitle="row.key"
          :description="row.owner + ' · ' + row.category"
          ><template #title-action
            ><c-tag :status="row.status === '已完成' ? 'success' : 'primary'">{{
              row.status
            }}</c-tag></template
          ><c-space direction="column" block
            ><c-typography-paragraph>{{
              row.description
            }}</c-typography-paragraph
            ><c-progress :percent="row.progress" /><c-tag
              >截止 {{ row.dueDate || "待安排" }} · 预算
              {{ money(row.budget) }} 元</c-tag
            ></c-space
          ><template #footer
            ><c-space wrap
              ><c-button
                status="primary"
                @click="go('detail', { project: row.key })"
                >进入项目</c-button
              ><c-button
                :aria-pressed="favorites.includes(row.key)"
                @click="favorite(row)"
                >{{
                  favorites.includes(row.key) ? "取消收藏" : "收藏项目"
                }}</c-button
              ><c-button v-if="!row.archived" @click="startEdit(row)"
                >编辑资料</c-button
              ><c-button v-else @click="restore(row)"
                >恢复项目</c-button
              ></c-space
            ></template
          ></c-card
        ></c-grid-item
      ></c-grid
    ><c-empty
      v-if="!filtered.length"
      description="暂无匹配项目，调整条件或新建项目"
    /><c-typography-paragraph role="status" aria-live="polite">{{
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
