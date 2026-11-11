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
const category = ref("全部");
const visible = computed(() =>
  projects.value.filter(
    (row) => category.value === "全部" || row.category === category.value,
  ),
);
const completed = computed(
  () => visible.value.filter((row) => row.status === "已完成").length,
);
const completion = computed(() =>
  visible.value.length
    ? Math.round((completed.value / visible.value.length) * 100)
    : 0,
);
const totalBudget = computed(() =>
  visible.value.reduce((sum, row) => sum + row.budget, 0),
);
const visibleEvents = computed(() =>
  activity.value
    .filter(
      (event) =>
        !event.project ||
        visible.value.some((row) => row.key === event.project),
    )
    .slice(0, 6),
);
const pending = computed(() =>
  visible.value.filter((row) => row.status !== "已完成").slice(0, 4),
);
const timeLabel = (value) => new Date(value).toLocaleString("zh-CN");
</script>
<template>
  <c-space class="practice-page" direction="column" block size="lg"
    ><c-page-header
      title="团队工作台"
      subtitle="一份项目数据驱动指标、待办、交付与操作动态"
      :show-back="false"
      ><template #extra
        ><c-space wrap
          ><c-button @click="reset">重置工作区</c-button></c-space
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
    ><c-card title="业务概况"
      ><c-form layout="vertical"
        ><c-form-item label="业务范围"
          ><c-select
            v-model="category"
            :options="categoryOptions"
            edit-mode="direct" /></c-form-item></c-form
      ><c-grid :cols="{ xs: 2, md: 4 }" :col-gap="16" :row-gap="16"
        ><c-grid-item
          ><c-statistic
            title="范围内项目"
            :value="visible.length" /></c-grid-item
        ><c-grid-item
          ><c-statistic title="已交付项目" :value="completed" /></c-grid-item
        ><c-grid-item
          ><c-statistic
            title="预算（元）"
            :value="totalBudget"
            show-group-separator /></c-grid-item
        ><c-grid-item
          ><c-statistic
            title="交付完成率"
            :value="completion"
            suffix="%" /></c-grid-item></c-grid></c-card
    ><c-grid :cols="{ xs: 1, lg: 2 }" :col-gap="16" :row-gap="16"
      ><c-grid-item
        ><c-card title="我的待办"
          ><c-space direction="column" block
            ><c-card
              v-for="row in pending"
              :key="row.key"
              :title="row.name"
              :description="row.owner + ' · 截止 ' + row.dueDate"
              ><c-progress :percent="row.progress" /><template #footer
                ><c-space wrap
                  ><c-button @click="go('detail', { project: row.key })"
                    >处理项目</c-button
                  ><c-button @click="finish(row)">完成交付</c-button></c-space
                ></template
              ></c-card
            ><c-empty
              v-if="!pending.length"
              description="该范围内的项目均已交付" /></c-space></c-card></c-grid-item
      ><c-grid-item
        ><c-space direction="column" block
          ><c-card title="类型交付分布"
            ><c-space direction="column" block
              ><c-space
                v-for="item in categories"
                :key="item.value"
                direction="column"
                block
                ><c-typography-paragraph
                  >{{ item.label }} ·
                  {{
                    projects.filter(
                      (row) =>
                        row.category === item.value && row.status === "已完成",
                    ).length
                  }}
                  /
                  {{
                    projects.filter((row) => row.category === item.value).length
                  }}
                  已完成</c-typography-paragraph
                ><c-progress
                  :percent="
                    projects.filter((row) => row.category === item.value).length
                      ? Math.round(
                          (projects.filter(
                            (row) =>
                              row.category === item.value &&
                              row.status === '已完成',
                          ).length /
                            projects.filter(
                              (row) => row.category === item.value,
                            ).length) *
                            100,
                        )
                      : 0
                  " /></c-space></c-space></c-card
          ><c-card title="最近动态"
            ><c-space direction="column" block
              ><c-typography-paragraph
                v-for="event in visibleEvents"
                :key="event.key"
                >{{ timeLabel(event.at) }} ·
                {{ event.text }}</c-typography-paragraph
              ><c-empty
                v-if="!visibleEvents.length"
                description="暂无操作记录" /></c-space></c-card></c-space></c-grid-item></c-grid
    ><c-typography-paragraph role="status" aria-live="polite">{{
      notice
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
