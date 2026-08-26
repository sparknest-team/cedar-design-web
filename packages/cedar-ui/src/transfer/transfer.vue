<template>
  <div v-bind="$attrs" :class="cls">
    <transfer-view
      type="source"
      :class="`${prefixCls}-view-source`"
      :title="sourceTitle"
      :data-info="dataInfo.sourceInfo"
      :data="dataInfo.sourceInfo.data"
      :disabled="mergedDisabled"
      :selected="computedSelected"
      :show-search="sourceShowSearch"
      :filter="mergedFilter"
      :show-select-all="showSelectAll"
      :simple="false"
      :search-props="mergedSourceSearchProps"
      :virtual-scroll="virtualScroll"
      :total="data.length"
      @search="handleSearch"
    >
      <template v-if="$slots.source" #default="slotData">
        <slot name="source" v-bind="slotData" />
      </template>
      <template v-if="$slots['source-title']" #title="titleProps">
        <slot name="source-title" v-bind="titleProps" />
      </template>
    </transfer-view>
    <transfer-view
      type="target"
      :class="`${prefixCls}-view-target`"
      :title="targetTitle"
      :data-info="dataInfo.targetInfo"
      :data="dataInfo.targetInfo.data"
      :disabled="mergedDisabled"
      :selected="computedSelected"
      clearable
      :show-search="targetShowSearch"
      :filter="mergedFilter"
      :show-select-all="showSelectAll"
      :simple="false"
      :search-props="mergedTargetSearchProps"
      :virtual-scroll="virtualScroll"
      :target-draggable="targetDraggable"
      :target-operation="targetOperation"
      :total="data.length"
      :clear-text="mergedClearText"
      @search="handleSearch"
    >
      <template v-if="$slots.target" #default="slotData">
        <slot name="target" v-bind="slotData" />
      </template>
      <template v-if="$slots['target-title']" #title="titleProps">
        <slot name="target-title" v-bind="titleProps" />
      </template>
    </transfer-view>
  </div>
  <Dialog
    :open="renameVisible"
    title="重命名"
    :width="420"
    unmount-on-close
    @update:open="renameVisible = $event"
    @confirm="commitRename"
  >
    <Input v-model="renameDraft" placeholder="请输入名称" @press-enter="commitRename" />
  </Dialog>
</template>

<script lang="ts">
import { transferProps } from './props'
import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent, PropType, provide, reactive, ref, toRef } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import TransferView from './transfer-view.vue'
import type { DataInfo, TransferFilter, TransferItem, TransferTargetItem, TransferValue } from './types'
import { transferInjectionKey } from './context'
import { useFormItem } from '../_hooks/use-form-item'
import Dialog from '../dialog'
import Input from '../input'
import type { TransferFixed, TransferTargetAction } from './types'

export default defineComponent({
  name: createNamespace("transfer").name,
  inheritAttrs: false,
  components: {
    TransferView,
    Dialog,
    Input,
  },
  props: transferProps,
  emits: {
    'update:modelValue': (value: TransferTargetItem[]) => true,
    /**
     * @zh 目标选择框的值改变时触发
     * @en Triggered when the value of the target selection box changes
     * @property {string[]} value
     */
    change: (value: TransferTargetItem[]) => true,
    /**
     * @zh 用户搜索时触发
     * @en Triggered when the user searches
     * @property {string} value
     * @property {'target'|'source'} type
     */
    search: (value: string, type: 'target' | 'source') => true,
    rename: (value: TransferValue, label: string) => true,
    targetAction: (key: string, item: TransferItem) => true,
  },
  /**
   * @zh 选项
   * @en Option
   * @slot item
   * @binding {string} value
   * @binding {string} label
   */
  /**
   * @zh 源面板
   * @en Source content
   * @slot source
   * @binding {TransferItem[]} data
   * @binding {string[]} selectedKeys
   * @binding {(value: string[]) => void} onSelect
   * @version 2.39.0
   */
  /**
   * @zh 目标面板
   * @en Target content
   * @slot target
   * @binding {TransferItem[]} data
   * @binding {string[]} selectedKeys
   * @binding {(value: string[]) => void} onSelect
   * @version 2.39.0
   */
  /**
   * @zh 源标题插槽
   * @en Source Header
   * @slot source-title
   * @binding {number} countTotal
   * @binding {number} countSelected
   * @binding {string} searchValue
   * @binding {boolean} checked
   * @binding {boolean} indeterminate
   * @binding {(checked:boolean) => void} onSelectAllChange
   * @binding {() => void} onClear
   * @version 2.45.0
   */
  /**
   * @zh 目标标题插槽
   * @en Target Header
   * @slot target-title
   * @binding {number} countTotal
   * @binding {number} countSelected
   * @binding {string} searchValue
   * @binding {boolean} checked
   * @binding {boolean} indeterminate
   * @binding {(checked:boolean) => void} onSelectAllChange
   * @binding {() => void} onClear
   * @version 2.45.0
   */
  /**
   * @zh 移至源图标插槽
   * @en To source icon slot
   * @slot to-source-icon
   * @version 2.52.0
   */
  /**
   * @zh 移至目标图标插槽
   * @en To target icon slot
   * @slot to-target-icon
   * @version 2.52.0
   */
  setup(props, { emit, slots }) {
    const { mergedDisabled, eventHandlers } = useFormItem({
      disabled: toRef(props, 'disabled'),
    })
    const prefixCls = getPrefixCls('transfer')

    const _target = ref<TransferTargetItem[]>(props.defaultValue.map((item) => ({ ...item })))
    const renameVisible = ref(false)
    const renamingValue = ref<TransferValue>()
    const renameDraft = ref('')
    const computedTarget = computed(() => props.modelValue ?? _target.value)
    const computedTargetValues = computed(() => computedTarget.value.map((item) => item.value))
    const sourceTitle = computed(() => props.sourceTitle ?? props.title?.[0])
    const targetTitle = computed(() => props.targetTitle ?? props.title?.[1])
    const sourceShowSearch = computed(() => props.showSearch || props.sourceFilterable)
    const targetShowSearch = computed(() => props.showSearch || props.targetFilterable)
    const mergedFilter = computed(() => props.filter)
    const mergedSourceSearchProps = computed(() => ({
      ...props.sourceSearchProps,
      placeholder: props.sourceFilterPlaceholder ?? props.sourceSearchProps?.placeholder,
    }))
    const mergedTargetSearchProps = computed(() => ({
      ...props.targetSearchProps,
      placeholder: props.targetFilterPlaceholder ?? props.targetSearchProps?.placeholder,
    }))
    const mergedClearText = computed(() => props.clearText ?? '清空')

    const dataInfo = computed(() => {
      const sourceInfo: DataInfo = {
        data: [],
        allValidValues: [],
        selected: [],
        validSelected: [],
      }

      const targetInfo: DataInfo = {
        data: [],
        allValidValues: [],
        selected: [],
        validSelected: [],
      }

      const itemByValue = new Map(props.data.map((item) => [item.value, item]))
      const targetState = new Map(computedTarget.value.map((item) => [item.value, item]))
      const displayItem = (item: TransferItem, isTarget: boolean): TransferItem => {
        const state = targetState.get(item.value)
        return {
          ...item,
          label: state?.label ?? item.label,
          fixed: isTarget ? state?.fixed : item.fixed,
        }
      }

      for (const item of props.data) {
        const isTarget = computedTargetValues.value.includes(item.value)
        if (props.showSelected || !isTarget) {
          sourceInfo.data.push(displayItem(item, isTarget))
          if (!item.disabled && !item.required) {
            sourceInfo.allValidValues.push(item.value)
          }
        }
        if (isTarget) {
          sourceInfo.selected.push(item.value)
          if (!item.disabled && !item.required) {
            sourceInfo.validSelected.push(item.value)
          }
        }
      }

      for (const targetItem of computedTarget.value) {
        const value = targetItem.value
        const item = itemByValue.get(value)
        if (!item) continue
        targetInfo.data.push(displayItem(item, true))
        if (!item.disabled && !item.required) targetInfo.allValidValues.push(value)
        targetInfo.selected.push(value)
        if (!item.disabled && !item.required) targetInfo.validSelected.push(value)
      }

      return {
        sourceInfo,
        targetInfo,
      }
    })

    const handleSearch = (value: string, type: 'target' | 'source') => {
      emit('search', value, type)
    }

    const moveTo = (values: TransferValue[], target: 'target' | 'source') => {
      const existing = new Set(computedTargetValues.value)
      const sourceItems = new Map(props.data.map((item) => [item.value, item]))
      let newTarget: TransferTargetItem[]
      if (target === 'target') {
        const added = values
          .filter((value) => !existing.has(value))
          .map((value) => ({
            value,
            ...(sourceItems.get(value)?.fixed ? { fixed: sourceItems.get(value)!.fixed } : {}),
          }))
        const combined = [...computedTarget.value, ...added]
        newTarget = [
          ...combined.filter((item) => item.fixed === 'left'),
          ...combined.filter((item) => !item.fixed),
          ...combined.filter((item) => item.fixed === 'right'),
        ]
      } else {
        newTarget = computedTarget.value.filter((item) => !values.includes(item.value))
      }
      updateTarget(newTarget)
    }

    const handleSelect = (values: TransferValue[]) => {
      const selected = new Set(values)
      const existing = new Map(computedTarget.value.map((item) => [item.value, item]))
      const sourceItems = new Map(props.data.map((item) => [item.value, item]))
      const next = values
        .map((value) => {
          const current = existing.get(value)
          if (current) return current
          const fixed = sourceItems.get(value)?.fixed
          return { value, ...(fixed ? { fixed } : {}) }
        })
        .filter((item) => selected.has(item.value))
      updateTarget([
        ...next.filter((item) => item.fixed === 'left'),
        ...next.filter((item) => !item.fixed),
        ...next.filter((item) => item.fixed === 'right'),
      ])
    }

    const updateTarget = (items: TransferTargetItem[]) => {
      const next = items.map((item) => ({ ...item }))
      _target.value = next
      emit('update:modelValue', next)
      emit('change', next)
      eventHandlers.value?.onChange?.()
    }

    const handleFreeze = (value: TransferValue, fixed?: TransferFixed) => {
      const current = computedTarget.value.find((item) => item.value === value)
      const previous = current?.fixed
      if (!fixed && !previous) return

      const changed = { ...(current ?? { value }), fixed }
      if (!fixed) delete changed.fixed
      const remaining = computedTarget.value.filter((item) => item.value !== value)
      const left = remaining.filter((item) => item.fixed === 'left')
      const other = remaining.filter((item) => !item.fixed)
      const right = remaining.filter((item) => item.fixed === 'right')

      if (fixed === 'left') left.push(changed)
      else if (fixed === 'right') right.unshift(changed)
      else if (previous === 'left') other.unshift(changed)
      else other.push(changed)

      updateTarget([...left, ...other, ...right])
    }

    const handleReorder = (items: TransferItem[], detail: { oldValue?: TransferItem; newValue?: TransferItem }) => {
      const existing = new Map(computedTarget.value.map((item) => [item.value, item]))
      const movedValue = detail.oldValue?.value
      updateTarget(
        items.map((item) => {
          const targetItem = { ...(existing.get(item.value) ?? { value: item.value }) }
          if (item.value === movedValue) {
            if (detail.newValue?.fixed) targetItem.fixed = detail.newValue.fixed
            else delete targetItem.fixed
          }
          return targetItem
        })
      )
    }

    const startRename = (item: TransferItem) => {
      renamingValue.value = item.value
      renameDraft.value = item.label
      renameVisible.value = true
    }

    const commitRename = () => {
      const label = renameDraft.value.trim()
      if (typeof renamingValue.value === 'undefined' || !label) return
      updateTarget(computedTarget.value.map((item) => (item.value === renamingValue.value ? { ...item, label } : item)))
      emit('rename', renamingValue.value, label)
      renameVisible.value = false
    }

    const handleTargetAction = (action: TransferTargetAction, item: TransferItem) => {
      emit('targetAction', action.key, item)
    }

    provide(
      transferInjectionKey,
      reactive({
        selected: computedTargetValues,
        slots,
        moveTo,
        onSelect: handleSelect,
        onReorder: handleReorder,
        onFreeze: handleFreeze,
        onRename: startRename,
        onTargetAction: handleTargetAction,
        targetActions: computed(() => props.targetActions),
      })
    )

    const cls = computed(() => [prefixCls, { [`${prefixCls}-disabled`]: mergedDisabled.value }])

    return {
      prefixCls,
      cls,
      dataInfo,
      computedSelected: computedTargetValues,
      mergedDisabled,
      sourceTitle,
      targetTitle,
      sourceShowSearch,
      targetShowSearch,
      mergedFilter,
      mergedSourceSearchProps,
      mergedTargetSearchProps,
      mergedClearText,
      handleSearch,
      renameVisible,
      renameDraft,
      commitRename,
    }
  },
})
</script>
