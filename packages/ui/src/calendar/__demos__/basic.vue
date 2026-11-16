<template>
  <c-calendar v-model="value" />
  <p class="demo-result">{{ demoCopy.selection }}：{{ format(value) }}</p>
</template>

<script lang="ts" setup>
import { useDemoLocale, formatDemoDate } from "../../__demos__/locale";
import { ref } from "vue";

const demoCopy = useDemoLocale("calendarBasic");
const value = ref(new Date());
const format = (value: Date) =>
  formatDemoDate(value, {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
</script>

<style scoped>
.demo-result {
  margin: 12px 0 0;
  color: var(--c-color-text-2);
}
</style>
