<template>
  <c-space wrap>
    <c-button @click="selectToday">选择今天</c-button>
    <c-button @click="selectTomorrow">选择明天</c-button>
  </c-space>
  <c-calendar
    v-model="value"
    class="calendar-demo"
    @change="lastAction = `选择了 ${format($event)}`"
    @panel-change="lastAction = `面板切换到 ${formatMonth($event)}`"
  />
  <c-alert status="info">{{ lastAction }}</c-alert>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref(new Date());
const lastAction = ref("可点击日期或切换月份");
const format = (date: Date) => date.toLocaleDateString("zh-CN");
const formatMonth = (date: Date) =>
  date.toLocaleDateString("zh-CN", { year: "numeric", month: "long" });
function selectToday() {
  value.value = new Date();
  lastAction.value = `外部设置为 ${format(value.value)}`;
}
function selectTomorrow() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  value.value = tomorrow;
  lastAction.value = `外部设置为 ${format(value.value)}`;
}
</script>

<style scoped>
.calendar-demo {
  margin: 12px 0;
}
</style>
