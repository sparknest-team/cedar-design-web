<template>
  <c-space align="flex-end" :size="32" wrap>
    <c-space direction="column" :size="8">
      <span class="label">offset = -12</span>
      <c-avatar-group vertical :offset="-12">
        <c-avatar image-url="/cat.jpg" alt="用户一" bordered />
        <c-avatar image-url="/cat2.jpg" alt="用户二" bordered />
        <c-avatar image-url="/cat.jpg" alt="用户三" bordered />
        <c-avatar bordered>+2</c-avatar>
      </c-avatar-group>
    </c-space>
    <c-space direction="column" :size="8">
      <span class="label">offset = -20</span>
      <c-avatar-group vertical :offset="-20" :size="48">
        <c-avatar image-url="/cat.jpg" alt="用户一" bordered />
        <c-avatar image-url="/cat2.jpg" alt="用户二" bordered />
        <c-avatar color="#00bebe">A</c-avatar>
      </c-avatar-group>
    </c-space>
  </c-space>
</template>

<style scoped>
.label {
  color: var(--c-color-text-3);
  font-size: var(--c-font-size-sm);
}
</style>
