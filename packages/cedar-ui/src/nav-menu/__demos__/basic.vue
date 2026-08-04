<template>
  <div class="menu-demo">
    <c-nav-menu mode="horizontal" :default-selected-keys="['1']">
      <c-nav-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div
          :style="{
            width: '80px',
            height: '30px',
            borderRadius: '2px',
            background: 'var(--color-fill-3)',
            cursor: 'text',
          }"
        />
      </c-nav-menu-item>
      <c-nav-menu-item key="1">Home</c-nav-menu-item>
      <c-nav-menu-item key="2">Solution</c-nav-menu-item>
      <c-nav-menu-item key="3">Cloud Service</c-nav-menu-item>
      <c-nav-menu-item key="4">Cooperation</c-nav-menu-item>
    </c-nav-menu>
  </div>
</template>
<script lang="ts">
</script>
<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}
</style>
