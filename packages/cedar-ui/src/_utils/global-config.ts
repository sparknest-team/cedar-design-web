import type { App } from 'vue'
import { getCurrentInstance, inject } from 'vue'
import { configProviderInjectionKey } from '../config-provider/context'
import type { ArcoOptions } from './types'
import { createNamespaceFn } from '@maplejs/maple-shared'

const COMPONENT_PREFIX = 'C'
const CLASS_PREFIX = 'c'
const GLOBAL_CONFIG_NAME = '$cedar'

export const getComponentPrefix = (options?: ArcoOptions) => {
  return options?.componentPrefix ?? COMPONENT_PREFIX
}

export const setGlobalConfig = (app: App, options?: ArcoOptions): void => {
  if (options && options.classPrefix) {
    app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
      ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
      classPrefix: options.classPrefix,
    }
  }
}

export const getPrefixCls = (componentName?: string): string => {
  const instance = getCurrentInstance()
  const configProvider = inject(configProviderInjectionKey, undefined)

  const prefix =
    configProvider?.prefixCls ??
    instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]?.classPrefix ??
    CLASS_PREFIX
  if (componentName) {
    return `${prefix}-${componentName}`
  }
  return prefix
}

export const createNamespace = (componentName: string) => {
  const instance = getCurrentInstance()
  const configProvider = inject(configProviderInjectionKey, undefined)
  const prefix =
    configProvider?.prefixCls ??
    instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]?.classPrefix ??
    CLASS_PREFIX

  const createNamespace_ = createNamespaceFn(prefix)

  const compPrefix = getPrefixCls(componentName)

  // const createBEM = <S extends string | undefined = undefined>(
  //   suffix?: S,
  // ) => {
  //   if (!suffix) {
  //     return compPrefix as any
  //   }

  //   if (suffix[0] === '$') {
  //     return suffix.replace('$', prefix) as any
  //   }

  //   return `${compPrefix}${suffix}` as any
  // }

  const { name, n, classes } = createNamespace_(componentName)
  const cssVarPrefix = `--${prefix}-${componentName}`
  return {
    name,
    prefix: compPrefix,
    cssVarPrefix,
    n,
    classes,
  }
}

export function formatElevation(elevation: number | boolean | string, defaultLevel?: number) {
  if (elevation === false) {
    return null
  }

  if (elevation === true && defaultLevel) {
    elevation = defaultLevel
  }
  const instance = getCurrentInstance()
  const configProvider = inject(configProviderInjectionKey, undefined)

  const prefix =
    configProvider?.prefixCls ??
    instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]?.classPrefix ??
    CLASS_PREFIX
  return `${prefix}-elevation--${elevation}`
}

