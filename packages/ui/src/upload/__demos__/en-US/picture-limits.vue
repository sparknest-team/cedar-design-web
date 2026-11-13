<script setup lang="ts">
import { ref } from "vue";
import type { UploadFileItem, UploadRejectedFile } from "@cedar-design/ui-vue";

const files = ref<UploadFileItem[]>([]);
const feedback = ref("");
const reasons: Record<string, string> = {
  accept: "Images only",
  "max-files": "Up to 3 images",
  "max-file-size": "Up to 2 MiB per image",
};
function handleRejected(items: UploadRejectedFile[]) {
  feedback.value = items
    .map((item) => `${item.file.name}: ${reasons[item.reason] || item.reason}`)
    .join("; ");
}
</script>

<template>
  <c-space direction="column">
    <p>
      Choose up to 3 images, each no larger than 2 MiB. Remove an image to add
      another.
    </p>
    <c-upload
      v-model="files"
      list-type="picture"
      accept="image/*"
      multiple
      :max-files="3"
      :max-file-size="2 * 1024 * 1024"
      @rejected="handleRejected"
    />
    <p role="status">{{ feedback }}</p>
  </c-space>
</template>
