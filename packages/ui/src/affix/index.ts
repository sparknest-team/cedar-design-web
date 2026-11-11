import { withInstall } from '../_utils/global-config'
import _Affix from './Affix.vue'
import { affixProps } from './props'

const Affix = withInstall(_Affix, Object.assign(_Affix, {
}), { components: [_Affix] })

export type AffixInstance = InstanceType<typeof _Affix>
export type { AffixProps, AffixTarget } from './props'
export { Affix, affixProps }
export const _AffixComponent = Affix

export default Affix
