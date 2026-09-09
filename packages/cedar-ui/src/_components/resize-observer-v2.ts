import { useElementResize } from '../_utils/resize-observer'
import { createNamespace } from '../_utils/global-config'
import { defineComponent } from 'vue'
import ResizeObserver from 'resize-observer-polyfill'
import { useFirstElement } from '../_hooks/use-first-element'

export default defineComponent({
  name: createNamespace("resize-observer").name,
  props: {
    watchOnUpdated: Boolean,
  },
  emits: [
    /**
     * resize 事件
     * @property {ResizeObserverEntry} entry 触发 resize 的 dom 元素
     */
    'resize',
  ],
  setup(props, { emit, slots }) {
    const { children, firstElement } = useFirstElement()
    useElementResize(() => [firstElement.value], () => true, entries => {
      const entry = entries.find(entry => entry.target === firstElement.value)
      if (entry) emit('resize', entry)
    }, ResizeObserver, false)

    return () => {
      children.value = slots.default?.()
      return children.value
    }
  },
})
