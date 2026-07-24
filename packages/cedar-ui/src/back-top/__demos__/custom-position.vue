<template>
  <div class="back-top-section">
    <div id="position-scroll" class="back-top-section__scroll">
      <ul>
        <li v-for="(_, index) of Array(40)" :key="index">Scroll to bottom {{ index + 1 }}</li>
      </ul>
    </div>
    <c-back-top target="#position-scroll" :duration="300" :right="80" :bottom="80" />
  </div>
</template>

<style scoped lang="scss">
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
