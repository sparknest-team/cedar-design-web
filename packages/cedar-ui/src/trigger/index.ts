import { withInstall } from '../_utils/global-config'
import _Trigger from './trigger'
import { triggerProps } from './props'

const Trigger = withInstall(_Trigger, Object.assign(_Trigger, {
}), { components: [_Trigger] })

export interface TriggerExposed {
  resize: () => void
}

export type TriggerInstance = InstanceType<typeof _Trigger> & TriggerExposed
export type { TriggerEvent, TriggerPosition } from '../_utils/constant'
export type { TriggerProps, TriggerPopupTranslate } from './types'
export { Trigger }

export const _TriggerComponent = Trigger

export { triggerProps }

export default Trigger
