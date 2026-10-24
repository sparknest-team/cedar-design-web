<template>
  <div ref="scroller" class="infinite-scroll-demo">
    <c-infinite-scroll
      v-model:status="status"
      :target="scroller"
      @load="fetchData"
      @retry="fetchData"
    >
      <c-list :data="data" :scrollbar="false">
        <template #item="{ item }">
          <c-list-item>{{ item }}</c-list-item>
        </template>
      </c-list>

      <template #error="{ retry }">
        加载失败，<c-button
          variant="text"
          size="sm"
          status="primary"
          @click="retry"
          >点击重试</c-button
        >
      </template>
    </c-infinite-scroll>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onDeactivated, ref } from "vue";
import type { InfiniteScrollStatus } from "@cedar-design/ui";

const scroller = ref<HTMLElement>();
const data = ref<string[]>([]);
const status = ref<InfiniteScrollStatus>("idle");
let failedOnce = false;
let timer: ReturnType<typeof window.setTimeout> | undefined;

const fetchData = () => {
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    timer = undefined;
    if (!failedOnce && data.value.length === 8) {
      failedOnce = true;
      status.value = "error";
      return;
    }

    const start = data.value.length;
    data.value.push(
      ...Array.from(
        { length: 8 },
        (_, index) => `Cedar list item ${start + index + 1}`,
      ),
    );
    status.value = data.value.length >= 32 ? "finished" : "idle";
  }, 600);
};
onBeforeUnmount(() => window.clearTimeout(timer));
onDeactivated(() => {
  window.clearTimeout(timer);
  timer = undefined;
  if (status.value === "loading") {
    status.value = "idle";
  }
});
</script>

<style scoped>
.infinite-scroll-demo {
  max-height: 320px;
  overflow-y: auto;
}
</style>
