<script setup>
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("notificationApiReviewServiceInline");

import { onUnmounted, shallowRef } from "vue";
import { Notification as ReviewService } from "@cedar-design/ui-vue";
import DemoApiReviewPanel from "../../../docs/.vuepress/components/ApiReviewPanel.vue";
import { defineReviewConfig } from "@sparknest/ui-doc-preview-vue";
import raw from "./api-review-service.config.json";
const handle = shallowRef();
const sample = {
  src: "/cat.jpg",
  images: ["/cat.jpg", "/cat2.jpg"],
  title: inlineCopy.value.review,
  content: inlineCopy.value.triggerAfterCombiningControls,
  message: "Review",
  duration: 0,
  actions: [{ name: "Review A" }, { name: "Review B", disabled: true }],
  columns: [
    [
      { text: "Review A", value: "a" },
      { text: "Review B", value: "b" },
    ],
  ],
};
const options = (bindings) => ({
  ...sample,
  ...Object.fromEntries(
    Object.entries(bindings)
      .filter(([key]) => !key.startsWith("onVnode"))
      .map(([key, value]) => [
        key.replace(/-([a-z])/g, (_, c) => c.toUpperCase()),
        value,
      ]),
  ),
});
const publicNames = [
  "open",
  "confirm",
  "alert",
  "info",
  "success",
  "warning",
  "error",
  "loading",
  "normal",
  "close",
  "clear",
  "start",
  "finish",
  "setDefaultOptions",
  "resetDefaultOptions",
  "config",
  "destroy",
];
const service = Object.fromEntries(
  publicNames
    .filter((name) => typeof ReviewService[name] === "function")
    .map((name) => [name, (...args) => ReviewService[name](...args)]),
);
const methodDefaults = Object.fromEntries(
  publicNames.map((name) => [
    name,
    /^(open|confirm|alert|info|success|warning|error|loading|normal|config|setDefaultOptions)$/.test(
      name,
    )
      ? [sample]
      : [],
  ]),
);
function run(bindings, record) {
  const config = options(bindings);
  record("service:call", [config]);
  const fn =
    typeof ReviewService === "function"
      ? ReviewService
      : (ReviewService.open ?? ReviewService.info ?? ReviewService.start);
  if (!fn) {
    record("service:error", ["No callable service"]);
    return;
  }
  handle.value = fn(config);
  record("service:return", [handle.value]);
  handle.value?.then?.(
    (value) => record("service:resolved", [value]),
    (error) => record("service:rejected", [String(error)]),
  );
}
function act(name, record) {
  const result = handle.value?.[name]?.(
    name === "update"
      ? {
          title: "Updated review",
          content: "Updated review",
          message: "Updated review",
        }
      : undefined,
  );
  record("handle:" + name, [result]);
}
onUnmounted(() => {
  ReviewService.close?.();
  ReviewService.clear?.();
  ReviewService.finish?.();
  ReviewService.resetDefaultOptions?.();
});
</script>
<template>
  <DemoApiReviewPanel
    v-slot="scope"
    v-bind="defineReviewConfig(raw)"
    :service="service"
    :handle="handle"
    :method-defaults="methodDefaults"
    ><p>{{ inlineCopy.triggerAfterChangingControlsInspect }}</p>
    <c-space wrap
      ><c-button @click="run(scope.bindings, scope.record)">{{
        inlineCopy.trigger
      }}</c-button
      ><c-button
        :disabled="typeof handle?.update !== 'function'"
        @click="act('update', scope.record)"
        >{{ inlineCopy.updateHandle }}</c-button
      ><c-button
        :disabled="typeof handle?.close !== 'function'"
        @click="act('close', scope.record)"
        >{{ inlineCopy.closeHandle }}</c-button
      ></c-space
    ></DemoApiReviewPanel
  >
</template>
