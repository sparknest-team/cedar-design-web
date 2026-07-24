<template>
  <div class="layout-demo">
    <c-layout>
      <c-layout-header>Header</c-layout-header>
      <c-layout>
        <c-layout-sider :resize-directions="['right']"> Sider </c-layout-sider>
        <c-layout-content>Content</c-layout-content>
      </c-layout>
      <c-layout-footer>Footer</c-layout-footer>
    </c-layout>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.layout-demo :deep(.c-layout-header),
.layout-demo :deep(.c-layout-footer),
.layout-demo :deep(.c-layout-sider-children),
.layout-demo :deep(.c-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.layout-demo :deep(.c-layout-header),
.layout-demo :deep(.c-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}

.layout-demo :deep(.c-layout-sider) {
  width: 206px;
  background-color: var(--color-primary-light-3);
  min-width: 150px;
  max-width: 500px;
  height: 200px;
}

.layout-demo :deep(.c-layout-content) {
  background-color: rgb(var(--brand-6));
}
</style>
