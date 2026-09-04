<template>
  <c-space direction="vertical">
    <c-button status="primary" @click="open = true">打开多图预览</c-button>
    <c-image-preview-group
      v-model:open="open"
      v-model:current="current"
      :images="images"
      :loop="false"
      @change="onChange"
    >
      <template #close-icon><span class="close-icon">×</span></template>
      <template #indicator="{ index, length }">
        <span class="indicator">{{ index + 1 }} / {{ length }}</span>
      </template>
      <template #actions>
        <c-image-preview-action name="自定义操作" @click="onAction"
          >+
        </c-image-preview-action>
      </template>
    </c-image-preview-group>
    <span>当前索引：{{ current }}</span>
  </c-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const images = [
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
];
const open = ref(false);
const current = ref(0);

function onChange(index: number) {
  current.value = index;
}

function onAction() {
  current.value = current.value === 0 ? 1 : 0;
}
</script>

<style scoped>
.close-icon {
  font-size: 24px;
}

.indicator {
  position: absolute;
  top: 24px;
  left: 50%;
  color: #fff;
  transform: translateX(-50%);
}
</style>
