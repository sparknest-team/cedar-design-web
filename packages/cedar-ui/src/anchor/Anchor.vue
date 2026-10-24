<template>
  <div ref="anchorRef" :class="cls">
    <div ref="linkBackgroundRef" :class="classes(n('link-background'))" />
    <div v-if="showLine" ref="lineSliderRef" :class="classes(n('line-slider'))" />
    <ul :class="classes(n('list'), n('list-root'))">
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import { anchorProps } from './props'
import { computed, defineComponent, nextTick, onActivated, onBeforeUnmount, onDeactivated, onMounted, provide, reactive, ref, watch } from 'vue'
import { compute as computeScrollIntoView } from 'compute-scroll-into-view'
import { createNamespace } from '../_utils/global-config'
import { isNumber } from '../_utils/is'
import { getElement, off, on } from '../_utils/dom'
import { slide } from './utils'
import { anchorInjectionKey } from './context'

type BoundaryPosition = 'start' | 'end' | 'center' | 'nearest'
type Binding = { target: HTMLElement | Window; container: HTMLElement; view: Window; listener: () => void; cancelFrame: () => void }
const isView = (value: unknown): value is Window => !!value && typeof value === 'object' && (value as Window).window === value

export default defineComponent({
  name: createNamespace('anchor').name,
  props: anchorProps,
  emits: {
    /** @zh 用户点击链接时触发 @en Triggered when the user clicks on the link */
    select: (hash: string | undefined, preHash: string) => true,
    /** @zh 链接发生改变时触发 @en Triggered when the link changes */
    change: (hash: string) => true,
  },
  setup(props, { emit }) {
    const { n, classes } = createNamespace('anchor')
    const anchorRef = ref<HTMLElement>()
    const lineSliderRef = ref<HTMLElement>()
    const linkBackgroundRef = ref<HTMLElement>()
    const links = reactive<Record<string, HTMLElement>>({})
    const currentLink = ref('')
    let active = true, disposed = false, operation = 0, changeGeneration = 0
    let binding: Binding | undefined
    let cancelScroll: (() => void) | undefined
    let isScrolling = false
    const available = () => active && !disposed
    const ownerDocument = () => anchorRef.value?.ownerDocument
    const findTarget = (hash: string) => {
      const doc = ownerDocument()
      return doc ? getElement(hash, doc) : undefined
    }
    const addLink = (hash: string, node: HTMLElement) => { if (hash && !disposed) links[hash] = node }
    const removeLink = (hash: string, node: HTMLElement) => {
      if (links[hash] !== node) return
      delete links[hash]
      if (available() && currentLink.value === hash) {
        cancelWork()
        currentLink.value = ''
        binding?.listener()
      }
    }
    const cancelWork = (invalidateChange = true) => {
      operation++
      if (invalidateChange) changeGeneration++
      const cancel = cancelScroll
      cancelScroll = undefined
      isScrolling = false
      binding?.cancelFrame()
      cancel?.()
    }
    const unbind = () => {
      const previous = binding
      binding = undefined
      previous?.cancelFrame()
      if (previous) off(previous.target, 'scroll', previous.listener)
    }

    const handleAnchorChange = (hash: string) => {
      if (!available()) return
      if (!links[hash] && anchorRef.value) {
        const element = getElement(`a[data-href='${hash}']`, anchorRef.value)
        if (!element) return
        links[hash] = element
      }
      if (hash === currentLink.value) return
      currentLink.value = hash
      const generation = ++changeGeneration
      nextTick(() => {
        if (!available() || generation !== changeGeneration || currentLink.value !== hash) return
        changeGeneration++
        emit('change', hash)
      })
    }
    const scrollIntoView = (hash: string) => {
      if (!available()) return
      cancelWork(false)
      const request = operation
      const current = () => available() && request === operation
      try {
        const element = findTarget(hash)
        if (!element || !current()) return
        const block: BoundaryPosition = isNumber(props.boundary) ? 'start' : props.boundary
        const diff = isNumber(props.boundary) ? props.boundary : 0
        const actions = computeScrollIntoView(element, { block })
        if (!current() || !actions.length) return
        const { el, top } = actions[0]
        isScrolling = true
        const cancel = slide(el as HTMLElement, top - diff, () => {
          if (!current()) return
          isScrolling = false
          cancelScroll = undefined
        }, current)
        if (current() && isScrolling) cancelScroll = cancel
        else cancel()
      } catch (error) {
        if (current()) { isScrolling = false; cancelScroll = undefined }
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }
    const handleClick = (event: MouseEvent, hash?: string) => {
      if (!available()) return
      if (!props.changeHash) event.preventDefault()
      if (hash) {
        scrollIntoView(hash)
        if (!available()) return
        handleAnchorChange(hash)
      }
      if (available()) emit('select', hash, currentLink.value)
    }

    const updateIndicator = () => {
      if (!available()) return
      const link = links[currentLink.value], slider = lineSliderRef.value, background = linkBackgroundRef.value
      const request = operation
      if (!props.showLine || !link) return
      const top = link.offsetTop
      const height = link.children[0]?.clientHeight ?? 0
      if (!available() || request !== operation || links[currentLink.value] !== link) return
      for (const node of [slider, background]) {
        if (!available() || request !== operation) return
        if (node) { node.style.top = `${top}px`; node.style.height = `${height}px` }
      }
    }
    watch(currentLink, updateIndicator, { flush: 'post' })

    const getFirstInViewportEle = (bound: Binding, current: () => boolean): HTMLElement | undefined => {
      if (!current()) return
      const boundary = isNumber(props.boundary) ? props.boundary : 0
      const rect = bound.container.getBoundingClientRect()
      if (!current()) return
      for (const hash of Object.keys(links)) {
        const element = findTarget(hash)
        if (!current()) return
        if (!element) continue
        const { top } = element.getBoundingClientRect()
        if (!current()) return
        const offset = isView(bound.target) ? top - boundary : top - rect.top - boundary
        if (offset >= 0 && offset <= rect.height / 2) return element
      }
    }
    const bind = () => {
      cancelWork()
      unbind()
      if (!available()) return
      const doc = ownerDocument()
      const selected = props.scrollContainer
      const target = isView(selected) ? selected : selected ? getElement(selected, doc) : doc?.defaultView
      const container = isView(target) ? target.document.documentElement : target
      const view = isView(target) ? target : container?.ownerDocument.defaultView
      if (!target || !container || !view) return
      let frame: number | undefined, sequence = 0
      const bound: Binding = {
        target, container, view,
        cancelFrame: () => {
          sequence++
          if (frame !== undefined) view.cancelAnimationFrame(frame)
          frame = undefined
        },
        listener: () => {
          if (!available() || binding !== bound || isScrolling) return
          bound.cancelFrame()
          const request = sequence
          const revision = operation
          frame = view.requestAnimationFrame(() => {
            if (!available() || binding !== bound || request !== sequence || revision !== operation) return
            frame = undefined
            const consumed = ++sequence
            const current = () => available() && binding === bound && consumed === sequence && revision === operation && !isScrolling
            const element = getFirstInViewportEle(bound, current)
            if (element?.id && current()) handleAnchorChange(`#${element.id}`)
          })
        },
      }
      binding = bound
      on(target, 'scroll', bound.listener)
      bound.listener()
      updateIndicator()
    }
    const setDefaultLink = () => {
      if (!available() || currentLink.value || !anchorRef.value) return
      const hash = anchorRef.value.querySelector('a[href^="#"]')?.getAttribute('href')
      if (hash) handleAnchorChange(hash)
    }
    onMounted(() => {
      bind()
      const hash = decodeURIComponent(ownerDocument()?.defaultView?.location.hash ?? '')
      if (hash) { scrollIntoView(hash); handleAnchorChange(hash) }
      setDefaultLink()
    })
    onDeactivated(() => { active = false; cancelWork(); unbind() })
    onBeforeUnmount(() => { disposed = true; active = false; cancelWork(); unbind() })
    onActivated(() => { if (!active && !disposed) { active = true; bind(); setDefaultLink() } })
    watch(() => [props.scrollContainer, props.boundary], () => { if (available()) bind() }, { flush: 'sync' })

    provide(anchorInjectionKey, reactive({ currentLink, addLink, removeLink, handleClick }))
    const cls = computed(() => classes(n(), [props.showLine, n('--show-line')], [props.showBackground, n('--show-background')], [currentLink.value, n('--active')]))
    return { n, classes, cls, anchorRef, lineSliderRef, linkBackgroundRef }
  },
})
</script>
