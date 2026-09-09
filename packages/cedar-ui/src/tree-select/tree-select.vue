<template>
  <Trigger
    :class="`${prefixCls}-trigger`"
    auto-fit-popup-min-width
    trigger="click"
    placement="bottom-start"
    :popup-offset="4"
    animation-name="slide-dynamic-origin"
    :prevent-focus="true"
    v-bind="triggerProps"
    :disabled="mergedDisabled"
    :open="panelVisible"
    :popup-container="popupContainer"
    :close-on-click-reference="!allowSearch"
    auto-fit-transform-origin
    @open-change="onVisibleChange"
  >
    <slot name="trigger">
      <SelectView
        ref="refSelectView"
        :model-value="selectViewValue"
        :input-value="searchValue"
        :filterable="Boolean(allowSearch)"
        :clearable="clearable"
        :loading="loading"
        :size="size"
        :max-tag-count="maxTagCount"
        :disabled="mergedDisabled"
        :opened="panelVisible"
        :error="error"
        :bordered="border"
        :placeholder="placeholder"
        :multiple="isMultiple"
        v-bind="$attrs"
        @input-value-change="onSearchValueChange"
        @clear="onInnerClear"
        @remove="onItemRemove"
        @blur="onBlur"
      >
        <template v-if="$slots.prefix" #prefix>
          <slot name="prefix" />
        </template>
        <template v-if="$slots.label" #label="selectedData">
          <slot name="label" v-bind="selectedData" />
        </template>
      </SelectView>
    </slot>
    <template #content>
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
          :selected-keys="selectedKeys"
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
    </template>
  </Trigger>
</template>
<script lang="ts">
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
} from "vue";
import useMergeState from "../_hooks/use-merge-state";
import { LabelValue } from "./types";
import Trigger, { TriggerProps } from "../trigger";
import SelectView from "../_components/select-view/select-view";
import Panel from "./panel";
import { getPrefixCls } from "../_utils/global-config";
import { configProviderInjectionKey } from "../config-provider/context";
import useSelectedState from "./hooks/use-selected-state";
import useTreeData from "../tree/hooks/use-tree-data";
import {
  TreeFieldNames,
  TreeNodeData,
  TreeProps,
  TreeNodeKey,
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
import { SelectViewValue } from "../_components/select-view/interface";

export default defineComponent({
  name: createNamespace("tree-select").name,
  components: {
    Trigger,
    SelectView,
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
   * @slot tree-slot-title
   * @binding {string} title
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
    const { mergedDisabled, eventHandlers } = useFormItem({
      disabled,
    });
    const prefixCls = getPrefixCls("tree-select");
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
      selectedKeys,
      selectedValue,
      setLocalSelectedKeys,
      localSelectedKeys,
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
            closable: !node || isNodeClosable(node),
          };
        }) as SelectViewValue[];
      }
      return selectedValue.value as SelectViewValue[];
    });

    const setSelectedKeys = (newVal: TreeNodeKey[]) => {
      setLocalSelectedKeys(newVal);

      nextTick(() => {
        const forEmitValue =
          (labelInValue.value
            ? localSelectedValue.value
            : localSelectedKeys.value) || [];

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
      if (visible !== panelVisible.value) {
        setLocalPanelVisible(visible);
        emit("open-change", visible);
        emit("update:open", visible);
      }

      if (!visible) {
        refSelectView.value &&
          refSelectView.value.blur &&
          refSelectView.value.blur();
      }
    };

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

    const refSelectView = ref();

    const computedDropdownStyle = computed<StyleValue[]>(() => [
      dropdownStyle?.value || {},
      treeProps?.value?.virtualListProps ? { "max-height": "unset" } : {},
    ]);

    const onBlur = () => {
      if (!retainInputValue.value && computedInputValue.value) {
        updateInputValue("");
      }
    };

    return {
      refSelectView,
      prefixCls,
      TreeSelectEmpty,
      selectedValue,
      selectedKeys,
      mergedDisabled,
      searchValue: computedInputValue,
      panelVisible,
      isEmpty,
      computedFilterTreeNode,
      isMultiple,
      selectViewValue,
      computedDropdownStyle,
      onSearchValueChange: handleInputValueChange,
      onSelectChange(newVal: string[]) {
        setSelectedKeys(newVal);
        if (!retainInputValue.value && computedInputValue.value) {
          updateInputValue("");
        }

        if (!isMultiple.value) {
          setPanelVisible(false);
        }
      },
      onVisibleChange: setPanelVisible,
      onInnerClear() {
        setSelectedKeys([]);
        emit("clear");
      },
      pickSubCompSlots,
      isSelectable,
      isCheckable,
      onBlur,
      onItemRemove(id: string) {
        if (mergedDisabled.value) return;
        const node = key2TreeNode.value.get(id);
        if (treeCheckable.value && node) {
          if (isNodeClosable(node)) {
            const [newVal] = getCheckedStateByCheck({
              node,
              checked: false,
              checkedKeys: selectedKeys.value,
              indeterminateKeys: [],
              checkStrictly: treeCheckStrictly.value,
            });
            setSelectedKeys(newVal);
          }
        } else {
          const newVal = selectedKeys.value.filter((i) => i !== id);
          setSelectedKeys(newVal);
        }
      },
    };
  },
});
</script>
