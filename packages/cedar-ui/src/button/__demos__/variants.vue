<script setup lang="ts">
import { ref } from "vue";
const variant = ref("default");
const size = ref("md");
const variants = ["default", "text", "outline", "tonal"];
const sizes = ["xs", "sm", "md", "lg", "xl"];
const statuses = [
  "default",
  "primary",
  "secondary",
  "tertiary",
  "info",
  "success",
  "warning",
  "danger",
];
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <label
        >Variant<c-select
          v-model="variant"
          :clearable="false"
          :options="variants.map((value) => ({ label: value, value }))"
          aria-label="Button variant"
      /></label>
      <label
        >Size<c-select
          v-model="size"
          :clearable="false"
          :options="sizes.map((value) => ({ label: value, value }))"
          aria-label="Button size"
      /></label>
    </c-space>
    <c-space wrap>
      <c-button
        v-for="status in statuses"
        :key="status"
        :status="status"
        :variant="variant"
        :size="size"
        >{{ status }}</c-button
      >
    </c-space>
  </c-space>
</template>
