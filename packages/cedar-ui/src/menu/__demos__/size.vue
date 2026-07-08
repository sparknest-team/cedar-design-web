<template>
  <div class="menu-demo">
    <c-menu
      showCollapseButton
      :default-open-keys="['0']"
      :default-selected-keys="['0_1']"
      :style="{ width: `${width}px`, height: 'calc(100% - 28px)' }"
    >
      <SubMenu key="0">
        <template #icon>
          <c-icon-apps></c-icon-apps>
        </template>
        <template #title>Navigation 1</template>
        <c-menu-item key="0_0">Menu 1</c-menu-item>
        <c-menu-item key="0_1">Menu 2</c-menu-item>
        <c-menu-item key="0_2" disabled> Menu 3 </c-menu-item>
      </SubMenu>
      <SubMenu key="1">
        <template #icon>
          <c-icon-bug></c-icon-bug>
        </template>
        <template #title>Navigation 2</template>
        <c-menu-item key="1_0">Menu 1</c-menu-item>
        <c-menu-item key="1_1">Menu 2</c-menu-item>
        <c-menu-item key="1_2">Menu 3</c-menu-item>
      </SubMenu>
      <SubMenu key="2">
        <template #icon>
          <c-icon-bulb></c-icon-bulb>
        </template>
        <template #title>Navigation 3</template>
        <c-menu-item key="2_0">Menu 1</c-menu-item>
        <c-menu-item key="2_1">Menu 2</c-menu-item>
        <c-menu-item key="2_2">Menu 3</c-menu-item>
      </SubMenu>
    </c-menu>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const width = ref(320)
    return {
      width,
    }
  },
}
</script>
<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}
</style>
