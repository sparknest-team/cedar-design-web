import { computed, defineComponent, ref, inject, watch, nextTick, toRef, toRefs } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import IconHover from '../_components/IconHover.vue'
import { radioGroupKey } from './context'
import { isNull, isUndefined } from '../_utils/is'
import { useFormItem } from '../_hooks/use-form-item'
import { radioProps } from './props'


const { name } = createNamespace('radio')

export default defineComponent({
  name,
  components: {
    IconHover,
  },
  props: radioProps,
  emits: {
    'update:modelValue': (value: string | number | boolean) => true,
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @param { string | number | boolean } value
     * @param {Event} ev
     */
    change: (value: string | number | boolean, ev: Event) => true,
  },
  /**
   * @zh 自定义单选框
   * @en Custom radio
   * @slot radio
   * @binding {boolean} checked
   * @binding {boolean} disabled
   * @version 2.18.0
   */
  setup(props, { emit, slots }) {
    const prefixCls = getPrefixCls('radio')
    const { modelValue } = toRefs(props)
    const radioGroupCtx = !props.uninjectGroupContext ? inject(radioGroupKey, undefined) : undefined
    const { mergedDisabled: _mergedDisabled, eventHandlers } = useFormItem({
      disabled: toRef(props, 'disabled'),
    })

    const inputRef = ref<HTMLInputElement | null>(null)
    const _checked = ref(props.defaultChecked)

    const isGroup = computed(() => Boolean(radioGroupCtx))
    const mergedVariant = computed(() => radioGroupCtx?.variant ?? props.variant)
    const mergedDisabled = computed(() => radioGroupCtx?.disabled || _mergedDisabled.value)

    const computedChecked = computed(() => {
      if (isGroup.value) {
        return radioGroupCtx?.value === (props.value ?? true)
      }

      if (!isUndefined(props.modelValue)) {
        return props.modelValue === (props.value ?? true)
      }
      return _checked.value
    })

    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _checked.value = false
      }
    })

    watch(computedChecked, (curValue, preValue) => {
      if (curValue !== preValue) {
        _checked.value = curValue
        if (inputRef.value) {
          inputRef.value.checked = curValue
        }
      }
    })

    // const handleClick = (ev: MouseEvent) => {
    //   if (!props.disabled && inputRef.value && ev.target !== inputRef.value) {
    //     ev.preventDefault();
    //     inputRef.value.click();
    //   }
    // };

    const handleFocus = (ev: FocusEvent) => {
      eventHandlers.value?.onFocus?.(ev)
    }

    const handleBlur = (ev: FocusEvent) => {
      eventHandlers.value?.onBlur?.(ev)
    }

    const handleClick = (ev: Event) => {
      ev.stopPropagation()
    }

    const handleChange = (e: Event) => {
      _checked.value = true
      if (isGroup.value) {
        radioGroupCtx?.handleChange(props.value ?? true, e)
      } else {
        emit('update:modelValue', props.value ?? true)
        emit('change', props.value ?? true, e)
        eventHandlers.value?.onChange?.(e)
      }

      nextTick(() => {
        if (inputRef.value && inputRef.value.checked !== computedChecked.value) {
          inputRef.value.checked = computedChecked.value
        }
      })
    }

    const cls = computed(() => [
      `${mergedVariant.value === 'button' ? `${prefixCls}-button` : prefixCls}`,
      {
        [`${prefixCls}-checked`]: computedChecked.value,
        [`${prefixCls}-disabled`]: mergedDisabled.value,
      },
    ])

    const defaultRadio = () => (
      <>
        <icon-hover class={`${prefixCls}-icon-hover`} disabled={mergedDisabled.value || computedChecked.value}>
          <span class={`${prefixCls}-icon`} />
        </icon-hover>
        {slots.default && <span class={`${prefixCls}-label`}>{slots.default()}</span>}
      </>
    )

    return () => (
      <label class={cls.value}>
        <input
          ref={inputRef}
          type="radio"
          checked={computedChecked.value}
          value={props.value}
          class={`${prefixCls}-target`}
          disabled={mergedDisabled.value}
          onClick={handleClick}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {mergedVariant.value === 'radio' ? (
          ((slots.radio ?? radioGroupCtx?.slots?.radio)?.({
            checked: computedChecked.value,
            disabled: mergedDisabled.value,
          }) ?? defaultRadio())
        ) : (
          <span class={`${prefixCls}-button-content`}>{slots.default && slots.default()}</span>
        )}
      </label>
    )
  },
})
