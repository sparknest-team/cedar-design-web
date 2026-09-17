<template>
  <c-calendar v-model="value">
    <template #header="{ year, month }">
      <span class="custom-title">{{ year }} 年 {{ month }} 月工作日历</span>
    </template>
  </c-calendar>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref(new Date());
</script>

<style scoped>
.custom-title {
  margin: 0 8px;
  color: var(--c-color-text-1);
  font-weight: 600;
}
</style>
