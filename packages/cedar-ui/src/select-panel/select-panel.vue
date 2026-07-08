<template>
  <div :class="bem('container')">
    <Search
      v-model:searchText="searchValue"
      :placeholder="props.placeholder || t('table.placeholderInputKeyword')"
      :class="bem('search')"
      @change="handleSearch"
    />
    <div :class="bem('selected-value-container')" v-if="props.showSelected && selectedItemList.length">
      <Space :class="bem('selected-value-list')">
        <Tag
          v-for="item in selectedItemList"
          :key="item?.value"
          :class="bem('selected-value-item')"
          closable
          @close="handleClear(item?.value)"
        >
          {{ item?.label ?? item?.value }}
        </Tag>
      </Space>
    </div>
    <CheckboxGroup
      :modelValue="selectedValueList"
      :class="bem('group-list')"
      @change="handleCheckChange"
      v-loading="loading"
    >
      <template v-for="item in localOptions" :key="item.value">
        <div v-if="item.options?.length" :class="bem('group-item')">
          <div :class="bem('group-name')">
            {{ item.label }}
          </div>
          <template v-for="groupItem in item.options" :key="groupItem.value">
            <div :class="bem('checkbox-list')">
              <Checkbox
                :disabled="groupItem.disabled || groupItem.required"
                :value="groupItem.value"
                :class="bem('checkbox-item')"
              >
                <div v-tooltip:ellipsis="groupItem.label" :class="bem('checkbox-item-title')">
                  {{ groupItem.label }}
                </div>
                <slot name="tooltip" :item="groupItem">
                  <template v-if="groupItem.tip">
                    <Tooltip :content="groupItem.tip">
                      <div :class="bem('checkbox-item-tooltip')">
                        <IconInfoCircle />
                      </div>
                    </Tooltip>
                  </template>
                </slot>
              </Checkbox>
            </div>
          </template>
        </div>
        <div v-else-if="typeof item.options === 'undefined'" :key="item.value" :class="bem('group-item')">
          <div :key="item.value" :class="bem('checkbox-list')">
            <Checkbox :disabled="item.disabled || item.required" :value="item.value" :class="bem('checkbox-item')">
              <div v-tooltip:ellipsis="item.label" :class="bem('checkbox-item-title')">
                {{ item.label }}
              </div>
              <slot name="tooltip" :item="item">
                <Tooltip :content="item.tip" v-if="item.tip" background-color="#fff">
                  <div :class="bem('checkbox-item-tooltip')">
                    <IconInfoCircle />
                  </div>
                </Tooltip>
              </slot>
            </Checkbox>
          </div>
        </div>
      </template>
    </CheckboxGroup>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import Checkbox, { CheckboxGroup } from '../checkbox'
import Search from '../search'
import Tooltip from '../tooltip'
import Tag from '../tag'
import Space from '../space'
import { useI18n } from '../locale'
import type { SelectPanelProps } from './props'
import { IconInfoCircle } from '../icon'
import { vLoading } from '../loading'
import { vTooltip } from '../tooltip/tooltip.directive'
import { promiseDebounce } from './utils/promiseDebounce'
import type { Option, OptionData, OptionGroup } from './types'
import { createNamespace } from '../_utils/create'
import { cloneDeep } from 'lodash-es'

const { t } = useI18n()
const [name, bem] = createNamespace('select-panel')
const props = withDefaults(defineProps<SelectPanelProps>(), {
  multiple: false,
  showSelected: true,
  options: () => [],
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (
    e: 'change',
    value: string | string[],
    extData: {
      option: OptionData | OptionData[]
      detail?: {
        value: string
        item: OptionData
        checked: boolean
      }
    },
  ): void
  (
    e: 'check',
    value: string,
    extData: {
      checked: boolean
      option: OptionData
    },
  ): void
  (e: 'init', value: string | string[], extData: { option: OptionData | OptionData[] }): void
}>()
const searchValue = ref('')
const loading = ref(false)
const selectedValueList = ref<string[]>(props.defaultValue ?? [])
const selectedItemList = computed(() => {
  return selectedValueList.value.map((item) => getOptionWithFallback(item))
})
// 缓存options
const cacheOptions = new Map<string, Option>()
// fallbackOptions
const fallbackOptions = new Map<string, Option | undefined>()
// 带分组结构的options
const localOptions = ref<Option[]>([])
// 扁平化options
const localFlatOptions = ref<Option[]>([])
const updateModelvalue = () => {
  let value
  let option
  if (props.multiple) {
    value = selectedValueList.value
    option = selectedValueList.value.map((item) => getOptionWithFallback(item))
  } else {
    value = selectedValueList.value[0]
    option = getOptionWithFallback(selectedValueList.value[0])
  }
  emit('update:modelValue', value)
  emit('change', value, {
    option,
  })
}
/**
 * 将深层带分组结构的options转换为一级的options
 * @param options
 * @returns
 */
const getFlatOptions = (options: Option[]): OptionData[] => {
  return (options
    .flatMap((group) => {
      if (group.options) {
        return [...(group.options ?? [])]
      } else {
        return [group]
      }
    })
    .filter(Boolean) ?? []) as OptionData[]
}
const setOptionsCache = (item?: Option | OptionGroup) => {
  if (typeof item === 'undefined') {
    return
  }
  if (typeof item.value !== 'undefined') {
    cacheOptions.set(item.value as string, item as Option)
  }
}
const getOptionWithFallback = (value: string): OptionData | undefined => {
  let option = localFlatOptions.value.find((item) => item?.value === value)
  if (typeof option === 'undefined') {
    option = cacheOptions.get(value)
  }
  if (typeof option === 'undefined') {
    option = fallbackOptions.get(value)
  }
  return option
}
const handleSearch = async () => {
  if (props.remoteSearch) {
    loading.value = true
    try {
      await promiseDebounce(() => props.remoteSearch?.(searchValue.value), 'search')
    } catch (error) {
      if (error) {
        console.error(error)
      }
      return
    } finally {
      loading.value = false
    }
  } else {
    const clonedOptions = cloneDeep(props.options)
    const flatOptions = getFlatOptions(clonedOptions)
    // 本地搜索，将props.options中符合条件的内容筛选出来并替换options_
    const filteredOptions = flatOptions.filter(
      // 兼容label和value的查询
      (item) =>
        item.label?.toString().includes(searchValue.value) || item.value?.toString().includes(searchValue.value),
    )
    const groups = clonedOptions.map((item) => {
      if (item.options) {
        item.options = item.options.filter((option) =>
          filteredOptions.some((filtered) => filtered.value === option.value),
        )
        return item
      } else if (
        typeof item.options === 'undefined' &&
        filteredOptions.some((filtered) => filtered.value === item.value)
      ) {
        return item
      }
      return undefined
    })
    localOptions.value = groups.filter(Boolean) as Option[]
  }
}
const handleCheckChange = (_, e: Event) => {
  const value = (e.target as HTMLInputElement).value
  const checked = (e.target as HTMLInputElement).checked
  if (props.multiple) {
    if (checked) {
      selectedValueList.value.push(value)
    } else {
      selectedValueList.value = selectedValueList.value.filter((item) => item !== value)
      cacheOptions.delete(value)
    }
  } else {
    if (checked) {
      const preSelectedValue = selectedValueList.value[0]
      selectedValueList.value = [value]
      cacheOptions.delete(preSelectedValue)
    } else {
      selectedValueList.value = []
      cacheOptions.delete(value)
    }
  }
  emit('check', value, {
    checked,
    option: getOptionWithFallback(value)!,
  })
  updateModelvalue()
}
const handleClear = (value: string | undefined) => {
  if (!value) {
    return
  }
  selectedValueList.value = selectedValueList.value.filter((item) => item !== value)
  cacheOptions.delete(value)
  updateModelvalue()
}
const init = () => {
  watch(
    () => props.options,
    () => {
      localOptions.value = cloneDeep(props.options)
      localFlatOptions.value = getFlatOptions(localOptions.value)
    },
    {
      immediate: true,
    },
  )
  watch(
    () => props.modelValue,
    () => {
      if (props.multiple) {
        selectedValueList.value = [...(props.modelValue ?? [])]
      } else {
        selectedValueList.value = props.modelValue ? [props.modelValue as unknown as string] : []
      }
      // 获取反显值并设置缓存
      selectedValueList.value.forEach((value: string) => {
        // 先从缓存中获取
        let option = getOptionWithFallback(value)
        // 如果缓存中没有，则从fallbackOptions中获取
        if (typeof option === 'undefined') {
          option = props.fallbackOptions?.(value)
          fallbackOptions.set(value, option)
        }
        // 设置缓存
        setOptionsCache(option)
      })
    },
    { immediate: true },
  )
  selectedValueList.value = localFlatOptions.value.filter((item) => item.required).map((item) => item.value)
  emit('init', [...selectedValueList.value], {
    option: localFlatOptions.value.filter((item) => item.required),
  })
}
init()
</script>
