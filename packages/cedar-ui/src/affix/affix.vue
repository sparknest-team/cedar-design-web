<template>
  <ResizeObserver v-if="!cssMode" @resize="updatePositionThrottle">
    <div ref="wrapperRef">
      <div v-if="isFixed && !disabled" :style="placeholderStyles" />
      <div :class="classNames" :style="contentStyles">
        <ResizeObserver @resize="updatePositionThrottle">
          <slot />
        </ResizeObserver>
      </div>
    </div>
  </ResizeObserver>
  <div v-else ref="wrapperRef" :class="classNames" :style="stickyStyles">
    <slot />
  </div>
</template>

<script lang="ts">
import type { CSSProperties, PropType, Ref } from 'vue'
import { computed, defineComponent, onMounted, ref, toRefs, watchEffect } from 'vue'
import ResizeObserver from '../_components/resize-observer'
import { getPrefixCls } from '../_utils/global-config'
import { getElement, on, off } from '../_utils/dom'
import { isUndefined, isWindow } from '../_utils/is'
import { throttleByRaf } from '../_utils/throttle-by-raf'

function getTargetRect(target: HTMLElement | Window) {
  return isWindow(target)
    ? {
        top: 0,
        bottom: window.innerHeight,
      }
    : target.getBoundingClientRect()
}

export default defineComponent({
  name: 'Affix',
  components: {
    ResizeObserver,
  },
  props: {
    /**
     * @zh 距离窗口顶部达到指定偏移量后触发
     * @en Triggered when the specified offset is reached from the top of the window
     */
    offsetTop: {
      type: Number,
      default: 0,
    },
    /**
     * @zh 距离窗口底部达到指定偏移量后触发
     * @en Triggered when the specified offset is reached from the bottom of the window
     */
    offsetBottom: {
      type: Number,
    },
    /**
     * @zh 滚动容器，默认是 `window`
     * @en Scroll container, default is `window`
     */
    target: {
      type: [String, Object, Function] as PropType<string | HTMLElement | Window>,
    },
    /**
     * @zh `target`的外层滚动元素，默认是 `window`
     * @en The outer scroll element of `target`, the default is `window`
     */
    targetContainer: {
      type: [String, Object, Function] as PropType<string | HTMLElement | Window>,
    },
    /**
     * @zh 固钉时的 z-index
     * @en z-index when affixed
     */
    zIndex: {
      type: Number,
      default: 10,
    },
    /**
     * @zh 是否禁用固钉
     * @en Whether to disable affix
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否使用原生 `position: sticky`
     * @en Whether to use native `position: sticky`
     */
    cssMode: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    /**
     * @zh 固定状态发生改变时触发
     * @en Triggered when the fixed state changes
     * @param {boolean} fixed
     */
    change: (fixed: boolean) => true,
  },
  setup(props, { emit, expose }) {
    const prefixCls = getPrefixCls('affix')
    const { target, targetContainer, cssMode, disabled, zIndex } = toRefs(props)
    const wrapperRef = ref<HTMLElement>()
    const targetRef = ref<HTMLElement | Window>()
    const isFixed = ref(false)
    const placeholderStyles: Ref<CSSProperties> = ref({})
    const fixedStyles: Ref<CSSProperties> = ref({})
    const classNames = computed(() => ({
      [prefixCls]: isFixed.value,
      [`${prefixCls}-css-mode`]: cssMode.value,
    }))

    const stickyStyles = computed<CSSProperties>(() => ({
      position: 'sticky',
      top: `${props.offsetTop}px`,
      zIndex: zIndex.value,
    }))

    const contentStyles = computed(() => {
      if (cssMode.value) {
        return stickyStyles.value
      }

      return fixedStyles.value
    })

    const updatePositionThrottle = throttleByRaf(() => {
      if (cssMode.value || disabled.value || !wrapperRef.value || !targetRef.value) {
        if (isFixed.value) {
          isFixed.value = false
          emit('change', false)
        }
        placeholderStyles.value = {}
        fixedStyles.value = {}
        return
      }

      const { offsetTop, offsetBottom } = props
      const offsetType = isUndefined(offsetBottom) ? 'top' : 'bottom'
      const wrapperRect = wrapperRef.value.getBoundingClientRect()
      const targetRect = getTargetRect(targetRef.value)
      let newIsFixed = false
      let newFixedStyles: CSSProperties = {}
      const newPlaceholderStyles: CSSProperties = {
        width: `${wrapperRef.value.offsetWidth}px`,
        height: `${wrapperRef.value.offsetHeight}px`,
      }

      if (offsetType === 'top') {
        newIsFixed = wrapperRect.top - targetRect.top < (offsetTop || 0)
        newFixedStyles = newIsFixed
          ? {
              position: 'fixed',
              top: `${targetRect.top + (offsetTop || 0)}px`,
              zIndex: zIndex.value,
            }
          : {}
      } else {
        newIsFixed = targetRect.bottom - wrapperRect.bottom < (offsetBottom || 0)
        newFixedStyles = newIsFixed
          ? {
              position: 'fixed',
              bottom: `${window.innerHeight - targetRect.bottom + (offsetBottom || 0)}px`,
              zIndex: zIndex.value,
            }
          : {}
      }

      if (newIsFixed !== isFixed.value) {
        isFixed.value = newIsFixed
        emit('change', newIsFixed)
      }

      placeholderStyles.value = newPlaceholderStyles
      fixedStyles.value = {
        ...newFixedStyles,
        ...(newIsFixed ? newPlaceholderStyles : {}),
      }
    })

    onMounted(() => {
      if (cssMode.value) {
        return
      }

      watchEffect((onInvalidate) => {
        const element =
          (target.value &&
            target.value !== window &&
            getElement(target.value as string | HTMLElement)) ||
          window

        targetRef.value = element

        if (element) {
          on(element, 'scroll', updatePositionThrottle)
          on(element, 'resize', updatePositionThrottle)

          onInvalidate(() => {
            off(element, 'scroll', updatePositionThrottle)
            off(element, 'resize', updatePositionThrottle)
          })
        }
      })

      watchEffect((onInvalidate) => {
        if (!targetRef.value) return

        const container =
          (targetContainer.value &&
            targetContainer.value !== window &&
            getElement(targetContainer.value as string | HTMLElement)) ||
          window

        if (container) {
          on(container, 'scroll', updatePositionThrottle)
          on(container, 'resize', updatePositionThrottle)

          onInvalidate(() => {
            off(container, 'scroll', updatePositionThrottle)
            off(container, 'resize', updatePositionThrottle)
          })
        }
      })
    })

    expose({
      updatePosition: () => {
        updatePositionThrottle()
      },
    })

    return {
      wrapperRef,
      isFixed,
      disabled,
      cssMode,
      classNames,
      placeholderStyles,
      contentStyles,
      stickyStyles,
      updatePositionThrottle,
    }
  },
})
</script>
