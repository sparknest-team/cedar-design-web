<template>
  <li :class="prefixCls">
    <div :class="`${prefixCls}-title`">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <ul :class="`${prefixCls}-list`">
      <slot />
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'

export default defineComponent({
  name: createNamespace('menu-group').name,
  props: {
    /**
     * @zh 分组标题
     * @en Group title
     */
    title: String,
  },
  /**
   * @zh 分组标题
   * @en Group title
   * @slot title
   */
  setup() {
    const prefixCls = getPrefixCls('menu-group')

    return {
      prefixCls,
    }
  },
})
</script>
