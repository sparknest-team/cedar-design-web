<template>
  <div :class="prefixCls">
    <div v-if="!props.remoteSearch" :class="`${prefixCls}-header`">
      <div :class="`${prefixCls}-header-item`">
        <Checkbox
          :indeterminate="indeterminate"
          :model-value="checkedAll"
          class="checkbox-item"
          @change="handleCheckedAll"
        >
          {{ t('table.selectAll') }}
        </Checkbox>
      </div>
      <div :class="`${prefixCls}-header-item`">
        <div :class="`${prefixCls}-selected-and-available-count`">
          <span :class="`${prefixCls}-count-text`">{{ t('table.selected') }}</span>
          <span :class="`${prefixCls}-count-value`">
            <span :class="`${prefixCls}-selected-count`">{{ selectedCount }}</span>
            <span>/</span>
            <span :class="`${prefixCls}-available-count`">{{ availableCount }}</span>
          </span>
        </div>
        <div :class="`${prefixCls}-selected-clear`">
          <Link @click="() => handleClickClear()">{{ t('table.clear') }}</Link>
        </div>
      </div>
    </div>
    <div :class="`${prefixCls}-body`">
      <SelectPanel
        :model-value="selectedValueList"
        :class="`${prefixCls}-body-item`"
        :options="panelOptions"
        :placeholder="props.placeholder"
        :remote-search="props.remoteSearch"
        :fallback-options="fallbackOptions"
        multiple
        :show-selected="false"
        @check="handleCheck"
        @init="handleInit"
      >
        <template #tooltip="slotProps">
          <slot name="tooltip" v-bind="slotProps" />
        </template>
      </SelectPanel>
      <div :class="`${prefixCls}-body-item`">
        <div :class="`${prefixCls}-selected-list`">
          <DragContainer
            v-model:model-value="selectedItemList"
            :class="`${prefixCls}-draggable-list`"
            @change="handleDragChange"
          >
            <template v-for="item in selectedItemList" :key="item.value">
              <div
                :id="`${prefixCls}-draggable-item-${item.value}`"
                :class="[`${prefixCls}-draggable-item`, item?.fixed && `${prefixCls}-fixed-item`]"
              >
                <div :class="`${prefixCls}-draggable-item-drag`">
                  <IconDragDotVertical />
                </div>
                <Input
                  v-if="renamingKey === item.value"
                  v-model="renameDraft"
                  size="sm"
                  :class="`${prefixCls}-item-title-input`"
                  @press-enter="commitRename(item)"
                  @blur="commitRename(item)"
                />
                <CustomTitle
                  v-else
                  :title="item?.label ?? item.value"
                  :class="`${prefixCls}-item-title`"
                />
                <div
                  :class="`${prefixCls}-draggable-item-control`"
                  :style="{ ['--visibleStatus']: item.visiblePopover ? 'visible' : undefined }"
                >
                  <Popover
                    v-model:popup-visible="item.visiblePopover"
                    trigger="hover"
                    position="bottom"
                    align-point
                    :content-style="{ padding: '0' }"
                    @popup-visible-change="(visible) => handlePopoverVisibleChange(visible, item)"
                  >
                    <IconMore
                      size="24"
                      color="var(--bg-1)"
                      style="
                        background-color: var(--bg-2);
                        border-radius: 4px;
                        border: 1px solid var(--border-3);
                        padding: 2px;
                      "
                      @click="handleClickMore(item)"
                    />
                    <template #content>
                      <Menu @menu-item-click="() => (item.visiblePopover = false)">
                        <Menu.Item
                          :class="`${prefixCls}-control-item`"
                          @click="() => startRename(item)"
                        >
                          {{ t('table.columnManager.renameColumn') }}
                        </Menu.Item>
                        <Menu.Item
                          :class="`${prefixCls}-control-item`"
                          :disabled="item.fixed === 'start'"
                          @click="() => handleFreeze(item.value, 'start')"
                        >
                          {{ t('table.columnManager.freezeToLeft') }}
                        </Menu.Item>
                        <Menu.Item
                          :class="`${prefixCls}-control-item`"
                          :disabled="item.fixed === 'end'"
                          @click="() => handleFreeze(item.value, 'end')"
                        >
                          {{ t('table.columnManager.freezeToRight') }}
                        </Menu.Item>
                        <Menu.Item
                          :class="`${prefixCls}-control-item`"
                          :disabled="typeof item.fixed === 'undefined'"
                          @click="() => handleUnFreeze(item.value)"
                        >
                          {{ t('table.columnManager.unfreeze') }}
                        </Menu.Item>
                        <Menu.Item
                          :disabled="item.required"
                          :class="`${prefixCls}-control-item`"
                          :style="{
                            color: item.required ? 'rgb(var(--danger-disabled))' : 'rgb(var(--danger))',
                          }"
                          @click="() => handleClickClear(item.value)"
                        >
                          {{ t('table.columnManager.deleteItem') }}
                        </Menu.Item>
                      </Menu>
                    </template>
                  </Popover>
                </div>
              </div>
            </template>
          </DragContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, defineComponent, type PropType, withDirectives, h, computed } from 'vue'
import SelectPanel from '../select-panel'
import Checkbox from '../checkbox'
import DragContainer from '../drag-container'
import Link from '../link'
import Popover from '../popover'
import Menu from '../menu'
import Input from '../input'
import { useI18n } from '../locale'
import type { TableColumnManagerProps } from './props'
import { IconDragDotVertical, IconMore } from '../icon'
import { vTooltip } from '../tooltip/tooltip.directive'
import type { Option, OptionData, OptionState } from '../select-panel/types'
import { cloneDeep, groupBy } from 'lodash-es'
import { getPrefixCls } from '../_utils/global-config'
import {
  applyColumnFixed,
  buildColumnsResult,
  buildFixedMap,
  catalogToOptions,
  fixedFromInternal,
  fixedToInternal,
} from './utils'
import type { ColumnCatalog, ColumnManagerResult } from './types'

defineOptions({ name: 'TableColumnManager' })

const { t } = useI18n()
const prefixCls = getPrefixCls('table-column-manager')

const CustomTitle = defineComponent({
  props: {
    title: {
      type: [String, Object] as PropType<string | any>,
    },
  },
  render() {
    if (typeof this.title === 'function') {
      return h('div', this.title?.())
    }
    return withDirectives(h('div', this.title), [[vTooltip, this.title, 'ellipsis']])
  },
})

const props = withDefaults(defineProps<TableColumnManagerProps>(), {
  options: () => [],
  columns: () => [],
  requiredKeys: () => [],
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
  (e: 'update:fixedMap', value: Record<string, 'left' | 'right'>): void
  (e: 'update:titleMap', value: Record<string, string>): void
  (
    e: 'change',
    value: string[],
    items: { dataIndex: string; title: string; fixed?: 'left' | 'right'; disabled?: boolean }[],
  ): void
}>()

const activatePopover = ref('')
const renamingKey = ref('')
const renameDraft = ref('')
const indeterminate = ref(false)
const checkedAll = ref(false)
const selectedValueList = ref<string[]>([...(props.defaultValue ?? props.modelValue ?? [])])
const selectedItemList = ref<(OptionData & OptionState)[]>([])
const innerCatalog = ref<ColumnCatalog>(cloneDeep(props.options ?? []))
const innerTitleMap = ref<Record<string, string>>({ ...(props.titleMap ?? {}) })
const selectedCount = ref(0)
const availableCount = ref(0)
const initialKeys = ref<string[]>([...selectedValueList.value])

const panelOptions = computed(() => catalogToOptions(innerCatalog.value, props.requiredKeys))

const fallbackOptions = (value: string): Option => {
  const item = props.fallbackItem?.(value)
  if (item) {
    return {
      label: item.title,
      value: item.dataIndex,
      required: item.required,
      disabled: item.disabled,
      tip: item.tip,
      fixed: fixedToInternal(item.fixed),
    }
  }
  return { label: value, value }
}

const revertToDefault = (item: OptionData) => {
  item.fixed = undefined
}

const processFreezeList = (items: OptionData[]) => {
  const {
    start = [],
    end = [],
    other = [],
  } = groupBy(items, (item) => {
    if (item.fixed === 'start') return 'start'
    if (item.fixed === 'end') return 'end'
    return 'other'
  })
  return [...start, ...other, ...end]
}

const getFlatOptions = (options: Option[]): OptionData[] => {
  return (options
    .flatMap((group) => {
      if (group.options) {
        return group.options
      }
      return [group]
    })
    .filter(Boolean) ?? []) as OptionData[]
}

const applyFixedMapToOptions = (options: Option[], fixedMap: Record<string, 'left' | 'right'>) => {
  const flat = getFlatOptions(options)
  flat.forEach((item) => {
    item.fixed = fixedToInternal(fixedMap[item.value])
  })
}

const updateCheckedStatus = () => {
  const flatOptions = getFlatOptions(panelOptions.value)
  const flatOptionsWithoutDisabled = flatOptions.filter((item) => !item.disabled)
  checkedAll.value =
    flatOptionsWithoutDisabled.length > 0 &&
    flatOptionsWithoutDisabled.every((item) => selectedValueList.value.includes(item.value))
  indeterminate.value =
    !checkedAll.value &&
    flatOptionsWithoutDisabled.some((item) => selectedValueList.value.includes(item.value))
  selectedCount.value = selectedValueList.value.length
  availableCount.value = flatOptions.filter((item) => {
    if (item.disabled) {
      return selectedValueList.value.includes(item.value)
    }
    return true
  }).length
}

const getOption = (value: string): OptionData | undefined => {
  return selectedItemList.value.find((item) => item?.value === value)
}

const emitChange = () => {
  const fixedMap = buildFixedMap(selectedItemList.value)
  const titleMap: Record<string, string> = { ...innerTitleMap.value }
  selectedItemList.value.forEach((item) => {
    if (typeof item.label === 'string') {
      titleMap[item.value] = item.label
    }
  })
  innerTitleMap.value = titleMap
  emit('update:modelValue', selectedValueList.value)
  emit('update:fixedMap', fixedMap)
  emit('update:titleMap', titleMap)
  emit(
    'change',
    selectedValueList.value,
    selectedItemList.value.map((item) => ({
      dataIndex: item.value,
      title: typeof item.label === 'string' ? item.label : item.value,
      fixed: item.fixed === 'start' ? 'left' : item.fixed === 'end' ? 'right' : undefined,
      disabled: item.disabled,
    })),
  )
}

const handleCheck = (value: string, extData: { checked: boolean; option: OptionData }) => {
  const { checked } = extData
  const option = getOption(value) ?? extData.option
  let list = selectedItemList.value
  if (!checked) {
    revertToDefault(option)
    list = list.filter((item) => item.value !== option.value)
  } else if (option.fixed === 'start') {
    list.unshift(option)
  } else if (option.fixed === 'end') {
    list.push(option)
  } else {
    const lastIndex = list.findIndex((item) => item.fixed === 'end')
    list.splice(lastIndex === -1 ? list.length : lastIndex, 0, option)
  }
  selectedItemList.value = list
  selectedValueList.value = selectedItemList.value.map((item) => item.value)
  updateCheckedStatus()
  emitChange()
}

const checkSelectedStatus = (all: boolean, half: boolean) => {
  if (all && !half) return 'all'
  if (!all && half) return 'indeterminate'
  return 'empty'
}

const handleCheckedAll = () => {
  const selectedOptions: OptionData[] = []
  const flatOptions = getFlatOptions(panelOptions.value)
  const status = checkSelectedStatus(checkedAll.value, indeterminate.value)
  if (status === 'all') {
    flatOptions.forEach((item) => {
      if (item.disabled && selectedValueList.value.includes(item.value)) {
        revertToDefault(item)
        selectedOptions.push(item)
      } else if (!item.disabled) {
        revertToDefault(item)
      }
    })
  } else {
    flatOptions.forEach((item) => {
      if (!item.disabled) {
        selectedOptions.push(item)
      }
      if (item.disabled && selectedValueList.value.includes(item.value)) {
        selectedOptions.push(item)
      }
    })
  }
  selectedValueList.value = selectedOptions.map((item) => item.value)
  selectedItemList.value = processFreezeList(selectedOptions)
  updateCheckedStatus()
  emitChange()
}

const handleClickClear = (value?: string) => {
  if (typeof value === 'undefined') {
    selectedItemList.value = selectedItemList.value.filter((item) => {
      revertToDefault(item)
      return item.disabled || item.required
    })
    selectedValueList.value = selectedItemList.value.map((item) => item.value)
  } else {
    const option = getOption(value)
    if (option) {
      revertToDefault(option)
    }
    selectedItemList.value = selectedItemList.value.filter((item) => item.value !== value)
    selectedValueList.value = selectedItemList.value.map((item) => item.value)
  }
  updateCheckedStatus()
  emitChange()
}

const handleDragChange = (
  items: OptionData[],
  { oldValue, newValue }: { oldValue: OptionData; newValue: OptionData },
) => {
  const oldItem = oldValue
  const newItem = newValue
  if (newItem?.fixed && oldItem) {
    oldItem.fixed = newItem.fixed
  }
  if (!newItem?.fixed && oldItem) {
    oldItem.fixed = undefined
  }
  selectedValueList.value = items.map((item) => item.value)
  emitChange()
}

const freeze = (params: { list: OptionData[]; value: string; fixed: 'start' | 'end' | undefined }) => {
  const { list, value, fixed } = params
  const keys = list.map((item) => item.value)
  const next = applyColumnFixed({
    keys,
    fixedMap: buildFixedMap(list),
    dataIndex: value,
    fixed: fixedFromInternal(fixed),
  })
  const byValue = new Map(list.map((item) => [item.value, item]))
  return next.keys.map((key) => {
    const item = byValue.get(key)!
    item.fixed = fixedToInternal(next.fixedMap[key])
    return item
  })
}

const handleFreeze = (value: string, fixed: 'start' | 'end' | undefined) => {
  const result = freeze({ list: selectedItemList.value, value, fixed })
  selectedItemList.value = result
  selectedValueList.value = result.map((item) => item.value)
  emitChange()
}

const handleUnFreeze = (value: string) => {
  handleFreeze(value, undefined)
}

const syncSelectedFromKeys = (keys: string[], optionFallback: OptionData[] = []) => {
  const flatOptions = getFlatOptions(panelOptions.value)
  const fixedMap = props.fixedMap ?? props.defaultFixedMap ?? {}
  const titleMap = { ...innerTitleMap.value, ...(props.titleMap ?? {}) }
  const selectedOptions = keys
    .map((val) => {
      const found = flatOptions.find((item) => item.value === val) ?? optionFallback.find((item) => item.value === val)
      if (!found) return undefined
      return {
        ...found,
        label: titleMap[val] ?? found.label,
        fixed: fixedToInternal(fixedMap[val]),
      }
    })
    .filter(Boolean) as OptionData[]

  selectedValueList.value = [...keys]
  selectedItemList.value = processFreezeList(selectedOptions)
  updateCheckedStatus()
}

const startRename = (item: OptionData & OptionState) => {
  renamingKey.value = item.value
  renameDraft.value = typeof item.label === 'string' ? item.label : item.value
  item.visiblePopover = false
}

const commitRename = (item: OptionData) => {
  if (renamingKey.value !== item.value) return
  const nextTitle = renameDraft.value.trim()
  if (nextTitle) {
    item.label = nextTitle
    innerTitleMap.value = { ...innerTitleMap.value, [item.value]: nextTitle }
  }
  renamingKey.value = ''
  emitChange()
}

const handleInit = (value: string | string[], { option }: { option: OptionData | OptionData[] }) => {
  // 优先使用外部传入的 modelValue（打开弹层时已从 columns 同步），避免被 init 默认值覆盖
  const keys = (props.modelValue?.length ? props.modelValue : (value as string[])) ?? []
  syncSelectedFromKeys(keys, option as OptionData[])
  emitChange()
}

const handlePopoverVisibleChange = (visible: boolean, item: OptionData) => {
  activatePopover.value = visible ? item.value : ''
}

const handleClickMore = (item: OptionData & OptionState) => {
  const value = item.value
  selectedItemList.value.forEach((row) => {
    row.visiblePopover = row.value === value
  })
}

const getResult = (): ColumnManagerResult => {
  const titleMap: Record<string, string> = { ...innerTitleMap.value }
  selectedItemList.value.forEach((item) => {
    if (typeof item.label === 'string') {
      titleMap[item.value] = item.label
    }
  })
  return buildColumnsResult({
    keys: selectedValueList.value,
    fixedMap: buildFixedMap(selectedItemList.value),
    titleMap,
    columns: props.columns ?? [],
    catalog: innerCatalog.value,
    insertAt: props.insertAt,
    prevKeys: initialKeys.value,
  })
}

const resetInitialKeys = () => {
  initialKeys.value = [...selectedValueList.value]
}

const loadCatalog = async () => {
  if (props.loadOptions) {
    innerCatalog.value = cloneDeep(await props.loadOptions())
    initialized.value = true
  }
}

watch(
  () => props.options,
  (val) => {
    innerCatalog.value = cloneDeep(val ?? [])
    updateCheckedStatus()
  },
  { immediate: true, deep: true },
)

watch(
  () => props.modelValue,
  (val) => {
    if (!val) return
    // 与外部 keys 对齐时同步右侧已选列表（不仅是勾选值）
    const same =
      val.length === selectedValueList.value.length && val.every((key, index) => key === selectedValueList.value[index])
    if (same && selectedItemList.value.length === val.length) return
    syncSelectedFromKeys(val)
  },
)

watch(
  () => props.fixedMap,
  (val) => {
    if (val) {
      applyFixedMapToOptions(panelOptions.value, val)
      selectedItemList.value = processFreezeList(
        selectedItemList.value.map((item) => ({
          ...item,
          fixed: fixedToInternal(val[item.value]),
        })),
      )
    }
  },
  { deep: true },
)

watch(
  () => props.titleMap,
  (val) => {
    if (!val) return
    innerTitleMap.value = { ...innerTitleMap.value, ...val }
    selectedItemList.value = selectedItemList.value.map((item) => ({
      ...item,
      label: val[item.value] ?? item.label,
    }))
  },
  { deep: true },
)

watch(
  panelOptions,
  () => {
    updateCheckedStatus()
  },
  { immediate: true },
)

const initialized = ref(false)
const ensureCatalog = async () => {
  if (props.loadOptions && !initialized.value) {
    await loadCatalog()
    initialized.value = true
  }
}
ensureCatalog()

defineExpose({
  getResult,
  loadCatalog,
  resetInitialKeys,
})
</script>
