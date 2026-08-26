import type { ComponentPublicInstance } from 'vue'
import { computed, defineComponent, inject, nextTick, ref, toRefs, watch, watchEffect } from 'vue'
import {
  isArray,
  isEmptyObject,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isString,
  isBoolean,
  isUndefined,
} from '../_utils/is'
import { getKeyFromValue, isGroupOptionInfo, isValidOption, hasEmptyStringKey } from './utils'
import Trigger from '../trigger'
import SelectView from '../_components/select-view/select-view'
import SelectDropdown from './select-dropdown.vue'
import Option from './option.vue'
import OptGroup from './optgroup.vue'
import {
  OptionValueWithKey,
  SelectFieldNames,
  SelectOptionData,
  SelectOptionGroup,
  SelectOptionGroupInfo,
  SelectOptionInfo,
} from './types'
import VirtualList from '../_components/virtual-list-v2'
import { useSelect } from './hooks/use-select'
import { TagData } from '../input-tag'
import { useTrigger } from '../_hooks/use-trigger'
import { useFormItem } from '../_hooks/use-form-item'
import { debounce } from '../_utils/debounce'
import { SelectViewValue } from '../_components/select-view/interface'
import { createNamespace } from '../_utils/global-config'
import { GroupFieldContext, fieldInjectionKey } from '../input/context'
import { selectProps } from './props'

const DEFAULT_FIELD_NAMES = {
  value: 'value',
  label: 'label',
  disabled: 'disabled',
  tagProps: 'tagProps',
  render: 'render',
}

export default defineComponent({
  name: createNamespace('select').name,
  components: {
    Trigger,
    SelectView,
  },
  inheritAttrs: false,
  props: selectProps,
  emits: {
    'update:modelValue': (
      value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[],
    ) => true,
    'update:inputValue': (inputValue: string) => true,
    'update:open': (visible: boolean) => true,
    /**
     * @zh 值发生改变时触发
     * @en Triggered when the value changes
     * @param { string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[] } value
     */
    change: (
      value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[],
    ) => true,
    /**
     * @zh 输入框的值发生改变时触发
     * @en Triggered when the value of the input changes
     * @param {string} inputValue
     */
    inputValueChange: (inputValue: string) => true,
    /**
     * @zh 下拉框的显示状态改变时触发
     * @en Triggered when the display state of the drop-down box changes
     * @param {boolean} visible
     */
    openChange: (visible: boolean) => true,
    /**
     * @zh 点击清除按钮时触发
     * @en Triggered when the clear button is clicked
     */
    clear: (ev: Event) => true,
    /**
     * @zh 点击标签的删除按钮时触发
     * @en Triggered when the delete button of the label is clicked
     * @param {string | number | boolean | Record<string, any> | undefined} removed
     */
    remove: (removed: string | number | boolean | Record<string, any> | undefined) => true,
    /**
     * @zh 用户搜索时触发
     * @en Triggered when the user searches
     * @param {string} inputValue
     */
    search: (inputValue: string) => true,
    /**
     * @zh 下拉菜单发生滚动时触发
     * @en Triggered when the drop-down scrolls
     */
    dropdownScroll: (ev: Event) => true,
    /**
     * @zh 下拉菜单滚动到底部时触发
     * @en Triggered when the drop-down menu is scrolled to the bottom
     */
    dropdownReachBottom: (ev: Event) => true,
    /**
     * @zh 多选超出限制时触发
     * @en Triggered when multiple selection exceeds the limit
     * @param {string | number | boolean | Record<string, any> | undefined} value
     * @param {Event} ev
     * @version 2.18.0
     */
    exceedLimit: (value: string | number | boolean | Record<string, any> | undefined, ev: Event) => true,
  },
  /**
   * @zh 选项为空时的显示内容
   * @en Display content when the option is empty
   * @slot empty
   */
  /**
   * @zh 选项内容
   * @en Display content of options
   * @slot option
   * @binding {SelectOptionData} data
   */
  /**
   * @zh 选择框的显示内容
   * @en Display content of label
   * @slot label
   * @binding {SelectOptionData} data
   */
  /**
   * @zh 下拉框的页头
   * @en The header of the drop-down box
   * @slot header
   * @version 2.43.0
   */
  /**
   * @zh 下拉框的页脚
   * @en The footer of the drop-down box
   * @slot footer
   */
  /**
   * @zh 选择框的箭头图标
   * @en Arrow icon for select box
   * @slot arrow-icon
   * @version 2.16.0
   */
  /**
   * @zh 选择框的加载中图标
   * @en Loading icon for select box
   * @slot loading-icon
   * @version 2.16.0
   */
  /**
   * @zh 选择框的搜索图标
   * @en Search icon for select box
   * @slot search-icon
   * @version 2.16.0
   */
  /**
   * @zh 前缀元素
   * @en Prefix
   * @slot prefix
   * @version 2.22.0
   */
  /**
   * @zh 自定义触发元素
   * @en Custom trigger element
   * @slot trigger
   * @version 2.22.0
   */
  setup(props, { slots, emit, attrs }) {
    const { n, classes } = createNamespace('select')

    // props
    const {
      size,
      variant,
      disabled,
      error,
      options,
      filterOption,
      multiple,
      open,
      defaultOpen,
      showExtraOptions,
      modelValue,
      fieldNames,
      loading,
      defaultActiveFirstOption,
    } = toRefs(props)
    const groupContext = inject<GroupFieldContext>(fieldInjectionKey, {} as GroupFieldContext)
    const _size = computed(() => size.value ?? groupContext?.size ?? 'md')
    const _disabled = computed(() => Boolean(disabled.value ?? groupContext?.disabled ?? false))
    const mergedVariant = computed(() => variant.value ?? groupContext?.variant ?? 'filled')
    const { mergedSize, mergedDisabled, mergedError, eventHandlers } = useFormItem({
      size: _size,
      disabled: _disabled,
      error,
    })
    const component = computed(() => (props.virtualListProps ? 'div' : 'li'))
    const retainInputValue = computed(() => isObject(props.filterable) && Boolean(props.filterable.retainInputValue))
    const formatLabel = computed(() => {
      if (isFunction(props.formatLabel)) {
        return (data: TagData) => {
          const optionInfo = optionInfoMap.get(data.value as string)
          // @ts-ignore
          return props.formatLabel(optionInfo)
        }
      }
      return undefined
    })

    // refs
    const dropdownRef = ref<ComponentPublicInstance>()
    const optionRefs = ref<Record<string, HTMLElement>>({})
    const virtualListRef = ref()

    // trigger
    const { computedOpen, handleOpenChange } = useTrigger({
      open,
      defaultOpen,
      emit,
    })

    // value and key
    const _value = ref(props.defaultValue)

    const mergedFieldNames = computed(() => ({
      ...DEFAULT_FIELD_NAMES,
      ...fieldNames?.value,
    }))

    const computedValueObjects = computed<OptionValueWithKey[]>(() => {
      const mergedValue = props.modelValue ?? _value.value
      const valueArray = isArray(mergedValue)
        ? mergedValue
        : mergedValue || isNumber(mergedValue) || isString(mergedValue) || isBoolean(mergedValue)
          ? [mergedValue]
          : []
      return valueArray.map((value) => ({
        value,
        key: getKeyFromValue(value, mergedFieldNames.value.value),
      }))
    })
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = multiple.value ? [] : (value as any)
      }
    })

    const computedValueKeys = computed(() => computedValueObjects.value.map((obj) => obj.key))

    // selected option
    const _selectedOption = ref()
    const getRawOptionFromValueKeys = (valueKeys: string[]) => {
      const optionMap: Record<string, unknown> = {}

      valueKeys.forEach((key) => {
        optionMap[key] = optionInfoMap.get(key)
      })

      return optionMap
    }

    const updateSelectedOption = (valueKeys: string[]) => {
      _selectedOption.value = getRawOptionFromValueKeys(valueKeys)
    }

    // extra value and option
    const getFallBackOption = (value: string | number | boolean | Record<string, unknown>): SelectOptionData => {
      if (isFunction(props.fallbackOption)) {
        return props.fallbackOption(value)
      }
      return {
        [mergedFieldNames.value.value]: value,
        [mergedFieldNames.value.label]: String(isObject(value) ? value[mergedFieldNames.value.value] : value),
      }
    }

    const getExtraValueData = (): OptionValueWithKey[] => {
      const valueArray: OptionValueWithKey[] = []
      const keyArray: string[] = []

      if (props.creatable || props.fallbackOption) {
        for (const item of computedValueObjects.value) {
          if (!keyArray.includes(item.key) && item.value !== '') {
            const optionInfo = optionInfoMap.get(item.key)
            if (!optionInfo || optionInfo.origin === 'extraOptions') {
              valueArray.push(item)
              keyArray.push(item.key)
            }
          }
        }
      }

      if (props.creatable && computedInputValue.value) {
        const key = getKeyFromValue(computedInputValue.value)
        if (!keyArray.includes(key)) {
          const optionInfo = optionInfoMap.get(key)
          if (!optionInfo || optionInfo.origin === 'extraOptions') {
            valueArray.push({
              value: computedInputValue.value,
              key,
            })
          }
        }
      }
      return valueArray
    }

    const extraValueObjects = ref<OptionValueWithKey[]>([])
    const extraOptions = computed(() =>
      extraValueObjects.value.map((obj) => {
        let optionInfo = getFallBackOption(obj.value)
        const extraOptionRawInfo = _selectedOption.value?.[obj.key]
        if (!isUndefined(extraOptionRawInfo) && !isEmptyObject(extraOptionRawInfo)) {
          optionInfo = { ...optionInfo, ...extraOptionRawInfo }
        }
        return optionInfo
      }),
    )

    nextTick(() => {
      watchEffect(() => {
        const valueData = getExtraValueData()
        if (valueData.length !== extraValueObjects.value.length) {
          extraValueObjects.value = valueData
        } else if (valueData.length > 0) {
          for (let i = 0; i < valueData.length; i++) {
            if (valueData[i].key !== extraValueObjects.value[i]?.key) {
              extraValueObjects.value = valueData
              break
            }
          }
        }
      })
    })

    // input value
    const _inputValue = ref('')
    const computedInputValue = computed(() => props.inputValue ?? _inputValue.value)

    // clear input value when close dropdown
    watch(computedOpen, (visible) => {
      if (!visible && !retainInputValue.value && computedInputValue.value) {
        updateInputValue('')
      }
    })

    // update func
    const getValueFromValueKeys = (valueKeys: string[]) => {
      if (!props.multiple) {
        return (
          optionInfoMap.get(valueKeys[0])?.value ??
          (hasEmptyStringKey(optionInfoMap) ? (undefined as unknown as string) : '')
        )
      }
      return valueKeys.map((key) => optionInfoMap.get(key)?.value ?? '')
    }

    const updateValue = (valueKeys: string[]) => {
      const value = getValueFromValueKeys(valueKeys)
      _value.value = value
      emit('update:modelValue', value)
      emit('change', value)
      eventHandlers.value?.onChange?.()
      updateSelectedOption(valueKeys)
    }

    const updateInputValue = (inputValue: string) => {
      _inputValue.value = inputValue
      emit('update:inputValue', inputValue)
      emit('inputValueChange', inputValue)
    }

    // events
    const handleSelect = (key: string, ev: Event) => {
      if (props.multiple) {
        if (!computedValueKeys.value.includes(key)) {
          if (enabledOptionKeys.value.includes(key)) {
            if (props.limit > 0 && computedValueKeys.value.length >= props.limit) {
              const info = optionInfoMap.get(key)
              emit('exceedLimit', info?.value, ev)
            } else {
              const valueKeys = computedValueKeys.value.concat(key)
              updateValue(valueKeys)
            }
          }
        } else {
          const valueKeys = computedValueKeys.value.filter((_key) => _key !== key)
          updateValue(valueKeys)
        }
        if (!retainInputValue.value) {
          // 点击一个选项时，清空输入框内容
          updateInputValue('')
        }
      } else {
        if (key !== computedValueKeys.value[0]) {
          updateValue([key])
        }
        if (retainInputValue.value) {
          const optionInfo = optionInfoMap.get(key)
          if (optionInfo) {
            updateInputValue(optionInfo.label)
          }
        }

        handleOpenChange(false)
      }
    }

    const handleSearch = debounce((value: string) => {
      emit('search', value)
    }, props.searchDelay)

    const handleInputValueChange = (inputValue: string) => {
      if (inputValue !== computedInputValue.value) {
        if (!computedOpen.value) {
          handleOpenChange(true)
        }

        updateInputValue(inputValue)

        if (props.filterable) {
          handleSearch(inputValue)
        }
      }
    }

    const handleRemove = (key: string) => {
      const optionInfo = optionInfoMap.get(key)
      const newKeys = computedValueKeys.value.filter((_key) => _key !== key)
      updateValue(newKeys)
      emit('remove', optionInfo?.value)
    }

    const handleClear = (e: Event) => {
      e?.stopPropagation()
      const newKeys = computedValueKeys.value.filter((key) => optionInfoMap.get(key)?.disabled)
      updateValue(newKeys)
      updateInputValue('')
      emit('clear', e)
    }

    const handleDropdownScroll = (e: Event) => {
      emit('dropdownScroll', e)
    }

    const handleDropdownReachBottom = (e: Event) => {
      emit('dropdownReachBottom', e)
    }

    const { validOptions, optionInfoMap, validOptionInfos, enabledOptionKeys, handleKeyDown } = useSelect({
      multiple,
      options,
      extraOptions,
      inputValue: computedInputValue,
      filterOption,
      showExtraOptions,
      component,
      fieldNames,
      loading,
      open: computedOpen,
      valueKeys: computedValueKeys,
      dropdownRef,
      optionRefs,
      virtualListRef,
      defaultActiveFirstOption,
      onSelect: handleSelect,
      onOpenChange: handleOpenChange,
    })

    const selectViewValue = computed(() => {
      const result: SelectViewValue[] = []
      for (const item of computedValueObjects.value) {
        const optionInfo = optionInfoMap.get(item.key)
        if (optionInfo) {
          result.push({
            ...optionInfo,
            value: item.key,
            label:
              optionInfo?.label ??
              String(isObject(item.value) ? item.value[mergedFieldNames.value.value] : item.value),
            closable: !optionInfo?.disabled,
            tagProps: optionInfo?.tagProps,
          })
        }
      }
      return result
    })

    const getOptionContentFunc = (optionInfo: SelectOptionInfo) => {
      if (isFunction(slots.option)) {
        const optionSlot = slots.option
        return () => optionSlot({ data: optionInfo.raw })
      }
      if (isFunction(optionInfo.render)) {
        return optionInfo.render
      }
      return () => optionInfo.label
    }

    const renderOption = (optionInfo: SelectOptionInfo | SelectOptionGroupInfo) => {
      if (isGroupOptionInfo(optionInfo)) {
        return (
          <OptGroup key={optionInfo.key} label={optionInfo.label}>
            {optionInfo.options.map((child) => renderOption(child))}
          </OptGroup>
        )
      }

      if (
        !isValidOption(optionInfo, {
          inputValue: computedInputValue.value,
          filterOption: filterOption?.value,
        })
      ) {
        return null
      }

      return (
        <Option
          v-slots={{
            default: getOptionContentFunc(optionInfo),
          }}
          // @ts-ignore
          ref={(ref: ComponentPublicInstance) => {
            if (ref?.$el) {
              optionRefs.value[optionInfo.key] = ref.$el
            }
          }}
          key={optionInfo.key}
          value={optionInfo.value}
          label={optionInfo.label}
          disabled={optionInfo.disabled}
          internal
        />
      )
    }

    const renderDropDown = () => {
      return (
        <SelectDropdown
          ref={dropdownRef}
          v-slots={{
            default: () => [...(slots.default?.() ?? []), ...validOptions.value.map(renderOption)],
            'virtual-list': () => (
              <VirtualList
                {...props.virtualListProps}
                ref={virtualListRef}
                data={validOptions.value}
                v-slots={{
                  item: ({ item }: { item: SelectOptionInfo | SelectOptionGroupInfo }) => renderOption(item),
                }}
              />
            ),
            empty: slots.empty,
            header: slots.header,
            footer: slots.footer,
          }}
          loading={props.loading}
          empty={validOptionInfos.value.length === 0}
          virtualList={Boolean(props.virtualListProps)}
          scrollbar={props.scrollbar}
          showHeaderOnEmpty={props.showHeaderOnEmpty}
          showFooterOnEmpty={props.showFooterOnEmpty}
          onScroll={handleDropdownScroll}
          onReachBottom={handleDropdownReachBottom}
        />
      )
    }

    const renderLabel = ({ data }: { data: SelectViewValue }) => {
      if ((slots.label || isFunction(props.formatLabel)) && data) {
        const optionInfo = optionInfoMap.get(data.value as string)
        if (optionInfo?.raw) {
          return slots.label?.({ data: optionInfo.raw }) ?? props.formatLabel?.(optionInfo.raw)
        }
      }
      return data?.label ?? ''
    }

    return () => {
      const { class: className, style, ...restAttrs } = attrs

      return (
        <Trigger
          v-slots={{ content: renderDropDown }}
          trigger="click"
          placement="bl"
          popupOffset={4}
          animationName="slide-dynamic-origin"
          hideEmpty
          preventFocus
          autoFitPopupWidth
          autoFitTransformOrigin
          disabled={mergedDisabled.value}
          open={computedOpen.value}
          unmountOnClose={props.unmountOnClose}
          clickToClose={!(props.filterable || props.creatable)}
          popupContainer={props.popupContainer}
          onOpenChange={handleOpenChange}
          onUpdate:open={handleOpenChange}
          {...props.triggerProps}
        >
          {slots.trigger?.() ?? (
            <div class={[classes(n()), className]} style={style}>
              <SelectView
                v-slots={{
                  label: renderLabel,
                  prefix: slots.prefix,
                  'arrow-icon': slots['arrow-icon'],
                  'loading-icon': slots['loading-icon'],
                  'search-icon': slots['search-icon'],
                }}
                modelValue={selectViewValue.value}
                inputValue={computedInputValue.value}
                multiple={props.multiple}
                disabled={mergedDisabled.value}
                error={mergedError.value}
                loading={props.loading}
                clearable={props.clearable}
                creatable={props.creatable}
                filterable={Boolean(props.filterable)}
                opened={computedOpen.value}
                maxTagCount={props.maxTagCount}
                placeholder={props.placeholder}
                size={mergedSize.value}
                tagNowrap={props.tagNowrap}
                variant={mergedVariant.value}
                // @ts-ignore
                onInputValueChange={handleInputValueChange}
                onRemove={handleRemove}
                onClear={handleClear}
                onKeydown={handleKeyDown}
                {...restAttrs}
              />
            </div>
          )}
        </Trigger>
      )
    }
  },
})
