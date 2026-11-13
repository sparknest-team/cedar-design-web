<script setup lang="ts">
import { ref } from "vue";
import type {
  UploadFileItem,
  UploadListType,
  UploadTriggerPosition,
} from "@cedar-design/ui-vue";

const files = ref<UploadFileItem[]>([
  {
    uid: "sample-image",
    name: "landscape.svg",
    type: "image/svg+xml",
    url:
      "data:image/svg+xml," +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="160" viewBox="0 0 240 160"><rect width="240" height="160" fill="#e0e7ff"/><circle cx="180" cy="42" r="20" fill="#fbbf24"/><path d="M0 160L80 50L150 140L190 90L240 160Z" fill="#6750a4"/></svg>',
      ),
    status: "success",
    percent: 100,
  },
]);
const listType = ref<UploadListType>("picture");
const triggerPosition = ref<UploadTriggerPosition>("after");
</script>

<template>
  <c-space class="upload-trigger-position-demo" direction="column">
    <c-form>
      <c-form-item label="Trigger position">
        <c-radio-group v-model="triggerPosition" aria-label="Trigger position">
          <c-radio value="before">Before the file list</c-radio>
          <c-radio value="after">After the file list</c-radio>
        </c-radio-group>
      </c-form-item>
      <c-form-item label="List type">
        <c-radio-group v-model="listType" aria-label="List type">
          <c-radio value="text">text</c-radio>
          <c-radio value="picture">picture</c-radio>
          <c-radio value="picture-card">picture-card</c-radio>
        </c-radio-group>
      </c-form-item>
    </c-form>
    <c-upload
      v-model="files"
      :trigger-position="triggerPosition"
      :list-type="listType"
      accept="image/*"
      multiple
    />
    <p role="status">Selected files: {{ files.length }}</p>
  </c-space>
</template>
