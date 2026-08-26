<template>
  <a
    :href="disabled || loading ? undefined : href"
    :target="disabled || loading ? undefined : target"
    :rel="disabled || loading ? undefined : rel"
    :class="cls"
    :aria-disabled="disabled || loading || undefined"
    :aria-busy="loading || undefined"
    :tabindex="disabled || loading ? -1 : undefined"
    @click="handleClick"
  >
    <span v-if="loading || showIcon" :class="`${prefixCls}-icon`">
      <icon-loading v-if="loading" />
      <slot v-else name="icon">
        <icon-link />
      </slot>
    </span>
    <slot />
  </a>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { IconLink } from '@cedarjs/icons-vue/icon-link'
import { IconLoading } from '@cedarjs/icons-vue/icon-loading'
import { hasPropOrSlot } from '../_utils/use-prop-or-slot'
import { linkProps } from './props'

export default defineComponent({
  name: createNamespace('link').name,
  components: { IconLink, IconLoading },
  props: linkProps,
  emits: {
    /**
     * @zh 点击时触发
     * @en Emitted when the link is clicked
     * @property {MouseEvent} ev
     */
    click: (ev: MouseEvent) => true,
  },
  setup(props, { slots, emit }) {
    const prefixCls = getPrefixCls('link')
    const showIcon = hasPropOrSlot(props, slots, 'icon')

    const handleClick = (ev: MouseEvent) => {
      if (props.disabled || props.loading) {
        ev.preventDefault()
        return
      }
      emit('click', ev)
    }

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-status-${props.status}`,
      {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-loading`]: props.loading,
        [`${prefixCls}-hoverless`]: !props.hoverable,
        [`${prefixCls}-underline-${props.underline}`]: true,
        [`${prefixCls}-with-icon`]: props.loading || showIcon.value,
      },
    ])

    return {
      cls,
      prefixCls,
      showIcon,
      handleClick,
    }
  },
})
</script>
