<template>
  <c-space direction="column" size="lg" fill>
    <c-textarea default-value="原生三行，可纵向拖动" :rows="3" />
    <c-textarea v-model="content" auto-size placeholder="随内容自动增高" />
    <c-textarea
      v-model="boundedContent"
      :auto-size="{ minRows: 2, maxRows: 5 }"
      placeholder="自动高度限制在 2 到 5 行"
    />
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const content = ref("第一行");
const boundedContent = ref("第一行\n第二行");
</script>
