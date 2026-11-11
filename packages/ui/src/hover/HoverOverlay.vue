<template>
  <div :class="classes(n(), [hovering, n('--hovering')], [focusing, n('--focusing')])"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { hoverOverlayProps as props } from './overlay-props'

const { name, n, classes } = createNamespace('hover-overlay')

export default defineComponent({
  name,
  props,
  setup: () => ({
    n,
    classes,
  }),
})
</script>

<style lang="less">
</style>
