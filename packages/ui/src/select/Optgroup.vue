<template>
  <li :class="prefixCls" role="group" :aria-labelledby="titleId">
    <div :id="titleId" :class="`${prefixCls}-title`" role="presentation">
      <slot name="label">{{ label }}</slot>
    </div>
    <ul :class="`${prefixCls}-options`" role="presentation"><slot /></ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, useId } from 'vue'
import { optgroupProps } from './optgroup-props'
import { createNamespace, getPrefixCls } from '../_utils/global-config'

const { name, n, classes } = createNamespace('optgroup')
export default defineComponent({
  name,
  props: optgroupProps,
  /**
   * @zh 选项组的标题
   * @en Title of option group
   * @slot label
   */
  setup() {
    const prefixCls = getPrefixCls('select-group')

    return {
      prefixCls,
      titleId: `select-group-${useId()}`,
    }
  },
})
</script>
