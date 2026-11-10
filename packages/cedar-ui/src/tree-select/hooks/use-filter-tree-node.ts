import { computed, toRefs, watch, ref } from 'vue'
import { TreeFieldNames, Node, TreeNodeData, TreeNodeValue } from '../../tree/types'
import { FilterTreeNode } from '../types'
import type { OptionSearchField } from '../../_utils/option-data'
import { matchesOptionText } from '../../_utils/option-data'
import { isUndefined } from '../../_utils/is'

export default function useFilterTreeNode(props: {
  caseSensitive?: boolean
  searchFields?: readonly OptionSearchField[]
  searchValue: string
  flattenTreeData: Node[]
  filterMethod?: FilterTreeNode
  disableFilter?: boolean
  fieldNames: TreeFieldNames | undefined
}) {
  const { searchValue, caseSensitive, searchFields, flattenTreeData, filterMethod: propFilterMethod, disableFilter, fieldNames } = toRefs(props)

  const keyField = computed(() => (fieldNames.value?.value || 'value') as keyof TreeNodeData)

  const defaultFilterMethod = (keyword: string, node: TreeNodeData) =>
    (searchFields?.value ?? ['label']).some(field => {
      const raw = node[(fieldNames.value?.[field] ?? field) as keyof TreeNodeData]
      return !isUndefined(raw) && matchesOptionText(raw, keyword, caseSensitive?.value ?? false)
    })

  const filterMethod = computed(() => propFilterMethod?.value || defaultFilterMethod)

  const filteredKeysSet = ref<Set<TreeNodeValue>>()

  const isFiltering = computed(() => !!searchValue.value)

  const isEmptyFilterResult = computed(
    () => !disableFilter?.value && isFiltering.value && filteredKeysSet.value && filteredKeysSet.value.size === 0,
  )

  const filterTreeNode = computed(() =>
    disableFilter?.value
      ? undefined
      : (node: TreeNodeData) => {
          if (!isFiltering.value) return true

          const key = node[keyField.value] as TreeNodeValue
          return filteredKeysSet.value?.has(key) ?? false
        },
  )

  watch(
    [
      () => flattenTreeData.value,
      () => searchValue.value,
      () => filterMethod.value,
      () => disableFilter?.value,
      () => keyField.value,
      () => caseSensitive?.value,
      () => (searchFields?.value ?? ['label']).map(field => fieldNames.value?.[field] ?? field),
    ] as const,
    ([treeData, keyword, method, disabled], _previous, cleanup) => {
      // Retire old results immediately; pending timers cannot resurrect removed nodes.
      filteredKeysSet.value = undefined
      if (disabled || !keyword) return
      let current = true
      const timer = setTimeout(() => {
        if (!current) return
        const keys = new Set<TreeNodeValue>()
        for (const node of treeData) {
          const matches = method(keyword, node.treeNodeData)
          if (!current) return
          if (!matches) continue
          keys.add(node.key)
          node.pathParentKeys.forEach((key) => keys.add(key))
        }
        if (!current) return
        current = false
        filteredKeysSet.value = keys
      }, 100)
      cleanup(() => { current = false; clearTimeout(timer) })
    },
    { immediate: true, flush: 'sync' },
  )

  return {
    isEmptyFilterResult,
    filterTreeNode,
  }
}
