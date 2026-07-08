<template>
  <c-space direction="column" size="lg">
    <c-radio-group v-model="value1" :options="plainOptions" />
    <c-radio-group v-model="value2" :options="options" />
    <c-radio-group v-model="value2" :options="options">
      <template #label="{ data }">
        <c-tag>{{ data.label }}</c-tag>
      </template>
    </c-radio-group>
  </c-space>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const value1 = ref('plain 1')
    const plainOptions = ['plain 1', 'plain 2', 'plain 3']

    const value2 = ref('1')
    const options = [
      { label: 'option 1', value: '1' },
      { label: 'option 2', value: '2' },
      { label: 'option 3', value: '3', disabled: true },
    ]

    return {
      plainOptions,
      options,
      value1,
      value2,
    }
  },
}
</script>
