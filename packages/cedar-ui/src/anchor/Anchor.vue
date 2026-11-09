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
import { anchorProps, type AnchorBoundaryPosition } from './props'
import { computed, defineComponent, nextTick, onActivated, onBeforeUnmount, onDeactivated, onMounted, provide, reactive, ref, watch } from 'vue'
import { compute as computeScrollIntoView } from 'compute-scroll-into-view'
import { createNamespace } from '../_utils/global-config'
import { isNumber } from '../_utils/is'
import { getElement, off, on } from '../_utils/dom'
import { useElementResize } from '../_utils/resize-observer'
import { slide } from './utils'
import { anchorInjectionKey } from './context'

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
    const effectiveBoundary = computed(() => {
      const value = props.boundary
      if (isNumber(value)) return Number.isFinite(value) ? value : 'start'
      return ['start', 'end', 'center', 'nearest'].includes(value) ? value : 'start'
    })
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
        const block: AnchorBoundaryPosition = isNumber(effectiveBoundary.value) ? 'start' : effectiveBoundary.value
        const diff = isNumber(effectiveBoundary.value) ? effectiveBoundary.value : 0
        const target = binding?.target
        if (props.scrollContainer && !target) return
        const container = target && !isView(target) ? target : undefined
        // A declared element is the outermost scroll boundary, not permission to move the page.
        if (container && !container.contains(element)) return
        const actions = computeScrollIntoView(element, { block, boundary: container })
          .filter(action => Number.isFinite(action.top))
        if (!current() || !actions.length) return
        const last = actions.length - 1
        const cancellations: Array<() => void> = []
        let pending = actions.length
        isScrolling = true
        const cancelAll = () => cancellations.forEach(cancel => cancel())
        cancelScroll = cancelAll
        for (const [index, action] of actions.entries()) {
          if (!current()) break
          // The numeric offset applies at the outer boundary only.
          const cancel = slide(action.el as HTMLElement, action.top - (index === last ? diff : 0), () => {
            if (!current()) return
            if (--pending === 0) { isScrolling = false; cancelScroll = undefined }
          }, current)
          cancellations.push(cancel)
        }
        if (!current()) cancelAll()
      } catch (error) {
        if (current()) { cancelScroll?.(); isScrolling = false; cancelScroll = undefined }
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }
    const handleClick = (event: MouseEvent, hash?: string) => {
      if (!available()) return
      const isHash = !!hash && hash.startsWith('#') && hash.length > 1
      if (isHash && !props.changeHash) event.preventDefault()
      const previousHash = currentLink.value
      if (isHash && hash) {
        scrollIntoView(hash)
        if (!available()) return
        handleAnchorChange(hash)
      }
      if (available()) emit('select', hash, previousHash)
    }

    const updateIndicator = () => {
      if (!available()) return
      const link = links[currentLink.value], slider = lineSliderRef.value, background = linkBackgroundRef.value
      const request = operation
      if (!link || (!props.showLine && !props.showBackground)) return
      const top = link.offsetTop
      const height = link.children[0]?.clientHeight ?? 0
      if (!available() || request !== operation || links[currentLink.value] !== link) return
      for (const node of [slider, background]) {
        if (!available() || request !== operation) return
        if (node) { node.style.top = `${top}px`; node.style.height = `${height}px` }
      }
    }
    watch([currentLink, () => props.showLine, () => props.showBackground], updateIndicator, { flush: 'post' })
    useElementResize(
      () => [anchorRef.value, ...Object.values(links).flatMap(link => [link, link.firstElementChild])],
      () => props.showLine || props.showBackground,
      updateIndicator,
    )

    const getFirstInViewportEle = (bound: Binding, current: () => boolean): HTMLElement | undefined => {
      if (!current()) return
      const boundary = isNumber(effectiveBoundary.value) ? effectiveBoundary.value : 0
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
