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
import { computed, CSSProperties, defineComponent, inject, PropType, ref } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import Empty from '../empty'
import { EmitType } from '../_utils/types'
import { MenuContext, menuInjectionKey } from './context'
import { isNumber } from '../_utils/is'
import Scrollbar from '../scrollbar'

export default defineComponent({
  name: 'MenuPanel',
  components: {
    Scrollbar,
    Empty,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    isEmpty: {
      type: Boolean,
      default: false,
    },
    bottomOffset: {
      type: Number,
      default: 0,
    },
    onScroll: {
      type: [Function, Array] as PropType<EmitType<(ev: Event) => void>>,
    },
    onReachBottom: {
      type: [Function, Array] as PropType<EmitType<(ev: Event) => void>>,
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
      if (isNumber(menuCtx.popupMaxHeight)) {
        return {
          maxHeight: `${menuCtx.popupMaxHeight}px`,
        }
      }
      if (!menuCtx.popupMaxHeight) {
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
