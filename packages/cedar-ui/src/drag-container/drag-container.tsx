import { defineComponent, useAttrs, useSlots, ref, onMounted } from 'vue'
import { dragContainerProps } from './props'
import Sortable from 'sortablejs'
import { createNamespace } from '../_utils/global-config'


const { name } = createNamespace('drag-container')

export default defineComponent({
  name,

  props: dragContainerProps,

  emits: ['click', 'change', 'update:modelValue'],

  setup(props, { emit }) {
    const attrs = useAttrs()
    const slots = useSlots()

    const containerRef = ref<HTMLElement | null>(null)

    // 初始化Sortable
    let sortableInstance: Sortable | null = null

    const initSortable = () => {
      if (containerRef.value) {
        // const childElements = containerRef.value.children
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
          const listElement = containerRef.value as HTMLElement // 获取Container唯一的子元素
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
      <div ref={containerRef} class="drag-container">
        {slots.default?.()}
      </div>
    )
  },
})
