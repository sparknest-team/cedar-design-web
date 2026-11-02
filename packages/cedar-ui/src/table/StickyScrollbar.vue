<template>
  <Scrollbar
    v-if="width > viewport"
    ref="scrollbar"
    type="embed"
    :dir="dir"
    disable-vertical
    :outer-class="[n('sticky-scrollbar'), { [n('--scrollbar-active')]: active }]"
    :outer-style="{ width: `${viewport}px` }"
    :class="n('sticky-scrollbar-viewport')"
    tabindex="0"
    role="region"
    aria-label="Scroll table horizontally"
    @scroll="scrollBody"
    @keydown="onKeydown"
  >
    <div :style="{ width: `${width}px` }" :class="n('sticky-scrollbar-content')" />
  </Scrollbar>
</template>
<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onActivated, onDeactivated, ref, watch } from 'vue'
import { useDirection, inlineScrollLeft, setInlineScrollLeft } from '../_utils/direction'
import { useElementResize } from '../_utils/resize-observer'
import Scrollbar from '../scrollbar'
import { createNamespace } from '../_utils/global-config'
defineOptions({ name: createNamespace('table-sticky-scrollbar').name })
const props = defineProps<{ container?: HTMLElement; active?: boolean }>()
const { dir } = useDirection(() => props.container)
const { n } = createNamespace('table')
const scrollbar = ref<InstanceType<typeof Scrollbar>>()
const rail = computed(() => scrollbar.value?.containerRef)
const width = ref(0)
const viewport = ref(0)
let cleanup: (() => void) | undefined
let synchronizedOffset: number | undefined
const sync = () => {
  if (rail.value && props.container) {
    setInlineScrollLeft(rail.value, inlineScrollLeft(props.container))
    synchronizedOffset = inlineScrollLeft(rail.value)
  }
}
function scrollBody() {
  if (props.container && rail.value) {
    const offset = inlineScrollLeft(rail.value)
    if (synchronizedOffset !== undefined && Math.abs(offset - synchronizedOffset) < 0.5) return
    synchronizedOffset = undefined
    if (Math.abs(inlineScrollLeft(props.container) - offset) > 0.5) {
      setInlineScrollLeft(props.container, offset)
      // A programmatic native scroll is delivered later. Header/summary sync follows that event.
    }
  }
}
function onKeydown(event: KeyboardEvent) {
  if (event.target !== event.currentTarget || !rail.value || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
  event.preventDefault()
  const element = rail.value, max = Math.max(0, element.scrollWidth - element.clientWidth)
  const grow = dir.value === 'rtl' ? 'ArrowLeft' : 'ArrowRight'
  setInlineScrollLeft(element, event.key === 'Home' ? 0 : event.key === 'End' ? max : inlineScrollLeft(element) + (event.key === grow ? 40 : -40))
  scrollBody()
}
watch([dir, rail], () => { void nextTick(sync) }, { flush: 'post' })
let active = true
function measure() {
  const container = props.container
  if (!active || !container) { width.value = 0; return }
  width.value = container.scrollWidth
  viewport.value = container.clientWidth
  void nextTick(() => {
    if (!active || props.container !== container) return
    scrollbar.value?.handleResize()
    sync()
  })
}
useElementResize(() => [props.container, props.container?.firstElementChild], () => active && !!props.container, measure)
function bind() {
  cleanup?.()
  cleanup = undefined
  const container = props.container
  if (!active || !container) { width.value = 0; return }
  container.addEventListener('scroll', sync, { passive: true })
  cleanup = () => container.removeEventListener('scroll', sync)
  measure()
}
watch(() => props.container, bind, { immediate: true, flush: 'post' })
onDeactivated(() => { active = false; cleanup?.(); cleanup = undefined })
onActivated(() => { active = true; bind() })
onBeforeUnmount(() => { active = false; cleanup?.() })
</script>
