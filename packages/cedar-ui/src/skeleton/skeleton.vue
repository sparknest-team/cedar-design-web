<template>
  <div :class="cls">
    <slot v-if="loading" />
    <slot v-else name="content" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { skeletonProps } from './props'

export default defineComponent({
  name: createNamespace('skeleton').name,
  props: skeletonProps,
  setup(props) {
    const prefixCls = getPrefixCls('skeleton')

    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-animation`]: props.animation,
      },
    ])

    return {
      prefixCls,
      cls,
    }
  },
})
</script>
