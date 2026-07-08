<template>
  <c-space direction="column" size="lg">
    <c-checkbox-group v-model="value1" :options="plainOptions"> </c-checkbox-group>
    <c-checkbox-group v-model="value2" :options="options"> </c-checkbox-group>
    <c-checkbox-group v-model="value2" :options="options">
      <template #label="{ data }">
        <c-tag>{{ data.label }}</c-tag>
      </template>
    </c-checkbox-group>
  </c-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value1 = ref(['Plain 1'])
    const plainOptions = ['Plain 1', 'Plain 2', 'Plain 3']

    const value2 = ref(['1'])
    const options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3', disabled: true },
    ]

    return {
      plainOptions,
      options,
      value1,
      value2,
    }
  },
})
</script>
