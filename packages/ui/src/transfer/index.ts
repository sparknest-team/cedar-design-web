import { withInstall } from '../_utils/global-config'
import _Transfer from './presentation'
import { transferProps } from './props'

const Transfer: import('../_utils/global-config').ComponentWithInstall<typeof _Transfer> = withInstall(_Transfer, Object.assign(_Transfer, {}), { components: [_Transfer] })

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

export const _TransferComponent: typeof Transfer = Transfer

export { Transfer }

export { transferProps }

export default Transfer
export type TransferProps = import('../_utils/public-props').CompatiblePublicProps<typeof import('./props').transferProps>
