<template>
  <div class="menu-demo">
    <c-nav-menu mode="pop" showCollapseButton>
      <c-nav-menu-item key="1">
        <template #icon>
          <c-icon-apps></c-icon-apps>
        </template>
        Navigation 1
      </c-nav-menu-item>
      <c-nav-menu-sub-menu key="2">
        <template #icon>
          <c-icon-bug></c-icon-bug>
        </template>
        <template #title>Navigation 2</template>
        <c-nav-menu-item key="2_0">Beijing</c-nav-menu-item>
        <c-nav-menu-item key="2_1">Shanghai</c-nav-menu-item>
        <c-nav-menu-item key="2_2">Guangzhou</c-nav-menu-item>
      </c-nav-menu-sub-menu>
      <c-nav-menu-sub-menu key="3">
        <template #icon>
          <c-icon-bulb></c-icon-bulb>
        </template>
        <template #title>Navigation 3</template>
        <c-nav-menu-item key="3_0">Wuhan</c-nav-menu-item>
        <c-nav-menu-item key="3_1">Chengdu</c-nav-menu-item>
      </c-nav-menu-sub-menu>
      <c-nav-menu-item key="4">
        <template #icon>
          <c-icon-safe></c-icon-safe>
        </template>
        Navigation 4
      </c-nav-menu-item>
      <c-nav-menu-item key="5">
        <template #icon>
          <c-icon-fire></c-icon-fire>
        </template>
        Navigation 5
      </c-nav-menu-item>
    </c-nav-menu>
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
