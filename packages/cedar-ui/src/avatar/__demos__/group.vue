<template>
  <c-space direction="column" :size="24">
    <c-space direction="column" :size="8">
      <span class="label">默认叠层</span>
      <c-avatar-group>
        <c-avatar image-url="/cat.jpg" alt="用户一" bordered />
        <c-avatar image-url="/cat2.jpg" alt="用户二" bordered />
        <c-avatar image-url="/cat.jpg" alt="用户三" bordered />
        <c-avatar bordered>+2</c-avatar>
      </c-avatar-group>
    </c-space>

    <c-space direction="column" :size="8">
      <span class="label">max-count + max-style</span>
      <c-avatar-group
        :max-count="3"
        :size="48"
        :max-style="{ backgroundColor: '#1d2129', color: '#fff' }"
      >
        <c-avatar image-url="/cat.jpg" alt="用户一" />
        <c-avatar image-url="/cat2.jpg" alt="用户二" />
        <c-avatar color="#00bebe">A</c-avatar>
        <c-avatar color="#f59e0b">B</c-avatar>
        <c-avatar color="#ef4444">C</c-avatar>
      </c-avatar-group>
    </c-space>

    <c-space direction="column" :size="8">
      <span class="label">z-index-ascend</span>
      <c-avatar-group z-index-ascend>
        <c-avatar image-url="/cat.jpg" alt="用户一" />
        <c-avatar image-url="/cat2.jpg" alt="用户二" />
        <c-avatar color="#7b61ff">CD</c-avatar>
      </c-avatar-group>
    </c-space>

    <c-space direction="column" :size="8">
      <span class="label">shape="square" · offset="-16"</span>
      <c-avatar-group shape="square" :offset="-16" :size="40">
        <c-avatar image-url="/cat.jpg" alt="用户一" />
        <c-avatar image-url="/cat2.jpg" alt="用户二" />
        <c-avatar color="#00bebe">A</c-avatar>
        <c-avatar color="#7b61ff">B</c-avatar>
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
