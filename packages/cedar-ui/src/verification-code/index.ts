import { withInstall } from '../_utils/global-config'
import _VerificationCode from './presentation'
import { verificationCodeProps } from './props'

const VerificationCode = withInstall(_VerificationCode, Object.assign(_VerificationCode, {}), {
  components: [_VerificationCode],
})

export type VerificationCodeInstance = InstanceType<typeof _VerificationCode> & import('./types').VerificationCodeExpose
export { VerificationCode, verificationCodeProps }
export type {
  VerificationCodeAlign,
  VerificationCodeType,
  VerificationCodeVariant,
  VerificationCodeFormatter,
  VerificationCodeProps,
  VerificationCodeSeparator,
} from './props'
export type { VerificationCodeEmits, VerificationCodeSlots, VerificationCodeExpose } from './types'
export const _VerificationCodeComponent = VerificationCode

export default VerificationCode
