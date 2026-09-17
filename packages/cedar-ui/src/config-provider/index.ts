import { withInstall } from '../_utils/global-config'
import _ConfigProvider from './ConfigProvider.vue'
import { configProviderProps, cedarThemes } from './props'

const ConfigProvider = withInstall(_ConfigProvider, Object.assign(_ConfigProvider, {
}), { components: [_ConfigProvider] })

export type ConfigProviderInstance = InstanceType<typeof _ConfigProvider>
export type { ConfigProviderProps, CedarTheme } from './props'
export { ConfigProvider, configProviderProps, cedarThemes }
export const _ConfigProviderComponent = ConfigProvider

export default ConfigProvider
