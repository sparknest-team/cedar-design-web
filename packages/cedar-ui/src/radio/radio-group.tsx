import { defineComponent, provide, reactive, toRefs, ref, computed, watch } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { radioGroupKey } from './context'
import { isFunction, isNull, isNumber, isString, isUndefined } from '../_utils/is'
import { useFormItem } from '../_hooks/use-form-item'
import { RadioOption } from './types'
import Radio from './radio'
import { useSize } from '../_hooks/use-size'
import { radioGroupProps } from './props'


const { name } = createNamespace('radio-group')

export default defineComponent({
  name,
  props: radioGroupProps,
  emits: {
    'update:modelValue': (value: string | number | boolean) => true,
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @property { string | number | boolean } value
     */
    change: (value: string | number | boolean, ev: Event) => true,
  },
  /**
   * @zh radio 文案内容
   * @en radio label content
   * @slot label
   * @binding {RadioOption} data
   * @version 2.27.0
   */
  /**
   * @zh 自定义单选框
   * @en Custom radio
   * @slot radio
   * @binding {boolean} checked
   * @binding {boolean} disabled
   * @version 2.27.0
   */
  setup(props, { emit, slots }) {
    const prefixCls = getPrefixCls('radio-group')
    const { size, variant, disabled, modelValue } = toRefs(props)
    const {
      mergedDisabled,
      mergedSize: _mergedSize,
      eventHandlers,
    } = useFormItem({
      size,
      disabled,
    })
    const { mergedSize } = useSize(_mergedSize)

    const _value = ref(props.defaultValue)

    const computedValue = computed(() => props.modelValue ?? _value.value)

    const options = computed((): RadioOption[] => {
      return (props.options ?? []).map((option): RadioOption => {
        if (isString(option) || isNumber(option)) {
          return {
            label: option,
            value: option,
          } as RadioOption
        }
        return option as RadioOption
      })
    })

    const handleChange = (value: string | number | boolean, e: Event) => {
      _value.value = value
      emit('update:modelValue', value)
      emit('change', value, e)
      eventHandlers.value?.onChange?.(e)
    }

    provide(
      radioGroupKey,
      reactive({
        value: computedValue,
        size: mergedSize,
        variant,
        disabled: mergedDisabled,
        slots,
        handleChange,
      }),
    )

    watch(computedValue, (cur) => {
      if (_value.value !== cur) {
        _value.value = cur
      }
    })

    watch(modelValue, (val) => {
      if (isUndefined(val) || isNull(val)) {
        _value.value = ''
      }
    })

    const cls = computed(() => [
      `${prefixCls}${props.variant === 'button' ? '-button' : ''}`,
      `${prefixCls}-size-${mergedSize.value}`,
      `${prefixCls}-direction-${props.direction}`,
      {
        [`${prefixCls}-disabled`]: mergedDisabled.value,
      },
    ])

    const renderOptions = () => {
      return options.value.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          disabled={option.disabled}
          modelValue={computedValue.value === option.value}
        >
          {slots.label ? slots.label({ data: option }) : isFunction(option.label) ? option.label() : option.label}
        </Radio>
      ))
    }

    return () => <span class={cls.value}>{options.value.length > 0 ? renderOptions() : slots.default?.()}</span>
  },
})
