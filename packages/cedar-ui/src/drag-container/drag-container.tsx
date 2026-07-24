import { defineComponent, useSlots, ref, onMounted } from 'vue'
import { dragContainerProps } from './props'
import Sortable from 'sortablejs'
import { getPrefixCls, createNamespace } from '../_utils/global-config'

const { name } = createNamespace('drag-container')

export default defineComponent({
  name,

  props: dragContainerProps,

  emits: ['click', 'change', 'update:modelValue'],

  setup(props, { emit }) {
    const slots = useSlots()
    const prefixCls = getPrefixCls('drag-container')

    const containerRef = ref<HTMLElement | null>(null)

    // 初始化Sortable
    let sortableInstance: Sortable | null = null

    const initSortable = () => {
      if (containerRef.value) {
        const dragConfig = {
          animation: 150,
          ...props.dragOptions,
          onEnd: (evt: any) => {
            const { oldIndex, newIndex } = evt
            const oldValue = props.modelValue[oldIndex]
            const newValue = props.modelValue[newIndex]
            const list = [...props.modelValue]
            const item = list.splice(oldIndex, 1)[0]
            list.splice(newIndex, 0, item)
            emit('update:modelValue', list)
            emit('change', list, {
              evt,
              oldValue,
              newValue,
            })
          },
        }
        if (containerRef.value) {
          const listElement = containerRef.value as HTMLElement
          if (listElement) {
            sortableInstance = Sortable.create(listElement, dragConfig)
          }
        }
      }
    }

    onMounted(() => {
      initSortable()
    })

    return () => (
      <div ref={containerRef} class={prefixCls}>
        {slots.default?.()}
      </div>
    )
  },
})
