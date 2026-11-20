<template>
  <c-space wrap>
    <c-button @click="selectToday">选择今天</c-button>
    <c-button @click="selectTomorrow">选择明天</c-button>
  </c-space>
  <c-calendar
    v-model="value"
    class="calendar-demo"
    @change="record('selected', $event)"
    @panel-change="record('panel', $event)"
  />
  <c-alert status="info">{{ lastAction }}</c-alert>
</template>

<script lang="ts" setup>
import { getLocale } from "@cedar-design/ui-vue";
import { computed, ref } from "vue";

const value = ref(new Date());
const demoCopy = {
  today: "选择今天",
  tomorrow: "选择明天",
  hint: "可点击日期或切换月份",
  selected: "选择了",
  panel: "面板切换到",
  external: "外部设置为"
};
const action = ref<"selected" | "panel" | "external">();
const actionDate = ref(new Date());
const lastAction = computed(() =>
  action.value
    ? `${demoCopy[action.value]} ${action.value === "panel" ? formatMonth(actionDate.value) : format(actionDate.value)}`
    : demoCopy.hint,
);
function record(kind: "selected" | "panel" | "external", date: Date) {
  action.value = kind;
  actionDate.value = date;
}
const format = (date: Date) => date.toLocaleDateString(getLocale());
const formatMonth = (date: Date) =>
  date.toLocaleDateString(getLocale(), { year: "numeric", month: "long" });
function selectToday() {
  value.value = new Date();
  record("external", value.value);
}
function selectTomorrow() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  value.value = tomorrow;
  record("external", value.value);
}
</script>

<style scoped>
.calendar-demo {
  margin: 12px 0;
}
</style>
