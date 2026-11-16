<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("dialogServiceContainerInline");

import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  onBeforeUnmount,
  ref,
  shallowRef,
} from "vue";
import Dialog from "..";
import Button from "../../button";
import Input from "../../input";
const first = ref<HTMLElement>();
const second = ref<HTMLElement>();
const active = shallowRef<ReturnType<typeof Dialog.open>>();
const context = getCurrentInstance()?.appContext;
const resultKey = ref<keyof typeof inlineCopy.value | undefined>("notOpened");
const rawResult = ref("");
const result = computed(() =>
  resultKey.value ? inlineCopy.value[resultKey.value] : rawResult.value,
);
function openSample() {
  if (!first.value) return;
  active.value?.close();
  const Content = defineComponent({
    setup() {
      const draft = ref("Draft"),
        location = ref("A");
      function move(to: "A" | "B") {
        const target = to === "A" ? first.value : second.value;
        if (target) {
          owned.update({ popupContainer: target });
          location.value = to;
        }
      }
      return () =>
        h("div", [
          h("p", inlineCopy.value.currentTarget + location.value),
          h(Input, {
            "aria-label": inlineCopy.value.serviceDraft,
            editMode: "direct",
            modelValue: draft.value,
            "onUpdate:modelValue": (value: string | null) => {
              draft.value = value ?? "";
            },
          }),
          h(
            "p",
            "切换挂载区域后，输入草稿仍保留。Moving the same dialog preserves its draft.",
          ),
          h(
            Button,
            { onClick: () => move("A") },
            () => inlineCopy.value.moveToA,
          ),
          h(
            Button,
            { onClick: () => move("B") },
            () => inlineCopy.value.moveToB,
          ),
        ]);
    },
  });
  const owned: ReturnType<typeof Dialog.open> = Dialog.open(
    {
      title: inlineCopy.value.serviceTarget,
      popupContainer: first.value,
      content: () => h(Content),
    },
    context,
  );
  active.value = owned;
  resultKey.value = "opened";
  void owned.then((action) => {
    if (active.value === owned) {
      active.value = undefined;
      resultKey.value = undefined;
      rawResult.value = String(action);
    }
  });
}
onBeforeUnmount(() => {
  active.value?.close();
  active.value = undefined;
});
</script>
<template>
  <c-space direction="column" :size="16">
    <c-button @click="openSample">{{ inlineCopy.openInA }}</c-button>
    <div
      ref="first"
      data-service-target="A"
      style="min-height: 64px; border: 1px dashed currentColor; padding: 12px"
    >
      {{ inlineCopy.targetA }}
    </div>
    <div
      ref="second"
      data-service-target="B"
      style="min-height: 64px; border: 1px dashed currentColor; padding: 12px"
    >
      {{ inlineCopy.targetB }}
    </div>
    <p role="status">{{ result }}</p>
  </c-space>
</template>
