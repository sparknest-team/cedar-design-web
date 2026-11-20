<script setup lang="ts">
import { ref } from "vue";
import { proxyRefs as demoProxyRefs } from "vue";

const scene1 = demoProxyRefs(
  (() => {
    const visibleSmall = ref(false);

    const visibleMedium = ref(false);

    const visibleLarge = ref(false);

    const handleClickSmall = () => {
      visibleSmall.value = true;
    };

    const handleClickMedium = () => {
      visibleMedium.value = true;
    };

    const handleClickLarge = () => {
      visibleLarge.value = true;
    };

    const handleConfirm = () => {
      visibleSmall.value = false;
      visibleMedium.value = false;
      visibleLarge.value = false;
    };

    const handleCancel = () => {
      visibleSmall.value = false;
      visibleMedium.value = false;
      visibleLarge.value = false;
    };
    return {
      visibleSmall,
      visibleMedium,
      visibleLarge,
      handleClickSmall,
      handleClickMedium,
      handleClickLarge,
      handleConfirm,
      handleCancel,
    };
  })(),
);

const scene2 = demoProxyRefs(
  (() => {
    const show = ref(false);

    const handleClick = () => {
      show.value = true;
    };

    const handleConfirm = () => {
      show.value = false;
    };

    const handleCancel = () => {
      show.value = false;
    };
    return { show, handleClick, handleConfirm, handleCancel };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="width"
    >
      <h4>对话框宽度</h4>
      <c-space>
        <c-button @click="scene1.handleClickSmall">Small Dialog</c-button>
        <c-button @click="scene1.handleClickMedium">Medium Dialog</c-button>
        <c-button @click="scene1.handleClickLarge">Large Dialog</c-button>
      </c-space>
      <c-dialog
        :width="400"
        v-model:open="scene1.visibleSmall"
        @confirm="scene1.handleConfirm"
        @cancel="scene1.handleCancel"
      >
        <template #title>Small Dialog</template>
        <div>
          You can customize modal body text by the current situation. This modal
          will be closed immediately once you press the OK button.
        </div>
      </c-dialog>
      <c-dialog
        v-model:open="scene1.visibleMedium"
        @confirm="scene1.handleConfirm"
        @cancel="scene1.handleCancel"
      >
        <template #title>Medium Dialog</template>
        <div>
          You can customize modal body text by the current situation. This modal
          will be closed immediately once you press the OK button.
        </div>
      </c-dialog>
      <c-dialog
        :width="720"
        v-model:open="scene1.visibleLarge"
        @confirm="scene1.handleConfirm"
        @cancel="scene1.handleCancel"
      >
        <template #title>Large Dialog</template>
        <div>
          You can customize modal body text by the current situation. This modal
          will be closed immediately once you press the OK button.
        </div>
      </c-dialog>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="fullscreen"
    >
      <h4>全屏</h4>
      <c-button @click="scene2.handleClick">Open Dialog</c-button>
      <c-dialog
        v-model:open="scene2.show"
        @confirm="scene2.handleConfirm"
        @cancel="scene2.handleCancel"
        fullscreen
      >
        <template #title>Title</template>
        <div>
          You can customize modal body text by the current situation. This modal
          will be closed immediately once you press the OK button.
        </div>
      </c-dialog>
    </section>
  </div>
</template>

<style scoped lang="less">
.demo-comparison {
  display: grid;
  gap: 24px;
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case {
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case > h4 {
  margin: 0 0 12px;
  font-size: 14px;
}
</style>
