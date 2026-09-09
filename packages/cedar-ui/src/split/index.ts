import { withInstall } from '../_utils/global-config'
import _Split from './split.vue'
import { splitProps } from './props'

const Split = withInstall(_Split, Object.assign(_Split, {
}), { components: [_Split] })

export type SplitInstance = InstanceType<typeof _Split>

export const _SplitComponent = Split

export { Split }

export { splitProps }

export default Split
export type SplitProps = import('vue').ExtractPublicPropTypes<typeof import('./props').splitProps>
