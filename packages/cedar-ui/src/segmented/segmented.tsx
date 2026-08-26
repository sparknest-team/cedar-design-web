import { computed, defineComponent, ref, toRefs, watch } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { isFunction, isNumber, isString, isUndefined, isNull } from '../_utils/is'
import { useFormItem } from '../_hooks/use-form-item'
import { useSize } from '../_hooks/use-size'
import { segmentedProps, type SegmentedOption, type SegmentedValue } from './props'

const { name } = createNamespace('segmented')

export default defineComponent({
  name,
  props: segmentedProps,
  emits: {
    'update:modelValue': (value: SegmentedValue) => true,
    /**
     * @zh 值改变时触发
     * @en Emitted when value changes
     * @property {string | number} value
     */
    change: (value: SegmentedValue, ev: Event) => true,
  },
  /**
   * @zh 自定义选项内容
   * @en Custom option content
   * @slot label
   * @binding {SegmentedOption} data
   */
  setup(props, { emit, slots }) {
    const { n, classes } = createNamespace('segmented')
    const { size, disabled, modelValue } = toRefs(props)
    const { mergedDisabled, mergedSize: formSize, eventHandlers } = useFormItem({
      size,
      disabled,
    })
    const { mergedSize } = useSize(formSize)

    const _value = ref<SegmentedValue | undefined>(props.defaultValue)
    const computedValue = computed(() => props.modelValue ?? _value.value)

    const normalizedOptions = computed(() =>
      (props.options ?? []).map((option) => {
        if (isString(option) || isNumber(option)) {
          return { label: String(option), value: option } as SegmentedOption
        }
        return option
      }),
    )

    const groupName = computed(
      () => props.name ?? `c-segmented-${Math.random().toString(36).slice(2, 9)}`,
    )

    const handleChange = (value: SegmentedValue, ev: Event) => {
      _value.value = value
      emit('update:modelValue', value)
      emit('change', value, ev)
      eventHandlers.value?.onChange?.(ev)
    }

    watch(computedValue, (cur) => {
      if (_value.value !== cur) {
        _value.value = cur
      }
    })

    watch(modelValue, (val) => {
      if (isUndefined(val) || isNull(val)) {
        _value.value = undefined
      }
    })

    const cls = computed(() =>
      classes(
        n(),
        n(`--size-${mergedSize.value}`),
        n(`--direction-${props.direction}`),
        [props.block, n('--block')],
        [mergedDisabled.value, n('--disabled')],
      ),
    )

    return () => (
      <div class={cls.value} role="radiogroup" aria-disabled={mergedDisabled.value || undefined}>
        <div class={n('group')}>
          {normalizedOptions.value.map((option) => {
            const selected = computedValue.value === option.value
            const itemDisabled = mergedDisabled.value || Boolean(option.disabled)
            const labelContent = slots.label
              ? slots.label({ data: option })
              : isFunction(option.label)
                ? option.label()
                : option.label

            return (
              <label
                key={String(option.value)}
                class={classes(
                  n('item'),
                  [selected, n('item--selected')],
                  [itemDisabled, n('item--disabled')],
                )}
              >
                <input
                  class={n('input')}
                  type="radio"
                  name={groupName.value}
                  value={String(option.value)}
                  checked={selected}
                  disabled={itemDisabled}
                  onChange={(ev: Event) => handleChange(option.value, ev)}
                />
                <span class={n('label')}>{labelContent}</span>
              </label>
            )
          })}
        </div>
      </div>
    )
  },
})
