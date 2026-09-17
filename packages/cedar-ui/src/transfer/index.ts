import { withInstall } from '../_utils/global-config'
import _Transfer from './Transfer.vue'
import { transferProps } from './props'

const Transfer = withInstall(_Transfer, Object.assign(_Transfer, {
}), { components: [_Transfer] })

export type TransferInstance = InstanceType<typeof _Transfer>
export type {
  TransferFilter,
  TransferFixed,
  TransferItem,
  TransferTargetAction,
  TransferTargetItem,
  TransferTargetOperation,
  TransferValue,
} from './types'

export const _TransferComponent = Transfer

export { Transfer }

export { transferProps }

export default Transfer
export type TransferProps = import('vue').ExtractPublicPropTypes<typeof import('./props').transferProps>
