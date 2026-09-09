import type { ComponentPublicInstance, PropType } from 'vue'
import { computed, defineComponent, ref, toRefs, watch } from 'vue'
import type { Data } from '../../_utils/types'
import { getPrefixCls, createNamespace } from '../../_utils/global-config'
import { ComponentSize } from '../../_utils/constant'
import { isArray } from '../../_utils/is'
import FeedbackIcon from '../feedback-icon.vue'
import InputLabel from '../input-label/input-label'
import InputTag from '../../input-tag'
import IconHover from '../icon-hover.vue'
import { IconDown } from '@cedarjs/icons-vue/icon-down'
import { IconLoading } from '@cedarjs/icons-vue/icon-loading'
import { IconClose } from '@cedarjs/icons-vue/icon-close'
import { IconSearch } from '@cedarjs/icons-vue/icon-search'
import { useFormItem } from '../../_hooks/use-form-item'
import { useSize } from '../../_hooks/use-size'
import { SelectViewValue } from './interface'

export default defineComponent({
  name: createNamespace('select-view').name,
  props: {
    modelValue: {
      type: Array as PropType<SelectViewValue[]>,
      required: true,
    },
    inputValue: String,
    placeholder: String,
    variant: {
      type: String as PropType<'filled' | 'outline' | 'standard'>,
      default: 'filled',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    opened: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<ComponentSize>,
    },
    bordered: {
      type: Boolean,
      default: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    creatable: {
      type: Boolean,
      default: false,
    },
    filterable: {
      type: Boolean,
      default: (props: Data) => isArray(props.modelValue),
    },
    maxTagCount: {
      type: Number,
      default: 0,
    },
    tagNowrap: {
      type: Boolean,
      default: false,
    },
    retainInputValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['remove', 'clear', 'focus', 'blur', 'keydown'],
  setup(props, { emit, slots }) {
    const baseCls = 'select' + (props.multiple ? '-multiple' : '-single')
    const { n, classes } = createNamespace(baseCls)

    const { size, disabled, error, variant } = toRefs(props)
    const {
      feedback,
      eventHandlers,
      mergedDisabled,
      mergedSize: _mergedSize,
      mergedError,
    } = useFormItem({
      size,
      disabled,
      error,
    })
    const { mergedSize } = useSize(_mergedSize)

    const { opened } = toRefs(props)

    const componentRef = ref<ComponentPublicInstance>()
    const inputRef = computed<HTMLInputElement>(
      // @ts-ignore
      () => componentRef.value?.inputRef,
    )

    const isEmptyValue = computed(() => props.modelValue.length === 0)
    const enabledInput = computed(() => props.filterable || props.creatable)
    const showClearBtn = computed(() => props.clearable && !props.disabled && !isEmptyValue.value)

    const handleFocus = (ev: FocusEvent) => {
      emit('focus', ev)
      eventHandlers.value?.onFocus?.(ev)
    }

    const handleBlur = (ev: FocusEvent) => {
      emit('blur', ev)
      eventHandlers.value?.onBlur?.(ev)
    }

    const handleRemove = (tag: string | number) => {
      emit('remove', tag)
    }

    const handleClear = (ev: MouseEvent) => {
      emit('clear', ev)
    }

    const renderIcon = () => {
      if (props.loading) {
        return slots['loading-icon']?.() ?? <IconLoading />
      }
      if (props.filterable && props.opened) {
        return slots['search-icon']?.() ?? <IconSearch />
      }
      if (slots['arrow-icon']) {
        return slots['arrow-icon']()
      }
      return <IconDown class={classes(n('arrow-icon'))} />
    }

    const renderSuffix = () => (
      <>
        {showClearBtn.value && (
          <IconHover
            {...({
              class: classes(n('clear-btn')),
              onClick: handleClear,
              onMousedown: (ev: MouseEvent) => ev.stopPropagation(),
            } as any)}
          >
            <IconClose />
          </IconHover>
        )}
        <span class={classes(n('icon'))}>{renderIcon()}</span>
        {Boolean(feedback.value) && <FeedbackIcon type={feedback.value} />}
      </>
    )

    watch(opened, (opened) => {
      if (!opened && inputRef.value && inputRef.value.isSameNode(document.activeElement)) {
        inputRef.value.blur()
      }
    })

    const cls = computed(() => classes(n(), [props.opened, n('--opened')], [!props.bordered, n('--borderless')]))

    const render = () => {
      if (props.multiple) {
        return (
          <InputTag
            {...{ onKeydown: (event: KeyboardEvent) => emit('keydown', event) }}
            ref={componentRef}
            v-slots={{
              prefix: slots.prefix,
              suffix: renderSuffix,
              tag: slots.label,
            }}
            baseCls={baseCls}
            class={cls.value}
            modelValue={props.modelValue}
            inputValue={props.inputValue}
            focused={props.opened}
            placeholder={props.placeholder}
            disabled={mergedDisabled.value}
            size={mergedSize.value}
            error={mergedError.value}
            maxTagCount={props.maxTagCount}
            disabledInput={!props.filterable && !props.creatable}
            tagNowrap={props.tagNowrap}
            retainInputValue
            uninjectFormItemContext
            variant={variant.value}
            onRemove={handleRemove}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        )
      }
      return (
        <InputLabel
          {...{ onKeydown: (event: KeyboardEvent) => emit('keydown', event) }}
          ref={componentRef}
          v-slots={{
            default: slots.label,
            prefix: slots.prefix,
            suffix: renderSuffix,
          }}
          baseCls={baseCls}
          class={cls.value}
          modelValue={props.modelValue[0]}
          inputValue={props.inputValue}
          focused={props.opened}
          placeholder={props.placeholder}
          disabled={mergedDisabled.value}
          size={mergedSize.value}
          error={mergedError.value}
          enabledInput={enabledInput.value}
          variant={variant.value}
          uninjectFormItemContext
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )
    }

    return {
      inputRef,
      handleFocus,
      handleBlur,
      render,
    }
  },
  methods: {
    focus() {
      if (this.inputRef) {
        this.inputRef.focus()
      }
    },
    blur() {
      if (this.inputRef) {
        this.inputRef.blur()
      }
    },
  },
  render() {
    return this.render()
  },
})
