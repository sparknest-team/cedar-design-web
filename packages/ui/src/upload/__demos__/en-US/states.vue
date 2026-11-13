<script setup lang="ts">
import { ref } from "vue";
import type { UploadFileItem } from "@cedar-design/ui-vue";

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
const state = ref("editable");
</script>

<template>
  <c-space direction="column">
    <c-form
      ><c-form-item label="State">
        <c-radio-group v-model="state" aria-label="State">
          <c-radio value="editable">Editable</c-radio>
          <c-radio value="readonly">Readonly</c-radio>
          <c-radio value="disabled">Disabled</c-radio>
          <c-radio value="reading">Reading</c-radio>
        </c-radio-group>
      </c-form-item></c-form
    >
    <c-upload
      v-model="files"
      list-type="picture"
      accept="image/*"
      multiple
      :readonly="state === 'readonly'"
      :disabled="state === 'disabled'"
      :read-pretty="state === 'reading'"
    />
    <p role="status">Selected files: {{ files.length }}</p>
  </c-space>
</template>
