import { withInstall } from '../_utils/global-config'
import _VerificationCode from './verification-code'
import { verificationCodeProps } from './props'

const VerificationCode = withInstall(_VerificationCode, Object.assign(_VerificationCode, {
}), { components: [_VerificationCode] })

export type VerificationCodeInstance = InstanceType<typeof _VerificationCode>
export { VerificationCode, verificationCodeProps }
export type {
  VerificationCodeFormatter,
  VerificationCodeProps,
  VerificationCodeSeparator,
} from './props'
export const _VerificationCodeComponent = VerificationCode

export default VerificationCode
