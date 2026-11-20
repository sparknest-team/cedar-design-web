<script setup lang="ts">
const inlineCopy = {
  notOpened: "Not opened",
  currentTarget: "Current target:",
  serviceDraft: "Service draft",
  moveToA: "Move to A",
  moveToB: "Move to B",
  serviceTarget: "Service target",
  opened: "Opened",
  openInA: "Open in A",
  targetA: "Target A",
  targetB: "Target B"
};

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
const resultKey = ref<keyof typeof inlineCopy | undefined>("notOpened");
const rawResult = ref("");
const result = computed(() =>
  resultKey.value ? inlineCopy[resultKey.value] : rawResult.value,
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
          h("p", inlineCopy.currentTarget + location.value),
          h(Input, {
            "aria-label": inlineCopy.serviceDraft,
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
            () => inlineCopy.moveToA,
          ),
          h(
            Button,
            { onClick: () => move("B") },
            () => inlineCopy.moveToB,
          ),
        ]);
    },
  });
  const owned: ReturnType<typeof Dialog.open> = Dialog.open(
    {
      title: inlineCopy.serviceTarget,
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
    <c-button @click="openSample">Open in A</c-button>
    <div
      ref="first"
      data-service-target="A"
      style="min-height: 64px; border: 1px dashed currentColor; padding: 12px"
    >
      Target A
    </div>
    <div
      ref="second"
      data-service-target="B"
      style="min-height: 64px; border: 1px dashed currentColor; padding: 12px"
    >
      Target B
    </div>
    <p role="status">{{ result }}</p>
  </c-space>
</template>
