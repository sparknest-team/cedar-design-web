<template>
  <trigger
    v-bind="triggerProps"
    trigger="click"
    animation-name="slide-dynamic-origin"
    auto-fit-transform-origin
    :open="computedOpen"
    placement="bottom-start"
    :disabled="mergedDisabled"
    :popup-offset="4"
    :auto-fit-popup-width="showSearchPanel"
    :popup-container="popupContainer !== undefined ? popupContainer : triggerProps?.popupContainer"
    :prevent-focus="true"
    :close-on-click-reference="!filterable"
    @open-change="handleOpenChange"
  >
    <select-view
      :model-value="selectViewValue"
      :input-value="computedInputValue"
      :disabled="mergedDisabled"
      :error="error"
      :multiple="multiple"
      :clearable="clearable"
      :filterable="filterable"
      :size="size"
      :opened="computedOpen"
      :placeholder="placeholder"
      :loading="loading"
      :max-tag-count="maxTagCount"
      :tag-nowrap="tagNowrap"
      v-bind="$attrs"
      @input-value-change="handleInputValueChange"
      @clear="handleClear"
      @focus="handleFocus"
      @blur="handleBlur"
      @remove="handleRemove"
      @keydown="handleKeyDown"
    >
      <template v-if="$slots.label" #label="data">
        <slot name="label" v-bind="data" />
      </template>
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>
      <template v-if="$slots['arrow-icon']" #arrow-icon>
        <slot name="arrow-icon" />
      </template>
      <template v-if="$slots['loading-icon']" #loading-icon>
        <slot name="loading-icon" />
      </template>
      <template v-if="$slots['search-icon']" #search-icon>
        <slot name="search-icon" />
      </template>
    </select-view>
    <template #content>
      <cascader-search-panel
        v-if="showSearchPanel"
        :options="filteredLeafOptions"
        :active-key="activeKey"
        :multiple="multiple"
        :check-strictly="checkStrictly"
        :loading="loading"
        :path-label="!searchOptionOnlyLabel"
      >
        <template v-if="$slots.empty" #empty>
          <slot name="empty" />
        </template>
      </cascader-search-panel>
      <base-cascader-panel
        v-else
        :display-columns="displayColumns"
        :selected-path="selectedPath"
        :active-key="activeKey"
        :multiple="multiple"
        :total-level="totalLevel"
        :check-strictly="checkStrictly"
        :loading="loading"
        :virtual-list-props="virtualListProps"
        dropdown
      >
        <template v-if="$slots.empty" #empty>
          <slot name="empty" />
        </template>
      </base-cascader-panel>
    </template>
  </trigger>
</template>

<script lang="ts">
import { cascaderProps } from './props'
import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent, PropType, provide, reactive, ref, toRefs, watch } from 'vue'
import {
  getCheckedStatus,
  getLeafOptionInfos,
  getLeafOptionKeys,
  getOptionInfos,
  getOptionLabel,
  getValidValues,
  getValueKey,
} from './utils'
import Trigger, { TriggerProps } from '../trigger'
import SelectView from '../_components/select-view/select-view'
import BaseCascaderPanel from './base-cascader-panel'
import CascaderSearchPanel from './cascader-search-panel'
import { CascaderBaseValue, CascaderFieldNames, CascaderOption, CascaderOptionInfo } from './types'
import { isArray, isFunction, isNull, isUndefined } from '../_utils/is'
import { BaseType, Data, UnionType } from '../_utils/types'
import { useSelectedPath } from './hooks/use-selected-path'
import { KEYBOARD_KEY, getKeyDownHandler } from '../_utils/keyboard'
import { cascaderInjectionKey } from './context'
import { ComponentSize } from '../_utils/constant'
import { debounce } from '../_utils/debounce'
import { useFormItem } from '../_hooks/use-form-item'
import { VirtualListProps } from '../_components/virtual-list-v2/interface'

export default defineComponent({
  name: createNamespace("cascader").name,
  components: {
    Trigger,
    SelectView,
    BaseCascaderPanel,
    CascaderSearchPanel,
  },
  inheritAttrs: false,
  props: cascaderProps,
  emits: {
    'update:modelValue': (
      value:
        | string
        | number
        | Record<string, any>
        | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[]
        | undefined,
    ) => true,
    'update:open': (visible: boolean) => true,
    /**
     * @zh 选中值改变时触发
     * @en Triggered when the selected value changes
     * @property {string | number | (string | number | (string | number)[])[] | undefined} value
     */
    change: (
      value:
        | string
        | number
        | Record<string, any>
        | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[]
        | undefined,
    ) => true,
    /**
     * @zh 输入值改变时触发
     * @en Triggered when the input value changes
     * @property {string} value
     */
    "input-value-change": (value: string) => true,
    /**
     * @zh 点击清除按钮时触发
     * @en Triggered when the clear button is clicked
     */
    clear: () => true,
    /**
     * @zh 用户搜索时触发
     * @en Triggered when the user searches
     * @property {string} value
     */
    search: (value: string) => true,
    /**
     * @zh 下拉框的显示状态改变时触发
     * @en Triggered when the display state of the dropdown changes
     * @property {boolean} visible
     */
    "open-change": (visible: boolean) => true,
    /**
     * @zh 获得焦点时触发
     * @en Triggered when focus
     * @param {FocusEvent} ev
     */
    focus: (ev: FocusEvent) => true,
    /**
     * @zh 失去焦点时触发
     * @en Triggered when blur
     * @param {FocusEvent} ev
     */
    blur: (ev: FocusEvent) => true,
  },
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
   * @zh 选项内容
   * @en Display content of options
   * @slot option
   * @binding {CascaderOption} data
   * @version 2.18.0
   */
  /**
   * @zh 选择框的显示内容
   * @en Display content of label
   * @slot label
   * @binding {CascaderOption} data
   * @version 2.18.0
   */
  /**
   * @zh 选项为空时的显示内容
   * @en Display content when the option is empty
   * @slot empty
   * @version 2.23.0
   */
  /**
   * @zh 前缀元素
   * @en Prefix
   * @slot prefix
   * @version 2.23.0
   */
  setup(props, { emit, slots }) {
    const {
      options,
      checkStrictly,
      loadMore,
      formatLabel,
      modelValue,
      disabled,
      expandTrigger,
      expandChild,
      pathMode,
      multiple,
    } = toRefs(props)
    const _value = ref<CascaderBaseValue | undefined>(props.defaultValue)
    const _inputValue = ref(props.defaultInputValue)
    const _open = ref(props.defaultOpen)

    const { mergedDisabled, eventHandlers } = useFormItem({ disabled })

    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = props.multiple ? [] : undefined
      }
    })

    const optionInfos = ref<CascaderOptionInfo[]>([])
    const totalLevel = ref(1)

    const optionMap = reactive(new Map<string, CascaderOptionInfo>())
    const leafOptionMap = reactive(new Map<string, CascaderOptionInfo>())
    const leafOptionValueMap = reactive(new Map<BaseType, string>())
    const leafOptionSet = reactive(new Set<CascaderOptionInfo>())

    const lazyLoadOptions = reactive<Record<string, CascaderOption[]>>({})

    const addLazyLoadOptions = (children: CascaderOption[], key: string) => {
      lazyLoadOptions[key] = children
    }

    const DEFAULT_FIELD_NAMES = {
      value: 'value',
      label: 'label',
      disabled: 'disabled',
      children: 'children',
      tagProps: 'tagProps',
      render: 'render',
      isLeaf: 'isLeaf',
    }

    const mergedFieldNames = computed(() => ({
      ...DEFAULT_FIELD_NAMES,
      ...props.fieldNames,
    }))

    watch(
      [options, lazyLoadOptions, mergedFieldNames],
      ([_options, _lazyLoadOptions, _fieldNames]) => {
        optionMap.clear()
        leafOptionMap.clear()
        leafOptionValueMap.clear()
        leafOptionSet.clear()

        optionInfos.value = getOptionInfos(_options ?? [], {
          enabledLazyLoad: Boolean(props.loadMore),
          lazyLoadOptions,
          optionMap,
          leafOptionSet,
          leafOptionMap,
          leafOptionValueMap,
          totalLevel,
          checkStrictly,
          fieldNames: _fieldNames,
        })
      },
      {
        immediate: true,
        deep: true,
      },
    )

    const computedValueMap = computed(() => {
      const values = getValidValues(props.modelValue ?? _value.value, {
        multiple: props.multiple,
        pathMode: props.pathMode,
      })
      return new Map(
        values.map((value): [string, UnionType | UnionType[]] => [
          getValueKey(value, {
            valueField: mergedFieldNames.value.value,
            leafOptionValueMap,
          }),
          value,
        ]),
      )
    })

    const computedInputValue = computed(() => props.inputValue ?? _inputValue.value)
    const computedOpen = computed(() => props.open ?? _open.value)

    const getFilteredStatus = (label: string) => {
      return label?.toLocaleLowerCase().includes(computedInputValue.value?.toLocaleLowerCase())
    }

    const filteredLeafOptions = computed(() => {
      const options = props.checkStrictly ? Array.from(optionMap.values()) : Array.from(leafOptionSet)

      return options.filter((item) => {
        if (isFunction(props.filterOption)) {
          return props.filterOption(computedInputValue.value, item.raw)
        }

        if (props.checkStrictly) {
          return getFilteredStatus(item.label)
        }

        return item.path?.find((leaf) => getFilteredStatus(leaf.label))
      })
    })

    const updateValue = (values: UnionType[] | UnionType[][]) => {
      const value = props.multiple ? values : (values[0] ?? '')
      if (values.length === 0) {
        setSelectedPath()
        setActiveKey()
      }

      _value.value = value
      emit('update:modelValue', value)
      emit('change', value)
      eventHandlers.value?.onChange?.()
    }

    watch([multiple, pathMode], () => {
      const values: any[] = []
      computedValueMap.value.forEach((value, key) => {
        const option = leafOptionMap.get(key)
        if (option) {
          values.push(pathMode.value ? option.pathValue : option.value)
        }
      })
      updateValue(values)
    })

    const handleOpenChange = (visible: boolean): void => {
      if (computedOpen.value !== visible) {
        _open.value = visible
        emit('update:open', visible)
        emit('open-change', visible)
      }
    }

    const handleRemove = (key: string) => {
      if (props.multiple) {
        const option = leafOptionMap.get(key)
        if (option) {
          selectMultiple(option, false)
        } else {
          const values: any[] = []
          computedValueMap.value.forEach((value, _key) => {
            if (_key !== key) {
              values.push(value)
            }
          })
          updateValue(values)
        }
      }
    }

    const selectSingle = (option: CascaderOptionInfo) => {
      updateValue([props.pathMode ? option.pathValue : option.value])
      handleOpenChange(false)
    }

    const selectMultiple = (option: CascaderOptionInfo, checked: boolean) => {
      if (checked) {
        const leafOptionInfos = props.checkStrictly ? [option] : getLeafOptionInfos(option)

        updateValue([
          ...computedValueMap.value.values(),
          ...leafOptionInfos
            .filter((item) => !computedValueMap.value.has(item.key))
            .map((item) => {
              return props.pathMode ? item.pathValue : item.value
            }),
        ] as UnionType[] | UnionType[][])
      } else {
        const leafOptionKeys = props.checkStrictly ? [option.key] : getLeafOptionKeys(option)
        const values: any[] = []
        computedValueMap.value.forEach((value, key) => {
          if (!leafOptionKeys.includes(key)) {
            values.push(value)
          }
        })
        updateValue(values)
      }

      handleInputValueChange('', 'optionChecked')
    }

    const handleClickOption = (option: CascaderOptionInfo, checked?: boolean) => {
      if (props.multiple) {
        selectMultiple(option, checked ?? true)
      } else {
        selectSingle(option)
      }
    }

    const handleSearch = debounce((value: string) => {
      emit('search', value)
    }, props.searchDelay)

    const handleInputValueChange = (value: string, reason: string): void => {
      if (value !== computedInputValue.value) {
        if (reason === 'manual' && !computedOpen.value) {
          _open.value = true
          emit('update:open', true)
          emit('open-change', true)
        }

        _inputValue.value = value
        emit('input-value-change', value)

        if (props.filterable) {
          handleSearch(value)
        }
      }
    }

    watch(computedOpen, (value) => {
      if (value) {
        if (computedValueMap.value.size > 0) {
          const keys = Array.from(computedValueMap.value.keys())
          const lastKey = keys[keys.length - 1]
          const option = leafOptionMap.get(lastKey)
          if (option && option.key !== activeKey.value) {
            setSelectedPath(option.key)
            setActiveKey(option.key)
          }
        }
      } else {
        if (computedValueMap.value.size === 0) {
          setSelectedPath()
          setActiveKey()
        }
        handleInputValueChange('', 'optionListHide')
      }
    })

    const handleClear = (e: MouseEvent) => {
      e.stopPropagation()
      if (props.multiple) {
        // 保留已经被选中但被disabled的选项值
        const newValues: any[] = []
        computedValueMap.value.forEach((value, key) => {
          const option = leafOptionMap.get(key)
          if (option?.disabled) {
            newValues.push(props.pathMode ? option.pathValue : option.value)
          }
        })
        updateValue(newValues)
      } else {
        updateValue([])
      }
      handleInputValueChange('', 'manual')
      emit('clear')
    }

    const showSearchPanel = computed(() => props.filterable && computedInputValue.value.length > 0)

    const handleFocus = (e: FocusEvent) => {
      emit('focus', e)
    }
    const handleBlur = (e: FocusEvent) => {
      emit('blur', e)
    }

    const { activeKey, activeOption, selectedPath, displayColumns, setActiveKey, setSelectedPath, getNextActiveNode } =
      useSelectedPath(optionInfos, {
        optionMap,
        filteredLeafOptions,
        showSearchPanel,
        expandChild,
      })

    provide(
      cascaderInjectionKey,
      reactive({
        onClickOption: handleClickOption,
        setActiveKey,
        setSelectedPath,
        loadMore,
        expandTrigger,
        addLazyLoadOptions,
        formatLabel,
        slots,
        valueMap: computedValueMap,
      }),
    )

    const handleKeyDown = getKeyDownHandler(
      new Map([
        [
          KEYBOARD_KEY.ENTER,
          (ev: Event) => {
            if (computedOpen.value) {
              if (activeOption.value) {
                let checked: boolean
                if (props.checkStrictly || activeOption.value.isLeaf) {
                  checked = !computedValueMap.value.has(activeOption.value.key)
                } else {
                  checked = !getCheckedStatus(activeOption.value, computedValueMap.value).checked
                }
                setSelectedPath(activeOption.value.key)
                handleClickOption(activeOption.value, checked)
              }
            } else {
              handleOpenChange(true)
            }
          },
        ],
        [
          KEYBOARD_KEY.ESC,
          (ev: Event) => {
            handleOpenChange(false)
          },
        ],
        [
          KEYBOARD_KEY.ARROW_DOWN,
          (ev: Event) => {
            ev.preventDefault()
            const activeNode = getNextActiveNode('next')
            setActiveKey(activeNode?.key)
          },
        ],
        [
          KEYBOARD_KEY.ARROW_UP,
          (ev: Event) => {
            ev.preventDefault()
            const activeNode = getNextActiveNode('preview')
            setActiveKey(activeNode?.key)
          },
        ],
        [
          KEYBOARD_KEY.ARROW_RIGHT,
          (ev: Event) => {
            if (!showSearchPanel.value) {
              ev.preventDefault()
              if (activeOption.value?.children) {
                setSelectedPath(activeOption.value.key)
                setActiveKey(activeOption.value.children[0]?.key)
              }
            }
          },
        ],
        [
          KEYBOARD_KEY.ARROW_LEFT,
          (ev: Event) => {
            if (!showSearchPanel.value) {
              ev.preventDefault()
              if (activeOption.value?.parent) {
                setSelectedPath(activeOption.value.parent.key)
                setActiveKey(activeOption.value.parent.key)
              }
            }
          },
        ],
      ]),
    )

    const selectViewValue = computed(() => {
      const result: any[] = []
      computedValueMap.value.forEach((value, key) => {
        const option = leafOptionMap.get(key)
        if (option) {
          result.push({
            value: key,
            label: props.formatLabel?.(option.path.map((item) => item.raw)) ?? getOptionLabel(option),
            closable: !option.disabled,
            tagProps: option.tagProps,
          })
        } else if (props.fallback) {
          const label = isFunction(props.fallback)
            ? props.fallback(value)
            : isArray(value)
              ? value.join(' / ')
              : String(value)
          result.push({
            value: key,
            label,
            closable: true,
          })
        }
      })
      return result
    })

    return {
      optionInfos,
      filteredLeafOptions,
      selectedPath,
      activeKey,
      displayColumns,
      computedInputValue,
      computedOpen,
      handleClear,
      selectViewValue,
      handleInputValueChange,
      showSearchPanel,
      handleOpenChange,
      handleFocus,
      handleBlur,
      handleRemove,
      mergedDisabled,
      handleKeyDown,
      totalLevel,
    }
  },
})
</script>
