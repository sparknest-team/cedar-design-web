<script setup lang="ts">
import { ref } from "vue";
import type { UploadFileItem } from "@cedar-design/ui-vue";

const files = ref<UploadFileItem[]>([]);
</script>

<template>
  <c-upload v-model="files" multiple />
</template>
