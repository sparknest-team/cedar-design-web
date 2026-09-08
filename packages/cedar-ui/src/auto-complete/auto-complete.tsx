import { computed, defineComponent, ref, toRefs, ComponentPublicInstance, toRef, watch, inject, StyleValue } from 'vue'
import Input from '../input'
import Trigger from '../trigger'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { SelectOptionInfo, SelectOptionData } from '../select/types'
import { isFunction, isNull, isUndefined } from '../_utils/is'
import SelectDropdown from '../select/select-dropdown.vue'
import Option from '../select/option.vue'
import { useSelect } from '../select/hooks/use-select'
import { getKeyFromValue } from '../select/utils'
import { useFormItem } from '../_hooks/use-form-item'
import VirtualList from '../_components/virtual-list-v2'
import { GroupFieldContext, fieldInjectionKey } from '../input/context'
import { autoCompleteProps } from './props'

const { name, n, classes } = createNamespace('auto-complete')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: autoCompleteProps,
  emits: {
    'update:modelValue': (value: string) => true,
    /**
     * @zh 绑定值发生改变时触发
     * @en Emitted when the value changes
     * @property {string} value
     */
    change: (value: string) => true,
    /**
     * @zh 用户搜索时触发
     * @en Emitted when the user searches
     * @property {string} value
     */
    search: (value: string) => true,
    /**
     * @zh 选择选项时触发
     * @en Emitted when an option is selected
     * @property {string} value
     */
    select: (value: string, ev: Event) => true,
    /**
     * @zh 用户点击清除按钮时触发
     * @en Triggered when the user clicks the clear button
     * @param {Event} ev
     * @version 2.23.0
     */
    clear: (ev: Event) => true,
    /**
     * @zh 下拉菜单发生滚动时触发
     * @en Triggered when the drop-down scrolls
     * @param {Event} ev
     * @version 2.52.0
     */
    dropdownScroll: (ev: Event) => true,
    /**
     * @zh 下拉菜单滚动到底部时触发
     * @en Triggered when the drop-down menu is scrolled to the bottom
     * @param {Event} ev
     * @version 2.52.0
     */
    dropdownReachBottom: (ev: Event) => true,
  },
  /**
   * @zh 弹出框的页脚
   * @en The footer of the popup menu box
   * @slot footer
   */
  /**
   * @zh 选项内容
   * @en Display content of options
   * @slot option
   * @binding {OptionInfo} data
   * @version 2.13.0
   */
  setup(props, { emit, attrs, slots }) {
    const { modelValue } = toRefs(props)
    const prefixCls = getPrefixCls('auto-complete')
    const { size, disabled, variant } = toRefs(props)
    const groupContext = inject<GroupFieldContext>(fieldInjectionKey, {} as GroupFieldContext)
    const _size = computed(() => size.value ?? groupContext?.size ?? 'md')
    const _disabled = computed(() => Boolean(disabled.value ?? groupContext?.disabled ?? false))
    const mergedVariant = computed(() => variant.value ?? groupContext?.variant ?? 'filled')
    const { mergedSize, mergedDisabled, mergedError, eventHandlers } = useFormItem({
      size: _size,
      disabled: _disabled,
    })

    const _value = ref(props.defaultValue)
    const inputRef = ref<HTMLInputElement>()
    const computedValue = computed(() => props.modelValue ?? _value.value)

    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = ''
      }
    })

    const computedValueKeys = computed(() => (computedValue.value ? [getKeyFromValue(computedValue.value)] : []))
    const { options } = toRefs(props)
    const dropdownRef = ref()
    const optionRefs = ref<Record<string, HTMLElement>>({})

    const _open = ref(false)
    const computedOpen = computed(() => _open.value && validOptionInfos.value.length > 0)

    // VirtualList
    const virtualListRef = ref()
    const component = computed(() => (props.virtualListProps ? 'div' : 'li'))

    const handleOpenChange = (open: boolean) => {
      _open.value = open
    }

    const strictFilterOption = (inputValue: string, option: SelectOptionData) => {
      return Boolean(option.label?.includes(inputValue))
    }

    const mergedFilterOption = computed(() => {
      if (isFunction(props.filterOption)) {
        return props.filterOption
      }
      if (props.filterOption && props.strict) {
        return strictFilterOption
      }
      return props.filterOption
    })

    const handleChange = (value: string) => {
      _value.value = value
      emit('update:modelValue', value)
      emit('change', value)
      eventHandlers.value?.onChange?.()
    }

    const handleClear = (ev: Event) => {
      _value.value = ''
      emit('update:modelValue', '')
      emit('change', '')
      eventHandlers.value?.onChange?.()
      emit('clear', ev)
    }

    // Dropdown事件
    const handleSelect = (key: string, ev: Event) => {
      const value = optionInfoMap.get(key)?.value as string
      emit('select', value, ev)
      handleChange(value)
      inputRef.value?.blur()
    }

    // Input事件
    const handleInputValueChange = (value: string) => {
      emit('search', value)
      handleChange(value)
    }

    const handleDropdownScroll = (e: Event) => {
      emit('dropdownScroll', e)
    }

    const handleDropdownReachBottom = (e: Event) => {
      emit('dropdownReachBottom', e)
    }

    const { validOptions, optionInfoMap, validOptionInfos, handleKeyDown } = useSelect({
      options: options,
      inputValue: computedValue,
      filterOption: mergedFilterOption,
      open: computedOpen,
      valueKeys: computedValueKeys,
      component,
      dropdownRef,
      optionRefs,
      onSelect: handleSelect,
      onOpenChange: handleOpenChange,
    })

    const getOptionContentFunc = (item: SelectOptionInfo) => {
      if (isFunction(slots.option) && item.value) {
        const optionInfo = optionInfoMap.get(item.key)
        const optionSlot = slots.option
        return () => optionSlot({ data: optionInfo })
      }
      return () => item.label
    }

    const renderOption = (item: SelectOptionInfo) => {
      return (
        <Option
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          ref={(ref: ComponentPublicInstance) => {
            if (ref?.$el) {
              optionRefs.value[item.key] = ref.$el
            }
          }}
          v-slots={{
            default: getOptionContentFunc(item),
          }}
          key={item.key}
          value={item.value}
          disabled={item.disabled}
          internal
        />
      )
    }

    const renderDropdown = () => {
      return (
        <SelectDropdown
          ref={dropdownRef}
          class={classes(`${prefixCls}-dropdown`)}
          v-slots={{
            default: () => [...validOptions.value.map((info) => renderOption(info as SelectOptionInfo))],
            'virtual-list': () => (
              <VirtualList
                {...(props.virtualListProps as any)}
                ref={virtualListRef}
                data={validOptions.value}
                v-slots={{
                  item: ({ item }: { item: SelectOptionInfo }) => renderOption(item),
                }}
              />
            ),
            footer: slots.footer,
          }}
          virtualList={Boolean(props.virtualListProps)}
          onScroll={handleDropdownScroll}
          onReachBottom={handleDropdownReachBottom}
        />
      )
    }
    const { class: className, style, ...restAttrs } = attrs

    const render = () => (
      <Trigger
        v-slots={{ content: renderDropdown }}
        trigger="focus"
        placement="bl"
        animationName="slide-dynamic-origin"
        autoFitTransformOrigin
        open={computedOpen.value}
        clickToClose={false}
        preventFocus={true}
        popupOffset={4}
        disabled={mergedDisabled.value}
        autoFitPopupWidth
        {...props.triggerProps}
        onOpenChange={handleOpenChange}
        onUpdate:open={handleOpenChange}
      >
        <div class={[classes(n()), className]} style={style as StyleValue}>
          <Input
            v-slots={slots}
            ref={inputRef}
            {...restAttrs}
            size={mergedSize.value}
            variant={mergedVariant.value}
            disabled={mergedDisabled.value}
            clearable={props.clearable}
            modelValue={computedValue.value}
            onInput={handleInputValueChange}
            onClear={handleClear}
            onKeydown={handleKeyDown}
          />
        </div>
      </Trigger>
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
     * @version 2.40.0
     */
    focus() {
      ;(this.inputRef as HTMLInputElement)?.focus()
    },
    /**
     * @zh 使输入框失去焦点
     * @en Make the input box lose focus
     * @public
     * @version 2.40.0
     */
    blur() {
      ;(this.inputRef as HTMLInputElement)?.blur()
    },
  },
  render() {
    return this.render()
  },
})
