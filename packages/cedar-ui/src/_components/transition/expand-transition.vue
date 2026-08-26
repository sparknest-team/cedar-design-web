<template>
  <transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <slot />
  </transition>
</template>

<script lang="ts">
import { createNamespace } from '../../_utils/global-config'
import { defineComponent } from 'vue'

export default defineComponent({
  name: createNamespace("expand-transition").name,
  setup() {
    return {
      onBeforeEnter(el: Element) {
        ;(el as HTMLElement).style.height = '0'
      },
      onEnter(el: Element) {
        ;(el as HTMLElement).style.height = `${el.scrollHeight}px`
      },
      onAfterEnter(el: Element) {
        ;(el as HTMLElement).style.height = ''
      },
      onBeforeLeave(el: Element) {
        ;(el as HTMLElement).style.height = `${el.scrollHeight}px`
      },
      onLeave(el: Element) {
        ;(el as HTMLElement).style.height = `0`
      },
      onAfterLeave(el: Element) {
        ;(el as HTMLElement).style.height = ``
      },
    }
  },
})
</script>
