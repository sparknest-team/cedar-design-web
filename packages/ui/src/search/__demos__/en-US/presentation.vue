<script setup lang="ts">
import { IconSearch } from '@cedar-design/icons-vue/icon-search'
import { ref } from "vue";
const clickToEdit = ref(false)
const keyword = ref("");
const history = ref(["Project A", "Device B"]);
const lastAction = ref("No search yet");
</script>
<template>
  <div class="search-demo">
    <c-checkbox v-model="clickToEdit">Click to edit the keyword</c-checkbox>
    <c-search
      v-model="keyword"
      :edit-mode="clickToEdit ? 'click' : 'direct'"
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
      <template #button-icon><IconSearch aria-hidden="true" /></template>
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
