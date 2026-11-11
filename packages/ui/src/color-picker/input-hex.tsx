import { defineComponent, PropType, toRefs, watch } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { Color, HSV } from './types'
import { hexToRgb, rgbToHsv } from '../_utils/color'
import useState from '../_hooks/use-state'
import Input, { InputGroup } from '../input'
import InputAlpha from './input-alpha'
import { useI18n } from '../locale'


const { name } = createNamespace('input-hex')

export default defineComponent({
  name,
  props: {
    color: {
      type: Object as PropType<Color>,
      required: true,
    },
    alpha: {
      type: Number,
      required: true,
    },
    disabled: Boolean,
    disabledAlpha: Boolean,
    onHsvChange: Function as PropType<(value: HSV) => void>,
    onAlphaChange: Function as PropType<(value: number) => void>,
  },
  setup(props) {
    const prefixCls = getPrefixCls('color-picker')
    const { t } = useI18n()
    const { color } = toRefs(props)
    const [hex, setHex] = useState(color.value.hex)

    const handlerChange = (value: string | null) => {
      const _rgb = hexToRgb(value ?? '') || { r: 255, g: 0, b: 0 }
      const hsv = rgbToHsv(_rgb.r, _rgb.g, _rgb.b)
      props.onHsvChange?.(hsv)
    }

    const onInputChange = (value: string | null) => {
      const matchValue = (value ?? '').match(/[a-fA-F0-9]*/g)?.join('') ?? ''
      if (matchValue !== color.value.hex) {
        handlerChange(matchValue.toUpperCase())
      }
    }

    const onPaste = (ev: ClipboardEvent) => {
      if (!ev.clipboardData) return
      let text = ev.clipboardData.getData('Text')
      if (text.startsWith('#')) {
        text = text.slice(1)
      }
      onInputChange(text)
      ev.preventDefault()
    }

    watch(color, () => {
      if (color.value.hex !== hex.value) {
        setHex(color.value.hex)
      }
    })

    return () => (
      <InputGroup class={`${prefixCls}-input-group`}>
        <Input
          inputAttrs={{ 'aria-label': t('colorPicker.hex') }}
          class={`${prefixCls}-input-hex`}
          v-slots={{ prefix: () => '#' }}
          size="xs"
          maxLength={6}
          disabled={props.disabled}
          modelValue={hex.value}
          onInput={setHex}
          onChange={onInputChange}
          onBlur={() => handlerChange}
          onPress-enter={() => handlerChange}
          // @ts-ignore
          onPaste={onPaste}
        />
        {!props.disabledAlpha && (
          <InputAlpha disabled={props.disabled} value={props.alpha} onChange={props.onAlphaChange} />
        )}
      </InputGroup>
    )
  },
})
