import { computed, defineComponent, ref, nextTick, toRefs, watch, inject } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { INPUT_EVENTS } from '../_utils/constant'
import FeedbackIcon from '../_components/FeedbackIcon.vue'
import { Enter } from '../_utils/keycode'
import IconHover from '../_components/IconHover.vue'
import { IconClose } from '@cedarjs/icons-vue/icon-close'
import { omit } from '../_utils/omit'
import pick from '../_utils/pick'
import { isFunction, isNull, isObject, isUndefined } from '../_utils/is'
import { useFormItem } from '../_hooks/use-form-item'
import { useSize } from '../_hooks/use-size'
import { useCursor } from '../_hooks/use-cursor'
import { GroupFieldContext, fieldInjectionKey } from './context'
import { inputProps, type InputType } from './props'
import { useI18n } from '../locale'
import FieldDecorator from '../field-decorator'

const { n: fieldN, classes: fieldClasses } = createNamespace('field-decorator')

export default defineComponent({
  name: createNamespace('input').name,
  inheritAttrs: false,
  props: inputProps,
  emits: {
    'update:modelValue': (value: string) => true,
    /**
     * @zh 用户输入时触发
     * @en Triggered when the user enters
     * @param {string} value
     * @param {Event} ev
     */
    input: (value: string, ev: Event) => true,
    /**
     * @zh 仅在输入框失焦或按下回车时触发
     * @en Only triggered when the input box is out of focus or when you press Enter
     * @param {string} value
     * @param {Event} ev
     */
    change: (value: string, ev: Event) => true,
    /**
     * @zh 用户按下回车时触发
     * @en Triggered when the user presses enter
     * @param {KeyboardEvent} ev
     */
    "press-enter": (ev: KeyboardEvent) => true,
    /**
     * @zh 输入框按键时触发
     * @en Triggered when a key is pressed in the input
     * @param {KeyboardEvent} ev
     */
    keydown: (ev: KeyboardEvent) => true,
    /**
     * @zh 用户点击清除按钮时触发
     * @en Triggered when the user clicks the clear button
     * @param {Event} ev
     */
    clear: (ev: Event) => true,
    /**
     * @zh 输入框获取焦点时触发
     * @en Triggered when the input box gets focus
     * @param {FocusEvent} ev
     */
    focus: (ev: FocusEvent) => true,
    /**
     * @zh 输入框失去焦点时触发
     * @en Triggered when the input box loses focus
     * @param {FocusEvent} ev
     */
    blur: (ev: FocusEvent) => true,
  },
  /**
   * @zh 前缀元素
   * @en Prefix
   * @slot prefix
   */
  /**
   * @zh 后缀元素
   * @en Suffix
   * @slot suffix
   */
  setup(props, { emit, slots, attrs }) {
    const { n, classes } = createNamespace('input')
    const { t } = useI18n()

    const { size, disabled, error, modelValue, variant } = toRefs(props)
    const inputRef = ref<HTMLInputElement>()
    const groupContext = inject<GroupFieldContext>(fieldInjectionKey, {} as GroupFieldContext)
    const _size = computed(() => size.value ?? groupContext?.size ?? 'md')
    const _disabled = computed(() => Boolean(disabled.value ?? groupContext?.disabled ?? false))
    const mergedVariant = computed(() => variant.value ?? groupContext?.variant ?? 'outlined')
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError: _mergedError,
      feedback,
      eventHandlers,
    } = useFormItem({ size: _size, disabled: _disabled, error })
    const { mergedSize } = useSize(_mergedSize)
    const [recordCursor, setCursor] = useCursor(inputRef)

    // 值相关
    const _value = ref(props.defaultValue)
    const computedValue = computed(() => props.modelValue ?? _value.value)
    let preValue = computedValue.value
    const focused = ref(false)

    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = ''
      }
    })

    watch(computedValue, (value, oldValue) => {
      preValue = focused.value ? oldValue : value
    })

    // 状态相关
    const showClearBtn = computed(
      () => props.clearable && !props.readonly && !mergedDisabled.value && Boolean(computedValue.value)
    )

    const normalizedType = computed<InputType>(() => (props.type === 'number' ? 'text' : props.type))

    // 输入法相关
    const isComposition = ref(false)
    const compositionValue = ref('')

    const getValueLength = (value: string) => {
      if (isFunction(props.wordLength)) {
        return props.wordLength(value)
      }
      return value.length ?? 0
    }

    const valueLength = computed(() => getValueLength(computedValue.value))

    const mergedError = computed(
      () =>
        _mergedError.value ||
        Boolean(isObject(props.maxLength) && props.maxLength.errorOnly && valueLength.value > maxLength.value)
    )

    const maxLengthErrorOnly = computed(() => isObject(props.maxLength) && Boolean(props.maxLength.errorOnly))

    const maxLength = computed(() => {
      if (isObject(props.maxLength)) {
        return props.maxLength.length
      }
      return props.maxLength
    })

    const defaultMaxLength = computed(() => {
      const bytePerChar = getValueLength('a')
      return Math.floor(maxLength.value / bytePerChar)
    })

    const updateValue = (value: string) => {
      if (props.type === 'number') {
        value = formatNumber(value)
      }

      if (maxLength.value && !maxLengthErrorOnly.value && getValueLength(value) > maxLength.value) {
        value = props.wordSlice?.(value, maxLength.value) ?? value.slice(0, defaultMaxLength.value)
      }

      _value.value = value
      emit('update:modelValue', value)
      return value
    }

    const handleMousedown = (e: MouseEvent) => {
      if (inputRef.value && e.target !== inputRef.value) {
        e.preventDefault()
        inputRef.value.focus()
      }
    }

    const emitChange = (value: string, ev: Event) => {
      if (value !== preValue) {
        preValue = value
        emit('change', value, ev)
        eventHandlers.value?.onChange?.(ev)
      }
    }

    const handleFocus = (ev: FocusEvent) => {
      focused.value = true
      emit('focus', ev)
      eventHandlers.value?.onFocus?.(ev)
    }

    const handleBlur = (ev: FocusEvent) => {
      focused.value = false
      emitChange(computedValue.value, ev)
      emit('blur', ev)
      eventHandlers.value?.onBlur?.(ev)
    }

    const handleComposition = (e: CompositionEvent) => {
      const { value, selectionStart, selectionEnd } = e.target as HTMLInputElement

      if (e.type === 'compositionend') {
        isComposition.value = false
        compositionValue.value = ''

        if (
          maxLength.value &&
          !maxLengthErrorOnly.value &&
          valueLength.value >= maxLength.value &&
          getValueLength(value) > maxLength.value &&
          selectionStart === selectionEnd
        ) {
          keepControl()
          return
        }

        const nextValue = updateValue(value)
        emit('input', nextValue, e)
        eventHandlers.value?.onInput?.(e)

        keepControl()
      } else {
        isComposition.value = true
        compositionValue.value = computedValue.value + (e.data ?? '')
      }
    }

    const keepControl = () => {
      recordCursor()
      nextTick(() => {
        if (inputRef.value && computedValue.value !== inputRef.value.value) {
          inputRef.value.value = computedValue.value
          setCursor()
        }
      })
    }

    const handleInput = (e: Event) => {
      const { value } = e.target as HTMLInputElement

      if (!isComposition.value) {
        if (
          maxLength.value &&
          !maxLengthErrorOnly.value &&
          valueLength.value >= maxLength.value &&
          getValueLength(value) > maxLength.value &&
          (e as InputEvent).inputType === 'insertText'
        ) {
          keepControl()
          return
        }

        const nextValue = updateValue(value)
        emit('input', nextValue, e)
        eventHandlers.value?.onInput?.(e)

        keepControl()
      }
    }

    const handleClear = (ev: Event = new Event('clear')) => {
      updateValue('')
      emit('clear', ev)
    }

    const handleClearKeydown = (ev: KeyboardEvent) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault()
        ;(ev.currentTarget as HTMLElement).click()
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      emit('keydown', e)
      const keyCode = e.key || e.code
      if (!isComposition.value && keyCode === Enter.key) {
        emitChange(computedValue.value, e)
        emit('press-enter', e)
      }
    }

    const formatNumber = (value: string) => {
      const minusIndex = value.indexOf('-')
      const dotIndex = value.indexOf('.')

      if (minusIndex > -1) {
        value = minusIndex === 0 ? '-' + value.replace(/-/g, '') : value.replace(/-/g, '')
      }

      if (dotIndex > -1) {
        value = value.slice(0, dotIndex + 1) + value.slice(dotIndex).replace(/\./g, '')
      }

      return value.replace(/[^-0-9.]/g, '')
    }

    const cls = computed(() => classes(n('inner')))

    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS))
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS))
    const mergeInputAttrs = computed(() => {
      const attrs = {
        ...inputAttrs.value,
        ...props.inputAttrs,
      }
      if (mergedError.value) {
        attrs['aria-invalid'] = true
      }
      return attrs
    })

    const hasSuffix = computed(
      () =>
        Boolean(slots.suffix) ||
        (Boolean(props.maxLength) && props.showWordLimit) ||
        Boolean(feedback.value) ||
        showClearBtn.value
    )

    const render = () => (
      <div class={n()} onMousedown={handleMousedown} {...wrapperAttrs.value}>
        <FieldDecorator
          variant={mergedVariant.value}
          size={mergedSize.value}
          disabled={mergedDisabled.value}
          error={mergedError.value}
          focused={focused.value}
          v-slots={{
            prefix: slots.prefix,
            suffix: hasSuffix.value
              ? () => (
                  <>
                    {showClearBtn.value &&
                      (slots['clear-icon'] ? (
                        slots['clear-icon']({ clear: handleClear })
                      ) : (
                        <IconHover
                          {...({
                            prefix: 'c-field-decorator',
                            class: fieldClasses(fieldN('clear-btn')),
                            role: 'button',
                            tabindex: 0,
                            'aria-label': t('common.clear'),
                            onClick: handleClear,
                            onKeydown: handleClearKeydown,
                          } as any)}
                        >
                          <IconClose />
                        </IconHover>
                      ))}
                    {Boolean(props.maxLength) && props.showWordLimit && (
                      <span class={classes(n('word-limit'))}>
                        {valueLength.value}/{maxLength.value}
                      </span>
                    )}
                    {slots.suffix?.()}
                    {Boolean(feedback.value) && <FeedbackIcon type={feedback.value} />}
                  </>
                )
              : undefined,
            default: () => (
              <input
                {...mergeInputAttrs.value}
                ref={inputRef}
                class={cls.value}
                value={computedValue.value}
                type={normalizedType.value}
                maxlength={undefined}
                placeholder={props.placeholder}
                readonly={props.readonly}
                disabled={mergedDisabled.value}
                inputmode={props.type === 'number' ? 'decimal' : undefined}
                onInput={handleInput}
                onKeydown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onCompositionstart={handleComposition}
                onCompositionupdate={handleComposition}
                onCompositionend={handleComposition}
              />
            ),
          }}
        />
      </div>
    )

    return {
      inputRef,
      render,
    }
  },
  methods: {
    /**
     * @zh 使输入框获取焦点
     * @en Make the input box focus
     * @public
     */
    focus() {
      ;(this.inputRef as HTMLInputElement)?.focus()
    },
    /**
     * @zh 使输入框失去焦点
     * @en Make the input box lose focus
     * @public
     */
    blur() {
      ;(this.inputRef as HTMLInputElement)?.blur()
    },
  },
  render() {
    return this.render()
  },
})
