import { provide } from 'vue'
import { useDirection } from '@cedar-design/use-vue'
import { TreeKeyboardOwnerKey } from '../tree/context'
import { computed, defineComponent, PropType, ref, toRefs, Slots, watch, nextTick } from 'vue'
import { useId } from '../_utils/vue-compat'
import Tree from '../tree'
import { isNodeSelectable } from '../tree/utils'
import { isNodeCheckable } from '../tree/utils/check-utils'
import { TreeProps, TreeNodeValue, Node, TreeNodeData } from '../tree/types'
import { useScrollbar } from '../_hooks/use-scrollbar'
import Scrollbar, { ScrollbarProps } from '../scrollbar'
import { getPrefixCls, createNamespace } from '../_utils/global-config'

export interface TreeSelectPanelHandle {
  handleKeydown: (event: KeyboardEvent) => void
  resetActive: () => void
  activeId?: string
  treeId: string
}

const { name } = createNamespace('tree-select-panel')

export default defineComponent({
  name,
  components: {
    Tree,
  },
  props: {
    treeProps: {
      type: Object as PropType<Partial<TreeProps>>,
      default: () => ({}),
    },
    candidateFilter: Function as PropType<(node: TreeNodeData) => boolean>,
    selectedValues: {
      type: Array as PropType<TreeNodeValue[]>,
    },
    showCheckable: {
      type: Boolean,
    },
    treeSlots: {
      type: Object as PropType<Slots>,
      default: () => ({}),
    },
    scrollbar: {
      type: [Boolean, Object] as PropType<boolean | ScrollbarProps>,
      default: true,
    },
  },
  emits: ['change', 'load-error'],
  setup(props, { emit, expose }) {
    const { showCheckable, selectedValues, treeProps, scrollbar } = toRefs(props)
    const { displayScrollbar, scrollbarProps } = useScrollbar(scrollbar)
    provide(TreeKeyboardOwnerKey, true)
    const { isRtl } = useDirection()
    const prefixCls = getPrefixCls('tree-select')
    const refTree = ref()

    const treeId = `tree-select-${useId()}`
    const activeKey = ref<TreeNodeValue>()
    const visibleNodes = computed<Node[]>(() => {
      const context = refTree.value?.treeContext
      if (!context) return []
      const expanded = new Set<TreeNodeValue>(context.expandedValues)
      // Expanded descendants are rendered by TransitionNodeList during animation.
      // They are keyboard candidates even before the normal tree list takes over.
      return context.flattenTreeData.filter(
        (node: Node) =>
          node.pathParentKeys.every((key) => expanded.has(key)) &&
          (!context.filterTreeNode || context.filterTreeNode(node.treeNodeData)),
      )
    })
    const visibleNodeMap = computed(() => new Map(visibleNodes.value.map((node) => [node.key, node])))
    const enabledNodes = computed(() => visibleNodes.value.filter((node) => !node.disabled))
    const nodeId = (key: TreeNodeValue) => `${treeId}-${typeof key}-${encodeURIComponent(String(key))}`
    const activeId = computed(() => {
      const key = activeKey.value
      if (key === undefined || (treeProps.value.virtualListProps && !refTree.value?.treeContext.isVirtualNodeMounted(key))) return undefined
      return nodeId(key)
    })
    const resetActive = () => {
      const matches = props.candidateFilter
        ? enabledNodes.value.filter((node) => props.candidateFilter?.(node.treeNodeData))
        : enabledNodes.value
      const candidates = matches.length ? matches : enabledNodes.value
      const selected = props.selectedValues?.find((key) => candidates.some((node) => node.key === key))
      const key = selected ?? candidates[0]?.key
      activeKey.value = key
      const tree = refTree.value
      if (key !== undefined && tree && treeProps.value.virtualListProps) {
        nextTick(() => {
          if (activeKey.value === key && refTree.value === tree) tree.scrollIntoView({ value: key, align: 'auto' })
        })
      }
    }
    watch(
      enabledNodes,
      () => {
        const current = visibleNodeMap.value.get(activeKey.value as TreeNodeValue)
        if (
          !current ||
          current.disabled ||
          (props.candidateFilter &&
            !props.candidateFilter(current.treeNodeData) &&
            enabledNodes.value.some((node) => props.candidateFilter?.(node.treeNodeData)))
        )
          resetActive()
      },
      { immediate: true },
    )
    watch(() => props.candidateFilter, resetActive)
    const moveTo = (key?: TreeNodeValue) => {
      activeKey.value = key
      if (key !== undefined) refTree.value?.scrollIntoView({ value: key, align: 'auto' })
    }
    const expand = (node: Node, expanded: boolean, event: KeyboardEvent) => {
      const tree = refTree.value
      if (tree?.treeContext.loadingKeys.includes(node.key)) return
      if (expanded && !node.children?.length && tree?.treeContext.onLoadMore) tree.treeContext.onLoadMore(node.key)
      else tree?.treeContext.onExpand(expanded, node.key, event)
    }
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.isComposing || event.keyCode === 229) return
      if (!['Enter', 'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
      event.preventDefault()
      event.stopPropagation()
      const nodes = enabledNodes.value
      if (!nodes.length) return
      const index = nodes.findIndex((node) => node.key === activeKey.value)
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const step = event.key === 'ArrowDown' ? 1 : -1
        moveTo(nodes[index < 0 ? (step > 0 ? 0 : nodes.length - 1) : (index + step + nodes.length) % nodes.length].key)
        return
      }
      if (event.key === 'Home' || event.key === 'End') {
        moveTo(nodes[event.key === 'Home' ? 0 : nodes.length - 1].key)
        return
      }
      const node = nodes[index < 0 ? 0 : index]
      const expanded = refTree.value?.computedExpandedValues.includes(node.key)
      if (event.key === (isRtl.value ? 'ArrowLeft' : 'ArrowRight')) {
        if (!node.isLeaf && !expanded) expand(node, true, event)
        else moveTo(nodes.find((child) => child.parentKey === node.key)?.key ?? node.key)
      } else if (event.key === (isRtl.value ? 'ArrowRight' : 'ArrowLeft')) {
        if (!node.isLeaf && expanded) expand(node, false, event)
        else if (nodes.some((parent) => parent.key === node.parentKey)) moveTo(node.parentKey)
      } else if (props.showCheckable ? isNodeCheckable(node) : isNodeSelectable(node)) {
        if (props.showCheckable) refTree.value?.toggleCheck(node.key, event)
        else refTree.value?.treeContext.onSelect(node.key, event)
      } else if (!node.isLeaf) expand(node, !expanded, event)
      nextTick(() => {
        if (activeKey.value !== undefined) refTree.value?.scrollIntoView({ value: activeKey.value, align: 'auto' })
      })
    }
    expose({ handleKeydown, activeId, treeId, resetActive })

    const computedTreeProps = computed(() => {
      return {
        ...treeProps.value,
        disableSelectActionOnly: true,
        checkedValues: showCheckable.value ? selectedValues.value : [],
        selectedValues: showCheckable.value ? [] : selectedValues.value,
      }
    })

    const onSelect = (newVal: TreeNodeValue[], e: Event) => {
      if (showCheckable.value) {
        refTree.value?.toggleCheck?.(newVal[0], e)
      } else {
        emit('change', newVal)
      }
    }

    const onCheck = (newVal: TreeNodeValue[]) => {
      emit('change', newVal)
    }

    const renderTree = () => {
      return (
        <Tree
          ref={refTree}
          {...computedTreeProps.value}
          id={treeId}
          role="tree"
          aria-multiselectable={Boolean(props.treeProps.multiple || props.showCheckable)}
          // @ts-ignore
          onSelect={onSelect}
          onCheck={onCheck}
          onLoadError={(error: unknown, node: TreeNodeData) => emit('load-error', error, node)}
          v-slots={{
            ...props.treeSlots,
            label: (node: TreeNodeData, status: any) => {
              const key = node[(props.treeProps.fieldNames?.value ?? 'value') as keyof TreeNodeData] as TreeNodeValue
              return (
                <span
                  id={nodeId(key)}
                  role="treeitem"
                  aria-selected={status.selected}
                  aria-checked={props.showCheckable ? (status.indeterminate ? 'mixed' : status.checked) : undefined}
                  aria-busy={status.loading || undefined}
                  aria-disabled={visibleNodeMap.value.get(key)?.disabled}
                  aria-expanded={status.isLeaf ? undefined : status.expanded}
                  class={[`${prefixCls}-option`, {
                    [`${prefixCls}-option-active`]: key === activeKey.value,
                    [`${prefixCls}-option-selected`]: status.selected || status.checked,
                    [`${prefixCls}-option-disabled`]: visibleNodeMap.value.get(key)?.disabled,
                  }]}
                  onMouseenter={() => {
                    if (visibleNodeMap.value.has(key) && !visibleNodeMap.value.get(key)?.disabled) activeKey.value = key
                  }}
                >
                  {props.treeSlots.label?.(node, status) ??
                    node[(props.treeProps.fieldNames?.label ?? 'label') as keyof TreeNodeData]}
                </span>
              )
            },
          }}
        />
      )
    }

    return () => {
      if (displayScrollbar.value) {
        return (
          <Scrollbar class={`${prefixCls}-tree-wrapper`} {...scrollbarProps.value}>
            {renderTree()}
          </Scrollbar>
        )
      }
      return <div class={`${prefixCls}-tree-wrapper`}>{renderTree()}</div>
    }
  },
})
