<template>
  <component
    :is="editor ? EditorContent : Trigger"
    :class="`${prefixCls}-trigger`"
    auto-fit-popup-min-width
    trigger="click"
    placement="bottom-start"
    :popup-offset="4"
    animation-name="slide-dynamic-origin"
    :prevent-focus="true"
    v-bind="triggerProps"
    :disabled="mergedDisabled || mergedReadonly"
    :open="panelVisible"
    :popup-container="popupContainer"
    :close-on-click-reference="!allowSearch"
    auto-fit-transform-origin
    @open-change="onVisibleChange"
  >
    <slot name="trigger">
      <SelectionField
        ref="refSelectionField"
        :items="selectViewValue"
        :input-value="searchValue"
        :searchable="Boolean(allowSearch)"
        :clearable="clearable"
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
        :disabled="mergedDisabled || mergedReadonly"
        @remove="onItemRemove"
        @clear="onEditorClear"
      >
        <Input
          v-if="editor && allowSearch"
          :model-value="searchValue"
          presentation="inline"
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
          <div
            v-if="$slots.header && (!isEmpty || showHeaderOnEmpty)"
            :class="`${prefixCls}-header`"
          >
            <slot name="header" />
          </div>
          <slot v-if="loading" name="loader">
            <Loading />
          </slot>
          <slot v-else-if="isEmpty" name="empty">
            <component :is="TreeSelectEmpty ? TreeSelectEmpty : 'Empty'" />
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
              data,
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
          />
          <div
            v-if="$slots.footer && (!isEmpty || showFooterOnEmpty)"
            :class="`${prefixCls}-footer`"
          >
            <slot name="footer" />
          </div>
        </div>
      </component>
    </template>
  </component>
</template>
<script lang="ts">
import Input from "../input";
import SelectedOptions from "../_components/selected-options/SelectedOptions.vue";
import { selectionEditorSurface } from "../_components/selected-options/context";
import { useFieldTexts } from "../_components/field-presentation/texts";
import { treeSelectProps } from "./props";
import { createNamespace } from "../_utils/global-config";
import {
  computed,
  CSSProperties,
  defineComponent,
  nextTick,
  PropType,
  reactive,
  ref,
  toRefs,
  StyleValue,
  inject,
  watch,
} from "vue";
import useMergeState from "../_hooks/use-merge-state";
import { LabelValue } from "./types";
import Trigger, { TriggerProps } from "../trigger";
import SelectionField from "../_components/selection-field/SelectionField.vue";
import Panel, { type TreeSelectPanelHandle } from "./panel";
import { getPrefixCls } from "../_utils/global-config";
import { configProviderInjectionKey } from "../config-provider/context";
import useSelectedState from "./hooks/use-selected-state";
import useTreeData from "../tree/hooks/use-tree-data";
import {
  TreeFieldNames,
  TreeNodeData,
  TreeProps,
  TreeNodeValue,
  Node,
} from "../tree/types";
import { isUndefined, isFunction, isObject } from "../_utils/is";
import Empty from "../empty";
import useFilterTreeNode from "./hooks/use-filter-tree-node";
import Loading from "../loading";
import pickSubCompSlots from "../_utils/pick-sub-comp-slots";
import { ComponentSize } from "../_utils/constant";
import { useFormItem } from "../_hooks/use-form-item";
import {
  getCheckedStateByCheck,
  isNodeCheckable,
} from "../tree/utils/check-utils";
import { isNodeSelectable } from "../tree/utils";
import { Data } from "../_utils/types";
import { ScrollbarProps } from "../scrollbar";
import type { SelectionFieldItem } from "../_components/selection-field/props";

export default defineComponent({
  name: createNamespace("tree-select").name,
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
  emits: {
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @param {string | number | LabelValue | Array<string | number> | LabelValue[] | undefined} value
     */
    change: (
      value:
        | string
        | number
        | LabelValue
        | Array<string | number>
        | LabelValue[]
        | undefined,
    ) => true,
    "update:modelValue": (
      value:
        | string
        | number
        | LabelValue
        | Array<string | number>
        | LabelValue[]
        | undefined,
    ) => true,
    "update:inputValue": (inputValue: string) => true,
    /**
     * @zh 下拉框显示状态改变时触发
     * @en Triggered when the status of the drop-down box changes
     * @param {boolean} visible
     */
    "open-change": (visible: boolean) => true,
    "update:open": (visible: boolean) => true,
    /**
     * @zh 搜索值变化时触发
     * @en Triggered when the search value changes
     * @param {string} searchKey
     */
    search: (searchKey: string) => true,
    /**
     * @zh 点击清除时触发
     * @en Triggered when clear is clicked
     * */
    clear: () => true,
    /**
     * @zh 输入框的值发生改变时触发
     * @en Triggered when the value of the input changes
     * @param {string} inputValue
     * @version 2.55.0
     */
    "input-value-change": (inputValue: string) => true,
  },
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
   * @version 2.18.0
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
    const {
      defaultValue,
      modelValue,
      multiple,
      open,
      defaultOpen,
      treeCheckable,
      treeCheckStrictly,
      data,
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
    } = toRefs(props);
    const {
      mergedDisabled,
      mergedReadonly,
      mergedError,
      mergedSize,
      eventHandlers,
    } = useFormItem({
      disabled,
      readonly: computed(() => props.readonly),
      error: computed(() => props.error),
      size: computed(() => props.size),
    });
    const prefixCls = getPrefixCls("tree-select");
    const editor = inject(selectionEditorSurface, undefined);
    const texts = useFieldTexts();
    const configCtx = inject(configProviderInjectionKey, undefined);
    const TreeSelectEmpty = configCtx?.slots.empty?.({
      component: "tree-select",
    })?.[0];
    const isMultiple = computed(() => multiple.value || treeCheckable.value);
    const isSelectable = (
      node: TreeNodeData,
      info: { level: number; isLeaf: boolean },
    ) => {
      if (selectable.value === "leaf") return info.isLeaf;
      if (isFunction(selectable.value)) return selectable.value(node, info);
      return selectable.value ?? false;
    };
    const isCheckable = computed(() =>
      treeCheckable.value ? isSelectable : false,
    );
    const retainInputValue = computed(
      () =>
        isObject(props.allowSearch) &&
        Boolean(props.allowSearch.retainInputValue),
    );
    const { flattenTreeData, key2TreeNode } = useTreeData(
      reactive({
        treeData: data,
        fieldNames,
        selectable: isSelectable,
        checkable: isCheckable,
      }),
    );

    const {
      selectedValues,
      selectedValue,
      setLocalSelectedValues,
      localSelectedValues,
      localSelectedValue,
    } = useSelectedState(
      reactive({
        defaultValue,
        modelValue,
        key2TreeNode,
        multiple,
        treeCheckable,
        treeCheckStrictly,
        fallbackOption,
        fieldNames,
      }),
    );

    function isNodeClosable(node: Node) {
      return treeCheckable.value
        ? isNodeCheckable(node)
        : isNodeSelectable(node);
    }

    const selectViewValue = computed(() => {
      if (isUndefined(selectedValue.value)) {
        return [];
      }
      if (isMultiple.value && !mergedDisabled.value) {
        return selectedValue.value.map((i) => {
          const node = key2TreeNode.value.get(i.value);
          return {
            ...i,
            key: i.value,
            closable: !node || isNodeClosable(node),
          };
        }) as SelectionFieldItem[];
      }
      return selectedValue.value.map((item) => ({
        ...item,
        key: item.value,
      })) as SelectionFieldItem[];
    });

    const setSelectedValues = (newVal: TreeNodeValue[]) => {
      setLocalSelectedValues(newVal);

      nextTick(() => {
        const forEmitValue =
          (labelInValue.value
            ? localSelectedValue.value
            : localSelectedValues.value) || [];

        const emitValue = isMultiple.value ? forEmitValue : forEmitValue[0];

        emit("update:modelValue", emitValue);
        emit("change", emitValue);
        eventHandlers.value?.onChange?.();
      });
    };

    const _inputValue = ref(props.defaultInputValue);
    const computedInputValue = computed(
      () => props.inputValue ?? _inputValue.value,
    );

    const updateInputValue = (inputValue: string) => {
      _inputValue.value = inputValue;
      emit("update:inputValue", inputValue);
      emit("input-value-change", inputValue);
    };

    const handleInputValueChange = (inputValue: string) => {
      if (mergedDisabled.value || mergedReadonly.value) return;
      if (inputValue !== computedInputValue.value) {
        setPanelVisible(true);
        updateInputValue(inputValue);
        if (props.allowSearch) {
          emit("search", inputValue);
        }
      }
    };

    const [panelVisible, setLocalPanelVisible] = useMergeState(
      defaultOpen.value,
      reactive({
        value: open,
      }),
    );
    const setPanelVisible = (visible: boolean) => {
      if (visible && (mergedDisabled.value || mergedReadonly.value)) return;
      if (visible !== panelVisible.value) {
        setLocalPanelVisible(visible);
        emit("open-change", visible);
        emit("update:open", visible);
      }

      if (!visible) {
        refSelectionField.value &&
          refSelectionField.value.blur &&
          refSelectionField.value.blur();
      }
    };

    watch(
      [mergedDisabled, mergedReadonly],
      () => {
        if (mergedDisabled.value || mergedReadonly.value)
          setPanelVisible(false);
      },
      { flush: "sync" },
    );

    const { isEmptyFilterResult, filterTreeNode: computedFilterTreeNode } =
      useFilterTreeNode(
        reactive({
          searchValue: computedInputValue,
          flattenTreeData,
          filterMethod: filterTreeNode,
          disableFilter,
          fieldNames,
        }),
      );

    const isEmpty = computed(
      () => !flattenTreeData.value.length || isEmptyFilterResult.value,
    );

    const keyboardCandidateFilter = computed(() => {
      const query = computedInputValue.value;
      if (!query || disableFilter.value) return undefined;
      return (node: TreeNodeData) =>
        filterTreeNode.value
          ? filterTreeNode.value(query, node)
          : String(
              node[(fieldNames.value?.value ?? "value") as keyof TreeNodeData] ??
                "",
            ).includes(query);
    });
    const refSelectionField = ref();
    const panelRef = ref<TreeSelectPanelHandle>();
    const onKeydown = (event: KeyboardEvent) => {
      if (
        event.isComposing ||
        event.keyCode === 229 ||
        mergedDisabled.value ||
        mergedReadonly.value ||
        props.loading
      )
        return;
      if (
        !panelVisible.value &&
        ["Enter", "ArrowDown", "ArrowUp"].includes(event.key)
      ) {
        event.preventDefault();
        event.stopPropagation();
        setPanelVisible(true);
        return;
      }
      if (panelVisible.value) panelRef.value?.handleKeydown(event);
    };
    watch(panelVisible, (visible) => {
      if (visible) nextTick(() => panelRef.value?.resetActive());
    });

    const computedDropdownStyle = computed<StyleValue[]>(() => [
      dropdownStyle?.value || {},
      treeProps?.value?.virtualListProps ? { "max-height": "unset" } : {},
    ]);

    const onBlur = () => {
      eventHandlers.value?.onBlur?.();
      if (!retainInputValue.value && computedInputValue.value) {
        updateInputValue("");
      }
    };

    return {
      editor,
      texts,
      Trigger,
      SelectedOptions,
      Input,
      EditorContent: defineComponent({
        name: createNamespace("tree-select-editor-content").name,
        inheritAttrs: false,
        setup:
          (_, { slots }) =>
          () =>
            slots.content?.(),
      }),
      PlainContent: defineComponent({
        name: createNamespace("tree-select-menu-content").name,
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
      onSearchValueChange: handleInputValueChange,
      onSelectChange(newVal: TreeNodeValue[]) {
        if (mergedDisabled.value || mergedReadonly.value) return;
        setSelectedValues(newVal);
        if (!retainInputValue.value && computedInputValue.value) {
          updateInputValue("");
        }

        if (!isMultiple.value) {
          setPanelVisible(false);
        }
      },
      onVisibleChange: setPanelVisible,
      onEditorClear() {
        if (mergedDisabled.value || mergedReadonly.value) return;
        setSelectedValues(
          selectedValues.value.filter((key) =>
            selectViewValue.value.some(
              (item) => item.key === key && item.closable === false,
            ),
          ),
        );
        emit("clear");
      },
      onInnerClear() {
        if (mergedDisabled.value || mergedReadonly.value) return;
        setSelectedValues(
          selectedValues.value.filter((key) =>
            selectViewValue.value.some(
              (item) => item.key === key && item.closable === false,
            ),
          ),
        );
        emit("clear");
      },
      pickSubCompSlots,
      isSelectable,
      isCheckable,
      onBlur,
      onItemRemove(id: string | number | symbol) {
        if (typeof id === "symbol") return;
        if (mergedDisabled.value || mergedReadonly.value) return;
        const node = key2TreeNode.value.get(id);
        if (treeCheckable.value && node) {
          if (isNodeClosable(node)) {
            const [newVal] = getCheckedStateByCheck({
              node,
              checked: false,
              checkedValues: selectedValues.value,
              indeterminateKeys: [],
              checkStrictly: treeCheckStrictly.value,
            });
            setSelectedValues(newVal);
          }
        } else {
          const newVal = selectedValues.value.filter((i) => i !== id);
          setSelectedValues(newVal);
        }
      },
    };
  },
});
</script>
