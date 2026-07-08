<template>
  <div :class="cls" :style="style" />
</template>

<script lang="ts">
import type { CSSProperties, PropType } from 'vue'
import { computed, defineComponent, nextTick, onMounted, onUpdated, ref, toRefs } from 'vue'
import { createNamespace } from '../_utils/global-config'

export default defineComponent({
  name: 'CTabsNavInk',
  props: {
    activeTabRef: {
      type: Object as PropType<HTMLElement>,
    },
    orientation: {
      type: String as PropType<'horizontal' | 'vertical'>,
    },
    disabled: Boolean,
    animation: Boolean,
  },
  setup(props, { expose }) {
    const { activeTabRef, orientation } = toRefs(props)
    const { classes, n } = createNamespace('tabs-nav-ink')
    const position = ref(0)
    const size = ref(0)

    const style = computed<CSSProperties>(() => {
      if (orientation.value === 'horizontal') {
        return {
          top: `${position.value}px`,
          height: `${size.value}px`,
        }
      }
      return {
        left: `${position.value}px`,
        width: `${size.value}px`,
      }
    })

    const getInkStyle = () => {
      if (activeTabRef.value) {
        const _position = orientation.value === 'horizontal' ? activeTabRef.value.offsetTop : activeTabRef.value.offsetLeft
        const _size = orientation.value === 'horizontal' ? activeTabRef.value.offsetHeight : activeTabRef.value.offsetWidth
        if (_position !== position.value || _size !== size.value) {
          position.value = _position
          size.value = _size
        }
      }
    }

    onMounted(() => {
      nextTick(() => getInkStyle())
    })

    onUpdated(() => {
      getInkStyle()
    })

    const cls = computed(() => classes(n(), [props.animation, n('--animation')], [props.disabled, n('--disabled')]))

    expose({
      getInkStyle,
    })

    return {
      getInkStyle,
      cls,
      style,
    }
  },
})
</script>
