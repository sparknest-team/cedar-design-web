<script setup lang="ts">
const inlineCopy = {
  iconOnly: "Icon only",
  iconAndText: "Icon and text",
  stacked: "Stacked"
};

import { ref } from "vue";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
const variants = ["default", "text", "outline", "tonal"] as const;
const layouts = ["icon", "inline", "stacked"] as const;
const size = ref<(typeof sizes)[number]>("md");
const variant = ref<(typeof variants)[number]>("tonal");
const items = [
  { status: "default", icon: "plus", label: "Add" },
  { status: "primary", icon: "reply", label: "Reply" },
  { status: "info", icon: "info-circle", label: "Info" },
  { status: "success", icon: "check", label: "Confirm" },
  { status: "warning", icon: "delete", label: "Delete" },
  { status: "danger", icon: "close", label: "Close" },
] as const;
</script>
<template>
  <c-space direction="column" :size="16">
    <c-form layout="vertical" size="sm">
      <c-form-item label="Variant" field="variant">
        <c-radio-group
          v-model="variant"
          :options="variants"
          aria-label="Icon button variant"
          variant="button"
        />
      </c-form-item>
      <c-form-item label="Size" field="size">
        <c-radio-group
          v-model="size"
          :options="sizes"
          aria-label="Icon button size"
          variant="button"
        />
      </c-form-item>
    </c-form>
    <c-space
      v-for="layout in layouts"
      :key="layout"
      direction="column"
      :size="8"
    >
      <span>{{
        layout === "icon"
          ? inlineCopy.iconOnly
          : layout === "inline"
            ? inlineCopy.iconAndText
            : inlineCopy.stacked
      }}</span>
      <c-space wrap>
        <c-button
          v-for="item in items"
          :key="item.label"
          :status="item.status"
          :variant="variant"
          :size="size"
          :stacked="layout === 'stacked'"
          :round="layout === 'icon'"
          :aria-label="item.label"
        >
          <template #icon>
            <c-icon-plus v-if="item.icon === 'plus'" />
            <c-icon-reply v-else-if="item.icon === 'reply'" />
            <c-icon-info-circle v-else-if="item.icon === 'info-circle'" />
            <c-icon-check v-else-if="item.icon === 'check'" />
            <c-icon-delete v-else-if="item.icon === 'delete'" />
            <c-icon-close v-else-if="item.icon === 'close'" />
          </template>
          <template v-if="layout !== 'icon'" #default>{{
            item.label
          }}</template>
        </c-button>
      </c-space>
    </c-space>
  </c-space>
</template>
