<template>
  <c-space wrap>
    <c-checkbox v-model="mondayFirst">周一作为一周开始</c-checkbox>
    <c-checkbox v-model="showWeek">显示周序号</c-checkbox>
  </c-space>
  <c-calendar
    v-model="value"
    class="calendar-demo"
    :day-start-of-week="mondayFirst ? 1 : 0"
    :is-week="showWeek"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref(new Date());
const mondayFirst = ref(true);
const showWeek = ref(false);
</script>

<style scoped>
.calendar-demo {
  margin-top: 12px;
}
</style>
