<script setup lang="ts">
import { computed, ref } from 'vue'
import type { SectionMarkerPlacement, SectionStatus, SectionVariant } from '@cedar-design/ui-vue'

const variants = ['plain', 'heading-line', 'tonal', 'outline'] as const
const variant = ref<SectionVariant>('outline')
const statuses = ['default', 'info', 'success', 'warning', 'danger'] as const
const status = ref<SectionStatus>('default')
const withTitle = ref(false)
const withDescription = ref(false)
const showMarker = ref(false)
const preferredPlacement = ref<SectionMarkerPlacement>('title')
const markerPlacement = computed({
  get: () => withTitle.value ? preferredPlacement.value : 'section',
  set: (value: SectionMarkerPlacement) => { preferredPlacement.value = value },
})
</script>

<template>
  <c-space direction="column" align="stretch">
    <c-radio-group
      v-model="variant"
      aria-label="分组风格"
      :options="variants.map(value => ({ value, label: value }))"
    />
    <c-radio-group
      v-model="status"
      aria-label="status"
      :options="statuses.map(value => ({ value, label: value }))"
    />
    <c-space wrap>
      <c-checkbox v-model="withTitle">显示标题</c-checkbox>
      <c-checkbox v-model="withDescription">显示说明</c-checkbox>
      <c-checkbox v-model="showMarker">显示色条</c-checkbox>
    </c-space>
    <c-radio-group
      :disabled="!showMarker"
      v-model="markerPlacement"
      aria-label="色条位置"
      :options="[
        { value: 'title', label: '标题旁', disabled: !withTitle },
        { value: 'section', label: '整个分区' },
      ]"
    />
    <c-section
      :marker-placement="markerPlacement"
      :variant="variant"
      :status="status"
      :show-marker="showMarker"
      :title="withTitle ? '成员权限' : undefined"
      :description="withDescription ? '权限变更将应用到所有项目成员。' : undefined"
    >
      <dl>
        <dt>管理员</dt>
        <dd>管理成员、修改项目设置</dd>
        <dt>成员</dt>
        <dd>查看项目、更新任务</dd>
      </dl>
    </c-section>
  </c-space>
</template>
