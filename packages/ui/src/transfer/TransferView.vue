<template>
  <div :class="prefixCls">
    <div :class="`${prefixCls}-header`">
      <slot
        name="title"
        :count-total="panelState.data.length"
        :count-selected="panelState.selected.length"
        :search-value="filter"
        :checked="checked"
        :indeterminate="indeterminate"
        :on-select-all-change="handleSelectAllChange"
        :on-clear="handleClear"
      >
        <span :class="`${prefixCls}-header-title`">
          <span v-if="clearable || simple || !showSelectAll" :class="`${prefixCls}-header-title-simple`">
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
            <strong>{{ panelState.data.length }}</strong> / {{ total }}
          </span>
        </span>
        <button
          v-if="clearable && clearText"
          type="button"
          :disabled="disabled || panelState.data.length === 0"
          :class="`${prefixCls}-header-clear-text`"
          @click="handleClear"
        >
          {{ clearText }}
        </button>
        <button
          v-else-if="clearable"
          type="button"
          :disabled="disabled || panelState.data.length === 0"
          :aria-label="t('transfer.clear')"
          :class="`${prefixCls}-header-clear-btn`"
          @click="handleClear"
        >
          <icon-hover><icon-delete /></icon-hover>
        </button>
        <span v-else-if="!simple" :class="`${prefixCls}-header-count`">
          {{ panelState.selected.length }} / {{ panelState.data.length }}
        </span>
      </slot>
    </div>
    <div v-if="showSearch" :class="`${prefixCls}-search`">
      <Search
        :model-value="filter"
        @update:model-value="filter = $event ?? ''"
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
            <div v-if="showGroupTitle(item)" :class="`${prefixCls}-group-title`">
              {{ item.group }}
            </div>
            <transfer-list-item
              :type="type"
              :data="item"
              :simple="simple"
              :clearable="clearable"
              :operation-mode="targetOperation"
              :disabled="disabled || item.disabled || (type === 'source' && item.required)"
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
          <list v-else :class="`${prefixCls}-list`" :bordered="false" :scrollbar="false">
            <template v-for="(item, index) of filteredData" :key="item.value">
              <div v-if="showGroupTitle(item, index)" :class="`${prefixCls}-group-title`">
                {{ item.group }}
              </div>
              <transfer-list-item
                :type="type"
                :data="item"
                :simple="simple"
                :clearable="clearable"
                :operation-mode="targetOperation"
                :disabled="disabled || item.disabled || (type === 'source' && item.required)"
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
import { computed, defineComponent, inject, onBeforeUnmount, PropType, ref, watch } from 'vue'
import { IconDelete } from '@cedar-design/icons-vue/icon-delete'
import Sortable from 'sortablejs'
import IconHover from '../_components/IconHover.vue'
import VirtualList from '../_components/virtual-list-v2'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import Checkbox from '../checkbox'
import Empty from '../empty'
import List from '../list'
import { useI18n } from '../locale'
import Scrollbar from '../scrollbar'
import Search from '../search'
import { transferInjectionKey } from './context'
import TransferListItem from './transfer-list-item'
import type { DataInfo, TransferFilter, TransferItem, TransferValue } from './types'

export default defineComponent({
  name: createNamespace('transfer-view').name,
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
      type: String as PropType<'source' | 'target'>,
    },
    panelState: {
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
      type: String as PropType<'remove' | 'menu'>,
      default: 'remove',
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
  emits: ['search'],
  setup(props, { emit }) {
    const { t } = useI18n()
    const prefixCls = getPrefixCls('transfer-view')
    const itemPrefixCls = getPrefixCls('transfer-list-item')
    const filter = ref('')
    const transferCtx = inject(transferInjectionKey, undefined)
    const dragContainerRef = ref<HTMLElement>()
    let sortable: Sortable | undefined
    const countSelected = computed(() => props.panelState.selected.length)
    const countRendered = computed(() => props.panelState.data.length)

    const filteredData = computed(() =>
      props.panelState.data.filter((item) => !filter.value || props.filter(filter.value, item, props.type ?? 'source')),
    )
    const filteredValidValues = computed(() =>
      filteredData.value
        .filter((item) => !item.disabled && (props.type !== 'source' || !item.required))
        .map((item) => item.value),
    )
    const filteredSelectedValues = computed(() =>
      filteredValidValues.value.filter((value) => props.selected.includes(value)),
    )
    const checked = computed(
      () =>
        filteredValidValues.value.length > 0 &&
        filteredSelectedValues.value.length === filteredValidValues.value.length,
    )
    const indeterminate = computed(
      () =>
        filteredSelectedValues.value.length > 0 &&
        filteredSelectedValues.value.length < filteredValidValues.value.length,
    )

    const handleSelectAllChange = (checked: boolean | (string | number | boolean)[] | null) => {
      if (props.disabled) return
      const isChecked = Array.isArray(checked) ? checked.length > 0 : checked
      if (isChecked) {
        transferCtx?.onSelect([...new Set([...props.selected, ...filteredValidValues.value])])
      } else {
        transferCtx?.onSelect(props.selected.filter((value) => !filteredValidValues.value.includes(value)))
      }
    }

    const handleSearch = (value: string) => {
      emit('search', value, props.type)
    }

    const handleClear = () => {
      transferCtx?.moveTo(props.panelState.allValidValues, 'source')
    }

    const showGroupTitle = (item: TransferItem, index?: number) => {
      if (props.type !== 'source' || !item.group) return false
      const itemIndex = index ?? filteredData.value.indexOf(item)
      return itemIndex === 0 || filteredData.value[itemIndex - 1]?.group !== item.group
    }

    const handleTargetOrder = (items: TransferItem[], detail: { oldValue?: TransferItem; newValue?: TransferItem }) =>
      transferCtx?.onReorder(items, detail)

    const destroySortable = () => {
      sortable?.destroy()
      sortable = undefined
    }

    const initSortable = () => {
      destroySortable()
      if (!props.targetDraggable || props.type !== 'target') return
      if (!dragContainerRef.value) return
      sortable = Sortable.create(dragContainerRef.value, {
        animation: 150,
        disabled: props.disabled,
        handle: `.${itemPrefixCls}-drag-handle`,
        onEnd: ({ oldIndex, newIndex }) => {
          if (oldIndex == null || newIndex == null || oldIndex === newIndex) return
          const items = [...filteredData.value]
          if (oldIndex < 0 || newIndex < 0 || oldIndex >= items.length || newIndex >= items.length) return
          const oldValue = items[oldIndex]
          const newValue = items[newIndex]
          const [item] = items.splice(oldIndex, 1)
          items.splice(newIndex, 0, item)
          handleTargetOrder(items, { oldValue, newValue })
        },
      })
    }

    watch([dragContainerRef, () => props.targetDraggable, () => props.type], initSortable, {
      immediate: true,
      flush: 'post',
    })
    watch(
      () => props.disabled,
      (disabled) => sortable?.option('disabled', disabled),
    )
    onBeforeUnmount(destroySortable)

    return {
      t,
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
    }
  },
})
</script>
