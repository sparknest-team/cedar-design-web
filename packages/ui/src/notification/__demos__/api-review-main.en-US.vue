<script setup>
const inlineCopy = {
  review: "Review",
  triggerAgainAfterChangingControls: "Trigger again after changing controls"
};

import DemoApiReviewPanel from "../../../docs/.vuepress/components/ApiReviewPanel.vue";
import { onUnmounted } from "vue";
import { Notification } from "@cedar-design/ui-vue";
import { defineReviewConfig } from "@sparknest/ui-doc-preview-vue";
import __apiReviewRawConfig from "./api-review.config.json";
function run(action, bindings) {
  const options = Object.fromEntries(
    Object.entries(bindings)
      .filter(([key]) => !key.startsWith("onVnode"))
      .map(([key, value]) => [
        key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()),
        value,
      ]),
  );
  Notification[action]({
    title: inlineCopy.review,
    content: inlineCopy.triggerAgainAfterChangingControls,
    ...options,
  });
}
</script>
<template>
  <DemoApiReviewPanel
    v-slot="__apiReview"
    v-bind="defineReviewConfig(__apiReviewRawConfig)"
  >
    <p>Trigger again to apply options.</p>
    <c-space wrap size="12px">
      <c-button @click="run('info', __apiReview.bindings)">info</c-button>
      <c-button @click="run('success', __apiReview.bindings)">success</c-button>
      <c-button @click="run('warning', __apiReview.bindings)">warning</c-button>
      <c-button @click="run('error', __apiReview.bindings)">error</c-button>
    </c-space>
  </DemoApiReviewPanel>
</template>
