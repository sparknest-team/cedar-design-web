<template>
  <transition name="fade-in">
    <div
      v-if="visible"
      :class="prefixCls"
      role="button"
      tabindex="0"
      :aria-label="ariaLabel"
      @click="scrollToTop"
      @keydown.enter.prevent="scrollToTop"
      @keydown.space.prevent="scrollToTop"
    >
      <slot>
        <button :class="`${prefixCls}-btn`">
          <icon-to-top />
        </button>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
// @ts-ignore
import BTween from 'b-tween'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { on, off } from '../_utils/dom'
import { throttleByRaf } from '../_utils/throttle-by-raf'
import { IconToTop } from '@cedarjs/icons-vue/icon-to-top'
import { isString } from '../_utils/is'
import { backTopProps } from './props'

export default defineComponent({
  name: createNamespace('back-top').name,
  components: {
    IconToTop,
  },
  props: backTopProps,
  setup(props) {
    const prefixCls = getPrefixCls('back-top')
    const visible = ref(false)
    const target = ref<HTMLElement>()
    const isWindow = !props.targetContainer

    const scrollHandler = throttleByRaf(() => {
      if (target.value) {
        const { visibleHeight } = props
        const { scrollTop } = target.value
        visible.value = scrollTop >= visibleHeight
      }
    })

    const getContainer = (container: string | HTMLElement) => {
      if (isString(container)) {
        return document.querySelector(container) as HTMLElement
      }
      return container
    }

    onMounted(() => {
      target.value = isWindow ? document?.documentElement : getContainer(props.targetContainer)
      if (target.value) {
        on(isWindow ? window : target.value, 'scroll', scrollHandler)
        scrollHandler()
      }
    })

    onUnmounted(() => {
      scrollHandler.cancel()
      if (target.value) {
        off(isWindow ? window : target.value, 'scroll', scrollHandler)
      }
    })

    const scrollToTop = () => {
      if (target.value) {
        const { scrollTop } = target.value
        const tween = new BTween({
          from: { scrollTop },
          to: { scrollTop: 0 },
          easing: props.easing,
          duration: props.duration,
          onUpdate: (keys: any) => {
            if (target.value) {
              target.value.scrollTop = keys.scrollTop
            }
          },
        })
        tween.start()
        // props.onClick && props.onClick();
      }
    }

    return {
      prefixCls,
      visible,
      scrollToTop,
    }
  },
})
</script>
