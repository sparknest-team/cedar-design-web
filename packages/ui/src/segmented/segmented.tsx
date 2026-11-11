import { computed, defineComponent, mergeProps, nextTick, toRefs, useId, watch } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { isFunction, isNumber, isString } from '../_utils/is'
import { useChoiceState } from '../checkbox/choice-state'
import { useFormItem } from '../_hooks/use-form-item'
import { useFormErrorDescription } from '../form/error-description'
import { useSize } from '../_hooks/use-size'
import { segmentedProps, type SegmentedOption, type SegmentedValue } from './props'

const { name } = createNamespace('segmented')

export default defineComponent({
  name,
  inheritAttrs: false,
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
  setup(props, { attrs, emit, slots }) {
    const { n, classes } = createNamespace('segmented')
    const { size, disabled, readonly } = toRefs(props)
    const { mergedDisabled, mergedReadonly, mergedError, mergedSize: formSize, eventHandlers } = useFormItem({
      size,
      disabled,
      readonly,
    })
    const { mergedSize } = useSize(formSize)
    const { describe: describeError } = useFormErrorDescription()

    const blocked = () => mergedDisabled.value || mergedReadonly.value
    const state = useChoiceState<SegmentedValue | undefined>(
      () => props.modelValue,
      props.defaultValue,
      (value, event) => {
        if (value === undefined) return
        emit('update:modelValue', value)
        emit('change', value, event as Event)
        eventHandlers.value?.onChange?.(event)
      },
      blocked,
    )
    const computedValue = state.value
    const optionKey = (value: SegmentedValue) =>
      `${typeof value}:${Object.is(value, -0) ? '-0' : String(value)}`
    const normalizedOptions = computed(() => {
      const seen = new Set<string>()
      return (props.options ?? []).map<SegmentedOption>(option =>
        isString(option) || isNumber(option) ? { label: String(option), value: option } : option,
      ).filter(option => {
        const key = optionKey(option.value)
        if (seen.has(key)) return false
        seen.add(key)
        return true
      })
    })
    const generatedId = useId()
    const groupName = computed(() => props.name ?? `${n()}-${generatedId}`)
    const inputs = new Map<string, { value: SegmentedValue; input: HTMLInputElement }>()
    const restore = () => {
      for (const { value, input } of inputs.values()) input.checked = Object.is(computedValue.value, value)
    }
    watch(computedValue, restore, { flush: 'post' })
    const handleChange = (option: SegmentedOption, event: Event) => {
      if (!option.disabled) state.commit(option.value, event)
      nextTick(restore)
    }
    const handleClick = (event: MouseEvent) => {
      if (blocked()) {
        event.preventDefault()
        nextTick(restore)
      }
    }

    const cls = computed(() =>
      classes(
        n(),
        n(`--size-${mergedSize.value}`),
        n(`--direction-${props.orientation}`),
        [props.block, n('--block')],
        [mergedDisabled.value, n('--disabled')],
      ),
    )

    return () => (
      <div {...mergeProps(
        { class: cls.value, role: 'radiogroup', 'aria-disabled': mergedDisabled.value || undefined, 'aria-readonly': mergedReadonly.value || undefined },
        attrs,
        { 'aria-describedby': describeError(attrs['aria-describedby']), 'aria-invalid': mergedError.value ? true : attrs['aria-invalid'] },
      )}>
        <div class={n('group')}>
          {normalizedOptions.value.map((option) => {
            const selected = Object.is(computedValue.value, option.value)
            const itemDisabled = mergedDisabled.value || Boolean(option.disabled)
            const labelContent = slots.label
              ? slots.label({ data: option })
              : isFunction(option.label)
                ? option.label()
                : option.label ?? String(option.value)

            return (
              <label
                key={optionKey(option.value)}
                class={classes(
                  n('item'),
                  [selected, n('item--selected')],
                  [itemDisabled, n('item--disabled')],
                )}
              >
                <input
                  ref={element => {
                    if (element) inputs.set(optionKey(option.value), { value: option.value, input: element as HTMLInputElement })
                    else inputs.delete(optionKey(option.value))
                  }}
                  class={n('input')}
                  type="radio"
                  name={groupName.value}
                  value={String(option.value)}
                  checked={selected}
                  disabled={itemDisabled}
                  aria-invalid={mergedError.value || undefined}
                  onClick={handleClick}
                  onChange={(ev: Event) => handleChange(option, ev)}
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
