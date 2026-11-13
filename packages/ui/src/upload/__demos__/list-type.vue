<script setup lang="ts">
import { ref } from "vue";
import type { UploadFileItem, UploadListType } from "@cedar-design/ui-vue";

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
</script>

<template>
  <c-space class="upload-list-type-demo" direction="column">
    <c-form>
      <c-form-item label="列表类型">
        <c-radio-group v-model="listType" aria-label="列表类型">
          <c-radio value="text">text</c-radio>
          <c-radio value="picture">picture</c-radio>
          <c-radio value="picture-card">picture-card</c-radio>
        </c-radio-group>
      </c-form-item>
    </c-form>
    <p>
      切换列表类型时保留同一份文件列表。可添加、删除图片后再次切换，预览功能保持可用。
    </p>
    <c-upload
      v-model="files"
      :list-type="listType"
      accept="image/*"
      multiple
      image-fit="contain"
    />
    <p role="status">已选图片: {{ files.length }}</p>
  </c-space>
</template>
