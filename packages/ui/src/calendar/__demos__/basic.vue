<template>
  <c-calendar v-model="value" />
  <p class="demo-result">当前选择：{{ format(value) }}</p>
</template>

<script lang="ts" setup>
import { getLocale } from "@cedar-design/ui-vue";
import { ref } from "vue";

const value = ref(new Date());
const format = (value: Date) =>
  value.toLocaleDateString(getLocale(), {
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
