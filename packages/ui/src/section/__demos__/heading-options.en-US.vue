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
      aria-label="Section style"
      :options="variants.map(value => ({ value, label: value }))"
    />
    <c-radio-group
      v-model="status"
      aria-label="status"
      :options="statuses.map(value => ({ value, label: value }))"
    />
    <c-space wrap>
      <c-checkbox v-model="withTitle">Show heading</c-checkbox>
      <c-checkbox v-model="withDescription">Show description</c-checkbox>
      <c-checkbox v-model="showMarker">Show marker</c-checkbox>
    </c-space>
    <c-radio-group
      :disabled="!showMarker"
      v-model="markerPlacement"
      aria-label="Marker placement"
      :options="[
        { value: 'title', label: 'Heading', disabled: !withTitle },
        { value: 'section', label: 'Entire section' },
      ]"
    />
    <c-section
      :marker-placement="markerPlacement"
      :variant="variant"
      :status="status"
      :show-marker="showMarker"
      :title="withTitle ? 'Member permissions' : undefined"
      :description="withDescription ? 'Permission changes apply to all project members.' : undefined"
    >
      <dl>
        <dt>Administrator</dt>
        <dd>Manage members and project settings</dd>
        <dt>Member</dt>
        <dd>View the project and update tasks</dd>
      </dl>
    </c-section>
  </c-space>
</template>
