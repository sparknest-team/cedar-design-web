<template>
  <c-space :size="16" wrap>
    <c-space direction="column" align="center" :size="8">
      <c-image width="160" height="100" object-fit="cover" object-position="left top" preview-disabled src="/cat.jpg" />
      <span class="label">160×100 · left top</span>
    </c-space>
    <c-space direction="column" align="center" :size="8">
      <c-image width="100" height="100" object-fit="cover" :radius="12" preview-disabled src="/cat.jpg" />
      <span class="label">radius 12</span>
    </c-space>
    <c-space direction="column" align="center" :size="8">
      <c-image width="100" height="100" object-fit="cover" radius="50%" preview-disabled src="/cat.jpg" />
      <span class="label">radius 50%</span>
    </c-space>
  </c-space>
</template>

<style scoped>
.label {
  color: var(--c-color-text-3);
  font-size: 12px;
}
</style>
