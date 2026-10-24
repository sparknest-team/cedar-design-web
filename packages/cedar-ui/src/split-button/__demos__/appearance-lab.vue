<script setup lang="ts">
import { reactive } from "vue";
import type { ComponentSize, SemanticStatus } from "../../_utils/constant";
import { Message } from "@cedar-design/ui";
const publish = () => {
  Message.info("发布成功");
};
const handleSelect = (_value: unknown, option: { label?: unknown }) => {
  Message.info(String(option.label));
};
const appearance = reactive<{ status: SemanticStatus; size: ComponentSize }>({
  status: "default",
  size: "md",
});
</script>
<template>
  <c-space direction="column" align="flex-start" :size="16">
    <c-space wrap>
      <div>
        <span>status</span
        ><c-select
          v-model="appearance['status']"
          :clearable="false"
          :options="[
            { label: 'default', value: 'default' },
            { label: 'primary', value: 'primary' },
            { label: 'secondary', value: 'secondary' },
            { label: 'tertiary', value: 'tertiary' },
            { label: 'info', value: 'info' },
            { label: 'success', value: 'success' },
            { label: 'warning', value: 'warning' },
            { label: 'danger', value: 'danger' },
          ]"
          aria-label="status"
        />
      </div>
      <div>
        <span>size</span
        ><c-select
          v-model="appearance['size']"
          :clearable="false"
          :options="[
            { label: 'xs', value: 'xs' },
            { label: 'sm', value: 'sm' },
            { label: 'md', value: 'md' },
            { label: 'lg', value: 'lg' },
            { label: 'xl', value: 'xl' },
          ]"
          aria-label="size"
        />
      </div>
    </c-space>
    <c-split-button
      placement="bottom-end"
      @click="publish"
      @select="handleSelect"
      v-bind="appearance"
    >
      发布

      <template #content>
        <c-menu-option label="保存草稿" value="draft" />
        <c-menu-option label="保存并发布" value="publish" />
        <c-menu-option label="暂无权限" value="restricted" disabled />
      </template>
    </c-split-button>
  </c-space>
</template>
