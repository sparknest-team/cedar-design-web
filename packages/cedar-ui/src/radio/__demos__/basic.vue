<template>
  <c-space size="lg" fill>
    <c-radio value="radio">Radio</c-radio>
    <c-radio value="disabled radio" :default-checked="true" disabled>Disabled Radio </c-radio>
    <c-radio-group v-model="type" type="button">
      <c-radio value="rounded1">Rounded1</c-radio>
      <c-radio value="rounded">Rounded</c-radio>
      <c-radio value="capsule">Capsule</c-radio>
    </c-radio-group>
  </c-space>
</template>

<script lang="ts">
</script>
