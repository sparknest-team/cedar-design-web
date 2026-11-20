<script setup lang="ts">
import { reactive } from 'vue'

const headingLevels = [1, 2, 3, 4, 5, 6] as const
const model = reactive<{ size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; headingLevel: (typeof headingLevels)[number] }>({
  size: 'md',
  headingLevel: 4,
})
</script>

<template>
  <c-space direction="column" align="stretch">
    <c-form :model="model" layout="vertical" edit-mode="direct">
      <c-form-item field="size" label="Section size">
        <c-radio-group v-model="model.size" aria-label="Section size">
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
    </c-form>
    <output>Rendered tag <code>&lt;h{{ model.headingLevel }}&gt;</code></output>

    <c-section :size="model.size" variant="outline" show-marker :heading-level="model.headingLevel" title="Member permissions">
      <div class="section-size-content">Administrators can invite members and update project settings.</div>
    </c-section>
  </c-space>
</template>

<style scoped>
.section-size-content {
  border: 1px dashed currentColor;
  padding: 8px;
}
</style>
