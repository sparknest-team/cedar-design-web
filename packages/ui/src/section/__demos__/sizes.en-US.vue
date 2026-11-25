<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { SectionMarkerPlacement, SectionStatus, SectionVariant } from '@cedar-design/ui-vue'

const variants = ['plain', 'heading-line', 'tonal', 'outline'] as const
const variant = ref<SectionVariant>('outline')
const statuses = ['default', 'info', 'success', 'warning', 'danger'] as const
const status = ref<SectionStatus>('default')
const showTitle = ref(true)
const showDescription = ref(true)
const showMarker = ref(true)
const preferredPlacement = ref<SectionMarkerPlacement>('title')
const markerPlacement = computed({
  get: () => (showTitle.value ? preferredPlacement.value : 'section'),
  set: (value: SectionMarkerPlacement) => {
    preferredPlacement.value = value
  },
})

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
const size = ref<(typeof sizes)[number]>('md')
const levels = [1, 2, 3, 4, 5, 6] as const
const level = ref<(typeof levels)[number]>(4)
const showContent = ref(true)
const preview = ref<HTMLElement | null>(null)
const titleMetrics = ref('')
const descriptionMetrics = ref('')

function measureText() {
  const container = preview.value?.querySelector<HTMLElement>('.c-section__surface')
  const title = container?.querySelector(`h${level.value}`)
  const description = container?.querySelector('.c-section__description')
  if (!container) return

  titleMetrics.value = title ? formatMetrics(title, getComputedStyle(container).paddingTop) : ''
  descriptionMetrics.value = description ? formatMetrics(description, getComputedStyle(description).marginTop) : ''
}

function formatMetrics(element: Element, gap: string) {
  const fontSize = getComputedStyle(element).fontSize
  return `font size ${fontSize} · gap above ${gap}`
}

watch(
  [preview, size, level, showTitle, showDescription, variant, showMarker, markerPlacement],
  () => {
    measureText()
    const view = preview.value?.ownerDocument.defaultView
    view?.requestAnimationFrame?.(measureText)
  },
  { flush: 'post' },
)
</script>

<template>
  <c-space direction="column" align="stretch">
    <span>Section size</span>
    <c-radio-group v-model="size" aria-label="Section size">
      <c-radio v-for="value in sizes" :key="value" :value="value">{{ value }}</c-radio>
    </c-radio-group>
    <span>Heading level</span>
    <c-radio-group v-model="level" aria-label="Heading level">
      <c-radio v-for="value in levels" :key="value" :value="value">h{{ value }}</c-radio>
    </c-radio-group>
    <c-radio-group
      v-model="variant"
      aria-label="Section style"
      :options="variants.map((value) => ({ value, label: value }))"
    />
    <c-radio-group
      v-model="status"
      aria-label="Section status"
      :options="statuses.map((value) => ({ value, label: value }))"
    />
    <c-space wrap>
      <c-checkbox v-model="showTitle">Show heading</c-checkbox>
      <c-checkbox v-model="showDescription">Show description</c-checkbox>
      <c-checkbox v-model="showMarker">Show marker</c-checkbox>
      <c-checkbox v-model="showContent">Show content</c-checkbox>
    </c-space>
    <c-radio-group
      :disabled="!showMarker"
      v-model="markerPlacement"
      aria-label="Marker placement"
      :options="[
        { value: 'title', label: 'Heading', disabled: !showTitle },
        { value: 'section', label: 'Entire section' },
      ]"
    />
    <output>
      Size {{ size }} · Heading h{{ level }}
      <template v-if="showTitle"><br />Title · {{ titleMetrics }}</template>
      <template v-if="showDescription"><br />Description · {{ descriptionMetrics }}</template>
    </output>
    <div ref="preview" @transitionend="measureText">
      <c-section
        :size="size"
        :heading-level="level"
        :marker-placement="markerPlacement"
        :variant="variant"
        :status="status"
        :show-marker="showMarker"
        :title="showTitle ? 'Member permissions' : undefined"
        :description="showDescription ? 'Permission changes apply to all project members.' : undefined"
      >
        <!-- Only this comment remains when content is hidden. -->
        <span v-if="showContent">Administrators can invite members.</span>
      </c-section>
    </div>
  </c-space>
</template>
