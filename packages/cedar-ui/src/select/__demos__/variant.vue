<template>
  <c-space direction="column">
    <c-radio-group v-model="variant">
      <c-radio value="outlined">Outlined</c-radio>
      <c-radio value="standard">Standard</c-radio>
      <c-radio value="filled">Filled</c-radio>
    </c-radio-group>
    <c-select placeholder="Please select ..." :variant="variant">
      <c-option>Beijing</c-option>
      <c-option>Shanghai</c-option>
      <c-option>Guangzhou</c-option>
      <c-option disabled>Disabled</c-option>
    </c-select>
    <c-select :default-value="['Beijing', 'Shanghai']" multiple :variant="variant">
      <c-option>Beijing</c-option>
      <c-option :tag-props="{ color: 'red' }">Shanghai</c-option>
      <c-option>Guangzhou</c-option>
      <c-option disabled>Disabled</c-option>
      <c-option>Shenzhen</c-option>
      <c-option>Wuhan</c-option>
    </c-select>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const variant = ref('filled')
</script>
