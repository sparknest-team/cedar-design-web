<template>
  <c-rate :default-value="2">
    <template #character="index">
      <c-icon-check v-if="index < 3" />
      <c-icon-close v-else />
    </template>
  </c-rate>
</template>

<script lang="ts" setup>
</script>
