<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("dividerCustomInline");
</script>
<template>
  <c-divider type="dashed" :description="inlineCopy.slotTakesPriority">
    <span class="divider-label">{{ inlineCopy.customContent }}</span>
  </c-divider>
</template>

<style scoped>
.divider-label {
  padding-inline: 8px;
}
</style>
