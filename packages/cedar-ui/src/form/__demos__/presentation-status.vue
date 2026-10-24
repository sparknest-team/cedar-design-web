<script setup lang="ts">
import { ref } from 'vue'
import type { FormItemValidateStatus } from '@cedar-design/ui'
const status = ref<FormItemValidateStatus>('warning')
const statuses: FormItemValidateStatus[] = ['success', 'warning', 'error', 'validating']
</script>

<template>
  <div class="status-demo">
    <c-space wrap>
      <c-button v-for="item in statuses" :key="item" @click="status = item">{{ item }}</c-button>
    </c-space>
    <c-form layout="vertical">
      <c-form-item label="展示状态" feedback :validate-status="status" help="显式状态只控制外观，不改变实际校验结果。">
        <c-input placeholder="切换上方状态" />
      </c-form-item>
    </c-form>
  </div>
</template>

<style scoped>
.status-demo { display: flex; flex-direction: column; gap: 16px; }
</style>
