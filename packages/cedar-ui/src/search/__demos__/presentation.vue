<script setup lang="ts">
import { ref } from "vue";
const keyword = ref("");
const popup = ref(false);
const history = ref(["项目 A", "设备 B"]);
const lastAction = ref("尚未搜索");
</script>
<template>
  <div class="search-demo">
    <c-checkbox v-model="popup">全屏搜索历史（关闭后使用菜单）</c-checkbox>
    <c-search
      v-model="keyword"
      :history-popup="popup"
      :recent-searches="history"
      label="资源"
      placeholder="输入资源名称"
      clearable
      show-action
      action-text="取消"
      @cancel="lastAction = '已取消'"
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
      placeholder="自定义按钮插槽"
      @search="(result) => (lastAction = result.modelValue)"
    >
      <template #button-icon><span aria-hidden="true">⌕</span></template>
      <template #button-default>查找</template>
    </c-search>
    <div>最近操作：{{ lastAction }}</div>
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
