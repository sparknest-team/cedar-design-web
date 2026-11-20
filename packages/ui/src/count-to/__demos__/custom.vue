<script setup lang="ts">
import { getLocale } from "@cedar-design/ui-vue";
</script>
<template>
  <c-count-to :to="123456">
    <template #default="{ value }">
      {{ value.toLocaleString(getLocale()) }}
    </template>
  </c-count-to>
</template>
