import type { ExtractPropTypes } from 'vue'

export interface DragOptions {
  handle?: string // 拖拽手柄
  animation?: number // 动画时长
  filter?: string // 过滤器, 用于排除某些元素
  draggable?: string // 可拖拽的元素
}

export const dragContainerProps = {
  modelValue: {
    type: Array,
    default: () => [],
  },
  dragOptions: {
    type: Object as () => DragOptions,
    default: () => ({}),
  },
}
export type DragContainerProps = ExtractPropTypes<typeof dragContainerProps>
