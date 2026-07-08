<template>
  <c-layout style="height: 300px">
    <c-layout-header class="layout-header">Header</c-layout-header>
    <c-layout-content class="layout-content">Content</c-layout-content>
    <c-layout-footer class="layout-footer">Footer</c-layout-footer>
  </c-layout>
  <br />
  <c-layout style="height: 300px">
    <c-layout-header class="layout-header">Header</c-layout-header>
    <c-layout>
      <c-layout-sider class="layout-sider">Sider</c-layout-sider>
      <c-layout-content class="layout-content">Content</c-layout-content>
    </c-layout>
    <c-layout-footer class="layout-footer">Footer</c-layout-footer>
  </c-layout>
  <br />
  <c-layout style="height: 300px">
    <c-layout-header class="layout-header">Header</c-layout-header>
    <c-layout>
      <c-layout-content class="layout-content">Content</c-layout-content>
      <c-layout-sider class="layout-sider">Sider</c-layout-sider>
    </c-layout>
    <c-layout-footer class="layout-footer">Footer</c-layout-footer>
  </c-layout>
  <br />
  <c-layout style="height: 300px">
    <c-layout-header class="layout-header">Header</c-layout-header>
    <c-layout>
      <c-layout-sider class="layout-sider" style="width: 64px">Sider</c-layout-sider>
      <c-layout-sider class="layout-sider" style="width: 206px; margin-left: 1px">Sider </c-layout-sider>
      <c-layout-content class="layout-content">Content</c-layout-content>
    </c-layout>
    <c-layout-footer class="layout-footer">Footer</c-layout-footer>
  </c-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  })
</script>
<style>
.layout-header {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--brand-3));
  color: #fff;
}

.layout-content {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--brand-4));
  color: #fff;
}

.layout-sider {
  height: 100px;
  background-color: rgb(var(--brand-5));

  .cedar-layout-sider-children {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
}

.layout-footer {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--brand-6));
  color: #fff;
}
</style>
