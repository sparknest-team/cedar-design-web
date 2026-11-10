<script setup lang="ts">
import { ref } from "vue";

const stacked = ref(false)
const mode = ref("default");
const size = ref("md");
const modes = ["default", "fill", "line"];
const sizes = ["xs", "sm", "md", "lg", "xl"];
const types = ["circle", "wave", "cube", "rect", "disappear"];
</script>
<template>
  <c-space direction="column" :size="16">
    <c-form layout="vertical" size="sm">
      <c-form-item label="Layout" field="mode">
        <c-radio-group
          v-model="mode"
          :options="modes"
          aria-label="Loading mode"
          variant="button"
        />
      </c-form-item>
      <c-form-item label="Size" field="size">
        <c-radio-group
          v-model="size"
          :disabled="mode === 'line'"
          :options="sizes"
          aria-label="Loading size"
          variant="button"
        />
      </c-form-item>
    </c-form>
    <c-checkbox v-model="stacked">图文堆叠（stacked）</c-checkbox>
    <p v-if="mode === 'line'">
      line 使用底部进度线，loading-type 和 loading-size 不适用；可通过
      loading-color 调整颜色。
    </p>
    <c-space wrap
      ><c-button
        v-for="type in mode === 'line' ? ['line'] : types"
        :key="type"
        loading
        :stacked="stacked"
        :loading-type="mode === 'line' ? 'circle' : type"
        :loading-mode="mode"
        :loading-size="size"
        ><template #icon><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1v14M1 8h14" stroke="currentColor" /></svg></template>{{ type }}</c-button
      ></c-space
    >
  </c-space>
</template>
