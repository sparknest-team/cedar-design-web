<template>
  <c-space direction="column" :style="{ width: '100%' }">
    <c-space>
      <c-radio-group type="button" v-model="position">
        <c-radio value="left">Left</c-radio>
        <c-radio value="right">Right</c-radio>
      </c-radio-group>
      <c-checkbox v-model="hideIcon">Hide Expand Icon</c-checkbox>
    </c-space>
    <c-collapse :default-active-key="['1']" :expand-icon-position="position" :show-expand-icon="!hideIcon">
      <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="1">
        <template #expand-icon>
          <c-icon-plus />
        </template>
        <template #extra>
          <c-tag size="sm">city</c-tag>
        </template>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </c-collapse-item>
      <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="2" disabled>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </c-collapse-item>
      <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="3">
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </c-collapse-item>
    </c-collapse>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const position = ref('left')
const hideIcon = ref(false)
</script>
