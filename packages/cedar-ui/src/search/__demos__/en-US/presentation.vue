<script setup lang="ts">
import { ref } from "vue";
const keyword = ref("");
const popup = ref(false);
const history = ref(["Project A", "Device B"]);
const lastAction = ref("No search yet");
</script>
<template>
  <div class="search-demo">
    <c-checkbox v-model="popup"
      >popup fullscreen search (uncheck for inline)</c-checkbox
    >
    <c-search
      v-model="keyword"
      :edit-mode="popup ? 'popup' : 'direct'"
      :recent-searches="history"
      label="Resource"
      placeholder="Enter resource name"
      clearable
      show-action
      action-text="Cancel"
      @cancel="lastAction = 'Cancelled'"
      @search="
        (result) => {
          history = result.recentSearches;
          lastAction = result.modelValue;
        }
      "
    />
    <c-search
      v-model="keyword"
      search-button
      :button-props="{ variant: 'outline' }"
      placeholder="Custom button slots"
      @search="(result) => (lastAction = result.modelValue)"
    >
      <template #button-icon><span aria-hidden="true">⌕</span></template>
      <template #button-default>Find</template>
    </c-search>
    <div>Last action：{{ lastAction }}</div>
  </div>
</template>
<style scoped>
.search-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 100%;
}
</style>
