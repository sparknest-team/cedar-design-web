import { defineComponent, onMounted, onUnmounted, ref, ComponentPublicInstance, computed, cloneVNode, watch } from 'vue'
import ResizeObserver from 'resize-observer-polyfill'
import { getFirstComponent } from '../_utils/vue-utils'
import { isComponentInstance } from '../_utils/is'
import { createNamespace } from '../_utils/global-config'


const { name } = createNamespace('resize-observer')

export default defineComponent({
  name,
  emits: [
    /**
     * resize 事件
     * @property {ResizeObserverEntry} entry 触发 resize 的 dom 元素
     */
    'resize',
  ],
  setup(props, { emit, slots }) {
    let resizeObserver: ResizeObserver | null
    let view: Window | null = null
    let frame: number | undefined
    let pending: ResizeObserverEntry | undefined
    let generation = 0
    let observed: HTMLElement | undefined

    const componentRef = ref<HTMLElement | ComponentPublicInstance>()

    const element = computed<HTMLElement>(() =>
      isComponentInstance(componentRef.value) ? componentRef.value.$el : componentRef.value,
    )

    const createResizeObserver = (target: HTMLElement) => {
      if (!target) return
      observed = target
      view = target.ownerDocument.defaultView
      const binding = ++generation
      resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        if (binding !== generation || !view) return
        pending = entries[0]
        if (frame !== undefined) return
        // Consumers can change the observed layout. Leave the observer's
        // delivery cycle before emitting, and coalesce repeated notifications.
        frame = view.requestAnimationFrame(() => {
          if (binding !== generation) return
          frame = undefined
          const entry = pending
          pending = undefined
          if (entry) emit('resize', entry)
        })
      })
      resizeObserver.observe(target)
    }

    const destroyResizeObserver = () => {
      generation++
      if (frame !== undefined) view?.cancelAnimationFrame(frame)
      frame = undefined
      pending = undefined
      view = null
      observed = undefined
      if (resizeObserver) {
        resizeObserver.disconnect()
        resizeObserver = null
      }
    }

    watch(element, (_element) => {
      if (_element === observed) return
      if (resizeObserver) destroyResizeObserver()
      if (_element) createResizeObserver(_element)
    })

    onMounted(() => {
      if (element.value) {
        createResizeObserver(element.value)
      }
    })

    onUnmounted(() => {
      destroyResizeObserver()
    })

    return () => {
      const firstChild = getFirstComponent(slots.default?.() ?? [])

      if (firstChild) {
        return cloneVNode(
          firstChild,
          {
            ref: componentRef,
          },
          true,
        )
      }

      return null
    }
  },
})
