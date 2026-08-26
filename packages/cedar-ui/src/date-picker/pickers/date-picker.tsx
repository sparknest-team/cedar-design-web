import { defineComponent } from 'vue'
import Picker from '../picker.vue'
import { createNamespace } from '../../_utils/global-config'
import { datePickerProps } from '../props'

const { name } = createNamespace('date-picker')

/**
 * 日期面板。默认无触发器（hideTrigger），仅展示选择面板。
 * 表单字段请使用 Date / DateRange。
 */
export default defineComponent({
  name,
  props: datePickerProps,
  setup(props, { attrs, slots }) {
    return () => <Picker {...props} {...attrs} v-slots={slots} />
  },
})
