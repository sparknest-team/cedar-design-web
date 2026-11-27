<template>
  <div
    :id="nodeId"
    :class="classNames"
    :data-level="level"
    :data-key="nodekey"
    :data-focused="focused"
    :role="externallyManaged ? undefined : 'treeitem'"
    :aria-level="externallyManaged ? undefined : level + 1"
    :aria-expanded="externallyManaged || isLeaf ? undefined : expanded"
    :aria-selected="externallyManaged ? undefined : selected"
    :aria-checked="!externallyManaged && checkable ? (indeterminate ? 'mixed' : checked) : undefined"
    :aria-busy="!externallyManaged && loading ? true : undefined"
    :aria-disabled="disabled || undefined"
  >
    <!-- 缩进 -->
    <span :class="`${prefixCls}-indent`">
      <span
        v-for="i in level"
        :key="i"
        :class="[
          `${prefixCls}-indent-block`,
          {
            [`${prefixCls}-indent-block-lineless`]: lineless[i - 1],
          },
        ]"
      />
    </span>
    <!-- switcher -->
    <span
      :class="[
        `${prefixCls}-switcher`,
        {
          [`${prefixCls}-switcher-expanded`]: expanded,
        },
      ]"
    >
      <NodeSwitcher
        :prefix-cls="prefixCls"
        :loading="loading"
        :show-line="showLine"
        :tree-node-data="treeNodeData"
        :icons="{
          switcherIcon,
          loadingIcon,
        }"
        :node-status="nodeStatus"
        @click="onSwitcherClick"
      >
        <template v-if="$slots['switcher-icon']" #switcher-icon>
          <!-- @slot 定制 switcher 图标，会覆盖 Tree 的配置 -->
          <slot name="switcher-icon" />
        </template>
        <template v-if="$slots['loading-icon']" #loading-icon>
          <!-- @slot 定制 loading 图标，会覆盖 Tree 的配置 -->
          <slot name="loading-icon" />
        </template>
      </NodeSwitcher>
    </span>
    <!-- checkbox -->
    <span v-if="checkable" aria-hidden="true" @mousedown.prevent @click.capture.stop.prevent="onCheckboxPointerClick">
      <Checkbox
        :disabled="disableCheckbox || disabled"
        :model-value="checked"
        :indeterminate="indeterminate"
        tabindex="-1"
        uninject-group-context
        @change="onCheckboxChange"
      />
    </span>

    <!-- 内容 -->
    <span
      ref="refTitle"
      :class="titleClassNames"
      :draggable="draggable"
      @dragstart="onDragStart"
      @dragend="onDragEnd"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      @drop="onDrop"
      @click="onTitleClick"
    >
      <span v-if="$slots.icon || icon || treeNodeIcon" :class="[`${prefixCls}-icon`, `${prefixCls}-custom-icon`]">
        <!-- 节点图标 -->
        <slot v-if="$slots.icon" name="icon" v-bind="nodeStatus" />
        <RenderFunction v-else-if="icon" :render-func="icon" :args="nodeStatus" />
        <RenderFunction
          v-else-if="treeNodeIcon"
          :render-func="treeNodeIcon"
          :args="{ node: treeNodeData, ...nodeStatus }"
        />
      </span>
      <span :class="`${prefixCls}-title-text`">
        <RenderFunction v-if="treeTitle" :render-func="treeTitle" />
        <!-- 标题，treeTitle 优先级高于节点的 title -->
        <slot v-else name="label" :label="label">{{ label }}</slot>

        <span v-if="draggable" :class="[`${prefixCls}-icon`, `${prefixCls}-drag-icon`]">
          <!-- 拖拽图标 -->
          <slot v-if="$slots['drag-icon']" name="drag-icon" v-bind="nodeStatus" />
          <RenderFunction v-else-if="dragIcon" :render-func="dragIcon" :args="nodeStatus" />
          <RenderFunction
            v-else-if="treeDragIcon"
            :render-func="treeDragIcon"
            :args="{ node: treeNodeData, ...nodeStatus }"
          />
          <IconDragDotVertical v-else />
        </span>
      </span>
    </span>
    <!-- 额外 -->
    <RenderFunction v-if="extra" :render-func="extra" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive, ref, toRefs, VNode } from 'vue'
import { IconDragDotVertical } from '@cedar-design/icons-vue/icon-drag-dot-vertical'
import RenderFunction from '../_components/render-function'
import type { RenderFunc } from '../_components/render-function'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { isFunction } from '../_utils/is'
import type { WithNativeAttributes } from '../_utils/native-listener-types'
import { toArray } from '../_utils/to-array'
import CheckboxComponent from '../checkbox/presentation'
import useDraggable from './hooks/use-draggable'
import useNodeKey from './hooks/use-node-key'
import useTreeContext from './hooks/use-tree-context'
import NodeSwitcher from './NodeSwitcher.vue'
import { Node } from './types'

const Checkbox = CheckboxComponent as WithNativeAttributes<typeof CheckboxComponent, 'tabindex'>

export default defineComponent({
  name: createNamespace('base-tree-node').name,
  components: {
    NodeSwitcher,
    Checkbox,
    RenderFunction,
    IconDragDotVertical,
  },
  props: {
    value: [String, Number],
    /** 标题 */
    label: {
      type: String,
    },
    /** 是否允许选中  */
    selectable: {
      type: Boolean,
    },
    /** 是否禁用节点 */
    disabled: {
      type: Boolean,
    },
    /** 是否禁用checkbox   */
    disableCheckbox: {
      type: Boolean,
    },
    /** 是否显示多选框   */
    checkable: {
      type: Boolean,
    },
    /** 是否可以拖拽   */
    draggable: {
      type: Boolean,
    },
    /** 是否是叶子节点。动态加载时有效 */
    isLeaf: {
      type: Boolean,
    },
    icon: {
      type: Function as PropType<() => VNode>,
    },
    switcherIcon: {
      type: Function as PropType<() => VNode>,
    },
    loadingIcon: {
      type: Function as PropType<() => VNode>,
    },
    dragIcon: {
      type: Function as PropType<() => VNode>,
    },
    isTail: {
      type: Boolean,
    },
    blockNode: {
      type: Boolean,
    },
    showLine: {
      type: Boolean,
    },
    level: {
      type: Number,
      default: 0,
    },
    lineless: {
      type: Array as PropType<boolean[]>,
      default: () => [],
    },
  },
  setup(props) {
    const key = useNodeKey()
    const prefixCls = getPrefixCls('tree-node')
    const treeContext = useTreeContext()
    const node = computed(() => treeContext.key2TreeNode?.get(key.value) as Node)
    const treeNodeData = computed(() => node.value.treeNodeData)
    const children = computed(() => node.value.children)
    const actionOnNodeClick = computed(() => {
      const action = treeContext.treeProps?.actionOnNodeClick
      return action ? toArray(action) : []
    })

    const { isLeaf, isTail, selectable, disabled, disableCheckbox, draggable } = toRefs(props)

    const classNames = computed(() => [
      `${prefixCls}`,
      {
        [`${prefixCls}-selected`]: selected.value,
        [`${prefixCls}-is-leaf`]: isLeaf.value,
        [`${prefixCls}-is-tail`]: isTail.value,
        [`${prefixCls}-expanded`]: expanded.value,
        [`${prefixCls}-disabled-selectable`]: !selectable.value && !treeContext.treeProps?.disableSelectActionOnly,
        [`${prefixCls}-disabled`]: disabled.value,
      },
    ])

    const refTitle = ref<HTMLElement>()
    const { isDragOver, isDragging, isAllowDrop, dropPosition, setDragStatus } = useDraggable(
      reactive({
        key,
        refTitle,
      }),
    )

    const titleClassNames = computed(() => [
      `${prefixCls}-title`,
      {
        [`${prefixCls}-title-draggable`]: draggable.value,
        [`${prefixCls}-title-gap-top`]: isDragOver.value && isAllowDrop.value && dropPosition.value < 0,
        [`${prefixCls}-title-gap-bottom`]: isDragOver.value && isAllowDrop.value && dropPosition.value > 0,
        [`${prefixCls}-title-highlight`]:
          !isDragging.value && isDragOver.value && isAllowDrop.value && dropPosition.value === 0,
        [`${prefixCls}-title-dragging`]: isDragging.value,
        [`${prefixCls}-title-block`]: node.value.blockNode,
      },
    ])

    const checked = computed(() => treeContext.checkedValues?.includes?.(key.value))

    const indeterminate = computed(() => treeContext.indeterminateKeys?.includes?.(key.value))

    const selected = computed(() => treeContext.selectedValues?.includes?.(key.value))

    const expanded = computed(() => treeContext.expandedValues?.includes?.(key.value))

    const loading = computed(() => treeContext.loadingKeys?.includes?.(key.value))

    const treeDragIcon = computed(() => treeContext.dragIcon)

    const treeNodeIcon = computed(() => treeContext.nodeIcon)

    function onSwitcherClick(e: Event) {
      if (disabled.value) return
      treeContext.focusNode?.(key.value)
      if (isLeaf.value) return
      if (!children.value?.length && isFunction(treeContext.onLoadMore)) {
        treeContext.onLoadMore(key.value)
      } else {
        treeContext?.onExpand?.(!expanded.value, key.value, e)
      }
    }

    const nodeStatus = reactive({
      loading,
      checked,
      selected,
      indeterminate,
      expanded,
      isLeaf,
    })

    const treeTitle = computed(() =>
      treeContext.nodeTitle
        ? ((() => treeContext.nodeTitle?.(treeNodeData.value, nodeStatus) ?? null) as RenderFunc)
        : undefined,
    )
    const extra = computed(() =>
      treeContext.nodeExtra
        ? ((() => treeContext.nodeExtra?.(treeNodeData.value, nodeStatus) ?? null) as RenderFunc)
        : undefined,
    )

    return {
      externallyManaged: treeContext.externallyManaged,
      nodekey: key,
      focused: computed(() => treeContext.focusedValue === key.value),
      nodeId: computed(() => treeContext.nodeId?.(key.value)),
      refTitle,
      prefixCls,
      classNames,
      titleClassNames,
      indeterminate,
      checked,
      expanded,
      selected,
      treeTitle,
      treeNodeData,
      loading,
      treeDragIcon,
      treeNodeIcon,
      extra,
      nodeStatus,
      onCheckboxChange(checked: boolean | (string | number | boolean)[] | null, e?: Event) {
        if (disableCheckbox.value || disabled.value) {
          return
        }
        treeContext.onCheck?.(Boolean(checked), key.value, e)
      },
      onCheckboxPointerClick(e: Event) {
        if (disableCheckbox.value || disabled.value) return
        treeContext.focusNode?.(key.value)
        treeContext.onCheck?.(!checked.value, key.value, e)
      },
      onTitleClick(e: Event) {
        if (!disabled.value) treeContext.focusNode?.(key.value)
        if (actionOnNodeClick.value.includes('expand')) {
          onSwitcherClick(e)
        }
        if (!selectable.value || disabled.value) return
        treeContext.onSelect?.(key.value, e)
      },
      onSwitcherClick,
      onDragStart(e: DragEvent) {
        if (!draggable.value) return

        e.stopPropagation()

        setDragStatus('drag-start', e)

        try {
          // ie throw error
          // firefox-need-it
          e.dataTransfer?.setData('text/plain', '')
        } catch (error) {
          // empty
        }
      },
      onDragEnd(e: DragEvent) {
        if (!draggable.value) return

        e.stopPropagation()

        setDragStatus('drag-end', e)
      },
      onDragOver(e: DragEvent) {
        if (!draggable) return

        e.stopPropagation()
        e.preventDefault()

        setDragStatus('drag-over', e)
      },
      onDragLeave(e: DragEvent) {
        if (!draggable.value) return

        e.stopPropagation()

        setDragStatus('drag-leave', e)
      },
      onDrop(e: DragEvent) {
        if (!draggable.value || !isAllowDrop.value) return

        e.stopPropagation()
        e.preventDefault()

        setDragStatus('drop', e)
      },
    }
  },
})
</script>
