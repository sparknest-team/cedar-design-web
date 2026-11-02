import { useEmptyValues } from "../../_utils/empty-value";
import { computed, ref, toRefs, watchEffect, watch } from "vue";
import { isArray, isFunction, isObject } from "../../_utils/is";
import { FallbackOption, LabelValue, TreeSelectValue } from "../types";
import {
  Key2TreeNode,
  TreeFieldNames,
  TreeNodeData,
  TreeNodeValue,
} from "../../tree/types";

function isLabelValue(value: TreeNodeValue | LabelValue): value is LabelValue {
  return isObject(value);
}

function getKey(value: TreeNodeValue | LabelValue) {
  return isLabelValue(value) ? value.value : value;
}

function getLabel(value: TreeNodeValue | LabelValue) {
  return isLabelValue(value) ? value.label : undefined;
}

function getKeys(
  value: (TreeNodeValue | LabelValue)[],
  empty: (value: unknown) => boolean,
) {
  return value.map(getKey).filter((key) => !empty(key));
}

export default function useSelectedState(props: {
  emptyValues?: readonly unknown[];
  defaultValue?: TreeSelectValue;
  modelValue?: TreeSelectValue;
  key2TreeNode: Key2TreeNode;
  multiple?: boolean;
  treeCheckable?: boolean;
  treeCheckStrictly?: boolean;
  fallbackOption?: FallbackOption;
  fieldNames?: TreeFieldNames;
}) {
  const {
    defaultValue,
    modelValue,
    key2TreeNode,
    multiple,
    treeCheckable,
    fallbackOption,
    fieldNames,
  } = toRefs(props);
  const emptyPolicy = useEmptyValues(props);
  const isValidSelection = (value: TreeNodeValue | LabelValue) =>
    !emptyPolicy.isEmpty(getKey(value));

  function normalizeValue(value: TreeSelectValue) {
    const validValue = (
      value == null ? [] : isArray(value) ? value : [value]
    ).filter(isValidSelection);

    return multiple?.value || treeCheckable?.value
      ? validValue
      : validValue.slice(0, 1);
  }

  function getLabelValues(
    value: (TreeNodeValue | LabelValue)[],
    originValue?: LabelValue[],
  ) {
    const res: LabelValue[] = [];
    const validValue = value ? value.filter(isValidSelection) : [];

    if (validValue.length) {
      const originValueMap = new Map<TreeNodeValue, LabelValue>();
      originValue?.forEach((item) => {
        originValueMap.set(item.value, item);
      });

      validValue.forEach((item) => {
        const key = getKey(item);
        const originValueItem = originValueMap.get(key);
        const node = key2TreeNode.value.get(key);
        let fallbackNodeData: TreeNodeData | null = null;
        const nodeDataTitle = (fieldNames?.value?.label || "label") as "label";

        if (!node) {
          const fallbackResult = isFunction(fallbackOption?.value)
            ? fallbackOption?.value(key)
            : fallbackOption?.value;

          if (fallbackResult === false) {
            return;
          }

          if (isObject(fallbackResult)) {
            fallbackNodeData = fallbackResult;
          }
        }

        res.push({
          ...(isLabelValue(item) ? item : {}),
          ...(originValueItem || {}),
          value: key,
          label:
            getLabel(item) ??
            node?.label ??
            originValueItem?.label ??
            fallbackNodeData?.[nodeDataTitle] ??
            key,
        });
      });
    }

    return res;
  }

  const computedModelValueKeys = ref<TreeNodeValue[]>();
  const computedModelValue = ref<LabelValue[]>();
  watchEffect(() => {
    const isControlled = modelValue?.value !== undefined;
    const normalizeModelValue = normalizeValue(modelValue?.value ?? []);
    const modelValueKeys = getKeys(normalizeModelValue, emptyPolicy.isEmpty);
    computedModelValue.value = isControlled
      ? getLabelValues(modelValueKeys, getLabelValues(normalizeModelValue))
      : undefined;
    computedModelValueKeys.value = isControlled ? modelValueKeys : undefined;
  });

  const normalizeDefaultValue = normalizeValue(defaultValue?.value ?? []);
  const defaultKeys = getKeys(normalizeDefaultValue, emptyPolicy.isEmpty);
  const defaultLabelValues = getLabelValues(
    defaultKeys,
    getLabelValues(normalizeDefaultValue),
  );
  const localValueKeys = ref(defaultKeys || []);
  const localValue = ref(defaultLabelValues);
  watch(localValueKeys, () => {
    localValue.value = getLabelValues(localValueKeys.value, defaultLabelValues);
  });
  watch([computedModelValueKeys, computedModelValue], ([valueKeys, value]) => {
    localValueKeys.value = valueKeys || [];
    localValue.value = value || [];
  });

  const selectedValues = computed(
    () => computedModelValueKeys.value ?? localValueKeys.value,
  );
  const selectedValue = computed(
    () => computedModelValue.value ?? localValue.value,
  );

  return {
    selectedValues,
    selectedValue,
    setLocalSelectedValues(keys: TreeNodeValue[]) {
      localValueKeys.value = keys;
    },
    localSelectedValues: localValueKeys,
    localSelectedValue: localValue,
  };
}
