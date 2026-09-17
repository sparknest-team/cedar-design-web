<template>
  <c-space wrap>
    <c-button
      :status="mode === 'month' ? 'primary' : 'default'"
      @click="mode = 'month'"
      >月视图</c-button
    >
    <c-button
      :status="mode === 'year' ? 'primary' : 'default'"
      @click="mode = 'year'"
      >年视图</c-button
    >
  </c-space>
  <c-calendar
    v-model="value"
    class="calendar-demo"
    :mode="mode"
    :modes="['month', 'year']"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref(new Date());
const mode = ref<"month" | "year">("month");
</script>

<style scoped>
.calendar-demo {
  margin-top: 12px;
}
</style>
