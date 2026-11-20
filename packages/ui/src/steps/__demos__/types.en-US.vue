<script setup lang="ts">
import { ref } from "vue";
import type { StepsType } from "@cedar-design/ui-vue";

const current = ref(2);
const statuses = ["wait", "process", "finish", "error"] as const;
const status = ref<(typeof statuses)[number]>("process");
const types: StepsType[] = ["default", "arrow", "dot", "navigation"];
</script>

<template>
  <section class="step-type-comparison">
    <c-form-item layout="vertical" size="sm" label="Current step">
      <c-radio-group
        v-model="current"
        aria-label="Current step"
        :options="[
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 3 },
        ]"
        variant="button"
        size="sm"
      />
    </c-form-item>
    <c-form-item layout="vertical" size="sm" label="Status"
      ><c-radio-group
        v-model="status"
        aria-label="Status"
        :options="statuses.map((value) => ({ label: value, value }))"
    /></c-form-item>
    <p>
      Click a step or choose a number to compare four appearances at the same progress.
    </p>
    <section v-for="type in types" :key="type" :data-step-type="type">
      <p>
        <code>{{ type }}</code>
      </p>
      <c-steps v-model="current" :type="type" :status="status" changeable>
        <c-step
          >Submit<template #description>Details</template></c-step
        >
        <c-step
          >Review<template #description>Review</template></c-step
        >
        <c-step
          >Done<template #description>Complete</template></c-step
        >
      </c-steps>
    </section>
  </section>
</template>

<style scoped></style>
