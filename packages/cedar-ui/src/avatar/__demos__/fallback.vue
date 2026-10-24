<template>
  <c-space align="flex-end" :size="24" wrap>
    <c-space direction="column" align="center" :size="8">
      <c-avatar lazy image-url="/cat.jpg" loading="/cat2.jpg" alt="懒加载与占位图" :size="48" />
      <span class="label">lazy + loading</span>
    </c-space>
    <c-space direction="column" align="center" :size="8">
      <c-avatar image-url="data:image/png;base64,AA==" error="/cat.jpg" alt="失败时回退到占位图" :size="48" />
      <span class="label">error 图片</span>
    </c-space>
    <c-space direction="column" align="center" :size="8">
      <c-avatar image-url="data:image/png;base64,AA==" alt="失败插槽" :size="48">
        <template #error>NA</template>
      </c-avatar>
      <span class="label">error 插槽</span>
    </c-space>
  </c-space>
</template>

<style scoped>
.label {
  color: var(--c-color-text-3);
  font-size: var(--c-font-size-sm);
}
</style>
