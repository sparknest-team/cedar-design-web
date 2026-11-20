<script setup lang="ts">

import { ImagePreviewAction as CImagePreviewAction } from "../index";

import { ref } from "vue";
const open = ref(false);
const active = ref(true);
const source = ref("/cat.jpg");
const presses = ref(0);
const switchSource = () => {
  source.value = source.value === "/cat.jpg" ? "/cat2.jpg" : "/cat.jpg";
};
</script>
<template>
  <div>
    <c-button @click="open = true">打开预览</c-button>
    <c-button @click="active = !active">停用与激活</c-button>
    <p>
      长按通知: {{ presses }}. Cancel or deactivate; old
      input must not replay.
    </p>
    <KeepAlive>
      <c-image-preview
        v-if="active"
        v-model:open="open"
        :src="source"
        interaction="touch"
        :keyboard="true"
        @long-press="presses++"
      >
        <template #actions>
          <c-image-preview-action
            name="换图"
            @click="switchSource"
            >换图</c-image-preview-action
          >
          <c-image-preview-action
            name="停用"
            @click="active = false"
            >停用</c-image-preview-action
          >
        </template>
      </c-image-preview>
    </KeepAlive>
  </div>
</template>
