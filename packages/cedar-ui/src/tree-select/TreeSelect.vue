<template>
  <component
    :is="editor ? EditorContent : Trigger"
    :class="`${prefixCls}-trigger`"
    auto-fit-popup-min-width
    placement="bottom-start"
    :popup-offset="4"
    animation-name="slide-dynamic-origin"
    :prevent-focus="true"
    v-bind="triggerProps"
    :trigger="openTriggerTarget === 'icon' ? 'click' : triggerProps?.trigger || 'click'"
    :disabled="mergedDisabled || mergedReadonly"
    :open="panelVisible"
    :popup-container="popupContainer"
    :close-on-click-reference="!searchEnabled"
    auto-fit-transform-origin
    @open-change="onVisibleChange"
  >
    <slot name="trigger">
      <SelectionField
        :loading-mode="loadingMode"
        ref="refSelectionField"
        :open-trigger-target="openTriggerTarget"
        :items="selectViewValue"
        :input-value="searchValue"
        :searchable="searchEnabled"
        :clearable="clearable && !loading"
        :loading="loading"
        :size="mergedSize"
        :max-tag-count="maxTagCount"
        :disabled="mergedDisabled"
        :readonly="mergedReadonly"
        :open="panelVisible"
        :error="mergedError"
        :variant="border ? 'filled' : 'standard'"
        :placeholder="placeholder"
        :multiple="isMultiple"
        v-bind="$attrs"
        @update:input-value="onSearchValueChange"
        @clear="onInnerClear"
        @remove="onItemRemove"
        :aria-controls="panelVisible ? panelRef?.treeId : undefined"
        :aria-activedescendant="panelVisible ? panelRef?.activeId : undefined"
        aria-haspopup="tree"
        @keydown="onKeydown"
        @blur="onBlur"
      >
        <template v-if="$slots.selected" #selected><slot name="selected" /></template>
        <template v-if="$slots.suffix" #suffix><slot name="suffix" /></template>
        <template v-if="$slots['clear-icon']" #clear-icon="scope"><slot name="clear-icon" v-bind="scope" /></template>
        <template v-if="$slots['arrow-icon']" #arrow-icon="scope"><slot name="arrow-icon" v-bind="scope" /></template>
        <template v-if="$slots['loading-icon']" #loading-icon><slot name="loading-icon" /></template>
        <template v-if="$slots['search-icon']" #search-icon><slot name="search-icon" /></template>
        <template v-if="$slots.prefix" #prefix>
          <slot name="prefix" />
        </template>
        <template v-if="$slots.label" #label="selectedData">
          <slot name="label" v-bind="selectedData" />
        </template>
      </SelectionField>
    </slot>
    <template #content>
      <component
        :is="editor ? SelectedOptions : PlainContent"
        :multiple="isMultiple"
        :items="selectViewValue"
        :disabled="mergedDisabled || mergedReadonly || loading"
        @remove="onItemRemove"
        @clear="onEditorClear"
      >
        <Input
          v-if="editor && searchEnabled"
          :model-value="searchValue"
          edit-mode="direct"
          variant="outline"
          :hint="false"
          :disabled="mergedDisabled || mergedReadonly"
          clearable
          :aria-label="texts.search.value"
          :placeholder="texts.search.value"
          @update:model-value="onSearchValueChange"
        />
        <div
          :class="[
            `${prefixCls}-popup`,
            {
              [`${prefixCls}-has-header`]: Boolean($slots.header),
              [`${prefixCls}-has-footer`]: Boolean($slots.footer),
            },
            dropdownClassName,
          ]"
          :style="computedDropdownStyle"
        >
          <div v-if="$slots.header && (!isEmpty || showHeaderOnEmpty)" :class="`${prefixCls}-header`">
            <slot name="header" />
          </div>
          <slot v-if="loading" name="loader">
            <Loading />
          </slot>
          <slot v-else-if="isEmpty" name="empty">
            <component :is="TreeSelectEmpty" />
          </slot>
          <Panel
            v-else
            ref="panelRef"
            :candidate-filter="keyboardCandidateFilter"
            :selected-values="selectedValues"
            :show-checkable="treeCheckable"
            :scrollbar="scrollbar"
            :tree-props="{
              actionOnNodeClick: selectable === 'leaf' ? 'expand' : undefined,
              blockNode: true,
              ...treeProps,
              data: resolvedData,
              checkStrictly: treeCheckStrictly,
              checkedStrategy: treeCheckedStrategy,
              fieldNames,
              multiple,
              loadMore,
              filterTreeNode: computedFilterTreeNode,
              size,
              checkable: isCheckable,
              selectable: isSelectable,
              searchValue: searchValue,
            }"
            :tree-slots="pickSubCompSlots($slots, 'tree')"
            @change="onSelectChange"
            @load-error="onNodeLoadError"
          />
          <div v-if="$slots.footer && (!isEmpty || showFooterOnEmpty)" :class="`${prefixCls}-footer`">
            <slot name="footer" />
          </div>
        </div>
      </component>
    </template>
  </component>
</template>
<script lang="ts">
import {
  computed,
  CSSProperties,
  defineComponent,
  h,
  inject,
  nextTick,
  PropType,
  reactive,
  ref,
  StyleValue,
  toRefs,
  watch,
} from 'vue'
import { useFieldTexts } from '../_components/field-presentation/texts'
import { selectionEditorSurface } from '../_components/selected-options/context'
import SelectedOptions from '../_components/selected-options/SelectedOptions.vue'
import type { SelectionFieldItem } from '../_components/selection-field/props'
import SelectionField from '../_components/selection-field/SelectionField.vue'
import { useFormItem } from '../_hooks/use-form-item'
import useMergeState from '../_hooks/use-merge-state'
import { useOptionRequest } from '../_hooks/use-option-request'
import { ComponentSize } from '../_utils/constant'
import { resolveEmptyValue, useEmptyValues } from '../_utils/empty-value'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { isFunction, isUndefined } from '../_utils/is'
import { matchesOptionText } from '../_utils/option-data'
import pickSubCompSlots from '../_utils/pick-sub-comp-slots'
import { Data } from '../_utils/types'
import { useEmptySlot } from '../_components/selection-field/empty-slot'
import Empty from '../empty'
import Input from '../input'
import Loading from '../loading'
import { ScrollbarProps } from '../scrollbar'
import useTreeData from '../tree/hooks/use-tree-data'
import { Node, TreeFieldNames, TreeNodeData, TreeNodeValue, TreeProps } from '../tree/types'
import { isNodeSelectable } from '../tree/utils'
import { getCheckedStateByCheck, isNodeCheckable } from '../tree/utils/check-utils'
import Trigger, { TriggerProps } from '../trigger'
import { treeSelectEmits } from './emits'
import useFilterTreeNode from './hooks/use-filter-tree-node'
import useSelectedState from './hooks/use-selected-state'
import Panel, { type TreeSelectPanelHandle } from './panel'
import { treeSelectProps } from './props'

export default defineComponent({
  name: createNamespace('tree-select').name,
  components: {
    Input,
    SelectedOptions,
    Trigger,
    SelectionField,
    Panel,
    Empty,
    Loading,
  },
  inheritAttrs: false,
  props: treeSelectProps,
  emits: treeSelectEmits,
  /**
   * @zh 自定义触发元素
   * @en Custom trigger element
   * @slot trigger
   */
  /**
   * @zh 前缀
   * @en Prefix
   * @slot prefix
   */
  /**
   * @zh 自定义选择框显示
   * @en Custom Label
   * @slot label
   * @binding data
   */
  /**
   * @zh 定制加载中显示的内容
   * @en Customizing the content displayed during loading
   * @slot loader
   */
  /**
   * @zh 定制空数据展示
   * @en Custom empty data display
   * @slot empty
   */
  /**
   * @zh 定制 tree 组件的 switcher 图标
   * @en Custom switcher icon for the tree component
   * @slot tree-slot-switcher-icon
   */
  /**
   * @zh 定制 tree 组件的节点图标
   * @en Custom node icon for the tree component
   * @slot tree-slot-icon
   * @binding {TreeNodeData} node
   */

  /**
   * @zh 定制 tree 组件的节点标题
   * @en Custom the node title of the tree component
   * @slot tree-slot-label
   * @binding {TreeNodeData} node
   */
  /**
   * @zh 定制 tree 组件的渲染额外节点内容
   * @en Render additional node content of the tree component
   * @slot tree-slot-extra
   */
  /**
   * @zh 自定义下拉框页头
   * @en The header of the drop-down box
   * @slot header
   */
  /**
   * @zh 自定义下拉框页脚
   * @en The footer of the drop-down box
   * @slot footer
   */
  setup(props, { emit, slots }) {
    const searchEnabled = computed(() => props.filterable ?? props.multiple)
    const {
      defaultValue,
      modelValue,
      multiple,
      open,
      defaultOpen,
      treeCheckable,
      treeCheckStrictly,
      fieldNames,
      disabled,
      labelInValue,
      filterTreeNode,
      disableFilter,
      dropdownStyle,
      treeProps,
      fallbackOption,
      selectable,
      dropdownClassName,
    } = toRefs(props)
    const { mergedDisabled, mergedReadonly, mergedError, mergedSize, eventHandlers } = useFormItem({
      disabled,
      readonly: computed(() => props.readonly),
      error: computed(() => props.error),
      size: computed(() => props.size),
    })
    const source = useOptionRequest<TreeNodeData>(
      () => props.data,
      () => mergedDisabled.value || !!props.readPretty,
      (error) => emit('load-error', error),
      () => 0,
      treeSelectProps,
    )
    const data = source.options
    const loading = computed(() => props.loading || source.loading.value)
    const prefixCls = getPrefixCls('tree-select')
    const editor = inject(selectionEditorSurface, undefined)
    const texts = useFieldTexts()
    const globalEmptySlot = useEmptySlot()
    const TreeSelectEmpty = () => globalEmptySlot.value?.({ component: 'tree-select' }) ?? h(Empty)
    const emptyPolicy = useEmptyValues(props)
    const isMultiple = computed(() => multiple.value || treeCheckable.value)
    const isSelectable = (node: TreeNodeData, info: { level: number; isLeaf: boolean }) => {
      if (selectable.value === 'leaf') return info.isLeaf
      if (isFunction(selectable.value)) return selectable.value(node, info)
      return selectable.value ?? false
    }
    const isCheckable = computed(() => (treeCheckable.value ? isSelectable : false))
    const retainInputValue = computed(() => props.retainInputValue)
    const { flattenTreeData, key2TreeNode } = useTreeData(
      reactive({
        treeData: data,
        fieldNames,
        selectable: isSelectable,
        checkable: isCheckable,
      }),
    )

    const { selectedValues, selectedValue, setLocalSelectedValues, localSelectedValues, localSelectedValue } =
      useSelectedState(
        reactive({
          defaultValue,
          modelValue,
          emptyValues: emptyPolicy.emptyValues,
          key2TreeNode,
          multiple,
          treeCheckable,
          treeCheckStrictly,
          fallbackOption,
          fieldNames,
        }),
      )

    function isNodeClosable(node: Node) {
      return treeCheckable.value ? isNodeCheckable(node) : isNodeSelectable(node)
    }

    const selectViewValue = computed(() => {
      if (isUndefined(selectedValue.value)) {
        return []
      }
      if (isMultiple.value && !mergedDisabled.value) {
        return selectedValue.value.map((i) => {
          const node = key2TreeNode.value.get(i.value)
          return {
            ...i,
            key: i.value,
            closable: !loading.value && (!node || isNodeClosable(node)),
          }
        }) as SelectionFieldItem[]
      }
      return selectedValue.value.map((item) => ({
        ...item,
        key: item.value,
      })) as SelectionFieldItem[]
    })

    const setSelectedValues = (newVal: TreeNodeValue[], clearing = false) => {
      let resolved = false
      let clearValue: TreeNodeValue | TreeNodeValue[] | null | undefined
      const clearResult = () => {
        if (!resolved) {
          clearValue = resolveEmptyValue<TreeNodeValue | TreeNodeValue[] | undefined>(props, undefined)
          resolved = true
        }
        return clearValue
      }
      if (clearing && newVal.length === 0 && props.emptyValue !== undefined) {
        const empty = clearResult()
        newVal = empty == null ? [] : Array.isArray(empty) ? empty : [empty]
      }
      setLocalSelectedValues(newVal)

      nextTick(() => {
        const forEmitValue = (labelInValue.value ? localSelectedValue.value : localSelectedValues.value) || []

        const emitValue =
          clearing && props.emptyValue !== undefined ? clearResult() : isMultiple.value ? forEmitValue : forEmitValue[0]

        emit('update:modelValue', emitValue)
        emit('change', emitValue)
        eventHandlers.value?.onChange?.()
      })
    }

    const _inputValue = ref(props.defaultInputValue)
    const computedInputValue = computed(() => props.inputValue ?? _inputValue.value)

    const updateInputValue = (inputValue: string) => {
      _inputValue.value = inputValue
      emit('update:inputValue', inputValue)
      emit('input-value-change', inputValue)
    }

    const handleInputValueChange = (inputValue: string) => {
      if (mergedDisabled.value || mergedReadonly.value) return
      if (inputValue !== computedInputValue.value) {
        if (props.openTriggerTarget !== 'icon') setPanelVisible(true)
        updateInputValue(inputValue)
        if (searchEnabled.value) {
          emit('search', inputValue)
        }
      }
    }

    const [panelVisible, setLocalPanelVisible] = useMergeState(
      defaultOpen.value,
      reactive({
        value: open,
      }),
    )
    const setPanelVisible = (visible: boolean) => {
      if (visible && (mergedDisabled.value || mergedReadonly.value)) return
      if (visible !== panelVisible.value) {
        setLocalPanelVisible(visible)
        emit('open-change', visible)
        emit('update:open', visible)
      }

      if (!visible) {
        refSelectionField.value && refSelectionField.value.blur && refSelectionField.value.blur()
      }
    }

    watch(
      [mergedDisabled, mergedReadonly],
      () => {
        if (mergedDisabled.value || mergedReadonly.value) setPanelVisible(false)
      },
      { flush: 'sync' },
    )

    const { isEmptyFilterResult, filterTreeNode: computedFilterTreeNode } = useFilterTreeNode(
      reactive({
        searchValue: computedInputValue,
        caseSensitive: computed(() => props.caseSensitive),
        searchFields: computed(() => props.searchFields),
        flattenTreeData,
        filterMethod: filterTreeNode,
        disableFilter: computed(() => disableFilter.value || (source.remote.value && !filterTreeNode.value)),
        fieldNames,
      }),
    )

    const isEmpty = computed(() => !flattenTreeData.value.length || isEmptyFilterResult.value)

    const keyboardCandidateFilter = computed(() => {
      const query = computedInputValue.value
      if (!query || disableFilter.value || (source.remote.value && !filterTreeNode.value)) return undefined
      return (node: TreeNodeData) =>
        filterTreeNode.value
          ? filterTreeNode.value(query, node)
          : props.searchFields.some((field) =>
              matchesOptionText(
                node[(fieldNames.value?.[field] ?? field) as keyof TreeNodeData],
                query,
                props.caseSensitive,
              ),
            )
    })
    const refSelectionField = ref()
    const panelRef = ref<TreeSelectPanelHandle>()
    const onKeydown = (event: KeyboardEvent) => {
      if (event.isComposing || event.keyCode === 229 || mergedDisabled.value || mergedReadonly.value || loading.value)
        return
      if (!panelVisible.value && ['Enter', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
        event.preventDefault()
        event.stopPropagation()
        setPanelVisible(true)
        return
      }
      if (panelVisible.value) panelRef.value?.handleKeydown(event)
    }
    watch(panelVisible, (visible) => {
      if (visible) nextTick(() => panelRef.value?.resetActive())
    })

    const computedDropdownStyle = computed<StyleValue[]>(() => [
      dropdownStyle?.value || {},
      treeProps?.value?.virtualListProps ? { 'max-height': 'unset' } : {},
    ])

    const onBlur = () => {
      eventHandlers.value?.onBlur?.()
      if (!retainInputValue.value && computedInputValue.value) {
        updateInputValue('')
      }
    }

    return {
      resolvedData: data,
      editor,
      searchEnabled,
      texts,
      Trigger,
      SelectedOptions,
      Input,
      EditorContent: defineComponent({
        name: createNamespace('tree-select-editor-content').name,
        inheritAttrs: false,
        setup:
          (_, { slots }) =>
          () =>
            slots.content?.(),
      }),
      PlainContent: defineComponent({
        name: createNamespace('tree-select-menu-content').name,
        inheritAttrs: false,
        setup:
          (_, { slots }) =>
          () =>
            slots.default?.(),
      }),
      keyboardCandidateFilter,
      refSelectionField,
      panelRef,
      onKeydown,
      prefixCls,
      loading,
      refresh: source.refresh,
      TreeSelectEmpty,
      selectedValue,
      selectedValues,
      mergedDisabled,
      mergedReadonly,
      mergedError,
      mergedSize,
      searchValue: computedInputValue,
      panelVisible,
      isEmpty,
      computedFilterTreeNode,
      isMultiple,
      selectViewValue,
      computedDropdownStyle,
      onSearchValueChange: (next: string | null) => {
        const value = next ?? ''
        handleInputValueChange(value)
        void source.search(value)
      },
      onNodeLoadError: (error: unknown, node: TreeNodeData) => emit('load-error', error, node),
      onSelectChange(newVal: TreeNodeValue[]) {
        if (mergedDisabled.value || mergedReadonly.value || loading.value) return
        setSelectedValues(newVal)
        if (!retainInputValue.value && computedInputValue.value) {
          updateInputValue('')
        }

        if (!isMultiple.value) {
          setPanelVisible(false)
        }
      },
      onVisibleChange: setPanelVisible,
      onEditorClear() {
        if (mergedDisabled.value || mergedReadonly.value || loading.value) return
        setSelectedValues(
          selectedValues.value.filter((key) =>
            selectViewValue.value.some((item) => item.key === key && item.closable === false),
          ),
          true,
        )
        emit('clear')
      },
      onInnerClear() {
        if (mergedDisabled.value || mergedReadonly.value || loading.value) return
        setSelectedValues(
          selectedValues.value.filter((key) =>
            selectViewValue.value.some((item) => item.key === key && item.closable === false),
          ),
          true,
        )
        emit('clear')
      },
      pickSubCompSlots,
      isSelectable,
      isCheckable,
      onBlur,
      onItemRemove(id: string | number | symbol) {
        if (typeof id === 'symbol') return
        if (mergedDisabled.value || mergedReadonly.value || loading.value) return
        const node = key2TreeNode.value.get(id)
        if (treeCheckable.value && node) {
          if (isNodeClosable(node)) {
            const [newVal] = getCheckedStateByCheck({
              node,
              checked: false,
              checkedValues: selectedValues.value,
              indeterminateKeys: [],
              checkStrictly: treeCheckStrictly.value,
            })
            setSelectedValues(newVal)
          }
        } else {
          const newVal = selectedValues.value.filter((i) => i !== id)
          setSelectedValues(newVal)
        }
      },
    }
  },
})
</script>
