<template>
  <c-space align="center" :size="16" wrap>
    <c-space direction="column" align="center" :size="8">
      <c-avatar image-url="/cat.jpg" alt="一只猫" />
      <span class="label">image-url</span>
    </c-space>
    <c-space direction="column" align="center" :size="8">
      <c-avatar image-url="/cat2.jpg" alt="一只猫" :size="48" shape="square" />
      <span class="label">方形图片</span>
    </c-space>
    <c-space direction="column" align="center" :size="8">
      <c-avatar :size="48">
        <img src="/cat.jpg" alt="默认插槽中的图片" />
      </c-avatar>
      <span class="label">默认插槽 img</span>
    </c-space>
  </c-space>
</template>

<style scoped>
.label {
  color: var(--c-color-text-3);
  font-size: var(--c-font-size-sm);
}
</style>
