import { computed, ref, toRefs, watch, watchEffect } from 'vue'
import { useEmptyValues } from '../../_utils/empty-value'
import { isArray, isFunction, isObject } from '../../_utils/is'
import { Key2TreeNode, TreeFieldNames, TreeNodeData, TreeNodeValue } from '../../tree/types'
import { FallbackOption, TreeSelectLabelValue, TreeSelectValue } from '../types'

function isLabelValue(value: TreeNodeValue | TreeSelectLabelValue): value is TreeSelectLabelValue {
  return isObject(value)
}

function getKey(value: TreeNodeValue | TreeSelectLabelValue) {
  return isLabelValue(value) ? value.value : value
}

function getLabel(value: TreeNodeValue | TreeSelectLabelValue) {
  return isLabelValue(value) ? value.label : undefined
}

function getKeys(value: (TreeNodeValue | TreeSelectLabelValue)[], empty: (value: unknown) => boolean) {
  return value.map(getKey).filter((key) => !empty(key))
}

export default function useSelectedState(props: {
  emptyValues?: readonly unknown[]
  defaultValue?: TreeSelectValue
  modelValue?: TreeSelectValue
  key2TreeNode: Key2TreeNode
  multiple?: boolean
  treeCheckable?: boolean
  treeCheckStrictly?: boolean
  fallbackOption?: FallbackOption
  fieldNames?: TreeFieldNames
}) {
  const { defaultValue, modelValue, key2TreeNode, multiple, treeCheckable, fallbackOption, fieldNames } = toRefs(props)
  const emptyPolicy = useEmptyValues(props)
  const isValidSelection = (value: TreeNodeValue | TreeSelectLabelValue) => !emptyPolicy.isEmpty(getKey(value))

  function normalizeValue(value: TreeSelectValue) {
    const validValue = (value == null ? [] : isArray(value) ? value : [value]).filter(isValidSelection)

    return multiple?.value || treeCheckable?.value ? validValue : validValue.slice(0, 1)
  }

  function getLabelValues(value: (TreeNodeValue | TreeSelectLabelValue)[], originValue?: TreeSelectLabelValue[]) {
    const res: TreeSelectLabelValue[] = []
    const validValue = value ? value.filter(isValidSelection) : []

    if (validValue.length) {
      const originValueMap = new Map<TreeNodeValue, TreeSelectLabelValue>()
      originValue?.forEach((item) => {
        originValueMap.set(item.value, item)
      })

      validValue.forEach((item) => {
        const key = getKey(item)
        const originValueItem = originValueMap.get(key)
        const node = key2TreeNode.value.get(key)
        let fallbackNodeData: TreeNodeData | null = null
        const nodeDataTitle = (fieldNames?.value?.label || 'label') as 'label'

        if (!node) {
          const fallbackResult = isFunction(fallbackOption?.value) ? fallbackOption?.value(key) : fallbackOption?.value

          if (fallbackResult === false) {
            return
          }

          if (isObject(fallbackResult)) {
            fallbackNodeData = fallbackResult
          }
        }

        res.push({
          ...(isLabelValue(item) ? item : {}),
          ...(originValueItem || {}),
          value: key,
          label: getLabel(item) ?? node?.label ?? fallbackNodeData?.[nodeDataTitle] ?? originValueItem?.label ?? key,
        })
      })
    }

    return res
  }

  const computedModelValueKeys = ref<TreeNodeValue[]>()
  const computedModelValue = ref<TreeSelectLabelValue[]>()
  watchEffect(() => {
    const isControlled = modelValue?.value !== undefined
    const normalizeModelValue = normalizeValue(modelValue?.value ?? [])
    const modelValueKeys = getKeys(normalizeModelValue, emptyPolicy.isEmpty)
    computedModelValue.value = isControlled ? getLabelValues(normalizeModelValue) : undefined
    computedModelValueKeys.value = isControlled ? modelValueKeys : undefined
  })

  const normalizeDefaultValue = normalizeValue(defaultValue?.value ?? [])
  const defaultKeys = getKeys(normalizeDefaultValue, emptyPolicy.isEmpty)
  const defaultLabelValues = getLabelValues(defaultKeys, getLabelValues(normalizeDefaultValue))
  const localValueKeys = ref(defaultKeys || [])
  const localValue = ref(defaultLabelValues)
  watchEffect(() => {
    const values = localValueKeys.value.map(
      (key) => normalizeDefaultValue.find((item) => isLabelValue(item) && getKey(item) === key) ?? key,
    )
    localValue.value = getLabelValues(values, localValue.value)
  })
  watch([computedModelValueKeys, computedModelValue], ([valueKeys, value]) => {
    localValueKeys.value = valueKeys || []
    localValue.value = value || []
  })

  const selectedValues = computed(() => computedModelValueKeys.value ?? localValueKeys.value)
  const selectedValue = computed(() => computedModelValue.value ?? localValue.value)

  return {
    selectedValues,
    selectedValue,
    setLocalSelectedValues(keys: TreeNodeValue[]) {
      localValueKeys.value = keys
    },
    localSelectedValues: localValueKeys,
    localSelectedValue: localValue,
  }
}
