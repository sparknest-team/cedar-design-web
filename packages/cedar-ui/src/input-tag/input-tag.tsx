import { computed, defineComponent, reactive, ref, watch, onMounted, TransitionGroup, toRefs, nextTick } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { INPUT_EVENTS } from '../_utils/constant'
import { Backspace, Enter } from '../_utils/keycode'
import { getValueData } from './utils'
import Tag from '../tag'
import IconHover from '../_components/IconHover.vue'
import { IconClose } from '@cedar-design/icons-vue/icon-close'
import { InputTagFieldNames, TagData, TagDataInfo } from './types'
import { omit } from '../_utils/omit'
import pick from '../_utils/pick'
import ResizeObserver from '../_components/resize-observer'
import FeedbackIcon from '../_components/FeedbackIcon.vue'
import { useFormItem } from '../_hooks/use-form-item'
import { useSize } from '../_hooks/use-size'
import { isNull, isObject, isUndefined } from '../_utils/is'
import { inputTagProps } from './props'
import FieldDecorator from '../field-decorator'

const { n: fieldN, classes: fieldClasses } = createNamespace('field-decorator')

const DEFAULT_FIELD_NAMES = {
  value: 'value',
  label: 'label',
  closable: 'closable',
  tagProps: 'tagProps',
}

export default defineComponent({
  name: createNamespace('input-tag').name,
  inheritAttrs: false,
  props: inputTagProps,
  emits: {
    'update:modelValue': (value: (string | number | TagData)[]) => true,
    'update:inputValue': (inputValue: string) => true,
    /**
     * @zh 值发生改变时触发
     * @en Triggered when the value changes
     * @param {(string | number | TagData)[]} value
     * @param {Event} ev
     */
    change: (value: (string | number | TagData)[], ev: Event) => true,
    /**
     * @zh 输入值发生改变时触发
     * @en Trigger when the input value changes
     * @param {string} inputValue
     * @param {Event} ev
     */
    "input-value-change": (inputValue: string, ev: Event) => true,
    /**
     * @zh 按下回车键时触发
     * @en Triggered when the enter key is pressed
     * @param {string} inputValue
     * @param {KeyboardEvent} ev
     */
    "press-enter": (inputValue: string, ev: KeyboardEvent) => true,
    /**
     * @zh 点击标签的删除按钮时触发
     * @en Triggered when the delete button of the label is clicked
     * @param {string | number} removed
     * @param {Event} ev
     */
    remove: (removed: string | number, ev: Event) => true,
    /**
     * @zh 点击清除按钮时触发
     * @en Triggered when the clear button is clicked
     * @param {MouseEvent} ev
     */
    clear: (ev: MouseEvent) => true,
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
   * @zh 后缀元素
   * @en Suffix
   * @slot suffix
   */
  /**
   * @zh 前缀元素
   * @en Prefix
   * @slot prefix
   */
  /**
   * @zh 输入框标签的显示内容
   * @en Display content of tag
   * @slot tag
   * @binding {TagData} data
   */
  setup(props, { emit, slots, attrs }) {
    const { prefix, n, classes } = createNamespace(props.baseCls ?? 'input-tag')

    const { variant, size, disabled, error, uninjectFormItemContext, modelValue } = toRefs(props)
    const inputRef = ref<HTMLInputElement>()
    const mirrorRef = ref<HTMLElement>()
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError,
      feedback,
      eventHandlers,
    } = useFormItem({
      size,
      disabled,
      error,
      uninject: uninjectFormItemContext?.value,
    })
    const { mergedSize } = useSize(_mergedSize)
    const mergedFieldNames = computed(() => ({
      ...DEFAULT_FIELD_NAMES,
      ...props.fieldNames,
    }))

    const _focused = ref(false)
    const _value = ref(props.defaultValue)
    const _inputValue = ref(props.defaultInputValue)
    const isComposition = ref(false)
    const compositionValue = ref('')

    const retainInputValue = computed(() => {
      if (isObject(props.retainInputValue)) {
        return {
          create: false,
          blur: false,
          ...props.retainInputValue,
        }
      }
      return {
        create: props.retainInputValue,
        blur: props.retainInputValue,
      }
    })

    const inputStyle = reactive({
      width: '12px',
    })

    const mergedFocused = computed(() => props.focused || _focused.value)

    const updateInputValue = (value: string, ev: Event) => {
      _inputValue.value = value
      emit('update:inputValue', value)
      emit('input-value-change', value, ev)
    }

    const handleComposition = (ev: CompositionEvent) => {
      const { value } = ev.target as HTMLInputElement

      if (ev.type === 'compositionend') {
        isComposition.value = false
        compositionValue.value = ''
        updateInputValue(value, ev)

        nextTick(() => {
          if (inputRef.value && computedInputValue.value !== inputRef.value.value) {
            inputRef.value.value = computedInputValue.value
          }
        })
      } else {
        isComposition.value = true
        compositionValue.value = computedInputValue.value + (ev.data ?? '')
      }
    }

    const computedValue = computed(() => props.modelValue ?? _value.value)
    const computedInputValue = computed(() => props.inputValue ?? _inputValue.value)

    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = []
      }
    })

    const handleMousedown = (e: MouseEvent) => {
      if (inputRef.value && e.target !== inputRef.value) {
        e.preventDefault()
        inputRef.value.focus()
      }
    }

    const handleInput = (ev: Event) => {
      const { value } = ev.target as HTMLInputElement

      if (!isComposition.value) {
        updateInputValue(value, ev)

        nextTick(() => {
          if (inputRef.value && computedInputValue.value !== inputRef.value.value) {
            inputRef.value.value = computedInputValue.value
          }
        })
      }
    }

    const valueData = computed(() => getValueData(computedValue.value, mergedFieldNames.value))

    const tags = computed(() => {
      if (props.maxTagCount > 0) {
        const invisibleTags = valueData.value.length - props.maxTagCount
        if (invisibleTags > 0) {
          const result = valueData.value.slice(0, props.maxTagCount)
          const raw = {
            value: '__arco__more',
            label: `+${invisibleTags}...`,
            closable: false,
          }
          result.push({
            raw,
            ...raw,
          })
          return result
        }
      }
      return valueData.value
    })

    const updateValue = (value: (string | number | TagData)[], ev: Event) => {
      _value.value = value
      emit('update:modelValue', value)
      emit('change', value, ev)
      eventHandlers.value?.onChange?.(ev)
    }

    const isTagClosable = (item: TagDataInfo) =>
      !mergedDisabled.value && !props.readonly && !item.tagProps?.loading &&
      Boolean(item.tagProps?.closable ?? item.closable)

    const handleRemove = (value: string | number, index: number, e: Event) => {
      if (!valueData.value[index] || !isTagClosable(valueData.value[index])) return
      const newValue = computedValue.value?.filter((_, i) => i !== index)
      updateValue(newValue, e)
      emit('remove', value, e)
    }

    const handleClear = (e: MouseEvent) => {
      if (mergedDisabled.value || props.readonly) return
      const newValue: any[] = []
      updateValue(newValue, e)
      emit('clear', e)
    }

    const showClearBtn = computed(
      () => !mergedDisabled.value && !props.readonly && props.clearable && Boolean(computedValue.value.length),
    )

    const handlePressEnter = (e: KeyboardEvent) => {
      if (computedInputValue.value) {
        e.preventDefault()
        if (props.uniqueValue && computedValue.value?.includes(computedInputValue.value)) {
          emit('press-enter', computedInputValue.value, e)
          return
        }
        const newValue = computedValue.value.concat(computedInputValue.value)
        updateValue(newValue, e)
        emit('press-enter', computedInputValue.value, e)
        if (!retainInputValue.value.create) {
          updateInputValue('', e)
        }
      }
    }

    const handleFocus = (ev: FocusEvent) => {
      _focused.value = true
      emit('focus', ev)
      eventHandlers.value?.onFocus?.(ev)
    }

    const handleBlur = (ev: FocusEvent) => {
      _focused.value = false
      if (!retainInputValue.value.blur && computedInputValue.value) {
        updateInputValue('', ev)
      }
      emit('blur', ev)
      eventHandlers.value?.onBlur?.(ev)
    }

    const getLastClosableIndex = () => {
      for (let i = valueData.value.length - 1; i >= 0; i--) {
        if (isTagClosable(valueData.value[i])) {
          return i
        }
      }
      return -1
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (mergedDisabled.value || props.readonly) {
        return
      }
      const keyCode = e.key || e.code
      if (!isComposition.value && computedInputValue.value && keyCode === Enter.key) {
        handlePressEnter(e)
      }
      if (!isComposition.value && tags.value.length > 0 && !computedInputValue.value && keyCode === Backspace.key) {
        const lastIndex = getLastClosableIndex()
        if (lastIndex >= 0) {
          handleRemove(valueData.value[lastIndex].value, lastIndex, e)
        }
      }
    }

    const setInputWidth = (width: number) => {
      if (width > 12) {
        inputStyle.width = `${width}px`
      } else {
        inputStyle.width = '12px'
      }
    }

    onMounted(() => {
      if (mirrorRef.value) {
        setInputWidth(mirrorRef.value.offsetWidth)
      }
    })

    const handleResize = () => {
      if (mirrorRef.value) {
        setInputWidth(mirrorRef.value.offsetWidth)
      }
    }

    watch(computedInputValue, (value) => {
      if (inputRef.value && !isComposition.value && value !== inputRef.value.value) {
        inputRef.value.value = value
      }
    })

    const cls = computed(() =>
      classes(
        n(),
        [props.disabledInput, n('--disabled-input')],
        [props.readonly, n('--readonly')],
        [tags.value.length > 0, n('--has-tag')],
        [Boolean(slots.prefix), n('--has-prefix')],
        [Boolean(slots.suffix) || showClearBtn.value || feedback.value, n('--has-suffix')],
        [!computedValue.value.length, n('--has-placeholder')],
      ),
    )

    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS))
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS))

    const render = () => (
      <FieldDecorator
        class={cls.value}
        variant={variant.value}
        size={mergedSize.value}
        disabled={mergedDisabled.value}
        error={mergedError.value}
        focused={mergedFocused.value}
        onMousedown={handleMousedown}
        {...wrapperAttrs.value}
        v-slots={{
          prefix: slots.prefix,
          suffix:
            showClearBtn.value || slots.suffix || Boolean(feedback.value)
              ? () => (
                  <>
                    {showClearBtn.value && (
                      <IconHover
                        class={fieldClasses(fieldN('clear-btn'))}
                        // @ts-ignore
                        onClick={handleClear}
                        onMousedown={(e: MouseEvent) => e.stopPropagation()}
                      >
                        <IconClose />
                      </IconHover>
                    )}
                    {(slots.suffix || Boolean(feedback.value)) && (
                      <>
                        {slots.suffix?.()}
                        {Boolean(feedback.value) && <FeedbackIcon type={feedback.value} />}
                      </>
                    )}
                  </>
                )
              : undefined,
          default: () => (
            <>
              <ResizeObserver onResize={handleResize}>
                <span ref={mirrorRef} class={classes(n('mirror'))}>
                  {tags.value.length > 0
                    ? compositionValue.value || computedInputValue.value
                    : compositionValue.value || computedInputValue.value || props.placeholder}
                </span>
              </ResizeObserver>
              <TransitionGroup
                tag="span"
                name={`${prefix}-zoom`}
                // @ts-ignore
                class={classes(n('inner'), [props.tagNowrap, n('--nowrap')])}
              >
                {tags.value.map((item, index) => (
                  <Tag
                    key={`tag-${item.value}`}
                    class={classes(n('tag'))}
                    show
                    nowrap={props.tagNowrap}
                    {...item.tagProps}
                    closable={isTagClosable(item)}
                    checkable={!mergedDisabled.value && !props.readonly && item.tagProps?.checkable}
                    onClose={(ev: MouseEvent) => handleRemove(item.value, index, ev)}
                  >
                    {slots.tag?.({ data: item.raw }) ?? props.formatTag?.(item.raw) ?? item.label}
                  </Tag>
                ))}
                <input
                  {...inputAttrs.value}
                  ref={inputRef}
                  key={`${prefix}-input`}
                  class={classes(n('input'))}
                  style={inputStyle}
                  placeholder={tags.value.length === 0 ? props.placeholder : undefined}
                  disabled={mergedDisabled.value}
                  readonly={props.readonly || props.disabledInput}
                  onInput={handleInput}
                  onKeydown={handleKeyDown}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onCompositionstart={handleComposition}
                  onCompositionupdate={handleComposition}
                  onCompositionend={handleComposition}
                />
              </TransitionGroup>
            </>
          ),
        }}
      />
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
