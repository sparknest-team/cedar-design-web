import { computed, defineComponent, PropType, toRefs } from 'vue'
import { omit } from '../../_utils/omit'
import { INPUT_EVENTS, Size } from '../../_utils/constant'
import pick from '../../_utils/pick'
import { createNamespace } from '../../_utils/global-config'
import { useInput } from '../../_hooks/use-input'
import { SelectViewValue } from '../select-view/interface'
import { useFormItem } from '../../_hooks/use-form-item'
import { useSize } from '../../_hooks/use-size'

export default defineComponent({
  name: 'CInputLabel',
  inheritAttrs: false,
  props: {
    modelValue: Object as PropType<SelectViewValue>,
    inputValue: {
      type: String,
      default: '',
    },
    enabledInput: Boolean,
    formatLabel: Function as PropType<(data?: SelectViewValue) => string>,
    placeholder: String,
    retainInputValue: Boolean,
    disabled: Boolean,
    baseCls: String,
    size: String as PropType<Size>,
    variant: {
      type: String as PropType<'outline' | 'default'>,
      default: 'default',
    },
    error: Boolean,
    // used for outer focused
    focused: Boolean,
    uninjectFormItemContext: Boolean,
  },
  emits: ['update:inputValue', 'inputValueChange', 'focus', 'blur'],
  setup(props, { attrs, emit, slots }) {
    const { n, classes } = createNamespace(props.baseCls ?? 'input-label')

    const { size, disabled, error, inputValue, uninjectFormItemContext, variant } = toRefs(props)
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError,
      eventHandlers,
    } = useFormItem({
      size,
      disabled,
      error,
      uninject: uninjectFormItemContext?.value,
    })
    const { mergedSize } = useSize(_mergedSize)

    const {
      inputRef,
      _focused,
      computedValue: computedInputValue,
      handleInput,
      handleComposition,
      handleFocus,
      handleBlur,
      handleMousedown,
    } = useInput({
      modelValue: inputValue,
      emit,
      eventName: 'inputValueChange',
      updateEventName: 'update:inputValue',
      eventHandlers,
    })

    const mergedFocused = computed(() => props.focused ?? _focused.value)

    const showInput = computed(() => (props.enabledInput && _focused.value) || !props.modelValue)

    const formatLabel = () => {
      if (props.modelValue) {
        return props.formatLabel?.(props.modelValue) ?? props.modelValue.label
      }
      return ''
    }

    const mergedPlaceholder = computed(() => {
      if (props.enabledInput && props.modelValue) {
        return formatLabel()
      }

      return props.placeholder
    })

    const renderLabel = () => {
      if (props.modelValue) {
        return slots.default?.({ data: props.modelValue }) ?? formatLabel()
      }
      return null
    }

    const cls = computed(() =>
      classes(
        n(),
        [mergedSize.value, n(`--size-${mergedSize.value}`)],
        [props.enabledInput, n('--search')],
        [mergedFocused.value, n('--focus')],
        [mergedDisabled.value, n('--disabled')],
        [mergedError.value, n('--error')],
        [variant.value, n(`--variant-${variant.value}`)],
      ),
    )

    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS))
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS))

    const render = () => (
      <span {...wrapperAttrs.value} class={cls.value} title={formatLabel()} onMousedown={handleMousedown}>
        {slots.prefix && <span class={classes(n('prefix'))}>{slots.prefix()}</span>}
        <input
          {...inputAttrs.value}
          ref={inputRef}
          class={classes(n('input'), [!showInput.value, n('input-hidden')])}
          value={computedInputValue.value}
          readonly={!props.enabledInput}
          placeholder={mergedPlaceholder.value}
          disabled={mergedDisabled.value}
          onInput={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCompositionstart={handleComposition}
          onCompositionupdate={handleComposition}
          onCompositionend={handleComposition}
        />
        <span
          class={classes(n('value'), [showInput.value, n('value-hidden')])}
        >
          {renderLabel()}
        </span>
        {slots.suffix && <span class={classes(n('suffix'))}>{slots.suffix()}</span>}
        <div class={classes(n('border'))}></div>
        <div class={classes(n('border-state'))}></div>
      </span>
    )

    return {
      inputRef,
      render,
    }
  },
  methods: {
    focus() {
      ;(this.inputRef as HTMLInputElement)?.focus()
    },
    blur() {
      ;(this.inputRef as HTMLInputElement)?.blur()
    },
  },
  render() {
    return this.render()
  },
})
