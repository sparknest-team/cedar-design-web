import type { App, Component, Plugin } from 'vue'
import { getCurrentInstance, inject } from 'vue'
import { configProviderInjectionKey } from '../config-provider/context'
import type { CedarOptions } from './types'
import { createNamespaceFn } from '@cedar-design/shared-vue'
import { withPropsDefaultsSetter } from './maple/components'

const COMPONENT_PREFIX = 'C'
const CLASS_PREFIX = 'c'
const GLOBAL_CONFIG_NAME = '$cedar'

export const getComponentPrefix = (options?: CedarOptions) => {
  return options?.componentPrefix ?? COMPONENT_PREFIX
}

/**
 * Resolve the public registration name without duplicating Cedar's runtime
 * component prefix. Namespace-created components are already named `CButton`;
 * legacy components may still expose an unprefixed name such as `Button`.
 */
export const getComponentName = (
  options: CedarOptions | undefined,
  componentName: string | undefined,
) => {
  if (!componentName) {
    throw new Error('[Cedar] Component name is required for registration')
  }

  const baseName = componentName.startsWith(COMPONENT_PREFIX)
    ? componentName.slice(COMPONENT_PREFIX.length)
    : componentName

  return `${getComponentPrefix(options)}${baseName}`
}

export const setGlobalConfig = (app: App, options?: CedarOptions): void => {
  if (options && options.classPrefix) {
    app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
      ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
      classPrefix: options.classPrefix,
    }
  }
}

export type CedarComponentWithInstall<T> = T &
  Plugin & {
    setPropsDefaults: (defaults: Record<string, any>) => void
  }

export interface WithInstallOptions<InstallOptions = CedarOptions> {
  components?: Component[]
  resolveName?: (component: Component, options?: InstallOptions) => string | undefined
  setup?: (app: App, options?: InstallOptions) => void
}

/** Attach Vue's standard plugin installer while preserving Cedar prefixes. */
export function withInstall<T extends Component>(
  component: T,
  target?: undefined,
  config?: WithInstallOptions<CedarOptions>,
): CedarComponentWithInstall<T>
export function withInstall<T>(
  component: Component,
  target: T,
  config?: WithInstallOptions<CedarOptions>,
): CedarComponentWithInstall<T>
export function withInstall<T = Component>(
  component: Component,
  target?: T,
  config: WithInstallOptions<CedarOptions> = {},
): CedarComponentWithInstall<T> {
  const componentWithInstall = target ?? component
  const components = config.components ?? [component]

  withPropsDefaultsSetter(componentWithInstall, (component as any).props ?? {})
  for (const item of components) {
    if (item !== componentWithInstall) {
      withPropsDefaultsSetter(item, (item as any).props ?? {})
    }
  }

  ;(componentWithInstall as CedarComponentWithInstall<T>).install = (
    app: App,
    options?: CedarOptions,
  ) => {
    setGlobalConfig(app, options)
    for (const item of components) {
      const name = config.resolveName?.(item, options) ?? getComponentName(options, item.name)
      if (name) {
        app.component(name, item)
      }
    }
    config.setup?.(app, options)
  }

  return componentWithInstall as CedarComponentWithInstall<T>
}

const resolveClassPrefix = (): string => {
  const instance = getCurrentInstance()
  const configProvider = instance ? inject(configProviderInjectionKey, undefined) : undefined

  return (
    configProvider?.prefixCls ??
    instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]?.classPrefix ??
    CLASS_PREFIX
  )
}

export const getPrefixCls = (componentName?: string): string => {
  const prefix = resolveClassPrefix()
  if (componentName) {
    return `${prefix}-${componentName}`
  }
  return prefix
}

export const createNamespace = (componentName: string) => {
  // Component names are a compile-time public contract and must not depend on
  // the current component instance. Class names, however, must resolve lazily
  // so a namespace created at module scope can still honor ConfigProvider.
  const { name, classes } = createNamespaceFn(CLASS_PREFIX)(componentName)
  const n = (suffix?: string): string => {
    const prefix = resolveClassPrefix()
    const componentPrefix = `${prefix}-${componentName}`
    if (!suffix) return componentPrefix
    if (suffix.startsWith('$')) return suffix.replace('$', prefix)
    return suffix.startsWith('--')
      ? `${componentPrefix}${suffix}`
      : `${componentPrefix}__${suffix}`
  }

  return {
    name,
    get prefix() {
      return getPrefixCls(componentName)
    },
    get cssVarPrefix() {
      return `--${resolveClassPrefix()}-${componentName}`
    },
    n,
    classes,
  }
}

export function formatElevation(elevation: number | boolean | string | undefined, defaultLevel?: number) {
  if (elevation === false || elevation == null) {
    return null
  }

  const level = elevation === true ? (defaultLevel ?? 0) : Number(elevation)
  const normalized = Number.isFinite(level) ? Math.min(24, Math.max(0, Math.round(level))) : (defaultLevel ?? 0)
  return `${resolveClassPrefix()}-elevation--${normalized}`
}
