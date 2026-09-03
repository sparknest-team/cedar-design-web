import { defineComponent } from 'vue'
import { createNamespace } from '../_utils/global-config'

const { name, n } = createNamespace('list-item')

export default defineComponent({
  name,
  /**
   * @zh 列表项主体
   * @en List item body
   * @slot default
   */
  /**
   * @zh 列表项前缀
   * @en List item prefix
   * @slot prefix
   */
  /**
   * @zh 列表项后缀
   * @en List item suffix
   * @slot suffix
   */
  setup(_, { slots }) {
    return () => (
      <div role="listitem" class={n()}>
        {slots.prefix ? <div class={n('prefix')}>{slots.prefix()}</div> : null}
        {slots.default ? <div class={n('main')}>{slots.default()}</div> : null}
        {slots.suffix ? <div class={n('suffix')}>{slots.suffix()}</div> : null}
      </div>
    )
  },
})
