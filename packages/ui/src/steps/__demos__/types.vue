<script setup lang="ts">
import { useDemoLocale } from "../../__demos__/locale";
const demoCopy = useDemoLocale("stepsTypes");
import { ref } from "vue";
import type { StepsType } from "@cedar-design/ui-vue";

const current = ref(2);
const statuses = ["wait", "process", "finish", "error"] as const;
const status = ref<(typeof statuses)[number]>("process");
const types: StepsType[] = ["default", "arrow", "dot", "navigation"];
</script>

<template>
  <section class="step-type-comparison">
    <c-form-item layout="vertical" size="sm" :label="demoCopy.current">
      <c-radio-group
        v-model="current"
        :aria-label="demoCopy.current"
        :options="[
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 3 },
        ]"
        variant="button"
        size="sm"
      />
    </c-form-item>
    <c-form-item layout="vertical" size="sm" :label="demoCopy.status"
      ><c-radio-group
        v-model="status"
        :aria-label="demoCopy.status"
        :options="statuses.map((value) => ({ label: value, value }))"
    /></c-form-item>
    <p>
      {{ demoCopy.hint }}
    </p>
    <section v-for="type in types" :key="type" :data-step-type="type">
      <p>
        <code>{{ type }}</code>
      </p>
      <c-steps v-model="current" :type="type" :status="status" changeable>
        <c-step
          >{{ demoCopy.submit
          }}<template #description>{{ demoCopy.details }}</template></c-step
        >
        <c-step
          >{{ demoCopy.review
          }}<template #description>{{
            demoCopy.reviewDetails
          }}</template></c-step
        >
        <c-step
          >{{ demoCopy.done
          }}<template #description>{{ demoCopy.complete }}</template></c-step
        >
      </c-steps>
    </section>
  </section>
</template>

<style scoped></style>
