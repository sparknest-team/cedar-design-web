import { toRefs, ref, watchEffect, computed } from 'vue'
import { TreeNodeValue, Key2TreeNode } from '../types'
import { getCheckedStateByInitKeys } from '../utils/check-utils'

export default function useCheckedState(props: {
  defaultCheckedValues: TreeNodeValue[] | undefined
  checkedValues: TreeNodeValue[] | undefined
  halfCheckedValues: TreeNodeValue[] | undefined
  key2TreeNode: Key2TreeNode
  checkStrictly: boolean
  onlyCheckLeaf: boolean
}) {
  const {
    defaultCheckedValues,
    checkedValues: propCheckedValues,
    key2TreeNode,
    checkStrictly,
    halfCheckedValues,
    onlyCheckLeaf,
  } = toRefs(props)

  const isInitialized = ref(false)
  const localCheckedValues = ref<TreeNodeValue[]>([])
  const localIndeterminateKeys = ref<TreeNodeValue[]>([])
  const computedCheckedValues = ref<TreeNodeValue[]>()
  const computedIndeterminateKeys = ref<TreeNodeValue[]>()

  const getStateByKeys = (keys: TreeNodeValue[]) => {
    return getCheckedStateByInitKeys({
      initCheckedValues: keys,
      key2TreeNode: key2TreeNode.value,
      checkStrictly: checkStrictly.value,
      onlyCheckLeaf: onlyCheckLeaf.value,
    })
  }

  const init = (keys: TreeNodeValue[]) => {
    const initState = getStateByKeys(keys)
    ;[localCheckedValues.value, localIndeterminateKeys.value] = initState
  }

  init(propCheckedValues.value || defaultCheckedValues?.value || [])

  watchEffect(() => {
    if (propCheckedValues.value) {
      ;[computedCheckedValues.value, computedIndeterminateKeys.value] = getStateByKeys(propCheckedValues.value)
    } else if (isInitialized.value) {
      computedCheckedValues.value = undefined
      computedIndeterminateKeys.value = undefined
      localCheckedValues.value = []
      localIndeterminateKeys.value = []
    }
    if (!isInitialized.value) {
      isInitialized.value = true
    }
  })

  return {
    checkedValues: computed(() => computedCheckedValues.value || localCheckedValues.value),
    indeterminateKeys: computed(() => {
      if (checkStrictly.value && halfCheckedValues.value) {
        return halfCheckedValues.value
      }
      return computedIndeterminateKeys.value || localIndeterminateKeys.value
    }),
    setCheckedState(newCheckedValues: TreeNodeValue[], newIndeterminateKeys: TreeNodeValue[], reinitialize = false) {
      if (reinitialize) {
        init(newCheckedValues)
      } else {
        localCheckedValues.value = newCheckedValues
        localIndeterminateKeys.value = newIndeterminateKeys
      }
      return [localCheckedValues.value, localIndeterminateKeys.value]
    },
  }
}
