<template>
  <div :class="cls" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { skeletonShapeProps } from './props'

export default defineComponent({
  name: createNamespace('skeleton-shape').name,
  props: skeletonShapeProps,
  setup(props) {
    const prefixCls = getPrefixCls('skeleton-shape')

    const cls = computed(() => [prefixCls, `${prefixCls}-${props.shape}`, `${prefixCls}-${props.size}`])

    return {
      prefixCls,
      cls,
    }
  },
})
</script>
