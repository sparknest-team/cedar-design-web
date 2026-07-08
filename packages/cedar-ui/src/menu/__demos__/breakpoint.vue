<template>
  <div class="menu-demo">
    <c-menu
      :style="{ width: '200px', height: '100%' }"
      :default-open-keys="['0']"
      :default-selected-keys="['0_2']"
      show-collapse-button
      breakpoint="xl"
      @collapse="onCollapse"
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
          <c-icon-blub></c-icon-blub>
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
export default {
  setup() {
    return {
      onCollapse(val, type) {
        const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩'
        Message.info({
          content,
          duration: 2000,
        })
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
