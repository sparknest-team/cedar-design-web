import { defineComponent, computed, nextTick, useId, watch, type SlotsType } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import type { ColorPickerSlots, HSV } from './types'
import Panel from './panel'
import Trigger from '../trigger'
import useState from '../_hooks/use-state'
import { formatInputToHSVA, hsvToRgb, rgbaToHex, rgbToHex } from '../_utils/color'
import { colorPickerProps } from './props'
import { useI18n } from '../locale'
import { provideFormErrorDescriptionBoundary, useFormErrorDescription } from '../form/error-description'
import { useFormItemLabel } from '../form/label-context'


const { name } = createNamespace('color-picker')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: colorPickerProps,
  slots: Object as SlotsType<ColorPickerSlots>,
  emits: {
    'update:modelValue': (value: string) => true,
    /**
     * @zh 颜色值改变时触发
     * @en Triggered when the color value changes
     * @param {string} value
     */
    change: (value: string) => true,
    /**
     * @zh 颜色面板展开和收起时触发
     * @en Triggered when the color panel is expanded and collapsed
     * @param {boolean} visible
     * @param {string} value
     */
    'open-change': (visible: boolean, value: string) => true,
  },
  setup(props, { attrs, emit, slots }) {
    const { describe: describeError } = useFormErrorDescription()
    provideFormErrorDescriptionBoundary()

    const prefixCls = getPrefixCls('color-picker')
    const formLabel = useFormItemLabel()
    const actionId = `${prefixCls}-action-${useId()}`
    const autoLabelledBy = computed(() => {
      const label = formLabel?.value
      if (!label || (label.target && label.target !== attrs.id) || attrs['aria-label'] != null || attrs['aria-labelledby'] != null) return undefined
      return `${label.id} ${actionId}`
    })
    const autoPanelLabel = computed(() => {
      const label = formLabel?.value
      if (!label || label.target || attrs['aria-label'] != null || attrs['aria-labelledby'] != null || attrs.role === 'presentation' || attrs.role === 'none') return undefined
      return label.id
    })
    const { t } = useI18n()
    const initial = formatInputToHSVA(props.modelValue ?? props.defaultValue ?? '')
    const [alpha, setAlpha] = useState(initial.a)
    const [hsv, setHsv] = useState({ h: initial.h, s: initial.s, v: initial.v })
    const syncModel = (value: string) => {
      const next = formatInputToHSVA(value)
      setAlpha(next.a)
      setHsv({ h: next.h, s: next.s, v: next.v })
    }
    const matchesModel = (value: string) => {
      const next = formatInputToHSVA(value)
      const expected = hsvToRgb(next.h, next.s, next.v)
      const current = hsvToRgb(hsv.value.h, hsv.value.s, hsv.value.v)
      return expected.r === current.r && expected.g === current.g && expected.b === current.b &&
        (props.disabledAlpha || Math.round(next.a * 255) === Math.round(alpha.value * 255))
    }
    watch(() => props.modelValue, value => {
      if (value !== undefined && !matchesModel(value)) syncModel(value)
    })

    const color = computed(() => {
      const rgb = hsvToRgb(hsv.value.h, hsv.value.s, hsv.value.v)
      const hex = rgbToHex(rgb.r, rgb.g, rgb.b)
      return {
        hsv: hsv.value,
        rgb,
        hex,
      }
    })

    const colorString = computed(() => {
      const { r, g, b } = color.value.rgb
      return `rgba(${r}, ${g}, ${b}, ${alpha.value.toFixed(2)})`
    })

    const formatValue = computed(() => {
      const { r, g, b } = color.value.rgb
      if (props.format === 'rgb') {
        return alpha.value < 1 && !props.disabledAlpha
          ? `rgba(${r}, ${g}, ${b}, ${alpha.value.toFixed(2)})`
          : `rgb(${r}, ${g}, ${b})`
      }
      return alpha.value < 1 && !props.disabledAlpha ? `#${rgbaToHex(r, g, b, alpha.value)}` : `#${rgbToHex(r, g, b)}`
    })

    const propose = (value: HSV, nextAlpha: number) => {
      if (props.disabled) return
      const previous = formatValue.value
      setHsv(value)
      setAlpha(nextAlpha)
      const proposed = formatValue.value
      if (proposed !== previous) {
        emit('update:modelValue', proposed)
        emit('change', proposed)
      }
      if (props.modelValue !== undefined) {
        nextTick(() => {
          if (props.modelValue !== undefined && !matchesModel(props.modelValue)) syncModel(props.modelValue)
        })
      }
    }
    const onHsvChange = (value: HSV) => propose(value, alpha.value)
    const onAlphaChange = (value: number) => propose(hsv.value, value)
    const onColorChange = (value: HSV, nextAlpha: number) => propose(value, nextAlpha)

    const handleOpenChange = (open: boolean) => {
      emit('open-change', open, formatValue.value)
    }

    const renderInput = () => {
      return (
        <button
          type="button"
          id={attrs.id as string | undefined}
          disabled={props.disabled}
          aria-label={attrs['aria-label'] as string || t('colorPicker.trigger')}
          aria-labelledby={(attrs['aria-labelledby'] as string | undefined) ?? autoLabelledBy.value}
          aria-describedby={describeError(attrs['aria-describedby'])}
          class={{
            [prefixCls]: true,
            [`${prefixCls}-size-${props.size}`]: props.size,
            [`${prefixCls}-disabled`]: props.disabled,
          }}
        >
          {autoLabelledBy.value && <span id={actionId} class={`${prefixCls}-sr-only`}>{t('colorPicker.trigger')}</span>}
          <div class={`${prefixCls}-preview`} style={{ backgroundColor: formatValue.value }} />
          {props.showText && <div class={`${prefixCls}-value`}>{formatValue.value}</div>}

        </button>
      )
    }

    const renderPanel = () => {
      return (
        <Panel
          {...(props.hideTrigger ? {
            ...attrs,
            role: typeof attrs.role === 'string' ? attrs.role : (describeError(attrs['aria-describedby']) || autoPanelLabel.value || attrs['aria-label'] || attrs['aria-labelledby']) ? 'group' : undefined,
            'aria-labelledby': attrs['aria-labelledby'] ?? autoPanelLabel.value,
            'aria-describedby': describeError(attrs['aria-describedby']),
          } : {})}
          color={color.value}
          alpha={alpha.value}
          colorString={colorString.value}
          historyColors={props.historyColors}
          presetColors={props.presetColors}
          showHistory={props.showHistory}
          showPreset={props.showPreset}
          disabled={props.disabled}
          disabledAlpha={props.disabledAlpha}
          format={props.format}
          onHsvChange={onHsvChange}
          onAlphaChange={onAlphaChange}
          onColorChange={onColorChange}
        />
      )
    }

    return () => {
      const triggerAttrs = { ...attrs }
      if (!slots.default && !props.hideTrigger) delete triggerAttrs.id
      return props.hideTrigger ? (
        renderPanel()
      ) : (
        <Trigger
          v-slots={{ content: renderPanel }}
          trigger="click"
          placement="bottom-start"
          animationName="slide-dynamic-origin"
          popupOffset={4}
          disabled={props.disabled}
          onUpdate:open={handleOpenChange}
          {...props.triggerProps}
          {...triggerAttrs}
        >
          {slots.default ? slots.default({ describedBy: describeError(attrs['aria-describedby']) }) : renderInput()}
        </Trigger>
      )
    }
  },
})
