<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { descriptionsItemProps } from './props'

export default defineComponent({
  name: createNamespace('descriptions-item').name,
  props: descriptionsItemProps,
  /**
   * @zh 标签
   * @en Label
   * @slot label
   */
  setup() {
    const prefixCls = getPrefixCls('descriptions')

    return {
      prefixCls,
    }
  },
})
</script>
