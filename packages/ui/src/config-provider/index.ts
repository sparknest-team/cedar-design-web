import { withInstall } from '../_utils/global-config'
import _ConfigProvider from './ConfigProvider.vue'
import { configProviderProps } from './props'

const ConfigProvider: import('../_utils/global-config').ComponentWithInstall<typeof _ConfigProvider> = withInstall(_ConfigProvider, Object.assign(_ConfigProvider, {
}), { components: [_ConfigProvider] })

export type ConfigProviderInstance = InstanceType<typeof _ConfigProvider>
export type { ConfigProviderProps } from './props'
export { ConfigProvider, configProviderProps }
export const _ConfigProviderComponent: typeof ConfigProvider = ConfigProvider

export default ConfigProvider

export type { ConfigProviderSlots } from './interfaces'
