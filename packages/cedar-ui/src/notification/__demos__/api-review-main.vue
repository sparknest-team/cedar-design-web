<script setup>
import DemoApiReviewPanel from "../../../docs/.vuepress/components/ApiReviewPanel.vue";
import { onUnmounted } from "vue";
import { Notification } from "@cedarjs/ui";
import { defineReviewConfig } from "@ui-foundation/ui-doc-preview";
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
    title: "审查通知 / Review",
    content: "切换属性后再次触发通知 / Trigger again after changing controls",
    ...options,
  });
}
</script>
<template>
  <DemoApiReviewPanel
    v-slot="__apiReview"
    v-bind="defineReviewConfig(__apiReviewRawConfig)"
  >
    <p>修改选项后重新触发 / Trigger again to apply options.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 12px">
      <c-button @click="run('info', __apiReview.bindings)">info</c-button>
      <c-button @click="run('success', __apiReview.bindings)">success</c-button>
      <c-button @click="run('warning', __apiReview.bindings)">warning</c-button>
      <c-button @click="run('error', __apiReview.bindings)">error</c-button>
    </div>
  </DemoApiReviewPanel>
</template>
