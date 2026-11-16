<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("dividerBasicInline");
</script>
<template>
  <div>
    <p>{{ inlineCopy.before }}</p>
    <c-divider />
    <p>{{ inlineCopy.after }}</p>
  </div>
</template>
