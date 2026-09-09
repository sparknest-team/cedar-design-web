<template>
  <c-space direction="column">
    <c-radio-group v-model="variant">
      <c-radio value="filled">filled</c-radio>
      <c-radio value="outline">outline</c-radio>
      <c-radio value="standard">standard</c-radio>
    </c-radio-group>
    <c-input-group :variant="variant">
      <c-input :style="{ width: '160px' }" placeholder="first" />
      <c-input :style="{ width: '320px' }" placeholder="second" />
    </c-input-group>
    <c-input-group :variant="variant">
      <c-select :options="['Option1', 'Option2', 'Option3']" :style="{ width: '160px' }" placeholder="first" />
      <c-input :style="{ width: '320px' }" placeholder="second" />
    </c-input-group>

    <c-input-group :variant="variant">
      <c-select :options="['Option1', 'Option2', 'Option3']" :style="{ width: '160px' }" placeholder="first" />
      <c-auto-complete :style="{ width: '320px' }" placeholder="second" />
    </c-input-group>
    <c-input-group :variant="variant">
      <c-input-group-label>text</c-input-group-label>
      <c-input :style="{ width: '320px' }" placeholder="second" />
      <c-button status="primary">label</c-button>
    </c-input-group>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const variant = ref('filled')
</script>
