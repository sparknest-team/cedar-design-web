<script setup lang="ts">
import { reactive } from 'vue'

const footerAlignments = ['start', 'center', 'end'] as const
const sectionVariants = ['heading-line', 'plain', 'tonal', 'outline'] as const
const headingLevels = [1, 2, 3, 4, 5, 6] as const
const model = reactive<{
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  headingLevel: (typeof headingLevels)[number]
  footerAlign: (typeof footerAlignments)[number]
  sectionVariant: (typeof sectionVariants)[number]
}>({
  size: 'md',
  headingLevel: 4,
  footerAlign: 'end',
  sectionVariant: 'heading-line',
})
</script>

<template>
  <c-space direction="column" align="stretch">
    <c-form :model="model" layout="vertical" edit-mode="direct">
      <c-form-item field="size" label="Card size">
        <c-radio-group v-model="model.size" aria-label="Card size">
          <c-radio value="xs">Extra small (xs)</c-radio>
          <c-radio value="sm">Compact (sm)</c-radio>
          <c-radio value="md">Default (md)</c-radio>
          <c-radio value="lg">Large (lg)</c-radio>
          <c-radio value="xl">Extra large (xl)</c-radio>
        </c-radio-group>
      </c-form-item>
      <c-form-item field="headingLevel" label="Heading level">
        <c-radio-group v-model="model.headingLevel" aria-label="Heading level">
          <c-radio v-for="level in headingLevels" :key="level" :value="level">h{{ level }}</c-radio>
        </c-radio-group>
      </c-form-item>
      <c-form-item field="footerAlign" label="Footer alignment">
        <c-radio-group v-model="model.footerAlign" aria-label="Footer alignment">
          <c-radio v-for="value in footerAlignments" :key="value" :value="value">{{ value }}</c-radio>
        </c-radio-group>
      </c-form-item>
      <c-form-item field="sectionVariant" label="Section variant">
        <c-radio-group v-model="model.sectionVariant" aria-label="Section variant">
          <c-radio v-for="value in sectionVariants" :key="value" :value="value">{{ value }}</c-radio>
        </c-radio-group>
      </c-form-item>
    </c-form>
    <output>Rendered tag <code>&lt;h{{ model.headingLevel }}&gt;</code></output>

    <c-card
      :size="model.size"
      :heading-level="model.headingLevel"
      :footer-align="model.footerAlign"
      title="Project overview"
      description="Project settings apply to the whole team."
      top-divider
      bottom-divider
    >
      <c-section :size="model.size" :heading-level="model.headingLevel" :variant="model.sectionVariant" title="Member permissions" description="Permissions are grouped by role.">
        Administrators can invite members.
      </c-section>
      <template #footer>Last updated today</template>
    </c-card>
  </c-space>
</template>
