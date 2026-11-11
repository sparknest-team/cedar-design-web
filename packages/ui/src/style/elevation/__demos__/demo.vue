<template>
  <c-space class="elevation-demo" :size="[24, 24]" wrap>
    <div
      v-for="level in 25"
      :key="level"
      class="elevation-item"
      :class="`c-elevation--${level - 1}`"
    >
      {{ level - 1 }}
    </div>
  </c-space>
</template>

<style lang="scss">
.elevation-demo {
  margin-top: 8px;
}

.elevation-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  border-radius: 4px;
  background: var(--c-color-bg-1);
}
</style>
