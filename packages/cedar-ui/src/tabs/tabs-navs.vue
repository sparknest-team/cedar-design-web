<template>
  <div>
    <TabsNav
      :tabs="tabs"
      :active-key="activeKey"
      :active-index="activeIndex"
      :vertical="vertical"
      :indicator-position="indicatorPosition"
      :size="size"
      :variant="variant"
      :editable="editable"
      :animation="animation"
      :show-add-button="showAddButton"
      :header-padding="headerPadding"
      :scroll-position="scrollPosition"
      @click="navCtx.onTabClick"
      @add="navCtx.onAdd"
      @delete="navCtx.onDelete"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>
      <template v-if="$slots.suffix" #suffix>
        <slot name="suffix" />
      </template>
    </TabsNav>
    <!-- Mount slot children (CTabNav) for registration -->
    <slot />
  </div>
</template>

<script lang="ts">
import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent, inject } from 'vue'
import TabsNav from './tabs-nav'
import { tabsNavInjectionKey } from './context'
import type { TabsNavContext } from './context'

export default defineComponent({
  name: createNamespace("tabs-navs").name,
  components: { TabsNav },
  setup() {
    const navCtx = inject<TabsNavContext>(tabsNavInjectionKey)!

    // Wrap each reactive property in computed() for explicit dependency tracking
    const tabs = computed(() => navCtx.tabs)
    const activeKey = computed(() => navCtx.activeKey)
    const activeIndex = computed(() => navCtx.activeIndex)
    const vertical = computed(() => navCtx.vertical)
    const indicatorPosition = computed(() => navCtx.indicatorPosition)
    const size = computed(() => navCtx.size)
    const variant = computed(() => navCtx.variant)
    const editable = computed(() => navCtx.editable)
    const animation = computed(() => navCtx.animation)
    const showAddButton = computed(() => navCtx.showAddButton)
    const headerPadding = computed(() => navCtx.headerPadding)
    const scrollPosition = computed(() => navCtx.scrollPosition)

    return {
      tabs, activeKey, activeIndex, vertical, indicatorPosition, size,
      variant, editable, animation, showAddButton, headerPadding, scrollPosition,
      navCtx,
    }
  },
})
</script>
