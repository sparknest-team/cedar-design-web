import type { InjectionKey, Slots } from 'vue'
import type { TransferFixed, TransferItem, TransferTargetAction, TransferValue } from './types'

export interface TransferContext {
  selected: TransferValue[]
  slots: Slots
  moveTo: (values: TransferValue[], target: 'target' | 'source') => void
  onSelect: (value: TransferValue[]) => void
  onReorder: (items: TransferItem[], detail: { oldValue?: TransferItem; newValue?: TransferItem }) => void
  onFreeze: (value: TransferValue, fixed?: TransferFixed) => void
  onRename: (item: TransferItem) => void
  onTargetAction: (action: TransferTargetAction, item: TransferItem) => void
  targetActions: TransferTargetAction[]
}

export const transferInjectionKey: InjectionKey<TransferContext> = Symbol('CedarTransfer')
