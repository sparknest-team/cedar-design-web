<script setup lang="ts">
import { ref } from 'vue'
import { useDemoLocale } from '../../__demos__/locale'
import type { SectionVariant } from '../props'

const copy = useDemoLocale('section')
const variants = ['plain', 'line', 'card'] as const
const variant = ref<SectionVariant>('card')
const withTitle = ref(false)
const withDescription = ref(false)
</script>

<template>
  <c-space direction="column" align="stretch">
    <c-radio-group
      v-model="variant"
      :aria-label="copy.variantLabel"
      :options="variants.map(value => ({ value, label: value }))"
    />
    <c-space wrap>
      <c-checkbox v-model="withTitle">{{ copy.withTitle }}</c-checkbox>
      <c-checkbox v-model="withDescription">{{ copy.withDescription }}</c-checkbox>
    </c-space>
    <c-section
      :variant="variant"
      :title="withTitle ? copy.permissions : undefined"
      :description="withDescription ? copy.scope : undefined"
    >
      <dl>
        <dt>{{ copy.admin }}</dt>
        <dd>{{ copy.manage }}</dd>
        <dt>{{ copy.member }}</dt>
        <dd>{{ copy.update }}</dd>
      </dl>
    </c-section>
  </c-space>
</template>
