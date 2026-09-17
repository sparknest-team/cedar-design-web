<template>
  <transition @enter="onEnter" @after-enter="onAfterEnter" @before-leave="onBeforeLeave">
    <slot />
  </transition>
</template>

<script lang="ts">
import { createNamespace } from '../_utils/global-config'
import { defineComponent } from 'vue'

export default defineComponent({
  name: createNamespace("expand-transition").name,
  props: {
    expanded: Boolean,
  },
  emits: ['end'],
  setup(props, { emit }) {
    return {
      onEnter(el: Element) {
        const htmlEl = el as HTMLElement
        const endHeight = `${el.scrollHeight}px`
        htmlEl.style.height = props.expanded ? '0' : endHeight
        // eslint-disable-next-line no-unused-expressions
        htmlEl.offsetHeight
        htmlEl.style.height = props.expanded ? endHeight : '0'
      },
      onAfterEnter(el: Element) {
        ;(el as HTMLElement).style.height = props.expanded ? '' : '0'
        emit('end')
      },
      onBeforeLeave(el: Element) {
        ;(el as HTMLElement).style.display = 'none'
      },
    }
  },
})
</script>
