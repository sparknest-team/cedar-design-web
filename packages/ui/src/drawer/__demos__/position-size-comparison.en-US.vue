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
    const visible = ref(false);

    const position = ref("right");

    const handleClick = () => {
      visible.value = true;
    };

    const handleConfirm = () => {
      visible.value = false;
    };

    const handleCancel = () => {
      visible.value = false;
    };
    return { visible, position, handleClick, handleConfirm, handleCancel };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="size"
    >
      <h4>Size</h4>
      <c-space>
        <c-button status="primary" @click="scene1.handleClickSmall"
          >sm Drawer</c-button
        >
        <c-button status="primary" @click="scene1.handleClickMedium"
          >md Drawer</c-button
        >
        <c-button status="primary" @click="scene1.handleClickLarge"
          >lg Drawer</c-button
        >
      </c-space>
      <c-drawer
        v-model:open="scene1.visibleSmall"
        :width="280"
        @confirm="scene1.handleConfirm"
        @cancel="scene1.handleCancel"
        unmount-on-close
      >
        <template #title>Title</template>
        <div>
          You can customize modal body text by the current situation. This modal
          will be closed immediately once you press the OK button.
        </div>
      </c-drawer>
      <c-drawer
        v-model:open="scene1.visibleMedium"
        :width="420"
        @confirm="scene1.handleConfirm"
        @cancel="scene1.handleCancel"
        unmount-on-close
      >
        <template #title>Title</template>
        <div>
          You can customize modal body text by the current situation. This modal
          will be closed immediately once you press the OK button.
        </div>
      </c-drawer>
      <c-drawer
        v-model:open="scene1.visibleLarge"
        :width="640"
        @confirm="scene1.handleConfirm"
        @cancel="scene1.handleCancel"
        unmount-on-close
      >
        <template #title>Title</template>
        <div>
          You can customize modal body text by the current situation. This modal
          will be closed immediately once you press the OK button.
        </div>
      </c-drawer>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="location"
    >
      <h4>Location</h4>
      <c-radio-group v-model="scene2.position">
        <c-radio value="top">Top</c-radio>
        <c-radio value="right">Right</c-radio>
        <c-radio value="bottom">Bottom</c-radio>
        <c-radio value="left">Left</c-radio>
      </c-radio-group>
      <div
        :style="{
          marginTop: '20px',
        }"
      >
        <c-button status="primary" @click="scene2.handleClick"
          >Open Drawer</c-button
        >
      </div>
      <c-drawer
        :width="340"
        :height="340"
        v-model:open="scene2.visible"
        :placement="scene2.position"
        @confirm="scene2.handleConfirm"
        @cancel="scene2.handleCancel"
        unmountOnClose
      >
        <template #title> Title </template>
        <div>
          You can customize modal body text by the current situation. This modal
          will be closed immediately once you press the OK button.
        </div>
      </c-drawer>
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
