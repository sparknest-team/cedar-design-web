import { withInstall } from '../_utils/global-config'
import _Result from './Result.vue'
import { resultProps } from './props'

const Result: import('../_utils/global-config').ComponentWithInstall<typeof _Result> = withInstall(_Result, Object.assign(_Result, {
}), { components: [_Result] })

export type ResultInstance = InstanceType<typeof _Result>
export { resultProps }
export type { ResultProps, ResultStatus } from './props'
export { Result }
export const _ResultComponent: typeof Result = Result

export default Result
