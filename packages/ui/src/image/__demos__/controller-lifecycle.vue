<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("imageControllerLifecycleInline");

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
    <c-button @click="open = true">{{ inlineCopy.open }}</c-button>
    <c-button @click="active = !active">{{ inlineCopy.activate }}</c-button>
    <p>
      {{ inlineCopy.longPresses }} {{ presses }}. Cancel or deactivate; old
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
            :name="inlineCopy.switchSource"
            @click="switchSource"
            >换图</c-image-preview-action
          >
          <c-image-preview-action
            :name="inlineCopy.deactivate"
            @click="active = false"
            >停用</c-image-preview-action
          >
        </template>
      </c-image-preview>
    </KeepAlive>
  </div>
</template>
