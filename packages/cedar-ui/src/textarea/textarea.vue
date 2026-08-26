<template>
  <FieldDecorator
    v-bind="getWrapperAttrs($attrs)"
    :class="wrapperCls"
    :variant="mergedVariant"
    :size="mergedSize"
    :disabled="mergedDisabled"
    :error="mergedError"
    :focused="focused"
    @mousedown="handleMousedown"
  >
    <div v-if="autoSize" ref="mirrorRef" :class="classes(n('mirror'))" :style="mirrorStyle">
      {{ `${computedValue}\n` }}
    </div>
    <resize-observer @resize="handleResize">
      <textarea
        ref="textareaRef"
        v-bind="mergeTextareaAttrs"
        :disabled="mergedDisabled"
        :readonly="readonly"
        :class="classes(n('inner'))"
        :style="textareaStyle"
        :value="computedValue"
        :placeholder="placeholder"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
      />
    </resize-observer>
    <slot name="suffix" />
    <div v-if="computedMaxLength && showWordLimit" :class="classes(n('word-limit'))">
      {{ valueLength }}/{{ computedMaxLength }}
    </div>
    <button
      v-if="showClearBtn"
      type="button"
      :class="classes(n('clear-btn'))"
      :aria-label="t('common.clear')"
      @click="handleClear"
    >
      <icon-hover>
        <icon-close />
      </icon-hover>
    </button>
  </FieldDecorator>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent, nextTick, onMounted, ref, toRefs, watch } from 'vue'
import ResizeObserver from '../_components/resize-observer'
import IconHover from '../_components/icon-hover.vue'
import { IconClose } from '@cedarjs/icons-vue/icon-close'
import FieldDecorator from '../field-decorator'
import { createNamespace } from '../_utils/global-config'
import { getSizeStyles } from './utils'
import { isFunction, isNull, isObject, isUndefined } from '../_utils/is'
import { omit } from '../_utils/omit'
import { INPUT_EVENTS } from '../_utils/constant'
import pick from '../_utils/pick'
import { useFormItem } from '../_hooks/use-form-item'
import { useCursor } from '../_hooks/use-cursor'
import { textareaProps } from './props'
import { useI18n } from '../locale'

export default defineComponent({
  name: createNamespace('textarea').name,
  components: { ResizeObserver, IconHover, IconClose, FieldDecorator },
  inheritAttrs: false,
  props: textareaProps,
  emits: {
    'update:modelValue': (value: string) => true,
    /**
     * @zh 用户输入时触发
     * @en Emitted when the user enters
     * @param {string} value
     * @param {Event} ev
     */
    input: (value: string, ev: Event) => true,
    /**
     * @zh 仅在文本框失焦时触发
     * @en Only emitted when the textarea is out of focus
     * @param {string} value
     * @param {Event} ev
     */
    change: (value: string, ev: Event) => true,
    /**
     * @zh 点击清除按钮时触发
     * @en Emitted when the clear button is clicked
     * @param {MouseEvent} ev
     */
    clear: (ev: MouseEvent) => true,
    /**
     * @zh 文本框获取焦点时触发
     * @en Emitted when the textarea gets focus
     * @param {FocusEvent} ev
     */
    focus: (ev: FocusEvent) => true,
    /**
     * @zh 文本框失去焦点时触发
     * @en Emitted when the textarea loses focus
     * @param {FocusEvent} ev
     */
    blur: (ev: FocusEvent) => true,
  },
  setup(props, { emit, attrs }) {
    const { n, classes } = createNamespace('textarea')
    const { t } = useI18n()
    const { size, variant, disabled, error, modelValue } = toRefs(props)
    const {
      mergedDisabled,
      mergedError: _mergedError,
      eventHandlers,
    } = useFormItem({ disabled: disabled ?? false, error: error ?? false })
    const mergedSize = computed(() => size.value ?? 'md')
    const mergedVariant = computed(() => variant.value ?? 'filled')

    const textareaRef = ref<HTMLInputElement>()
    const textareaStyle = ref<CSSProperties>()
    const mirrorRef = ref<HTMLInputElement>()
    const mirrorStyle = ref<CSSProperties>()

    const _value = ref(props.defaultValue)
    const computedValue = computed(() => modelValue.value ?? _value.value)
    const [recordCursor, setCursor] = useCursor(textareaRef)

    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = ''
      }
    })

    const maxLengthErrorOnly = computed(() => isObject(props.maxLength) && Boolean(props.maxLength.errorOnly))

    const computedMaxLength = computed(() => {
      if (isObject(props.maxLength)) {
        return props.maxLength.length
      }
      return props.maxLength
    })

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
        Boolean(computedMaxLength.value && maxLengthErrorOnly.value && valueLength.value > computedMaxLength.value),
    )

    const isScroll = ref(false)

    // 状态相关
    const focused = ref(false)
    const showClearBtn = computed(
      () => props.clearable && !props.readonly && !mergedDisabled.value && Boolean(computedValue.value),
    )

    // 输入法相关
    const isComposition = ref(false)
    const compositionValue = ref('')

    const keepControl = () => {
      recordCursor()
      nextTick(() => {
        if (textareaRef.value && computedValue.value !== textareaRef.value.value) {
          textareaRef.value.value = computedValue.value
          setCursor()
        }
      })
    }

    const updateValue = (value: string, inner = true) => {
      if (computedMaxLength.value && !maxLengthErrorOnly.value && getValueLength(value) > computedMaxLength.value) {
        value = props.wordSlice?.(value, computedMaxLength.value) ?? value.slice(0, computedMaxLength.value)
      }

      _value.value = value
      if (inner) {
        emit('update:modelValue', value)
      }

      keepControl()
    }

    let preValue = computedValue.value
    const emitChange = (value: string, ev: Event) => {
      if (value !== preValue) {
        preValue = value
        emit('change', value, ev)
        eventHandlers.value?.onChange?.(ev)
      }
    }

    const handleFocus = (ev: FocusEvent) => {
      focused.value = true
      preValue = computedValue.value
      emit('focus', ev)
      eventHandlers.value?.onFocus?.(ev)
    }

    const handleBlur = (ev: FocusEvent) => {
      focused.value = false
      emit('blur', ev)
      eventHandlers.value?.onBlur?.(ev)
      emitChange(computedValue.value, ev)
    }

    const handleComposition = (e: CompositionEvent) => {
      const { value } = e.target as HTMLInputElement

      if (e.type === 'compositionend') {
        isComposition.value = false
        compositionValue.value = ''

        if (
          computedMaxLength.value &&
          !maxLengthErrorOnly.value &&
          computedValue.value.length >= computedMaxLength.value &&
          getValueLength(value) > computedMaxLength.value
        ) {
          keepControl()
          return
        }

        emit('input', value, e)
        updateValue(value)
        eventHandlers.value?.onInput?.(e)
      } else {
        isComposition.value = true
      }
    }

    const handleInput = (e: InputEvent) => {
      const { value } = e.target as HTMLInputElement

      if (!isComposition.value) {
        if (
          computedMaxLength.value &&
          !maxLengthErrorOnly.value &&
          computedValue.value.length >= computedMaxLength.value &&
          getValueLength(value) > computedMaxLength.value &&
          e.inputType === 'insertText'
        ) {
          keepControl()
          return
        }

        emit('input', value, e)
        updateValue(value)
        eventHandlers.value?.onInput?.(e)
      } else {
        compositionValue.value = value
      }
    }

    const handleClear = (ev: MouseEvent) => {
      updateValue('')
      emitChange('', ev)
      emit('clear', ev)
    }

    // modelValue发生改变时，更新内部值
    watch(modelValue, (value: string | undefined) => {
      if (value !== computedValue.value) {
        updateValue(value ?? '', false)
      }
    })

    const getWrapperAttrs = (attr: Record<string, any>) => omit(attrs, INPUT_EVENTS)
    const getTextareaAttrs = (attr: Record<string, any>) => pick(attrs, INPUT_EVENTS)
    const textareaAttrs = getTextareaAttrs(attrs)
    const mergeTextareaAttrs = computed(() => {
      const attrs = {
        ...textareaAttrs,
        ...props.textareaAttrs,
      }
      if (mergedError.value) {
        attrs['aria-invalid'] = true
      }
      return attrs
    })

    const wrapperCls = computed(() =>
      classes(n(), [isScroll.value, n('--scroll')]),
    )

    let styleDeclaration: CSSStyleDeclaration

    const lineHeight = ref<number>(0)
    const outerHeight = ref<number>(0)
    const minHeight = computed(() => {
      if (!isObject(props.autoSize) || !props.autoSize.minRows) {
        return 0
      }
      return props.autoSize.minRows * lineHeight.value + outerHeight.value
    })
    const maxHeight = computed(() => {
      if (!isObject(props.autoSize) || !props.autoSize.maxRows) {
        return 0
      }
      return props.autoSize.maxRows * lineHeight.value + outerHeight.value
    })

    const getMirrorStyle = () => {
      const styles = getSizeStyles(styleDeclaration)

      lineHeight.value = Number.parseInt(styles['line-height'] || 0, 10)
      outerHeight.value =
        Number.parseInt(styles['border-width'] || 0, 10) * 2 +
        Number.parseInt(styles['padding-top'] || 0, 10) +
        Number.parseInt(styles['padding-bottom'] || 0, 10)

      mirrorStyle.value = styles

      nextTick(() => {
        const mirrorHeight = mirrorRef.value?.offsetHeight

        let height = mirrorHeight ?? 0
        let overflow = 'hidden'

        if (minHeight.value && height < minHeight.value) {
          height = minHeight.value
        }
        if (maxHeight.value && height > maxHeight.value) {
          height = maxHeight.value
          overflow = 'auto'
        }

        textareaStyle.value = {
          height: `${height}px`,
          resize: 'none',
          overflow,
        }
      })
    }

    onMounted(() => {
      if (textareaRef.value) {
        styleDeclaration = window.getComputedStyle(textareaRef.value)
        if (props.autoSize) {
          getMirrorStyle()
        }
      }
      computeIsScroll()
    })

    const handleResize = () => {
      if (props.autoSize && mirrorRef.value) {
        getMirrorStyle()
      }
      computeIsScroll()
    }

    const handleMousedown = (e: MouseEvent) => {
      if (textareaRef.value && e.target !== textareaRef.value) {
        e.preventDefault()
        textareaRef.value.focus()
      }
    }

    const computeIsScroll = () => {
      if (textareaRef.value) {
        if (textareaRef.value.scrollHeight > textareaRef.value.offsetHeight) {
          if (!isScroll.value) isScroll.value = true
        } else if (isScroll.value) {
          isScroll.value = false
        }
      }
    }

    watch(computedValue, () => {
      if (props.autoSize && mirrorRef.value) {
        getMirrorStyle()
      }
      computeIsScroll()
    })

    return {
      n,
      classes,
      t,
      mergedSize,
      mergedVariant,
      wrapperCls,
      textareaRef,
      textareaStyle,
      mirrorRef,
      mirrorStyle,
      computedValue,
      showClearBtn,
      valueLength,
      computedMaxLength,
      mergedDisabled,
      mergedError,
      focused,
      mergeTextareaAttrs,
      getWrapperAttrs,
      getTextareaAttrs,
      handleInput,
      handleFocus,
      handleBlur,
      handleComposition,
      handleClear,
      handleResize,
      handleMousedown,
    }
  },
  methods: {
    /**
     * @zh 使输入框获取焦点
     * @en Make the input box focus
     * @public
     * @version 2.24.0
     */
    focus() {
      ;(this.$refs.textareaRef as HTMLInputElement)?.focus()
    },
    /**
     * @zh 使输入框失去焦点
     * @en Make the input box lose focus
     * @public
     * @version 2.24.0
     */
    blur() {
      ;(this.$refs.textareaRef as HTMLInputElement)?.blur()
    },
  },
})
</script>
