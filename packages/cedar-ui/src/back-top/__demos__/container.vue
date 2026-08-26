<template>
  <p class="back-top-hint">请在下方容器内滚动，按钮会出现在容器右下角</p>
  <div class="back-top-section">
    <div id="target-scroll" class="back-top-section__scroll">
      <ul>
        <li v-for="(_, index) of Array(40)" :key="index">Scroll in container {{ index + 1 }}</li>
      </ul>
    </div>
    <c-back-top
      target-container="#target-scroll"
      :visible-height="120"
      :duration="300"
      :right="16"
      :bottom="16"
    />
  </div>
</template>

<style scoped lang="scss">
.back-top-hint {
  margin: 0 0 8px;
  color: var(--c-color-text-3);
  font-size: 14px;
}

.back-top-section {
  position: relative;

  &__scroll {
    height: 320px;
    overflow-y: auto;
    border: 1px solid var(--c-color-border-2);
    border-radius: 8px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      line-height: 36px;
      padding: 0 12px;
      border-bottom: 1px solid var(--c-color-border-2);
    }
  }
}
</style>
