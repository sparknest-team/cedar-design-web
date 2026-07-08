<template>
  <c-space direction="column" size="lg">
    <c-radio-group type="button" v-model="size">
      <c-radio value="xs">xs</c-radio>
      <c-radio value="sm">sm</c-radio>
      <c-radio value="md">md</c-radio>
      <c-radio value="lg">lg</c-radio>
    </c-radio-group>
    <c-input-tag :default-value="['one']" placeholder="Please enter something" :size="size" clearable />
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref('md')
</script>
