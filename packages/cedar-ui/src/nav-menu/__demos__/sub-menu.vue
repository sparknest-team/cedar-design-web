<template>
  <div class="menu-demo">
    <c-nav-menu
      :style="{ width: '200px', height: '100%' }"
      :default-open-keys="['0']"
      :default-selected-keys="['0_1']"
      show-collapse-button
    >
      <c-nav-menu-item key="0_0_0" data-obj="1">Menu 1</c-nav-menu-item>
      <c-nav-menu-sub-menu key="0">
        <template #icon>
          <c-icon-apps></c-icon-apps>
        </template>
        <template #title>Navigation 1</template>
        <c-nav-menu-item key="0_0">Menu 1</c-nav-menu-item>
        <c-nav-menu-item key="0_1">Menu 2</c-nav-menu-item>
        <c-nav-menu-item key="0_2" disabled>Menu 3</c-nav-menu-item>
      </c-nav-menu-sub-menu>
      <c-nav-menu-sub-menu key="1">
        <template #icon>
          <c-icon-bug></c-icon-bug>
        </template>
        <template #title>Navigation 2</template>
        <c-nav-menu-item key="1_0">Menu 1</c-nav-menu-item>
        <c-nav-menu-item key="1_1">Menu 2</c-nav-menu-item>
        <c-nav-menu-item key="1_2">Menu 3</c-nav-menu-item>
      </c-nav-menu-sub-menu>
      <c-nav-menu-sub-menu key="2">
        <template #icon>
          <c-icon-bulb></c-icon-bulb>
        </template>
        <template #title>Navigation 3</template>
        <c-nav-menu-item-group title="Menu Group 1">
          <c-nav-menu-item key="2_0">Menu 1</c-nav-menu-item>
          <c-nav-menu-item key="2_1">Menu 2</c-nav-menu-item>
        </c-nav-menu-item-group>
        <c-nav-menu-item-group title="Menu Group 2">
          <c-nav-menu-item key="2_2">Menu 3</c-nav-menu-item>
          <c-nav-menu-item key="2_3">Menu 4</c-nav-menu-item>
        </c-nav-menu-item-group>
      </c-nav-menu-sub-menu>
    </c-nav-menu>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const collapsed = ref(false)
    return {
      collapsed,
      toggleCollapse: () => {
        collapsed.value = !collapsed.value
      },
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
