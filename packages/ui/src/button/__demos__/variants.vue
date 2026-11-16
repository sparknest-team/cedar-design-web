<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("buttonVariantsInline");

import { computed, ref } from "vue";

const variant = ref("default");
const size = ref("md");
const background = ref("navy");
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
const backgrounds = [
  {
    get label() {
      return inlineCopy.value.navy;
    },
    value: "navy",
    color: "#17224B",
  },
  {
    get label() {
      return inlineCopy.value.white;
    },
    value: "light",
    color: "#FFFFFF",
  },
  {
    get label() {
      return inlineCopy.value.lightGray;
    },
    value: "muted",
    color: "#F5F5F5",
  },
  {
    get label() {
      return inlineCopy.value.darkGray;
    },
    value: "dark",
    color: "#252525",
  },
];
const cardBackground = computed(
  () => backgrounds.find((item) => item.value === background.value)?.color,
);
</script>
<template>
  <c-space direction="column" block align="stretch" :size="16">
    <c-form layout="vertical" size="sm">
      <c-form-item label="Variant" field="variant">
        <c-radio-group
          v-model="variant"
          :options="variants"
          aria-label="Button variant"
          variant="button"
        />
      </c-form-item>
      <c-form-item label="Size" field="size">
        <c-radio-group
          v-model="size"
          :options="sizes"
          aria-label="Button size"
          variant="button"
        />
      </c-form-item>
      <c-form-item label="Background" field="background">
        <c-radio-group
          v-model="background"
          :options="backgrounds"
          aria-label="Button background"
          variant="button"
        />
      </c-form-item>
    </c-form>
    <c-card
      class="button-variant-card"
      :data-background="background"
      :elevation="false"
      :style="{ '--c-card-background': cardBackground }"
    >
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
    </c-card>
  </c-space>
</template>
