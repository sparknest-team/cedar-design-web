<template>
  <div :class="cls">
    <div v-if="isEmpty" :class="`${prefixCls}-empty`">
      <slot name="empty">
        <empty />
      </slot>
    </div>
    <Scrollbar ref="wrapperRef" :class="`${prefixCls}-list-wrapper`" :style="style" @scroll="handleScroll">
      <ul :class="`${prefixCls}-list`">
        <slot />
      </ul>
    </Scrollbar>
    <div v-if="$slots.footer && !isEmpty" :class="`${prefixCls}-footer`">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { createNamespace } from '../_utils/global-config'
import { computed, CSSProperties, defineComponent, inject, ref } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import Empty from '../empty'
import { MenuContext, menuInjectionKey } from './context'
import { isNumber } from '../_utils/is'
import Scrollbar from '../scrollbar'

export default defineComponent({
  name: createNamespace("menu-panel").name,
  components: {
    Scrollbar,
    Empty,
  },
  props: {
    isEmpty: {
      type: Boolean,
      default: false,
    },
    bottomOffset: {
      type: Number,
      default: 0,
    },
  },
  emits: ['scroll', 'reachBottom'],
  setup(props, { emit, slots }) {
    const prefixCls = getPrefixCls('menu')
    const menuCtx = inject<Partial<MenuContext>>(menuInjectionKey, {})
    const wrapperRef = ref<HTMLElement>()

    const handleScroll = (e: Event) => {
      const { scrollTop, scrollHeight, offsetHeight } = e.target as HTMLElement
      const bottom = scrollHeight - (scrollTop + offsetHeight)
      if (bottom <= props.bottomOffset) {
        emit('reachBottom', e)
      }
      emit('scroll', e)
    }

    const style = computed<CSSProperties | undefined>(() => {
      const popupMaxHeight = menuCtx.popupMaxHeight?.value ?? menuCtx.popupMaxHeight
      if (isNumber(popupMaxHeight)) {
        return {
          maxHeight: `${popupMaxHeight}px`,
        }
      }
      if (!popupMaxHeight) {
        return {
          maxHeight: 'none',
          overflowY: 'hidden',
        }
      }
      return undefined
    })

    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-has-footer`]: Boolean(slots.footer),
      },
    ])

    return {
      prefixCls,
      cls,
      style,
      wrapperRef,
      handleScroll,
    }
  },
})
</script>
