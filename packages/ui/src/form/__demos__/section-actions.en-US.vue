<script setup lang="ts">
import { reactive, ref } from 'vue'

const copy = {
  permissions: 'Member permissions',
  scope: 'Permission changes apply to all project members.',
  admin: 'Administrator',
  manage: 'Manage members and project settings',
  member: 'Member',
  update: 'View the project and update tasks',
  withTitle: 'Show heading',
  withDescription: 'Show description',
  showMarker: 'Show marker',
  markerPlacement: 'Marker placement',
  titleMarker: 'Heading',
  sectionMarker: 'Entire section',
  memberDetails: 'Member details',
  history: 'Release history',
  latest: 'Show latest',
  all: 'Show all',
  exportRelease: 'v1.2 · Added project export',
  memberRelease: 'v1.1 · Added member management',
  text: {
    event: 'Event type',
    level: 'Event level',
    tags: 'Tags',
    remote: 'Remote SOP',
    section: 'Onsite handling',
    onsite: 'Onsite SOP',
    safety: 'Safety notice',
    points: 'Key points',
    skill: 'Skill level',
    certificates: 'Certificates',
    review: 'Review',
    abnormal: 'Multiple anomalies',
  },
  variantLabel: 'Section style',
  optionsLabel: 'Display options',
  variants: {
    'heading-line': 'Heading line',
    plain: 'Title only',
    outline: 'Outlined section',
  },
  markerLabel: 'Title marker',
  styleHint:
    'Switching styles preserves your entries. An outlined section uses its border to mark the section boundary.',
  actionsDescription: 'Use a template to fill this section. Clearing it preserves the skill level outside the section.',
  applyTemplate: 'Use template',
  clearSection: 'Clear',
  applied: 'Onsite handling template applied.',
  cleared: 'Onsite fields cleared. The skill level is unchanged.',
  templateSop: 'Standard onsite review SOP',
  templateSafety: 'Read the onsite safety notice and confirm working conditions.',
  templatePoints: 'Review the onsite checklist and record the outcome.',
  lowVoltage: 'Low voltage',
  entryPermit: 'Entry permit',
  workAtHeight: 'Work at height',
  highVoltage: 'High voltage',
  levelThree: 'Level 3',
}
const model = reactive({ sop: '', safety: '', points: '', skill: 'L3' })
const feedback = ref<'applied' | 'cleared' | ''>('')
function applyTemplate() {
  Object.assign(model, {
    sop: copy.templateSop,
    safety: copy.templateSafety,
    points: copy.templatePoints,
  })
  feedback.value = 'applied'
}
function clearSection() {
  Object.assign(model, { sop: '', safety: '', points: '' })
  feedback.value = 'cleared'
}
</script>
<template>
  <div data-form-section-demo="actions">
    <c-form :model="model" layout="horizontal" label-col-flex="7rem" edit-mode="direct">
      <c-section
        title="Onsite handling"
        description="Use a template to fill this section. Clearing it preserves the skill level outside the section."
        show-marker
      >
        <template #extra>
          <c-space size="sm" wrap>
            <c-button variant="text" size="sm" @click="applyTemplate">Use template</c-button>
            <c-button variant="text" size="sm" @click="clearSection">Clear</c-button>
          </c-space>
        </template>
        <c-form-item field="sop" label="Onsite SOP"><c-input v-model="model.sop" /></c-form-item>
        <c-form-item field="safety" label="Safety notice"
          ><c-textarea v-model="model.safety" :max-length="200" show-word-limit
        /></c-form-item>
        <c-form-item field="points" label="Key points"
          ><c-textarea v-model="model.points" :max-length="200" show-word-limit
        /></c-form-item>
      </c-section>
      <c-divider />
      <c-form-item field="skill" label="Skill level"><c-input v-model="model.skill" /></c-form-item>
    </c-form>
    <p v-if="feedback" role="status">{{ copy[feedback] }}</p>
  </div>
</template>
