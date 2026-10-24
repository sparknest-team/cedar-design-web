<script setup lang="ts">
import { ImagePreviewAction as CImagePreviewAction } from '../index'

import { ref } from 'vue'

const open = ref(false)
const current = ref(1)
const images = ['/cat.jpg', '/cat2.jpg']

function onAction() {
  current.value = current.value === 0 ? 1 : 0
}
</script>

<template>
  <c-space direction="column" :size="16">
    <c-button status="primary" size="sm" @click="open = true">打开自定义预览</c-button>
    <c-image-preview-group v-model:open="open" v-model="current" :images="images" :loop="false">
      <template #close-icon>
        <span class="close-icon">×</span>
      </template>
      <template #indicator="{ imageNumber, length }">
        <span class="indicator">{{ imageNumber }} / {{ length }}</span>
      </template>
      <template #actions>
        <c-image-preview-action name="切换" @click="onAction">+</c-image-preview-action>
      </template>
    </c-image-preview-group>
  </c-space>
</template>

<style scoped>
.close-icon {
  font-size: 24px;
  color: #fff;
}

.indicator {
  position: absolute;
  top: 16px;
  left: 50%;
  padding: 4px 12px;
  color: #fff;
  font-size: 12px;
  background: rgb(0 0 0 / 45%);
  border-radius: 12px;
  transform: translateX(-50%);
}
</style>
