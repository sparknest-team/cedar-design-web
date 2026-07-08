<template>
  <div :class="cls" />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { getPrefixCls } from '../_utils/global-config'

export default defineComponent({
  name: 'SkeletonShape',
  props: {
    /**
     * @zh 图形骨架的形状
     * @en The shape of the shape skeleton
     * @values 'square', 'circle'
     */
    shape: {
      type: String as PropType<'square' | 'circle'>,
      default: 'square',
    },
    /**
     * @zh 图形骨架的大小
     * @en The size of the shape skeleton
     * @values 'sm', 'md', 'lg'
     * @defaultValue 'md'
     */
    size: {
      type: String,
      default: 'md',
    },
  },
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
