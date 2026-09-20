<template>
  <div :class="prefixCls">
    <div :class="`${prefixCls}-header`">
      <slot
        name="title"
        :count-total="dataInfo.data.length"
        :count-selected="dataInfo.selected.length"
        :search-value="filter"
        :checked="checked"
        :indeterminate="indeterminate"
        :on-select-all-change="handleSelectAllChange"
        :on-clear="handleClear"
      >
        <span :class="`${prefixCls}-header-title`">
          <span
            v-if="clearable || simple || !showSelectAll"
            :class="`${prefixCls}-header-title-simple`"
          >
            {{ title }}
          </span>
          <checkbox
            v-else
            :model-value="checked"
            :indeterminate="indeterminate"
            :disabled="disabled"
            uninject-group-context
            @change="handleSelectAllChange"
          >
            {{ title }}
          </checkbox>
          <span v-if="clearable" :class="`${prefixCls}-header-selected-count`">
            <strong>{{ dataInfo.data.length }}</strong> / {{ total }}
          </span>
        </span>
        <button
          v-if="clearable && clearText"
          type="button"
          :disabled="disabled || dataInfo.data.length === 0"
          :class="`${prefixCls}-header-clear-text`"
          @click="handleClear"
        >
          {{ clearText }}
        </button>
        <icon-hover
          v-else-if="clearable"
          :disabled="disabled"
          :class="`${prefixCls}-header-clear-btn`"
          @click="handleClear"
        >
          <icon-delete />
        </icon-hover>
        <span v-else-if="!simple" :class="`${prefixCls}-header-count`">
          {{ dataInfo.selected.length }} / {{ dataInfo.data.length }}
        </span>
      </slot>
    </div>
    <div v-if="showSearch" :class="`${prefixCls}-search`">
      <Search
        v-model="filter"
        :disabled="disabled"
        v-bind="searchProps"
        @input="handleSearch"
      />
    </div>
    <div :class="`${prefixCls}-body`">
      <template v-if="filteredData.length > 0">
        <slot
          v-if="$slots.default"
          :data="filteredData"
          :selected-keys="transferCtx?.selected"
          :on-select="transferCtx?.onSelect"
        />
        <VirtualList
          v-else-if="virtualScroll && !targetDraggable"
          :data="filteredData"
          item-key="value"
          height="100%"
          fixed-size
          :estimated-size="36"
        >
          <template #item="{ item }">
            <div
              v-if="showGroupTitle(item)"
              :class="`${prefixCls}-group-title`"
            >
              {{ item.group }}
            </div>
            <transfer-list-item
              :type="type"
              :data="item"
              :simple="simple"
              :clearable="clearable"
              :operation-mode="targetOperation"
              :disabled="
                disabled ||
                item.disabled ||
                (type === 'source' && item.required)
              "
            />
          </template>
        </VirtualList>
        <Scrollbar v-else>
          <div
            v-if="targetDraggable && type === 'target'"
            ref="dragContainerRef"
            :class="`${prefixCls}-draggable-list`"
          >
            <transfer-list-item
              v-for="item of filteredData"
              :key="item.value"
              :type="type"
              :data="item"
              draggable
              clearable
              :operation-mode="targetOperation"
              :disabled="disabled || item.disabled"
            />
          </div>
          <list
            v-else
            :class="`${prefixCls}-list`"
            :bordered="false"
            :scrollbar="false"
          >
            <template v-for="(item, index) of filteredData" :key="item.value">
              <div
                v-if="showGroupTitle(item, index)"
                :class="`${prefixCls}-group-title`"
              >
                {{ item.group }}
              </div>
              <transfer-list-item
                :type="type"
                :data="item"
                :simple="simple"
                :clearable="clearable"
                :operation-mode="targetOperation"
                :disabled="
                  disabled ||
                  item.disabled ||
                  (type === 'source' && item.required)
                "
              />
            </template>
          </list>
        </Scrollbar>
      </template>
      <Empty v-else :class="`${prefixCls}-empty`" />
    </div>
  </div>
</template>

<script lang="ts">
import { createNamespace } from "../_utils/global-config";
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  PropType,
  ref,
  watch,
} from "vue";
import Sortable from "sortablejs";
import { getPrefixCls } from "../_utils/global-config";
import Checkbox from "../checkbox";
import IconHover from "../_components/IconHover.vue";
import { IconDelete } from "@cedarjs/icons-vue/icon-delete";
import Search from "../search";
import List from "../list";
import TransferListItem from "./transfer-list-item";
import type {
  DataInfo,
  TransferFilter,
  TransferItem,
  TransferValue,
} from "./types";
import { transferInjectionKey } from "./context";
import Scrollbar from "../scrollbar";
import Empty from "../empty";
import VirtualList from "../_components/virtual-list-v2";

export default defineComponent({
  name: createNamespace("transfer-view").name,
  components: {
    Empty,
    Checkbox,
    IconHover,
    IconDelete,
    Search,
    List,
    TransferListItem,
    Scrollbar,
    VirtualList,
  },
  props: {
    type: {
      type: String as PropType<"source" | "target">,
    },
    dataInfo: {
      type: Object as PropType<DataInfo>,
      required: true,
    },
    title: String,
    data: {
      type: Array as PropType<TransferItem[]>,
      required: true,
    },
    disabled: Boolean,
    clearable: Boolean,
    selected: {
      type: Array as PropType<TransferValue[]>,
      required: true,
    },
    showSearch: Boolean,
    showSelectAll: Boolean,
    virtualScroll: Boolean,
    targetDraggable: Boolean,
    targetOperation: {
      type: String as PropType<"remove" | "menu">,
      default: "remove",
    },
    total: Number,
    clearText: String,
    simple: Boolean,
    searchProps: {
      type: Object,
    },
    filter: {
      type: Function as PropType<TransferFilter>,
      required: true,
    },
  },
  emits: ["search"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("transfer-view");
    const filter = ref("");
    const transferCtx = inject(transferInjectionKey, undefined);
    const dragContainerRef = ref<HTMLElement>();
    let sortable: Sortable | undefined;
    const countSelected = computed(() => props.dataInfo.selected.length);
    const countRendered = computed(() => props.dataInfo.data.length);

    const filteredData = computed(() =>
      props.dataInfo.data.filter(
        (item) =>
          !filter.value ||
          props.filter(filter.value, item, props.type ?? "source"),
      ),
    );
    const filteredValidValues = computed(() =>
      filteredData.value
        .filter((item) => !item.disabled)
        .map((item) => item.value),
    );
    const filteredSelectedValues = computed(() =>
      filteredValidValues.value.filter((value) =>
        props.selected.includes(value),
      ),
    );
    const checked = computed(
      () =>
        filteredValidValues.value.length > 0 &&
        filteredSelectedValues.value.length ===
          filteredValidValues.value.length,
    );
    const indeterminate = computed(
      () =>
        filteredSelectedValues.value.length > 0 &&
        filteredSelectedValues.value.length < filteredValidValues.value.length,
    );

    const handleSelectAllChange = (
      checked: boolean | (string | number | boolean)[],
    ) => {
      const isChecked = Array.isArray(checked) ? checked.length > 0 : checked;
      if (isChecked) {
        transferCtx?.onSelect([
          ...new Set([...props.selected, ...filteredValidValues.value]),
        ]);
      } else {
        transferCtx?.onSelect(
          props.selected.filter(
            (value) => !filteredValidValues.value.includes(value),
          ),
        );
      }
    };

    const handleSearch = (value: string) => {
      emit("search", value, props.type);
    };

    const handleClear = () => {
      transferCtx?.moveTo(props.dataInfo.allValidValues, "source");
    };

    const showGroupTitle = (item: TransferItem, index?: number) => {
      if (props.type !== "source" || !item.group) return false;
      const itemIndex = index ?? filteredData.value.indexOf(item);
      return (
        itemIndex === 0 ||
        filteredData.value[itemIndex - 1]?.group !== item.group
      );
    };

    const handleTargetOrder = (
      items: TransferItem[],
      detail: { oldValue?: TransferItem; newValue?: TransferItem },
    ) => transferCtx?.onReorder(items, detail);

    const destroySortable = () => {
      sortable?.destroy();
      sortable = undefined;
    };

    const initSortable = async () => {
      destroySortable();
      if (!props.targetDraggable || props.type !== "target") return;
      await nextTick();
      if (!dragContainerRef.value) return;
      sortable = Sortable.create(dragContainerRef.value, {
        animation: 150,
        handle: `.${prefixCls}-drag-handle`,
        onEnd: ({ oldIndex, newIndex }) => {
          if (oldIndex == null || newIndex == null || oldIndex === newIndex)
            return;
          const items = [...filteredData.value];
          const oldValue = items[oldIndex];
          const newValue = items[newIndex];
          const [item] = items.splice(oldIndex, 1);
          items.splice(newIndex, 0, item);
          handleTargetOrder(items, { oldValue, newValue });
        },
      });
    };

    onMounted(initSortable);
    watch(() => [props.targetDraggable, props.type], initSortable);
    onBeforeUnmount(destroySortable);

    return {
      prefixCls,
      filteredData,
      filter,
      checked,
      indeterminate,
      countSelected,
      countRendered,
      handleSelectAllChange,
      handleSearch,
      handleClear,
      showGroupTitle,
      handleTargetOrder,
      dragContainerRef,
      transferCtx,
    };
  },
});
</script>
