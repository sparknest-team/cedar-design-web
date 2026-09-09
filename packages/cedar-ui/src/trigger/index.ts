import { withInstall } from '../_utils/global-config'
import _Trigger from './trigger'
import { triggerProps } from './props'

const Trigger = withInstall(_Trigger, Object.assign(_Trigger, {
}), { components: [_Trigger] })

export interface TriggerExposed {
  setReference(reference?: import('./reference').Reference): void
  isTopLayer(event?: Event): boolean
  open(): void
  close(): void
  allowClose(): void
  focusReference(): void
  getReference(): import('./reference').TriggerElement | undefined
  resize: () => void
}

export type TriggerInstance = InstanceType<typeof _Trigger> & TriggerExposed
export type { TriggerPosition } from '../_utils/constant'
export type { TriggerEvent, TriggerPlacement } from './contract'
export type { Reference } from './reference'
export type { TriggerProps, TriggerPopupTranslate } from './types'
export { Trigger }

export const _TriggerComponent = Trigger

export { triggerProps }

export default Trigger
