<template>
  <c-resize-box
    :directions="['right', 'bottom']"
    style="width: 500px; min-width: 100px; max-width: 100%; height: 200px; text-align: center"
  >
    <template #resize-trigger="{ direction }">
      <div :class="[`resizebox-demo`, `resizebox-demo-${direction === 'right' ? 'vertical' : 'horizontal'}`]">
        <div class="resizebox-demo-line" />
      </div>
    </template>
    <c-typography-paragraph>We are building the future of content discovery and creation.</c-typography-paragraph>
    <c-divider  />
    <c-typography-paragraph>
      ByteDance's content platforms enable people to enjoy content powered by AI technology. We inform, entertain, and
      inspire people across language, culture and geography.
    </c-typography-paragraph>
    <c-divider>ByteDance</c-divider>
    <c-typography-paragraph>Yiming Zhang is the founder and CEO of ByteDance.</c-typography-paragraph>
  </c-resize-box>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.resizebox-demo {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--c-color-bg-white);
}

.resizebox-demo::before,
.resizebox-demo::after {
  width: 6px;
  height: 6px;
  border: 1px solid rgb(var(--brand-6));
  content: '';
}

.resizebox-demo-line {
  flex: 1;
  background-color: rgb(var(--brand-6));
}

.resizebox-demo-vertical {
  flex-direction: column;
}

.resizebox-demo-vertical .resizebox-demo-line {
  width: 1px;
  height: 100%;
}

.resizebox-demo-horizontal .resizebox-demo-line {
  height: 1px;
}
</style>
