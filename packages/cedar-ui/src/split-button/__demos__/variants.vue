<script setup lang="ts">
import { ref } from "vue";
import { Message } from "@cedarjs/ui";

const publish = () => {
  Message.info("发布成功");
};
const handleSelect = (_value: unknown, option: { label?: unknown }) => {
  Message.info(String(option.label));
};
const variants = ["default", "outline", "tonal", "text"] as const;
const statuses = [
  "default",
  "primary",
  "info",
  "success",
  "warning",
  "danger",
  "secondary",
  "tertiary",
] as const;
const variant = ref<(typeof variants)[number]>("default");
const status = ref<(typeof statuses)[number]>("default");
const disabled = ref(false);
</script>

<template>
  <div class="split-button-demo">
    <div class="split-button-demo-control">
      <span>Variant</span>
      <c-radio-group v-model="variant">
        <c-radio v-for="value in variants" :key="value" :value="value">{{
          value
        }}</c-radio>
      </c-radio-group>
    </div>
    <div class="split-button-demo-control">
      <span>Status</span>
      <c-radio-group v-model="status">
        <c-radio v-for="value in statuses" :key="value" :value="value">{{
          value
        }}</c-radio>
      </c-radio-group>
    </div>
    <label><input v-model="disabled" type="checkbox" /> Disabled</label>

    <c-split-button
      :variant="variant"
      :status="status"
      :disabled="disabled"
      @click="publish"
      @select="handleSelect"
    >
      {{ variant }}

      <template #content>
        <c-menu-option label="保存草稿" value="draft" />
        <c-menu-option label="保存并发布" value="publish" />
        <c-menu-option label="暂无权限" value="restricted" disabled />
      </template>
    </c-split-button>
  </div>
</template>

<style scoped>
.split-button-demo {
  display: grid;
  gap: 16px;
  justify-items: start;
}
.split-button-demo-control {
  display: grid;
  gap: 8px;
}
</style>
