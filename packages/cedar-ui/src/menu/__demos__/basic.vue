<template>
  <div class="menu-demo">
    <c-menu mode="horizontal" :default-selected-keys="['1']">
      <c-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div
          :style="{
            width: '80px',
            height: '30px',
            borderRadius: '2px',
            background: 'var(--color-fill-3)',
            cursor: 'text',
          }"
        />
      </c-menu-item>
      <c-menu-item key="1">Home</c-menu-item>
      <c-menu-item key="2">Solution</c-menu-item>
      <c-menu-item key="3">Cloud Service</c-menu-item>
      <c-menu-item key="4">Cooperation</c-menu-item>
    </c-menu>
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
