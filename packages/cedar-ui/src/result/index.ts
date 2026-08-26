import { withInstall } from '../_utils/global-config'
import _Result from './result.vue'
import { resultProps } from './props'

const Result = withInstall(_Result, Object.assign(_Result, {
}), { components: [_Result] })

export type ResultInstance = InstanceType<typeof _Result>
export { resultProps }
export type { ResultProps, ResultStatus } from './props'
export { Result }
export const _ResultComponent = Result

export default Result
