<template>
  <c-space align="flex-end" :size="16" wrap>
    <c-space direction="column" align="center" :size="8">
      <c-avatar>圆</c-avatar>
      <span class="label">circle</span>
    </c-space>
    <c-space direction="column" align="center" :size="8">
      <c-avatar shape="square">方</c-avatar>
      <span class="label">square</span>
    </c-space>
    <c-space direction="column" align="center" :size="8">
      <c-avatar image-url="/cat.jpg" alt="圆形图片" />
      <span class="label">circle · 图片</span>
    </c-space>
    <c-space direction="column" align="center" :size="8">
      <c-avatar image-url="/cat.jpg" alt="方形图片" shape="square" />
      <span class="label">square · 图片</span>
    </c-space>
  </c-space>
</template>

<style scoped>
.label {
  color: var(--c-color-text-3);
  font-size: var(--c-font-size-sm);
}
</style>
