<template>
  <div class="menu-demo">
    <div :class="`button-trigger ${open1 ? 'button-trigger-active' : ''}`">
      <c-icon-close v-if="open1" />
      <c-icon-message v-else />
    </div>
    <c-nav-menu :style="{ marginBottom: '-4px' }" mode="popButton" :tooltipProps="{ placement: 'left' }" showCollapseButton>
      <c-nav-menu-item key="1">
        <template #icon><c-icon-bug></c-icon-bug></template>
        Bugs
      </c-nav-menu-item>
      <c-nav-menu-item key="2">
        <template #icon><c-icon-bulb></c-icon-bulb></template>
        Ideas
      </c-nav-menu-item>
    </c-nav-menu>
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    return {
      open1: true,
    }
  },
}
</script>
<style lang="scss" scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}
</style>
