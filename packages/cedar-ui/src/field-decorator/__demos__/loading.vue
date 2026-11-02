<script setup lang="ts">
import { ref } from 'vue'
const busy = ref(true)
const mode = ref<'default' | 'line'>('line')
const text = ref('加载时仍可编辑')
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space><c-switch v-model="busy" />加载状态</c-space>
    <c-radio-group v-model="mode" :options="['default', 'line']" variant="button" aria-label="字段加载布局" />
    <c-form layout="vertical">
      <c-form-item label="文本"><c-input v-model="text" :loading="busy" :loading-mode="mode" /></c-form-item>
      <c-form-item label="多行文本"><c-textarea v-model="text" :loading="busy" :loading-mode="mode" /></c-form-item>
      <c-form-item label="选择"><c-select edit-mode="direct" :options="[{ label: '选项', value: 'a' }]" :loading="busy" :loading-mode="mode" /></c-form-item>
      <c-form-item label="日期"><c-date edit-mode="direct" :loading="busy" :loading-mode="mode" /></c-form-item>
    </c-form>
    <p>加载展示由同一个 FieldDecorator 实现，不隐式禁用输入；需要禁止操作时单独设置 disabled 或 readonly。</p>
  </c-space>
</template>
