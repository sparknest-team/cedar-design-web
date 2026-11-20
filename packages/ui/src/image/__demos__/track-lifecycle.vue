<script setup lang="ts">

import { ImagePreviewAction as CImagePreviewAction } from "../index";

import { ref } from "vue";
const active = ref(true);
const open = ref(false);
const current = ref(1);
const loop = ref(true);
const images = ref(["/cat.jpg", "/cat2.jpg"]);
function replaceImages() {
  images.value = [...images.value].reverse();
}
</script>
<template>
  <div>
    <c-button @click="open = true">打开</c-button>
    <c-button @click="active = !active">停用与激活</c-button>
    <c-button @click="loop = !loop">循环</c-button>
    <c-button @click="replaceImages">等长换图</c-button>
    <p>
      当前: {{ current }}. Navigate across the loop edge;
      deactivate, close or replace images. Old work must not replay.
    </p>
    <KeepAlive>
      <c-image-preview-group
        v-if="active"
        v-model:open="open"
        v-model="current"
        :images="images"
        :loop="loop"
      >
        <template #actions>
          <c-image-preview-action
            name="换图"
            @click="replaceImages"
            >换图</c-image-preview-action
          >
          <c-image-preview-action
            name="停用"
            @click="active = false"
            >停用</c-image-preview-action
          >
        </template>
      </c-image-preview-group>
    </KeepAlive>
  </div>
</template>
