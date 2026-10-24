<template>
  <TabItem :name="name" :lazy-load="lazyLoad" :destroy-on-hide="destroyOnHide"><slot /></TabItem>
</template>

<script setup lang="ts">
import { createNamespace } from '../_utils/global-config'
import { tabPaneProps } from './props'
import TabItem from './TabItem.vue'
import type { TabPaneSlots } from './types'

defineSlots<TabPaneSlots>()
defineOptions({ name: createNamespace('tab-pane').name })
defineProps(tabPaneProps)
</script>
