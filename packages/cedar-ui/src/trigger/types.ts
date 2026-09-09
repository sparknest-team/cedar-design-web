import { TriggerPosition } from '../_utils/constant'

export type TriggerPopupTranslate = [number, number] | { [key in TriggerPosition]?: [number, number] }

export type TriggerProps = import('vue').ExtractPublicPropTypes<typeof import('./props').triggerProps>
