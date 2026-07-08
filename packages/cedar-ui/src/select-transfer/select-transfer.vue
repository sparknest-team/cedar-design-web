<template>
  <div :class="bem('container')">
    <div :class="bem('header')" v-if="!props.remoteSearch">
      <div :class="bem('header-item')">
        <Checkbox
          :indeterminate="indeterminate"
          :model-value="checkedAll"
          class="checkbox-item"
          @change="handleCheckedAll"
        >
          {{ t('table.selectAll') }}
        </Checkbox>
      </div>
      <div :class="bem('header-item')">
        <div :class="bem('selected-and-available-count')">
          <span :class="bem('count-text')">{{ t('table.selected') }}</span>
          <span :class="bem('count-value')">
            <span :class="bem('selected-count')">{{ selectedCount }}</span>
            <span>/</span>
            <span :class="bem('available-count')">{{ availableCount }}</span>
          </span>
        </div>
        <div :class="bem('selected-clear')">
          <Link @click="() => handleClickClear()">{{ t('table.clear') }}</Link>
        </div>
      </div>
    </div>
    <div :class="bem('content')">
      <SelectPanel
        v-bind="{ ...props }"
        :modelValue="selectedValueList"
        :class="bem('content-item')"
        :options="clonedOptions"
        multiple
        :showSelected="false"
        @change="handleCheckChange"
        @check="handleCheck"
        @init="handleInit"
      />
      <div :class="bem('content-item')">
        <div :class="bem('selected-list-content')">
          <DragContainer
            v-model:modelValue="selectedItemList"
            @change="handleDragChange"
            :class="bem('draggable-list')"
          >
            <template v-for="item in selectedItemList" :key="item.value">
              <div
                :id="`${bem('draggable-item')}-${item.value}`"
                :class="[bem('draggable-item'), item?.fixed && bem('fixed-item')]"
              >
                <div :class="bem('draggable-item-drag')">
                  <IconDragDotVertical />
                </div>
                <CustomTitle :title="item?.label ?? item.value" :class="bem('checkbox-item-title')" />
                <div
                  :class="bem('draggable-item-control-group')"
                  :style="{ ['--visibleStatus']: item.visiblePopover ? 'visible' : undefined }"
                >
                  <Popover
                    v-model:popup-visible="item.visiblePopover"
                    trigger="hover"
                    position="bottom"
                    align-point
                    @popup-visible-change="(visible) => handlePopoverVisibleChange(visible, item)"
                    :content-style="{ padding: '0' }"
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
                          :class="bem('control-item')"
                          :disabled="item.fixed === 'start'"
                          @click="() => handleFreeze(item.value, 'start')"
                          >{{ t('selectTransfer.freezeToTop') }}
                        </Menu.Item>
                        <Menu.Item
                          :class="bem('control-item')"
                          :disabled="item.fixed === 'end'"
                          @click="() => handleFreeze(item.value, 'end')"
                          >{{ t('selectTransfer.freezeToBottom') }}
                        </Menu.Item>
                        <Menu.Item
                          :class="bem('control-item')"
                          :disabled="typeof item.fixed === 'undefined'"
                          @click="() => handleUnFreeze(item.value)"
                          >{{ t('selectTransfer.unfreeze') }}
                        </Menu.Item>
                        <Menu.Item
                          :disabled="item.required"
                          :class="[bem('control-item')]"
                          @click="() => handleClickClear(item.value)"
                          :style="{ color: item.required ? 'rgb(var(--danger-disabled))' : 'rgb(var(--danger))' }"
                        >
                          {{ t('selectTransfer.deleteItem') }}
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
import { ref, watch, defineComponent, type PropType, withDirectives, h } from 'vue'
import SelectPanel from '../select-panel'
import Checkbox from '../checkbox'
import DragContainer from '../drag-container'
import Link from '../link'
import Popover from '../popover'
import Menu from '../menu'
import { useI18n } from '../locale'
import type { SelectTransferProps } from './props'
import { IconDragDotVertical, IconMore } from '../icon'
import { vTooltip } from '../tooltip/tooltip.directive'
import type { Option, OptionData, OptionState } from '../select-panel/types'
import { cloneDeep, groupBy } from 'lodash-es'
import { createNamespace } from '../_utils/create'
const { t } = useI18n()
const [name, bem] = createNamespace('select-transfer')
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
const activatePopover = ref('')
const props = withDefaults(defineProps<SelectTransferProps>(), {
  options: () => [],
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
  (e: 'change', value: string[], items: Option[]): void
  (e: 'search', value: string): void
}>()
const indeterminate = ref(false)
const checkedAll = ref(false)
const selectedValueList = ref<string[]>(props.defaultValue ?? [])
const selectedItemList = ref<(OptionData & OptionState)[]>([])
const clonedOptions = ref<Option[]>([])
const selectedCount = ref(0)
const availableCount = ref(0)
const revertToDefault = (item: OptionData) => {
  item.fixed = undefined
}
/**
 * 排序冻结列表
 * @param items 冻结列表
 * @param option 需要操作的选项（可选）
 * @returns
 */
const processFreezeList = (items: OptionData[]) => {
  const {
    start = [],
    end = [],
    other = [],
  } = groupBy(items, (item) => {
    if (item.fixed === 'start') {
      return 'start'
    } else if (item.fixed === 'end') {
      return 'end'
    } else {
      return 'other'
    }
  })
  return [...start, ...other, ...end]
}
// 更新选中状态，包括checkedAll,indeterminate,selectedCount,availableCount
const updateCheckedStatus = () => {
  // 获取所有选项
  const flatOptions = getFlatOptions(clonedOptions.value)
  // 获取所有非disabled的选项（因为checkedAll和indeterminate的计算方式不一样）
  const flatOptionsWithoutDisabled = flatOptions.filter((item) => !item.disabled)
  // 检查options中的每一项，如果全部都在selectedValueList中，则checkedAll为true
  checkedAll.value = flatOptionsWithoutDisabled.every((item) => {
    return selectedValueList.value.includes(item.value)
  })
  // 非全选状态，首先要非全选。
  // 并检查options中的每一项，如果至少有一项在selectedValueList中，则indeterminate为true
  indeterminate.value =
    !checkedAll.value &&
    flatOptionsWithoutDisabled.some((item) => {
      return selectedValueList.value.includes(item.value)
    })
  // 计算选中项数量
  selectedCount.value = selectedValueList.value.length
  availableCount.value = flatOptions.filter((item) => {
    if (item.disabled) {
      return selectedValueList.value.includes(item.value)
    } else {
      return true
    }
  }).length
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
        return group.options
      } else {
        return [group]
      }
    })
    .filter(Boolean) ?? []) as OptionData[]
}

const getOption = (value: string): OptionData | undefined => {
  return selectedItemList.value.find((item) => item?.value === value)
}

const handleCheck = (value: string, extData: { checked: boolean; option: OptionData }) => {
  const { checked } = extData
  const option = getOption(value) ?? extData.option
  let list = selectedItemList.value
  if (!checked) {
    revertToDefault(option)
    list = list.filter((item) => item.value !== option.value)
  } else {
    if (option.fixed === 'start') {
      list.unshift(option)
    } else if (option.fixed === 'end') {
      list.push(option)
    } else {
      const lastIndex = list.findIndex((item) => item.fixed === 'end')
      list.splice(lastIndex === -1 ? list.length : lastIndex, 0, option)
    }
  }
  selectedItemList.value = list
  selectedValueList.value = selectedItemList.value.map((item) => item.value)
  updateCheckedStatus()
  updateModelValue()
}

const handleCheckChange = () => {}
const checkSelectedStatus = (checkedAll: boolean, indeterminate: boolean) => {
  if (checkedAll && !indeterminate) {
    return 'all'
  }
  if (!checkedAll && indeterminate) {
    return 'indeterminate'
  }
  return 'empty'
}
const updateModelValue = () => {
  emit('update:modelValue', selectedValueList.value)
  emit(
    'change',
    selectedValueList.value,
    selectedItemList.value.map((item) => ({
      value: item.value,
      label: item.label,
      fixed: item.fixed,
      disabled: item.disabled,
    })),
  )
}
const handleCheckedAll = () => {
  const selectedOptions: OptionData[] = []
  const flatOptions = getFlatOptions(clonedOptions.value)
  const status = checkSelectedStatus(checkedAll.value, indeterminate.value)
  if (status === 'all') {
    // 全选状态，则取消选中所有选项
    flatOptions.forEach((item) => {
      // 如果选项在selectedValueList中，并且是disabled的，则选中
      if (item.disabled && selectedValueList.value.includes(item.value)) {
        revertToDefault(item)
        selectedOptions.push(item)
      } else if (!item.disabled) {
        revertToDefault(item)
      }
    })
  } else if (status === 'indeterminate' || status === 'empty') {
    // 半选状态或空选状态，则选中所有选项(除了disabled或hidden)
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
  selectedItemList.value = selectedOptions
  updateCheckedStatus()
  updateModelValue()
}
const handleClickClear = (value?: string) => {
  // 如果item为undefined，则清空selectedValueList(除了disabled的选项)
  if (typeof value === 'undefined') {
    selectedItemList.value = selectedItemList.value.filter((item) => {
      revertToDefault(item)
      return item.disabled
    })
    selectedValueList.value = selectedItemList.value.map((item) => item.value)
  } else {
    // 如果item不为undefined，则从selectedValueList中移除item
    const option = getOption(value)
    if (option) {
      revertToDefault(option)
    }
    selectedItemList.value = selectedItemList.value.filter((item) => item.value !== value)
    selectedValueList.value = selectedItemList.value.map((item) => item.value)
  }
  updateCheckedStatus()
  updateModelValue()
}
const handleDragChange = (
  items: OptionData[],
  { oldValue, newValue }: { oldValue: OptionData; newValue: OptionData },
) => {
  const oldItem = oldValue
  const newItem = newValue
  // 如果newItem是冻结的，则将oldItem的冻结状态设置为newItem的冻结状态
  if (newItem?.fixed) {
    if (oldItem) {
      oldItem.fixed = newItem.fixed
    }
  }
  // 如果newItem是非冻结的，则将oldItem的冻结状态设置为undefined
  if (!newItem?.fixed) {
    if (oldItem) {
      oldItem.fixed = undefined
    }
  }
  selectedValueList.value = items.map((item) => item.value)
  updateModelValue()
}

/**
 * 冻结
 * @param params
 * @param params.list 冻结列表
 * @param params.value 冻结项
 * @param params.fixed 冻结位置 可选值：'start' | 'end' | undefined，为undefined时，表示取消冻结
 */
const freeze = (params: { list: OptionData[]; value: string; fixed: 'start' | 'end' | undefined }) => {
  const { list, value, fixed } = params
  const filteredList: OptionData[] = list.filter((item) => item.value !== value)
  const {
    start = [],
    end = [],
    other = [],
  } = groupBy(filteredList, (item) => {
    if (item.fixed === 'start') {
      return 'start'
    } else if (item.fixed === 'end') {
      return 'end'
    } else {
      return 'other'
    }
  })
  const option = list.find((item) => item.value === value)
  const preFixed = option?.fixed
  if (option) {
    option.fixed = fixed
  }
  // 取消冻结
  if (typeof fixed === 'undefined') {
    if (preFixed === 'start') {
      // 如果取消冻结之前是start，则将option插入到other的最上面
      other.unshift(option!)
    } else if (preFixed === 'end') {
      // 如果取消冻结之前是end，则将option插入到other的最下面
      other.push(option!)
    }
  } else {
    // 冻结
    if (fixed === 'start') {
      // 如果冻结是start，则将option插入到start的最下面
      start.push(option!)
    } else if (fixed === 'end') {
      // 如果冻结是end，则将option插入到end的最上面
      end.unshift(option!)
    }
  }
  return [...start, ...other, ...end]
}
const handleFreeze = (value: string, fixed: 'start' | 'end' | undefined) => {
  const result = freeze({ list: selectedItemList.value, value, fixed })
  selectedItemList.value = result
  selectedValueList.value = result.map((item) => item.value)
  updateModelValue()
}
const handleUnFreeze = (value: string) => {
  const result = freeze({ list: selectedItemList.value, value, fixed: undefined })
  selectedItemList.value = result
  selectedValueList.value = result.map((item) => item.value)
  updateModelValue()
}
const handleInit = (value: string | string[], { option }: { option: OptionData | OptionData[] }) => {
  const flatOptions = getFlatOptions(clonedOptions.value)
  const options = option as OptionData[]
  const selectedOptions = (value as string[]).map((value) => {
    const option = flatOptions.find((item) => item.value === value)
    if (option) {
      return option
    } else {
      return options.find((item) => item.value === value)
    }
  })
  selectedItemList.value = processFreezeList(selectedOptions as OptionData[])
  selectedValueList.value = selectedItemList.value.map((item) => item.value)
  updateModelValue()
}
const handlePopoverVisibleChange = (visible: boolean, item: OptionData) => {
  if (visible) {
    activatePopover.value = item.value
  } else {
    activatePopover.value = ''
  }
}
const handleClickMore = (item: OptionData & OptionState) => {
  const value = item.value
  selectedItemList.value.forEach((item) => {
    if (item.value === value) {
      item.visiblePopover = true
    } else {
      item.visiblePopover = false
    }
  })
}
const init = () => {
  watch(
    () => props.options,
    () => {
      clonedOptions.value = cloneDeep(props.options)
      updateCheckedStatus()
    },
    {
      immediate: true,
    },
  )
  watch(
    () => props.modelValue,
    () => {
      selectedValueList.value = [...(props.modelValue ?? [])]
      updateCheckedStatus()
    },
    { immediate: true },
  )
}
init()
</script>
