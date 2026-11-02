<script setup lang="ts">
import { ref } from 'vue'
const busy = ref(true)
const value = ref('beijing')
const options = [{ label: '北京 / Beijing', value: 'beijing' }, { label: '上海 / Shanghai', value: 'shanghai' }, { label: '广州 / Guangzhou', value: 'guangzhou' }]
</script>
<template>
  <c-space direction="column" :size="16" style="width: 100%">
    <c-form layout="vertical">
      <c-form-item label="加载状态 / Loading"><c-switch v-model="busy" /></c-form-item>
      <c-form-item label="默认指示器 / Default"><c-select v-model="value" :loading="busy" :options="options" edit-mode="direct" loading-mode="default" /></c-form-item>
      <c-form-item label="底部加载线 / Line"><c-select v-model="value" :loading="busy" :options="options" edit-mode="direct" loading-mode="line" /></c-form-item>
    </c-form>
    <p>切换加载状态；加载期间保留已选值，暂停选择与确认，关闭加载后恢复。Loading preserves the selected value and pauses selection.</p>
  </c-space>
</template>
