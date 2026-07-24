<template>
  <div class="menu-demo">
    <c-button
      :style="{
        padding: '0 12px',
        height: '30px',
        lineHeight: '30px',
        marginBottom: '4px',
      }"
      type="primary"
      @click="toggleCollapse"
    >
      <c-icon-menu-unfold v-if="collapsed" />
      <c-icon-menu-fold v-else />
    </c-button>
    <c-menu
      :style="{ width: '200px', borderRadius: '4px' }"
      theme="dark"
      :collapsed="collapsed"
      :default-open-keys="['0']"
      :default-selected-keys="['0_2']"
    >
      <c-sub-menu key="0">
        <template #icon>
          <c-icon-apps></c-icon-apps>
        </template>
        <template #title>Navigation 1</template>
        <c-menu-item key="0_0">Menu 1</c-menu-item>
        <c-menu-item key="0_1">Menu 2</c-menu-item>
        <c-menu-item key="0_2">Menu 3</c-menu-item>
        <c-menu-item key="0_3">Menu 4</c-menu-item>
      </c-sub-menu>
      <c-sub-menu key="1">
        <template #icon>
          <c-icon-bug></c-icon-bug>
        </template>
        <template #title>Navigation 2</template>
        <c-menu-item key="1_0">Menu 1</c-menu-item>
        <c-menu-item key="1_1">Menu 2</c-menu-item>
        <c-menu-item key="1_2">Menu 3</c-menu-item>
      </c-sub-menu>
      <c-sub-menu key="2">
        <template #icon>
          <c-icon-bulb></c-icon-bulb>
        </template>
        <template #title>Navigation 3</template>
        <c-menu-item key="2_0">Menu 1</c-menu-item>
        <c-menu-item key="2_1">Menu 2</c-menu-item>
        <c-sub-menu key="2_2" title="Navigation 4">
          <c-menu-item key="2_2_0">Menu 1</c-menu-item>
          <c-menu-item key="2_2_1">Menu 2</c-menu-item>
        </c-sub-menu>
      </c-sub-menu>
    </c-menu>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const collapsed = ref(false);
    return {
      collapsed,
      toggleCollapse: () => {
        collapsed.value = !collapsed.value;
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}
</style>
