import type { TriggerPresentationOptions } from '../trigger/presentation-options'
import type { TreeProps } from '../tree/types'

/** TreeSelect always supplies these Trigger props; popupContainer has no nested fallback in TreeSelect. */
export type TreeSelectTriggerOptions = TriggerPresentationOptions<
  'popupContainer' | 'closeOnClickReference' | 'autoFitTransformOrigin'
>

type OwnedTreeKey =
  | 'data' | 'checkStrictly' | 'checkedStrategy' | 'fieldNames' | 'multiple' | 'loadMore'
  | 'filterTreeNode' | 'size' | 'checkable' | 'selectable' | 'searchValue'
  | 'checkedValues' | 'selectedValues' | 'defaultCheckedValues' | 'defaultSelectedValues'
  | 'disableSelectActionOnly' | 'onSelect' | 'onCheck'
  | 'onUpdate:selectedValues' | 'onUpdate:checkedValues'

/** Optional typed tree presentation/expansion options. Data, selection, filtering and mode stay at the host. */
export type TreeSelectTreeOptions = Omit<Partial<TreeProps>, OwnedTreeKey> & Partial<Record<OwnedTreeKey, never>>
