<script setup lang="ts">
import { ref } from "vue";
import type { UploadFileItem } from "@cedar-design/ui-vue";
const files = ref<UploadFileItem[]>([]);
</script>
<template>
  <c-space direction="column">
    <p>
      Select a folder to list its files locally. Directory support depends on
      the browser and device; multiple selection is available as a fallback.
    </p>
    <p>Select a directory</p>
    <c-upload v-model="files" directory multiple />
    <p>Select multiple files</p>
    <c-upload multiple />
  </c-space>
</template>
