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
    <c-button @click="open = true">Open</c-button>
    <c-button @click="active = !active">Activate</c-button>
    <c-button @click="loop = !loop">Loop</c-button>
    <c-button @click="replaceImages">Replace images</c-button>
    <p>
      Current {{ current }}. Navigate across the loop edge;
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
            name="Replace images"
            @click="replaceImages"
            >换图</c-image-preview-action
          >
          <c-image-preview-action
            name="Deactivate"
            @click="active = false"
            >停用</c-image-preview-action
          >
        </template>
      </c-image-preview-group>
    </KeepAlive>
  </div>
</template>
