import { defineComponent, PropType, VNodeTypes } from 'vue'
import { createNamespace } from '../_utils/global-config'

export type RenderFunc = (props: Record<string, unknown>) => VNodeTypes

export default defineComponent({
  name: createNamespace('render-function').name,
  props: {
    args: Object as PropType<Record<string, unknown>>,
    renderFunc: {
      type: Function as PropType<RenderFunc>,
      required: true,
    },
  },
  render() {
    return this.renderFunc(this.args ?? this.$attrs)
  },
})
