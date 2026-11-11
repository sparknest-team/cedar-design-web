import { defineComponent, PropType } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import InputNumber from '../input-number'
import { useI18n } from '../locale'


const { name } = createNamespace('input-alpha')

export default defineComponent({
  name,
  props: {
    value: {
      type: Number,
      required: true,
    },
    disabled: Boolean,
    onChange: Function as PropType<(value: number) => void>,
  },
  setup(props) {
    const prefixCls = getPrefixCls('color-picker')
    const { t } = useI18n()

    return () => (
      <InputNumber
        inputAttrs={{ 'aria-label': t('colorPicker.opacity') }}
        class={`${prefixCls}-input-alpha`}
        size="xs"
        v-slots={{ suffix: () => '%' }}
        min={0}
        max={100}
        disabled={props.disabled}
        modelValue={Math.round(props.value * 100)}
        onChange={(a = 100) => props.onChange?.((a ?? 0) / 100)}
      />
    )
  },
})
