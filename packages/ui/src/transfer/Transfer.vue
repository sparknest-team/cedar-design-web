<template>
  <div ref="root" v-bind="$attrs" :role="typeof $attrs.role === 'string' ? $attrs.role : (describeError($attrs['aria-describedby']) || autoLabelId || $attrs['aria-label'] || $attrs['aria-labelledby'] ? 'group' : undefined)" :aria-labelledby="'aria-labelledby' in $attrs ? ($attrs['aria-labelledby'] as string | undefined) : ('aria-label' in $attrs || $attrs.role === 'presentation' || $attrs.role === 'none' ? undefined : autoLabelId)" :aria-describedby="describeError($attrs['aria-describedby'])" :class="cls">
    <transfer-view
      type="source"
      :class="`${prefixCls}-view-source`"
      :title="sourceTitle"
      :data-info="dataInfo.sourceInfo"
      :data="dataInfo.sourceInfo.data"
      :disabled="mergedDisabled"
      :selected="computedSelected"
      :show-search="sourceShowSearch"
      :filter="sourceFilter"
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
    :dir="dir"
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
import { useDirection } from '@cedar-design/use-vue'
import { useOptionRequest } from '../_hooks/use-option-request'
import { provideFormErrorDescriptionBoundary, useFormErrorDescription } from '../form/error-description'
import { useFormItemLabel } from '../form/label-context'
import { transferProps } from './props'
import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent, PropType, provide, reactive, ref, toRef } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import TransferView from './TransferView.vue'
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
    'update:modelValue': (value: TransferTargetItem[] | null) => true,
    /**
     * @zh 目标选择框的值改变时触发
     * @en Triggered when the value of the target selection box changes
   * @property {TransferTargetItem[]} value
     */
    change: (value: TransferTargetItem[] | null) => true,
    /**
     * @zh 用户搜索时触发
     * @en Triggered when the user searches
     * @property {string} value
     * @property {'target'|'source'} type
     */
    "load-error": (error: unknown) => true,
    search: (value: string, type: 'target' | 'source') => true,
    rename: (value: TransferValue, label: string) => true,
    "target-action": (key: string, item: TransferItem) => true,
  },
  /**
   * @zh 选项
   * @en Option
   * @slot item
   * @binding {TransferValue} value
   * @binding {string} label
   */
  /**
   * @zh 源面板
   * @en Source content
   * @slot source
   * @binding {TransferItem[]} data
   * @binding {TransferValue[]} selectedKeys
   * @binding {(value: TransferValue[]) => void} onSelect
   */
  /**
   * @zh 目标面板
   * @en Target content
   * @slot target
   * @binding {TransferItem[]} data
   * @binding {TransferValue[]} selectedKeys
   * @binding {(value: TransferValue[]) => void} onSelect
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
   */
  setup(props, { emit, slots }) {
    const { describe: describeError } = useFormErrorDescription()
    const formLabel = useFormItemLabel()
    const autoLabelId = computed(() => formLabel?.value?.target ? undefined : formLabel?.value?.id)
    provideFormErrorDescriptionBoundary()
    const { mergedDisabled: inheritedDisabled, mergedReadonly, eventHandlers } = useFormItem({
      disabled: toRef(props, 'disabled'),
      readonly: toRef(props, 'readonly'),
    })
    const mergedDisabled = computed(() => inheritedDisabled.value || mergedReadonly.value)
    const source = useOptionRequest(() => props.data, () => inheritedDisabled.value, error => emit('load-error', error), () => 0, transferProps)
    const data = source.options
    const root = ref<HTMLElement>()
    const { dir } = useDirection(() => root.value)
    const prefixCls = getPrefixCls('transfer')

    const _target = ref<TransferTargetItem[]>(props.defaultValue.map((item) => ({ ...item })))
    const renameVisible = ref(false)
    const renamingValue = ref<TransferValue>()
    const renameDraft = ref('')
    const computedTarget = computed(() => props.modelValue === null ? [] : props.modelValue ?? _target.value)
    const computedTargetValues = computed(() => computedTarget.value.map((item) => item.value))
    const sourceTitle = computed(() => props.sourceTitle ?? props.title?.[0])
    const targetTitle = computed(() => props.targetTitle ?? props.title?.[1])
    const sourceShowSearch = computed(() => props.showSearch || props.sourceFilterable)
    const targetShowSearch = computed(() => props.showSearch || props.targetFilterable)
    const mergedFilter = computed(() => props.filter ?? ((value: string, item: TransferItem) => item.label.toLowerCase().includes(value.toLowerCase())))
    const sourceFilter = computed(() => source.remote.value && !props.filter ? () => true : mergedFilter.value)
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

      const itemByValue = new Map(data.value.map((item) => [item.value, item]))
      const targetState = new Map(computedTarget.value.map((item) => [item.value, item]))
      const displayItem = (item: TransferItem, isTarget: boolean): TransferItem => {
        const state = targetState.get(item.value)
        return {
          ...item,
          label: state?.label ?? item.label,
          fixed: isTarget ? state?.fixed : item.fixed,
        }
      }

      for (const item of data.value) {
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
        const item = itemByValue.get(value) ?? { value, label: targetItem.label ?? String(value) }
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
      if (type === 'source') void source.search(value)
    }

    const moveTo = (values: TransferValue[], target: 'target' | 'source') => {
      const existing = new Set(computedTargetValues.value)
      const sourceItems = new Map(data.value.map((item) => [item.value, item]))
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
      const sourceItems = new Map(data.value.map((item) => [item.value, item]))
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
      if (mergedDisabled.value) return
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
      const reorderedValues = new Set(items.map((item) => item.value))
      let index = 0
      // The view can reorder a filtered subset. Preserve every other target,
      // including selected values absent from the current remote candidate page.
      const reordered = computedTarget.value.map((current) => {
        if (!reorderedValues.has(current.value)) return current
        const item = items[index++]
        const targetItem = { ...(existing.get(item.value) ?? current) }
        if (item.value === movedValue) {
          if (detail.newValue?.fixed) targetItem.fixed = detail.newValue.fixed
          else delete targetItem.fixed
        }
        return targetItem
      })
      updateTarget(reordered)
    }

    const startRename = (item: TransferItem) => {
      if (mergedDisabled.value) return
      renamingValue.value = item.value
      renameDraft.value = item.label
      renameVisible.value = true
    }

    const commitRename = () => {
      if (mergedDisabled.value) return
      const label = renameDraft.value.trim()
      if (typeof renamingValue.value === 'undefined' || !label) return
      updateTarget(computedTarget.value.map((item) => (item.value === renamingValue.value ? { ...item, label } : item)))
      emit('rename', renamingValue.value, label)
      renameVisible.value = false
    }

    const handleTargetAction = (action: TransferTargetAction, item: TransferItem) => {
      if (mergedDisabled.value) return
      emit('target-action', action.key, item)
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
      describeError,
      autoLabelId,
      root,
      dir,
      prefixCls,
      data,
      cls,
      dataInfo,
      computedSelected: computedTargetValues,
      mergedDisabled,
      sourceTitle,
      targetTitle,
      sourceShowSearch,
      targetShowSearch,
      mergedFilter,
      sourceFilter,
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
