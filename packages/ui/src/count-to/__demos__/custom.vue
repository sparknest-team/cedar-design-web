<script setup lang="ts">
import { formatDemoNumber } from "../../__demos__/locale";
</script>
<template>
  <c-count-to :to="123456">
    <template #default="{ value }">
      {{ formatDemoNumber(value) }}
    </template>
  </c-count-to>
</template>
