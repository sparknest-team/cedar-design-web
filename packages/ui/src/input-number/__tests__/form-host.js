import { defineComponent, provide } from 'vue'
import { formItemInjectionKey } from '../../form/context'
export function formHost(state, handlers, render) {
  return defineComponent({
    setup() {
      provide(formItemInjectionKey, {
        get disabled() { return state.disabled },
        get readonly() { return state.readonly },
        get error() { return state.error },
        get size() { return state.size },
        eventHandlers: handlers,
        feedback: undefined,
        updateValidateState() {},
      })
      return render
    },
  })
}
